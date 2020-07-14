<template>
  <div class="cart-list">
    <cart-list-item :key="index" v-for="(item, index) in shopCart" :product="item"/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['shopCart'])
  },
  components: {
    CartListItem
  }
}
</script>

<style  scoped>

</style>
