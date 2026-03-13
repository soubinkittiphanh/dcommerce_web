
   import JsBarcode from 'jsbarcode';

   const plugin = {};

   plugin.install = function(Vue) {
     Vue.prototype.$JsBarcode = JsBarcode;
   };

   export default plugin;
   