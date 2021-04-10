<template>
    <div>
    <b-form @submit.prevent="createItem">
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

      <b-button type="submit" variant="primary">Create</b-button>
      <br />
    </b-form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            price: '',

            nameError: '',
            priceError: '',
        }
    },
    methods: {
        createItem() {
            this.nameError = this.name ? '' : 'Item name is required';
            this.priceError = this.price ? '': 'Item price is required';

            if (this.nameError || this.priceError ) return;

            const data = {
                name: this.name,
                price: this.price
            }
            axios.post('/api/item', data, {
                headers: {
                    Authorization: `Bearer ${this.$store.state.token}`
                }
            })
            .then(response => {
                this.$store.dispatch('fetchAllItems');
            })
            .catch(err => {
                console.log(err)
            })
            this.$bvModal.hide("new-item-modal");
        }
    }
}
</script>
