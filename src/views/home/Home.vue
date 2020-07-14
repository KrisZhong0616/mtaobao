<template>
  <div id="home">
    <!--顶部导航栏-->
    <nav-bar class="nav-bar">
      <img slot="left" src="../../assets/img/home/logoIcon.svg" alt="">
      <div slot="center"><input class="serach" type="text" placeholder="名字"></div>
    </nav-bar>
    <scroll class="scroll-content" ref="scroll" :probeType="3" @scroll="scorllContent">
      <!--轮播图-->
      <swiper class="swiper-content" ref="mySwiper" :options="swiperOptions">
        <swiper-slide><a href="#"><img src="../../assets/img/home/Carousel1.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href="#"><img src="../../assets/img/home/Carousel2.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href="#"><img src="../../assets/img/home/Carousel3.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href="#"><img src="../../assets/img/home/Carousel4.jpg" alt=""></a></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!--推荐小图标-->
      <home-recommend/>
      <!--推荐页面-->
      <home-feature/>
      <!--猜你喜欢-->
      <tab-control :titles="[]" class="home-tab-control"/>
      <home-favorite/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'
import HomeFavorite from './childComps/HomeFavorite'

import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/common/tabcontrol/TabControl'
import BackTop from '../../components/content/BackTop'

export default {
  data () {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      isShowBackTop: false,
      saveY: 0
    }
  },
  components: {
    Scroll,
    Swiper,
    SwiperSlide,
    HomeRecommend,
    HomeFeature,
    HomeFavorite,
    NavBar,
    TabControl,
    BackTop
  },
  directives: {
    swiper: directive
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created() {
    this.$store.dispatch('getHomeMultidata')
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    scorllContent (position) {
      this.isShowBackTop = (-position.y) > 400
    }
  }
}
</script>

<style lang="stylus">
  #home
    box-sizing border-box
    height 100vh
    padding-top 44px
    .nav-bar
      position fixed
      top 0
      left 0
      right 0
      z-index 66
      background linear-gradient(120deg, #ff5000, #ff970c)
      color #fff
      img
        height 100%
      .serach
        width 80%
        height 100%
        border none
        padding 5px 20px
        border-radius 10px
        font-size 14px
        vertical-align middle
    .scroll-content
      box-sizing border-box
      height calc(100% - 49px)
      overflow hidden
      .swiper-content
        img
          width 100%
    .home-tab-control
      position sticky
      top 44px

</style>
