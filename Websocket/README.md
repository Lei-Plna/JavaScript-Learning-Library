# WebSocket

## Introduction

​	WebSocket is a protocol for real-time, two-way  communication between a client and a server. Based on the TCP protocol.

​	Before We learn how to build the WebSocket environment, we need to figure out the steps to establish a WebSocket connection:

1. The client sends a HTTP request to the server, with the header about "connection: Upgrade" and "Upgrade: websocket" and some headers about WebSocket to told the server switch the protocol to websocket.

 	2. The server receives the request and sends a HTTP response to the client, indicating that the protocol has been upgraded to WebSocket.
 	3. Once the connection is established, the client and server can exchange data in real-time using the WebSocket protocol.
 	4. And the connection would be persistent with the heartbeat.