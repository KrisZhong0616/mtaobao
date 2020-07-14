<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  .nav-bar
    display flex
    height 44px
    line-height 44px
    text-align center
    box-shadow 0 1px 10px rgba(200, 200, 200, .2)
    .left
      width 60px
    .right
      width 60px
    .center
      flex 1

</style>
