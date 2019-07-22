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
      <div class="cart-item" v-for="(item,i) of list" :key="i">
        <div class="leftImgText">
          <input type="checkbox" v-model="item.cb">
          <img :src="'127.0.0.1:3000/img/product_details'+item.img_url" alt="">
          <div class="title" v-model="item.title"></div>
          <div class="price">
            <span v-model="`¥${item.price.toFixed(2)}`"></span>
          </div>
        </div>
        <mt-button :data-id="item.id" class="btn" @click="delItem">删除</mt-button>
      </div>
      <div>
        <mt-button @click="delAll">删除选中的商品</mt-button>
        <h3>
          购物车数量：
          <span style="color:red" v-text="$store.getters.getCartCount"></span>
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
    return{
      list:[]
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
