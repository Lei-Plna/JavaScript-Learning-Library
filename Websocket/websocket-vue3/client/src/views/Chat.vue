<template>
  <div id="app">
    <div class="chat">
      <div class="messages">
        <div class="message other">
          <div class="username">其他用户</div>
          <div class="message-content">
            <p>其他用户的聊天信息</p>
            <span class="time">9:30 AM</span>
          </div>
        </div>
      </div>
      <form class="send-message">
        <input type="text" placeholder="输入消息...">
        <button type="submit">发送</button>
      </form>
    </div>
  </div>
</template>


<script setup>
import { reactive, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const username = ref('');
const messageList = reactive([]);

onMounted(() => {
  const _username = localStorage.getItem('username');
  if (!_username) {
    router.push('/login');
  }
  username.value = _username;
});

</script>


<style scoped>
* {
  box-sizing: border-box;
  font-family: sans-serif;
}

.chat {
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 30px;
}

.messages {
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
}

.message {
  margin-bottom: 10px;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  max-width: 40%;
  word-wrap: break-word;
}

.other {
  margin-left: 10px;
  background-color: #ccc;
}

.self {
  margin-left: auto;
  background-color: #007bff;
}

.message:before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
}

.other:before {
  border-width: 10px 10px 10px 0;
  border-color: transparent #ccc transparent transparent;
  left: -10px;
}

.self:before {
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #007bff;
  right: -10px;
}

.username {
  font-size: 0.8rem;
  text-align: center;
  color: #aaa;
  margin-bottom: 5px;
}

.send-message {
  display: flex;
  padding: 20px;
  background-color: #f2f2f2;
  border-top: 1px solid #ccc;
}

.send-message input[type="text"] {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
}

.send-message button[type="submit"] {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;
}
</style>