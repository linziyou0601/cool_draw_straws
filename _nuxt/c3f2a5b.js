(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{297:function(t,e){t.exports=function(t){return Set.prototype.values.call(t)}},298:function(t,e,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("d51a4d30",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r(298)},300:function(t,e,r){var o=r(77)(!1);o.push([t.i,".svg-settings[data-v-74447539]{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.grad-info path[data-v-74447539]{fill:url(#info)}.grad-success path[data-v-74447539]{fill:url(#success)}.grad-error path[data-v-74447539]{fill:url(#error)}.dialog-icon[data-v-74447539]{font-size:70px;font-weight:700}.dialog-title[data-v-74447539]{color:var(--kBlack);font-size:36px;font-weight:700}.dialog-content[data-v-74447539]{color:var(--kLightBlack);font-size:18px;font-weight:500}@supports ((-webkit-mask-image:paint(smooth-corners)) or (mask-image:paint(smooth-corners))){.ok-btn[data-v-74447539]{--smooth-corners:8,4;mask-image:paint(smooth-corners);-webkit-mask-image:paint(smooth-corners)}}",""]),t.exports=o},301:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("1b7833da",content,!0,{sourceMap:!1})},304:function(t,e,r){"use strict";r.r(e);r(4),r(3),r(1),r(5),r(2),r(6);var o=r(0),n=r(92);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={computed:l(l({},Object(n.b)(["alertDialog"])),{},{show:{get:function(){return this.alertDialog.show},set:function(t){this.closeAlertDialog()}}}),methods:l({},Object(n.c)(["closeAlertDialog"]))},d=(r(299),r(64)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("svg",{staticClass:"svg-settings",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[r("defs",[r("linearGradient",{attrs:{id:"success"}},[r("stop",{staticStyle:{"stop-color":"var(--kGreen)"},attrs:{offset:"0%"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"var(--kGreen60)"},attrs:{offset:"100%"}})],1),t._v(" "),r("linearGradient",{attrs:{id:"error"}},[r("stop",{staticStyle:{"stop-color":"var(--kRed)"},attrs:{offset:"0%"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"var(--kRed60)"},attrs:{offset:"100%"}})],1),t._v(" "),r("linearGradient",{attrs:{id:"info"}},[r("stop",{staticStyle:{"stop-color":"var(--kBlue)"},attrs:{offset:"0%"}}),t._v(" "),r("stop",{staticStyle:{"stop-color":"var(--kBlue60)"},attrs:{offset:"100%"}})],1)],1)]),t._v(" "),r("b-modal",{attrs:{"hide-header":"","hide-footer":"",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.ok;return[r("b-row",[r("b-col",{staticClass:"text-center py-5"},[r("div",[r("fa",{class:"dialog-icon mb-4 grad-"+t.alertDialog.type,attrs:{icon:[t.alertDialog.iconSet,t.alertDialog.iconName]}})],1),t._v(" "),r("div",{staticClass:"dialog-title my-1"},[t._v(t._s(t.alertDialog.title))]),t._v(" "),r("div",{staticClass:"dialog-content mt-1 mb-3"},[t._v(t._s(t.alertDialog.content))]),t._v(" "),r("b-button",{staticClass:"bg-grad-blue ok-btn mt-3",on:{click:function(t){return o()}}},[t._v("確定")])],1)],1)]}}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)}),[],!1,null,"74447539",null);e.default=component.exports},305:function(t,e,r){"use strict";var o=r(306),n=r(307);t.exports=o("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},306:function(t,e,r){"use strict";var o=r(10),n=r(16),c=r(97),l=r(38),f=r(222),d=r(221),h=r(158),v=r(19),m=r(24),w=r(12),_=r(159),x=r(79),y=r(163);t.exports=function(t,e,r){var C=-1!==t.indexOf("Map"),S=-1!==t.indexOf("Weak"),k=C?"set":"add",A=n[t],T=A&&A.prototype,O=A,K={},j=function(t){var e=T[t];l(T,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(S&&!m(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return S&&!m(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(S&&!m(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,!v(A)||!(S||T.forEach&&!w((function(){(new A).entries().next()})))))O=r.getConstructor(e,t,C,k),f.enable();else if(c(t,!0)){var J=new O,R=J[k](S?{}:-0,1)!=J,G=w((function(){J.has(1)})),B=_((function(t){new A(t)})),E=!S&&w((function(){for(var t=new A,e=5;e--;)t[k](e,e);return!t.has(-0)}));B||((O=e((function(e,r){h(e,O,t);var o=y(new A,e,O);return null!=r&&d(r,o[k],{that:o,AS_ENTRIES:C}),o}))).prototype=T,T.constructor=O),(G||E)&&(j("delete"),j("has"),C&&j("get")),(E||R)&&j(k),S&&T.clear&&delete T.clear}return K[t]=O,o({global:!0,forced:O!=A},K),x(O,t),S||r.setStrong(O,t,C),O}},307:function(t,e,r){"use strict";var o=r(33).f,n=r(60),c=r(161),l=r(76),f=r(158),d=r(221),h=r(160),v=r(162),m=r(30),w=r(222).fastKey,_=r(54),x=_.set,y=_.getterFor;t.exports={getConstructor:function(t,e,r,h){var v=t((function(t,o){f(t,v,e),x(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),m||(t.size=0),null!=o&&d(o,t[h],{that:t,AS_ENTRIES:r})})),_=y(e),C=function(t,e,r){var o,n,c=_(t),l=S(t,e);return l?l.value=r:(c.last=l={index:n=w(e,!0),key:e,value:r,previous:o=c.last,next:void 0,removed:!1},c.first||(c.first=l),o&&(o.next=l),m?c.size++:t.size++,"F"!==n&&(c.index[n]=l)),t},S=function(t,e){var r,o=_(t),n=w(e);if("F"!==n)return o.index[n];for(r=o.first;r;r=r.next)if(r.key==e)return r};return c(v.prototype,{clear:function(){for(var t=_(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=this,r=_(e),o=S(e,t);if(o){var n=o.next,c=o.previous;delete r.index[o.index],o.removed=!0,c&&(c.next=n),n&&(n.previous=c),r.first==o&&(r.first=n),r.last==o&&(r.last=c),m?r.size--:e.size--}return!!o},forEach:function(t){for(var e,r=_(this),o=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(o(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!S(this,t)}}),c(v.prototype,r?{get:function(t){var e=S(this,t);return e&&e.value},set:function(t,e){return C(this,0===t?0:t,e)}}:{add:function(t){return C(this,t=0===t?0:t,t)}}),m&&o(v.prototype,"size",{get:function(){return _(this).size}}),v},setStrong:function(t,e,r){var o=e+" Iterator",n=y(e),c=y(o);h(t,e,(function(t,e){x(this,{type:o,target:t,state:n(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),v(e)}}},308:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(309);o({target:"Set",proto:!0,real:!0,forced:n},{addAll:function(){return c.apply(this,arguments)}})},309:function(t,e,r){"use strict";var o=r(58),n=r(22);t.exports=function(){for(var t=n(this),e=o(t.add),r=0,c=arguments.length;r<c;r++)e.call(t,arguments[r]);return t}},310:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(311);o({target:"Set",proto:!0,real:!0,forced:n},{deleteAll:function(){return c.apply(this,arguments)}})},311:function(t,e,r){"use strict";var o=r(58),n=r(22);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},312:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(43),l=r(58),f=r(22),d=r(123),h=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{difference:function(t){var e=f(this),r=new(d(e,c("Set")))(e),o=l(r.delete);return h(t,(function(t){o.call(r,t)})),r}})},313:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(22),l=r(76),f=r(297),d=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{every:function(t){var e=c(this),r=f(e),o=l(t,arguments.length>1?arguments[1]:void 0,3);return!d(r,(function(t,r){if(!o(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},314:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(43),l=r(58),f=r(22),d=r(76),h=r(123),v=r(297),m=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{filter:function(t){var e=f(this),r=v(e),o=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(h(e,c("Set"))),w=l(n.add);return m(r,(function(t){o(t,t,e)&&w.call(n,t)}),{IS_ITERATOR:!0}),n}})},315:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(22),l=r(76),f=r(297),d=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{find:function(t){var e=c(this),r=f(e),o=l(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(o(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},316:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(43),l=r(58),f=r(22),d=r(123),h=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{intersection:function(t){var e=f(this),r=new(d(e,c("Set"))),o=l(e.has),n=l(r.add);return h(t,(function(t){o.call(e,t)&&n.call(r,t)})),r}})},317:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(58),l=r(22),f=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{isDisjointFrom:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,o){if(!0===r.call(e,t))return o()}),{INTERRUPTED:!0}).stopped}})},318:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(43),l=r(58),f=r(19),d=r(22),h=r(124),v=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{isSubsetOf:function(t){var e=h(this),r=d(t),o=r.has;return f(o)||(r=new(c("Set"))(t),o=l(r.has)),!v(e,(function(t,e){if(!1===o.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},319:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(58),l=r(22),f=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{isSupersetOf:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,o){if(!1===r.call(e,t))return o()}),{INTERRUPTED:!0}).stopped}})},320:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(22),l=r(297),f=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{join:function(t){var e=c(this),r=l(e),o=void 0===t?",":String(t),n=[];return f(r,n.push,{that:n,IS_ITERATOR:!0}),n.join(o)}})},321:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(43),l=r(58),f=r(22),d=r(76),h=r(123),v=r(297),m=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{map:function(t){var e=f(this),r=v(e),o=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(h(e,c("Set"))),w=l(n.add);return m(r,(function(t){w.call(n,o(t,t,e))}),{IS_ITERATOR:!0}),n}})},322:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(58),l=r(22),f=r(297),d=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{reduce:function(t){var e=l(this),r=f(e),o=arguments.length<2,n=o?void 0:arguments[1];if(c(t),d(r,(function(r){o?(o=!1,n=r):n=t(n,r,r,e)}),{IS_ITERATOR:!0}),o)throw TypeError("Reduce of empty set with no initial value");return n}})},323:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(22),l=r(76),f=r(297),d=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{some:function(t){var e=c(this),r=f(e),o=l(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(o(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},324:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(43),l=r(58),f=r(22),d=r(123),h=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{symmetricDifference:function(t){var e=f(this),r=new(d(e,c("Set")))(e),o=l(r.delete),n=l(r.add);return h(t,(function(t){o.call(r,t)||n.call(r,t)})),r}})},325:function(t,e,r){"use strict";var o=r(10),n=r(49),c=r(43),l=r(58),f=r(22),d=r(123),h=r(221);o({target:"Set",proto:!0,real:!0,forced:n},{union:function(t){var e=f(this),r=new(d(e,c("Set")))(e);return h(t,l(r.add),{that:r}),r}})},326:function(t,e,r){"use strict";r(301)},327:function(t,e,r){var o=r(77),n=r(328),c=r(329),l=o(!1),f=n(c);l.push([t.i,'@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Thin.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Thin.woff) format("woff");font-weight:100}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Light.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Light.woff) format("woff");font-weight:200}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-DemiLight.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-DemiLight.woff) format("woff");font-weight:300}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Regular.woff) format("woff");font-weight:400}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Medium.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Medium.woff) format("woff");font-weight:500}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Bold.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Bold.woff) format("woff");font-weight:700}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Black.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Black.woff) format("woff");font-weight:900}:root{--kBlue:#287fff;--kBlue60:rgba(40,127,255,0.65098);--kPurple:#7868e6;--kPurple60:rgba(120,104,230,0.65098);--kRed:#ed3758;--kRed60:rgba(237,55,88,0.65098);--kGreen:#7dbd39;--kGreen60:rgba(125,189,57,0.65098);--kBlack:#2e3846;--kLightBlack:#516272;--kBgLightGreen:#fafff5;--kBgLightBlue:#e8f9ff;--kBgLightYellow:#feffe3;--kBgLightPurple:#f4ebff;--kWhite30:hsla(0,0%,100%,0.30196);--kLight:#ebebeb}body,html{overflow-x:hidden;font-family:"SweiGothicCJKtc",Helvetica,"PingFang TC","微軟正黑體","Microsoft JhengHei",sans-serif!important;font-weight:700;padding-right:0!important;margin-right:0!important}.fw-900{font-weight:900!important}.fw-700{font-weight:700!important}.fw-500{font-weight:500!important}.fw-400{font-weight:400!important}.fw-300{font-weight:300!important}.fw-200{font-weight:200!important}.fw-100{font-weight:100!important}.bg-grad-color-A{background:url('+f+") round,linear-gradient(to bottom left,#feffe3,#f4ebff),linear-gradient(180deg,#fafff5,transparent,#e8f9ff);background:url("+f+") round,linear-gradient(to bottom left,var(--kBgLightYellow),var(--kBgLightPurple)),linear-gradient(180deg,var(--kBgLightGreen),transparent,var(--kBgLightBlue))}.bg-grad-color-B{background:url("+f+") round,linear-gradient(to top left,#feffe3,#f4ebff),linear-gradient(0deg,#fafff5,transparent,#e8f9ff);background:url("+f+") round,linear-gradient(to top left,var(--kBgLightYellow),var(--kBgLightPurple)),linear-gradient(0deg,var(--kBgLightGreen),transparent,var(--kBgLightBlue))}main{min-height:calc(100vh - 95px)}.card{background:hsla(0,0%,100%,.42745);border:none;border-radius:20px}.crown{margin-top:-5px;vertical-align:middle}.custom-file-label,input,select,textarea{background-color:hsla(0,0%,100%,.62353)!important;color:#232323!important;border:1px solid #eee!important;border-radius:10px!important;overflow-y:hidden!important}",""]),t.exports=l},328:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},329:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsSAAALEgHS3X78AAAAfUlEQVRoge3TsQ2AMAxEUYOYglVTZ1XWCKJgBuui9xvL9ekda636mnPe3x1jPDv9Z23etety/7/9ggymx2B6DDLIYG8MpsdgegwyyGBvDKbHYHoMMshgbwymx2B6DDLIYG8MpsdgegwyyGBvDKbHYHoMMshgbwymx2B0VfUCqEcp7YZeO6AAAAAASUVORK5CYII="},334:function(t,e,r){"use strict";r.r(e);r(21),r(3),r(55),r(65);var o=r(26);r(80),r(59),r(47),r(20),r(305),r(308),r(310),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),r(324),r(325),r(50),r(9),r(25),r(36),r(13),r(15),r(98),r(99);function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){f=!0,n=t},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw n}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={data:function(){return{nums:1,item_str:"",total_votes:100,intv:200,max_votes:0,sum_votes:0,candidates:[],interval_id:null}},computed:{sortedCandidates:function(){var t=Object(o.a)(this.candidates);return t.sort((function(a,b){return b.value-a.value})),t}},methods:{doClear:function(){this.max_votes=0,this.sum_votes=0,this.candidates=[],null!==this.interval_id&&clearInterval(this.interval_id),this.interval_id=null},doDraw:function(){this.doClear(),this.max_votes=this.total_votes;for(var t=0,e=Array.from(new Set(this.item_str.split(",")));t<e.length;t++){var r=e[t];this.candidates.push({key:r,value:0,crown:!1})}this.scrollToTop(),this.interval_id=setInterval(this.drawOne,this.intv)},drawOne:function(){var t=Math.floor(Math.random()*this.candidates.length);if(this.candidates[t].value+=1,this.sum_votes+=1,this.sum_votes>=this.max_votes){clearInterval(this.interval_id),this.interval_id=null;var e,r=this.sortedCandidates.slice(0,this.nums).map((function(t){return t.key})),o=n(this.candidates);try{for(o.s();!(e=o.n()).done;){var c=e.value;r.includes(c.key)&&(c.crown=!0)}}catch(t){o.e(t)}finally{o.f()}}else this.candidates[t].value>this.max_votes/2&&(this.candidates[t].crown=!0)},scrollToTop:function(){var t=this.$refs.header;t&&t.scrollIntoView({behavior:"smooth"})}}},f=(r(326),r(64)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",{ref:"header",staticClass:"bg-grad-color-A text-center py-4"},[r("h2",{staticClass:"fw-900"},[t._v("看起來蝦趴一點的抽籤程式")])]),t._v(" "),r("main",{staticClass:"container-fluid p-0 p-md-2 p-lg-5 bg-grad-color-B"},[r("section",{staticClass:"p-0 p-md-2 mb-3"},[r("h3",{staticClass:"fw-700"},[t._v("抽籤結果")]),t._v(" "),r("b-card",{staticClass:"mt-2 p-3"},[r("b-row",t._l(t.candidates,(function(e,o){return r("b-col",{key:o,staticClass:"mb-3",attrs:{cols:"12"}},[r("h6",{staticStyle:{"line-height":"35px"}},[e.crown?r("b-img",{staticClass:"crown",attrs:{src:"icons8_queen_crown_48px.png",width:"35"}}):t._e(),t._v(" \n              "+t._s(e.key)+" \n              （"+t._s((e.value/t.max_votes*100).toFixed(2))+"%）\n            ")],1),t._v(" "),r("b-progress",{attrs:{max:t.max_votes,"show-value":"","show-progress":"",animated:""}},[r("b-progress-bar",{attrs:{value:e.value,label:""+e.value}})],1)],1)})),1),t._v(" "),t.candidates.length>0?r("b-row",{staticClass:"px-3 mt-3"},[r("h5",{staticClass:"mx-auto",staticStyle:{"line-height":"35px"}},[t._v("已抽出："+t._s(t.sum_votes)+"／總數："+t._s(t.max_votes))])]):t._e()],1)],1),t._v(" "),r("section",{staticClass:"p-0 p-md-2 mb-3"},[r("h3",{staticClass:"fw-700"},[t._v("抽籤設定")]),t._v(" "),r("b-card",{staticClass:"mt-2 p-3"},[r("b-row",[r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("h6",[t._v("要抽幾位")]),t._v(" "),r("b-form-input",{attrs:{type:"number",min:"1"},model:{value:t.nums,callback:function(e){t.nums=e},expression:"nums"}})],1),t._v(" "),r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("h6",[t._v("抽籤項目")]),t._v(" "),r("b-form-textarea",{attrs:{placeholder:"請輸入抽籤項目（以半形逗號「,」分隔）",rows:"6","max-rows":"20"},model:{value:t.item_str,callback:function(e){t.item_str=e},expression:"item_str"}})],1),t._v(" "),r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("h6",[t._v("總抽出次數")]),t._v(" "),r("b-form-input",{attrs:{type:"number",min:"1",max:"100000000"},model:{value:t.total_votes,callback:function(e){t.total_votes=e},expression:"total_votes"}})],1),t._v(" "),r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("h6",[t._v("每幾秒抽一次（單位：ms）")]),t._v(" "),r("b-form-input",{attrs:{type:"number",min:"1"},model:{value:t.intv,callback:function(e){t.intv=e},expression:"intv"}})],1),t._v(" "),r("b-col",{staticClass:"mb-3 text-center",attrs:{cols:"12"}},[r("b-button",{staticClass:"my-2",attrs:{type:"button",variant:"primary"},on:{click:t.doDraw}},[t._v("開抽")]),t._v(" \n            "),r("b-button",{staticClass:"my-2",attrs:{type:"button",variant:"danger"},on:{click:t.doClear}},[t._v("清空")])],1)],1)],1)],1)]),t._v(" "),r("footer",{staticClass:"container-fluid px-0 px-md-5 bg-grad-color-A"},[r("b-row",{staticClass:"justify-content-center align-content-center pb-5"},[r("b-col",{attrs:{id:"footer-panel",cols:"12"}},[r("div",{staticClass:"card-body text-center"},[t._v("\n          Linziyou "),r("a",{staticClass:"text-dark text-decoration-none",attrs:{href:"https://github.com/linziyou0601/cool_draw_straws","data-size":"large","aria-label":"Star linziyou0601/cool_draw_straws on GitHub"}},[r("fa",{attrs:{icon:["fab","github"]}}),t._v(" GitHub\n          ")],1)])])],1)],1),t._v(" "),r("AlertDialog")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AlertDialog:r(304).default})}}]);