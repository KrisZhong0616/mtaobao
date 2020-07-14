import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Shopcart from '../views/shopcart/Shopcart'
import Profile from '../views/profile/Profile'
import Detail from '../views/detail/Detail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ]
})

export default router
