(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{645:function(e,t,n){"use strict";var o=n(182),l=n(54),r=n(5),d=n(11);t.a=Object(r.a)(o.a,l.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(d.c)("v-hover should only contain a single element",this),element)):(Object(d.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},682:function(e,t,n){"use strict";n.r(t);var o=n(280),l=n(47),r=n(645),d=n(146),c={name:"menu-card",props:{title:{type:String,default:""},path:{type:String,default:""},icon:{type:String,default:""}},methods:{takeMeTo:function(){this.$router.push(this.path)}}},h=n(44),component=Object(h.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t(r.a,{attrs:{"open-delay":"100"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.hover;return[t(o.a,{attrs:{elevation:r?16:0,outlined:""},on:{click:e.takeMeTo}},[t(l.c,{staticClass:"text-center"},[t("div",[t(d.a,[e._v(" "+e._s(e.icon)+" ")])],1),e._v(" "),t("div",{staticClass:"font-weight-meduim primary--text"},[e._v("\n                    "+e._s(e.title)+"\n                ")])])],1)]}}])})],1)}),[],!1,null,null,null);t.default=component.exports}}]);