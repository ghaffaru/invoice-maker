<template>
  <div>
    <b-container>
      <b-row>
        <b-col> </b-col>
        <b-col>
          <h2>Login</h2>
          <b-card style="max-width: 400px">
            <b-form @submit.prevent="onSubmit">
              <span v-if="incorrectCredentials" style="color: red">{{ incorrectCredentials }}</span>
              <b-form-group id="email" label="Email address:">
                <b-form-input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="Enter email"
                ></b-form-input>
                <span v-if="emailError" style="color: red">{{
                  emailError
                }}</span>
              </b-form-group>

              <b-form-group id="password" label="Your password">
                <b-form-input
                  id="email"
                  v-model="password"
                  type="password"
                  placeholder="Enter Password"
                ></b-form-input>
                <span v-if="passwordError" style="color: red">{{
                  passwordError
                }}</span>
              </b-form-group>

              <b-button type="submit" variant="primary">Login</b-button>
              <br />
              <router-link to="/">Register</router-link>
            </b-form>
          </b-card>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',

            emailError: '',
            passwordError: '',
            incorrectCredentials: ''
        }
    },

    methods: {
        onSubmit() {
            const data = {
                email: this.email,
                password: this.password
            }

            axios.post('/api/login', data)
                .then(response => {
                    
                    this.$store.dispatch('setToken', response.data.token);
                    this.$store.dispatch('setUser', response.data.user);
 
                    this.$router.push('/dashboard');
                })
                .catch(err => {
                    const errors = err.response.data.errors;

                    this.emailError = errors?.email ? errors.email[0]: '';
                    this.passwordError = errors?.password ? errors.password[0]: '';
                    this.incorrectCredentials = err.response.data.message ? err.response.data.message: '';
                })
        }
    },
     mounted() {
        
        if (this.$store.state.token) {
            this.$router.push('/dashboard')
        }
    }
};
</script>