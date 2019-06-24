import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

let state = {
        list: ['你好旧时光','耿耿于怀','栀生淮南']
    },
    mutations = {
        getList(state, data) {
            state.list = data
        }
    },
    actions = {
        async getList({
            commit
        }, arg) {
            let data = await (await fetch('http://localhost:8083/data')).json()
            console.log(data);

            commit('getList', data)
        }
    }

export default new Vuex.Store({
    state,
    mutations,
    actions
})