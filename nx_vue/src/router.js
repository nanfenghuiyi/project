import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import product from './views/product.vue'
import recom from './views/recommend.vue'
import shop from './views/shop.vue'
import user from './views/user.vue'

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
      component: recom
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/user',
      component: user
    }
  ]
})
