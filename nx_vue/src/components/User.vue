<template>
  <div class="user-container">
    <!-- 顶部登录 -->
    <div class="user-top" v-show="inLogin">
      <div class="use-img">
        <img src="../assets/user/登录.png" alt="">
      </div>
      <div class="user-login">
        <router-link :to="{path:'login'}" class="login">登录</router-link>
        <router-link :to="{path:'reg'}" class="reg">注册</router-link>
      </div>
    </div>
    <!-- 顶部退出登录 -->
    <div class="user-top" v-show="outLogin">
      <div class="use-img">
        <img src="../assets/user/登录.png" alt="">
      </div>
      <div class="user-login">
        <div  @click="out" class="outLogin">退出登录</div>
      </div>
    </div>
    <!-- 订单信息 -->
    <div class="order">
      <a href="javascript:;" class="order-my">
        <div class="leftdiv">我的订单</div>
        <div class="rightdiv">
          全都订单
          <img src="../assets/user/xiayiye.png" alt="">
        </div>
      </a>
      <div class="order-details">
        <div class="orderImgl">
          <img src="../assets/user/daifukuan.png" alt="">
          待付款
        </div>
        <div class="orderImgc">
          <img src="../assets/user/待发货.png" alt="">
          待发货
        </div>
        <div class="orderImgr">
          <img src="../assets/user/daishouhuo.png" alt="">
          待收货
        </div>
      </div>
    </div>
    <!-- 其他工具 -->
    <a href="javascript:;" class="order-my order-div">
      <div class="leftdiv">在线客服</div>
      <div class="rightdiv">
        <img src="../assets/user/xiayiye.png" alt="">
      </div>
    </a>
    <a href="javascript:;" class="order-my order-div">
      <div class="leftdiv">生日助手</div>
      <div class="rightdiv">
        <img src="../assets/user/xiayiye.png" alt="">
      </div>
    </a>
    <a href="javascript:;" class="order-my order-div">
      <div class="leftdiv">收货地址管理</div>
      <div class="rightdiv">
        <img src="../assets/user/xiayiye.png" alt="">
      </div>
    </a>
    <a href="javascript:;" class="order-my order-div">
      <div class="leftdiv">关于发票</div>
      <div class="rightdiv">
        <img src="../assets/user/xiayiye.png" alt="">
      </div>
    </a>
    <a href="javascript:;" class="order-my">
      <div class="leftdiv">意见与反馈</div>
      <div class="rightdiv">
        <img src="../assets/user/xiayiye.png" alt="">
      </div>
    </a>
    <a href="javascript:;" class="order-my">
      <div class="leftdiv">设置</div>
      <div class="rightdiv">
        <img src="../assets/user/xiayiye.png" alt="">
      </div>
    </a>
    <a href="javascript:;" class="order-my">
      <div class="leftdiv">关于</div>
      <div class="rightdiv">
        <img src="../assets/user/xiayiye.png" alt="">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  inject:['reload'],
  data(){
    return {
      inLogin:true,
      outLogin:false
    }
  },
  methods:{
    loadMore(){
      if(this.$store.state.isLogin){
        this.outLogin=true;
        this.inLogin=false;
      }
      // console.log(this.$store.state.isLogin)
    },
    out(){
      // console.log(123)
      var storage = window.localStorage;
      storage.clear()
      this.$store.state.isLogin=false;
      //重新加载
      this.reload()
    }
  },
  created(){
    this.loadMore()
  },
}
</script>

<style scoped>
/*最外层元素*/
.user-container{
  text-align: center;
  background: #f5f5f5;
}
/*a清除格式*/
a{
  color: #2c3e50;
  text-decoration: none;
}
/*顶部用户*/
.user-top{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#FDCCDA;
  height: 90px;
}
.use-img{
  margin-left: 20px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
}
.use-img img{
  margin-top: 10px;
  width: 30px;
  height: 30px;
}
.login,.reg{
  border: 1px solid #d6ae7b;
  border-radius: 8px;
  width: 55px;
  height: 35px;
  line-height: 35px;
  margin: 0 5px;
  color: #fff;
}
.login{
  background: #d6ae7b;
}
.user-login{
  margin-left: 10px;
  display: flex;
  justify-content: left;
}
.outLogin{
  width: 100px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #d6ae7b;
  border-radius: 8px;
  background: #f50;
  color: #fff;
}
/* 订单信息 */
.order-my{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
.leftdiv{
  margin-left: 20px;
}
.rightdiv{
  display: flex;
  align-items: center;
}
.rightdiv img{
  width: 35px;
}
/*订单状态*/
.order-details{
  display: flex;
  justify-content: space-around;
  background: #fff;
  margin-bottom: 10px;
}
.order-details img{
  width: 30px;
  height: 30px;
}
.orderImgl img,.orderImgc img,.orderImgr img{
  display: flex;
  margin: 30px auto 15px;
  flex-wrap: wrap-reverse;
}
/*其他工具*/
.order-div{
  margin: 15px 0;
}
</style>
