<template>
  <div class="tab-item" @click="itemClick">
    <div :style="activeStyle">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  name: 'TabBarItems',
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang="stylus">
  .tab-item
    flex 1
    height 49px
    text-align center
    font-size 14px
    img
      width 22px
      height 22px
      margin-top 4px
      vertical-align middle

</style>
