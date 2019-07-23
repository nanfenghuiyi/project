import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //vuex中全局共享的数据
    cartCount:0,
    //设置属性
    isLogin:false,
  },
  //获取vuex中全局共享的数据
  //获取属性状态
  getters:{
    getCartCount:function (state) {
      return state.cartCount;
    },
    //获取登录状态
    isLogin:state=>state.isLogin
  },
  //设置属性状态
  mutations: {
    //修改vuex中全局共享的数据
    increment(state){
      state.cartCount++;
    },
    //购物车数量增加指定值
    updateCount(state,c){
      state.cartCount+=c
    },
    //保存登录状态
    userStatus(state,flag){
      state.isLogin=flag
    }
  },
  //应用mutations
  actions: {
    userLogin({commit},flag){
      commit("userStatus",flag)
    }
  }
})
