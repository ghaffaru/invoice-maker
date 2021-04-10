<template>
  <div>
    <b-container>
      <br />
      <br />
      <b-card>
        <b-row>
          <b-col> </b-col>
          <b-col><h4>Your Invoice</h4></b-col>
          <b-col></b-col>
        </b-row>
        <b-row style="background: blue">
          <b-col>

              <b-img
                :src="logo ? logo: ''"
                rounded="circle"
                alt=""
                height="100"
                width="100"
              ></b-img>

          </b-col>
          <b-col></b-col>
          <b-col>
              <p style="color: white">{{ invoice.organizationName }}</p>
              <p style="color: white">{{ invoice.organizationEmail }}</p>
          </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <p style="font-weight:bold">Bill To</p>
                <p>{{ invoice.customer.name}}</p>
                <p>{{ invoice.customer.address}}</p>
                <p>{{ invoice.customer.email }}</p>
            </b-col>
            <b-col>
                <p style="font-weight:bold">Date Issued</p>
                <p>{{ invoice.issueDate }}</p>
                <p style="font-weight:bold">Date Due </p>
                <p>{{ invoice.dueDate }}</p>
            </b-col>
            <b-col>
                <p style="font-weight:bold">Amount Due</p>
                <p>GHS {{ invoice.totalAmount }}</p>
            </b-col>
        </b-row>
        <hr>
        <b-table
                striped
                hover
                :items="invoice.items"
                :fields="fields"
              >
        </b-table>
        <hr>
        <b-row>
            <b-col cols="8">
                <p style="font-weight:bold">Note</p>
                <p v-if="invoice.notes !== 'undefined'">{{ invoice.notes }}</p>
            </b-col>
            <b-col cols="4">
                <p>Subtotal: GHS {{ invoice.subTotal }}</p>
                <p>Discount: GHS {{ invoice.discount / 100 * invoice.subTotal }}</p>
                <p>Total: GHS {{ invoice.totalAmount }}</p>
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
      fields: ["name", "price", "quantity", "amount"],
    };
  },
  mounted() {
   if (!this.$store.state.token) {
      this.$router.push("/login");
    }
    if (!this.$store.state.invoice) {
      this.$router.push("/create-invoice");
    }
    axios
      .get(`/api/invoice/${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((response) => {
          console.log(response.data);
          this.invoice = response.data;
          console.log(this.logo);
      })
      .catch((err) => {
        console.log(err);
      });

  },

  computed: {
    logo() {
      return `${this.invoice.organizationLogo}`;
    },
  },
};
</script>
