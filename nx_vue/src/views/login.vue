<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div>
      <titlebar :leftImg="require('../assets/ret.png')" centerTitle="登录" :search="mysearch" :ret="myret"></titlebar>
    </div>
    <!-- 内容部分 -->
    <div class="login-container">
      <div class="login-input">
        账号
        <input type="text" placeholder="手机号 / 邮箱地址" v-model="phone">
      </div>
      <div class="login-input">
        密码
        <input type="password" placeholder="密码" v-model="upwd">
      </div>
      <mt-button class="btn-login" @click="login">登录</mt-button>
    </div>
    <div class="login-right">忘记密码？</div>
    <div class="reg-center">
      <router-link :to="{path:'reg'}">
        <mt-button class="btn-reg">注册</mt-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import titlebar from "../components/coms/TitleBar";

export default {
  inject:['reload'],
  data () {
    return {
      phone:"",
      upwd:""
    }
  },
  methods:{
    mysearch(){console.log("搜索")},
    myret(){
      console.log("返回上页面")
      if(window.history.length<=1){
        this.$router.push({path:'/'});
        return false;
      }else {
        this.$router.go(-1)
      }
    },
    login(){
      var phone=this.phone;
      var upwd=this.upwd;
      //创建正则表达式
      var reg1=/^[1][0-9]{10}$/;
      var reg2=/^\w{6,20}$/i;
      //验证
      if(!reg1.test(phone)){
        this.$toast("手机号码格式错误");
        return;
      };
      if(!reg2.test(upwd)){
        this.$toast("密码格式错误");
        return;
      };
      //发送ajax请求
      var url="login";
      var obj={phone,upwd};
      this.axios.get(url,{params:obj})
      .then(result=>{
        if(result.data.code>0){
          //设置Vuex登录标志为true，默认userLogin为false
          this.$store.dispatch("userLogin", true);
          //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
          localStorage.setItem("Flag", "isLogin");
          //登录状态提示
          this.$toast(result.data.msg);
          this.$router.go(-1)
        }else{
          this.$messagebox("提示","手机号码或者密码有误")
          //重新加载
          this.reload()
        }
      })
    }
  },
  components:{
    titlebar
  }
}
</script>

<style scoped>
.container{
  background: #fff;
}
.login-container{
  margin-top: 60px;
  padding: 10px 20px;
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
}
/*input样式*/
.login-input{
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
.login-input input{
  margin-left: 20px;
  border: 0;
}
input:focus{
  outline: none;
}
.btn-login{
  width: 100%;
  margin-top: 10px;
  color: #fff;
  border-radius: 10px;
  background: #FDCCDA;
}
/*其他样式*/
.login-right{
  margin-top: 20px;
  margin-right: 20px;
  float: right;
}
.reg-center{
  clear: both;
  text-align: center;
}
.btn-reg{
  margin-top: 30px;
  width: 150px;
  border:1px solid red; 
  border-radius: 10px;  
  color: red;
}
</style>
