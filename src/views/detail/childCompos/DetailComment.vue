<template>
  <div id="detail-comment">
    <div class="comment-container">宝贝评价({{detailCommentData.length}})
      <div class="show-more">查看全部 ></div>
    </div>
    <div class="comment-items">
      <div class="comment-item" :key="index" v-for="(item, index) in detailCommentData">
        <img class="item-icon" :src="item.icon" alt="">
        <div class="item-title">{{item.title}}</div>
        <div class="item-content">{{item.content}}</div>
      </div>
    </div>
    <div class="ask-container">问大家({{detailCommentData.length}})
      <div class="show-more">查看全部 ></div>
    </div>
    <div class="ask-items">
      <div class="ask-item" :key="index" v-for="(item, index) in detailCommentData">
        <img class="item-icon" :src="item.ask" alt="">
        <div class="item-tips">{{item.tips}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['detailCommentData'])
  }
}
</script>

<style lang="stylus">
  #detail-comment
    margin-top 15px
    background-color #fff
    padding 8px
    .comment-container
      position relative
      height 16px
      font-size 14px
      margin-bottom 20px
      .show-more
        position absolute
        top 1px
        right 0
        font-size 12px
        color #ff5000
    .comment-items
      height 100px
      overflow hidden
      .comment-item
        position relative
        margin-bottom 10px
        .item-icon
          display block
          height 24px
          width 36px
        .item-title
          position absolute
          top 8px
          left 32px
          font-size 12px
          color #ff9899
        .item-content
          margin-left 30px
          font-size 14px
          color #ccc
    .ask-container
      position relative
      height 16px
      font-size 14px
      margin-bottom 20px
      margin-top 20px
      .show-more
        position absolute
        top 1px
        right 0
        font-size 12px
        color #ff5000
    .ask-items
      height 40px
      overflow hidden
      .ask-item
        position relative
        margin-bottom 10px
        .item-icon
          display block
          height 14px
          width 14px
          margin-letf 22px
        .item-tips
          position absolute
          top 0
          left 20px
          font-size 12px

</style>
