<template>
  <div>
    <!-- 顶部导航条 -->
    <div>
      <titlebar centerTitle="首页" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper" v-if="listImg.length>1">
        <swiper-slide v-for="(item,i) of listImg" :key="i">
          <img :src="'http://127.0.0.1:3000/img/index/'+item.img" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <!-- 导航 -->
    <div class="tab">
      <div>
        <img src="../assets/index/dangao.png" alt="">
        <p>新品</p>
      </div>
      <div>
        <img src="../assets/index/dangao_1.png" alt="">
        <p>活动</p>
      </div>
      <div>
        <img src="../assets/index/dangao_2.png" alt="">
        <p>预定</p>
      </div>
      <div>
        <img src="../assets/index/dangao_3.png" alt="">
        <p>蛋糕烘焙</p>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="container">
      <div class="container-flex">
        <div class="leftdiv"></div>
        <div>爆款商品</div>
        <div class="rightdiv"></div>
      </div>
      <!-- 蛋糕 -->
      <div class="container-product">
        <div class="indeximg" v-for="(item,i) of listPro" :key="i">
          <router-link :to="{path:'details',query:{lid:item.pid}}">
            <img :src="'http://127.0.0.1:3000/img/index/'+item.pic" alt="">
            <h4 v-text="item.title"></h4>
          </router-link>
        </div>
      </div>
      <!-- 小食 -->
      <div class="container-flex">
        <div class="leftdiv"></div>
        <div>下午茶歇</div>
        <div class="rightdiv"></div>
      </div>
      <div class="container-product">
        <div class="indeximg" v-for="(item,i) of listPro2" :key="i">
          <router-link :to="{path:'details',query:{lid:item.pid}}">
            <img :src="'http://127.0.0.1:3000/img/index/'+item.pic" alt="">
            <h4 v-text="item.title"></h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入titlebar
import titlebar from "../components/coms/TitleBar";
import { swiper, swiperSlide } from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"

export default {
  data(){
    return {
      swiperOption: {
        initalSlide:0,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        //环状播放
        loop : true,
      },
      listPro:[],
      listPro2:[],
      listImg:[]
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
  },
  created(){
    var url="index";
    this.axios.get(url)
    .then(result=>{
      this.listImg=result.data.img;
      var list=result.data.data;
      console.log(list)
      for (var i = 0; i < 8; i++) {
        this.listPro.push(list[i])
      }
      for (var i = 8; i < 12 ; i++) {
        this.listPro2.push(list[i])
      }
    })
    .catch(err=>{
      console.log(err)
    })
  },
  components:{
    titlebar,
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
/*初始化*/
/*轮播图*/
  .swiper{
    margin-top: 50px;
  }
  .swiper img{
    width: 100%;
  }
  /* 导航 */
  .tab{
    margin-top: 20px;
    border-bottom: 2px solid #ddd;
    display: flex;
    justify-content: space-around
  }
  .tab img{
    width: 50px;
    height: 50px;
  }
  /* 内容区 */
  .container-flex{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .leftdiv,.rightdiv{
    width: 30px;
    border: 2px solid #FDCCDA;
  }
  .leftdiv{
    margin-right: 10px;
  }
  .rightdiv{
    margin-left: 10px;
  }
  /* 蛋糕 */
  .container-product{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .indeximg{
    margin: 5px auto;
    width: 170px;
  }
  .indeximg img{
    width: 100%;
  }
</style>
