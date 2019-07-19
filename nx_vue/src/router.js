import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import product from './views/product.vue'
import recommend from './views/recommend.vue'
import shop from './views/shop.vue'
import user from './views/user.vue'
import details from './views/details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name:Home,
      component: Home
    },
    {
      path: '/product',
      // name:product,
      component: product
    },
    {
      path: '/recommend',
      // name:recommend,
      component: recommend
    },
    {
      path: '/shop',
      // name:shop,
      component: shop
    },
    {
      path: '/user',
      // name:user,
      component: user
    },
    {
      path: '/details',
      // name: 'details',
      component: details
    },
    
  ]
})
