import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: []
  },
  mutations: {
    add: (state, comment) => state.comments.push(comment),
    remove: (state, index) => state.comments.splice(index, 1)
  },
  actions: {
    add: ({ commit }, comment) => {
      commit('add',comment)
    }
  },
  modules: {
  }
})
