<template>
  <div>
    <!-- 顶部导航条 -->
    <div>
      <titlebar centerTitle="首页" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide><img src="../assets/index/轮播图1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/index/轮播图2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/index/轮播图3.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/index/轮播图4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/index/轮播图5.jpg" alt=""></swiper-slide>
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
        <div class="indeximg" v-for="(item,i) of list" :key="i">
          <a :href="'product_details.html?lid='+item.pid">
            <img :src="'http://127.0.0.1:3000/img/'+item.pic" alt="">
            <h4 v-text="item.title"></h4>
          </a>
        </div>
        <!-- <div class="indeximg">
          <a href="javascript:;">
            <img src="../assets/index/1.jpg" alt="">
          </a>
        </div> -->
        <!-- <div class="indeximg">
          <a href="javascript:;">
            <img src="../assets/index/1.jpg" alt="">
          </a>
        </div> -->
        <!-- <div class="indeximg">
          <a href="javascript:;">
            <img src="../assets/index/1.jpg" alt="">
          </a>
        </div> -->
      </div>
      <!-- 小食 -->
      <div class="container-flex">
        <div class="leftdiv"></div>
        <div>下午茶歇</div>
        <div class="rightdiv"></div>
      </div>
      <div class="container-product">
        <div class="indeximg">
          <a href="javascript:;">
            <img src="../assets/index/1.jpg" alt="">
          </a>
        </div>
        <div class="indeximg">
          <a href="javascript:;">
            <img src="../assets/index/1.jpg" alt="">
          </a>
        </div>
        <div class="indeximg">
          <a href="javascript:;">
            <img src="../assets/index/1.jpg" alt="">
          </a>
        </div>
        <div class="indeximg">
          <a href="javascript:;">
            <img src="../assets/index/1.jpg" alt="">
          </a>
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
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      list:[]
    }
  },
  methods:{
    mysearch(){console.log("搜索")},
    myret(){console.log("返回上页面")},
  },
  created(){
    var url="index";
      this.axios.get(url)
      .then(result=>{
        console.log(result);
        var list=this.list;
        list=result.data.data;
        console.log(list)
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
    flex-wrap: wrap-reverse;
  }
  .indeximg{
    margin: 5px auto;
    width: 170px;
  }
  .indeximg img{
    width: 100%;
  }
</style>
