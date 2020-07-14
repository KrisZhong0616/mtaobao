<template>
  <div id="detail-store">
    <div class="store-content">
      <div class="store-content-top">
        <img class="store-logo" :src="detailStoreData.shopIcon" alt="">
        <div class="store-title">{{detailStoreData.shopName}}</div>
        <img class="store-star" :src="detailStoreData.shopStar" alt="">
        <div class="store-all">全部宝贝</div>
        <div class="store-enter">进店逛逛</div>
      </div>
      <div class="store-evaluates">
        <div class="store-evaluates-item" :key="index" v-for="(item, index) in detailStoreData.evaluates">
          <div class="item-title">{{item.title}}</div>
          <div class="item-score">{{item.score}}</div>
          <div class="item-levelText">{{item.levelText}}</div>
        </div>
      </div>
    </div>
    <img class="activity" :src="detailStoreData.activity" alt="">
    <div class="title">{{homeMultidata[id].title}}</div>
    <img class="pic" :src="homeMultidata[id].picUrl" alt="">
    <img class="pic" :src="homeMultidata[id].picUrl" alt="">
    <img class="pic" :src="homeMultidata[id].picUrl" alt="">
    <img class="pic" :src="homeMultidata[id].picUrl" alt="">
    <img class="pic" :src="homeMultidata[id].picUrl" alt="">
    <img class="creditLevelIcon" :src="detailStoreData.creditLevelIcon" alt="">
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
    ...mapState(['detailStoreData', 'homeMultidata'])
  }
}
</script>

<style lang="stylus" scoped>
  #detail-store
    margin-top 15px
    .store-content
      background-color #fff
      .store-content-top
        position relative
        box-sizing border-box
        height 60px
        padding 10px 0 0 10px
        .store-logo
          float left
          display block
          width 50px
          height 50px
        .store-title
          float left
          font-size 14px
          padding 5px 0 0 10px
        .store-star
          position absolute
          top 37px
          left 70px
          width 66px
          height 12px
        .store-all
          box-sizing border-box
          position absolute
          top 25px
          right 100px
          width 70px
          padding 4px 5px
          text-align center
          border-radius 12px
          border 0.5px solid rgb(255, 80, 0)
          font-size 12px
          color rgb(255, 80, 0)
        .store-enter
          box-sizing border-box
          position absolute
          top 25px
          right 20px
          width 70px
          padding 4px 5px
          font-size 12px
          text-align center
          border-radius 12px
          background linear-gradient(120deg, #ff5000, #ff970c)
          border 0.5px solid rgb(255, 80, 0)
          color #fff
      .store-evaluates
        width 100%
        height 50px
        display flex
        line-height 50px
        font-size 12px
        margin-left 12px
        .store-evaluates-item
          flex 1
          .item-title
            float left
          .item-score
            float left
            margin-left 10px
            color #0abde3
          .item-levelText
            box-sizing border-box
            float left
            margin-left 10px
            border-radius 50px
            color #0abde3
    .activity
      margin-top 20px
      width 100%
    .title
      padding 10px 0
      text-align center
    .pic
      width 100%
    .creditLevelIcon
      width 100%

</style>
