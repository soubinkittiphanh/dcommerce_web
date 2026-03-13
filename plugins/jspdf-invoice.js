
import Vue from 'vue';
import jsPDF from 'jspdf';
// import 'jspdf-autotable';
import 'jspdf-invoice-template';

Vue.prototype.$jsPDF = jsPDF;

// Register the invoice template plugin
Vue.prototype.$jsPDF.addInvoice = function (data) {
  const invoice = this.invoice(data);
  this.addHTML(invoice.html, () => {
    invoice.items.forEach((item, index) => {
      const y = invoice.position.y + 30 + (index * 10);
      this.text(item.description, invoice.position.x, y);
      this.text(item.quantity, invoice.position.x + 100, y);
      this.text(item.price.toFixed(2), invoice.position.x + 130, y);
      this.text((item.quantity * item.price).toFixed(2), invoice.position.x + 170, y);
    });

    this.text(`Subtotal: $${data.subtotal.toFixed(2)}`, invoice.position.x + 130, invoice.position.y + 30 + (invoice.items.length * 10));
    this.text(`Tax: $${data.tax.toFixed(2)}`, invoice.position.x + 130, invoice.position.y + 40 + (invoice.items.length * 10));
    this.text(`Total: $${data.total.toFixed(2)}`, invoice.position.x + 130, invoice.position.y + 50 + (invoice.items.length * 10));
  });
};

export default ({ app }, inject) => {
  inject('jsPDF', jsPDF);
};
