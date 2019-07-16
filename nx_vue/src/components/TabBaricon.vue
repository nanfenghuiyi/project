<template>
  <div>
    <!-- TabBaricon.vue -->
    <img class="imgstyle" :src="focused?selectedImage:normalImage" alt="">
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
  }
}
</script>

<style scoped>
  .imgstyle{
    width: 30px;
    height: 30px;
  }
</style>
