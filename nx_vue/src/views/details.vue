<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div>
    <titlebar :leftImg="require('../assets/ret.png')" centerTitle="商品详情" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    </div>
    <!-- 轮播图 -->
    <!-- <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper" v-if="listImg.length>1">
        <swiper-slide v-for="(item,i) of listImg" :key="i">
          <img :src="'http://127.0.0.1:3000/img/index/'+item.img" alt="">
        </swiper-slide>
      </swiper>
    </div> -->
    <!-- 详情内容 -->
    <div class="section">
      <div>雪域牛乳芝士蛋糕</div>
      <div class="section-price">
        <div>¥218</div>
        <div>
          甜度：
          <img src="" alt="">
        </div>
      </div>
      <div>
        建议食用人数：
        <div>
          <div>2-4人食</div>
          <div>5-8人食</div>
          <div>10-12人食</div>
          <div>15-20人食</div>
        </div>
      </div>
      <div>
        <div>约454.00g</div>
        <div>5套餐具</div>
        <div>约13*13cm</div>
      </div>
    </div>
    <!-- 产品介绍 -->

    <!-- 底部导航 -->
    <div class="tab">
      <div class="tableft">
        <div class="tabImg">
          <img src="../assets/nx_page_selected.png" alt="">
          首页
        </div>
        <div class="tabImg">
          <img src="../assets/nx_shop_selected.png" alt="">
          购物车
        </div>
      </div>
      <div class="tabright">
        <a>加入购物车</a>
      </div>
    </div>
  </div>
</template>

<script>
import titlebar from "../components/coms/TitleBar";
import { swiper, swiperSlide } from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"

export default {
  data () {
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
      list:[]
    }
  },
  methods:{
    mysearch(){console.log("搜索")},
    myret(){console.log("返回上页面")},
  },
  created(){
    var url="details";
    var lid=this.$route.query.lid;
    console.log(lid);
    this.axios.get(url,{params:lid})
    .then(result=>{
      console.log(result)
    })
  },
  components:{
    titlebar
  }
}
</script>

<style scoped>
/* 底部导航 */
.tab{
  width: 94%;
  height: 70px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px -4px rgba(0,0,0,.2);
  position: fixed;
  top: 90%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  transform: translateX(-50%);
}
/* 左边 */
.tableft{
  width: 150px;
  line-height: none ;
  display: flex;
  justify-content: space-around;
}
.tabImg{
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center
}
.tabImg img{
  margin: 0 auto;
  width: 25px;
  height: 25px;
}
/* 右边 */
.tabright{
margin: auto 20px;
}
.tabright>a{
display: block;
color: #fff;
width: 130px;
height: 30px;
line-height: 30px;
background: rgb(236, 186, 200);
border-radius: 30px;
}
</style>
