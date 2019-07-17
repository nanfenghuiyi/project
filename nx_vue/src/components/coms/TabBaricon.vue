<template>
  <div>
    <!-- TabBaricon.vue -->
    <img class="imgstyle" :src="focused?selectedImage:normalImage" alt="">
    <!-- <img class="imgstyle" :src="tabImg" alt=""> -->
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props:{
    focused:false,
    selectedImage:{default:""},
    normalImage:{default:""}
    // tabImg:{default:""}
  }
}
</script>

<style scoped>
  .imgstyle{
    width: 30px;
    height: 30px;
  }
</style>
