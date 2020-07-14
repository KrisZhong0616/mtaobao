<template>
  <div id="swiper">
    <swiper class="swiper-content" ref="mySwiper" :options="swiperOptions">
      <slot name="swiper-slide"></slot>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
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
      }
    }
  },
  components: {
    Swiper
  },
  directives: {
    swiper: directive
  }
}
</script>

<style  scoped>

</style>
