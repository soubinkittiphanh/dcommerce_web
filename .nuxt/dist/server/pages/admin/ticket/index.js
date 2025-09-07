exports.ids = [244];
exports.modules = {

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/ticket/index.vue?vue&type=template&id=8fca29c8&scoped=true&
var render = function render() {
  var _vm$selectedTicket, _vm$selectedTicket$cl, _vm$selectedTicket$ta, _vm$selectedTicket$ta2, _vm$selectedTicket2, _vm$selectedTicket3, _vm$selectedTicket4, _vm$selectedTicket5, _vm$selectedTicket6, _vm$printTicket$clien, _vm$printTicket$table, _vm$printTicket$table2, _vm$printTicket$clien2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tickets-listing-container"
  }, [_vm._ssrNode("<div class=\"page-header\" data-v-8fca29c8>", "</div>", [_vm._ssrNode("<h1 data-v-8fca29c8>Tickets Management</h1> "), _vm._ssrNode("<div class=\"header-actions\" data-v-8fca29c8>", "</div>", [_vm._ssrNode("<div class=\"search-filter\" data-v-8fca29c8>", "</div>", [_vm._ssrNode("<input type=\"text\" placeholder=\"Search tickets...\"" + _vm._ssrAttr("value", _vm.searchQuery) + " class=\"search-input\" data-v-8fca29c8> "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.statusFilter,
      expression: "statusFilter"
    }],
    staticClass: "filter-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.statusFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("Pending")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "preparing"
    }
  }, [_vm._v("Preparing")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ready"
    }
  }, [_vm._v("Ready")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "served"
    }
  }, [_vm._v("Served")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("Paid")])]), _vm._ssrNode(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentFilter,
      expression: "paymentFilter"
    }],
    staticClass: "filter-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.paymentFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All Payments")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pending"
    }
  }, [_vm._v("Payment Pending")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "paid"
    }
  }, [_vm._v("Paid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "refunded"
    }
  }, [_vm._v("Refunded")])]), _vm._ssrNode(" <input type=\"date\" placeholder=\"Start Date\"" + _vm._ssrAttr("value", _vm.startDate) + " class=\"date-input\" data-v-8fca29c8> <input type=\"date\" placeholder=\"End Date\"" + _vm._ssrAttr("value", _vm.endDate) + " class=\"date-input\" data-v-8fca29c8>")], 2), _vm._ssrNode(" <button class=\"btn btn-refresh\" data-v-8fca29c8><span class=\"refresh-icon\" data-v-8fca29c8>↻</span> Refresh\n      </button>")], 2)], 2), _vm._ssrNode(" <div class=\"stats-summary\" data-v-8fca29c8><div class=\"stat-card\" data-v-8fca29c8><div class=\"stat-number\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.stats.total)) + "</div> <div class=\"stat-label\" data-v-8fca29c8>Total Tickets</div></div> <div class=\"stat-card\" data-v-8fca29c8><div class=\"stat-number\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.stats.pending)) + "</div> <div class=\"stat-label\" data-v-8fca29c8>Pending</div></div> <div class=\"stat-card\" data-v-8fca29c8><div class=\"stat-number\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.stats.preparing)) + "</div> <div class=\"stat-label\" data-v-8fca29c8>Preparing</div></div> <div class=\"stat-card\" data-v-8fca29c8><div class=\"stat-number\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.stats.ready)) + "</div> <div class=\"stat-label\" data-v-8fca29c8>Ready</div></div> <div class=\"stat-card\" data-v-8fca29c8><div class=\"stat-number\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.stats.unpaid)) + "</div> <div class=\"stat-label\" data-v-8fca29c8>Unpaid</div></div></div> " + (_vm.loading ? "<div class=\"loading-state\" data-v-8fca29c8><div class=\"spinner\" data-v-8fca29c8></div> <p data-v-8fca29c8>Loading tickets...</p></div>" : _vm.error ? "<div class=\"error-state\" data-v-8fca29c8><div class=\"error-icon\" data-v-8fca29c8>⚠️</div> <h3 data-v-8fca29c8>Error Loading Tickets</h3> <p data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.error)) + "</p> <button class=\"retry-btn\" data-v-8fca29c8>Try Again</button></div>" : "<div class=\"tickets-list\" data-v-8fca29c8>" + (_vm.filteredTickets.length === 0 ? "<div class=\"no-tickets\" data-v-8fca29c8><div class=\"no-tickets-icon\" data-v-8fca29c8>🎫</div> <h3 data-v-8fca29c8>No tickets found</h3> " + (_vm.hasActiveFilters ? "<p data-v-8fca29c8>Try adjusting your filters</p>" : "<p data-v-8fca29c8>No tickets available</p>") + "</div>" : "<div class=\"tickets-grid\" data-v-8fca29c8>" + _vm._ssrList(_vm.filteredTickets, function (ticket) {
    var _ticket$client, _ticket$table, _ticket$table2, _ticket$ticketLines;
    return "<div" + _vm._ssrClass("ticket-card", {
      'urgent': _vm.isUrgent(ticket)
    }) + " data-v-8fca29c8><div class=\"card-header\" data-v-8fca29c8><div class=\"ticket-number\" data-v-8fca29c8><span class=\"ticket-id\" data-v-8fca29c8>" + _vm._ssrEscape("#" + _vm._s(ticket.id)) + "</span> <span class=\"ticket-time\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.formatTime(ticket.createdAt))) + "</span></div> <div class=\"ticket-badges\" data-v-8fca29c8><span" + _vm._ssrClass(null, ['status-badge', `status-${ticket.status}`]) + " data-v-8fca29c8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatStatus(ticket.status)) + "\n            ") + "</span> <span" + _vm._ssrClass(null, ['payment-badge', `payment-${ticket.paymentStatus}`]) + " data-v-8fca29c8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatPaymentStatus(ticket.paymentStatus)) + "\n            ") + "</span></div></div> <div class=\"card-info\" data-v-8fca29c8><div class=\"info-row\" data-v-8fca29c8><span class=\"info-label\" data-v-8fca29c8>Customer:</span> <span class=\"info-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(((_ticket$client = ticket.client) === null || _ticket$client === void 0 ? void 0 : _ticket$client.name) || 'Walk-in')) + "</span></div> <div class=\"info-row\" data-v-8fca29c8><span class=\"info-label\" data-v-8fca29c8>Table:</span> <span class=\"info-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(((_ticket$table = ticket.table) === null || _ticket$table === void 0 ? void 0 : _ticket$table.number) || ((_ticket$table2 = ticket.table) === null || _ticket$table2 === void 0 ? void 0 : _ticket$table2.name) || 'N/A')) + "</span></div> <div class=\"info-row\" data-v-8fca29c8><span class=\"info-label\" data-v-8fca29c8>Items:</span> <span class=\"info-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(((_ticket$ticketLines = ticket.ticketLines) === null || _ticket$ticketLines === void 0 ? void 0 : _ticket$ticketLines.length) || 0) + " items") + "</span></div></div> <div class=\"card-summary\" data-v-8fca29c8><div class=\"summary-total\" data-v-8fca29c8><span class=\"total-label\" data-v-8fca29c8>Total:</span> <span class=\"total-amount\" data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(ticket.total))) + "</span></div> " + (ticket.notes ? "<div class=\"ticket-notes-preview\" data-v-8fca29c8><span class=\"notes-icon\" data-v-8fca29c8>📝</span> <span class=\"notes-text\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.truncateNotes(ticket.notes))) + "</span></div>" : "<!---->") + "</div> <div class=\"card-actions\" data-v-8fca29c8>" + (ticket.status === 'pending' ? "<button class=\"action-btn btn-preparing\" data-v-8fca29c8>\n            Start Prep\n          </button>" : "<!---->") + " " + (ticket.status === 'preparing' ? "<button class=\"action-btn btn-ready\" data-v-8fca29c8>\n            Mark Ready\n          </button>" : "<!---->") + " " + (ticket.status === 'ready' ? "<button class=\"action-btn btn-served\" data-v-8fca29c8>\n            Mark Served\n          </button>" : "<!---->") + " " + (ticket.status === 'served' && ticket.paymentStatus === 'pending' ? "<button class=\"action-btn btn-payment\" data-v-8fca29c8>\n            Process Payment\n          </button>" : "<!---->") + " <button class=\"action-btn btn-print\" data-v-8fca29c8>\n            Print\n          </button></div> " + (_vm.isUrgent(ticket) ? "<div class=\"urgency-indicator\" data-v-8fca29c8><span class=\"urgency-icon\" data-v-8fca29c8>⚠️</span> <span class=\"urgency-text\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.getUrgencyReason(ticket))) + "</span></div>" : "<!---->") + "</div>";
  }) + "</div>") + "</div>") + " " + (_vm.pagination.totalPages > 1 ? "<div class=\"pagination\" data-v-8fca29c8><button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === 1) + " class=\"pagination-btn\" data-v-8fca29c8>\n      Previous\n    </button> <span class=\"pagination-info\" data-v-8fca29c8>" + _vm._ssrEscape("\n      Page " + _vm._s(_vm.pagination.currentPage) + " of " + _vm._s(_vm.pagination.totalPages) + "\n    ") + "</span> <button" + _vm._ssrAttr("disabled", _vm.pagination.currentPage === _vm.pagination.totalPages) + " class=\"pagination-btn\" data-v-8fca29c8>\n      Next\n    </button></div>" : "<!---->") + " " + (_vm.showDialog ? "<div class=\"dialog-overlay\" data-v-8fca29c8><div class=\"dialog-content\" data-v-8fca29c8><div class=\"dialog-header\" data-v-8fca29c8><h2 data-v-8fca29c8>" + _vm._ssrEscape("Ticket #" + _vm._s((_vm$selectedTicket = _vm.selectedTicket) === null || _vm$selectedTicket === void 0 ? void 0 : _vm$selectedTicket.id) + " Details") + "</h2> <button class=\"close-btn\" data-v-8fca29c8>×</button></div> " + (_vm.selectedTicket ? "<div class=\"dialog-body\" data-v-8fca29c8><div class=\"dialog-section\" data-v-8fca29c8><div class=\"section-header\" data-v-8fca29c8><h3 data-v-8fca29c8>Ticket Information</h3> <div class=\"ticket-status-badges\" data-v-8fca29c8><span" + _vm._ssrClass(null, ['status-badge', `status-${_vm.selectedTicket.status}`]) + " data-v-8fca29c8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatStatus(_vm.selectedTicket.status)) + "\n              ") + "</span> <span" + _vm._ssrClass(null, ['payment-badge', `payment-${_vm.selectedTicket.paymentStatus}`]) + " data-v-8fca29c8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.formatPaymentStatus(_vm.selectedTicket.paymentStatus)) + "\n              ") + "</span></div></div> <div class=\"info-grid\" data-v-8fca29c8><div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Created:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formatDate(_vm.selectedTicket.createdAt)) + "\n            ") + "</div> <div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Last Updated:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formatDate(_vm.selectedTicket.updateTimestamp)) + "\n            ") + "</div> <div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Customer:</strong>" + _vm._ssrEscape(" " + _vm._s(((_vm$selectedTicket$cl = _vm.selectedTicket.client) === null || _vm$selectedTicket$cl === void 0 ? void 0 : _vm$selectedTicket$cl.name) || 'Walk-in') + "\n            ") + "</div> <div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Table:</strong>" + _vm._ssrEscape(" " + _vm._s(((_vm$selectedTicket$ta = _vm.selectedTicket.table) === null || _vm$selectedTicket$ta === void 0 ? void 0 : _vm$selectedTicket$ta.number) || ((_vm$selectedTicket$ta2 = _vm.selectedTicket.table) === null || _vm$selectedTicket$ta2 === void 0 ? void 0 : _vm$selectedTicket$ta2.name) || 'N/A') + "\n            ") + "</div></div></div> " + (_vm.selectedTicket.client ? "<div class=\"dialog-section\" data-v-8fca29c8><h3 data-v-8fca29c8>Customer Details</h3> <div class=\"info-grid\" data-v-8fca29c8><div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Name:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.selectedTicket.client.name) + "\n            ") + "</div> " + (_vm.selectedTicket.client.email ? "<div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Email:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.selectedTicket.client.email) + "\n            ") + "</div>" : "<!---->") + " " + (_vm.selectedTicket.client.phone ? "<div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Phone:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.selectedTicket.client.phone) + "\n            ") + "</div>" : "<!---->") + "</div></div>" : "<!---->") + " <div class=\"dialog-section\" data-v-8fca29c8><h3 data-v-8fca29c8>Order Items</h3> " + (_vm.selectedTicket.ticketLines && _vm.selectedTicket.ticketLines.length > 0 ? "<div class=\"items-table\" data-v-8fca29c8><div class=\"table-header\" data-v-8fca29c8><div class=\"col-item\" data-v-8fca29c8>Item</div> <div class=\"col-qty\" data-v-8fca29c8>Qty</div> <div class=\"col-price\" data-v-8fca29c8>Price</div> <div class=\"col-total\" data-v-8fca29c8>Total</div></div> " + _vm._ssrList(_vm.selectedTicket.ticketLines, function (line) {
    return "<div class=\"table-row\" data-v-8fca29c8><div class=\"col-item\" data-v-8fca29c8><div class=\"item-name\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(line.product.pro_name || 'Unknown Item')) + "</div> " + (line.notes ? "<div class=\"item-notes\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(line.notes)) + "</div>" : "<!---->") + "</div> <div class=\"col-qty\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(line.quantity)) + "</div> <div class=\"col-price\" data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(line.unitPrice))) + "</div> <div class=\"col-total\" data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(line.total || line.quantity * line.unitPrice))) + "</div></div>";
  }) + "</div>" : "<div class=\"no-items\" data-v-8fca29c8><p data-v-8fca29c8>No items in this order</p></div>") + "</div> <div class=\"dialog-section\" data-v-8fca29c8><h3 data-v-8fca29c8>Order Summary</h3> <div class=\"summary-table\" data-v-8fca29c8><div class=\"summary-row\" data-v-8fca29c8><span data-v-8fca29c8>Subtotal:</span> <span data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.selectedTicket.subtotal))) + "</span></div> <div class=\"summary-row\" data-v-8fca29c8><span data-v-8fca29c8>Tax:</span> <span data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.selectedTicket.tax))) + "</span></div> <div class=\"summary-row total-row\" data-v-8fca29c8><span data-v-8fca29c8><strong data-v-8fca29c8>Total:</strong></span> <span data-v-8fca29c8><strong data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.selectedTicket.total))) + "</strong></span></div></div></div> " + (_vm.selectedTicket.payment ? "<div class=\"dialog-section\" data-v-8fca29c8><h3 data-v-8fca29c8>Payment Information</h3> <div class=\"info-grid\" data-v-8fca29c8><div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Method:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.selectedTicket.payment.method || 'N/A') + "\n            ") + "</div> <div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Amount:</strong>" + _vm._ssrEscape(" $" + _vm._s(_vm.formatPrice(_vm.selectedTicket.payment.amount)) + "\n            ") + "</div> <div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Status:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.formatPaymentStatus(_vm.selectedTicket.paymentStatus)) + "\n            ") + "</div> " + (_vm.selectedTicket.payment.transactionId ? "<div class=\"info-item\" data-v-8fca29c8><strong data-v-8fca29c8>Transaction ID:</strong>" + _vm._ssrEscape(" " + _vm._s(_vm.selectedTicket.payment.transactionId) + "\n            ") + "</div>" : "<!---->") + "</div></div>" : "<!---->") + " " + (_vm.selectedTicket.notes ? "<div class=\"dialog-section\" data-v-8fca29c8><h3 data-v-8fca29c8>Notes</h3> <div class=\"notes-content\" data-v-8fca29c8>" + _vm._ssrEscape("\n            " + _vm._s(_vm.selectedTicket.notes) + "\n          ") + "</div></div>" : "<!---->") + "</div>" : "<!---->") + " <div class=\"dialog-footer\" data-v-8fca29c8><div class=\"dialog-actions\" data-v-8fca29c8>" + (((_vm$selectedTicket2 = _vm.selectedTicket) === null || _vm$selectedTicket2 === void 0 ? void 0 : _vm$selectedTicket2.status) === 'pending' ? "<button class=\"dialog-btn btn-preparing\" data-v-8fca29c8>\n            Start Preparing\n          </button>" : "<!---->") + " " + (((_vm$selectedTicket3 = _vm.selectedTicket) === null || _vm$selectedTicket3 === void 0 ? void 0 : _vm$selectedTicket3.status) === 'preparing' ? "<button class=\"dialog-btn btn-ready\" data-v-8fca29c8>\n            Mark Ready\n          </button>" : "<!---->") + " " + (((_vm$selectedTicket4 = _vm.selectedTicket) === null || _vm$selectedTicket4 === void 0 ? void 0 : _vm$selectedTicket4.status) === 'ready' ? "<button class=\"dialog-btn btn-served\" data-v-8fca29c8>\n            Mark Served\n          </button>" : "<!---->") + " " + (((_vm$selectedTicket5 = _vm.selectedTicket) === null || _vm$selectedTicket5 === void 0 ? void 0 : _vm$selectedTicket5.status) === 'served' && ((_vm$selectedTicket6 = _vm.selectedTicket) === null || _vm$selectedTicket6 === void 0 ? void 0 : _vm$selectedTicket6.paymentStatus) === 'pending' ? "<button class=\"dialog-btn btn-payment\" data-v-8fca29c8>\n            Process Payment\n          </button>" : "<!---->") + " <button class=\"dialog-btn btn-print\" data-v-8fca29c8>\n            Print Ticket\n          </button> <button class=\"dialog-btn btn-close\" data-v-8fca29c8>\n            Close\n          </button></div></div></div></div>" : "<!---->") + " " + (_vm.showPrintDialog ? "<div class=\"dialog-overlay\" data-v-8fca29c8><div class=\"print-dialog-content\" data-v-8fca29c8><div class=\"print-dialog-header\" data-v-8fca29c8><h2 data-v-8fca29c8>Print Ticket</h2> <button class=\"close-btn\" data-v-8fca29c8>×</button></div> " + (_vm.printTicket ? "<div class=\"print-preview\" data-v-8fca29c8><div class=\"print-header\" data-v-8fca29c8><div class=\"restaurant-info\" data-v-8fca29c8><h1 class=\"restaurant-name\" data-v-8fca29c8>Restaurant Name</h1> <p class=\"restaurant-address\" data-v-8fca29c8>123 Main Street<br data-v-8fca29c8>City, State 12345<br data-v-8fca29c8>Phone: (555) 123-4567</p></div></div> <div class=\"print-ticket-info\" data-v-8fca29c8><div class=\"ticket-details\" data-v-8fca29c8><div class=\"detail-row\" data-v-8fca29c8><span class=\"detail-label\" data-v-8fca29c8>Ticket #:</span> <span class=\"detail-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.printTicket.id)) + "</span></div> <div class=\"detail-row\" data-v-8fca29c8><span class=\"detail-label\" data-v-8fca29c8>Date:</span> <span class=\"detail-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.formatPrintDate(_vm.printTicket.createdAt))) + "</span></div> <div class=\"detail-row\" data-v-8fca29c8><span class=\"detail-label\" data-v-8fca29c8>Time:</span> <span class=\"detail-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.formatPrintTime(_vm.printTicket.createdAt))) + "</span></div> <div class=\"detail-row\" data-v-8fca29c8><span class=\"detail-label\" data-v-8fca29c8>Status:</span> <span class=\"detail-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.formatStatus(_vm.printTicket.status))) + "</span></div></div> <div class=\"customer-table-info\" data-v-8fca29c8><div class=\"detail-row\" data-v-8fca29c8><span class=\"detail-label\" data-v-8fca29c8>Customer:</span> <span class=\"detail-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(((_vm$printTicket$clien = _vm.printTicket.client) === null || _vm$printTicket$clien === void 0 ? void 0 : _vm$printTicket$clien.name) || 'Walk-in Customer')) + "</span></div> <div class=\"detail-row\" data-v-8fca29c8><span class=\"detail-label\" data-v-8fca29c8>Table:</span> <span class=\"detail-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(((_vm$printTicket$table = _vm.printTicket.table) === null || _vm$printTicket$table === void 0 ? void 0 : _vm$printTicket$table.number) || ((_vm$printTicket$table2 = _vm.printTicket.table) === null || _vm$printTicket$table2 === void 0 ? void 0 : _vm$printTicket$table2.name) || 'N/A')) + "</span></div> " + ((_vm$printTicket$clien2 = _vm.printTicket.client) !== null && _vm$printTicket$clien2 !== void 0 && _vm$printTicket$clien2.phone ? "<div class=\"detail-row\" data-v-8fca29c8><span class=\"detail-label\" data-v-8fca29c8>Phone:</span> <span class=\"detail-value\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.printTicket.client.phone)) + "</span></div>" : "<!---->") + "</div></div> <div class=\"print-divider\" data-v-8fca29c8></div> <div class=\"print-items\" data-v-8fca29c8><h3 class=\"section-title\" data-v-8fca29c8>ORDER ITEMS</h3> " + (_vm.printTicket.ticketLines && _vm.printTicket.ticketLines.length > 0 ? "<div data-v-8fca29c8>" + _vm._ssrList(_vm.printTicket.ticketLines, function (line) {
    return "<div class=\"print-item\" data-v-8fca29c8><div class=\"item-line\" data-v-8fca29c8><div class=\"item-main\" data-v-8fca29c8><span class=\"item-name\" data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(line.product.pro_name || 'Unknown Item')) + "</span> <span class=\"item-price\" data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(line.unitPrice))) + "</span></div> <div class=\"item-details\" data-v-8fca29c8><span class=\"item-qty\" data-v-8fca29c8>" + _vm._ssrEscape("Qty: " + _vm._s(line.quantity)) + "</span> <span class=\"item-total\" data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(line.total || line.quantity * line.unitPrice))) + "</span></div></div> " + (line.notes ? "<div class=\"item-notes\" data-v-8fca29c8>" + _vm._ssrEscape("\n                Note: " + _vm._s(line.notes) + "\n              ") + "</div>" : "<!---->") + "</div>";
  }) + "</div>" : "<div class=\"no-items-print\" data-v-8fca29c8><p data-v-8fca29c8>No items in this order</p></div>") + "</div> <div class=\"print-divider\" data-v-8fca29c8></div> <div class=\"print-summary\" data-v-8fca29c8><div class=\"summary-line\" data-v-8fca29c8><span class=\"summary-label\" data-v-8fca29c8>Subtotal:</span> <span class=\"summary-value\" data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.printTicket.subtotal))) + "</span></div> <div class=\"summary-line\" data-v-8fca29c8><span class=\"summary-label\" data-v-8fca29c8>Tax:</span> <span class=\"summary-value\" data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.printTicket.tax))) + "</span></div> <div class=\"summary-line total-line\" data-v-8fca29c8><span class=\"summary-label\" data-v-8fca29c8>TOTAL:</span> <span class=\"summary-value\" data-v-8fca29c8>" + _vm._ssrEscape("$" + _vm._s(_vm.formatPrice(_vm.printTicket.total))) + "</span></div></div> <div class=\"print-payment\" data-v-8fca29c8><div class=\"payment-status\" data-v-8fca29c8><span class=\"payment-label\" data-v-8fca29c8>Payment Status:</span> <span" + _vm._ssrClass("payment-value", `payment-${_vm.printTicket.paymentStatus}`) + " data-v-8fca29c8>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatPaymentStatus(_vm.printTicket.paymentStatus)) + "\n            ") + "</span></div> " + (_vm.printTicket.payment && _vm.printTicket.paymentStatus === 'paid' ? "<div class=\"payment-details\" data-v-8fca29c8><div class=\"payment-info\" data-v-8fca29c8><span data-v-8fca29c8>" + _vm._ssrEscape("Method: " + _vm._s(_vm.printTicket.payment.method || 'N/A')) + "</span> " + (_vm.printTicket.payment.transactionId ? "<span data-v-8fca29c8>" + _vm._ssrEscape("\n                Transaction: " + _vm._s(_vm.printTicket.payment.transactionId) + "\n              ") + "</span>" : "<!---->") + "</div></div>" : "<!---->") + "</div> " + (_vm.printTicket.notes ? "<div class=\"print-notes\" data-v-8fca29c8><div class=\"print-divider\" data-v-8fca29c8></div> <h4 data-v-8fca29c8>NOTES:</h4> <p data-v-8fca29c8>" + _vm._ssrEscape(_vm._s(_vm.printTicket.notes)) + "</p></div>" : "<!---->") + " <div class=\"print-footer\" data-v-8fca29c8><div class=\"print-divider\" data-v-8fca29c8></div> <p class=\"thank-you\" data-v-8fca29c8>Thank you for your visit!</p> <p class=\"print-time\" data-v-8fca29c8>" + _vm._ssrEscape("Printed: " + _vm._s(_vm.formatPrintDateTime(new Date()))) + "</p></div></div>" : "<!---->") + " <div class=\"print-dialog-actions\" data-v-8fca29c8><button class=\"print-btn print-primary\" data-v-8fca29c8>\n          🖨️ Print\n        </button> <button class=\"print-btn print-secondary\" data-v-8fca29c8>\n          Cancel\n        </button></div></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/ticket/index.vue?vue&type=template&id=8fca29c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/ticket/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ticketvue_type_script_lang_js_ = ({
  name: 'TicketsListing',
  data() {
    return {
      tickets: [],
      loading: true,
      error: null,
      searchQuery: '',
      statusFilter: '',
      paymentFilter: '',
      startDate: '',
      endDate: '',
      showDialog: false,
      selectedTicket: null,
      showPrintDialog: false,
      printTicket: null,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        limit: 20
      },
      refreshInterval: null
    };
  },
  computed: {
    filteredTickets() {
      let filtered = this.tickets;

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(ticket => {
          var _ticket$client, _ticket$client$name, _ticket$table, _ticket$table$number, _ticket$table2, _ticket$table2$name;
          return ticket.id.toString().includes(query) || ((_ticket$client = ticket.client) === null || _ticket$client === void 0 ? void 0 : (_ticket$client$name = _ticket$client.name) === null || _ticket$client$name === void 0 ? void 0 : _ticket$client$name.toLowerCase().includes(query)) || ((_ticket$table = ticket.table) === null || _ticket$table === void 0 ? void 0 : (_ticket$table$number = _ticket$table.number) === null || _ticket$table$number === void 0 ? void 0 : _ticket$table$number.toString().includes(query)) || ((_ticket$table2 = ticket.table) === null || _ticket$table2 === void 0 ? void 0 : (_ticket$table2$name = _ticket$table2.name) === null || _ticket$table2$name === void 0 ? void 0 : _ticket$table2$name.toLowerCase().includes(query));
        });
      }

      // Status filter
      if (this.statusFilter) {
        filtered = filtered.filter(ticket => ticket.status === this.statusFilter);
      }

      // Payment filter
      if (this.paymentFilter) {
        filtered = filtered.filter(ticket => ticket.paymentStatus === this.paymentFilter);
      }
      return filtered;
    },
    hasActiveFilters() {
      return this.searchQuery || this.statusFilter || this.paymentFilter || this.startDate || this.endDate;
    },
    stats() {
      return {
        total: this.tickets.length,
        pending: this.tickets.filter(t => t.status === 'pending').length,
        preparing: this.tickets.filter(t => t.status === 'preparing').length,
        ready: this.tickets.filter(t => t.status === 'ready').length,
        unpaid: this.tickets.filter(t => t.paymentStatus === 'pending').length
      };
    }
  },
  async mounted() {
    await this.fetchTickets();
    this.startAutoRefresh();
  },
  beforeDestroy() {
    this.stopAutoRefresh();
  },
  methods: {
    async fetchTickets() {
      this.loading = true;
      this.error = null;
      try {
        const params = {
          page: this.pagination.currentPage,
          limit: this.pagination.limit,
          include: 'client,table,ticketLines',
          // Send as comma-separated string
          sort: 'createdAt:desc'
        };

        // Add filters if they exist
        if (this.statusFilter) params.status = this.statusFilter;
        if (this.paymentFilter) params.paymentStatus = this.paymentFilter;
        if (this.startDate) params.startDate = this.startDate;
        if (this.endDate) params.endDate = this.endDate;
        console.log('Fetching tickets with params:', params); // Debug log

        const response = await this.$axios.get('/api/ticket/find', {
          params
        });
        console.log('API Response:', response.data); // Debug log

        // Handle different response formats
        this.tickets = response.data.tickets || response.data.data || response.data || [];

        // Update pagination
        if (response.data.pagination) {
          this.pagination = {
            ...this.pagination,
            totalPages: response.data.pagination.totalPages || response.data.pagination.pages || 1,
            currentPage: response.data.pagination.currentPage || response.data.pagination.page || 1
          };
        } else {
          this.pagination = {
            ...this.pagination,
            totalPages: response.data.totalPages || 1,
            currentPage: response.data.currentPage || 1
          };
        }
      } catch (error) {
        var _error$response, _error$response2, _error$response2$data, _error$response3, _error$response3$data;
        console.error('Error fetching tickets:', error);
        console.error('Error details:', (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data); // More detailed error logging

        this.error = ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || ((_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : (_error$response3$data = _error$response3.data) === null || _error$response3$data === void 0 ? void 0 : _error$response3$data.error) || error.message || 'Failed to load tickets';
      } finally {
        this.loading = false;
      }
    },
    async refreshTickets() {
      var _this$$toast;
      await this.fetchTickets();
      (_this$$toast = this.$toast) === null || _this$$toast === void 0 ? void 0 : _this$$toast.success('Tickets refreshed');
    },
    async changePage(page) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page;
        await this.fetchTickets();
      }
    },
    async updateTicketStatus(ticketId, newStatus) {
      try {
        var _this$$toast2;
        await this.$axios.patch(`/api/tickets/${ticketId}`, {
          status: newStatus
        });

        // Update local ticket
        const ticket = this.tickets.find(t => t.id === ticketId);
        if (ticket) {
          ticket.status = newStatus;
          ticket.updateTimestamp = new Date();
        }
        (_this$$toast2 = this.$toast) === null || _this$$toast2 === void 0 ? void 0 : _this$$toast2.success(`Ticket #${ticketId} status updated to ${this.formatStatus(newStatus)}`);
      } catch (error) {
        var _this$$toast3;
        console.error('Error updating status:', error);
        (_this$$toast3 = this.$toast) === null || _this$$toast3 === void 0 ? void 0 : _this$$toast3.error('Failed to update ticket status');
      }
    },
    processPayment(ticketId) {
      this.$router.push(`/tickets/${ticketId}/payment`);
    },
    viewTicket(ticketId) {
      this.$router.push(`/tickets/${ticketId}`);
    },
    viewTicketInDialog(ticket) {
      this.selectedTicket = ticket;
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
      this.selectedTicket = null;
    },
    async updateTicketStatusFromDialog(newStatus) {
      if (!this.selectedTicket) return;
      try {
        var _this$$toast4;
        await this.$axios.patch(`/api/tickets/${this.selectedTicket.id}`, {
          status: newStatus
        });

        // Update both selected ticket and tickets list
        this.selectedTicket.status = newStatus;
        this.selectedTicket.updateTimestamp = new Date();
        const ticket = this.tickets.find(t => t.id === this.selectedTicket.id);
        if (ticket) {
          ticket.status = newStatus;
          ticket.updateTimestamp = new Date();
        }
        (_this$$toast4 = this.$toast) === null || _this$$toast4 === void 0 ? void 0 : _this$$toast4.success(`Ticket #${this.selectedTicket.id} status updated to ${this.formatStatus(newStatus)}`);
      } catch (error) {
        var _this$$toast5;
        console.error('Error updating status:', error);
        (_this$$toast5 = this.$toast) === null || _this$$toast5 === void 0 ? void 0 : _this$$toast5.error('Failed to update ticket status');
      }
    },
    processPaymentFromDialog() {
      if (this.selectedTicket) {
        this.closeDialog();
        this.$router.push(`/tickets/${this.selectedTicket.id}/payment`);
      }
    },
    printTicketFromDialog() {
      if (this.selectedTicket) {
        this.openPrintDialogFromDetail();
      }
    },
    printTicket(ticketId) {
      // Find ticket and open print dialog
      const ticket = this.tickets.find(t => t.id === ticketId);
      if (ticket) {
        this.openPrintDialog(ticket);
      }
    },
    openPrintDialog(ticket) {
      this.printTicket = ticket;
      this.showPrintDialog = true;
    },
    openPrintDialogFromDetail() {
      if (this.selectedTicket) {
        this.printTicket = this.selectedTicket;
        this.showPrintDialog = true;
      }
    },
    closePrintDialog() {
      this.showPrintDialog = false;
      this.printTicket = null;
    },
    printNow() {
      const printContent = document.querySelector('.print-preview').innerHTML;
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Ticket #${this.printTicket.id}</title>
          <style>
            body {
              font-family: 'Courier New', monospace;
              font-size: 12px;
              line-height: 1.4;
              margin: 0;
              padding: 20px;
              color: #000;
            }
            .print-header {
              text-align: center;
              margin-bottom: 20px;
            }
            .restaurant-name {
              font-size: 18px;
              font-weight: bold;
              margin: 0 0 8px 0;
            }
            .restaurant-address {
              font-size: 11px;
              margin: 0;
              line-height: 1.3;
            }
            .print-ticket-info {
              margin-bottom: 15px;
            }
            .detail-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 3px;
            }
            .detail-label {
              font-weight: bold;
            }
            .print-divider {
              border-top: 1px dashed #000;
              margin: 15px 0;
            }
            .section-title {
              font-size: 14px;
              font-weight: bold;
              margin: 0 0 10px 0;
              text-align: center;
            }
            .print-item {
              margin-bottom: 8px;
            }
            .item-line {
              margin-bottom: 2px;
            }
            .item-main {
              display: flex;
              justify-content: space-between;
              font-weight: bold;
            }
            .item-details {
              display: flex;
              justify-content: space-between;
              font-size: 11px;
              margin-left: 10px;
            }
            .item-notes {
              font-size: 10px;
              font-style: italic;
              margin-left: 10px;
              color: #666;
            }
            .print-summary {
              margin: 15px 0;
            }
            .summary-line {
              display: flex;
              justify-content: space-between;
              margin-bottom: 3px;
            }
            .total-line {
              font-weight: bold;
              font-size: 14px;
              border-top: 1px solid #000;
              padding-top: 5px;
              margin-top: 8px;
            }
            .print-payment {
              margin: 15px 0;
            }
            .payment-status {
              display: flex;
              justify-content: space-between;
              font-weight: bold;
            }
            .payment-details {
              font-size: 11px;
              margin-top: 5px;
            }
            .payment-info {
              display: flex;
              flex-direction: column;
              gap: 2px;
            }
            .print-notes {
              margin: 15px 0;
            }
            .print-notes h4 {
              font-size: 12px;
              margin: 0 0 5px 0;
            }
            .print-notes p {
              margin: 0;
              font-size: 11px;
            }
            .print-footer {
              text-align: center;
              margin-top: 20px;
            }
            .thank-you {
              font-weight: bold;
              margin: 10px 0 5px 0;
            }
            .print-time {
              font-size: 10px;
              margin: 0;
              color: #666;
            }
            .payment-pending { color: #856404; }
            .payment-paid { color: #155724; }
            .payment-refunded { color: #721c24; }
            @media print {
              body { margin: 0; padding: 10px; }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();

      // Wait a moment for content to load, then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);

      // Close the print dialog
      this.closePrintDialog();
    },
    startAutoRefresh() {
      // Refresh every 30 seconds
      this.refreshInterval = setInterval(() => {
        this.fetchTickets();
      }, 30000);
    },
    stopAutoRefresh() {
      if (this.refreshInterval) {
        clearInterval(this.refreshInterval);
        this.refreshInterval = null;
      }
    },
    formatTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    },
    formatPrintDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleDateString();
    },
    formatPrintTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatPrintDateTime(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    },
    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Math.round(amount || 0));
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber;
    },
    formatStatus(status) {
      const statusMap = {
        'pending': 'Pending',
        'preparing': 'Preparing',
        'ready': 'Ready',
        'served': 'Served',
        'paid': 'Paid'
      };
      return statusMap[status] || status;
    },
    formatPaymentStatus(status) {
      const statusMap = {
        'pending': 'Unpaid',
        'paid': 'Paid',
        'refunded': 'Refunded'
      };
      return statusMap[status] || status;
    },
    truncateNotes(notes) {
      if (!notes) return '';
      return notes.length > 50 ? notes.substring(0, 50) + '...' : notes;
    },
    isUrgent(ticket) {
      const now = new Date();
      const createdAt = new Date(ticket.createdAt);
      const minutesAgo = (now - createdAt) / (1000 * 60);

      // Mark as urgent if preparing for more than 15 minutes
      // or ready for more than 5 minutes
      return ticket.status === 'preparing' && minutesAgo > 15 || ticket.status === 'ready' && minutesAgo > 5;
    },
    getUrgencyReason(ticket) {
      const now = new Date();
      const createdAt = new Date(ticket.createdAt);
      const minutesAgo = Math.floor((now - createdAt) / (1000 * 60));
      if (ticket.status === 'preparing') {
        return `Preparing for ${minutesAgo} minutes`;
      } else if (ticket.status === 'ready') {
        return `Ready for ${minutesAgo} minutes`;
      }
      return '';
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/ticket/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_ticketvue_type_script_lang_js_ = (ticketvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/admin/ticket/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(988)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_ticketvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8fca29c8",
  "518f1190"
  
)

/* harmony default export */ var ticket = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(989);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7fa75be9", content, true, context)
};

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8fca29c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(768);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8fca29c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8fca29c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8fca29c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8fca29c8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tickets-listing-container[data-v-8fca29c8]{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;margin:0 auto;max-width:1400px;padding:20px}.page-header[data-v-8fca29c8]{align-items:center;border-bottom:2px solid #e9ecef;display:flex;justify-content:space-between;margin-bottom:30px;padding-bottom:20px}.page-header h1[data-v-8fca29c8]{color:#333;margin:0}.header-actions[data-v-8fca29c8]{align-items:center;display:flex;gap:15px}.search-filter[data-v-8fca29c8]{display:flex;gap:10px}.filter-select[data-v-8fca29c8],.search-input[data-v-8fca29c8]{border:1px solid #ddd;border-radius:5px;font-size:14px;padding:8px 12px}.search-input[data-v-8fca29c8]{width:200px}.date-input[data-v-8fca29c8]{border:1px solid #ddd;border-radius:5px;font-size:14px;padding:8px 12px;width:140px}.btn-refresh[data-v-8fca29c8]{align-items:center;background:#007bff;border:none;border-radius:5px;color:#fff;cursor:pointer;display:flex;gap:5px;padding:8px 16px}.refresh-icon[data-v-8fca29c8]{font-size:16px}.stats-summary[data-v-8fca29c8]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));margin-bottom:30px}.stat-card[data-v-8fca29c8]{background:#fff;border:1px solid #e9ecef;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.1);padding:20px;text-align:center}.stat-number[data-v-8fca29c8]{color:#007bff;font-size:28px;font-weight:700;margin-bottom:5px}.stat-label[data-v-8fca29c8]{color:#6c757d;font-size:14px;letter-spacing:.5px;text-transform:uppercase}.error-state[data-v-8fca29c8],.loading-state[data-v-8fca29c8]{padding:60px 20px;text-align:center}.spinner[data-v-8fca29c8]{animation:spin-8fca29c8 1s linear infinite;border:4px solid #f3f3f3;border-radius:50%;border-top-color:#007bff;height:40px;margin:0 auto 20px;width:40px}@keyframes spin-8fca29c8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.error-state[data-v-8fca29c8]{color:#dc3545}.error-icon[data-v-8fca29c8]{font-size:48px;margin-bottom:20px}.retry-btn[data-v-8fca29c8]{background:#007bff;border:none;border-radius:5px;color:#fff;cursor:pointer;margin-top:20px;padding:10px 20px}.no-tickets[data-v-8fca29c8]{color:#6c757d;padding:60px 20px;text-align:center}.no-tickets-icon[data-v-8fca29c8]{font-size:64px;margin-bottom:20px}.tickets-grid[data-v-8fca29c8]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(400px,1fr))}.ticket-card[data-v-8fca29c8]{background:#fff;border:2px solid #e9ecef;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.1);cursor:pointer;padding:20px;position:relative;transition:all .3s ease}.ticket-card[data-v-8fca29c8]:hover{box-shadow:0 8px 25px rgba(0,0,0,.15);transform:translateY(-2px)}.ticket-card.urgent[data-v-8fca29c8]{background:#fffbf0;border-color:#ffc107}.card-header[data-v-8fca29c8]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:15px}.ticket-number[data-v-8fca29c8]{display:flex;flex-direction:column}.ticket-id[data-v-8fca29c8]{color:#333;font-size:18px;font-weight:700}.ticket-time[data-v-8fca29c8]{color:#6c757d;font-size:12px}.ticket-badges[data-v-8fca29c8]{align-items:flex-end;display:flex;flex-direction:column;gap:5px}.payment-badge[data-v-8fca29c8],.status-badge[data-v-8fca29c8]{border-radius:12px;font-size:10px;font-weight:600;letter-spacing:.5px;padding:4px 8px;text-transform:uppercase}.status-pending[data-v-8fca29c8]{background:#fff3cd;color:#856404}.status-preparing[data-v-8fca29c8]{background:#d1ecf1;color:#0c5460}.status-ready[data-v-8fca29c8]{background:#d4edda;color:#155724}.status-served[data-v-8fca29c8]{background:#e2e3e5;color:#383d41}.status-paid[data-v-8fca29c8]{background:#d1e7dd;color:#0f5132}.payment-pending[data-v-8fca29c8]{background:#fff3cd;color:#856404}.payment-paid[data-v-8fca29c8]{background:#d4edda;color:#155724}.payment-refunded[data-v-8fca29c8]{background:#f8d7da;color:#721c24}.card-info[data-v-8fca29c8]{margin-bottom:15px}.info-row[data-v-8fca29c8]{display:flex;justify-content:space-between;margin-bottom:8px}.info-label[data-v-8fca29c8]{color:#6c757d;font-size:14px}.info-value[data-v-8fca29c8]{color:#333;font-size:14px;font-weight:500}.card-summary[data-v-8fca29c8]{border-top:1px solid #e9ecef;margin-bottom:15px;padding-top:15px}.summary-total[data-v-8fca29c8]{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.total-label[data-v-8fca29c8]{color:#333;font-weight:600}.total-amount[data-v-8fca29c8]{color:#28a745;font-size:18px;font-weight:700}.ticket-notes-preview[data-v-8fca29c8]{align-items:center;color:#6c757d;display:flex;font-size:12px;gap:5px}.notes-icon[data-v-8fca29c8]{font-size:14px}.notes-text[data-v-8fca29c8]{font-style:italic}.card-actions[data-v-8fca29c8]{display:flex;flex-wrap:wrap;gap:8px}.action-btn[data-v-8fca29c8]{border:none;border-radius:5px;cursor:pointer;font-size:12px;font-weight:500;padding:6px 12px;transition:all .2s}.btn-preparing[data-v-8fca29c8]{background:#17a2b8;color:#fff}.btn-ready[data-v-8fca29c8]{background:#28a745;color:#fff}.btn-served[data-v-8fca29c8]{background:#6f42c1;color:#fff}.btn-payment[data-v-8fca29c8]{background:#ffc107;color:#856404}.btn-print[data-v-8fca29c8]{background:#6c757d;color:#fff}.action-btn[data-v-8fca29c8]:hover{opacity:.8;transform:translateY(-1px)}.urgency-indicator[data-v-8fca29c8]{align-items:center;background:#ffc107;border-radius:12px;color:#856404;display:flex;font-size:10px;font-weight:600;gap:3px;padding:4px 8px;position:absolute;right:10px;top:10px}.urgency-icon[data-v-8fca29c8]{font-size:12px}.pagination[data-v-8fca29c8]{align-items:center;border-top:1px solid #e9ecef;display:flex;gap:20px;justify-content:center;margin-top:40px;padding-top:20px}.pagination-btn[data-v-8fca29c8]{background:#fff;border:1px solid #007bff;border-radius:5px;color:#007bff;cursor:pointer;padding:8px 16px}.pagination-btn[data-v-8fca29c8]:disabled{cursor:not-allowed;opacity:.5}.pagination-btn[data-v-8fca29c8]:hover:not(:disabled){background:#007bff;color:#fff}.pagination-info[data-v-8fca29c8]{color:#6c757d;font-size:14px}@media (max-width:768px){.page-header[data-v-8fca29c8]{align-items:stretch;flex-direction:column;gap:20px}.header-actions[data-v-8fca29c8]{gap:10px}.header-actions[data-v-8fca29c8],.search-filter[data-v-8fca29c8]{flex-direction:column}.search-input[data-v-8fca29c8]{width:100%}.stats-summary[data-v-8fca29c8]{grid-template-columns:repeat(2,1fr)}.tickets-grid[data-v-8fca29c8]{grid-template-columns:1fr}.card-actions[data-v-8fca29c8]{justify-content:center}}.dialog-overlay[data-v-8fca29c8]{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;padding:20px;position:fixed;right:0;top:0;z-index:1000}.dialog-content[data-v-8fca29c8]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:100%}.dialog-header[data-v-8fca29c8]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:24px}.dialog-header h2[data-v-8fca29c8]{color:#333;font-size:24px;margin:0}.close-btn[data-v-8fca29c8]{align-items:center;background:none;border:none;border-radius:50%;color:#6c757d;cursor:pointer;display:flex;font-size:28px;height:32px;justify-content:center;padding:0;transition:all .2s;width:32px}.close-btn[data-v-8fca29c8]:hover{background:#e9ecef;color:#333}.dialog-body[data-v-8fca29c8]{padding:24px}.dialog-section[data-v-8fca29c8]{margin-bottom:32px}.dialog-section[data-v-8fca29c8]:last-child{margin-bottom:0}.section-header[data-v-8fca29c8]{align-items:center;display:flex;justify-content:space-between;margin-bottom:16px}.dialog-section h3[data-v-8fca29c8]{border-bottom:1px solid #dee2e6;color:#495057;font-size:18px;margin:0 0 16px;padding-bottom:8px}.ticket-status-badges[data-v-8fca29c8]{display:flex;gap:8px}.info-grid[data-v-8fca29c8]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.info-item[data-v-8fca29c8]{background:#f8f9fa;border-radius:6px;font-size:14px;padding:12px}.info-item strong[data-v-8fca29c8]{color:#495057;margin-right:8px}.items-table[data-v-8fca29c8]{border:1px solid #dee2e6;border-radius:8px;overflow:hidden}.table-header[data-v-8fca29c8]{background:#f8f9fa;border-bottom:1px solid #dee2e6;color:#495057;font-weight:600}.table-header[data-v-8fca29c8],.table-row[data-v-8fca29c8]{grid-gap:16px;display:grid;gap:16px;grid-template-columns:2fr 80px 100px 100px;padding:16px}.table-row[data-v-8fca29c8]{align-items:center;border-bottom:1px solid #f1f3f4}.table-row[data-v-8fca29c8]:last-child{border-bottom:none}.col-item[data-v-8fca29c8]{display:flex;flex-direction:column}.item-name[data-v-8fca29c8]{font-weight:500;margin-bottom:4px}.item-notes[data-v-8fca29c8]{color:#6c757d;font-size:12px}.col-price[data-v-8fca29c8],.col-qty[data-v-8fca29c8],.col-total[data-v-8fca29c8]{font-weight:500;text-align:right}.no-items[data-v-8fca29c8]{color:#6c757d;font-style:italic;padding:40px;text-align:center}.summary-table[data-v-8fca29c8]{background:#f8f9fa;border-radius:8px;padding:20px}.summary-row[data-v-8fca29c8]{border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;padding:8px 0}.summary-row[data-v-8fca29c8]:last-child{border-bottom:none}.total-row[data-v-8fca29c8]{border-top:2px solid #dee2e6;color:#333;font-size:18px;margin-top:8px;padding-top:16px}.notes-content[data-v-8fca29c8]{background:#fff3cd;border-left:4px solid #ffc107;border-radius:8px;color:#856404;font-style:italic;padding:16px}.dialog-footer[data-v-8fca29c8]{background:#f8f9fa;border-radius:0 0 12px 12px;border-top:1px solid #e9ecef;padding:24px}.dialog-actions[data-v-8fca29c8]{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end}.dialog-btn[data-v-8fca29c8]{border:none;border-radius:6px;cursor:pointer;font-size:14px;font-weight:500;padding:10px 20px;transition:all .2s}.dialog-btn.btn-preparing[data-v-8fca29c8]{background:#17a2b8;color:#fff}.dialog-btn.btn-ready[data-v-8fca29c8]{background:#28a745;color:#fff}.dialog-btn.btn-served[data-v-8fca29c8]{background:#6f42c1;color:#fff}.dialog-btn.btn-payment[data-v-8fca29c8]{background:#ffc107;color:#856404}.dialog-btn.btn-close[data-v-8fca29c8],.dialog-btn.btn-print[data-v-8fca29c8]{background:#6c757d;color:#fff}.dialog-btn[data-v-8fca29c8]:hover{opacity:.9;transform:translateY(-1px)}@media (max-width:768px){.dialog-overlay[data-v-8fca29c8]{padding:10px}.dialog-content[data-v-8fca29c8]{max-height:95vh}.dialog-body[data-v-8fca29c8],.dialog-footer[data-v-8fca29c8],.dialog-header[data-v-8fca29c8]{padding:16px}.info-grid[data-v-8fca29c8],.table-header[data-v-8fca29c8],.table-row[data-v-8fca29c8]{grid-template-columns:1fr}.table-header[data-v-8fca29c8],.table-row[data-v-8fca29c8]{gap:8px}.table-header[data-v-8fca29c8]{display:none}.table-row[data-v-8fca29c8]{display:block;padding:16px}.col-price[data-v-8fca29c8],.col-qty[data-v-8fca29c8],.col-total[data-v-8fca29c8]{margin-top:4px;text-align:left}.col-qty[data-v-8fca29c8]:before{content:\"Qty: \";font-weight:600}.col-price[data-v-8fca29c8]:before{content:\"Price: \";font-weight:600}.col-total[data-v-8fca29c8]:before{content:\"Total: \";font-weight:600}.dialog-actions[data-v-8fca29c8]{flex-direction:column}.dialog-btn[data-v-8fca29c8]{width:100%}}.print-dialog-content[data-v-8fca29c8]{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-height:90vh;max-width:600px;overflow-y:auto;width:100%}.print-dialog-header[data-v-8fca29c8]{align-items:center;background:#f8f9fa;border-bottom:1px solid #e9ecef;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:20px 24px}.print-dialog-header h2[data-v-8fca29c8]{color:#333;font-size:20px;margin:0}.print-preview[data-v-8fca29c8]{background:#fff;color:#000;font-family:\"Courier New\",monospace;font-size:13px;line-height:1.4;padding:24px}.print-header[data-v-8fca29c8]{margin-bottom:20px;text-align:center}.restaurant-name[data-v-8fca29c8]{color:#333;font-size:24px;font-weight:700;margin:0 0 8px}.restaurant-address[data-v-8fca29c8]{color:#666;font-size:14px;line-height:1.3;margin:0}.print-ticket-info[data-v-8fca29c8]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr;margin-bottom:15px}.detail-row[data-v-8fca29c8]{display:flex;font-size:13px;justify-content:space-between;margin-bottom:4px}.detail-label[data-v-8fca29c8]{color:#333;font-weight:700}.detail-value[data-v-8fca29c8]{color:#000}.print-divider[data-v-8fca29c8]{border-top:2px dashed #333;margin:20px 0}.print-items[data-v-8fca29c8]{margin-bottom:20px}.section-title[data-v-8fca29c8]{color:#333;font-size:16px;font-weight:700;margin:0 0 15px;text-align:center}.print-item[data-v-8fca29c8]{border-bottom:1px dotted #ccc;margin-bottom:12px;padding-bottom:8px}.print-item[data-v-8fca29c8]:last-child{border-bottom:none}.item-line[data-v-8fca29c8]{margin-bottom:4px}.item-main[data-v-8fca29c8]{display:flex;font-weight:700;justify-content:space-between;margin-bottom:2px}.item-name[data-v-8fca29c8]{color:#333}.item-price[data-v-8fca29c8]{color:#000}.item-details[data-v-8fca29c8]{color:#666;display:flex;font-size:12px;justify-content:space-between;margin-left:15px}.item-total[data-v-8fca29c8]{color:#000;font-weight:700}.item-notes[data-v-8fca29c8]{color:#888;font-size:11px;font-style:italic;margin-left:15px;margin-top:4px}.no-items-print[data-v-8fca29c8]{color:#666;font-style:italic;padding:20px;text-align:center}.print-summary[data-v-8fca29c8]{margin:20px 0}.summary-line[data-v-8fca29c8]{display:flex;font-size:14px;justify-content:space-between;margin-bottom:4px}.summary-label[data-v-8fca29c8]{color:#333}.summary-value[data-v-8fca29c8]{color:#000;font-weight:700}.total-line[data-v-8fca29c8]{border-top:2px solid #333;font-size:18px;font-weight:700;margin-top:12px;padding-top:8px}.total-line .summary-label[data-v-8fca29c8],.total-line .summary-value[data-v-8fca29c8]{color:#000}.print-payment[data-v-8fca29c8]{margin:20px 0}.payment-status[data-v-8fca29c8]{display:flex;font-size:14px;font-weight:700;justify-content:space-between;margin-bottom:8px}.payment-label[data-v-8fca29c8]{color:#333}.payment-value.payment-pending[data-v-8fca29c8]{color:#856404}.payment-value.payment-paid[data-v-8fca29c8]{color:#155724}.payment-value.payment-refunded[data-v-8fca29c8]{color:#721c24}.payment-details[data-v-8fca29c8]{color:#666;font-size:12px}.payment-info[data-v-8fca29c8]{display:flex;flex-direction:column;gap:4px}.print-notes[data-v-8fca29c8]{margin:20px 0}.print-notes h4[data-v-8fca29c8]{color:#333;font-size:14px;font-weight:700;margin:0 0 8px}.print-notes p[data-v-8fca29c8]{background:#f8f9fa;border-left:4px solid #ffc107;border-radius:4px;color:#000;font-size:13px;margin:0;padding:10px}.print-footer[data-v-8fca29c8]{margin-top:30px;text-align:center}.thank-you[data-v-8fca29c8]{color:#333;font-size:16px;font-weight:700;margin:15px 0 10px}.print-time[data-v-8fca29c8]{color:#888;font-size:11px;margin:0}.print-dialog-actions[data-v-8fca29c8]{background:#f8f9fa;border-radius:0 0 12px 12px;border-top:1px solid #e9ecef;display:flex;gap:12px;justify-content:flex-end;padding:20px 24px}.print-btn[data-v-8fca29c8]{align-items:center;border:none;border-radius:6px;cursor:pointer;display:flex;font-size:14px;font-weight:500;gap:8px;padding:12px 24px;transition:all .2s}.print-primary[data-v-8fca29c8]{background:#007bff;color:#fff}.print-secondary[data-v-8fca29c8]{background:#6c757d;color:#fff}.print-btn[data-v-8fca29c8]:hover{opacity:.9;transform:translateY(-1px)}@media (max-width:768px){.print-dialog-content[data-v-8fca29c8]{margin:10px;max-height:95vh}.print-preview[data-v-8fca29c8]{font-size:12px;padding:16px}.print-ticket-info[data-v-8fca29c8]{gap:10px;grid-template-columns:1fr}.restaurant-name[data-v-8fca29c8]{font-size:20px}.section-title[data-v-8fca29c8]{font-size:14px}.total-line[data-v-8fca29c8]{font-size:16px}.print-dialog-actions[data-v-8fca29c8]{flex-direction:column}.print-btn[data-v-8fca29c8]{justify-content:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map