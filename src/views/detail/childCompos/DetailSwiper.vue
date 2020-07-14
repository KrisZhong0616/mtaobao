<template>
  <div id="detail-swiper">
    <swiper>
      <swiper-slide class="swiper-item" slot="swiper-slide" :key="index" v-for="(item, index) in banner">
        <a :href="item.link"><img :src="item.image" alt=""></a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper'
import { SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-item
    width 100%
    img
     width 100%

</style>
