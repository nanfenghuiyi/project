<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div>
      <titlebar :leftImg="require('../assets/ret.png')" centerTitle="分类" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    </div>
    <!-- 商品内容 -->
    <div class="product_details">
      <div class="product-cont">
        <div class="productImg" v-for="(item,i) of list" :key="i">
          <router-link :to="{path:'details',query:{lid:item.lid}}" >
            <img :src="'http://127.0.0.1:3000/img/product_details/'+item.pic" alt="">
            <h4 class="title" v-text="item.title"></h4>
            <h4 class="price" v-text="`¥${item.price.toFixed(2)}`"></h4>
          </router-link>
        </div>
      </div>
      <!-- <div id="more">加载更多</div> -->
    </div>
  </div>
</template>

<script>
import titlebar from "../components/coms/TitleBar";

export default {
  data () {
    return {
      list:[],
      pno:0,
      count:6,
      num:0
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
      var url="product_details";
      this.pno++;
      var obj={pno:this.pno,count:this.count};
      this.axios.get(url,{params:obj})
      .then(result=>{
        this.num=result.data.pc;
        console.log(result)
        var rows=this.list.concat(result.data.data)
        this.list=rows;
        console.log(this.num);
      })
    },
    onScroll(){
      //可滚动容器的高度
      var innerHeight=document.querySelector('.product_details').clientHeight;
      //屏幕尺寸高度
      var outerHeight=document.documentElement.clientHeight;
      //可滚动容器超出当前窗口显示范围的高度
      var scrollTop=document.documentElement.scrollTop
      //srcollTop在也难滚动时为0，开始滚动狗，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
      if(this.list.length<this.num){
        if(innerHeight<(outerHeight+scrollTop)){
          //加载跟多操作
          this.loadMore();
        }
      }
    }
  },
  created(){
    this.loadMore();
    //创建scroll事件
    window.addEventListener('scroll',this.onScroll);
  },
  beforeDestroy () {
    //销毁scroll事件
    window.removeEventListener("scroll",this.onScroll)
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
.product_details{
  margin-top: 50px;
}
.product-cont{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.productImg{
  width: 170px;
}
.productImg img{
  width: 100%;
}
</style>
