(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{714:function(t,e,r){"use strict";r.r(e);var o=r(288),n=r(28),c=r(292),d=r(645),l=(r(33),r(191),r(45),r(61),r(55),r(38),r(64),r(51),r(7),r(63),r(88),r(60),r(29)),f=r(2),_=(r(10),r(81),r(9),r(5),r(8),r(27),r(40),r(112),r(686)),m=r(67),h=r(687),y=r(308);function v(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){d=!0,n=t},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw n}}}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var S={components:{ProductForm:_.default,ProductFormCreate:h.default},middleware:"auths",data:function(){var t;return t={productFormCreate:!1,productFormKey:1,isstock:!1,selectedProductId:"",selectedProductCost:0,selectedProductName:"",isloading:!1,dialogMessage:!1,message:"",selectedStockProductId:"",loaddata:[],carddata:[],cardType:[],content:null,selectedCardType:"",pageLine:30,search:"",editProductForm:!1},Object(f.a)(t,"selectedProductId",null),Object(f.a)(t,"stockFormKey",1),Object(f.a)(t,"headers",[{text:"ໄອດີ",align:"center",value:"pro_id"},{text:"ຊື່ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ຮ້ານ",align:"center",value:"pro_outlet_name"},{text:"ຫມວດສິນຄ້າ",align:"center",value:"pro_category_desc"},{text:"ລາຄາ",align:"center",value:"pro_price"},{text:"ສະຕັອກຂັ້ນຕ່ຳ",align:"center",value:"minStock"},{text:"Stock",align:"center",value:"pro_card_count"},{text:"Status",align:"center",value:"status"},{text:"cost",align:"center",value:"pro_cost_price"}]),t},watch:{message:function(t){this.dialogMessage=null!=t}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:return e.next=4,t.loadCardCategory();case 4:case"end":return e.stop()}}),e)})))()},methods:{formatNumber:function(t){return Object(m.e)(t)},verifyStockStatus:function(t,e){return 0==e?"Out of stock":t<e?"In stock":"Low stock"},triggerCardForm:function(t){this.stockFormKey+=1,this.selectedProductId=t.pro_id,this.selectedProductCost=t.pro_cost_price,this.selectedProductName=t.pro_name,this.isstock=!0},fetchData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("product_f").then((function(e){t.loaddata=[];var r,o=v(e.data);try{for(o.s();!(r=o.n()).done;){var n=r.value;n.minStock>n.card_count&&t.loaddata.push({pro_id:n.pro_id,pro_name:n.pro_name,pro_price:n.pro_price,pro_desc:n.pro_desc,pro_status:n.pro_status,pro_category:n.pro_category,pro_category_desc:n.pro_category+" - "+n.categ_name,pro_card_count:n.card_count,pro_cost_price:n.cost_price,pro_outlet:n.outlet,pro_outlet_name:n.outlet_name,minStock:n.minStock,functionEdit:n.pro_id,functionStock:n.pro_id,functionStockView:n.pro_id,status:n.pro_id})}}catch(t){o.e(t)}finally{o.f()}})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){this.productFormKey+=1,this.selectedProductId=t.pro_id,this.editProductForm=!0},editStock:function(t){console.log("ID "+t.pro_id),console.log("NAME "+t.pro_name),console.log("OBJ "+Object.keys(t)),this.$router.push("/admin/stock/".concat(t.pro_id))},attachFile:function(t){var e=this;this.carddata.length=0;var r=t,o=new FileReader;r&&(console.log("FILE LEN: "+r),o.onload=function(t){e.content=t.target.result,console.log("Data content => : "+e.content);var r=e.content.replace(/\r\n/g,"\n").split("\n").filter((function(t){return""!==t&&t.length>=10})),i=0;r.forEach((function(element){i++,console.log("Data loop ".concat(i," ").concat(element)),e.carddata.push(element.replace("\t","|").replace("\t","|").split("'").pop()),console.log(element.split("'").pop())})),console.log("CARD DATA: "+e.carddata)},o.onerror=function(t){return console.log(t)},o.readAsText(r))},loadCardCategory:function(){var t=this;this.isloading=!0,this.$axios.get("stockcate_f").then((function(e){t.cardType=e.data.map((function(t){return{card_type_code:t.card_type_code,card_type_name:t.card_type_name}})),t.selectedCardType=t.cardType[0].card_type_code,console.log("CARD LEN: "+t.cardType.length),console.log("CARD LEN: "+t.cardType[0].card_type_code),t.isloading=!1})).catch((function(e){console.log("Error: "+e),t.isloading=!1}))},rebuildStock:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isloading){e.next=5;break}return t.isloading=!0,e.next=4,t.$axios.post("/api/card/rebuildStock").then((function(e){Object(y.c)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.fetchData()})).catch((function(e){Object(y.b)(t.$swal,"Error",e.response.data)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()}}},w=r(44),component=Object(w.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(o.a,[e(n.d,[t._v("\n      ສິ້ນຄ້າໃກ້ໝົດ\n    ")]),t._v(" "),t.loaddata?e(d.a,{attrs:{headers:t.headers,search:t.search,items:t.loaddata,"items-per-page":t.pageLine},scopedSlots:t._u([{key:"item.pro_cost_price",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.formatNumber(r.pro_cost_price))+"\n\n      ")]}},{key:"item.pro_price",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.formatNumber(r.pro_price))+"\n\n      ")]}},{key:"item.pro_card_count",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.formatNumber(r.pro_card_count))+"\n\n      ")]}},{key:"item.status",fn:function(r){var o=r.item;return[e(c.a,{staticClass:"ma-2",attrs:{color:t.verifyStockStatus(o.minStock,o.pro_card_count).includes("In")?"green":t.verifyStockStatus(o.minStock,o.pro_card_count).includes("Out")?"red":"orange","text-color":"white"}},[t._v("\n          "+t._s(t.verifyStockStatus(o.minStock,o.pro_card_count))+"\n        ")])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);