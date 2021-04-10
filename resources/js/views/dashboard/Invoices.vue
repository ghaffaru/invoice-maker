<template>
  <div>
    <b-container>
        <h2 style="text-align:center">Invoices</h2>
      <b-overlay :show="show" rounded="sm">
        <b-table
          striped
          hover
          outlined
          :items="this.$store.state.invoices"
          :fields="fields"
          :filter="filter"
          :per-page="perPage"
          :current-page="currentPage"
        >
          <template #cell(Preview)="data">
            <b-button variant="primary" @click="preview(data.item.id)"
              >Preview</b-button
            >
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        >
        </b-pagination>
      </b-overlay>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            filter: '',
            perPage: 10,
            fields: ["organizationName", "organizationEmail", "totalAmount", "Preview"]
        }
    },
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push("/login");
    }

    this.$store.dispatch('fetchAllInvoices');
  },
  methods: {
      preview(id) {
          this.$router.push(`/preview-invoice/${id}`);
      }
  }
};
</script>

