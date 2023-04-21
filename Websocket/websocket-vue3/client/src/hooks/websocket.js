import { WEB_SOCKET_URL } from '../configs';
const defaultHandleMessage = ({ data }) => {
  console.log('WebSocket is received', data);
}
function useWebSocket(handleMessage = defaultHandleMessage) {
  
  const socket = new WebSocket(WEB_SOCKET_URL);

  const init = () => {
    bindEvent();
  }

  init();

  return socket;

  function bindEvent() {
    socket.addEventListener('open', handleOpen, false);
    socket.addEventListener('message', handleMessage, false);
    socket.addEventListener('err', handleError, false);
    socket.addEventListener('close', handleClose, false);
  }

  function handleOpen() {
    console.log('WebSocket is connected');
  }

  function handleError(e) {
    console.log('WebSocket is error', e);
  }

  function handleClose() {
    console.log('WebSocket is closed');
  }
}

export default useWebSocket;