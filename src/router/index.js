import { createRouter, createWebHistory } from 'vue-router'
import TCGP_Prices from '../views/TCGP_Prices.vue'
import Calendar from '../views/Calendar.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tcgp-prices',
    name: 'TCGP_Prices',
    component: TCGP_Prices
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/.vuepress',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
