<template>
  <div class="check-button">
    <img v-show="isChecked" src="../../assets/img/common/checked.svg" alt="">
    <img v-show="!isChecked" src="../../assets/img/common/check.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: null
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  .check-button
    height 24px
    width 24px
    img
      width 100%
      height 100%

</style>
