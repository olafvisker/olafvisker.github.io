(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"0deb":function(t,e,n){"use strict";n("fb6f")},"16c8":function(t,e,n){},"1eaa":function(t,e,n){},2270:function(t,e,n){},"26c4":function(t,e,n){"use strict";n("1eaa")},"6d7f":function(t,e,n){"use strict";n("2270")},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{ref:"overlay",staticClass:"overlay"},[n("logo"),n("navigation",{attrs:{pages:t.navPages}})],1),n("div",{ref:"pages",staticClass:"pages",style:{"padding-top":t.overlayHeight+"px"}},[n("portfolio",{staticStyle:{"padding-top":"50px","padding-bottom":"50px"}}),t._l(t.pages,(function(e){return n("page",{key:e.id,style:{"min-height":"calc(100vh - "+t.overlayHeight+"px"},attrs:{content:e.inhoud,img:e.afbeelding_1}})}))],2)])},i=[],o=n("2909"),c=n("1da1"),s=n("d4ec"),u=n("bee2"),l=n("262e"),p=n("2caf"),f=(n("96cf"),n("99af"),n("d81d"),n("9ab4")),d=n("1b40"),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"logo"}},[n("span",[n("span",{staticClass:"logo_part_1"},[t._v("Gerhard Visker")]),n("span",{staticClass:"logo_separator"},[t._v(" | ")])]),n("span",{staticClass:"logo_part_2"},[t._v("Portretschilder")])])}],g=function(t){Object(l["a"])(n,t);var e=Object(p["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(d["c"]);g=Object(f["a"])([d["a"]],g);var b=g,m=b,y=(n("26c4"),n("2877")),O=Object(y["a"])(m,h,v,!1,null,"ae2d0052",null),j=O.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"imgs"}},[null!=t.img?n("img",{attrs:{src:t.baseUrl+t.img.url}}):t._e()]),n("vue-simple-markdown",{attrs:{source:t.content}})],1)])},x=[],w=function(t){Object(l["a"])(n,t);var e=Object(p["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(u["a"])(n,[{key:"baseUrl",get:function(){return"https://strapi-gerhard.herokuapp.com/"}}]),n}(d["c"]);Object(f["a"])([Object(d["b"])({default:""})],w.prototype,"content",void 0),Object(f["a"])([Object(d["b"])({default:null})],w.prototype,"img",void 0),w=Object(f["a"])([Object(d["a"])({components:{}})],w);var k=w,P=k,S=(n("6d7f"),Object(y["a"])(P,_,x,!1,null,"0569721e",null)),$=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("Slide",{attrs:{id:"hamburger",right:"",noOverlay:"",width:"250"}},[n("nav",{attrs:{id:"hamburgernav"}},[n("ul",t._l(t.pages,(function(e,r){return n("li",{key:e,class:{selected:t.$store.state.activePageIndex==r},on:{click:function(e){return t.onNavClick(r)}}},[n("a",[t._v(t._s(e))])])})),0)])]),n("nav",{attrs:{id:"normalnav"}},[n("ul",t._l(t.pages,(function(e,r){return n("li",{key:e,class:{selected:t.$store.state.activePageIndex==r},on:{click:function(e){return t.onNavClick(r)}}},[n("a",[t._v(t._s(e))])])})),0)])],1)},R=[],U=n("db0f"),C=function(t){Object(l["a"])(n,t);var e=Object(p["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(u["a"])(n,[{key:"onNavClick",value:function(t){var e=this;this.$store.commit("setActivePage",-1),this.$nextTick((function(){return e.$store.commit("setActivePage",t)}))}}]),n}(d["c"]);Object(f["a"])([Object(d["b"])({default:[]})],C.prototype,"pages",void 0),C=Object(f["a"])([Object(d["a"])({components:{Slide:U["Slide"]}})],C);var I=C,H=I,L=(n("d178"),Object(y["a"])(H,E,R,!1,null,"9db712b2",null)),A=L.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("CoolLightBox",{attrs:{items:t.lightboxUrls,index:t.lightboxIndex},on:{close:function(e){t.lightboxIndex=null}}}),n("waterfall",{attrs:{"line-gap":500,"min-line-gap":100,watch:t.images,align:"center"}},t._l(t.images,(function(e,r){return n("waterfall-slot",{key:e.id,attrs:{width:e.width,height:e.height,order:r}},[n("img",{attrs:{src:t.baseUrl+e.url},on:{click:function(e){return t.focusImage(r)}}})])})),1)],1)},M=[],N=n("bc3a"),B=n.n(N),V=Object({NODE_ENV:"production",VUE_APP_CMS_BASE_URL:"https://strapi-gerhard.herokuapp.com/",BASE_URL:"/"});function z(t){return J.apply(this,arguments)}function J(){return J=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",B.a.get(e).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)}))),J.apply(this,arguments)}function W(){return D.apply(this,arguments)}function D(){return D=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z("/pages");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),D.apply(this,arguments)}function G(){return q.apply(this,arguments)}function q(){return q=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z("/schilderijens");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),q.apply(this,arguments)}B.a.defaults.baseURL=V.VUE_APP_CMS_BASE_URL;var F=n("29fb"),K=n("60a5"),Q=n("5547"),X=(n("2223"),function(t){Object(l["a"])(n,t);var e=Object(p["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.images=[],t.lightboxUrls=[],t.lightboxIndex=null,t}return Object(u["a"])(n,[{key:"mounted",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:e=t.sent,this.images=e.map((function(t){return t.afbeelding})),this.lightboxUrls=e.map((function(t){return n.baseUrl+t.afbeelding.url}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"baseUrl",get:function(){return"https://strapi-gerhard.herokuapp.com/"}},{key:"focusImage",value:function(t){this.lightboxIndex=t}}]),n}(d["c"]));X=Object(f["a"])([Object(d["a"])({components:{Waterfall:F["a"],WaterfallSlot:K["a"],CoolLightBox:Q["a"]}})],X);var Y=X,Z=Y,tt=(n("d812"),Object(y["a"])(Z,T,M,!1,null,"7a6d38c2",null)),et=tt.exports,nt=function(t){Object(l["a"])(n,t);var e=Object(p["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.navPages=[],t.pages=[],t.overlayHeight=0,t}return Object(u["a"])(n,[{key:"mounted",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:this.pages=t.sent,this.navPages=["portfolio"].concat(Object(o["a"])(this.pages.map((function(t){return t.naam})))),this.$nextTick((function(){return e.updateOverlayHeight()}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){window.addEventListener("resize",this.updateOverlayHeight)}},{key:"destroyed",value:function(){window.removeEventListener("resize",this.updateOverlayHeight)}},{key:"updateOverlayHeight",value:function(){var t;this.overlayHeight=null===(t=this.$refs.overlay)||void 0===t?void 0:t.offsetHeight}},{key:"goto",value:function(t){var e;if(-1!=t){var n=null===(e=this.$refs.pages)||void 0===e?void 0:e.children[t],r=n.offsetTop-this.overlayHeight;window.scrollTo({left:0,top:r,behavior:"smooth"})}}}]),n}(d["c"]);Object(f["a"])([Object(d["d"])("$store.state.activePageIndex")],nt.prototype,"goto",null),nt=Object(f["a"])([Object(d["a"])({components:{Logo:j,Navigation:A,Page:$,Portfolio:et}})],nt);var rt=nt,at=rt,it=(n("034f"),n("0deb"),Object(y["a"])(at,a,i,!1,null,"2a360c6a",null)),ot=it.exports,ct=n("8c4f");r["a"].use(ct["a"]);var st=[],ut=new ct["a"]({mode:"history",base:"/",routes:st}),lt=ut,pt=n("2f62");r["a"].use(pt["a"]);var ft=new pt["a"].Store({state:{activePageIndex:0},mutations:{setActivePage:function(t,e){t.activePageIndex=e}},actions:{},modules:{}}),dt=n("7602"),ht=n.n(dt);r["a"].use(ht.a),r["a"].config.productionTip=!1,new r["a"]({router:lt,store:ft,render:function(t){return t(ot)}}).$mount("#app")},d178:function(t,e,n){"use strict";n("d6f0")},d6f0:function(t,e,n){},d812:function(t,e,n){"use strict";n("16c8")},fb6f:function(t,e,n){}});
//# sourceMappingURL=app.07ca272b.js.map