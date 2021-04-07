import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        user: {},
        token: ''
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token)  {
            state.token = token;
        },

        logoutUser(state){
            state.user = {}
            state.token = ''
        }
    },
    actions: {
        setUser({commit}, payload) {
            commit('setUser', payload)
        },

        setToken({commit}, payload) {
            commit('setToken', payload)
        },

        logoutUser({commit})  {
            commit('logoutUser');
        }
    },
    getters: {},
    plugins: [new VuexPersistence().plugin]
})

export default store;
