(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{649:function(t,e,r){"use strict";var n=r(2),o=(r(45),r(61),r(233),r(9),r(5),r(8),r(62),r(87),r(10),r(7),r(12),r(13),r(6)),c=r(95),l=r(134);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},702:function(t,e,r){"use strict";r.r(e);var n=r(643),o=r(183),c=r(288),l=r(28),d=r(636),f=r(619),h=r(649),m=r(638),v=r(102),y=r(29),w=(r(112),r(22),r(33),r(40),r(67)),k={props:{id:{type:Number,default:0},productId:{type:Number,default:""},productName:{type:String,default:""},isEdit:{type:Boolean,default:!1},cost:{type:Number,default:0}},data:function(){return{stockQty:1,stockCost:this.cost,isSubmitting:!1,locationList:[],srcLocationId:1}},computed:{numberRule:function(){return[function(t){return!!t||"ກະລຸນາ ໃສ່ຈຳນວນ "},function(t){return/^[0-9]+$/.test(t)||"ໃສ່ໄດ້ສະເພາະ ຕົວເລກ"}]},user:function(){return this.$auth.user||""}},created:function(){this.loadLocation()},methods:{loadLocation:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("api/location/find").then((function(t){e.locationList=t.data.map((function(t){return t}))})).catch((function(t){Object(w.j)(e.$swal,"Error","Operation fail "+t.Error)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},stockSubmit:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.myform.validate()||t.isSubmitting){e.next=7;break}return t.isSubmitting=!0,r={inputter:t.user.id,product_id:t.productId,stockCardQty:t.stockQty,totalCost:t.stockCost,productId:t.id,srcLocationId:t.srcLocationId},console.log("Pre fly ",r),e.next=6,t.$axios.post("/api/card/bulkCreate",r).then((function(e){console.log(e.data),Object(w.k)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.$emit("reload"),t.$emit("close-dialog")})).catch((function(e){console.log(e),Object(w.j)(t.$swal,"Error",e.response.data)}));case 6:t.isSubmitting=!1;case 7:case"end":return e.stop()}}),e)})))()}}},O=r(44),component=Object(O.a)(k,(function(){var t=this,e=t._self._c;return e("div",[e(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isSubmitting,callback:function(e){t.isSubmitting=e},expression:"isSubmitting"}},[e("loading-indicator")],1),t._v(" "),e(c.a,[e(l.d,[e("span",{staticClass:"text-h5"},[t._v("ເພີ່ມສະຕັອກສິນຄ້າ "+t._s(t.productId)+" "+t._s(t.productName))])]),t._v(" "),e(l.c,[e(d.a,[e(h.a,{ref:"myform",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(n.a,{attrs:{"item-text":"name","item-value":"id",items:t.locationList,label:"Source location*"},model:{value:t.srcLocationId,callback:function(e){t.srcLocationId=e},expression:"srcLocationId"}}),t._v(" "),e(v.a,{attrs:{label:"ຈຳນວນ",rules:t.numberRule,"hide-details":"auto"},model:{value:t.stockQty,callback:function(e){t.stockQty=e},expression:"stockQty"}}),t._v(" "),e(v.a,{attrs:{label:"ຕົ້ນທຶນທັງຫໝົດ",rules:t.numberRule,"hide-details":"auto"},model:{value:t.stockCost,callback:function(e){t.stockCost=e},expression:"stockCost"}})],1)],1)],1),t._v(" "),e(l.a,[e(m.a),t._v(" "),e(o.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                ປິດ\n            ")]),t._v(" "),e(o.a,{attrs:{color:"blue darken-1",text:""},on:{click:t.stockSubmit}},[t._v("\n                ບັນທຶກ\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:r(306).default})}}]);