(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{296:function(t,e){t.exports=function(t){return Set.prototype.values.call(t)}},297:function(t,e,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("1b7833da",content,!0,{sourceMap:!1})},298:function(t,e,r){"use strict";var n=r(299),o=r(300);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},299:function(t,e,r){"use strict";var n=r(10),o=r(16),c=r(96),l=r(38),f=r(222),h=r(221),d=r(158),v=r(19),m=r(24),w=r(12),y=r(159),C=r(77),x=r(163);t.exports=function(t,e,r){var S=-1!==t.indexOf("Map"),_=-1!==t.indexOf("Weak"),k=S?"set":"add",A=o[t],T=A&&A.prototype,K=A,I={},B=function(t){var e=T[t];l(T,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(_&&!m(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return _&&!m(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(_&&!m(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,!v(A)||!(_||T.forEach&&!w((function(){(new A).entries().next()})))))K=r.getConstructor(e,t,S,k),f.enable();else if(c(t,!0)){var J=new K,R=J[k](_?{}:-0,1)!=J,E=w((function(){J.has(1)})),G=y((function(t){new A(t)})),O=!_&&w((function(){for(var t=new A,e=5;e--;)t[k](e,e);return!t.has(-0)}));G||((K=e((function(e,r){d(e,K,t);var n=x(new A,e,K);return null!=r&&h(r,n[k],{that:n,AS_ENTRIES:S}),n}))).prototype=T,T.constructor=K),(E||O)&&(B("delete"),B("has"),S&&B("get")),(O||R)&&B(k),_&&T.clear&&delete T.clear}return I[t]=K,n({global:!0,forced:K!=A},I),C(K,t),_||r.setStrong(K,t,S),K}},300:function(t,e,r){"use strict";var n=r(33).f,o=r(59),c=r(161),l=r(76),f=r(158),h=r(221),d=r(160),v=r(162),m=r(30),w=r(222).fastKey,y=r(53),C=y.set,x=y.getterFor;t.exports={getConstructor:function(t,e,r,d){var v=t((function(t,n){f(t,v,e),C(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),m||(t.size=0),null!=n&&h(n,t[d],{that:t,AS_ENTRIES:r})})),y=x(e),S=function(t,e,r){var n,o,c=y(t),l=_(t,e);return l?l.value=r:(c.last=l={index:o=w(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),m?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},_=function(t,e){var r,n=y(t),o=w(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(v.prototype,{clear:function(){for(var t=y(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=this,r=y(e),n=_(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),m?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=y(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!_(this,t)}}),c(v.prototype,r?{get:function(t){var e=_(this,t);return e&&e.value},set:function(t,e){return S(this,0===t?0:t,e)}}:{add:function(t){return S(this,t=0===t?0:t,t)}}),m&&n(v.prototype,"size",{get:function(){return y(this).size}}),v},setStrong:function(t,e,r){var n=e+" Iterator",o=x(e),c=x(n);d(t,e,(function(t,e){C(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),v(e)}}},301:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(302);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},302:function(t,e,r){"use strict";var n=r(57),o=r(22);t.exports=function(){for(var t=o(this),e=n(t.add),r=0,c=arguments.length;r<c;r++)e.call(t,arguments[r]);return t}},303:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(304);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},304:function(t,e,r){"use strict";var n=r(57),o=r(22);t.exports=function(){for(var t,e=o(this),r=n(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},305:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(43),l=r(57),f=r(22),h=r(123),d=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=f(this),r=new(h(e,c("Set")))(e),n=l(r.delete);return d(t,(function(t){n.call(r,t)})),r}})},306:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(22),l=r(76),f=r(296),h=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return!h(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},307:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(43),l=r(57),f=r(22),h=r(76),d=r(123),v=r(296),m=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=f(this),r=v(e),n=h(t,arguments.length>1?arguments[1]:void 0,3),o=new(d(e,c("Set"))),w=l(o.add);return m(r,(function(t){n(t,t,e)&&w.call(o,t)}),{IS_ITERATOR:!0}),o}})},308:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(22),l=r(76),f=r(296),h=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return h(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},309:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(43),l=r(57),f=r(22),h=r(123),d=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=f(this),r=new(h(e,c("Set"))),n=l(e.has),o=l(r.add);return d(t,(function(t){n.call(e,t)&&o.call(r,t)})),r}})},310:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(57),l=r(22),f=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,n){if(!0===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},311:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(43),l=r(57),f=r(19),h=r(22),d=r(124),v=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),r=h(t),n=r.has;return f(n)||(r=new(c("Set"))(t),n=l(r.has)),!v(e,(function(t,e){if(!1===n.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},312:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(57),l=r(22),f=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,n){if(!1===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},313:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(22),l=r(296),f=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),r=l(e),n=void 0===t?",":String(t),o=[];return f(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},314:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(43),l=r(57),f=r(22),h=r(76),d=r(123),v=r(296),m=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=f(this),r=v(e),n=h(t,arguments.length>1?arguments[1]:void 0,3),o=new(d(e,c("Set"))),w=l(o.add);return m(r,(function(t){w.call(o,n(t,t,e))}),{IS_ITERATOR:!0}),o}})},315:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(57),l=r(22),f=r(296),h=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=l(this),r=f(e),n=arguments.length<2,o=n?void 0:arguments[1];if(c(t),h(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},316:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(22),l=r(76),f=r(296),h=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return h(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},317:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(43),l=r(57),f=r(22),h=r(123),d=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=f(this),r=new(h(e,c("Set")))(e),n=l(r.delete),o=l(r.add);return d(t,(function(t){n.call(r,t)||o.call(r,t)})),r}})},318:function(t,e,r){"use strict";var n=r(10),o=r(48),c=r(43),l=r(57),f=r(22),h=r(123),d=r(221);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=f(this),r=new(h(e,c("Set")))(e);return d(t,l(r.add),{that:r}),r}})},319:function(t,e,r){"use strict";r(297)},320:function(t,e,r){var n=r(78),o=r(321),c=r(322),l=n(!1),f=o(c);l.push([t.i,'@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Thin.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Thin.woff) format("woff");font-weight:100}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Light.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Light.woff) format("woff");font-weight:200}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-DemiLight.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-DemiLight.woff) format("woff");font-weight:300}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Regular.woff) format("woff");font-weight:400}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Medium.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Medium.woff) format("woff");font-weight:500}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Bold.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Bold.woff) format("woff");font-weight:700}@font-face{font-family:SweiGothicCJKtc;src:url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Black.woff2) format("woff2"),url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Black.woff) format("woff");font-weight:900}:root{--kBgCard:hsla(0,0%,100%,0.42745);--kBgInput:hsla(0,0%,100%,0.62353);--kFgInput:#232323;--kBgLightGreen:#fafff5;--kBgLightBlue:#e8f9ff;--kBgLightYellow:#feffe3;--kBgLightPurple:#f4ebff;--kBgSemiOpcBlack:hsla(0,0%,46.7%,0.2902);--kBgSemiOpcRed:rgba(237,55,88,0.65098)}body,html{overflow-x:hidden;font-family:"SweiGothicCJKtc",Helvetica,"PingFang TC","微軟正黑體","Microsoft JhengHei",sans-serif!important;font-weight:700;padding-right:0!important;margin-right:0!important}.fw-900{font-weight:900!important}.fw-700{font-weight:700!important}.fw-500{font-weight:500!important}.fw-400{font-weight:400!important}.fw-300{font-weight:300!important}.fw-200{font-weight:200!important}.fw-100{font-weight:100!important}.bg-grad-color-A{background:url('+f+") round,linear-gradient(to bottom left,#feffe3,#f4ebff),linear-gradient(180deg,#fafff5,transparent,#e8f9ff);background:url("+f+") round,linear-gradient(to bottom left,var(--kBgLightYellow),var(--kBgLightPurple)),linear-gradient(180deg,var(--kBgLightGreen),transparent,var(--kBgLightBlue))}.bg-grad-color-B{background:url("+f+") round,linear-gradient(to top left,#feffe3,#f4ebff),linear-gradient(0deg,#fafff5,transparent,#e8f9ff);background:url("+f+") round,linear-gradient(to top left,var(--kBgLightYellow),var(--kBgLightPurple)),linear-gradient(0deg,var(--kBgLightGreen),transparent,var(--kBgLightBlue))}main{min-height:calc(100vh - 95px)}.card{background:hsla(0,0%,100%,.42745);background:var(--kBgCard);border:none;border-radius:20px}.crown{margin-top:-5px;vertical-align:middle}.custom-file-label,input,select,textarea{background-color:hsla(0,0%,100%,.62353)!important;background-color:var(--kBgInput)!important;color:#232323!important;color:var(--kFgInput)!important;border:1px solid #eee!important;border-radius:10px!important;overflow-y:hidden!important}.checkbox-wrap>label{border:none;color:#787878!important;background-color:hsla(0,0%,46.7%,.2902)!important;background-color:var(--kBgSemiOpcBlack)!important}.checkbox-wrap.active>label{color:#fff!important;background-color:rgba(237,55,88,.65098)!important;background-color:var(--kBgSemiOpcRed)!important}",""]),t.exports=l},321:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},322:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsSAAALEgHS3X78AAAAfUlEQVRoge3TsQ2AMAxEUYOYglVTZ1XWCKJgBuui9xvL9ekda636mnPe3x1jPDv9Z23etety/7/9ggymx2B6DDLIYG8MpsdgegwyyGBvDKbHYHoMMshgbwymx2B6DDLIYG8MpsdgegwyyGBvDKbHYHoMMshgbwymx2B0VfUCqEcp7YZeO6AAAAAASUVORK5CYII="},323:function(t,e,r){"use strict";r.r(e);var n=r(26);r(20),r(54),r(58),r(49),r(298),r(301),r(303),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(1),r(9),r(25),r(36),r(79),r(15),r(21),r(3),r(60),r(64);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={data:function(){return{nums:1,inp:"",total:100,intv:100,sortable:!0,sum_votes:0,votes:[],keys:[],sortedKeys:[],candidates:{},interval_id:null}},watch:{sortable:function(){this.sortingKeys()}},methods:{doClear:function(){this.sum_votes=0,this.votes=[],this.keys=[],this.sortedKeys=[],this.candidates={},null!==this.interval_id&&clearInterval(this.interval_id),this.interval_id=null},doDraw:function(){var t=this;this.doClear(),this.keys=Array.from(new Set(this.inp.split(",").filter(Boolean)));var e,r=o(this.keys);try{for(r.s();!(e=r.n()).done;){var n=e.value;this.candidates[n]={value:0,crown:!1}}}catch(t){r.e(t)}finally{r.f()}this.sortingKeys(),this.votes=Array.from({length:this.total},(function(){return Math.floor(Math.random()*t.keys.length)})),this.fisherYatesShuffle(this.votes),this.scrollToTop(),this.interval_id=setInterval(this.drawOne,this.intv)},drawOne:function(){var t=this.votes[this.sum_votes++];if(void 0!==t){var e=this.keys[t];this.candidates[e].value+=1,this.sortingKeys(),this.computeSafeCrown(e)}else clearInterval(this.interval_id),this.interval_id=null,this.sum_votes--,this.computeFinalCrown()},computeSafeCrown:function(t){this.candidates[t].value>Math.floor(this.votes.length/(this.nums+1))+1&&(this.candidates[t].crown=!0)},computeFinalCrown:function(){var t,e=0,r=0,n=o(this.sortedKeys);try{for(n.s();!(t=n.n()).done;){var c=t.value;if(!(e<this.nums||this.candidates[c].value===r))break;r=this.candidates[c].value,this.candidates[c].crown=!0,e++}}catch(t){n.e(t)}finally{n.f()}},sortingKeys:function(){var t=this;this.sortedKeys=Object(n.a)(this.keys),this.sortedKeys.sort((function(a,b){return t.candidates[b].value-t.candidates[a].value}))},fisherYatesShuffle:function(t){for(var i=t.length-1;i>0;i--){var e=Math.floor(Math.random()*(i+1)),r=t[i];t[i]=t[e],t[e]=r}},scrollToTop:function(){var t=this.$refs.header;t&&t.scrollIntoView({behavior:"smooth"})}}},f=(r(319),r(70)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",{ref:"header",staticClass:"bg-grad-color-A text-center py-4"},[r("h2",{staticClass:"fw-900"},[t._v("看起來蝦趴一點的抽籤程式")])]),t._v(" "),r("main",{staticClass:"container-fluid p-0 p-md-2 p-lg-5 bg-grad-color-B"},[r("section",{staticClass:"p-0 p-md-2 mb-3"},[r("h3",{staticClass:"fw-700"},[t._v("\n        抽籤結果 \n        "),r("b-form-checkbox",{class:{"checkbox-wrap":!0,active:t.sortable},attrs:{button:""},model:{value:t.sortable,callback:function(e){t.sortable=e},expression:"sortable"}},[t._v(t._s(t.sortable?"排序":"不排序"))])],1),t._v(" "),r("b-card",{staticClass:"mt-2 p-3"},[r("b-row",t._l(t.candidates,(function(e,n){return r("b-col",{key:n,staticClass:"mb-3",attrs:{order:(t.sortable?t.sortedKeys:t.keys).indexOf(n)+1,cols:"12"}},[r("h6",{staticStyle:{"line-height":"35px"}},[e.crown?r("b-img",{staticClass:"crown",attrs:{src:"icons8_queen_crown_48px.png",width:"35"}}):t._e(),t._v(" \n              "+t._s(n)+" \n              （"+t._s((e.value/t.votes.length*100).toFixed(2))+"%）\n            ")],1),t._v(" "),r("b-progress",{attrs:{max:t.votes.length,"show-value":"","show-progress":"",animated:""}},[r("b-progress-bar",{attrs:{value:e.value,label:""+e.value}})],1)],1)})),1),t._v(" "),t.keys.length>0?r("b-row",{staticClass:"px-3 mt-3"},[r("h5",{staticClass:"mx-auto",staticStyle:{"line-height":"35px"}},[t._v("已抽出："+t._s(t.sum_votes)+"／總數："+t._s(t.votes.length))])]):t._e()],1)],1),t._v(" "),r("section",{staticClass:"p-0 p-md-2 mb-3"},[r("h3",{staticClass:"fw-700"},[t._v("抽籤設定")]),t._v(" "),r("b-card",{staticClass:"mt-2 p-3"},[r("b-row",[r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("h6",[t._v("要抽幾位")]),t._v(" "),r("b-form-input",{attrs:{type:"number",min:"1"},model:{value:t.nums,callback:function(e){t.nums=e},expression:"nums"}})],1),t._v(" "),r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("h6",[t._v("抽籤項目")]),t._v(" "),r("b-form-textarea",{attrs:{placeholder:"請輸入抽籤項目（以半形逗號「,」分隔），會自動去除重複及空值",rows:"6","max-rows":"20"},model:{value:t.inp,callback:function(e){t.inp=e},expression:"inp"}})],1),t._v(" "),r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("h6",[t._v("總抽出次數")]),t._v(" "),r("b-form-input",{attrs:{type:"number",min:"1",max:"100000000"},model:{value:t.total,callback:function(e){t.total=e},expression:"total"}})],1),t._v(" "),r("b-col",{staticClass:"mb-3",attrs:{cols:"12"}},[r("h6",[t._v("每幾秒抽一次（單位：ms）")]),t._v(" "),r("b-form-input",{attrs:{type:"number",min:"1"},model:{value:t.intv,callback:function(e){t.intv=e},expression:"intv"}})],1),t._v(" "),r("b-col",{staticClass:"mb-3 text-center",attrs:{cols:"12"}},[r("b-button",{staticClass:"my-2",attrs:{type:"button",variant:"primary"},on:{click:t.doDraw}},[t._v("開抽")]),t._v(" \n            "),r("b-button",{staticClass:"my-2",attrs:{type:"button",variant:"danger"},on:{click:t.doClear}},[t._v("清空")])],1)],1)],1)],1)]),t._v(" "),r("footer",{staticClass:"container-fluid px-0 px-md-5 bg-grad-color-A"},[r("b-row",{staticClass:"justify-content-center align-content-center pb-5"},[r("b-col",{attrs:{id:"footer-panel",cols:"12"}},[r("div",{staticClass:"card-body text-center"},[t._v("\n          Linziyou "),r("a",{staticClass:"text-dark text-decoration-none",attrs:{href:"https://github.com/linziyou0601/cool_draw_straws","data-size":"large","aria-label":"Star linziyou0601/cool_draw_straws on GitHub"}},[r("fa",{attrs:{icon:["fab","github"]}}),t._v(" GitHub\n          ")],1)])])],1)],1),t._v(" "),r("AlertDialog")],1)}),[],!1,null,null,null);e.default=component.exports}}]);