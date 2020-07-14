<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <div class="left" slot="left" @click="backClick">
        <svg t="1593933050864" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2083" width="200" height="200"><path d="M702.94996 958.89419c-8.375761 0-16.751522-3.196809-23.14514-9.590426L265.159102 534.658046c-12.787234-12.777001-12.787234-33.513278 0-46.289256L679.80482 73.722048c12.787234-12.787234 33.502022-12.787234 46.289256 0 12.787234 12.777001 12.787234 33.513278 0 46.289256L334.593498 511.512906l391.501602 391.501602c12.787234 12.777001 12.787234 33.513278 0 46.289256C719.701482 955.697381 711.325721 958.89419 702.94996 958.89419z" p-id="2084"></path></svg>
      </div>
      <div class="center" slot="center">
        <div class="center-item"
            :key="index" v-for="(item, index) in titles"
            :class="{active: index === currentIndex}"
            @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
  data () {
    return {
      titles: ['宝贝', '评价', '详情', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.$emit('titleClick', index)
      this.currentIndex = index
    },
    backClick() {
      this.$router.go(-2)
    }
  }
}
</script>

<style lang="stylus">
  #detail-nav-bar
    background-color #fff
    .left
      height 44px
      overflow hidden
      .icon
        width 32px
        height 32px
        margin-top 6px
    .center
      display flex
      .center-item
        flex 1
      .active
        color red

</style>
