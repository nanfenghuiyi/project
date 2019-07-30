<template>
  <div class="nx_container">
    <div class="page-wrap">
      <!-- 顶部导航 -->
      <shop></shop>
      <!-- 主要内容 -->
      <!-- 底部导航栏 -->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="index" @click.native="changeState(0);btn('')">
          <tabbaricon :focused="currentIndex[0].isSelected" :selectedImage="require('../assets/nx_page_normal.png')" :normalImage="require('../assets/nx_page_selected.png')"></tabbaricon>
          首页
        </mt-tab-item>
        <mt-tab-item id="product" @click.native="changeState(1);btn('product')">
          <tabbaricon :focused="currentIndex[1].isSelected" :selectedImage="require('../assets/nx_detail_normal.png')" :normalImage="require('../assets/nx_detail_selected.png')"></tabbaricon>
          分类
        </mt-tab-item>
        <mt-tab-item id="shop" @click.native="changeState(2);btn('shop')">
          <tabbaricon :focused="currentIndex[2].isSelected" :selectedImage="require('../assets/nx_shop_normal.png')" :normalImage="require('../assets/nx_shop_selected.png')"></tabbaricon>
          购物车
        </mt-tab-item>
        <mt-tab-item id="user" @click.native="changeState(3);btn('user')">
          <tabbaricon :focused="currentIndex[3].isSelected" :selectedImage="require('../assets/nx_me_normal.png')" :normalImage="require('../assets/nx_me_selected.png')"></tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>

//引入TabBaricon
import tabbaricon from "../components/coms/TabBaricon";
import shop from "../components/Shop";

export default {
  data(){
    return{
      //子组件id
      active:"shop",
      currentIndex:[
        {isSelected:false},
        {isSelected:false},
        {isSelected:false},
        {isSelected:true},
        {isSelected:false},
      ]
    }
  },
  methods:{
    btn(val){
      this.$router.push('/'+val)
    },
    changeState(n){
      for (var i= 0; i < this.currentIndex.length; i++) {
        if(n==i){
          this.currentIndex[i].isSelected=true;
        }else {
          this.currentIndex[i].isSelected=false;
        }
      }
    }
  },
  components:{
    tabbaricon,
    shop
  }
}
</script>
<style scoped>
  .nx_container{
    background: #fff;
    overflow: hidden;
  }
  .page-wrap{
    overflow: auto;
    padding-bottom: 60px;
  }
  /*修改tabbar 默认文字颜色*/
  .mint-tabbar>.mint-tab-item{
    color: #999999;
  }
  /*修改tabar 选中文字颜色*/
  .mint-tabbar>.mint-tab-item.is-selected{
    background-color: transparent;
    color: #FDCCDA;
  }
</style>
