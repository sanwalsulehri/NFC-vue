import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccoutnSetting from '../views/AccoutnSetting.vue'
import Discover from '../views/Discover.vue'
import English from '../views/English.vue'
import Faq from '../views/Faq.vue'
import Modals from '../views/Modals.vue'
import MyProducts from '../views/MyProducts.vue'
import MyProducts2 from '../views/MyProducts2.vue'
import SignUp from '../views/SignUp.vue'
import Signin from '../views/Signin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/accountSetting',
      name: 'Account - Setting',
      component: AccoutnSetting
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/english',
      name: 'English',
      component: English
    },
    {
      path: '/Faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/modals',
      name: 'Modals',
      component: Modals
    },
    {
      path: '/MyProducts',
      name: 'MyProducts',
      component: MyProducts
    },
    {
      path: '/MyProducts2',
      name: 'MyProducts2',
      component: MyProducts2
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
  ]
})

export default router 