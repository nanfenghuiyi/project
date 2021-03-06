import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
//1：完整引入mint-ui
import MintUI from 'mint-ui';
//2：单引mint-ui样式
import 'mint-ui/lib/style.css';
//将mint-ui注册vue
Vue.use(MintUI);
Vue.use(VueAwesomeSwiper)
//引入图标的样式文件
import "./font/iconfont.css";
//引入axios.js文件
import axios from "./axios.js";
//引入vuex
import Vuex from "vuex";
//引入全局提示框
import iView from 'iview'
// import 'iview/dist/styles/iview.css';
//注册iView组件
Vue.use(iView)

//注册vuex组件 
Vue.use(Vuex)

//引入物理返回键操作
import exit from "./exit"; //监听返回

//8：创建store

//验证登录
router.beforeEach((to,from,next)=>{
  //获取用户登录成功后储存的登录标志
  let getFlag=localStorage.getItem("Flag");
  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag==="isLogin"){
    //设置vuex登录状态为已登录
    store.state.isLogin=true
    next()
    //如果已登录，还想进入登录注册界面，则定向回首页
    /* if(!to.meta.isLogin){
      //友好提示
      iView.Message.error('请先退出登录')
      next({
        path:'/'
      })
    } */
  }else{//如果登录标志不存在，即未登录
    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      next({
        path:'login'
      })
      //友好提醒
      iView.Message.info('请先登录')
    }else{//进入无需登录的界面，则跳转继续
      next()
    }
  }
});
router.afterEach(route=>{
  window.scroll(0,0)
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
