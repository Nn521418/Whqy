// index.js
import Vue from 'vue';
import Vuex from 'vuex';

// 需要注册vuex到vue中
Vue.use(Vuex);


// 使用 es6 语法把vuex的实例对象输出
export default new Vuex.Store({
  state: {

  },
  getters: {
    // 接受state作为参数，每次 count发生变化时 ， 都会被调用

  },
  mutations: {

  },
  // 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch 的方式调用
  actions: {

  }
})
