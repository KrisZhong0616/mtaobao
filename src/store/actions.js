import axios from 'axios'
import {
  INIT_HOME_MULTIDATA,
  INIT_DETAIL_STOREDATA,
  INIT_DETAIL_COMMENTDATA,
  ADD_SHOPCART_COUNT,
  ADD_SHOPCART
} from './mutation-types'

export default {
  getHomeMultidata(context) {
    axios.get('/list.json').then(({ data }) => {
      context.commit(INIT_HOME_MULTIDATA, data)
    })
  },
  getDetailStoreData(context) {
    axios.get('/store.json').then(({ data }) => {
      context.commit(INIT_DETAIL_STOREDATA, data)
    })
  },
  getDetailCommentData(context) {
    axios.get('/comment.json').then(({ data }) => {
      context.commit(INIT_DETAIL_COMMENTDATA, data)
    })
  },
  addToShopcart(context, arr) {
    return new Promise((resolve, reject) => {
      const oldProduct = context.state.shopCartList.find(item => item.id === arr.id)
      if (oldProduct) {
        context.commit(ADD_SHOPCART_COUNT, oldProduct)
        resolve('当前商品的数量+1')
      } else {
        context.commit(ADD_SHOPCART, arr)
        resolve('购物车商品种类+1')
      }
    })
  }
}
