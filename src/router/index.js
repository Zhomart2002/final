import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Items from '@/views/Items.vue'
import Item from '@/views/Item.vue'
import About from '@/views/About.vue'
import Basket from '@/views/Basket.vue'
import Favorite from '@/views/Favorite.vue'
import FeedBack from '@/views/FeedBack.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/items/:id',
    component: Items
  },
  {
    path: '/items/:id/:itemId',
    component: Item
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/feedback',
    component: FeedBack
  },
  {
    path: '/basket',
    component: Basket
  },
  {
    path: '/favorite',
    component: Favorite
  },
  {
    path: '/contact',
    component: Contact
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
