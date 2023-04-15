let MESSAGE_MODE = {
  MESSAGE: 'MESSAGE',
  HEARTBEAT: 'HEARTBEAT'
}
class Ws extends WebSocket {
  constructor(url, wsReconnect) {
    super(url);
    this.wsUrl = url;
    this.heartbeatTimer = null;
    this.reconnectingTimer = null;
    this.wsReconnect = wsReconnect;
    this.init();
  }

  init() {
    this.bindEvent();
  }

  bindEvent() {
    this.addEventListener('open', this.handleOpen.bind(this), false);
    this.addEventListener('close', this.handleClose.bind(this), false);
    this.addEventListener('message', this.handleMessage.bind(this), false);
    this.addEventListener('error', this.handleError.bind(this), false);
  }

  handleOpen() {
    console.log('------Client connected to server------');
    this.startHeartbeat();
  }

  handleError(err) {
    console.log('------Client occurred error------', err);
  }
  handleMessage({ data }) {
    console.log('------Client received message------');
    const { mode, msg } = this.receiveMsg(data);
    switch(mode) {
      case MESSAGE_MODE.MESSAGE:
        console.log('---Common Msg---');
        break;
      case MESSAGE_MODE.HEARTBEAT:
        console.log('---Heartbeat Msg---');
        break;
      default:
        break;
    }
  }
  
  handleClose() {
    console.log('------Client disconnected from server------');
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    if (this.reconnectingTimer) {
      clearTimeout(this.reconnectingTimer);
      this.reconnectingTimer = null;
    }

    this.reconnect();
  }

  reconnect() {
    return new Promise((resolve, reject) => {
      this.reconnectingTimer = setTimeout(() => {
        this.wsReconnect();
      }, 3000);
    });
  }

  receiveMsg(data) {
    return JSON.parse(data);
  }

  sendMsg(data) {
    // this.readyState === 1 means the connection is open
    // this.readyState === 0 means the connection is connecting
    // this.readyState === 2 means the connection is closing
    // this.readyState === 3 means the connection is closed
    this.readyState === 1 && this.send(JSON.stringify(data));
  }

  waitForResponse() {
    setTimeout(() => {
      if (this.readyState === 1) {
        !this.heartbeatTimer && this.startHeartbeat();
      }
      // simulate close the WebSocket connection
      try {
        this.close();
      } catch (err) {
        console.log("------Client is closed------");
      }
    }, this.hbInterval || 4 * 1000);
  }

  startHeartbeat() {
    this.heartbeatTimer = setInterval(() => {
      this.sendMsg({
        mode: 'HEARTBEAT',
        msg: 'Heartbeat'
      });

      this.waitForResponse();
    }, this.hbInterval || 4 * 1000);
  }
  static create(url, wsReconnect) {
    return new Ws(url, wsReconnect);
  }
}

export default Ws;