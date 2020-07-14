<template>
  <TabBar>
      <TabBarItems path="/home">
        <img slot="item-icon" src="../../assets/img/tabBar/home.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabBar/home-active.svg" alt="">
        <div slot="item-title">首页</div>
      </TabBarItems>
      <TabBarItems path="/category">
        <img slot="item-icon" src="../../assets/img/tabBar/category.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabBar/category-active.svg" alt="">
        <div slot="item-title">分类</div>
      </TabBarItems>
      <TabBarItems path="/shopcart">
        <img slot="item-icon" src="../../assets/img/tabBar/shop-cart.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabBar/shop-cart-active.svg" alt="">
        <div slot="item-title">购物车</div>
      </TabBarItems>
      <TabBarItems path="/profile">
        <img slot="item-icon" src="../../assets/img/tabBar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabBar/profile-active.svg" alt="">
        <div slot="item-title">我的</div>
      </TabBarItems>
    </TabBar>
</template>
<script>
import TabBar from '../common/tabbar/TabBar'
import TabBarItems from '../common/tabbar/TabBarItems'
export default {
  data () {
    return {
    }
  },
  components: {
    TabBar,
    TabBarItems
  }
}
</script>

<style  scoped>

</style>
