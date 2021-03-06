import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import CreatePost from "../views/CreatePost.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
