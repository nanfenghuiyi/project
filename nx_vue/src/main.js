import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue'
import router from './router'
import store from './store'
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
import vuex from "vuex";
//注册vuex组件 
Vue.use(vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
