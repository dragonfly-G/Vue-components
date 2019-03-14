// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store/store'
// 微信分享
import WXConfig from './assets/js/wx.jsapi' 
Vue.prototype.WXConfig = WXConfig;

import './assets/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
