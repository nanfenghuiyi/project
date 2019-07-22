import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import product from './views/product.vue'
import recommend from './views/recommend.vue'
import shop from './views/shop.vue'
import user from './views/user.vue'
import details from './views/details.vue'
import product_details from './views/product_details.vue'
import login from './views/login.vue'
import reg from './views/reg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/details',
      component: details
    },
    {
      path: '/product_details',
      component: product_details
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/reg',
      component: reg
    },
    
  ]
})
