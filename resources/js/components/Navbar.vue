<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">Invoice Maker</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav class="ml-auto">

                    <b-navbar-nav right>
                      <b-nav-item to="/" v-if="!isLoggedIn">Register</b-nav-item>
                      <b-nav-item to="/login" v-if="!isLoggedIn">Login</b-nav-item>
                      <b-nav-item to="/logout" v-if="isLoggedIn">Logout</b-nav-item>
                      <b-nav-item to="/create-invoice" v-if="isLoggedIn">Create Invoice</b-nav-item>
                      <b-nav-item v-if="isLoggedIn">{{ this.$store.state.user.name }}</b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        computed: {
            isLoggedIn() {
                return this.$store.state.token;
            }
        }
    }
</script>
