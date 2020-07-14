<template>
  <div id="shopcart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{shopcartLength}})</div>
    </nav-bar>
    <scroll class="scroll-content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll'
import CartList from './childComps/CartList'

import NavBar from '../../components/common/navbar/NavBar'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    Scroll,
    CartList,
    NavBar,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['shopcartLength'])
  },
  activated() {
    console.log(',,,,,')
    this.$refs.scroll.refresh()
  }
}
</script>

<style lang="stylus">
  #shopcart
    box-sizing border-box
    height 100vh
    .nav-bar
      background linear-gradient(120deg, #ff5000, #ff970c)
      color #fff
    .scroll-content
      box-sizing border-box
      height calc(100% - 93px - 36px)
      overflow hidden
      background-color #fff

</style>
