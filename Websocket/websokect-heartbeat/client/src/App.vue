<template>
  <div>
    <button @click="sendMsg">Send Msg</button>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import Ws from './Ws';

  let ws = null;

  function wsConnect() {
    ws = Ws.create("ws://localhost:8000", wsReconnect);
  }

  function wsReconnect() {
    if (!ws) {
      return wsConnect();
    }

    if (ws && ws.reconnectingTimer) {
      clearTimeout(ws.reconnectingTimer);
      ws.reconnectingTimer = null;
      wsConnect();
    }
  }

  const sendMsg = () => {
    if (ws) {
      ws.sendMsg({
        mode: 'MESSAGE',
        msg: 'Hello Ws'
      });
    }
  }

  onMounted(() => {
    wsConnect();
  });
</script>

<style scoped></style>

