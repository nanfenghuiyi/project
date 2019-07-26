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
      component: Home,
      meta:{isLogin:false}
    },
    {
      path: '/product',
      component: product,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/recommend',
      component: recommend,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/shop',
      component: shop, meta: {
        isLogin: true
      }
    },
    {
      path: '/user',
      component: user,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/details',
      component: details,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/product_details',
      component: product_details,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/reg',
      component: reg,
      meta: {
        isLogin: false
      }
    },
    
  ]
})
