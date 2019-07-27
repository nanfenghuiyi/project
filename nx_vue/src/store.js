import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //设置属性
    isLogin:false,
  },
  //获取属性状态
  getters:{
    //获取登录状态
    isLogin:state=>state.isLogin
  },
  //设置属性状态
  mutations: {
    //保存登录状态
    userStatus(state,flag){
      state.isLogin=flag
    }
    //清除登录状态
    
  },
  //应用mutations
  actions: {
    userLogin({commit},flag){
      commit("userStatus",flag)
    }
  }
})
