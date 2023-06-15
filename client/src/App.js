import React, { useState, useEffect } from "react";
function App() {
	const [notifications, setNotifications] = useState(0);
	var ws = new WebSocket("ws://localhost:80/ws");
	useEffect(() => {
		ws.onmessage = (message) => {
			console.log(`Message from server: ${message.data}`);
			setNotifications((notifications) => notifications + 1);
		};
	}, []);

	return <div>The number of notification recived are {notifications} </div>;
}

export default App;
