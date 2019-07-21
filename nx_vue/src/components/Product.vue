<template>
  <div class="container">
    <!-- 顶部导航条 -->
    <titlebar :leftImg="require('../assets/ret.png')" centerTitle="分类" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    <!-- 主体内容 -->
    <div class="cont-item">
      <router-link :to="{path:'product_details'}" class="itemimg">
        <img src="../assets/product/product01.jpg" alt="">
        <h3 class="itemdiv">暖心蛋糕</h3>
      </router-link>
      <router-link :to="{path:'product_details'}" class="itemimg">
        <img src="../assets/product/product01.jpg" alt="">
        <h3 class="itemdiv itemtop1">暖心蛋糕</h3>
      </router-link>
      <router-link :to="{path:'product_details'}" class="itemimg">
        <img src="../assets/product/product01.jpg" alt="">
        <h3 class="itemdiv itemtop2">暖心蛋糕</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
//引入titlebar
import titlebar from "../components/coms/TitleBar";

export default {
  data(){
    return{}
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
  },
  components:{
    titlebar
  }
}
</script>

<style scoped>
  .container{
    background: #ddd;
  }
  .cont-item{
    text-align: center;
    margin-top: 50px;
  }
  .itemimg img{
    margin-top: 15px;
    width: 90%;
    height: 250px;
  }
  .itemdiv{
    width: 200px;
    height: 40px;
    line-height: 40px;
    color: #FB7296;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid red;
    border-radius: 10px;
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translateX(-100px)
  }
  .itemtop1{
    top:51%;
  }
  .itemtop2{
    top:84%;
  }
</style>
