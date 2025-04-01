import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './Dynamic Routing/HomePage.vue'
import BlogPost from './Dynamic Routing/BlogpostPage.vue'
import UserProfile from './Dynamic Routing/UserprofilePage.vue'

const routes = [
  { path: '/', component: HomePage },
  // Dynamic route for blog posts
  { path: '/post/:postId', component: BlogPost, name: 'post' },
  // Dynamic route for user profiles with optional slug
  { path: '/user/:userId/:username?', component: UserProfile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router