<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar'
export default {
  components: {
    MainTabBar
  }
}
</script>

<style lang="stylus">
  @import url("./assets/css/base.css")
  #app
    height 100vh

</style>
