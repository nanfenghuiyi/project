<template>
  <div>
    <!-- 顶部导航条 -->
    <titlebar :leftImg="require('../assets/ret.png')" centerTitle="购物车" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
    <div class="cart">
      <!-- 全选 -->
      <!-- 商品列表 -->
      <div class="cart-item" v-for="(item,i) of list" :key="i">
        <!-- 左图文 -->
        <div class="cart-left">
          <!-- 左input -->
          <div class="cart-input">
            <input type="checkbox" v-model="item.cb">
          </div>
          <!-- 中间内容 -->
          <div class="centerImgText">
            <!--  左图片 -->
            <div class="centerImg">
              <img :src="'http://127.0.0.1:3000/img/product_details/'+item.img_url" alt="">
            </div>
            <!-- 右名称，价格，数量 -->
            <div class="rightText">
              <div class="title" v-text="item.title"></div>
              <div class="price">
                售价：
                <span v-text="`¥${(item.price*item.cnum).toFixed(2)}`"></span>
                元
              </div>
              <div class="details-num">
                <div @click="rem(i)">
                  <img src="../assets/details/out.png" alt="">
                </div>
                <div class="cnum" v-text="item.cnum"></div>
                <div @click="add(i)">
                  <img src="../assets/details/add.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右删除 -->
        <div class="cart-right">
          <img :data-id="item.id"  @click="delItem" src="../assets/details/del.png" alt="">
        </div>
        <!-- <mt-button type="danger" :data-id="item.id" class="btn" @click="delItem">删除</mt-button> -->
      </div>
      <div class="shop-del">
        <h3>
          购物车商品数量：
          <span id="num" style="color:red" v-text="Allnum"></span>
        </h3>
        <h3>
          购物车商品总价：
          <span style="color:red" v-text="Allprice"></span>
        </h3>
      </div>
      <div class="login-btn">
        <div class="selectAll">
          <input type="checkbox" @change="selectAll">
          <mt-button class="del-btn" type="danger" @click="delAll">删除</mt-button>
        </div>
        <div>
          <mt-button class="go-btn">结算</mt-button>
        </div>
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
      list:[],
      Allprice:'',
      Allnum:'',
      cnum:''
    }
  },
  methods:{
    mysearch(){console.log("搜索")},
    //返回上一页面
    myret(){
      // console.log("返回上页面")
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
        var rows=result.data.data;
        // console.log(rows)
        // 创建循环为数组中每个对象添加cb属性，控制商品前的复选框
        for (var item of rows) {
          //添加cb属性
          item.cb=false;
        };
        //保存数据
        this.list=rows;
        //计算总价
        var money=0;
        var num=0;
        for (var i = 0; i < rows.length; i++) {
          if(rows[i]){
            money+=rows[i].cnum*rows[i].price
            num+=rows[i].cnum
          }
        }
        this.Allprice=money.toFixed(2)
        this.Allnum=num
      })
      .catch(err=>{
        console.log(err);
        this.$messagebox("请登录后查看");
        this.$router.push({path:'login'})
      })
    },
    //总数量，总价格
    hh(){
      //保存数据
      var rows=this.list
        //计算总价
        var money=0;
        var num=0;
        for (var i = 0; i < rows.length; i++) {
          if(rows[i]){
            money+=rows[i].cnum*rows[i].price
            num+=rows[i].cnum
          }
        }
        this.Allprice=money.toFixed(2)
        this.Allnum=num
    },
    //商品数量的加减
    add(i){
      var list=this.list;
      var cnum=list[i].cnum
      cnum+=1
      list[i].cnum=cnum
      this.hh()
    },
    rem(i){
      var list=this.list;
      var cnum=list[i].cnum
      cnum-=1
      if(cnum<1){
        cnum=1
      }
      list[i].cnum=cnum
      this.hh()
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
      var id=e.target.dataset.id;
      // console.log(id)
      //提示交互框
      this.$messagebox.confirm("是否删除指定数据")
      .then(result=>{
        //用户选择确认，发送ajax删除数据
        var url="delItem";
        var obj={id:id};
        this.axios.get(url,{params:obj})
        .then(result=>{
          this.loadMore()
        })
      }).catch(err=>{
        console.log(err);
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
    },
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
    padding: 5px;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  /*商品列表*/
  .cart-item{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    overflow: auto;
  }
  .cart-left{
    display: flex;
  }
  /* 左input */
  .cart-input{
    margin: auto 0;
  }
  /* 中间内容 */
  .centerImgText{
    display: flex;
    justify-content:left
  }
  /*左图*/
  .centerImg img{
    width: 120px;
    height: 120px;
  }
  /*右内容*/
  .rightText{
    margin-left: 10px;
    display: flex;
    flex-direction: column
  }
  .price{
    line-height: 50px;
    color: #bbb
  }
  /*数量加减*/
  .details-num{
    display: flex;
    text-align: center;
  }
  .details-num div{
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
  }
  .cnum,.details-num img{
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  /*右删除*/
  .cart-right{
    display: flex;
    align-items: flex-end
  }
  .cart-right img{
    width: 30px;
    height: 30px;
  }
  /*删除按钮*/
  .shop-del{
    margin-top: 50px;
    margin-bottom: 50px;
  }
  /*购买按钮*/
  .login-btn{
    padding: 10px;
    display:flex;
    justify-content: space-between;
    width: 95%;
    background: #fdccda;
    color: #fff;
    position: fixed;
    top: 100%;
    left: 0;
    transform: translateY(-200%);
  }
  .del-btn{
    margin-left: 20px;
  }
  .go-btn{
    background: #FF4001;
    color: #fff;
  }
</style>
