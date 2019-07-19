<template>
  <div>
    <!-- 顶部导航条 -->
    <titlebar :leftImg="require('../assets/ret.png')" centerTitle="购物车" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    <div class="cart">
      <!-- 全选 -->
      <div class="selectAll">
        全选
        <input type="checkbox" @change="selectAll">
      </div>
      <!-- 商品列表 -->
      <div class="cart-item">
        <div class="leftImgText">
          <input type="checkbox">
          <img src="../assets/nx_detail_normal.png" alt="">
          <div class="title">介绍</div>
          <div class="price">
            <span>价格</span>
          </div>
        </div>
        <button>删除</button>
      </div>
      <div>
        <mt-button>删除选中的商品</mt-button>
        <h3>
          购物车数量：
          <span>12</span>
        </h3>
      </div>
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
    selectAll(){}
  },
  components:{
    titlebar
  }
}
</script>

<style scoped>
  .cart{
    margin: 5px;
    text-align: left;
    margin-top: 50px;
  }
  .selectAll{
    margin-left: 15px;
  }
  .cart-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
  }
  .leftImgText{
    display: flex;
    align-items: center;
  }
  .leftImgText img{
    width: 50px;
    height: 50px;
  }
  .title{
    width: 100px;
    margin-left: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price{
    margin-left: 50px;
  }
</style>
