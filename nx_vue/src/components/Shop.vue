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
          <div class="title" v-text="item.title"></div>
          <div class="price">
            <span v-text="`¥${item.price.toFixed(2)}`"></span>
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
    loadMore(){
      var url="cart";
      this.axios.get(url).then(result=>{
        console.log(result);
        var rows=result.data.data;
        console.log(rows)
        // 创建循环为数组中每个对象添加cb属性，控制商品前的复选框
        for (var item of rows) {
          //添加cb属性
          item.cb=false;
          //更新购物车数量
          this.$store.commit("increment");
        };
        //保存数据
        this.list=rows;
      })/* .catch(err=>{console.log(err)}) */
    },
    //删除多个商品
    delAll(){
      //创建变量保存空字符串
      var str="";
      //创建循环拼接字符串内容
      for (var item of this.list) {
        if(item.cb){
          str+=item.id+","
        }
      };
      str=str.substring(0,str.length-1)
      //判断用户是否选中商品
      if (str.length==0) {
        this.$toast("请选中商品");
        return;
      };
      //发送ajax请求
      var url="delAll";
      var obj={ids:str};
      this.axios.get(url,{params:obj})
      .then(result=>{
        //重新加载数据
        this.loadMore();
      })
    },
    //确认删除
    delItem(e){
      //获取当前商品id
      var id=e.target.detaset.id;
      //提示交互框
      this.$messagebox("是否删除指定数据")
      .then(action=>{
        //用户选择确认，发送ajax删除数据
        var url="delItem";
        var obj={id};
        this.axios.get(url,{params:obj})
        .then(result=>{
          this.loadMore()
        })
      }).catch(err=>{
        consol.log(err);
        return;
      })
    },
    //全选按钮状态
    selectAll(e){
      var cb=e.target.checked;
      //依据状态修改列表cb
      for (var item of this.list) {
        item.cb=cb;
      }
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
