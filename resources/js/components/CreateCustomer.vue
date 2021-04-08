<template>
  <div>
    <b-form @submit.prevent="createCustomer">
      <b-form-group id="name" label="Customer Name">
        <b-form-input
          id="name"
          v-model="customerName"
          type="text"
          placeholder="Customer Name"
        ></b-form-input>
        <span v-if="customerNameError" style="color: red">{{
          customerNameError
        }}</span>
      </b-form-group>

      <b-form-group id="email" label="Customer Email">
        <b-form-input
          id="email"
          v-model="customerEmail"
          type="email"
          placeholder="Customer Email"
        ></b-form-input>
        <span v-if="customerEmailError" style="color: red">{{
          customerEmailError
        }}</span>
      </b-form-group>
      <b-form-group id="name" label="Customer Phone Number">
        <b-form-input
          id="phoneNumber"
          v-model="customerPhoneNumber"
          type="text"
          placeholder="Customer Phone Number"
        ></b-form-input>
        <span v-if="customerPhoneNumberError" style="color: red">{{
          customerPhoneNumberError
        }}</span>
      </b-form-group>

      <b-form-group id="address" label="Customer Address">
        <b-form-input
          id="address"
          v-model="customerAddress"
          type="text"
          placeholder="Customer Address"
        ></b-form-input>
        <span v-if="customerAddressError" style="color: red">{{
          customerAddressError
        }}</span>
      </b-form-group>

      <b-button type="submit" variant="primary">Create</b-button>
      <br />
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerName: "",
      customerEmail: "",
      customerPhoneNumber: "",
      customerAddress: "",

      customerNameError: "",
      customerEmailError: "",
      customerPhoneNumberError: "",
      customerAddressError: "",
    };
  },

  methods: {
    createCustomer() {
      const customerData = {
        name: this.customerName,
        email: this.customerEmail,
        phone_number: this.customerPhoneNumber,
        address: this.customerAddress,
      };

      axios
        .post("/api/customer", customerData, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          this.$store.dispatch("updateCustomers", response.data.customer);
          this.$bvModal.hide("create-customer-modal");
        })
        .catch((err) => {
          const errors = err.response.data.errors;

          this.customerNameError = errors.name ? errors.name[0] : "";
          this.customerEmailError = errors.email ? errors.email[0] : "";
          this.customerPhoneNumberError = errors.phone_number
            ? errors.phone_number[0]
            : "";
          this.customerAddressError = errors.address ? errors.address[0] : "";
        });
    },
  },
};
</script>