<template>
  <div class="home-recommend">
    <div class="recommend-item">
      <img src="../../../assets/img/home/tianmao.png" alt="">
      <div>天猫新品</div>
      <img src="../../../assets/img/home/tianmao.png" alt="">
      <div>天猫新品</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/home/jvhuasuan.png" alt="">
      <div>今日爆款</div>
      <img src="../../../assets/img/home/jvhuasuan.png" alt="">
      <div>今日爆款</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/home/tianmaoguoji.png" alt="">
      <div>天猫国际</div>
      <img src="../../../assets/img/home/tianmaoguoji.png" alt="">
      <div>天猫国际</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/home/erlema.png" alt="">
      <div>饿了么</div>
      <img src="../../../assets/img/home/erlema.png" alt="">
      <div>饿了么</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/home/tianmaochaoshi.png" alt="">
      <div>天猫超市</div>
      <img src="../../../assets/img/home/tianmaochaoshi.png" alt="">
      <div>天猫超市</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/home/chongzhi.png" alt="">
      <div>充值中心</div>
      <img src="../../../assets/img/home/chongzhi.png" alt="">
      <div>充值中心</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/home/jipiao.png" alt="">
      <div>机票酒店</div>
      <img src="../../../assets/img/home/jipiao.png" alt="">
      <div>机票酒店</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/home/jinbi.png" alt="">
      <div>金币庄园</div>
      <img src="../../../assets/img/home/jinbi.png" alt="">
      <div>金币庄园</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/home/alipaimai.png" alt="">
      <div>阿里拍卖</div>
      <img src="../../../assets/img/home/alipaimai.png" alt="">
      <div>阿里拍卖</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/home/taobaochihuo.png" alt="">
      <div>淘宝吃货</div>
      <img src="../../../assets/img/home/taobaochihuo.png" alt="">
      <div>淘宝吃货</div>
    </div>
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
  .home-recommend
    display flex
    flex-direction row
    height 156px
    width 100%
    overflow-x auto
    background rgb(255, 255, 255)
    padding-bottom 10px
    .recommend-item
      flex 20%
      text-align center
      font-size 12px
      margin-left 11px
      img
        width: 61px
        height: 48px

</style>
