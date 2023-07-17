(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{632:function(e,t,n){"use strict";n(30),n(79);t.a={bind:function(e,t,n){e.addEventListener("input",(function(e){var t=e.target.value.replace(/[^0-9]/g,"");"NaN"===(t=parseInt(t,10).toLocaleString("en-US"))&&(t="0"),n.componentInstance.$emit("input",t)}))}}},832:function(e,t,n){"use strict";n.r(t);var o=n(613),r=n(172),c=n(280),l=n(47),m=n(612),d=n(606),v=n(608),f=n(611),y=n(610),D=n(94),k=n(24),h=(n(105),n(20),n(4),n(7),n(8),n(74),n(632)),x=n(297),_={paymentHeadId:{type:Number,default:""},isEdit:{type:Boolean,default:!1},directives:{commaThousand:h.a},data:function(){return{account:[],drAccount:"",crAccount:"",amount:"",isloading:!1,bookingDate:"",paymentDescription:"",postingReference:"",paymentDr:{accountNumber:5006,bookingDate:"",postingReference:"",debit:0,credit:0,description:"Investment",source:"GL"},paymentCr:{accountNumber:1001,bookingDate:"",postingReference:"",debit:0,credit:0,description:"Investment",source:"GL"}}},mounted:function(){this.loadAccount();var e=(new Date).toISOString().substr(0,10);this.bookingDate=e},computed:{today:function(){var e=(new Date).toLocaleDateString();return console.log(e),e}},methods:{triggerDialog:function(e){this.$emit("close",e)},loadAccount:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("/api/financial/chartAccount");case 3:t.sent.data.forEach((function(element){console.log("Account number => ",element.accountNumber),e.account.push({id:element.id,desc:element.accountName+" - "+element.accountNumber})})),e.isloading=!1;case 6:case"end":return t.stop()}}),t)})))()},createPayment:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isloading){t.next=2;break}return t.abrupt("return");case 2:return e.isloading=!0,n=null,t.prev=4,e.paymentCr.bookingDate=e.bookingDate,e.paymentCr.description=e.paymentDescription,e.paymentCr.postingReference=e.postingReference,e.paymentCr.credit=e.amount,e.paymentDr.bookingDate=e.bookingDate,e.paymentDr.description=e.paymentDescription,e.paymentDr.postingReference=e.postingReference,e.paymentDr.debit=e.amount,t.next=15,e.$axios.post("/api/financial/create",e.paymentDr);case 15:return(o=t.sent).data.accountNumber?(console.log("DR Transaction completed"),console.log(o.data)):n.push({type:"",msg:"Can not make dr"}),t.next=19,e.$axios.post("/api/financial/create",e.paymentCr);case 19:(r=t.sent).data.accountNumber?(console.log("CR Transaction completed"),console.log(r.data)):n.push({type:"",msg:"Can not make dr"}),n?Object(x.c)(e.$swal,"Error",n[0].msg):Object(x.d)(e.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.next=29;break;case 24:t.prev=24,t.t0=t.catch(4),n.push({type:"",msg:"Can not make dr"}),console.log("Something wrong ===>"),Object(x.c)(e.$swal,"Error",t.t0.response.data.erors[0].msg);case 29:e.isloading=!1;case 30:case"end":return t.stop()}}),t,null,[[4,24]])})))()}}},C=n(44),component=Object(C.a)(_,(function(){var e=this,t=e._self._c;return t(f.a,{attrs:{justify:"center"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.props;return[t(r.a,e._b({attrs:{color:"primary"}},"v-btn",o,!1),[e._v("\n            Open Dialog\n        ")])]}}])},[e._v(" "),t(v.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(c.a,{staticClass:"pa-4"},[t(l.d,[t("span",{staticClass:"text-h5"},[e._v("ຄ່າໃຊ້ຈ່າຍ "+e._s(e.today))])]),e._v(" "),t(l.c,[t(d.a,[t(f.a,[t(m.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(D.a,{attrs:{label:"ເລກເອກະສານອ້າງອີງ*",required:""},model:{value:e.postingReference,callback:function(t){e.postingReference=t},expression:"postingReference"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(D.a,{attrs:{type:"date",label:"ວັນທີ*",hint:"example of helper text only on focus"},model:{value:e.bookingDate,callback:function(t){e.bookingDate=t},expression:"bookingDate"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(D.a,{attrs:{label:"Legal last name*",hint:"example of persistent helper text","persistent-hint":"",required:""}})],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(D.a,{attrs:{label:"ເນື້ອໃນການຊຳລະ*",required:""},model:{value:e.paymentDescription,callback:function(t){e.paymentDescription=t},expression:"paymentDescription"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.amount,expression:"amount",modifiers:{number:!0}},{name:"comma-thousand",rawName:"v-comma-thousand"}],attrs:{type:"text"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),t(D.a,{directives:[{name:"comma-thousand",rawName:"v-comma-thousand"}],attrs:{label:"ຈຳນວນເງິນ*",required:""},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12",sm:"6"}},[t(o.a,{attrs:{"item-text":"desc","item-value":"id",items:e.account,label:"ບັນຊີແຍກປະເພດ DR ACCOUNT*"},model:{value:e.paymentDr.accountNumber,callback:function(t){e.$set(e.paymentDr,"accountNumber",t)},expression:"paymentDr.accountNumber"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12",sm:"6"}},[t(o.a,{attrs:{"item-text":"desc","item-value":"id",items:e.account,label:"ບັນຊີແຍກປະເພດ CR ACCOUNT*"},model:{value:e.paymentCr.accountNumber,callback:function(t){e.$set(e.paymentCr,"accountNumber",t)},expression:"paymentCr.accountNumber"}})],1)],1)],1),e._v(" "),t("small",[e._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])],1),e._v(" "),t(l.a,[t(y.a),e._v(" "),t(r.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:e.triggerDialog}},[e._v("\n                Close\n            ")]),e._v(" "),t(r.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:e.createPayment}},[e._v("\n                Save\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingIndicator:n(295).default})}}]);