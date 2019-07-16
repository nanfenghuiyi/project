<template>
  <div class="nx_container">
    <div class="page-wrap">
      <!-- 面板 -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="page">
          <index></index>
        </mt-tab-container-item>
        <mt-tab-container-item id="detail">
          <product></product>
        </mt-tab-container-item>
        <mt-tab-container-item id="recommend">
          <recommend></recommend>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
          <user></user>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 底部导航栏 -->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="page" @click.native="changeState(0)">
          <tabbaricon :focused="currentIndex[0].isSelected" :selectedImage="require('../assets/nx_page_normal.png')" :normalImage="require('../assets/nx_page_selected.png')"></tabbaricon>
          首页
        </mt-tab-item>
        <mt-tab-item id="detail" @click.native="changeState(1)">
          <tabbaricon :focused="currentIndex[1].isSelected" :selectedImage="require('../assets/nx_detail_normal.png')" :normalImage="require('../assets/nx_detail_selected.png')"></tabbaricon>
          分类
        </mt-tab-item>
        <mt-tab-item id="recommend" @click.native="changeState(2)">
          <tabbaricon :focused="currentIndex[2].isSelected" :selectedImage="require('../assets/nx_recommend_normal.png')" :normalImage="require('../assets/nx_recommend_selected.png')"></tabbaricon>
          推荐
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon :focused="currentIndex[3].isSelected" :selectedImage="require('../assets/nx_me_normal.png')" :normalImage="require('../assets/nx_me_selected.png')"></tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>

//引入TabBaricon
import tabbaricon from "../components/TabBaricon";
import index from "../components/Index"
import product from "../components/Product"
import recommend from "../components/Recommend"
import user from "../components/User"

export default {
  data(){
    return{
      //子组件id
      active:"page",
      currentIndex:[
        {isSelected:true},
        {isSelected:false},
        {isSelected:false},
        {isSelected:false},
      ]
    }
  },
  methods:{
    changeState(n){
      var x=document.getElementById("")
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
    index,
    product,
    recommend,
    user
  }
}
</script>
<style scoped>
  .nx_container{
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
    color: #FB7296;
  }
</style>
