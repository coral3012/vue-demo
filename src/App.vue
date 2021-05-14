<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{
  name:'APP',
  data(){
    return {

    }
  },
}

</script>
<style lang="scss">
html,
body,
#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
html {
  font-size: 13.3333333333333333vw;
  /* 1vw = 3.75px
       26.666667vw / 2 = 13.333333vw
    */
}
#app {
  display: flex;
  font-size: 13.3333333333333333vw;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
