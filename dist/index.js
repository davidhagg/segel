!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("interactjs"),require("vue")):"function"==typeof define&&define.amd?define("Segel",["interactjs","vue"],e):"object"==typeof exports?exports.Segel=e(require("interactjs"),require("vue")):t.Segel=e(t.interact,t.Vue)}(window,function(t,e){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=11)}([function(e,n){e.exports=t},function(t,e,n){var i=n(20),r=n(21),o=n(3);t.exports=function(t,e,n){return e=r(e),void 0===n?(n=e,e=0):n=r(n),t=o(t),i(t,e,n)}},function(t,e,n){var i;"undefined"!=typeof self&&self,t.exports=(i=n(4),function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"8bbf":function(t,e){t.exports=i},fb15:function(t,e,n){"use strict";var i;n.r(e),"undefined"!=typeof window&&(i=window.document.currentScript)&&(i=i.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=i[1]);var r=n("8bbf"),o=n.n(r);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a=function(){return o.a.observable({})},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(Array.isArray(t)||"object"!==s(t))return t;var n=Array.isArray(e)?e:Object.keys(e),i=!Array.isArray(e);return n.reduce(function(n,r){var o=i?e[r]:r;return n[o]=t[r],n},{})};function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,n=t.nameForComputed,i=void 0===n?null:n,r=t.props,s=void 0!==r&&r,l=t.attrs,d=void 0!==l&&l,f=t.listeners,p=void 0!==f&&f,h=t.include,g=void 0!==h&&h,m=t.inheritAs,b=void 0!==m&&m;if(e){var v="",y=i||e;return{beforeCreate:function(){this[v="$_reactiveProvide-".concat(e,"-Data")]=a()},provide:function(){return c({},e,this[v])},inject:b?c({},b,{from:e,default:{}}):void 0,computed:c({},y,function(){var t={};return b&&Object.assign(t,this[b]),g&&Object.assign(t,u(this,g)),s&&Object.assign(t,this.$props),d&&Object.assign(t,this.$attrs),p&&Object.assign(t,this.$listeners),t}),watch:c({},y,{immediate:!0,handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this[v];Object.keys(t).forEach(function(n){e.hasOwnProperty(n)?e[n]=t[n]:o.a.set(e,n,t[n])})}})}}!function(t){console.error("[vue-reactive-provide]: ".concat(t))}("[vue-reactive-provide]: No name property found on options object when trying to create mixin.\n      the 'name' property is required.")}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f=o.a.config.optionMergeStrategies,p=f.provide,h=f.computed,g=f.inject,m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,n=void 0===e?"reactiveProvide":e;return{beforeCreate:function(){var t=this,e=this.$options[n];if(e&&("function"==typeof e&&(e=e.call(this,this)),"object"===d(e))){var i=l(e),r=i.beforeCreate,o=i.provide,s=i.inject,a=i.computed,u=i.watch;r.call(this,this),this.$options.computed=h(this.$options.computed,a,this,"computed"),this.$options.provide=p(this.$options.provide,o,this,"provide"),this.$options.inject=g(this.$options.inject,s,this,"inject"),this.$once("hook:created",function(){var n=t.$watch(function(){return t[e.name]},u[e.name].handler,{immediate:!0});t.$on("hook:beforeDestroy",n)})}}}},b={install:function(t,e){t.mixin(m(e))},version:"0.3.0"};n.d(e,"ReactiveProvideMixin",function(){return l}),e.default=b}}))},function(t,e,n){var i=n(8),r=n(15),o=NaN,s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return o;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=u.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?o:+t}},function(t,n){t.exports=e},function(t,e,n){var i=n(8),r=n(13),o=n(3),s="Expected a function",a=Math.max,u=Math.min;t.exports=function(t,e,n){var c,l,d,f,p,h,g=0,m=!1,b=!1,v=!0;if("function"!=typeof t)throw new TypeError(s);function y(e){var n=c,i=l;return c=l=void 0,g=e,f=t.apply(i,n)}function _(t){var n=t-h;return void 0===h||n>=e||n<0||b&&t-g>=d}function x(){var t=r();if(_(t))return $(t);p=setTimeout(x,function(t){var n=e-(t-h);return b?u(n,d-(t-g)):n}(t))}function $(t){return p=void 0,v&&c?y(t):(c=l=void 0,f)}function j(){var t=r(),n=_(t);if(c=arguments,l=this,h=t,n){if(void 0===p)return function(t){return g=t,p=setTimeout(x,e),m?y(t):f}(h);if(b)return p=setTimeout(x,e),y(h)}return void 0===p&&(p=setTimeout(x,e)),f}return e=o(e)||0,i(n)&&(m=!!n.leading,d=(b="maxWait"in n)?a(o(n.maxWait)||0,e):d,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==p&&clearTimeout(p),g=0,c=h=l=p=void 0},j.flush=function(){return void 0===p?f:$(r())},j}},function(t,e,n){"use strict";var i=n(5),r=n.n(i),o=n(2),s=n(1),a=n.n(s);function u(t,e,n,i,r,o,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}var c=u({data:function(){return{}},inject:["time"],computed:{isInView:function(){return a()(this.time.current,this.time.start,this.time.end)},left:function(){return(this.time.current-this.time.start)/this.time.duration*100}}},function(){var t=this.$createElement,e=this._self._c||t;return this.isInView?e("div",{class:{"segel-indicator":!0},style:{left:this.left+"%"}}):this._e()},[],!1,null,null,null).exports,l=u({props:["labels"]},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"segel-ruler"},[n("ul",t._l(t.labels,function(e){return n("li",[n("span",[t._v("\n        "+t._s(e)+"\n      ")])])}),0)])},[],!1,null,null,null).exports,d=n(0),f=n.n(d),p=n(4),h=new(n.n(p).a);var g={};g.create=function(t,e,n){return i={x:t/n,y:e},[f.a.createSnapGrid(i)];var i},g.round=function(t,e,n){var i=e/n,r=t%i,o=t-r;return r>=i/2?o+i:o};var m=g,b=u({props:{id:{type:[String,Number],required:!0},resource:{type:[String,Number],required:!0},status:{type:String,default:"confirmed"},editable:{type:Boolean,default:!0},start:{type:Number,required:!0},end:{type:Number,required:!0}},data:function(){return{isInteractDragging:!1,isInteractResizing:!1,interactPosition:{x:0,y:0},interactSize:{width:null,height:null}}},inject:["config","grid","time"],watch:{isEditable:function(t){f()(this.$el).draggable().enabled=t,f()(this.$el).resizable().enabled=t},grid:{handler:function(){this.handleResize()},deep:!0}},computed:{isEditable:function(){return!!this.config.editable&&(!!this.editable&&("updating"!==this.status&&this.start>this.time.current))},isInView:function(){return a()(this.start,this.time.start,this.time.end)||a()(this.end,this.time.start,this.time.end)||this.start<this.time.start&&this.end>this.time.start||this.end<this.time.end&&this.end>this.time.end},duration:function(){return this.end-this.start},styleLeft:function(){return"".concat((this.start-this.time.start)/this.time.duration*100,"%")},styleWidth:function(){return this.isInteractResizing?"".concat(this.interactSize.width,"px"):"".concat(this.duration/this.time.duration*100,"%")},styleTransform:function(){if(this.isInteractDragging||this.isInteractResizing){var t=this.interactPosition,e=t.x,n=t.y;return"translate(".concat(e,"px, ").concat(n,"px)")}return null}},methods:{handleDblclick:function(){this.config.editable&&(h.$emit("bookings-delete",{id:this.id}),window.document.documentElement.setAttribute("style",""))},handleResize:function(){f()(this.$el).draggable().modifiers[0].options.targets=this.grid.snap,f()(this.$el).resizable().modifiers[0].options.targets=this.grid.snap,f()(this.$el).resizable().modifiers[1].options.min=this.grid.size.min,f()(this.$el).resizable().modifiers[1].options.max=this.grid.size.max},interactSetPosition:function(t){var e=t.x,n=void 0===e?0:e,i=t.y,r=void 0===i?0:i;this.interactPosition={x:n,y:r}},interactResetPosition:function(){this.interactSetPosition({x:0,y:0})},interactSetSize:function(t){var e=t.width,n=void 0===e?0:e,i=t.height,r=void 0===i?0:i;this.interactSize={width:n,height:r}},interactResetSize:function(){this.interactSetSize({width:null,height:null})}},mounted:function(){this.$nextTick(function(){var t=this;f()(this.$el).draggable({enabled:void 0===this.isEditable||this.isEditable,modifiers:[f.a.modifiers.snap({targets:this.grid.snap,offset:"startCoords"})],restrict:{restriction:".segel-resources"},onstart:function(){t.isInteractDragging=!0},onmove:function(e){var n=t.interactPosition.x+e.dx,i=t.interactPosition.y+e.dy;t.interactSetPosition({x:n,y:i})},onend:function(){t.isInteractDragging=!1}}),f()(this.$el).resizable({enabled:void 0===this.isEditable||this.isEditable,modifiers:[f.a.modifiers.snap({targets:this.grid.snap,offset:"startCoords"}),f.a.modifiers.restrictSize(this.grid.size)],edges:{top:!1,bottom:!1,left:".segel-resize-handle__left",right:".segel-resize-handle__right"},onstart:function(){t.isInteractResizing=!0},onmove:function(e){var n=t.interactPosition.x+e.deltaRect.left,i=t.interactPosition.y+e.deltaRect.top,r=e.rect.width,o=e.rect.height;t.interactSetPosition({x:n,y:i}),t.interactSetSize({width:r,height:o})},onend:function(){var e=Math.round((t.$el.offsetLeft+t.interactPosition.x)/t.$parent.$el.clientWidth*t.time.duration),n=Math.round(t.$el.getBoundingClientRect().width/t.$parent.$el.clientWidth*t.time.duration);h.$emit("bookings-update",{id:t.id,resource:t.resource,start:m.round(t.time.start+e,t.time.duration,t.config.steps),end:m.round(t.time.start+e+n,t.time.duration,t.config.steps),editable:t.editable}),t.isInteractResizing=!1,t.interactResetSize(),t.interactResetPosition()}})})},beforeDestroy:function(){f()(this.$el).unset()}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInView?n("li",{class:{"segel-booking":!0,editable:t.isEditable,dragging:t.isInteractDragging,resizing:t.isInteractResizing},style:{left:t.styleLeft,width:t.styleWidth,transform:t.styleTransform},on:{dblclick:t.handleDblclick}},[t.isEditable?n("span",{staticClass:"segel-resize-handle segel-resize-handle__left"},[t._v("⋮")]):t._e(),t._v(" "),t.isEditable?n("span",{staticClass:"segel-resize-handle segel-resize-handle__right"},[t._v("⋮")]):t._e(),t._v(" "),"updating"===t.status?n("div",{staticClass:"progress"}):t._e()]):t._e()},[],!1,null,null,null).exports,v=new Date(1e4,1,1),y={booking:function(t){return t.start=this.date(t.start),t.end=this.date(t.end),t},resource:function(t){return t},date:function(t){var e=t;switch("[object String]"===Object.prototype.toString.call(t)&&/^\d+$/.test(t)&&(t=parseInt(t)),Object.prototype.toString.call(t)){case"[object Date]":e=t.getTime()/1e3;break;case"[object Number]":e=1e3*t>v.getTime()?t/1e3:t;break;default:e=new Date(t).getTime()}return Math.floor(e)}},_=y,x=u({props:{id:{type:[String,Number],required:!0},name:{type:String,required:!0},bookings:{type:Array,default:function(){return[]}}},data:function(){return{dropTarget:!1}},inject:["config","time"],methods:{handleDblclick:function(t){if(this.config.editable&&"segel-bookings"===t.target.className){var e=Math.round(t.offsetX/this.$parent.$el.clientWidth*this.time.duration),n=this.time.duration/this.config.steps,i=m.round(e+this.time.start,this.time.duration,this.config.steps);h.$emit("bookings-create",{resource:this.id,start:i,end:i+2*n})}}},mounted:function(){this.$nextTick(function(){var t=this;f()(this.$el).dropzone({ondragenter:function(){t.$el.classList.add("droppable")},ondragleave:function(){t.$el.classList.remove("droppable")},ondrop:function(e){var n=e.relatedTarget.__vue__,i=Math.round(n.interactPosition.x/t.$el.clientWidth*t.time.duration),r={resource:t.id,start:_.date(parseInt(n.start)+i),end:_.date(parseInt(n.end)+i)};e.dragEvent.altKey?h.$emit("bookings-create",r):(r.id=n.id,h.$emit("bookings-update",r)),t.$el.classList.remove("droppable"),n.interactResetPosition()}})})},beforeDestroy:function(){f()(this.$el).unset()},components:{"segel-booking":b}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"segel-resource"},[t._v("\n  "+t._s(t.name)+"\n\n  "),n("ul",{staticClass:"segel-bookings",on:{dblclick:t.handleDblclick}},t._l(t.bookings,function(e){return n("segel-booking",{key:e.id,attrs:{id:e.id,resource:t.id,status:e.status,start:e.start,end:e.end,editable:e.editable}})}),1)])},[],!1,null,null,null).exports,$=u({props:{resources:{type:Array,default:function(){return[]}},bookings:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{relatedBookings:function(t){return this.bookings.filter(function(e){return e.resource===t})}},components:{"segel-resource":x}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"segel-resources"},[t._l(t.resources,function(e){return n("segel-resource",{key:e.id,attrs:{id:e.id,name:e.name,bookings:t.relatedBookings(e.id)}})}),t._v(" "),0===t.resources.length?n("li",{staticClass:"segel-no-resources"},[t._v("\n    No resources have been selected.\n  ")]):t._e()],2)},[],!1,null,null,null).exports,j=u({props:{editable:{type:Boolean,default:function(){return!1}},bookings:{type:Array,default:function(){return[]}},resources:{type:Array,default:function(){return[]}},start:{type:Number,default:function(){return _.date((new Date).setHours(0,0,0,0)-60*(new Date).getTimezoneOffset()*1e3)}},end:{type:Number,default:function(){return _.date((new Date).setHours(24,0,0,0)-60*(new Date).getTimezoneOffset()*1e3)}},steps:{type:Number,default:function(){return 48}},labels:{type:[Array,String],default:function(){return Array(24).fill(1).map(function(t,e){return("0"+e).slice(-2)})}}},data:function(){return{timer:null,current:_.date((new Date).getTime()-60*(new Date).getTimezoneOffset()*1e3),snap:null,size:null}},computed:{duration:function(){return this.end-this.start}},mixins:[Object(o.ReactiveProvideMixin)({name:"config",include:["editable","steps"]}),Object(o.ReactiveProvideMixin)({name:"grid",include:["size","snap"]}),Object(o.ReactiveProvideMixin)({name:"time",include:["start","end","current","duration"]})],methods:{updateTimer:function(){this.current=_.date((new Date).getTime()-60*(new Date).getTimezoneOffset()*1e3)},cancelTimer:function(){clearInterval(this.timer)},handleResize:function(){this.snap=m.create(this.$el.clientWidth,36,this.steps),this.size={min:{width:this.$el.clientWidth/this.steps,height:1},max:{width:this.$el.clientWidth,height:40}}}},created:function(){var t=this;this.timer=setInterval(this.updateTimer,1e3),h.$on("bookings-create",function(e){t.$emit("bookings-create",e)}),h.$on("bookings-update",function(e){t.$emit("bookings-update",e)}),h.$on("bookings-delete",function(e){t.$emit("bookings-delete",e)})},mounted:function(){this.handleResize(),window.addEventListener("resize",r()(this.handleResize.bind(),150))},beforeDestroy:function(){this.cancelTimer(),window.removeEventListener("resize",r()(this.handleResize.bind(),150))},components:{"segel-indicator":c,"segel-ruler":l,"segel-resources":$}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"main",staticClass:"segel"},[n("div",{staticClass:"segel-container"},[n("ul",{staticClass:"segel-grid"},t._l(t.labels.length,function(e){return n("li",[t._v(" ")])}),0),t._v(" "),n("segel-indicator"),t._v(" "),n("segel-ruler",{attrs:{labels:t.labels}}),t._v(" "),n("segel-resources",{attrs:{resources:t.resources,bookings:t.bookings}})],1)])},[],!1,null,null,null);e.a=j.exports},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var i=n(14),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();t.exports=o},function(t,e,n){var i=n(9).Symbol;t.exports=i},function(t,e,n){n(12),t.exports=n(22)},function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"install",function(){return r});var i=n(6);function r(t){r.installed||(r.installed=!0,t.component("Segel",i.a))}var o={install:r},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==t&&(s=t.Vue),s&&s.use(o),e.default=i.a}.call(this,n(7))},function(t,e,n){var i=n(9);t.exports=function(){return i.Date.now()}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(7))},function(t,e,n){var i=n(16),r=n(19),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&i(t)==o}},function(t,e,n){var i=n(10),r=n(17),o=n(18),s="[object Null]",a="[object Undefined]",u=i?i.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:s:u&&u in Object(t)?r(t):o(t)}},function(t,e,n){var i=n(10),r=Object.prototype,o=r.hasOwnProperty,s=r.toString,a=i?i.toStringTag:void 0;t.exports=function(t){var e=o.call(t,a),n=t[a];try{t[a]=void 0;var i=!0}catch(t){}var r=s.call(t);return i&&(e?t[a]=n:delete t[a]),r}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){var n=Math.max,i=Math.min;t.exports=function(t,e,r){return t>=i(e,r)&&t<n(e,r)}},function(t,e,n){var i=n(3),r=1/0,o=1.7976931348623157e308;t.exports=function(t){return t?(t=i(t))===r||t===-r?(t<0?-1:1)*o:t==t?t:0:0===t?t:0}},function(t,e){}]).default});