<template>
    <div>
    <b-form @submit.prevent="addItem">
      <b-form-group id="name" label="Item Name">
        <b-form-input
          id="name"
          v-model="name"
          type="text"
          placeholder="Item Name"
        ></b-form-input>
        <span v-if="nameError" style="color: red">{{
          nameError
        }}</span>
      </b-form-group>

      <b-form-group id="price" label="Price (GHS)">
        <b-form-input
          id="price"
          v-model="price"
          type="number"
          step=".01"
          placeholder="Price"
        ></b-form-input>
        <span v-if="priceError" style="color: red">{{
          priceError
        }}</span>
      </b-form-group>
      <b-form-group id="quantity" label="Quantity">
        <b-form-input
          id="quantity"
          v-model="quantity"
          type="number"
          placeholder="Quantity"
        ></b-form-input>
        <span v-if="quantityError" style="color: red">{{
          quantityError
        }}</span>
      </b-form-group>
        <label for="">Amount: </label>
        <span>GHS {{ amount }}</span> <br>
      <b-button type="submit" variant="primary">Add</b-button>
      <br />
    </b-form>
    </div>
</template>

<script> 
export default {
    data() {
        return {
            name: '',
            price: '',
            quantity: '',

            nameError: '',
            priceError: '',
            quantityError: ''
        }
    },
    methods: {
        addItem() {
            this.nameError = this.name ? '' : 'Item name is required';
            this.priceError = this.price ? '': 'Item price is required';
            this.quantityError = this.quantity ? '': 'Item quantity is required!'

            if (this.nameError || this.priceError || this.quantityError) return;

            const data = {
                name: this.name,
                price: this.price,
                quantity: this.quantity,
                amount: this.amount
            }
            this.$store.dispatch('addItem', data);
            this.$bvModal.hide("add-item-modal");
        }
    },

    computed: {
        amount() {
            return this.price * this.quantity
        }
    }
}
</script>