(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{700:function(t,e,o){"use strict";o.r(e);var r=o(643),n=o(183),c=o(288),l=o(28),d=o(636),f=o(619),m=o(649),_=o(638),v=o(102),h=o(29),k=(o(112),o(22),o(33),o(40),o(67)),y={props:{id:{type:Number,default:0},productId:{type:Number,default:""},productName:{type:String,default:""},isEdit:{type:Boolean,default:!1},cost:{type:Number,default:0}},data:function(){return{stockQty:1,stockCost:this.cost,isSubmitting:!1,locationList:[],srcLocationId:1}},computed:{numberRule:function(){return[function(t){return!!t||"ກະລຸນາ ໃສ່ຈຳນວນ "},function(t){return/^[0-9]+$/.test(t)||"ໃສ່ໄດ້ສະເພາະ ຕົວເລກ"}]},user:function(){return this.$auth.user||""}},created:function(){this.loadLocation()},methods:{loadLocation:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("api/location/find").then((function(t){e.locationList=t.data.map((function(t){return t}))})).catch((function(t){Object(k.j)(e.$swal,"Error","Operation fail "+t.Error)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},stockSubmit:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.myform.validate()||t.isSubmitting){e.next=7;break}return t.isSubmitting=!0,o={inputter:t.user.id,product_id:t.productId,stockCardQty:t.stockQty,totalCost:t.stockCost,productId:t.id,srcLocationId:t.srcLocationId},console.log("Pre fly ",o),e.next=6,t.$axios.post("/api/card/bulkCreate",o).then((function(e){console.log(e.data),Object(k.k)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.$emit("reload"),t.$emit("close-dialog")})).catch((function(e){console.log(e),Object(k.j)(t.$swal,"Error",e.response.data)}));case 6:t.isSubmitting=!1;case 7:case"end":return e.stop()}}),e)})))()}}},x=o(44),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isSubmitting,callback:function(e){t.isSubmitting=e},expression:"isSubmitting"}},[e("loading-indicator")],1),t._v(" "),e(c.a,[e(l.d,[e("span",{staticClass:"text-h5"},[t._v("ເພີ່ມສະຕັອກສິນຄ້າ "+t._s(t.productId)+" "+t._s(t.productName))])]),t._v(" "),e(l.c,[e(d.a,[e(m.a,{ref:"myform",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(r.a,{attrs:{"item-text":"name","item-value":"id",items:t.locationList,label:"Source location*"},model:{value:t.srcLocationId,callback:function(e){t.srcLocationId=e},expression:"srcLocationId"}}),t._v(" "),e(v.a,{attrs:{label:"ຈຳນວນ",rules:t.numberRule,"hide-details":"auto"},model:{value:t.stockQty,callback:function(e){t.stockQty=e},expression:"stockQty"}}),t._v(" "),e(v.a,{attrs:{label:"ຕົ້ນທຶນທັງຫໝົດ",rules:t.numberRule,"hide-details":"auto"},model:{value:t.stockCost,callback:function(e){t.stockCost=e},expression:"stockCost"}})],1)],1)],1),t._v(" "),e(l.a,[e(_.a),t._v(" "),e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                ປິດ\n            ")]),t._v(" "),e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.stockSubmit}},[t._v("\n                ບັນທຶກ\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:o(306).default})},887:function(t,e,o){"use strict";o.r(e);var r=o(183),n=o(288),c=o(28),l=o(292),d=o(641),f=o(645),m=o(619),_=o(291),v=o(640),h=o(638),k=o(102),y=o(86),x=o(307),S=(o(33),o(191),o(45),o(61),o(55),o(38),o(64),o(51),o(7),o(63),o(88),o(60),o(29)),C=(o(10),o(81),o(9),o(5),o(8),o(27),o(40),o(112),o(685)),w=o(67),F=o(686),I=o(308);function P(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return L(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return L(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return c=t.done,t},e:function(t){l=!0,n=t},f:function(){try{c||null==o.return||o.return()}finally{if(l)throw n}}}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var O={components:{ProductForm:C.default,ProductFormCreate:F.default},middleware:"auths",data:function(){return{productFormCreate:!1,productFormKey:1,isstock:!1,selectedId:"",selectedProductCost:0,selectedProductName:"",isloading:!1,dialogMessage:!1,message:"",selectedStockProductId:"",loaddata:[],carddata:[],cardType:[],content:null,selectedCardType:"",pageLine:30,search:"",editProductForm:!1,selectedProductId:null,stockFormKey:1,headers:[{text:"key",align:"center",value:"id"},{text:"ໄອດີ",align:"center",value:"pro_id"},{text:"ຊື່ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ຫມວດສິນຄ້າ",align:"center",value:"pro_category_desc"},{text:"ລາຄາ",align:"center",value:"pro_price"},{text:"ສະຕັອກຂັ້ນຕ່ຳ",align:"center",value:"minStock"},{text:"Stock",align:"center",value:"pro_card_count"},{text:"Status",align:"center",value:"status"},{text:"cost",align:"center",value:"pro_cost_price"},{text:"ເພີ່ມສະຕັອກ",align:"center",value:"functionStock",sortable:!1},{text:"ເບິ່ງສະຕັອກ",align:"center",value:"functionStockView",sortable:!1},{text:"ແກ້ໄຂ",align:"center",value:"functionEdit",sortable:!1}]}},watch:{message:function(t){this.dialogMessage=null!=t}},mounted:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:return e.next=4,t.loadCardCategory();case 4:case"end":return e.stop()}}),e)})))()},methods:{formatNumber:function(t){return Object(w.e)(t)},verifyStockStatus:function(t,e){return 0==e?"Out of stock":t<e?"In stock":"Low stock"},triggerCardForm:function(t){this.stockFormKey+=1,this.selectedProductId=t.pro_id,this.selectedId=t.id,this.selectedProductCost=t.pro_cost_price,this.selectedProductName=t.pro_name,this.isstock=!0},fetchData:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("product_f").then((function(e){t.loaddata=[];var o,r=P(e.data);try{for(r.s();!(o=r.n()).done;){var n=o.value;n.minStock>n.card_count&&t.loaddata.push({id:n.id,pro_id:n.pro_id,pro_name:n.pro_name,pro_price:n.pro_price,pro_desc:n.pro_desc,pro_status:n.pro_status,pro_category:n.pro_category,pro_category_desc:n.pro_category+" - "+n.categ_name,pro_card_count:n.card_count,pro_cost_price:n.cost_price,pro_outlet:n.outlet,pro_outlet_name:n.outlet_name,minStock:n.minStock,functionEdit:n.pro_id,functionStock:n.pro_id,functionStockView:n.pro_id,status:n.pro_id})}}catch(t){r.e(t)}finally{r.f()}})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){this.productFormKey+=1,this.selectedProductId=t.pro_id,this.editProductForm=!0},editStock:function(t){console.log("ID "+t.pro_id),console.log("NAME "+t.pro_name),console.log("OBJ "+Object.keys(t)),this.$router.push("/admin/stock/".concat(t.pro_id))},attachFile:function(t){var e=this;this.carddata.length=0;var o=t,r=new FileReader;o&&(console.log("FILE LEN: "+o),r.onload=function(t){e.content=t.target.result,console.log("Data content => : "+e.content);var o=e.content.replace(/\r\n/g,"\n").split("\n").filter((function(t){return""!==t&&t.length>=10})),i=0;o.forEach((function(element){i++,console.log("Data loop ".concat(i," ").concat(element)),e.carddata.push(element.replace("\t","|").replace("\t","|").split("'").pop()),console.log(element.split("'").pop())})),console.log("CARD DATA: "+e.carddata)},r.onerror=function(t){return console.log(t)},r.readAsText(o))},loadCardCategory:function(){var t=this;this.isloading=!0,this.$axios.get("stockcate_f").then((function(e){t.cardType=e.data.map((function(t){return{card_type_code:t.card_type_code,card_type_name:t.card_type_name}})),t.selectedCardType=t.cardType[0].card_type_code,console.log("CARD LEN: "+t.cardType.length),console.log("CARD LEN: "+t.cardType[0].card_type_code),t.isloading=!1})).catch((function(e){console.log("Error: "+e),t.isloading=!1}))},rebuildStock:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isloading){e.next=5;break}return t.isloading=!0,e.next=4,t.$axios.post("/api/card/rebuildStock").then((function(e){Object(I.c)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.fetchData()})).catch((function(e){Object(I.b)(t.$swal,"Error",e.response.data)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()}}},j=o(44),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e("h1",[t._v("ລາຍງານສິນຄ້າໃກ້ຫມົດ")]),t._v(" "),e(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(m.a,{attrs:{"max-width":"300px"},model:{value:t.dialogMessage,callback:function(e){t.dialogMessage=e},expression:"dialogMessage"}},[e("dialog-classic-message",{attrs:{message:t.message},on:{closedialog:function(e){t.message=null}}})],1),t._v(" "),e(m.a,{attrs:{"max-width":"600px"},model:{value:t.isstock,callback:function(e){t.isstock=e},expression:"isstock"}},[e("card-form",{key:t.stockFormKey,attrs:{"product-id":t.selectedProductId,id:t.selectedId,cost:t.selectedProductCost,"product-name":t.selectedProductName},on:{"close-dialog":function(e){t.isstock=!1},reload:t.rebuildStock}})],1),t._v(" "),e(m.a,{attrs:{"max-width":"1200px"},model:{value:t.editProductForm,callback:function(e){t.editProductForm=e},expression:"editProductForm"}},[e("product-form",{key:t.productFormKey,attrs:{"header-id":t.selectedProductId,isEdit:t.editProductForm},on:{"close-dialog":function(e){t.editProductForm=!1},refresh:t.fetchData}})],1),t._v(" "),e(m.a,{attrs:{"max-width":"1200px"},model:{value:t.productFormCreate,callback:function(e){t.productFormCreate=e},expression:"productFormCreate"}},[e("product-form-create",{on:{"close-dialog":function(e){t.productFormCreate=!1},refresh:t.fetchData}})],1),t._v(" "),e(n.a,[e(c.d,[e(v.a,[e(d.a,{attrs:{cols:"6",sm:"6",md:"6"}},[e(k.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e(d.a,{staticClass:"text-right",attrs:{cols:"6"}},[e(r.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined",rounded:""},on:{click:t.rebuildStock}},[e("span",{staticClass:"mdi mdi-update"}),t._v("\n            Refresh\n          ")])],1)],1)],1),t._v(" "),t.loaddata?e(f.a,{attrs:{headers:t.headers,search:t.search,items:t.loaddata,"items-per-page":t.pageLine},scopedSlots:t._u([{key:"top",fn:function(){return[e(y.a,{attrs:{flat:""}},[e(x.a,[t._v("ສິນຄ້າທັງຫມົດ: "+t._s(t.loaddata.length))]),t._v(" "),e(_.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),e(h.a),t._v(" "),e(r.a,{staticClass:"primary",attrs:{size:"large",variant:"outlined",rounded:""},on:{click:function(e){t.productFormCreate=!0}}},[e("span",{staticClass:"mdi mdi-note-plus-outline"}),t._v("\n            ສ້າງສິນຄ້າໃຫມ່\n          ")])],1)]},proxy:!0},{key:"item.functionEdit",fn:function(o){var n=o.item;return[e(r.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.editItem(n),t.wallet=!0}}},[e("i",{staticClass:"fa fa-pencil-square-o"})])]}},{key:"item.functionStock",fn:function(o){var n=o.item;return[e(r.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.triggerCardForm(n),t.wallet=!0}}},[e("i",{staticClass:"fa fa-cart-plus"})])]}},{key:"item.functionStockView",fn:function(o){var n=o.item;return[e(r.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.editStock(n),t.wallet=!0}}},[e("i",{staticClass:"fa fa-eye"})])]}},{key:"item.pro_cost_price",fn:function(e){var o=e.item;return[t._v("\n        "+t._s(t.formatNumber(o.pro_cost_price))+"\n\n      ")]}},{key:"item.pro_price",fn:function(e){var o=e.item;return[t._v("\n        "+t._s(t.formatNumber(o.pro_price))+"\n\n      ")]}},{key:"item.pro_card_count",fn:function(e){var o=e.item;return[t._v("\n        "+t._s(t.formatNumber(o.pro_card_count))+"\n\n      ")]}},{key:"item.status",fn:function(o){var r=o.item;return[e(l.a,{staticClass:"ma-2",attrs:{color:t.verifyStockStatus(r.minStock,r.pro_card_count).includes("In")?"green":t.verifyStockStatus(r.minStock,r.pro_card_count).includes("Out")?"red":"orange","text-color":"white"}},[t._v("\n          "+t._s(t.verifyStockStatus(r.minStock,r.pro_card_count))+"\n        ")])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:o(306).default,DialogClassicMessage:o(648).default,CardForm:o(700).default,ProductForm:o(685).default,ProductFormCreate:o(686).default})}}]);