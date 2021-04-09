<template>
  <div>
    <br />
    <b-container>
      <b-card>
        <h2>Create Invoice</h2>
        <b-form>
          <b-row>
            <b-col cols="6">
              <b-form-group id="customer" label="Select Customer">
                <b-form-select
                  v-model="customerId"
                  :options="this.$store.state.customers"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <label for="Issue Date">Issue Date</label>
              <b-form-datepicker
                id="issue-date"
                v-model="issueDate"
                class="mb-2"
              ></b-form-datepicker>
            </b-col>
            <b-col cols="3">
              <label for="due-date">Due date</label>
              <b-form-datepicker
                id="due-date"
                v-model="dueDate"
                class="mb-2"
              ></b-form-datepicker>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-button
                v-b-modal.create-customer-modal
                value="Create a customer"
                variant="primary"
                >Create a customer</b-button
              >
              <br />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <br />
              <b-table striped hover :items="this.$store.state.items" :fields="fields"
              >
              <template #cell(Delete)="data">
                                <b-button variant="primary" @click="deleteItem(data.item)">Delete</b-button>
              </template>
              </b-table>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3"> </b-col>
            <b-col>
              <b-button variant="primary" v-b-modal.add-item-modal block
                >Add Item</b-button
              >
            </b-col>
            <b-col cols="3"> </b-col>
          </b-row>

          <b-row>
            <b-col cols="7">
              <br />
              <b-form-textarea
                id="textarea"
                v-model="notes"
                placeholder="Notes"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-col>
            
            <b-col cols="5"> 
                <br>
                <h3>Subtotal  GH¢ {{ subTotal}} </h3>
                <h3>Discount GH¢ {{ discount / 100 * subTotal }} <b-form-input placeholder="Type discount %" type="number" v-model="discount"></b-form-input></h3>

                <hr>
                <h3>Amount Due GH¢ {{ amountDue }} </h3>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="3"> </b-col>
            <b-col>
              <b-button variant="primary"  block
                >Preview</b-button
              >
            </b-col>
            <b-col cols="3"> </b-col>
          </b-row>
        </b-form>
      </b-card>
    </b-container>

    <b-modal id="create-customer-modal" title="Create customer" ok-disabled>
      <CreateCustomer />
    </b-modal>

    <b-modal id="add-item-modal" title="Add Item" ok-disabled>
      <AddItem />
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import AddItem from "../../components/AddItem";
import CreateCustomer from "../../components/CreateCustomer";

export default {
  data() {
    return {
      customerId: "",
      issueDate: "",
      dueDate: "",
      notes: "",
      discount: "",
      fields: ["name", "price", "quantity", "amount", "Delete"]
    };
  },
  components: {
    AddItem,
    CreateCustomer,
  },
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push("/login");
    }
    axios
      .get("/api/customer", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((response) => {
        this.$store.dispatch("setCustomers", response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },

  methods: {
    deleteItem(item) {
      this.$store.dispatch('deleteItem', item);
    }
  },
  computed: {
    items() {
      return this.$store.state.items;
    },

    subTotal() {
        let total = 0
        this.$store.state.items.forEach(item => {
            total += item.amount
        });
        return total.toFixed(2);
    },

    amountDue() {
        return  (this.subTotal - (this.discount / 100 * this.subTotal)).toFixed(2)
    }
  },


};
</script>   