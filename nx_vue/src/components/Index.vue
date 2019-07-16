<template>
  <div>
    <!-- 顶部导航条 -->
    <titlebar centerTitle="首页" :rightImg="require('../assets/find.png')" :search="mysearch" :ret="myret"></titlebar>
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
    myret(){console.log("返回上页面")},
  },
  components:{
    titlebar
  }
}
</script>

<style scoped>
  
</style>
