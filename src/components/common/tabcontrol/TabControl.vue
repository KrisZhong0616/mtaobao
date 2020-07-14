<template>
  <div id="tab-control">
    <img class="may-like" src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png" alt="">
    <div class="tab-control">
      <div :key="index" v-for="(item, index) in titles"
          class="tab-control-item" :class="{active: index === currentIndex}"
          @click="tabClick(index)">
        <span>{{item}}</span>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="stylus">
  .may-like
    display block
    width 161px
    height 19px
    margin 15px auto
  .tab-control
    display flex
    text-align center
    font-size 15px
    .tab-control-item
      flex 1
      line-height 32px
    .active
      color #ff5000
      span
        padding-bottom 5px
        border-bottom 2px solid #ff5000

</style>
