<template>
  <div>
    <b-container>
      <b-row>
        <b-col> </b-col>
        <b-col>
          <h2>Register</h2>
          <b-card style="max-width: 400px">
            <b-form @submit.prevent="onSubmit">
              <b-form-group id="name" label="Your Name:">
                <b-form-input
                  id="name"
                  v-model="name"
                  placeholder="Enter name"
                  
                ></b-form-input>
                <span v-if="nameError" style="color:red"> {{ nameError }}</span>
              </b-form-group>
              <b-form-group id="email" label="Email address:">
                <b-form-input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="Enter email"
                  
                ></b-form-input>
                <span v-if="emailError" style="color:red">{{ emailError }}</span>
              </b-form-group>

              <b-form-group id="password" label="Your password">
                <b-form-input
                  id="email"
                  v-model="password"
                  type="password"
                  placeholder="Enter Password"
                 
                ></b-form-input>
                <span v-if="passwordError" style="color:red">{{ passwordError }}</span>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <br />
              <router-link to="/login">Login</router-link>
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
      name: "",
      email: "",
      password: "",

      nameError: "",
      emailError: "",
      passwordError: ""
    };


  },
    methods: {
        onSubmit() {
            const data = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            axios.post('/api/register', data)
                .then(response => {
                    
                    this.$store.dispatch('setToken', response.data.token);
                    this.$store.dispatch('setUser', response.data.user);
                    this.$router.push('/dashboard');
                })
                .catch(err => {
                    const errors = err.response.data.errors;

                    this.nameError = errors.name ? errors.name[0]: '';
                    this.emailError = errors.email ? errors.email[0]: '';
                    this.passwordError = errors.password ? errors.password[0]: '';
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
