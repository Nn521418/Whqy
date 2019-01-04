// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//reqiure elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import {get, post} from './utils/request'

let request = {get, post}

Vue.prototype.$request = request;

//require public css

import './assets/css/indexPage.css'
import './assets/css/OverviewIndex.css';
import './assets/css/news.css'
//require jquery
import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }
})
