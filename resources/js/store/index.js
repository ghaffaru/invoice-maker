import Vue from "vue";
import axios from 'axios';
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
        invoice: {},
        invoices: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },

        logoutUser(state) {
            state.user = state.invoice = {}
            state.token = ''
            state.customers = state.allItems = state.items = state.itemIds = state.invoices = []

        },

        setCustomers(state, customers) {
            state.customers = customers;
        },

        updateCustomers(state, customer) {
            state.customers.push(customer)
        },

        addItem(state, item) {
            state.items.push(item)
            // state.itemIds.push(item.id)
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

        setAllItems(state, items) {
            state.allItems = items;
        },

        setAllInvoices(state, invoices) {
            state.invoices = invoices;
        }
    },
    actions: {
        setUser({ commit }, payload) {
            commit('setUser', payload)
        },

        setToken({ commit }, payload) {
            commit('setToken', payload)
        },

        logoutUser({ commit }) {
            commit('logoutUser');
        },

        fetchAllCustomers({ commit, state }) {
            axios
                .get("/api/customer", {
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                    },
                })
                .then((response) => {
                    commit('setCustomers', response.data);
                })
                .catch((err) => {
                    console.log(err.response.data);
                });
        },

        updateCustomers({ commit }, payload) {
            commit('updateCustomers', payload)
        },

        addItem({ commit }, payload) {
            commit('addItem', payload)
        },

        fetchAllItems({ commit, state }) {
            axios.get("/api/item", {
                headers: {
                    Authorization: `Bearer ${state.token}`,
                }
            })
                .then(response => {
                    commit('setAllItems', response.data)
                })
                .catch(err => {
                    console.log(err.response.data);
                })
        },
        deleteItem({ commit }, payload) {
            commit('deleteItem', payload)
        },
        setInvoice({ commit }, payload) {
            commit('setInvoice', payload)
        },

        fetchAllInvoices({commit, state}) {
            axios.get('/api/invoice', {
                headers: {
                    Authorization: `Bearer ${state.token}`
                }
            })
            .then(response => {
                commit('setAllInvoices', response.data);
            })
            .catch(err => {
                console.log(err.response.data);
            })
        }
    },
    getters: {},
    plugins: [new VuexPersistence().plugin]
})

export default store;
