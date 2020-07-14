<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :isChecked="product.checked" @click.native="checkedClick"/>
    </div>
    <img class="item-pic" :src="product.picUrl" alt="">
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-bottom">
        <div class="item-price">¥ {{product.price}}</div>
        <div class="item-count">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/CheckButton'
export default {
  props: {
    product: null
  },
  data () {
    return {
      trueCount: null
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkedClick() {
      console.log('1111')
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style lang="stylus">
  #shop-item
    box-sizing border-box
    display flex
    height 100px
    border-bottom 1px solid #ccc
    padding 8px
    padding-left 0
    .item-selector
      margin 34px 3px 0
    .item-pic
      flex 1
      width 20%
      border-radius 5px
      margin-right 5px
    .item-title
      flex 3
      font-size 14px
    .item-bottom
      display flex
      margin-top 10px
      .item-price
        flex 1
        margin-left 5px
        font-size 22px
        color #ff5000
      .item-count
        flex 1
        text-align right
        margin 8px 5px 0 0
        font-size 14px
</style>
