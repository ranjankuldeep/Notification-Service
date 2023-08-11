# Notification-Service
This is a short demonstration of a horizontally scaled web socket application. It uses Redis as a pub/sub to push notifications into which will be received by all clients connected to the web socket server. Multiple instances of webSocket server is created and nginx act as reverse proxy here whihc establishes tcp connection between clients and  server.
