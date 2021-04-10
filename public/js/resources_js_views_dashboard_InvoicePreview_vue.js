(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_InvoicePreview_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/InvoicePreview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/InvoicePreview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
      invoice: {},
      fields: ["name", "price", "quantity", "amount"]
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.$store.state.token) {
      this.$router.push("/login");
    }

    if (!this.$store.state.invoice) {
      this.$router.push("/create-invoice");
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/invoice/".concat(this.$route.params.id), {
      headers: {
        Authorization: "Bearer ".concat(this.$store.state.token)
      }
    }).then(function (response) {
      console.log(response.data);
      _this.invoice = response.data;
      console.log(_this.logo);
    })["catch"](function (err) {
      console.log(err);
    });
  },
  computed: {
    logo: function logo() {
      return "".concat(this.invoice.organizationLogo);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/dashboard/InvoicePreview.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/dashboard/InvoicePreview.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InvoicePreview_vue_vue_type_template_id_aba26856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoicePreview.vue?vue&type=template&id=aba26856& */ "./resources/js/views/dashboard/InvoicePreview.vue?vue&type=template&id=aba26856&");
/* harmony import */ var _InvoicePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoicePreview.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/InvoicePreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InvoicePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InvoicePreview_vue_vue_type_template_id_aba26856___WEBPACK_IMPORTED_MODULE_0__.render,
  _InvoicePreview_vue_vue_type_template_id_aba26856___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/InvoicePreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/InvoicePreview.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/dashboard/InvoicePreview.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvoicePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/InvoicePreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/dashboard/InvoicePreview.vue?vue&type=template&id=aba26856&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/InvoicePreview.vue?vue&type=template&id=aba26856& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_template_id_aba26856___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_template_id_aba26856___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePreview_vue_vue_type_template_id_aba26856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvoicePreview.vue?vue&type=template&id=aba26856& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/InvoicePreview.vue?vue&type=template&id=aba26856&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/InvoicePreview.vue?vue&type=template&id=aba26856&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/InvoicePreview.vue?vue&type=template&id=aba26856& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        "b-container",
        [
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "b-card",
            [
              _c(
                "b-row",
                [
                  _c("b-col"),
                  _vm._v(" "),
                  _c("b-col", [_c("h4", [_vm._v("Your Invoice")])]),
                  _vm._v(" "),
                  _c("b-col")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticStyle: { background: "blue" } },
                [
                  _c(
                    "b-col",
                    [
                      _c("b-img", {
                        attrs: {
                          src: _vm.logo ? _vm.logo : "",
                          rounded: "circle",
                          alt: "",
                          height: "100",
                          width: "100"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col"),
                  _vm._v(" "),
                  _c("b-col", [
                    _c("p", { staticStyle: { color: "white" } }, [
                      _vm._v(_vm._s(_vm.invoice.organizationName))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticStyle: { color: "white" } }, [
                      _vm._v(_vm._s(_vm.invoice.organizationEmail))
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c("b-col", [
                    _c("p", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v("Bill To")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoice.customer.name))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoice.customer.address))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoice.customer.email))])
                  ]),
                  _vm._v(" "),
                  _c("b-col", [
                    _c("p", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v("Date Issued")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoice.issueDate))]),
                    _vm._v(" "),
                    _c("p", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v("Date Due ")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoice.dueDate))])
                  ]),
                  _vm._v(" "),
                  _c("b-col", [
                    _c("p", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v("Amount Due")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("GHS " + _vm._s(_vm.invoice.totalAmount))])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("b-table", {
                attrs: {
                  striped: "",
                  hover: "",
                  items: _vm.invoice.items,
                  fields: _vm.fields
                }
              }),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "8" } }, [
                    _c("p", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v("Note")
                    ]),
                    _vm._v(" "),
                    _vm.invoice.notes !== "undefined"
                      ? _c("p", [_vm._v(_vm._s(_vm.invoice.notes))])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "4" } }, [
                    _c("p", [
                      _vm._v("Subtotal: GHS " + _vm._s(_vm.invoice.subTotal))
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Discount: GHS " +
                          _vm._s(
                            (_vm.invoice.discount / 100) * _vm.invoice.subTotal
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("Total: GHS " + _vm._s(_vm.invoice.totalAmount))
                    ])
                  ])
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);