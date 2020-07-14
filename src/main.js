import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
// import toast from './components/common/toast'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 安装轮播图插件
Vue.use(VueAwesomeSwiper)

// 安装toast插件
// Vue.use(toast)

// 安装fastclick插件
FastClick.attach(document.body)
// 安装lazyload插件
Vue.use(VueLazyLoad)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
