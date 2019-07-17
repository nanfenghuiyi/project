<template>
  <div class="container">
    <!-- 顶部导航条 -->
    <titlebar :leftImg="require('../assets/ret.png')" centerTitle="分类" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    <!-- 主体内容 -->
    <div class="cont-item">
      <a href="" class="itemimg">
        <img src="../assets/product/product01.jpg" alt="">
        <h3 class="itemdiv">暖心蛋糕</h3>
      </a>
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
    myret(){console.log("返回上页面")},
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
  .cont-item{
    margin-top: 50px;
  }
  .itemimg{
    /* position: relative; */
  }
  .itemimg img{
    margin: 15px auto;
    width: 90%;
    height: 250px;
  }
  .itemimg h3{
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
</style>
