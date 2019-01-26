!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("interactjs"),require("vue")):"function"==typeof define&&define.amd?define("Segel",["interactjs","vue"],e):"object"==typeof exports?exports.Segel=e(require("interactjs"),require("vue")):t.Segel=e(t.interact,t.Vue)}(window,function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=10)}([function(e,n){e.exports=t},function(t,e,n){var r=n(6),i=n(20),o=n(3),s="Expected a function",a=Math.max,u=Math.min;t.exports=function(t,e,n){var c,l,d,f,p,g,m=0,v=!1,b=!1,h=!0;if("function"!=typeof t)throw new TypeError(s);function x(e){var n=c,r=l;return c=l=void 0,m=e,f=t.apply(r,n)}function y(t){var n=t-g;return void 0===g||n>=e||n<0||b&&t-m>=d}function _(){var t=i();if(y(t))return w(t);p=setTimeout(_,function(t){var n=e-(t-g);return b?u(n,d-(t-m)):n}(t))}function w(t){return p=void 0,h&&c?x(t):(c=l=void 0,f)}function j(){var t=i(),n=y(t);if(c=arguments,l=this,g=t,n){if(void 0===p)return function(t){return m=t,p=setTimeout(_,e),v?x(t):f}(g);if(b)return p=setTimeout(_,e),x(g)}return void 0===p&&(p=setTimeout(_,e)),f}return e=o(e)||0,r(n)&&(v=!!n.leading,d=(b="maxWait"in n)?a(o(n.maxWait)||0,e):d,h="trailing"in n?!!n.trailing:h),j.cancel=function(){void 0!==p&&clearTimeout(p),m=0,c=g=l=p=void 0},j.flush=function(){return void 0===p?f:w(i())},j}},function(t,e,n){var r=n(12),i=n(13),o=n(3);t.exports=function(t,e,n){return e=i(e),void 0===n?(n=e,e=0):n=i(n),t=o(t),r(t,e,n)}},function(t,e,n){var r=n(6),i=n(14),o=NaN,s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return o;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=u.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?o:+t}},function(t,e,n){"use strict";var r=n(2),i=n.n(r);function o(t,e,n,r,i,o,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}var s=o({data:function(){return{}},inject:["state"],computed:{isInView:function(){return i()(this.state.time.current,this.state.time.start,this.state.time.end)},left:function(){return(this.state.time.current-this.state.time.start)/this.state.time.duration()*100}}},function(){var t=this.$createElement,e=this._self._c||t;return this.isInView?e("div",{class:{"segel-indicator":!0},style:{left:this.left+"%"}}):this._e()},[],!1,null,null,null).exports,a=o({filters:{leadingZero:function(t){return("0"+t).slice(-2)}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"segel-ruler"},[n("ul",t._l(24,function(e){return n("li",[n("span",{class:[e===(new Date).getHours()+1?"current":""]},[t._v("\n                "+t._s(t._f("leadingZero")(e-1))+"\n            ")])])}),0)])},[],!1,null,null,null).exports,u=n(0),c=n.n(u),l=n(1),d=n.n(l);var f={};f.create=function(t,e,n){return r={x:t/n,y:e},[c.a.createSnapGrid(r)];var r},f.round=function(t,e,n){var r=e/n,i=t%r,o=t-i;return i>=r/2?o+r:o};var p=f,g=function(t,e){c()(t).draggable().snap.targets=p.create(e.context.$root.$el.clientWidth,36,e.context.state.config.steps)},m={bind:function(t,e,n){window.addEventListener("resize",d()(g.bind(null,t,n),150)),c()(t).draggable({enabled:void 0===e.value||e.value,snap:{targets:p.create(n.context.$root.$el.clientWidth,36,n.context.state.config.steps),offset:"startCoords"},restrict:{restriction:".segel-resources"},onstart:function(){t.classList.add("dragging")},onmove:function(e){var r=(n.context.dragX||0)+e.dx,i=(n.context.dragY||0)+e.dy;t.style.webkitTransform=t.style.transform="translate("+r+"px, "+i+"px)",n.context.dragX=parseFloat(r),n.context.dragY=parseFloat(i)},onend:function(){t.classList.remove("dragging"),t.webkitTransform=t.style.transform="",t.style.height="",n.context.dragX=0,n.context.dragY=0}})},unbind:function(t,e,n){window.removeEventListener("resize",d()(g.bind(null,t,n),150)),c()(t).unset()},update:function(t,e){e.value!==e.oldValue&&(c()(t).draggable().enabled=void 0===e.value||e.value)}},v=n(9),b=new(n.n(v).a),h=function(t,e){c()(t).resizable().snap.targets=p.create(e.context.$root.$el.clientWidth,35,e.context.state.config.steps)},x=o({props:{id:{type:[String,Number],required:!0},resource:{type:[String,Number],required:!0},user:{type:[String,Number]},status:{type:String,default:"confirmed"},start:{type:Number,required:!0},end:{type:Number,required:!0}},directives:{draggable:m,resizable:{bind:function(t,e,n){window.addEventListener("resize",d()(h.bind(null,t,n),150)),c()(t).resizable({enabled:void 0===e.value||e.value,snap:{targets:p.create(n.context.$root.$el.clientWidth,35,n.context.state.config.steps),offset:"startCoords"},edges:{top:!1,bottom:!1,left:".segel-resize-handle__left",right:".segel-resize-handle__right"},onstart:function(){t.classList.add("resizing")},onmove:function(e){var r=n.context.resizeX||0,i=n.context.resizeY||0;t.style.width=e.rect.width+"px",t.style.height=e.rect.height+"px",r+=e.deltaRect.left,i+=e.deltaRect.top,t.style.webkitTransform=t.style.transform="translate("+r+"px,"+i+"px)",n.context.resizeX=parseFloat(r),n.context.resizeY=parseFloat(i)},onend:function(){var e=Math.round((t.offsetLeft+n.context.resizeX)/n.context.$root.$el.clientWidth*n.context.state.time.duration()),r=Math.round(t.getBoundingClientRect().width/n.context.$root.$el.clientWidth*n.context.state.time.duration());b.$emit("bookings-update",{id:n.context.id,resource:n.context.resource,start:p.round(n.context.state.time.start+e,n.context.state.time.duration(),n.context.state.config.steps),end:p.round(n.context.state.time.start+e+r,n.context.state.time.duration(),n.context.state.config.steps)}),t.classList.remove("resizing"),t.webkitTransform=t.style.transform="",t.style.width=n.context.width+"%",t.style.height="",n.context.resizeX=0,n.context.resizeY=0}})},unbind:function(t,e,n){window.removeEventListener("resize",d()(h.bind(null,t,n),150)),c()(t).unset()},update:function(t,e){e.value!==e.oldValue&&(c()(t).resizable().enabled=void 0===e.value||e.value)}}},data:function(){return{}},inject:["state"],computed:{isEditable:function(){return!!this.state.config.editable&&("updating"!==this.status&&((!this.state.user.isAuthenticated()||this.user===this.state.user.id||!0===this.state.user.isAdmin())&&this.start>this.state.time.current))},isInView:function(){return i()(this.start,this.state.time.start,this.state.time.end)||i()(this.end,this.state.time.start,this.state.time.end)||this.start<this.state.time.start&&this.end>this.state.time.start||this.end<this.state.time.end&&this.end>this.state.time.end},duration:function(){return this.end-this.start},left:function(){return(this.start-this.state.time.start)/this.state.time.duration()*100},width:function(){return this.duration/this.state.time.duration()*100}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInView?n("li",{directives:[{name:"draggable",rawName:"v-draggable",value:t.isEditable,expression:"isEditable"},{name:"resizable",rawName:"v-resizable",value:t.isEditable,expression:"isEditable"}],class:{"segel-booking":!0,editable:t.isEditable},style:{left:t.left+"%",width:t.width+"%"}},[t.isEditable?n("span",{staticClass:"segel-resize-handle segel-resize-handle__left"},[t._v("⋮")]):t._e(),t._v(" "),t.isEditable?n("span",{staticClass:"segel-resize-handle segel-resize-handle__right"},[t._v("⋮")]):t._e(),t._v(" "),"updating"===t.status?n("div",{staticClass:"progress"}):t._e()]):t._e()},[],!1,null,null,null).exports,y=new Date(1e4,1,1),_={booking:function(t){return t.start=this.date(t.start),t.end=this.date(t.end),t},resource:function(t){return t},date:function(t){var e=t;switch("[object String]"===Object.prototype.toString.call(t)&&/^\d+$/.test(t)&&(t=parseInt(t)),Object.prototype.toString.call(t)){case"[object Date]":e=t.getTime()/1e3;break;case"[object Number]":e=1e3*t>y.getTime()?t/1e3:t;break;default:e=new Date(t).getTime()}return Math.floor(e)}},w=_,j=o({props:{id:{type:[String,Number],required:!0},name:{type:String,required:!0},bookings:{type:Array,default:function(){return[]}}},directives:{dropzone:{bind:function(t,e,n){c()(t).dropzone({ondragenter:function(){t.classList.add("droppable")},ondragleave:function(){t.classList.remove("droppable")},ondrop:function(e){var r=Math.round(e.dragEvent.dx/n.context.$root.$el.clientWidth*n.context.state.time.duration()),i={resource:n.context.id,start:w.date(parseInt(e.relatedTarget.__vue__.start)+r),end:w.date(parseInt(e.relatedTarget.__vue__.end)+r)};e.dragEvent.altKey?b.$emit("bookings-create",i):(i.id=e.relatedTarget.__vue__.id,b.$emit("bookings-update",i)),t.classList.remove("droppable")}}).on("doubletap",function(e){if(e.target===t){var r=Math.round(e.offsetX/n.context.$root.$el.clientWidth*n.context.state.time.duration()),i=n.context.state.time.duration()/n.context.state.config.steps,o=p.round(r+n.context.state.time.start,n.context.state.time.duration(),n.context.state.config.steps);b.$emit("bookings-create",{resource:n.context.id,start:o,end:o+2*i})}else e.stopPropagation()})},unbind:function(t){c()(t).unset()}}},data:function(){return{dropTarget:!1}},inject:["state"],components:{"segel-booking":x},methods:{dragenter:function(){this.dropTarget=!0},dragleave:function(){this.dropTarget=!1},dragover:function(t){this.dropTarget=!0,t.dataTransfer.dropEffect=t.altKey?"copy":"move"},drop:function(){this.dropTarget=!1}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"segel-resource"},[t._v("\n  "+t._s(t.name)+"\n\n  "),n("ul",{directives:[{name:"dropzone",rawName:"v-dropzone"}],staticClass:"segel-bookings"},t._l(t.bookings,function(e){return n("segel-booking",{key:e.id,attrs:{id:e.id,resource:t.id,user:e.user,status:e.status,start:e.start,end:e.end}})}),1)])},[],!1,null,null,null).exports,$=o({props:{resources:{type:Array,default:function(){return[]}},bookings:{type:Array,default:function(){return[]}}},data:function(){return{}},components:{"segel-resource":j},methods:{relatedBookings:function(t){return this.bookings.filter(function(e){return e.resource===t})}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"segel-resources"},t._l(t.resources,function(e){return n("segel-resource",{key:e.id,attrs:{id:e.id,name:e.name,bookings:t.relatedBookings(e.id)}})}),1)},[],!1,null,null,null).exports,T=o({props:{editable:{type:Boolean,default:function(){return!1}},bookings:{type:Array,default:function(){return[]}},resources:{type:Array,default:function(){return[]}},start:{type:Number,default:function(){return w.date((new Date).setHours(0,0,0,0))}},end:{type:Number,default:function(){return w.date((new Date).setHours(24,0,0,0))}},steps:{type:Number,default:function(){return 48}}},data:function(){return{timer:null,time:{current:w.date(new Date),duration:function(){return this.end-this.start}},user:{id:null,admin:!1,isAdmin:function(){return!0===this.admin},isAuthenticated:function(){return null!==this.id}}}},provide:function(){var t=this,e={config:{},time:{},user:{}};return Object.defineProperty(e.config,"editable",{enumerable:!0,get:function(){return t.editable}}),Object.defineProperty(e.config,"steps",{enumerable:!0,get:function(){return t.steps}}),Object.defineProperty(e.time,"start",{enumerable:!0,get:function(){return t.start}}),Object.defineProperty(e.time,"end",{enumerable:!0,get:function(){return t.end}}),Object.defineProperty(e.time,"current",{enumerable:!0,get:function(){return t.time.current}}),Object.defineProperty(e.time,"duration",{enumerable:!0,get:function(){return t.time.duration}}),Object.defineProperty(e.user,"id",{enumerable:!0,get:function(){return t.user.id}}),Object.defineProperty(e.user,"isAdmin",{enumerable:!0,get:function(){return t.user.isAdmin}}),Object.defineProperty(e.user,"isAuthenticated",{enumerable:!0,get:function(){return t.user.isAuthenticated}}),{state:e}},components:{"segel-indicator":s,"segel-ruler":a,"segel-resources":$},methods:{updateTimer:function(){this.time.current=w.date(new Date)},cancelTimer:function(){clearInterval(this.timer)}},created:function(){var t=this;this.timer=setInterval(this.updateTimer,1e3),b.$on("bookings-create",function(e){t.$emit("bookings-create",e)}),b.$on("bookings-update",function(e){t.$emit("bookings-update",e)})},beforeDestroy:function(){this.cancelTimer()}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"segel"},[n("div",{staticClass:"segel-container"},[n("ul",{staticClass:"segel-grid"},t._l(24,function(e){return n("li",[t._v(" ")])}),0),t._v(" "),n("segel-indicator"),t._v(" "),n("segel-ruler"),t._v(" "),n("segel-resources",{attrs:{resources:t.resources,bookings:t.bookings}})],1)])},[],!1,null,null,null);e.a=T.exports},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(8).Symbol;t.exports=r},function(t,e,n){var r=n(16),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,n){t.exports=e},function(t,e,n){n(11),t.exports=n(21)},function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"install",function(){return i});var r=n(4);function i(t){i.installed||(i.installed=!0,t.component("Segel",r.a))}var o={install:i},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==t&&(s=t.Vue),s&&s.use(o),e.default=r.a}.call(this,n(5))},function(t,e){var n=Math.max,r=Math.min;t.exports=function(t,e,i){return t>=r(e,i)&&t<n(e,i)}},function(t,e,n){var r=n(3),i=1/0,o=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===i||t===-i?(t<0?-1:1)*o:t==t?t:0:0===t?t:0}},function(t,e,n){var r=n(15),i=n(19),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||i(t)&&r(t)==o}},function(t,e,n){var r=n(7),i=n(17),o=n(18),s="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:s:u&&u in Object(t)?i(t):o(t)}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(5))},function(t,e,n){var r=n(7),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var i=s.call(t);return r&&(e?t[a]=n:delete t[a]),i}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var r=n(8);t.exports=function(){return r.Date.now()}},function(t,e){}]).default});