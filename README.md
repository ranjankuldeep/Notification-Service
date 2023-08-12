# Notification-Service
This is a short demonstration of a horizontally scaled web socket application. It uses Redis as a pub/sub to push notifications into which will be received by all clients connected to the web socket server. Multiple instances of WebSocket server are spun up and nginx act as a reverse proxy here which establishes a TCP connection between clients and  server.

