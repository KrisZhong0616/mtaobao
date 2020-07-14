<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" class="nav-bar" ref="nav"/>
    <scroll class="scroll-content" ref="scroll" :probeType="3" @scroll="scorllContent">
      <detail-swiper :banner="banner"/>
      <detail-info :id="id"/>
      <detail-comment ref="comment"/>
      <detail-store ref="params" :id="id"/>
      <home-favorite ref="recommend"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <detail-bottom-nav @addToShopcart="addToShopcart"/>
    <toast ref="toast"/>
  </div>
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll'
import DetailSwiper from './childCompos/DetailSwiper'
import DetailInfo from './childCompos/DetailInfo'
import DetailComment from './childCompos/DetailComment'
import DetailStore from './childCompos/DetailStore'
import HomeFavorite from '../home/childComps/HomeFavorite'

import DetailNavBar from './childCompos/DetailNavBar'
import DetailBottomNav from './childCompos/DetailBottomNav'
import BackTop from '../../components/content/BackTop'
import Toast from '../../components/common/toast/Toast'

import { getDetailMultidata } from '../../network/detail'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      id: null,
      banner: null,
      themeTopYs: [0, 330, 820, 3000],
      getThemeTop: null,
      currentIndex: 0,
      isShowBackTop: false
    }
  },
  components: {
    Scroll,
    DetailSwiper,
    DetailInfo,
    DetailComment,
    DetailStore,
    HomeFavorite,
    DetailNavBar,
    DetailBottomNav,
    BackTop,
    Toast
  },
  created() {
    // 请求多个数据
    getDetailMultidata().then(res => {
      this.banner = res.data.banner.list
    })

    this.$store.dispatch('getHomeMultidata')
    this.$store.dispatch('getDetailStoreData')
    this.$store.dispatch('getDetailCommentData')
  },
  activated() {
    this.id = this.$route.params.id
  },
  computed: {
    ...mapState(['homeMultidata', 'shopCartList'])
  },
  methods: {
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index])
    },
    scorllContent (position) {
      this.isShowBackTop = (-position.y) > 400
      const y = -position.y
      const length = this.themeTopYs.length
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i && ((i < length - 1 && y >= this.themeTopYs[i] && y < this.themeTopYs[i + 1]) ||
        (i === length - 1 && y >= this.themeTopYs[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    addToShopcart() {
      const iid = this.id
      const product = this.homeMultidata[iid]
      this.$store.dispatch('addToShopcart', product).then(res => {
        this.$refs.toast.show(res)
      })
    }
  }
}
</script>

<style lang="stylus">
  #detail
    box-sizing border-box
    height 100vh
    padding-top 44px
    .nav-bar
      position fixed
      top 0
      left 0
      right 0
      z-index 9
      background-color #fff
    .scroll-content
      height calc(100% - 49px)
      overflow hidden

</style>
