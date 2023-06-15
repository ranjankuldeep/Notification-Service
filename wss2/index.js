import Express from "express";
import expressWs from "express-ws";
import redis from "redis";
import cors from "cors";

const ws = expressWs(Express());
const app = ws.app;
const port = 8003;

app.use(cors());
const aWss = ws.getWss("/");

(async () => {
	const client = redis.createClient();
	await client.connect();

	const subscriber = client.duplicate();
	await subscriber.connect();

	await subscriber.subscribe(
		"notification",
		(message, channel) => {
			aWss.clients.forEach(function (client) {
				client.send("Notification sent from port " + port);
			});
		},
		true
	);
})();
app.ws("/ws", function (ws, req) {
	console.log("Received a request on port " + port);
});

app.listen(port, (err) => {
	console.log("Listening on port " + port);
});
