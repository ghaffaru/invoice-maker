<template>
    <div>
    <b-form @submit.prevent="addItem">
      
        <b-form-group id="item" label="Select Item">
                <b-form-select
                  v-model="itemId"
                  :options="this.$store.state.allItems"
                  required
                ></b-form-select>
                <span v-if="itemIdError" style="color: red">{{
          itemIdError
        }}</span>
        </b-form-group>

        <span>Price: GHS {{ price }}</span>
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
      itemId: "",
      quantity: "",

      itemIdError: "",
      quantityError: "",
    };
  },
  methods: {
    addItem() {
      this.itemIdError = this.itemId ? "" : "Item is required";
      this.quantityError = this.quantity ? "" : "Item quantity is required!";

      if (this.nameError || this.priceError || this.quantityError) return;

      const data = {
        id: this.itemId,
        name: this.selectedItem.name,
        price: this.selectedItem.price,
        quantity: this.quantity,
        amount: this.amount,
      };
      this.$store.dispatch("addItem", data);
      
      this.$bvModal.hide("add-item-modal");
    },
  },

  computed: {
    amount() {
      return this.price * this.quantity;
    },
    price() {
        if (this.itemId) {
        const item = this.$store.state.allItems.find(item => item.id === this.itemId);
        return item.price;
        } else return 0;  
    },
    selectedItem() {
        if (this.itemId) {
            return this.$store.state.allItems.find(item => item.id === this.itemId);
        }
    }
  },
};
</script>