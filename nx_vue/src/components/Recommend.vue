<template>
  <div>
    <!-- 顶部导航条 -->
    <titlebar :leftImg="require('../assets/ret.png')" centerTitle="推荐" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
  </div>
</template>

<script>
//引入titlebar
import titlebar from "../components/coms/TitleBar";

export default {
  data(){
    return{}
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
  components:{
    titlebar
  }
}
</script>

<style scoped>
  
</style>
