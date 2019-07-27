<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  provide(){
    return {
      reload:this.reload
    }
  },
  data () {
    return {
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function () {
        this.isRouterAlive=true
      })
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background:#ddd;
}
#nav {
  padding: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
a{
  text-decoration: none;
  color: #2c3e50;
}
</style>
