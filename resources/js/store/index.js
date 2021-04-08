import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        user: {},
        token: '',
        customers: [],
        items: []
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
        },

        setCustomers(state, customers) {
            state.customers = customers;
        } ,

        updateCustomers(state, customer) {
            state.customers.push(customer)
        },

        addItem(state, item) {
            state.items.push(item)
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
        },

        setCustomers({commit}, payload) {
            commit('setCustomers',payload);
        },

        updateCustomers({commit}, payload) {
            commit('updateCustomers', payload)
        },

        addItem({commit}, payload) {
            commit('addItem', payload)
        }
    },
    getters: {},
    plugins: [new VuexPersistence().plugin]
})

export default store;
