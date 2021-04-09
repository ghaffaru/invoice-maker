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
            state.customers = [],
            state.items = []
        },

        setCustomers(state, customers) {
            state.customers = customers;
        } ,

        updateCustomers(state, customer) {
            state.customers.push(customer)
        },

        addItem(state, item) {
            state.items.push(item)
        },

        deleteItem(state, customerItem) {
            state.items = state.items.filter(item => {
                return item !== customerItem
            })
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
        },

        deleteItem({commit}, payload) {
            commit('deleteItem', payload)
        }
    },
    getters: {},
    plugins: [new VuexPersistence().plugin]
})

export default store;
