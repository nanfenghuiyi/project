<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div>
      <titlebar :leftImg="require('../assets/ret.png')" centerTitle="商品详情" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper" v-if="listcarousels.length>1">
        <swiper-slide v-for="(item,i) of listcarousels" :key="i">
          <img :src="'http://127.0.0.1:3000/img/product/'+item.img" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <!-- 详情内容 -->
    <div class="section">
      <div class="title" v-text="listproduct.title"></div>
      <div class="section-price">
        <div id="price" class="section-color price" v-text="'¥'+listproduct.price"></div>
        <div class="section-color">
          甜度：
          <img src="../assets/details/爱心.png" alt="">
          <img src="../assets/details/爱心.png" alt="">
          <img src="../assets/details/爱心 (1).png" alt="">
          <img src="../assets/details/爱心 (1).png" alt="">
          <img src="../assets/details/爱心 (1).png" alt="">
        </div>
      </div>
      <div>
        建议食用人数：
        <div class="section-spce">
          <div  v-for="(item,index) of itemList" :key="index" :class="active==index?'activeClass':''">
            <div @click="change(index)">{{item}}</div> 
          </div>
        </div>
        <hr class="section-dr">
      </div>
      <div class="section-num">
        <div>
          <img src="../assets/details/tianping.svg" alt="">
          <div id="kg" v-text="'约'+listproduct.kg+'g'"></div>
        </div>
        <div>
          <img src="../assets/details/daocha.svg" alt="">
          <div id="num" v-text="'含'+listproduct.num+'套餐具'"></div>
        </div>
        <div>
          <img src="../assets/details/cub.svg" alt="">
          <div id="size" v-text="'约'+listproduct.size+'cm'"></div>
        </div>
      </div>
      <!-- 产品介绍 -->
      <div class="section-pro">
        <div class="section-style">
          <div class="pro-style"></div>
          <div>产品介绍</div> 
        </div>
        <p class="section-text">到过阿尔卑斯山脉勃朗峰才发现，白，其实就是这么纯粹。雪花忽聚忽散，轻盈降落在地上，化为一片白。那么清晨，我踏上厚厚的初雪，出乎意料，是松软的触感。</p>
        <div class="pro-text">
          <div>食材配比</div>
          <div>品牌</div>
          <div>产地</div>
        </div>
        <div>
          <ul class="divul">
            <li class="pro-text">
              <div>无盐黄油</div>
              <div>安佳</div>
              <div>新西兰</div>
            </li>
            <li class="pro-text">
              <div>白巧克力</div>
              <div>Callebaut</div>
              <div>比利时</div>
            </li>
            <li class="pro-text">
              <div>芝士</div>
              <div>NZMP</div>
              <div>新西兰</div>
            </li>
            <li class="pro-text">
              <div>淡牛奶</div>
              <div>安佳</div>
              <div>新西兰</div>
            </li>
            <li class="pro-text">
              <div>牛奶</div>
              <div>得乐思/爱氏晨曦</div>
              <div>法国/德国</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 关于食用 -->
      <div class="section-eat">
        <div class="section-style">
          <div class="pro-style"></div>
          <div>关于食用</div>
        </div>
        <div class="eatdiv">
          <div>
            <div class="eatstyle">蛋糕口味:</div>
            <div class="eat-style">雪域口味</div>
          </div>
          <div>
            <div class="eatstyle">适合人群:</div>
            <div class="eat-style">大众</div>
          </div>
          <div>
            <div class="eatstyle">保鲜条件:</div>
            <div class="eat-style">冷藏0-4摄氏度</div>
          </div>
          <div>
            <div class="eatstyle">推荐食用:</div>
            <div class="eat-style">请收到蛋糕后2-3小时内食用</div>
          </div>
          <div>
            <div class="eatstyle">温馨提示:</div> 
            <div class="eat-style">蛋糕中出现的细小黑色颗粒为香草籽，此为香草荚未碾磨均匀带入的颗粒，可放心食用。*商品以实物为准。</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品的选择情况 -->
    <div v-show="productShow" class="product-bg">
      <div class="product-details">
        <div class="product-top">
          <div @click="cartHidden" class="details-none">
            <img src="../assets/details/叉号.png" alt="">
          </div>
          <div class="details-top">
            <div class="details-img">
              <img :src="'http://127.0.0.1:3000/img/product/'+listpics.details_img" alt="">
            </div>
            <div class="details-shop">
              <div id="price" class="details-price section-color price" v-text="'¥'+listproduct.price"></div>
              <div class="details-title title" v-text="listproduct.title"></div>
            </div>
          </div>
        </div>
        <div class="details-center">
          建议食用人数：
          <div class="section-spce">
            <div  v-for="(item,index) of itemList" :key="index" :class="active==index?'activeClass':''">
              <div @click="change(index)">{{item}}</div> 
            </div>
          </div>
          <div class="details-bottom">
            <div>购买数量：</div> 
            <div class="details-num">
              <div @click="countnum(-1)">
                <img src="../assets/details/减.png" alt="">
              </div>
              <input v-model="cnum" type="number" >
              <div @click="countnum(1)">
                <img src="../assets/details/加.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div>
          <mt-button class="details-btn" @click="inCart()">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <!-- 图片介绍 -->
    <div class="detailsImg">
      <div>
        <img :src="'http://127.0.0.1:3000/img/product/'+listpics.img" alt="">
      </div>
      <div>
        <img :src="'http://127.0.0.1:3000/img/product/'+listpics.pic" alt="">
      </div>
    </div>
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
      <div @click="cartShow" class="showbtn">
        加入购物车
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
      listpics:[],
      listcarousels:[],
      listproduct:[],
      active:0,
      itemList:["2-4人食","5-8人食","10-12人食","15-20人食"],
      num:["5","10","15","20"],
      size:["15x15x3","20x20x3","25x25x3","33x33x3"],
      kg:["545","1090","1635","2725"],
      price:["298","458","680","1120"],
      productShow:false,
      cnum:1,
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
    loadMore(){
      if (lid!="") {
        var lid=this.$route.query.lid;
        this.axios.get("details?lid="+lid)
        .then(result=>{
          console.log(result)
          this.listpics=result.data.pics[lid];
          this.listcarousels=result.data.carousels;
          this.listproduct=result.data.product;
          // console.log(this.listpics)
          // console.log(this.listcarousels)
          // console.log(this.listproduct)
        }) 
        .catch(err=>{
          console.log(err)
        })
      }else{
        console.log("商品不存在")
      }
    },
    change(index){
      this.active=index
      this.listproduct.price=this.price[index]
      this.listproduct.num=this.num[index]
      this.listproduct.size=this.size[index]
      this.listproduct.kg=this.kg[index]
    },
    countnum(n){
      this.cnum+=n;
      if(this.cnum<1){
        this.cnum=1
      }
    },
    cartShow(){
      /***滑动限制***/
      var mo=function(e){e.preventDefault();};
      document.body.style.overflow='hidden';
      document.addEventListener("touchmove",mo,false);//禁止页面滑动
      // 显示遮罩层
      this.productShow=true;
    },
    cartHidden(){
      /***取消滑动限制***/
      var mo=function(e){e.preventDefault();};
      document.body.style.overflow='';//出现滚动条
      document.removeEventListener("touchmove",mo,false);
      // 隐藏遮罩层
      this.productShow=false;
    },
    inCart(){
      this.productShow=false;
      this.$toast("添加成功");
      var details_img=this.listpics.details_img;
      var price=this.listproduct.price;
      var title=this.listproduct.title;
      var spce=this.itemList[this.active];
      var count=this.cnum;
    },
      /***取消滑动限制***/
      move(){
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
      }
  },
  created(){
    this.loadMore()
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
/* 轮播图 */
.swiper{
    margin-top: 50px;
  }
.detailsImg img,.swiper img{
  width: 100%;
}
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
/* 详情内容 */
.section{
  background: #fff;
  border-bottom: 1px solid #2c3e50;
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
.showbtn{
  text-align: center;
  margin: auto 10px;
  color: #fff;
  width: 130px;
  height: 30px;
  line-height: 30px;
  background: rgb(236, 186, 200);
  border-radius: 30px;
}
/* 详情内容 */
.section{
  padding: 15px;
}
/* 商品详情信息 */
.title{
  margin-bottom: 30px;
}
.section-price{
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between
}
.section-color{
  color: #FF4001;
}
.section-color img{
  margin: auto 0;
  width: 15px;
  height: 15px;
}
.section-spce{
  margin-top: 10px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.section-spce div{
  border: 1px solid #fff;
  width: 80px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
}
.activeClass{
  border-color: #FF4001 !important;
  color: #FF4001;
}
.section-dr{
  margin-top: 10px;
  height: 2px;
  border: none;
  border-bottom:2px solid #FF4001;
}
.section-num{
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.section-num img{
  margin: auto 0;
  width: 25px;
  height: 25px;
}
.section-num>div{
  display: flex;
  justify-items: center;
  height: 50px;
  line-height: 50px;
}
/* 产品介绍 */
.section-pro{
  margin-top: 35px;
}
.section-style{
  display: flex;
  justify-content: left;
}
.pro-style{
  margin-right: 5px;
  width: 0px;
  height: 15px;
  border: 3px solid #FF4001;
}
.section-text{
  text-indent: 25px;
}
.pro-text{
  display: flex;
  justify-content: space-around;
}
.pro-text div{
  width: 120px;
}
.divul{
  list-style: none;
  padding: 0;
}
.divul li{
  border-bottom: 1px solid #2c3e50;
}
.divul>li>div{
  margin: 8px 0 8px 0;
}
/* 关于食用 */
.section-eat{
  margin-top: 50px;
}
.eatdiv>div{
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: flex-start;
  justify-items: center;
}
.eat-style{
  width: 80%;
  display: flex;
  flex-wrap: wrap-reverse
}
/* 图片介绍 */
.detailsImg{
  margin-bottom: 100px;
}
.detailsImg img{
  margin-top: 10px;
}
.eatstyle{
  width: 72px;
}
/*选择的商品详情*/
/*遮罩层*/
.product-bg{
  position: relative;
  background:rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
}
/*遮罩层内部内容*/
.product-details{
  position: absolute;
  top: 30%;
  left: 0;
  background: #fff;
  height: 70%;
  width: 90%;
  padding: 0 5%;
  border-radius: 10px;
}
/*隐藏键*/
.details-none{
  margin-top: 15px;
  float: right;
}
.details-none img{
  width: 25px;
  height: 25px;
}
/*上部图片，价格，商品*/
.details-top{
  clear: both;
  display: flex;
}
.details-img img{
  width: 150px;
  height: 150px;
}
.details-shop{
  margin-left: 15px;
}
.details-price{
  font-size: 35px;
  margin-bottom: 20px;
}
/*中间食用人数*/
.details-center{
  margin-top: 30px;
  height: 50%;
  overflow: auto;
  
}
.details-center .section-spce{
  margin-top: 20px;
}
/*下面的购买数量*/
/*左*/
.details-bottom{
  margin-bottom: 30px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
}
.details-bottom div:first-child{
  margin: auto 0;
}
/*右*/
.details-num{
  display: flex;
}
.details-num img{
  width: 20px;
  height: 20px;
}
.details-bottom input{
  margin-right: 5px;
  margin-left: 5px;
  width: 30px;
  text-align: center;
  border: 0;
}
/*加入购物车按钮*/
.details-btn{
  position: fixed;
  top: 100%;
  left: 10%;
  transform: translateY(-110%);
  width: 80%;
  background: #FF4001;
  color: #fff;
  border-radius: 50px
}
</style>
