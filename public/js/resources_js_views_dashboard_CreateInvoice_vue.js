(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_CreateInvoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: '',
      price: '',
      quantity: '',
      nameError: '',
      priceError: '',
      quantityError: ''
    };
  },
  methods: {
    addItem: function addItem() {
      this.nameError = this.name ? '' : 'Item name is required';
      this.priceError = this.price ? '' : 'Item price is required';
      this.quantityError = this.quantity ? '' : 'Item quantity is required!';
      if (this.nameError || this.priceError || this.quantityError) return;
      var data = {
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        amount: this.amount
      };
      this.$store.dispatch('addItem', data);
      this.$bvModal.hide("add-item-modal");
    }
  },
  computed: {
    amount: function amount() {
      return this.price * this.quantity;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateCustomer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateCustomer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      customerName: "",
      customerEmail: "",
      customerPhoneNumber: "",
      customerAddress: "",
      customerNameError: "",
      customerEmailError: "",
      customerPhoneNumberError: "",
      customerAddressError: ""
    };
  },
  methods: {
    createCustomer: function createCustomer() {
      var _this = this;

      var customerData = {
        name: this.customerName,
        email: this.customerEmail,
        phone_number: this.customerPhoneNumber,
        address: this.customerAddress
      };
      axios.post("/api/customer", customerData, {
        headers: {
          Authorization: "Bearer ".concat(this.$store.state.token)
        }
      }).then(function (response) {
        _this.$store.dispatch("updateCustomers", response.data.customer);

        _this.$bvModal.hide("create-customer-modal");
      })["catch"](function (err) {
        var errors = err.response.data.errors;
        _this.customerNameError = errors.name ? errors.name[0] : "";
        _this.customerEmailError = errors.email ? errors.email[0] : "";
        _this.customerPhoneNumberError = errors.phone_number ? errors.phone_number[0] : "";
        _this.customerAddressError = errors.address ? errors.address[0] : "";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CreateInvoice.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CreateInvoice.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AddItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AddItem */ "./resources/js/components/AddItem.vue");
/* harmony import */ var _components_CreateCustomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CreateCustomer */ "./resources/js/components/CreateCustomer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      customerId: "",
      issueDate: "",
      dueDate: "",
      notes: "",
      discount: ""
    };
  },
  components: {
    AddItem: _components_AddItem__WEBPACK_IMPORTED_MODULE_1__.default,
    CreateCustomer: _components_CreateCustomer__WEBPACK_IMPORTED_MODULE_2__.default
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.$store.state.token) {
      this.$router.push("/login");
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/customer", {
      headers: {
        Authorization: "Bearer ".concat(this.$store.state.token)
      }
    }).then(function (response) {
      _this.$store.dispatch("setCustomers", response.data);
    })["catch"](function (err) {
      console.log(err.response.data);
    });
  },
  methods: {},
  computed: {
    items: function items() {
      return this.$store.state.items;
    },
    subTotal: function subTotal() {
      var total = 0;
      this.$store.state.items.forEach(function (item) {
        total += item.amount;
      });
      return total.toFixed(2);
    },
    amountDue: function amountDue() {
      return (this.subTotal - this.discount / 100 * this.subTotal).toFixed(2);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/AddItem.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/AddItem.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddItem.vue?vue&type=template&id=38cae28e& */ "./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e&");
/* harmony import */ var _AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddItem.vue?vue&type=script&lang=js& */ "./resources/js/components/AddItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CreateCustomer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/CreateCustomer.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateCustomer_vue_vue_type_template_id_59f3b1b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCustomer.vue?vue&type=template&id=59f3b1b6& */ "./resources/js/components/CreateCustomer.vue?vue&type=template&id=59f3b1b6&");
/* harmony import */ var _CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCustomer.vue?vue&type=script&lang=js& */ "./resources/js/components/CreateCustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CreateCustomer_vue_vue_type_template_id_59f3b1b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateCustomer_vue_vue_type_template_id_59f3b1b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CreateCustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/CreateInvoice.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/dashboard/CreateInvoice.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateInvoice_vue_vue_type_template_id_15d27cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateInvoice.vue?vue&type=template&id=15d27cf2& */ "./resources/js/views/dashboard/CreateInvoice.vue?vue&type=template&id=15d27cf2&");
/* harmony import */ var _CreateInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateInvoice.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/CreateInvoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CreateInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CreateInvoice_vue_vue_type_template_id_15d27cf2___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateInvoice_vue_vue_type_template_id_15d27cf2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/CreateInvoice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/AddItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CreateCustomer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CreateCustomer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateCustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/dashboard/CreateInvoice.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/dashboard/CreateInvoice.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CreateInvoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_template_id_38cae28e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddItem.vue?vue&type=template&id=38cae28e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e&");


/***/ }),

/***/ "./resources/js/components/CreateCustomer.vue?vue&type=template&id=59f3b1b6&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/CreateCustomer.vue?vue&type=template&id=59f3b1b6& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_59f3b1b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_59f3b1b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_59f3b1b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCustomer.vue?vue&type=template&id=59f3b1b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateCustomer.vue?vue&type=template&id=59f3b1b6&");


/***/ }),

/***/ "./resources/js/views/dashboard/CreateInvoice.vue?vue&type=template&id=15d27cf2&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/dashboard/CreateInvoice.vue?vue&type=template&id=15d27cf2& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInvoice_vue_vue_type_template_id_15d27cf2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInvoice_vue_vue_type_template_id_15d27cf2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInvoice_vue_vue_type_template_id_15d27cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateInvoice.vue?vue&type=template&id=15d27cf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CreateInvoice.vue?vue&type=template&id=15d27cf2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddItem.vue?vue&type=template&id=38cae28e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addItem($event)
            }
          }
        },
        [
          _c(
            "b-form-group",
            { attrs: { id: "name", label: "Item Name" } },
            [
              _c("b-form-input", {
                attrs: { id: "name", type: "text", placeholder: "Item Name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _vm.nameError
                ? _c("span", { staticStyle: { color: "red" } }, [
                    _vm._v(_vm._s(_vm.nameError))
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { id: "price", label: "Price (GHS)" } },
            [
              _c("b-form-input", {
                attrs: {
                  id: "price",
                  type: "number",
                  step: ".01",
                  placeholder: "Price"
                },
                model: {
                  value: _vm.price,
                  callback: function($$v) {
                    _vm.price = $$v
                  },
                  expression: "price"
                }
              }),
              _vm._v(" "),
              _vm.priceError
                ? _c("span", { staticStyle: { color: "red" } }, [
                    _vm._v(_vm._s(_vm.priceError))
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { id: "quantity", label: "Quantity" } },
            [
              _c("b-form-input", {
                attrs: {
                  id: "quantity",
                  type: "number",
                  placeholder: "Quantity"
                },
                model: {
                  value: _vm.quantity,
                  callback: function($$v) {
                    _vm.quantity = $$v
                  },
                  expression: "quantity"
                }
              }),
              _vm._v(" "),
              _vm.quantityError
                ? _c("span", { staticStyle: { color: "red" } }, [
                    _vm._v(_vm._s(_vm.quantityError))
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("label", { attrs: { for: "" } }, [_vm._v("Amount: ")]),
          _vm._v(" "),
          _c("span", [_vm._v("GHS " + _vm._s(_vm.amount))]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("b-button", { attrs: { type: "submit", variant: "primary" } }, [
            _vm._v("Add")
          ]),
          _vm._v(" "),
          _c("br")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateCustomer.vue?vue&type=template&id=59f3b1b6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateCustomer.vue?vue&type=template&id=59f3b1b6& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.createCustomer($event)
            }
          }
        },
        [
          _c(
            "b-form-group",
            { attrs: { id: "name", label: "Customer Name" } },
            [
              _c("b-form-input", {
                attrs: {
                  id: "name",
                  type: "text",
                  placeholder: "Customer Name"
                },
                model: {
                  value: _vm.customerName,
                  callback: function($$v) {
                    _vm.customerName = $$v
                  },
                  expression: "customerName"
                }
              }),
              _vm._v(" "),
              _vm.customerNameError
                ? _c("span", { staticStyle: { color: "red" } }, [
                    _vm._v(_vm._s(_vm.customerNameError))
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { id: "email", label: "Customer Email" } },
            [
              _c("b-form-input", {
                attrs: {
                  id: "email",
                  type: "email",
                  placeholder: "Customer Email"
                },
                model: {
                  value: _vm.customerEmail,
                  callback: function($$v) {
                    _vm.customerEmail = $$v
                  },
                  expression: "customerEmail"
                }
              }),
              _vm._v(" "),
              _vm.customerEmailError
                ? _c("span", { staticStyle: { color: "red" } }, [
                    _vm._v(_vm._s(_vm.customerEmailError))
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { id: "name", label: "Customer Phone Number" } },
            [
              _c("b-form-input", {
                attrs: {
                  id: "phoneNumber",
                  type: "text",
                  placeholder: "Customer Phone Number"
                },
                model: {
                  value: _vm.customerPhoneNumber,
                  callback: function($$v) {
                    _vm.customerPhoneNumber = $$v
                  },
                  expression: "customerPhoneNumber"
                }
              }),
              _vm._v(" "),
              _vm.customerPhoneNumberError
                ? _c("span", { staticStyle: { color: "red" } }, [
                    _vm._v(_vm._s(_vm.customerPhoneNumberError))
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { id: "address", label: "Customer Address" } },
            [
              _c("b-form-input", {
                attrs: {
                  id: "address",
                  type: "text",
                  placeholder: "Customer Address"
                },
                model: {
                  value: _vm.customerAddress,
                  callback: function($$v) {
                    _vm.customerAddress = $$v
                  },
                  expression: "customerAddress"
                }
              }),
              _vm._v(" "),
              _vm.customerAddressError
                ? _c("span", { staticStyle: { color: "red" } }, [
                    _vm._v(_vm._s(_vm.customerAddressError))
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("b-button", { attrs: { type: "submit", variant: "primary" } }, [
            _vm._v("Create")
          ]),
          _vm._v(" "),
          _c("br")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CreateInvoice.vue?vue&type=template&id=15d27cf2&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CreateInvoice.vue?vue&type=template&id=15d27cf2& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("br"),
      _vm._v(" "),
      _c(
        "b-container",
        [
          _c(
            "b-card",
            [
              _c("h2", [_vm._v("Create Invoice")]),
              _vm._v(" "),
              _c(
                "b-form",
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "6" } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                id: "customer",
                                label: "Select Customer"
                              }
                            },
                            [
                              _c("b-form-select", {
                                attrs: { options: this.$store.state.customers },
                                model: {
                                  value: _vm.customerId,
                                  callback: function($$v) {
                                    _vm.customerId = $$v
                                  },
                                  expression: "customerId"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "3" } },
                        [
                          _c("label", { attrs: { for: "Issue Date" } }, [
                            _vm._v("Issue Date")
                          ]),
                          _vm._v(" "),
                          _c("b-form-datepicker", {
                            staticClass: "mb-2",
                            attrs: { id: "issue-date" },
                            model: {
                              value: _vm.issueDate,
                              callback: function($$v) {
                                _vm.issueDate = $$v
                              },
                              expression: "issueDate"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "3" } },
                        [
                          _c("label", { attrs: { for: "due-date" } }, [
                            _vm._v("Due date")
                          ]),
                          _vm._v(" "),
                          _c("b-form-datepicker", {
                            staticClass: "mb-2",
                            attrs: { id: "due-date" },
                            model: {
                              value: _vm.dueDate,
                              callback: function($$v) {
                                _vm.dueDate = $$v
                              },
                              expression: "dueDate"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal.create-customer-modal",
                                  modifiers: { "create-customer-modal": true }
                                }
                              ],
                              attrs: {
                                value: "Create a customer",
                                variant: "primary"
                              }
                            },
                            [_vm._v("Create a customer")]
                          ),
                          _vm._v(" "),
                          _c("br")
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("b-table", {
                            attrs: {
                              striped: "",
                              hover: "",
                              items: this.$store.state.items
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c("b-col", { attrs: { cols: "3" } }),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal.add-item-modal",
                                  modifiers: { "add-item-modal": true }
                                }
                              ],
                              attrs: { variant: "primary", block: "" }
                            },
                            [_vm._v("Add Item")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-col", { attrs: { cols: "3" } })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "7" } },
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("b-form-textarea", {
                            attrs: {
                              id: "textarea",
                              placeholder: "Notes",
                              rows: "3",
                              "max-rows": "6"
                            },
                            model: {
                              value: _vm.notes,
                              callback: function($$v) {
                                _vm.notes = $$v
                              },
                              expression: "notes"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-col", { attrs: { cols: "5" } }, [
                        _c("br"),
                        _vm._v(" "),
                        _c("h3", [
                          _vm._v("Subtotal  GH¢ " + _vm._s(_vm.subTotal) + " ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "h3",
                          [
                            _vm._v(
                              "Discount GH¢ " + _vm._s(_vm.discount) + " "
                            ),
                            _c("b-form-input", {
                              attrs: {
                                placeholder: "Type discount %",
                                type: "number"
                              },
                              model: {
                                value: _vm.discount,
                                callback: function($$v) {
                                  _vm.discount = $$v
                                },
                                expression: "discount"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("h3", [
                          _vm._v(
                            "Amount Due GH¢ " + _vm._s(_vm.amountDue) + " "
                          )
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c("b-col", { attrs: { cols: "3" } }),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "primary", block: "" } },
                            [_vm._v("Preview")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-col", { attrs: { cols: "3" } })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "create-customer-modal",
            title: "Create customer",
            "ok-disabled": ""
          }
        },
        [_c("CreateCustomer")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { id: "add-item-modal", title: "Add Item", "ok-disabled": "" }
        },
        [_c("AddItem")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);