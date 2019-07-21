<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div>
      <titlebar :leftImg="require('../assets/ret.png')" centerTitle="分类" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    </div>
    <div class="product_details">
      <div class="product-cont">
        <div class="productImg">
          <img src="../assets/index/1.jpg" alt="">
        </div>
        <div class="title">title</div>
        <span class="sprice">sprice</span>
      </div>
      <div class="product-cont">
        <div class="productImg">
          <img src="../assets/index/1.jpg" alt="">
        </div>
        <div class="title">title</div>
        <span class="sprice">sprice</span>
      </div>
    </div>
  </div>
</template>

<script>
import titlebar from "../components/coms/TitleBar";

export default {
  data () {
    return {}
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
.product_details{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product-cont{
  width: 170px;
}
.productImg{
  width: 100% ;
}
</style>
