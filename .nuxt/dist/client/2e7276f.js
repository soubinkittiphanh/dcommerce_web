(window.webpackJsonp=window.webpackJsonp||[]).push([[63,22,69],{617:function(e,t,r){"use strict";r.r(t);var o=r(172),n=r(280),c=r(47),l=r(281),d=r(610),f={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},m=r(44),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t(n.a,[t(c.d,{staticClass:"text-h5 grey lighten-2"},[e._v(" ຂໍ້ຄວາມ ")]),e._v(" "),t(c.c,[e._v("\n    "+e._s(e.message)+"\n  ")]),e._v(" "),t(l.a),e._v(" "),t(c.a,[t(d.a),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:e.toggleDialog}},[e._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},640:function(e,t,r){"use strict";r.r(t);r(4),r(39),r(51),r(390),r(301),r(33),r(107);var o={data:function(){return{imagesPreviewURL:[],files:[]}},methods:{onFilesChange:function(e){var t=e;if(this.files=e,t){console.log("FILE LEN: "+t.length);for(var i=0;i<t.length;i++)this.imagesPreviewURL.push({IMG_URL:URL.createObjectURL(t[i]),NAME:t[i].name,isvalid:this.sizeValidate(t[i].size)})}else this.imagesPreviewURL=null},deleteFile:function(e){this.imagesPreviewURL.splice(e,1),this.files.splice(e,1)},sizeValidate:function(e){console.log("SIZE"+e);var t=2e7;if(e>t)return"Max size is ".concat(2e4,"Kb")}}},n=r(44),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);t.default=component.exports},646:function(e,t,r){var content=r(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("43800285",content,!0,{sourceMap:!1})},654:function(e,t,r){"use strict";r.r(t);var o=r(613),n=r(172),c=r(280),l=r(47),d=r(612),f=r(608),m=r(281),_=r(675),v=r(619),h=r(221),k=r(272),y=r(171),x=r(274),w=r(50),C=r(611),D=r(610),S=r(94),R=r(636),F=r(24),$=(r(105),r(30),r(4),r(7),r(32),r(33),r(297)),P={middleware:"auths",mixins:[r(640).default],data:function(){return{preview:!1,previewSrc:null,dialog:!1,dialogMessage:!1,message:"",isloading:!1,valid:!0,name:"",rules:{nameRule:[function(e){return!!e||"ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ "},function(e){return e&&e.length<=150||"ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ"}],priceRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ຈຳນວ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],minRule:[function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],costPrice:[function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],retailRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ເປີເຊັນ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],imageRule:[function(e){var t=0,r=0;return e?(e.forEach((function(e){t+=e.size,console.log("Size: "+e.size)})),r=t/e.length,console.log("File size: aaa"+e.length+" Each: "+r||!1)):console.log("File: "+e),console.log("Total: "+r),r<2e6||"ຂະຫນາດເກີນ"}]},category:[],formData:{pro_category:1001,pro_id:null,pro_name:"",pro_price:0,pro_retail_price:0,pro_desc:"",pro_status:!1,pro_outlet:1,pro_cost_price:0,createdAt:null,minStock:0},outlet:[]}},mounted:function(){this.fetchCategory(),this.fetchOutlet()},watch:{message:function(e){this.dialogMessage=null!=e},formData:function(e){console.log("Watch fromData"+e)}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},fetchCategory:function(){var e=this;return Object(F.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("category_f").then((function(t){console.log("=>category"+t.data),e.category=t.data.map((function(e){return{categ_id:e.categ_id,categ_name:e.categ_name,categ_desc:e.categ_desc}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},fetchOutlet:function(){var e=this;return Object(F.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("outlet").then((function(t){console.log("=>outlet"+t.data),e.outlet=t.data.map((function(e){return{outlet_id:e.id,outlet_name:e.name,outlet_tel:e.tel}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},uploadFiles:function(){var e=this;return Object(F.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){t.next=2;break}return t.abrupt("return");case 2:return console.log("Outlet: "+e.formData.outlet),e.isloading=!0,(r=new FormData).append("FORM",JSON.stringify(e.formData)),e.files.forEach((function(element){r.append("files",element)})),t.next=9,e.$axios.post("uploadmulti",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.isloading=!1,Object($.d)(e.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),e.$emit("refresh"),e.$emit("close-dialog")})).catch((function(t){e.isloading=!1,Object($.c)(e.$swal,"Error",t)}));case 9:case"end":return t.stop()}}),t)})))()},previewImg:function(e){this.previewSrc=e,this.preview=!0}}},O=(r(661),r(44)),component=Object(O.a)(P,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(f.a,{attrs:{"max-width":"300px",persistent:""},model:{value:e.dialogMessage,callback:function(t){e.dialogMessage=t},expression:"dialogMessage"}},[t("dialog-classic-message",{attrs:{message:e.message},on:{closedialog:function(t){e.message=null}}})],1),e._v(" "),t(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(f.a,{attrs:{"hide-overlay":"",width:"400px"},model:{value:e.preview,callback:function(t){e.preview=t},expression:"preview"}},[t("dia-image",{attrs:{"i-url":e.previewSrc},on:{closeDia:function(t){e.preview=!1}}})],1),e._v("\n  SELECTED OUTLET "+e._s(e.formData.outlet)+"\n  "),t(c.a,[t(l.d,[t("span",{staticClass:"headline"},[e._v(e._s(e.title))])]),e._v(" "),t(l.c,[t(v.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(C.a,[t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"outlet_name","item-value":"outlet_id",items:e.outlet,label:"ຮ້ານ*"},model:{value:e.formData.outlet,callback:function(t){e.$set(e.formData,"outlet",t)},expression:"formData.outlet"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(o.a,{attrs:{"item-text":"categ_name","item-value":"categ_id",items:e.category,label:"ປະເພດສິນຄ້າ*"},model:{value:e.formData.pro_category,callback:function(t){e.$set(e.formData,"pro_category",t)},expression:"formData.pro_category"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(S.a,{attrs:{value:e.formData.pro_id||"1XXX",counter:10,label:"ໄອດີສິນຄ້າ",disabled:"",required:""}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(S.a,{attrs:{counter:50,rules:e.rules.nameRule,label:"ຊື້ສິນຄ້າ*",required:""},model:{value:e.formData.pro_name,callback:function(t){e.$set(e.formData,"pro_name",t)},expression:"formData.pro_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(S.a,{attrs:{counter:10,rules:e.rules.priceRule,label:"ລາຄາ*",type:"number",required:""},model:{value:e.formData.pro_price,callback:function(t){e.$set(e.formData,"pro_price",t)},expression:"formData.pro_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(S.a,{attrs:{counter:10,type:"number",rules:e.rules.priceRule,label:"ຕົ້ນທຶນ*",required:""},model:{value:e.formData.pro_cost_price,callback:function(t){e.$set(e.formData,"pro_cost_price",t)},expression:"formData.pro_cost_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(S.a,{attrs:{counter:10,type:"number",rules:e.rules.priceRule,label:"ລາຄາສົ່ງ %",required:""},model:{value:e.formData.pro_retail_price,callback:function(t){e.$set(e.formData,"pro_retail_price",t)},expression:"formData.pro_retail_price"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(_.a,{ref:"filesfield",attrs:{rules:e.rules.imageRule,multiple:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"ຮູບພາບຫລາຍພາບ"},on:{change:e.onFilesChange}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(S.a,{attrs:{counter:10,type:"number",rules:e.rules.minRule,label:"ສຕັອກຂັ້ນຕ່ຳ*",required:""},model:{value:e.formData.minStock,callback:function(t){e.$set(e.formData,"minStock",t)},expression:"formData.minStock"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(R.a,{attrs:{outlined:"",name:"input-7-4",counter:"100",label:"ຄຳອະທິບາຍ",value:"abc"},model:{value:e.formData.pro_desc,callback:function(t){e.$set(e.formData,"pro_desc",t)},expression:"formData.pro_desc"}})],1)],1),e._v(" "),e._e(),e._v(" "),t("div",[t(k.a,{attrs:{"three-line":""}},[e._l(e.imagesPreviewURL,(function(r,o){return[t(y.a,{key:o},[t(x.a,{on:{click:function(t){return t.preventDefault(),e.previewImg(r.IMG_URL)}}},[t(h.a,{attrs:{src:r.IMG_URL}})],1),e._v(" "),t(w.a,[t(w.c,{domProps:{innerHTML:e._s(r.NAME)}}),e._v(" "),t(w.b,{domProps:{innerHTML:e._s(r.isvalid)}})],1),e._v(" "),t(D.a),e._v(" "),t(n.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFile(o)}}},[t("i",{staticClass:"fas fa-trash-alt"})])],1),e._v(" "),t(m.a,{key:o+r.NAME})]}))],2)],1)],1)],1),e._v(" "),t(l.a,[t(D.a),e._v(" "),t(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:function(t){return e.$emit("close-dialog")}}},[e._v("\n        Close\n      ")]),e._v(" "),t(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:e.uploadFiles}},[e._v("\n        Save\n      ")])],1)],1),e._v(" "),t("nuxt-child")],1)}),[],!1,null,"07ac3192",null);t.default=component.exports;installComponents(component,{DialogClassicMessage:r(617).default,LoadingIndicator:r(295).default,DiaImage:r(628).default})},661:function(e,t,r){"use strict";r(646)},662:function(e,t,r){var o=r(14)((function(i){return i[1]}));o.push([e.i,'.grey[data-v-07ac3192],.text-h5[data-v-07ac3192]{font-family:"Noto Sans Lao"}',""]),o.locals={},e.exports=o},669:function(e,t,r){"use strict";r.r(t);var o=r(172),n=r(280),c=r(47),l=r(606),d=r(608),f=r(619),m=r(610),_=r(94),v=r(24),h=(r(105),r(20),r(30),r(63)),k={props:{productId:{type:Number,default:""},productName:{type:String,default:""},isEdit:{type:Boolean,default:!1},cost:{type:Number,default:0}},data:function(){return{stockQty:1,stockCost:this.cost,isSubmitting:!1}},computed:{numberRule:function(){return[function(e){return!!e||"ກະລຸນາ ໃສ່ຈຳນວນ "},function(e){return/^[0-9]+$/.test(e)||"ໃສ່ໄດ້ສະເພາະ ຕົວເລກ"}]},user:function(){return this.$auth.user||""}},methods:{stockSubmit:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.myform.validate()||e.isSubmitting){t.next=7;break}return e.isSubmitting=!0,r={inputter:e.user.id,product_id:e.productId,stocCardkQty:e.stockQty,totalCost:e.stockCost},console.log("Pre fly ",r),t.next=6,e.$axios.post("/api/card/bulkCreate",r).then((function(t){console.log(t.data),Object(h.i)(e.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),e.$emit("reload"),e.$emit("close-dialog")})).catch((function(t){console.log(t),Object(h.h)(e.$swal,"Error",t.response.data)}));case 6:e.isSubmitting=!1;case 7:case"end":return t.stop()}}),t)})))()}}},y=r(44),component=Object(y.a)(k,(function(){var e=this,t=e._self._c;return t("div",[t(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isSubmitting,callback:function(t){e.isSubmitting=t},expression:"isSubmitting"}},[t("loading-indicator")],1),e._v(" "),t(n.a,[t(c.d,[t("span",{staticClass:"text-h5"},[e._v("ເພີ່ມສະຕັອກສິນຄ້າ "+e._s(e.productId)+" "+e._s(e.productName))])]),e._v(" "),t(c.c,[t(l.a,[t(f.a,{ref:"myform",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t(_.a,{attrs:{label:"ຈຳນວນ",rules:e.numberRule,"hide-details":"auto"},model:{value:e.stockQty,callback:function(t){e.stockQty=t},expression:"stockQty"}}),e._v(" "),t(_.a,{attrs:{label:"ຕົ້ນທຶນທັງຫໝົດ",rules:e.numberRule,"hide-details":"auto"},model:{value:e.stockCost,callback:function(t){e.stockCost=t},expression:"stockCost"}})],1)],1)],1),e._v(" "),t(c.a,[t(m.a),e._v(" "),t(o.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("close-dialog")}}},[e._v("\n                ປິດ\n            ")]),e._v(" "),t(o.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.stockSubmit}},[e._v("\n                ບັນທຶກ\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingIndicator:r(295).default})},808:function(e,t,r){"use strict";r.r(t);var o=r(172),n=r(280),c=r(47),l=r(612),d=r(615),f=r(608),m=r(281),_=r(611),v=r(610),h=r(94),k=r(78),y=r(296),x=(r(30),r(181),r(48),r(33),r(60),r(39),r(8),r(74),r(84),r(51),r(24)),w=r(1),C=(r(10),r(79),r(9),r(4),r(7),r(23),r(32),r(105),r(668)),D=r(63),S=r(654),R=r(297);function F(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,n=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw n}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var P={components:{ProductForm:C.default,ProductFormCreate:S.default},middleware:"auths",data:function(){var e;return e={productFormCreate:!1,productFormKey:1,isstock:!1,selectedProductId:"",selectedProductCost:0,selectedProductName:"",isloading:!1,dialogMessage:!1,message:"",selectedStockProductId:"",loaddata:[],carddata:[],cardType:[],content:null,selectedCardType:"",pageLine:30,search:"",editProductForm:!1},Object(w.a)(e,"selectedProductId",null),Object(w.a)(e,"stockFormKey",1),Object(w.a)(e,"headers",[{text:"ໄອດີ",align:"center",value:"pro_id"},{text:"ຊື່ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ຮ້ານ",align:"center",value:"pro_outlet_name"},{text:"ຫມວດສິນຄ້າ",align:"center",value:"pro_category_desc"},{text:"ລາຄາ",align:"center",value:"pro_price"},{text:"Stock",align:"center",value:"pro_card_count"},{text:"ສະຕັອກຂັ້ນຕ່ຳ",align:"center",value:"minStock"},{text:"cost",align:"center",value:"pro_cost_price"},{text:"ຟັງຊັ່ນ",align:"center",value:"function",sortable:!1}]),e},watch:{message:function(e){this.dialogMessage=null!=e}},mounted:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:return t.next=4,e.loadCardCategory();case 4:case"end":return t.stop()}}),t)})))()},methods:{formatNumber:function(e){return Object(D.d)(e)},triggerCardForm:function(e){this.stockFormKey+=1,this.selectedProductId=e.pro_id,this.selectedProductCost=e.pro_cost_price,this.selectedProductName=e.pro_name,this.isstock=!0},fetchData:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("product_f").then((function(t){e.loaddata=[];var r,o=F(t.data);try{for(o.s();!(r=o.n()).done;){var n=r.value;n.minStock>n.card_count&&e.loaddata.push({pro_id:n.pro_id,pro_name:n.pro_name,pro_price:n.pro_price,pro_desc:n.pro_desc,pro_status:n.pro_status,pro_category:n.pro_category,pro_category_desc:n.pro_category+" - "+n.categ_name,pro_card_count:n.card_count,pro_cost_price:n.cost_price,pro_outlet:n.outlet,pro_outlet_name:n.outlet_name,minStock:n.minStock,function:n.pro_id})}}catch(e){o.e(e)}finally{o.f()}})).catch((function(t){e.message=t,console.log("Error: "+t)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.productFormKey+=1,this.selectedProductId=e.pro_id,this.editProductForm=!0},editStock:function(e){console.log("ID "+e.pro_id),console.log("NAME "+e.pro_name),console.log("OBJ "+Object.keys(e)),this.$router.push("/admin/stock/".concat(e.pro_id))},attachFile:function(e){var t=this;this.carddata.length=0;var r=e,o=new FileReader;r&&(console.log("FILE LEN: "+r),o.onload=function(e){t.content=e.target.result,console.log("Data content => : "+t.content);var r=t.content.replace(/\r\n/g,"\n").split("\n").filter((function(e){return""!==e&&e.length>=10})),i=0;r.forEach((function(element){i++,console.log("Data loop ".concat(i," ").concat(element)),t.carddata.push(element.replace("\t","|").replace("\t","|").split("'").pop()),console.log(element.split("'").pop())})),console.log("CARD DATA: "+t.carddata)},o.onerror=function(e){return console.log(e)},o.readAsText(r))},loadCardCategory:function(){var e=this;this.isloading=!0,this.$axios.get("stockcate_f").then((function(t){e.cardType=t.data.map((function(e){return{card_type_code:e.card_type_code,card_type_name:e.card_type_name}})),e.selectedCardType=e.cardType[0].card_type_code,console.log("CARD LEN: "+e.cardType.length),console.log("CARD LEN: "+e.cardType[0].card_type_code),e.isloading=!1})).catch((function(t){console.log("Error: "+t),e.isloading=!1}))},rebuildStock:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isloading){t.next=5;break}return e.isloading=!0,t.next=4,e.$axios.post("/api/card/rebuildStock").then((function(t){Object(R.d)(e.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),e.fetchData()})).catch((function(t){Object(R.c)(e.$swal,"Error",t.response.data)}));case 4:e.isloading=!1;case 5:case"end":return t.stop()}}),t)})))()}}},O=r(44),component=Object(O.a)(P,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t("h1",[e._v("ລາຍງານສິນຄ້າໃກ້ຫມົດ")]),e._v(" "),t(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(f.a,{attrs:{"max-width":"300px"},model:{value:e.dialogMessage,callback:function(t){e.dialogMessage=t},expression:"dialogMessage"}},[t("dialog-classic-message",{attrs:{message:e.message},on:{closedialog:function(t){e.message=null}}})],1),e._v(" "),t(f.a,{attrs:{"max-width":"600px"},model:{value:e.isstock,callback:function(t){e.isstock=t},expression:"isstock"}},[t("card-form",{key:e.stockFormKey,attrs:{"product-id":e.selectedProductId,cost:e.selectedProductCost,"product-name":e.selectedProductName},on:{"close-dialog":function(t){e.isstock=!1},reload:e.rebuildStock}})],1),e._v(" "),t(f.a,{attrs:{"max-width":"1200px"},model:{value:e.editProductForm,callback:function(t){e.editProductForm=t},expression:"editProductForm"}},[t("product-form",{key:e.productFormKey,attrs:{"header-id":e.selectedProductId,isEdit:e.editProductForm},on:{"close-dialog":function(t){e.editProductForm=!1},refresh:e.fetchData}})],1),e._v(" "),t(f.a,{attrs:{"max-width":"1200px"},model:{value:e.productFormCreate,callback:function(t){e.productFormCreate=t},expression:"productFormCreate"}},[t("product-form-create",{on:{"close-dialog":function(t){e.productFormCreate=!1},refresh:e.fetchData}})],1),e._v(" "),t(n.a,[t(c.d,[t(_.a,[t(l.a,{attrs:{cols:"6",sm:"6",md:"6"}},[t(h.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),t(l.a,{attrs:{cols:"6",sm:"6",md:"6"}},[t(o.a,{staticClass:"mr-0",on:{click:function(t){return e.rebuildStock()}}},[t("i",{staticClass:"fas fa-sync"}),e._v("\n            Rebuild stock\n          ")])],1)],1)],1),e._v(" "),e.loaddata?t(d.a,{attrs:{headers:e.headers,search:e.search,items:e.loaddata,"items-per-page":e.pageLine},scopedSlots:e._u([{key:"top",fn:function(){return[t(k.a,{attrs:{flat:""}},[t(y.a,[e._v("ສິນຄ້າທັງຫມົດ: "+e._s(e.loaddata.length))]),e._v(" "),t(m.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(v.a),e._v(" "),t(o.a,{staticClass:"mr-0",on:{click:function(t){e.productFormCreate=!0}}},[e._v("\n            ສ້າງສິນຄ້າໃຫມ່\n          ")])],1)]},proxy:!0},{key:"item.function",fn:function(r){var n=r.item;return[t(o.a,{on:{click:function(t){return e.triggerCardForm(n)}}},[t("i",{staticClass:"fas fa-cart-plus"}),e._v("\n          ເພີ່ມສະຕັອກ\n        ")]),e._v(" "),t(o.a,{on:{click:function(t){return e.editStock(n)}}},[t("i",{staticClass:"fas fa-dolly"}),e._v("\n          ເບິ່ງສະຕັອກ\n        ")])]}},{key:"item.pro_cost_price",fn:function(t){var r=t.item;return[e._v("\n        "+e._s(e.formatNumber(r.pro_cost_price))+"\n\n      ")]}},{key:"item.pro_price",fn:function(t){var r=t.item;return[e._v("\n        "+e._s(e.formatNumber(r.pro_price))+"\n\n      ")]}},{key:"item.pro_card_count",fn:function(r){var o=r.item;return[t("p",{staticStyle:{color:"red","font-weight":"bold"}},[e._v(e._s(e.formatNumber(o.pro_card_count)))])]}}],null,!0)}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingIndicator:r(295).default,DialogClassicMessage:r(617).default,CardForm:r(669).default,ProductForm:r(668).default,ProductFormCreate:r(654).default})}}]);