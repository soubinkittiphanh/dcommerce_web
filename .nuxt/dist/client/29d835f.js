(window.webpackJsonp=window.webpackJsonp||[]).push([[76,17,23,24,31,32,33],{690:function(t,e,r){var content=r(703);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("03cbcf00",content,!0,{sourceMap:!1})},702:function(t,e,r){"use strict";r(690)},703:function(t,e,r){var n=r(16)((function(i){return i[1]}));n.push([t.i,".my-text-bold[data-v-7da7ed0d]{color:#000;font-weight:bolder}",""]),n.locals={},t.exports=n},713:function(t,e,r){"use strict";r.r(e);var n=r(288),o=r(28),c=r(292),l=r(645),d=(r(33),r(191),r(45),r(61),r(55),r(38),r(64),r(51),r(7),r(63),r(88),r(60),r(29)),f=r(2),m=(r(10),r(81),r(9),r(5),r(8),r(27),r(40),r(112),r(685)),h=r(67),v=r(686),y=r(308);function _(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var x={components:{ProductForm:m.default,ProductFormCreate:v.default},middleware:"auths",data:function(){var t;return t={productFormCreate:!1,productFormKey:1,isstock:!1,selectedProductId:"",selectedProductCost:0,selectedProductName:"",isloading:!1,dialogMessage:!1,message:"",selectedStockProductId:"",loaddata:[],carddata:[],cardType:[],content:null,selectedCardType:"",pageLine:30,search:"",editProductForm:!1},Object(f.a)(t,"selectedProductId",null),Object(f.a)(t,"stockFormKey",1),Object(f.a)(t,"headers",[{text:"ໄອດີ",align:"center",value:"pro_id"},{text:"ຊື່ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ຮ້ານ",align:"center",value:"pro_outlet_name"},{text:"ຫມວດສິນຄ້າ",align:"center",value:"pro_category_desc"},{text:"ລາຄາ",align:"center",value:"pro_price"},{text:"ສະຕັອກຂັ້ນຕ່ຳ",align:"center",value:"minStock"},{text:"Stock",align:"center",value:"pro_card_count"},{text:"Status",align:"center",value:"status"},{text:"cost",align:"center",value:"pro_cost_price"}]),t},watch:{message:function(t){this.dialogMessage=null!=t}},mounted:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:return e.next=4,t.loadCardCategory();case 4:case"end":return e.stop()}}),e)})))()},methods:{formatNumber:function(t){return Object(h.e)(t)},verifyStockStatus:function(t,e){return 0==e?"Out of stock":t<e?"In stock":"Low stock"},triggerCardForm:function(t){this.stockFormKey+=1,this.selectedProductId=t.pro_id,this.selectedProductCost=t.pro_cost_price,this.selectedProductName=t.pro_name,this.isstock=!0},fetchData:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("product_f").then((function(e){t.loaddata=[];var r,n=_(e.data);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.minStock>o.card_count&&t.loaddata.push({pro_id:o.pro_id,pro_name:o.pro_name,pro_price:o.pro_price,pro_desc:o.pro_desc,pro_status:o.pro_status,pro_category:o.pro_category,pro_category_desc:o.pro_category+" - "+o.categ_name,pro_card_count:o.card_count,pro_cost_price:o.cost_price,pro_outlet:o.outlet,pro_outlet_name:o.outlet_name,minStock:o.minStock,functionEdit:o.pro_id,functionStock:o.pro_id,functionStockView:o.pro_id,status:o.pro_id})}}catch(t){n.e(t)}finally{n.f()}})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){this.productFormKey+=1,this.selectedProductId=t.pro_id,this.editProductForm=!0},editStock:function(t){console.log("ID "+t.pro_id),console.log("NAME "+t.pro_name),console.log("OBJ "+Object.keys(t)),this.$router.push("/admin/stock/".concat(t.pro_id))},attachFile:function(t){var e=this;this.carddata.length=0;var r=t,n=new FileReader;r&&(console.log("FILE LEN: "+r),n.onload=function(t){e.content=t.target.result,console.log("Data content => : "+e.content);var r=e.content.replace(/\r\n/g,"\n").split("\n").filter((function(t){return""!==t&&t.length>=10})),i=0;r.forEach((function(element){i++,console.log("Data loop ".concat(i," ").concat(element)),e.carddata.push(element.replace("\t","|").replace("\t","|").split("'").pop()),console.log(element.split("'").pop())})),console.log("CARD DATA: "+e.carddata)},n.onerror=function(t){return console.log(t)},n.readAsText(r))},loadCardCategory:function(){var t=this;this.isloading=!0,this.$axios.get("stockcate_f").then((function(e){t.cardType=e.data.map((function(t){return{card_type_code:t.card_type_code,card_type_name:t.card_type_name}})),t.selectedCardType=t.cardType[0].card_type_code,console.log("CARD LEN: "+t.cardType.length),console.log("CARD LEN: "+t.cardType[0].card_type_code),t.isloading=!1})).catch((function(e){console.log("Error: "+e),t.isloading=!1}))},rebuildStock:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isloading){e.next=5;break}return t.isloading=!0,e.next=4,t.$axios.post("/api/card/rebuildStock").then((function(e){Object(y.c)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.fetchData()})).catch((function(e){Object(y.b)(t.$swal,"Error",e.response.data)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()}}},O=r(44),component=Object(O.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(n.a,[e(o.d,[t._v("\n      ສິ້ນຄ້າໃກ້ໝົດ\n    ")]),t._v(" "),t.loaddata?e(l.a,{attrs:{headers:t.headers,search:t.search,items:t.loaddata,"items-per-page":t.pageLine},scopedSlots:t._u([{key:"item.pro_cost_price",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.formatNumber(r.pro_cost_price))+"\n\n      ")]}},{key:"item.pro_price",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.formatNumber(r.pro_price))+"\n\n      ")]}},{key:"item.pro_card_count",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.formatNumber(r.pro_card_count))+"\n\n      ")]}},{key:"item.status",fn:function(r){var n=r.item;return[e(c.a,{staticClass:"ma-2",attrs:{color:t.verifyStockStatus(n.minStock,n.pro_card_count).includes("In")?"green":t.verifyStockStatus(n.minStock,n.pro_card_count).includes("Out")?"red":"orange","text-color":"white"}},[t._v("\n          "+t._s(t.verifyStockStatus(n.minStock,n.pro_card_count))+"\n        ")])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},714:function(t,e,r){"use strict";r.r(e);var n=r(286),o=r(288),c=r(28),l=r(641),d=r(156),f=r(640),m={name:"menu-card",props:{title:{type:String,default:""},path:{type:String,default:""},icon:{type:String,default:""},total:{type:String,default:""}},data:function(){return{imageSrc:r(399)}},methods:{takeMeTo:function(){this.$router.push(this.path)}}},h=r(44),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{outlined:"","max-height":"80"}},[e(c.c,[e("div",[e(f.a,{attrs:{align:"center"}},[e(l.a,{staticStyle:{"text-align":"left"},attrs:{cols:"3"}},[e(n.a,{attrs:{color:"primary",size:"50"}},[e(d.a,{attrs:{dark:"",size:"30"}},[t._v("\n                            "+t._s(t.icon)+"\n                        ")])],1)],1),t._v(" "),e(l.a,{staticClass:"pt-0",staticStyle:{"text-align":"right"},attrs:{cols:"9"}},[e(f.a,[e(l.a,{attrs:{cols:"12"}},[t._v(t._s(t.title))]),t._v(" "),e(l.a,{staticStyle:{"font-size":"larger","font-weight":"bold","font-family":"Arial, Helvetica, sans-serif"},attrs:{cols:"12"}},[t._v(" "+t._s(t.total)+" ")])],1)],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports},756:function(t,e,r){"use strict";r.r(e);var n=r(288),o=r(28),c=r(641),l=r(636),d=r(640),f={props:{title:{type:String,default:""},value:{type:String,default:0},color:{type:String,default:"#26c6da"}},data:function(){return{expand:!1}}},m=(r(702),r(44)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"ma-0 pa-0"},[e("div",[e(d.a,[e(c.a,{attrs:{cols:"6"}},[e(n.a,{staticClass:"mx-auto mr-0",attrs:{height:"60",width:"60",color:t.color}},[e(o.c,{staticClass:"text-center"},[t._t("icon")],2)],1)],1),t._v(" "),e(c.a,{attrs:{cols:"6"}},[e("p",{staticClass:"my-text-bold"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"my-text-bold"},[t._v(t._s(t.value))])])],1)],1)])}),[],!1,null,"7da7ed0d",null);e.default=component.exports},757:function(t,e,r){"use strict";r.r(e);var n=r(288),o=r(28),c=r(641),l=r(640),d={data:function(){return{}}},f=r(44),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,{staticClass:"mx-auto",attrs:{"min-height":"100",color:"transparent"}},[e(o.c,[e(l.a,[e(c.a,{attrs:{cols:"6"}},[t._t("slot1")],2),t._v(" "),e(c.a,{attrs:{cols:"6"}},[t._t("slot2")],2)],1),t._v(" "),e(l.a,[e(c.a,{attrs:{cols:"6"}},[t._t("slot3")],2),t._v(" "),e(c.a,{attrs:{cols:"6"}},[t._t("slot4")],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},758:function(t,e,r){"use strict";r.r(e);var n=r(288),o=r(28),c=r(645),l=(r(33),r(191),r(29));r(40),r(55),r(5),r(38),r(64),r(51),r(7),r(63),r(88),r(60),r(112);function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m={data:function(){return{campaignList:[],search:"",headers:[{text:"ຊື່ Campaign",align:"center",value:"title",sortable:!0},{text:"ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ວັນທີເລີ່ມ",align:"center",value:"start"},{text:"ວັນທີສິ້ນສຸດ",align:"center",value:"end"},{text:"ເຂົ້າເຖິງ",align:"center",value:"reach"},{text:"ຄອມເມັ້ນ",align:"center",value:"comments"},{text:"Result",align:"center",value:"results"},{text:"ປິດການຂາຍ",align:"center",value:"closed"},{text:"ຍອດທີ່ຈ່າຍໄປ",align:"center",value:"budgetSpend"}]}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadCampaignData();case 2:case"end":return e.stop()}}),e)})))()},methods:{loadCampaignData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("/api/campaign/find_summary").then((function(e){t.campaignList=e.data.rows.map((function(t){return t}));var r,n=d(t.campaignList);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.start=o.start.split("T")[0],o.end=o.end.split("T")[0]}}catch(t){n.e(t)}finally{n.f()}t.headers.length=0})).catch((function(t){console.log("Error ",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},h=r(44),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,[e(o.d,[t._v("\n            Campaign\n        ")]),t._v(" "),e(o.c,[t.campaignList?e(c.a,{attrs:{headers:t.headers,search:t.search,items:t.campaignList}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},759:function(t,e,r){"use strict";r.r(e);var n=r(183),o=r(288),c=r(28),l=r(292),d=r(619),f=r(291),m=r(642),h=r(635),v=r(634),y=(r(38),r(7),r(63),r(10),r(9),r(5),r(12),r(8),r(13),r(2)),_=(r(45),r(61),r(47));function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"menu-card",components:{},props:{title:{type:String,default:""},path:{type:String,default:""},icon:{type:String,default:""}},data:function(){return{imageSvg:r(400),imageSrc:r(399),terminalDialog:!1,terminalSelected:this.findSelectedTerminal||1}},computed:x({},Object(_.c)(["findAllTerminal","findSelectedTerminal"])),methods:x(x({},Object(_.b)(["setSelectedTerminal"])),{},{takeMeTo:function(){this.path.includes("/pos")&&!this.findSelectedTerminal?(this.terminalDialog=!0,console.log("PATH ".concat(this.path))):this.$router.push(this.path)},takeToPOS:function(){this.setSelectedTerminal(this.terminalSelected),this.terminalDialog=!1,this.$router.push(this.path)}})},w=r(44),component=Object(w.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{attrs:{scrollable:"","max-width":"1200",persistent:""},model:{value:t.terminalDialog,callback:function(e){t.terminalDialog=e},expression:"terminalDialog"}},[e(o.a,[e(c.d,[t._v("ເລືອກ Terminal")]),t._v(" "),e(f.a),t._v(" "),e(c.c,{staticStyle:{height:"300px"}},[e(v.a,{attrs:{column:""},model:{value:t.terminalSelected,callback:function(e){t.terminalSelected=e},expression:"terminalSelected"}},t._l(t.findAllTerminal,(function(t){return e(h.a,{key:t.id,attrs:{label:t.name+" - "+t.description,value:t.id}})})),1)],1),t._v(" "),e(f.a),t._v(" "),e(c.a,[e(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.takeToPOS}},[t._v("\n                    ເລືອກ\n                ")])],1)],1)],1),t._v(" "),e(m.a,{attrs:{"open-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{elevation:n?16:0,outlined:""},on:{click:t.takeMeTo}},[e(c.c,{staticClass:"text-center"},[e("div",[t._t("iconSlot")],2),t._v(" "),e("div",{staticClass:"font-weight-meduim primary--text"},[e(l.a,{staticClass:"ma-2",staticStyle:{"background-color":"transparent",outline:"1px solid gray"},attrs:{variant:"outlined"}},[t._v("\n                        "+t._s(t.title)+"\n                    ")])],1)])],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},774:function(t,e,r){t.exports=r.p+"img/cashier_2.208aede.svg"},775:function(t,e,r){t.exports=r.p+"img/invoice.45f420f.svg"},776:function(t,e,r){t.exports=r.p+"img/pay-card.8fb80cc.svg"},777:function(t,e,r){t.exports=r.p+"img/stock.b6becdb.svg"},778:function(t,e,r){t.exports=r.p+"img/responsive.bfad449.svg"},779:function(t,e,r){t.exports=r.p+"img/patient.1cdc99c.svg"},868:function(t,e,r){"use strict";r.r(e);var n=r(183),o=r(288),c=r(28),l=r(641),d=r(619),f=r(291),m=r(635),h=r(634),v=r(640),y=(r(38),r(7),r(63),r(12),r(13),r(55),r(64),r(51),r(33),r(88),r(60),r(29)),_=r(2),S=(r(112),r(320),r(5),r(9),r(105),r(40),r(8),r(27),r(396),r(65),r(10),r(67)),x=r(756),O=r(757),w=r(758),k=r(713),D=r(714),j=r(47),C=r(385);function T(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R={components:{CardOnTop:x.default,CampaignCard:w.default,CardGrouping:O.default,MenuOverview:D.default,MinStockCard:k.default},middleware:"auths",data:function(){return{terminalDialog:!1,terminalSelected:null,barOptionsForMonthlyStat:{colors:[],chart:{type:"line",height:"auto"},plotOptions:{bar:{borderRadius:4,horizontal:!0},dataLabels:{style:{fontSize:"12px"},formatter:function(t){return t.toFixed(2)}}},dataLabels:{enabled:!0},xaxis:{categories:[],style:{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}},yaxis:{title:{text:"Sales (in thousands)"},labels:{formatter:function(t){return t.toLocaleString()}}},title:{text:"ສະຖິຕິການຂາຍໃນປີ",style:{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}}},barSeriesForMonthlyStat:[{data:[]}],menus:[{title:"POS",svgIcon:r(774),path:"/pos"},{title:"Invoice",svgIcon:r(775),path:"/admin/ordersFromPos"},{title:"ລູກຫນີ້",svgIcon:r(776),path:"/admin/ordersFromPosCredit"},{title:"Stock",svgIcon:r(777),path:"/admin/product/productlist"},{title:"ລາຍການ ການຂາຍ",svgIcon:r(778),path:"/admin/ordersFromPos"},{title:"Customer",svgIcon:r(779),path:"/admin/client"}],yearlySale:[],menusOverview:[{title:"ຍອດຂາຍມື້ນິ (KIP)",icon:"mdi-calendar",path:"",total:"0"},{title:"ຍອດຂາຍເດືອນນີ້ - ( "+(new Date).toDateString().split(" ")[1]+"/"+(new Date).toDateString().split(" ")[3]+" ) KIP",icon:"mdi-calendar",path:"",total:"0"},{title:"ຍອດຂາຍໝົດປີ - "+(new Date).toDateString().split(" ")[3]+" KIP",icon:"mdi-calendar",path:"",total:"0"}],saleValue:0,items:[{name:"Item #1",id:1},{name:"Item #2",id:2},{name:"Item #3",id:3}],minProductList:[],isloading:!1,dailyState:!1,series:[0,0],options:{chart:{type:"donut"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],labels:["CASH","COD"],title:{text:"ອໍເດີ ປະເພດ"},annotations:{points:[]}},peeair:{series:[],options:{colors:["#FF4560","#775DD0"]}},pieChartOption:{title:Object(_.a)({text:"ໝວດສິນຄ້າຂາຍດີ",align:"center",style:{fontSize:"16px"}},"style",{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}),labels:[],barSeries:[],chart:{type:"pie",height:"auto"}},barSeriesForDailyStat:[{data:[]}],barOptionsForDailyStat:{colors:[],chart:{type:"line",height:"auto"},plotOptions:{bar:{borderRadius:4,horizontal:!0},dataLabels:{style:{fontSize:"12px"},formatter:function(t){return t.toFixed(2)}}},dataLabels:{enabled:!0},xaxis:{categories:[],style:{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}},yaxis:{title:{text:"Sales (in thousands)"},labels:{formatter:function(t){return t.toLocaleString()}}},title:{text:"ສະຖິຕິການຂາຍໃນເດືອນ",style:{fontFamily:"noto sans lao",fontSize:"16",fontWeight:"bold"}}}}},created:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.findSelectedTerminal||(t.terminalSelected=1,t.terminalDialog=!0),e.next=3,t.loadSaleStatistic();case 3:return t.generateDailyStatisticSale(),t.init(),e.next=7,t.minStockProduct();case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadTopSale();case 2:return e.next=4,t.paymentGroup();case 4:case"end":return e.stop()}}),e)})))()},computed:A(A({},Object(j.c)(["findAllTerminal","findSelectedTerminal"])),{},{totalSaleYTD:function(){var t=this.yearlySale.reduce((function(t,e){return t+e.total-e.discount}),0);return console.log("YTD SALE ".concat(t)),Object(S.e)(t)},totalSaleMTD:function(){console.log("====> TD ".concat(S.l.split("-")[1]));var t=this.yearlySale.filter((function(t){return t.bookingDate.split("-")[1]==S.l.split("-")[1]})).reduce((function(t,e){return t+e.total-e.discount}),0);return console.log("MTD SALE ".concat(t)),Object(S.e)(t)},txnSaleMTD:function(){return this.yearlySale.filter((function(t){return t.bookingDate.split("-")[1]==S.l.split("-")[1]})).reduce((function(t,e){var r=e.bookingDate,n=t.findIndex((function(t){return t.date===r}));return-1===n?t.push({date:r,transactions:[e],totalSale:e.total-e.discount}):(t[n].transactions.push(e),t[n].totalSale+=e.total-e.discount),t}),[])},totalSaleTD:function(){var t=this.yearlySale.filter((function(t){return t.bookingDate==S.l})).reduce((function(t,e){return t+e.total-e.discount}),0);return console.log("TD SALE ".concat(t)),Object(S.e)(t)}}),methods:A(A({},Object(j.b)(["setSelectedTerminal"])),{},{chooseTerminal:function(){this.setSelectedTerminal(this.terminalSelected),this.terminalDialog=!1},numberFormatter:function(t){return Object(S.e)(t)},minStockProduct:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("product_f").then((function(e){t.minProductList=[];var r,n=T(e.data);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.minStock>o.card_count&&t.minProductList.push({pro_id:o.pro_id,pro_name:o.pro_name,pro_price:o.pro_price,pro_desc:o.pro_desc,pro_status:o.pro_status,pro_category:o.pro_category,pro_category_desc:o.pro_category+" - "+o.categ_name,pro_card_count:o.card_count,pro_cost_price:o.cost_price,pro_outlet:o.outlet,pro_outlet_name:o.outlet_name,minStock:o.minStock,function:o.pro_id})}}catch(t){n.e(t)}finally{n.f()}})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},getRandomColor:function(){for(var t="#",i=0;i<6;i++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},loadTopSale:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/topsaleMinimart/?top=5").then((function(e){var r=C.b(t.$refs.chart),option={title:{text:"ສິນຄ້າຂາຍດີຕາມໝວດ",subtext:"-",left:"center",textStyle:{fontFamily:"noto sans lao"}},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};console.log("Data ",e.data[0]),e.data.map((function(t){var e={name:t.categ_name+" "+Object(S.e)(t.total_sale),value:+t.sale_count};option.series[0].data.push(e)})),r.setOption(option)})).catch((function(t){console.log("error",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},loadSaleStatistic:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(S.c)(),t.isloading=!0,e.next=4,t.$axios.get("api/sale/sumsaleYearly",{params:{date:r}}).then((function(e){t.yearlySale=[];var r,n=T(e.data);try{for(n.s();!(r=n.n()).done;){var o=r.value;t.yearlySale.push(o)}}catch(t){n.e(t)}finally{n.f()}t.menusOverview[2].total=t.totalSaleYTD,t.menusOverview[1].total=t.totalSaleMTD,t.menusOverview[0].total=t.totalSaleTD,console.log("Lend of sale yearly "+t.yearlySale.length),t.monthGroupSale()})).catch((function(t){console.log("error",t)}));case 4:t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},generateDailyStatisticSale:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isloading=!0,r=T(t.txnSaleMTD);try{for(r.s();!(n=r.n()).done;)o=n.value,t.barOptionsForDailyStat.colors.push(t.getRandomColor),t.barSeriesForDailyStat[0].data.push(o.totalSale),t.barOptionsForDailyStat.xaxis.categories.push(o.date)}catch(t){r.e(t)}finally{r.f()}t.dailyState=!0,t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},monthGroupSale:function(){var t={};this.yearlySale.forEach((function(e){var r=new Date(e.bookingDate),n=r.getMonth()+1,o=r.getFullYear(),c="".concat(o,"-").concat(n.toString().padStart(2,"0"));t[c]||(t[c]={total:0,transactions:[]}),t[c].total+=e.total-e.discount,t[c].transactions.push(e),console.log("datat add===>")})),console.log("====> my chart"+t);for(var e=0,r=Object.keys(t);e<r.length;e++){var n=r[e];console.log("*****ETERATOR*****"+n),this.barOptionsForMonthlyStat.colors.push(this.getRandomColor),this.barSeriesForMonthlyStat[0].data.push(t[n].total),this.barOptionsForMonthlyStat.xaxis.categories.push(n)}return t},paymentGroup:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/cod_n_cash_report").then((function(e){t.series=e.data.series,t.options.labels=e.data.labels})).catch((function(t){console.log("error",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},init:function(){console.log("Init function");var t=[66,33];this.peeair.options={title:{text:"GreenWood",align:"center",style:{fontSize:"16px"}},labels:[" COD ".concat(t[0]," ບິນ ")," ORDER ".concat(t[1]," ບິນ")],chart:{type:"pie",width:"100%",height:"400px"}},this.peeair.series=t}})},I=r(44),component=Object(I.a)(R,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ma-0",staticStyle:{background:"#EFF2F9"}},[e(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(d.a,{attrs:{scrollable:"","max-width":"1200",persistent:""},model:{value:t.terminalDialog,callback:function(e){t.terminalDialog=e},expression:"terminalDialog"}},[e(o.a,[e(c.d,[t._v("ເລືອກ Terminal")]),t._v(" "),e(f.a),t._v(" "),e(c.c,{staticStyle:{height:"300px"}},[e(h.a,{attrs:{column:""},model:{value:t.terminalSelected,callback:function(e){t.terminalSelected=e},expression:"terminalSelected"}},t._l(t.findAllTerminal,(function(t){return e(m.a,{key:t.id,attrs:{label:t.name+" - "+t.description,value:t.id}})})),1)],1),t._v(" "),e(f.a),t._v(" "),e(c.a,[e(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.chooseTerminal}},[t._v("\n                    ເລືອກ\n                ")])],1)],1)],1),t._v(" "),e("div",{staticClass:"mb-1"},[e(o.a,{staticClass:"pa-4",staticStyle:{"background-color":"transparent"}},[e(c.d,{staticStyle:{"font-weight":"bold","font-family":"Arial, Helvetica, sans-serif"}},[t._v("\n                SHORTCUT \n            ")]),t._v(" "),e(v.a,[e(l.a,{attrs:{cols:12}},[e("div",{staticClass:"row"},t._l(t.menus,(function(r,n){return e("div",{key:n,staticClass:"col-12 col-md-4 col-sm-6 col-xs-6 text-center"},[e("Menu",{attrs:{title:r.title,icon:r.icon,path:r.path},scopedSlots:t._u([{key:"iconSlot",fn:function(){return[e("img",{attrs:{src:r.svgIcon,height:"80"}})]},proxy:!0}],null,!0)})],1)})),0)])],1)],1)],1),t._v(" "),e("div",{staticClass:"mb-1"},[e(o.a,{staticClass:"pa-1",staticStyle:{"background-color":"transparent"}},[e(c.d,{staticStyle:{"font-weight":"bold","font-family":"Arial, Helvetica, sans-serif"}},[t._v("\n                OVERVIEW\n            ")]),t._v(" "),e(v.a,[e(l.a,{attrs:{cols:12}},[e("div",{staticClass:"row"},t._l(t.menusOverview,(function(t,r){return e("div",{key:r,staticClass:"col-12 col-md-4 col-sm-6 col-xs-6"},[e("MenuOverview",{attrs:{title:t.title,icon:t.icon,path:t.path,total:t.total}})],1)})),0)])],1)],1)],1),t._v(" "),e("div",{staticClass:"mb-2 pa-0"},[e(v.a,{staticClass:"p-0"},[e(l.a,{attrs:{cols:"6"}}),t._v(" "),e(l.a,{attrs:{cols:"3"}}),t._v(" "),e(l.a,{attrs:{cols:"3"}})],1)],1),t._v(" "),e("div",{staticClass:"mb-1"},[e(v.a,[e(l.a,{attrs:{cols:"6",md:"6",sm:"6",xl:"6"}},[e(o.a,[e("div",{ref:"chart",staticStyle:{width:"100%",height:"400px"}})])],1),t._v(" "),t.dailyState?e(l.a,{attrs:{cols:"6",md:"6",sm:"6",xl:"6"}},[e(o.a,[e("apexchart",{attrs:{options:t.barOptionsForDailyStat,series:t.barSeriesForDailyStat}})],1)],1):t._e()],1)],1),t._v(" "),t.dailyState?e("div",{staticClass:"mb-1"},[e(v.a,[e(l.a,{attrs:{cols:"6",md:"6",sm:"6",xl:"6"}},[e(o.a,[e("apexchart",{attrs:{options:t.barOptionsForMonthlyStat,series:t.barSeriesForMonthlyStat}})],1)],1)],1)],1):t._e(),t._v(" "),e("MinStockCard")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:r(306).default,Menu:r(759).default,MenuOverview:r(714).default,MinStockCard:r(713).default})}}]);