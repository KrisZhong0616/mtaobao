import {
  INIT_HOME_MULTIDATA,
  INIT_DETAIL_STOREDATA,
  INIT_DETAIL_COMMENTDATA,
  ADD_SHOPCART_COUNT,
  ADD_SHOPCART
} from './mutation-types'

export default {
  [INIT_HOME_MULTIDATA](state, list) {
    state.homeMultidata = list
  },
  [INIT_DETAIL_STOREDATA](state, obj) {
    state.detailStoreData = obj
  },
  [INIT_DETAIL_COMMENTDATA](state, list) {
    state.detailCommentData = list
  },
  [ADD_SHOPCART_COUNT](state, payload) {
    payload.count++
  },
  [ADD_SHOPCART](state, payload) {
    state.shopCartList.push(payload)
  }
}
