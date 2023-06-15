import Express from "express";
import cors from "cors";
import redis from "redis";

const app = Express();
const port = 8005;

app.use(cors());

const publisher = redis.createClient({
	port: 6379,
	host: "rdb",
});
publisher.connect().then(() => {
	const publishOnChannel = async (channel, message) => {
		await publisher.publish(channel, message);
	};

	app.get("/", (req, res) => {
		publishOnChannel("notification", "Notification sent").then(() =>
			res.status(200).json({ Response: "Success" })
		);
	});
});

app.listen(port, (err) => {
	console.log("Listening on port " + port);
});
