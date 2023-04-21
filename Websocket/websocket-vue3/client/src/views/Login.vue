<template>
  <div id="app">
    <div class="login">
      <h2>登录</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>用户名:</label>
          <input type="text" v-model="username" placeholder="输入用户名" required>
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const username = ref('');
const router = useRouter();

onMounted(() => {
  if (localStorage.getItem('username')){
    router.push('/chat');
  }
});

const login = () => {
  const _username = username.value.trim();
  if (!_username) {
    return;
  }
  localStorage.setItem('username', _username);
  router.push('/chat');
}
</script>


<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 80%;
}

label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}

button[type="submit"] {
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #007aff;
  color: #fff;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0051a3;
}
</style>