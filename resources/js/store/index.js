import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        user: {},
        token: '',
        customers: [],
        allItems: [],
        items: [],
        itemIds: [],
        invoice:{}
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token)  {
            state.token = token;
        },

        logoutUser(state){
            state.user = state.invoice = {}
            state.token = ''
            state.customers = state.allItems = state.items = state.itemIds =[]

        },

        setCustomers(state, customers) {
            state.customers = customers;
        } ,

        updateCustomers(state, customer) {
            state.customers.push(customer)
        },

        addItem(state, item) {
            state.items.push(item)
            state.itemIds.push(item.id)
        },

        deleteItem(state, customerItem) {
            state.items = state.items.filter(item => {
                return item !== customerItem
            })
            state.itemIds = state.items.filter(id => {
                return id !== customerItem.id
            })
        },

        setInvoice(state, invoice) {
            state.invoice = invoice;
        },

        addToAllItems(state, item) {
            state.allItems.push(item)
        },
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

        addToAllItems({commit}, payload) {
            commit('addToAllItems', payload)
        },
        deleteItem({commit}, payload) {
            commit('deleteItem', payload)
        },
        setInvoice({commit}, payload) {
            commit('setInvoice', payload)
        },
    },
    getters: {},
    plugins: [new VuexPersistence().plugin]
})

export default store;
