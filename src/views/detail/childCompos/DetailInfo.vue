<template>
  <div id="detail-info">
    <div class="detail-info-title">{{homeMultidata[id].title}}</div>
    <div class="detail-info-price">¥ {{homeMultidata[id].price}}</div>
    <div class="detail-info-recExc">{{homeMultidata[id].recExc}}</div>
    <div class="detail-info-fouce">
      <div class="detail-info-fouce-item" :key="index" v-for="(item, index) in homeMultidata[id].fouce">{{item}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    id: null
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['homeMultidata'])
  }
}
</script>

<style lang="stylus" scoped>
  #detail-info
    background-color #fff
    margin-top 10px
    padding 5px
    .detail-info-title
      font-size 16px
    .detail-info-price
      float left
      padding 5px 0
      font-size 24px
      color #ff5000
    .detail-info-recExc
      float left
      font-size 12px
      padding-top 16px
      margin-left 10px
      color #d63031
    .detail-info-fouce
      width 100%
      display flex
      .detail-info-fouce-item:nth-child(2)
        text-align center
      .detail-info-fouce-item:nth-child(3)
        text-align right
      .detail-info-fouce-item
        flex 1
        font-size 14px
        color #636e72

</style>
