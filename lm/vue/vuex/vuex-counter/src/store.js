import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

let state = {
   count: 0
  },
  mutations = {
    increment(state, data) {
        console.log(state.count);
      state.count++;
    }
  },
  actions = {
    increment({
      commit
    }, arg) {
      
      
      commit('increment')
    }
  }

export default new Vuex.Store({
    state,
    mutations,
    actions
  })