(window.webpackJsonp=window.webpackJsonp||[]).push([[59,14,18,19,24],{644:function(t,e,n){var content=n(657);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("03cbcf00",content,!0,{sourceMap:!1})},645:function(t,e,n){"use strict";var r=n(182),o=n(54),c=n(5),l=n(11);e.a=Object(c.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},656:function(t,e,n){"use strict";n(644)},657:function(t,e,n){var r=n(14)((function(i){return i[1]}));r.push([t.i,".my-text-bold[data-v-7da7ed0d]{color:#000;font-weight:bolder}",""]),r.locals={},t.exports=r},665:function(t,e,n){"use strict";n.r(e);var r=n(280),o=n(47),c=n(612),l=n(606),d=n(611),f={props:{title:{type:String,default:""},value:{type:String,default:0},color:{type:String,default:"#26c6da"}},data:function(){return{expand:!1}}},h=(n(656),n(44)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"ma-0 pa-0"},[e("div",[e(d.a,[e(c.a,{attrs:{cols:"6"}},[e(r.a,{staticClass:"mx-auto mr-0",attrs:{height:"60",width:"60",color:t.color}},[e(o.c,{staticClass:"text-center"},[t._t("icon")],2)],1)],1),t._v(" "),e(c.a,{attrs:{cols:"6"}},[e("p",{staticClass:"my-text-bold"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"my-text-bold"},[t._v(t._s(t.value))])])],1)],1)])}),[],!1,null,"7da7ed0d",null);e.default=component.exports},666:function(t,e,n){"use strict";n.r(e);var r=n(280),o=n(47),c=n(612),l=n(611),d={data:function(){return{}}},f=n(44),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,{staticClass:"mx-auto",attrs:{"min-height":"100",color:"transparent"}},[e(o.c,[e(l.a,[e(c.a,{attrs:{cols:"6"}},[t._t("slot1")],2),t._v(" "),e(c.a,{attrs:{cols:"6"}},[t._t("slot2")],2)],1),t._v(" "),e(l.a,[e(c.a,{attrs:{cols:"6"}},[t._t("slot3")],2),t._v(" "),e(c.a,{attrs:{cols:"6"}},[t._t("slot4")],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},667:function(t,e,n){"use strict";n.r(e);var r=n(280),o=n(47),c=n(615),l=(n(30),n(181),n(24));n(32),n(48),n(4),n(33),n(60),n(39),n(8),n(74),n(84),n(51),n(105);function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h={data:function(){return{campaignList:[],search:"",headers:[{text:"ຊື່ Campaign",align:"center",value:"title",sortable:!0},{text:"ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ວັນທີເລີ່ມ",align:"center",value:"start"},{text:"ວັນທີສິ້ນສຸດ",align:"center",value:"end"},{text:"ເຂົ້າເຖິງ",align:"center",value:"reach"},{text:"ຄອມເມັ້ນ",align:"center",value:"comments"},{text:"Result",align:"center",value:"results"},{text:"ປິດການຂາຍ",align:"center",value:"closed"},{text:"ຍອດທີ່ຈ່າຍໄປ",align:"center",value:"budgetSpend"}]}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadCampaignData();case 2:case"end":return e.stop()}}),e)})))()},methods:{loadCampaignData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("/api/campaign/find_summary").then((function(e){t.campaignList=e.data.rows.map((function(t){return t}));var n,r=d(t.campaignList);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.start=o.start.split("T")[0],o.end=o.end.split("T")[0]}}catch(t){r.e(t)}finally{r.f()}t.headers.length=0})).catch((function(t){console.log("Error ",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},m=n(44),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,[e(o.d,[t._v("\n            Campaign\n        ")]),t._v(" "),e(o.c,[t.campaignList?e(c.a,{attrs:{headers:t.headers,search:t.search,items:t.campaignList}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},682:function(t,e,n){"use strict";n.r(e);var r=n(280),o=n(47),c=n(645),l=n(146),d={name:"menu-card",props:{title:{type:String,default:""},path:{type:String,default:""},icon:{type:String,default:""}},methods:{takeMeTo:function(){this.$router.push(this.path)}}},f=n(44),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e(c.a,{attrs:{"open-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(n){var c=n.hover;return[e(r.a,{attrs:{elevation:c?16:0,outlined:""},on:{click:t.takeMeTo}},[e(o.c,{staticClass:"text-center"},[e("div",[e(l.a,[t._v(" "+t._s(t.icon)+" ")])],1),t._v(" "),e("div",{staticClass:"font-weight-meduim primary--text"},[t._v("\n                    "+t._s(t.title)+"\n                ")])])],1)]}}])})],1)}),[],!1,null,null,null);e.default=component.exports},790:function(t,e,n){"use strict";n.r(e);var r=n(280),o=n(47),c=n(612),l=n(608),d=n(611),f=(n(48),n(4),n(33),n(60),n(39),n(30),n(8),n(74),n(84),n(51),n(24)),h=(n(105),n(308),n(32),n(297)),m=(n(63),n(665)),v=n(666),y=n(667),menu=n(682);function _(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var S={components:{CardOnTop:m.default,CampaignCard:y.default,CardGrouping:v.default,Menu:menu.default},middleware:"auths",data:function(){return{saleValue:0,menuKey:1,menus:[{title:"POS",icon:"mdi-network-pos",path:"/pos"}],items:[{name:"Item #1",id:1},{name:"Item #2",id:2},{name:"Item #3",id:3}],minProductList:[],isloading:!1,dailyState:!1,series:[0,0],options:{chart:{type:"donut"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],labels:["CASH","COD"],title:{text:"ອໍເດີ ປະເພດ"},annotations:{points:[]}},peeair:{series:[],options:{colors:["#FF4560","#775DD0"]}},pieChartOption:{title:{text:"ສິນຄ້າຂາຍດີ",align:"center",style:{fontSize:"16px"}},labels:[],barSeries:[],theme:{monochrome:{enabled:!0,color:"#01532B"}},chart:{type:"pie",width:"100%",height:"400px"}},barSeriesForDailyStat:[{data:[]}],barOptionsForDailyStat:{colors:[],chart:{type:"line"},plotOptions:{bar:{borderRadius:4,horizontal:!0},dataLabels:{style:{fontSize:"12px"},formatter:function(t){return t.toFixed(2)}}},dataLabels:{enabled:!0},xaxis:{categories:[]},yaxis:{title:{text:"Sales (in thousands)"}},title:{text:"ສະຖິຕິການຂາຍໃນເດືອນ"}}}},created:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadDailySaleStatistic();case 2:return t.init(),e.next=5,t.minStockProduct();case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadTopSale();case 2:return e.next=4,t.paymentGroup();case 4:case"end":return e.stop()}}),e)})))()},methods:{numberFormatter:function(t){return Object(h.b)(t)},minStockProduct:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("product_f").then((function(e){t.minProductList=[];var n,r=_(e.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.minStock>o.card_count&&t.minProductList.push({pro_id:o.pro_id,pro_name:o.pro_name,pro_price:o.pro_price,pro_desc:o.pro_desc,pro_status:o.pro_status,pro_category:o.pro_category,pro_category_desc:o.pro_category+" - "+o.categ_name,pro_card_count:o.card_count,pro_cost_price:o.cost_price,pro_outlet:o.outlet,pro_outlet_name:o.outlet_name,minStock:o.minStock,function:o.pro_id})}}catch(t){r.e(t)}finally{r.f()}})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},getRandomColor:function(){for(var t="#",i=0;i<6;i++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},loadTopSale:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/topsale/?top=5").then((function(e){console.log("Data ",e.data[0]),e.data.map((function(e){t.pieChartOption.barSeries.push(+e.sale_count),t.pieChartOption.labels.push(e.categ_name+" "+Object(h.b)(e.total_sale))}))})).catch((function(t){console.log("error",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},loadDailySaleStatistic:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/dailySaleReport").then((function(e){console.log("Data ",e.data[0]);var n,r=_(e.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;t.barOptionsForDailyStat.colors.push("#01532B"),t.barSeriesForDailyStat[0].data.push(o.total_sale),t.barOptionsForDailyStat.xaxis.categories.push(o.txn_date_short)}}catch(t){r.e(t)}finally{r.f()}})).catch((function(t){console.log("error",t)}));case 3:t.dailyState=!0,t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},paymentGroup:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/cod_n_cash_report").then((function(e){t.series=e.data.series,t.options.labels=e.data.labels})).catch((function(t){console.log("error",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},init:function(){console.log("Init function");var t=[66,33];this.peeair.options={title:{text:"GreenWood",align:"center",style:{fontSize:"16px"}},labels:[" COD ".concat(t[0]," ບິນ ")," ORDER ".concat(t[1]," ບິນ")],chart:{type:"pie",width:"100%",height:"400px"}},this.peeair.series=t}}},w=n(44),component=Object(w.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e(l.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e("div",{staticClass:"mb-1"},[e(r.a,{staticClass:"pa-4"},[e(o.d,[t._v("\n               Menu\n            ")]),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:12}},[e("div",{staticClass:"row"},t._l(t.menus,(function(t,n){return e("div",{key:n,staticClass:"col-12 col-md-3 col-sm-6 col-xs-6 text-center"},[e("Menu",{attrs:{title:t.title,icon:t.icon,path:t.path}})],1)})),0)])],1)],1)],1),t._v(" "),e("div",{staticClass:"mb-1"},[e(d.a,[e(c.a,{attrs:{cols:"4",md:"6",sm:"12",xl:"12"}},[e(r.a,[e("apexchart",{attrs:{options:t.pieChartOption,series:t.pieChartOption.barSeries}})],1)],1),t._v(" "),t.dailyState?e(c.a,{attrs:{cols:"8",md:"6",sm:"12",xl:"12"}},[e(r.a,[e("apexchart",{attrs:{options:t.barOptionsForDailyStat,series:t.barSeriesForDailyStat}})],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(295).default,Menu:n(682).default})}}]);