<template>
  <div>
    <b-container>
      <br />
      <b-button variant="primary" @click="$router.go(-1)">Back</b-button>
      <br />
      <b-card>
        <b-row>
          <b-col> </b-col>
          <b-col><h4>Your Invoice</h4></b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-img>
              <b-img
                :src="logo"
                rounded="circle"
                alt=""
                height="100"
                width="100"
              ></b-img>
            </b-img>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      invoice: {},
    };
  },
  mounted() {
    axios
      .get(`/api/invoice/${this.$router.params.id}`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((response) => {
          console.log(response.data);
        this.invoice = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    if (!this.$store.state.token) {
      this.$router.push("/login");
    }
    if (!this.$store.state.invoice) {
      this.$router.push("/create-invoice");
    }
  },

  computed: {
    logo() {
      return 
    },
  },
};
</script>