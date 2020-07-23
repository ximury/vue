import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 10
  },
  //   对数据的操作
  mutations: {
    addCount (state) {
      state.count++
    }
  },
  //   异步操作
  actions: {
    add ({commit}) {
      setTimeout(function () {
        commit('addCount')
      }, 2000)
    }
  },
  getters: {
    doubleCount: function (state) {
      return state.count * 2
    }
  }
//   modules: {

//   }
})
