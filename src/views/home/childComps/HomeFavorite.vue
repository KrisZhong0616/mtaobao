<template>
  <div id="favorite">
    <div class="favorite-container">
      <div class="favorite-item-container" :key="index" v-for="(item, index) in homeMultidata">
        <a class="favorite-item" href="#" @click="itemClick(item)">
          <!-- <img class="favorite-item-pic" :src="item.picUrl" alt=""> -->
          <img class="favorite-item-pic" v-lazy="item.picUrl" alt="">
          <div class="favorite-item-title">{{item.title}}</div>
          <div class="favorite-item-price">$ {{item.price}}</div>
          <div class="favorite-item-recExc">{{item.recExc}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapState(['homeMultidata'])
  },
  methods: {
    itemClick(item) {
      this.$router.push('/detail/' + item.id)
    }
  }
}
</script>

<style lang="stylus">
  .favorite-container
    display flex
    flex-wrap wrap
    margin 0 10px
    align-items center
    .favorite-item-container:nth-child(2n)
      margin-left 8px
    .favorite-item-container
      flex 48%
      height 287px
      margin 5px 0
      overflow hidden
      .favorite-item
        box-sizing border-box
        display block
        width 100%
        height 100%
        padding-bottom 5px
        background-color #fff
        border-radius 5px
        .favorite-item-pic
          display block
          width 100%
          height 188.78px
          margin-bottom 10px
          border-radius 5px
        .favorite-item-title
          font-size 13px
          color #333333
          margin 0 8px 5px
        .favorite-item-price
          float left
          font-size 14px
          color #ff5500
          margin-left 8px
        .favorite-item-recExc
          float left
          font-size 10px
          margin 5px 0 0 5px

</style>
