<template>
  <div class="cart-bottom-bar">
    <div class="check-all">
      <div class="check-all-btn" @click="checkClick">
        <img v-show="isCheckedAll" src="../../../assets/img/common/checked.svg" alt="">
        <img v-show="!isCheckedAll" src="../../../assets/img/common/check.svg" alt="">
      </div>
      <div class="check-all-title">全选</div>
    </div>
    <div class="totalPrice">合计: {{totalPrice}}</div>
    <div class="calculate" @click="calculateClick">去计算({{checkLength}})</div>
    <toast ref="toast"/>
  </div>
</template>

<script>
import Toast from '../../../components/common/toast/Toast'
export default {
  data () {
    return {
    }
  },
  components: {
    Toast
  },
  computed: {
    totalPrice() {
      return '¥' + this.$store.getters.shopCart.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.getters.shopCart.filter(item => item.checked).length
    },
    isCheckedAll() {
      if (this.$store.getters.shopCart.length === 0) return false
      return !this.$store.getters.shopCart.find(item => !item.checked)
    }
  },
  methods: {
    checkClick() {
      if (this.isCheckedAll) {
        this.$store.getters.shopCart.forEach(item => {
          item.checked = false
        })
      } else {
        this.$store.getters.shopCart.forEach(item => {
          item.checked = true
        })
      }
    },
    calculateClick() {
      if (!this.isCheckedAll) {
        this.$refs.toast.show('请选择购买的商品！')
      }
    }
  }
}
</script>

<style lang="stylus">
  .cart-bottom-bar
    display flex
    height 36px
    background-color #ecf0f1
    position fixed
    bottom 49px
    left 0
    right 0
    align-items center
    font-size 14px
    .check-all
      flex 1
      display flex
      align-items center
      .check-all-btn
        flex 1
        text-align center
        margin-top 3px
        img
          height 28px
          width 28px
      .check-all-title
        flex 1
        margin-left -5px
    .totalPrice
      box-sizing border-box
      flex 2
      margin-left 10px
    .calculate
      flex 1
      height 36px
      line-height 36px
      text-align center
      background-color #d35400
      color #fff

</style>
