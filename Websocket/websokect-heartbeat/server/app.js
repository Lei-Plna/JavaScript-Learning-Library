const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8000 });

server.on('connection', handleConnection);

function handleConnection(ws) {
  console.log('---Server is Connected---');
  ws.on('message', handleMessage);
  ws.on('close', handleClose);
  ws.on('error', handleError);
}

/**
 * data structure
 * {
 *  mode: 'MESSAGE',
 *  msg: 'Hello World'
 * }
 */
function handleMessage(data) {
  console.log('received the message:', JSON.parse(data));
  data = JSON.parse(data);
  
  // strategy pattern
  switch(data.mode) {
    case 'MESSAGE':
      console.log('---Common Msg---');
      this.send(JSON.stringify(data));
      break;
    case 'HEARTBEAT':
      console.log('---Heartbeat Msg---');
      this.send(JSON.stringify(data));
      break;
  }
}

function handleClose() {
  console.log('---Server is Disconnected---');

  // send to all clients
  this.send(JSON.stringify({
    mode: 'MESSAGE',
    msg: 'Server is Disconnected'
  }));
}

function handleError() {
  console.log('---Server is Error---');
}