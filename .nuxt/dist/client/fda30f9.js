(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{578:function(t,e,n){"use strict";n(10),n(11),n(15),n(16);var r=n(2),c=(n(4),n(40),n(57),n(26),n(9),n(29),n(76),n(344),n(44),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(58),n(8),n(343),n(1)),o=n(39),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],y=["start","end","center"];function v(t,e){return O.reduce((function(n,r){return n[t+Object(l.G)(r)]=e(),n}),{})}var j=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},S=v("align",(function(){return{type:String,default:null,validator:j}})),w=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},h=v("justify",(function(){return{type:String,default:null,validator:w}})),m=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},P=v("alignContent",(function(){return{type:String,default:null,validator:m}})),C={align:Object.keys(S),justify:Object.keys(h),alignContent:Object.keys(P)},k={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=k[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},S),{},{justify:{type:String,default:null,validator:w}},h),{},{alignContent:{type:String,default:null,validator:m}},P),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var d=x.get(l);if(!d){var O,y;for(y in d=[],C)C[y].forEach((function(t){var e=n[t],r=_(y,t,e);r&&d.push(r)}));d.push((O={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(O,"align-".concat(n.align),n.align),Object(r.a)(O,"justify-".concat(n.justify),n.justify),Object(r.a)(O,"align-content-".concat(n.alignContent),n.alignContent),O)),x.set(l,d)}return t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},579:function(t,e,n){"use strict";n(10),n(11),n(15),n(16);var r=n(2),c=(n(4),n(21),n(9),n(29),n(76),n(344),n(44),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(58),n(40),n(8),n(79),n(343),n(1)),o=n(39),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],y=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=O.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),j=O.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),S={col:Object.keys(y),offset:Object.keys(v),order:Object.keys(j)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var h=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=h.get(l);if(!d){var O,y;for(y in d=[],S)S[y].forEach((function(t){var e=n[t],r=w(y,t,e);r&&d.push(r)}));var v=d.some((function(t){return t.startsWith("col-")}));d.push((O={col:!v||!n.cols},Object(r.a)(O,"col-".concat(n.cols),n.cols),Object(r.a)(O,"offset-".concat(n.offset),n.offset),Object(r.a)(O,"order-".concat(n.order),n.order),Object(r.a)(O,"align-self-".concat(n.alignSelf),n.alignSelf),O)),h.set(l,d)}return t(n.tag,Object(o.a)(data,{class:d}),c)}})},727:function(t,e,n){"use strict";n.r(e);var r=n(552),c=n(545),o=n(579),l=n(555),f=n(245),d=n(134),O=n(554),y=n(578),v={layout:"home",data:function(){return{items:["POS","SALES","INVENTORY","SETTINGS"]}}},j=n(65),component=Object(j.a)(v,(function(){var t=this,e=t._self._c;return e(r.a,[e(O.a,[e(l.a,{staticClass:"fill-height",attrs:{fluid:""}},[e(y.a,{attrs:{justify:"center"}},[e(o.a,{staticClass:"text-center",attrs:{cols:"5"}},[e(c.a,{attrs:{rounded:"",fab:"",color:"primary"}},[e(d.a,[t._v("mdi-cash-register")])],1),t._v(" "),e("div",{staticClass:"text-center"},[t._v("ຂາຍຫນ້າຮ້ານ")])],1),t._v(" "),e(o.a,{attrs:{cols:"1"}},[e(f.a,{attrs:{vertical:""}})],1),t._v(" "),e(o.a,{staticClass:"text-center",attrs:{cols:"5"}},[e(c.a,{attrs:{rounded:"",fab:"",color:"primary"}},[e(d.a,[t._v("mdi-account-tie")])],1),t._v(" "),e("div",{staticClass:"text-center"},[t._v("ບັນຊີ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);