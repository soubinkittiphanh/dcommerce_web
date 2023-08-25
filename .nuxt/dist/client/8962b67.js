(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{649:function(t,e,n){"use strict";var r=n(2),o=(n(45),n(61),n(233),n(9),n(5),n(8),n(62),n(87),n(10),n(7),n(12),n(13),n(6)),c=n(95),l=n(134);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},652:function(t,e,n){var content=n(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("7b5d4dc6",content,!0,{sourceMap:!1})},653:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),r.locals={},t.exports=r},670:function(t,e,n){"use strict";n(10),n(7),n(9),n(12),n(8),n(13);var r=n(92),o=n(2),c=(n(5),n(65),n(652),n(395),n(43)),l=n(42),d=n(165),h=["title"];function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return m(m({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",m(m({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},718:function(t,e,n){"use strict";n.r(e);var r=n(183),o=n(288),c=n(28),l=n(670),d=n(619),h=n(649),f=n(58),m=n(638),v=n(102),O=(n(38),n(22),n(33),n(308)),w={props:{isCreate:{type:Boolean,require:!0,default:!0},riderId:{type:Number,require:!1,default:null}},data:function(){return{form:{name:"",tel:"",rating:"Gold",isActive:!0},isloading:!1,ratings:["Gold","Silver","Platinum","Diamond","Master"],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=20||"Name must be less than 20 characters"}],telRules:[function(t){return!!t||"Telephone is required"},function(t){return/^[0-9]{10}$/.test(t)||"Telephone must be a valid 10-digit phone number"}]}},mounted:function(){this.loadRider()},methods:{handleSubmit:function(){var t=this;if(this.$refs.form.validate()&&!this.isloading){console.log("Loading....."),this.isloading=!0;var e=this.isCreate?"api/rider/create":"api/rider/update/".concat(this.riderId);console.log("API => ",e),this.isCreate?this.$axios.post(e,this.form).then((function(e){return t.refreshData(),Object(O.c)(t.$swal,"Succeed","Your transaction completed")})).catch((function(e){return console.log("Error: ",e),Object(O.b)(t.$swal,"Error","ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ")})):this.$axios.put(e,this.form).then((function(e){return t.refreshData(),Object(O.c)(t.$swal,"Succeed","Your transaction completed")})).catch((function(e){return console.log("Error: ",e),Object(O.b)(t.$swal,"Error","ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ")})),this.isloading=!1}},loadRider:function(){var t=this;this.riderId&&!this.isCreate&&this.$axios.get("api/rider/find/".concat(this.riderId)).then((function(e){t.form.name=e.data.name,t.form.tel=e.data.tel,t.form.isActive=e.data.isActive})).catch((function(t){console.log("Cannot fetch data "+t)}))},refreshData:function(){this.$emit("reload-data")}},computed:{}},y=n(44),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(d.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(o.a,{staticClass:"pa-4"},[t._v("\n        "+t._s(t.isCreate?"true":"false")+"\n        "),e(c.d,[e("span",{staticClass:"text-h5"},[t._v("ລາຍເດີ "+t._s(t.riderId))])]),t._v(" "),e(c.c,[e(h.a,{ref:"form"},[e(v.a,{attrs:{label:"* ຊື່",required:"",rules:t.nameRules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),e(v.a,{attrs:{label:"* ເບີໂທ",required:"",rules:t.telRules},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}}),t._v(" "),e(f.a,{attrs:{items:t.ratings,label:"Rating",required:""},model:{value:t.form.rating,callback:function(e){t.$set(t.form,"rating",e)},expression:"form.rating"}}),t._v(" "),e(l.a,{attrs:{label:"Is Active"},model:{value:t.form.isActive,callback:function(e){t.$set(t.form,"isActive",e)},expression:"form.isActive"}})],1),t._v(" "),e("small",[t._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])],1),t._v(" "),e(c.a,[e(m.a),t._v(" "),e(r.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                Close\n            ")]),t._v(" "),e(r.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.handleSubmit}},[t._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(306).default})}}]);