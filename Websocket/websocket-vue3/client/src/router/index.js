import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';

// routers array
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/Chat.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;