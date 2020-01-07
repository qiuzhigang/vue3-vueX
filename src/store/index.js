import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { name: '小刚', age: '18', mont: true },
      { name: '小红', age: '48', mont: false },
      { name: '小邱', age: '38', mont: true },
      { name: '小翠', age: '28', mont: false },
    ]

  },
  getters: {

  },
  mutations: {
    incermentCount(state) {
      state.count++;
    },
    decrementCount(state, n) {
      state.count -= n;
    }
  },
  actions: {
  },
  modules: {
  }
})
