<template>
  <div>
    <br />
    <b-container>
      <b-card>
        <b-row>
          <b-col><h2>Create Invoice</h2></b-col>
          <b-col></b-col>
          <b-col
            ><b-img
              :src="logo"
              v-bind="logo"
              rounded="circle"
              alt=""
              height="100"
              width="100"
            ></b-img
          ></b-col>
        </b-row>

        <b-form @submit.prevent="previewInvoice">
          <b-row>
            <b-col cols="4">
              <b-form-group id="organizationName" label="Organization Name">
                <b-form-input
                  type="text"
                  v-model="organizationName"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group id="organizationEmail" label="Organization Email">
                <b-form-input
                  type="email"
                  v-model="organizationEmail"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group id="organizationLogo" label="Organization Logo">
                <b-form-file
                  v-model="organizationLogo"
                  accept=".jpg, .png, .gif"
                  enctype="multipart/form-data"
                  @change="onFileChange"
                  required
                ></b-form-file>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <b-form-group id="customer" label="Select Customer">
                <b-form-select
                  v-model="customerId"
                  :options="this.$store.state.customers"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <label for="Issue Date">Issue Date</label>
              <b-form-datepicker
                id="issue-date"
                v-model="issueDate"
                class="mb-2"
                :state="!issueDate ? false : true"
              ></b-form-datepicker>
            </b-col>
            <b-col cols="3">
              <label for="due-date">Due date</label>
              <b-form-datepicker
                id="due-date"
                v-model="dueDate"
                class="mb-2"
                :state="!dueDate ? false : true"
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
              <span v-if="itemsError" style="color: red; text-align: center">
                {{ itemsError }}</span
              >
              <b-table
                striped
                hover
                :items="this.$store.state.items"
                :fields="fields"
              >
                <template #cell(Delete)="data">
                  <b-button variant="primary" @click="deleteItem(data.item)"
                    >Delete</b-button
                  >
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
          <br />

          <b-row>
            <b-col cols="3"> </b-col>
            <b-col>
              <b-button variant="info" v-b-modal.new-item-modal block
                >Create New Item</b-button
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
              <br />
              <h3>Subtotal GH¢ {{ subTotal }}</h3>
              <h3>
                Discount GH¢ {{ discount ? (discount / 100) * subTotal : 0 }}
                <b-form-input
                  placeholder="Type discount %"
                  type="number"
                  v-model="discount"
                ></b-form-input>
              </h3>

              <hr />
              <h3>Amount Due GH¢ {{ amountDue }}</h3>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="3"> </b-col>
            <b-col>
              <b-button variant="primary" block type="submit">
                <b-spinner small v-if="loading"></b-spinner>Save &
                Preview</b-button
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
    <b-modal id="new-item-modal" title="New Item" ok-disabled>
      <NewItem />
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import NewItem from "../../components/NewItem";
import AddItem from "../../components/AddItem";
import CreateCustomer from "../../components/CreateCustomer";

export default {
  data() {
    return {
      customerId: this.$store.state.invoice.customerId,
      organizationName: this.$store.state.invoice.organizationName,
      organizationEmail: this.$store.state.invoice.organizationEmail,
      organizationLogo: this.logo,
      issueDate: this.$store.state.invoice.issueDate,
      dueDate: this.$store.state.invoice.dueDate,
      notes: this.$store.state.invoice.notes,
      discount: this.$store.state.invoice.discount,
      fields: ["name", "price", "quantity", "amount", "Delete"],
      itemsError: "",
      loading: false,
    };
  },
  components: {
    AddItem,
    NewItem,
    CreateCustomer,
  },
  mounted() {
    console.log(this.organizationLogo);
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
      this.$store.dispatch("deleteItem", item);
    },
    onFileChange(e) {
      this.organizationLogo = e.target.files[0];
    },
    previewInvoice() {
      if (this.$store.state.items.length === 0) {
        this.itemsError = "Please add an item";
        return;
      }
      if (this.dueDate === null || this.issueDate == null) return;

      this.loading = true;
      let invoiceData = new FormData();
      invoiceData.append("organizationName", this.organizationName);
      invoiceData.append("organizationEmail", this.organizationEmail);
      invoiceData.append("organizationLogo", this.organizationLogo);
      invoiceData.append("customer_id", this.customerId);
      invoiceData.append("issueDate", this.issueDate);
      invoiceData.append("dueDate", this.dueDate);

      for (let index = 0; index < this.$store.state.itemIds.length; index++) {
            invoiceData.append('items[]', this.$store.state.itemIds[index])
      }
      
      invoiceData.append("subTotal", this.subTotal);
      invoiceData.append("notes", this.notes);
      invoiceData.append("discount", this.discount);
      invoiceData.append("totalAmount", this.amountDue);
      console.log(this.$store.state.items);
      axios
        .post("/api/invoice", invoiceData, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((response) => {
          this.$router.push(`/preview-invoice/${response.data.invoice.id}`);
        })
        .catch((err) => {
          this.loading = false;
          swal("Oops!", err.response.data.message, "error");
        });
    },
  },
  computed: {
    items() {
      return this.$store.state.items;
    },

    subTotal() {
      let total = 0;
      this.$store.state.items.forEach((item) => {
        total += item.amount;
      });
      return total.toFixed(2);
    },

    amountDue() {
      if (!this.discount) this.discount = 0;
      return (this.subTotal - (this.discount / 100) * this.subTotal).toFixed(2);
    },
    logo() {
      if (this.organizationLogo)
        return URL.createObjectURL(this.organizationLogo);
    },
  },
};
</script>   