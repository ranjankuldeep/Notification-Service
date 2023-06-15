# Notification-Service
This is a short demonstration of a horizontally scaled websocket application. It uses redis as a pub/sub to push notification into which will be recived by all clients connected to websocket server. Multiple instances of websocket server is created and nginx act as reverse proxy here whihc establishes tcp connection between clients and  server.
