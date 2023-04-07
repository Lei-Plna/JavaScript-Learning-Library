# Introduction
​	✨	Before we using the WebSocket, how we keep the state of the client and server? 
​	✨	As we know the http protocol is a stateless protocol, so we need to keep the state of the client and server. The most common way is using asynchronous-polling.

​	✨	Sending the request 2 seconds every time, and the server will response the client with the state of the server. 
​	✨	But this way is not efficient, because the server will send the same data to the client every time. 
​	✨	By the way, server dose not know when the client will send request, also client doesn't know the server's.

# Basement
  Vite、Express、nodemon

# client design
  1. The page for sending message
  2. The page for receiving message

# server design
  1. create a stack to store the message
  2. create a router to receive the message
  3. create a router to send the message