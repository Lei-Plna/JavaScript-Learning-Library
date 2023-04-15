# Heartbeats

​	A heartbeat is a periodic message sent by a client or server to keep a WebSocket connection alive. It's essentially a small message that confirms that the connection is still active and ensures that the WebSocket connection remains open, even if there is no data being transmitted.

## Server

​	Based on express. Simply build the WebSocket backend environment.

​	✨ yarn / npm install - install dependences

​	✨ yarn dev - start server

## Client

​	Based on Vue3.x. Using Class Ws extends the Class WebSocket and finish some WebSocket Apis. Such as reconnect、handleMessage and so on.

​	✨ yarn / npm install - install dependences

​	✨ yarn dev - start client