<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div>
      <titlebar :leftImg="require('../assets/ret.png')" centerTitle="注册" :search="mysearch" :ret="myret"></titlebar>
    </div>
    <!-- 内容部分 -->
    <div class="reg-container">
      <div class="reg-input">
        账号
        <input type="text" placeholder="手机号" v-model="phone">
      </div>
      <div class="reg-input">
        密码
        <input type="password" placeholder="密码" v-model="upwd">
      </div>
      <mt-button class="btn-reg" @click="reg()">立即注册</mt-button>
    </div>
  </div>
</template>

<script>
import titlebar from "../components/coms/TitleBar";

export default {
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
    reg(){
      var phone=this.phone;
      var upwd=this.upwd;
      //创建正则表达式
      var reg1=/^[1][0-9]{10}$/;
      var reg2=/^\w{6,20}$/i;
      //验证
      if(!reg1.test(phone)){
        this.$toast("手机格式错误");
        return;
      };
      if(!reg2.test(upwd)){
        this.$toast("密码格式错误")
      };
      //发送ajax请求
      var url="reg";
      var obj={phone,upwd};
      this.axios.get(url,{params:obj})
      .then(result=>{
        console.log(result)
        if(result.data.code > 0){
          this.$toast(result.data.msg);
          this.$router.push("login");
        }else{
          this.$messagebox("提示","账号已存在");
          this.$router.go(0);
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
.reg-container{
  margin-top: 60px;
  padding: 10px 20px;
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
}
/*input样式*/
.reg-input{
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
.reg-input input{
  margin-left: 20px;
  border: 0;
}
input:focus{
  outline: none;
}
.btn-reg{
  width: 100%;
  margin-top: 10px;
  color: #fff;
  border-radius: 10px;
  background: #FDCCDA;
}
</style>
