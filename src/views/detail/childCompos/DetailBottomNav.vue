<template>
  <div id="detail-bottom-nav">
    <div class="icon-item">
      <img class="icon-item-pic" src="../../../assets/img/detail/shop.svg" alt="">
      <div class="icon-item-title">店铺</div>
    </div>
    <div class="icon-item">
      <img class="icon-item-pic" src="../../../assets/img/detail/wang.svg" alt="">
      <div class="icon-item-title">客服</div>
    </div>
    <div class="icon-item">
      <img class="icon-item-pic" src="../../../assets/img/detail/favor.svg" alt="">
      <div class="icon-item-title">收藏</div>
    </div>
    <div class="text-item">
      <div class="add-shopcart" @click="addToShopcart">加入购物车</div>
    <div class="buy-now">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    addToShopcart() {
      this.$emit('addToShopcart')
    }
  }
}
</script>

<style lang="stylus">
  #detail-bottom-nav
    box-sizing border-box
    position fixed
    bottom 0
    left 0
    right 0
    height 49px
    background-color #fff
    z-index 999
    box-shadow 0 -1px 10px rgba(0, 0, 0, .15)
    padding 5px 10px
    .icon-item
      float left
      height 49px
      margin-right 20px
      .icon-item-pic
        width 20px
        height 20px
        margin-left 3px
      .icon-item-title
        font-size 12px
    .text-item
      display flex
      height 39px
      color #fff
      text-align center
      line-height 39px
      border-radius 20px
      overflow hidden
      .add-shopcart
        flex 1
        background-color #FFC500
      .buy-now
        flex 1
        background-color #FF9402

</style>
