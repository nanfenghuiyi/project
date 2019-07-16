<template>
  <!-- 顶部导航 -->
  <div class="page-head">
    <div @click="ret" class="leftdiv"><img :src="leftImg" alt=""></div>
    <span v-text="centerTitle" class="centerspan"></span>
    <div @click="search" class="rightdiv"><img :src="rightImg" alt=""></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props:{
    leftImg:{default:""},
    centerTitle:{default:""},
    rightImg:{default:""},
    search:{type:Function},
    ret:{type:Function}
  }
}
</script>
<style scoped>
  /* 外层父元素 */
  .page-head{
    display: flex;
    position: fixed;
    top:0%;
    left: 0%;
    z-index: 20;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color:  #FB7296;
    height: 48px;
    color: #fff;
    font-size: 18px;
  }
  /* 左右图片 */
  .leftdiv,.rightdiv{
    display: flex;
    align-items: center;
    height: 48px;
  }
  /* 中间文字 */
  .centerspan{
    text-align: center;
    line-height: 48px;
  }
  .leftdiv img,.rightdiv img{
    width: 30px;
    margin: 0 10px 0 10px;
  }
</style>
