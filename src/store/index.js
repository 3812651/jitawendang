import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        checkIndex: 1,
    },
    mutations: {
        changeIndex(state, payload) {
            state.checkIndex = payload.checkIndex
        }
    },
    actions: {},
});