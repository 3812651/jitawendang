import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        checkIndex: 1,
        history_id: 5
    },
    mutations: {
        changeIndex(state, payload) {
            state.checkIndex = payload.checkIndex
        },
        changeId(state, payload) {
            state.history_id = payload.id
        },
    },
    actions: {},
});