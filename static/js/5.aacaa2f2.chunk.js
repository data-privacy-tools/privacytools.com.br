(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{113:function(e,n,t){"use strict";t.d(n,"b",function(){return u}),t.d(n,"a",function(){return s});var r=t(40),o=t(25),a=t(28);function c(){var e=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n  text-align: ",";\n  color: ",";\n  margin: ",";\n\n ","\n\n"]);return c=function(){return e},e}function i(){var e=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  text-align: ",";\n  color: ",";\n"]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 400;\n  overflow-wrap: break-word;\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n"]);return l=function(){return e},e}var u=o.c.h2(l(),function(e){return e.theme.fourthColor},Object(a.b)("36px"),Object(a.b)("36px")),s=o.c.h1(i(),Object(a.b)("52px"),Object(a.b)("58px"),function(e){return e.centered?"center":"left"},function(e){var n=e.theme;return e.white?n.whiteColor:n.fourthColor});o.c.h4(c(),Object(a.b)("18px"),Object(a.b)("24px"),function(e){return e.centered?"center":"left"},function(e){var n=e.theme;return e.white?n.whiteColor:n.fourthColor},function(e){return e.centered?"0 auto":0},function(e){var n=e.maxWidth;return n&&"\n    max-width: ".concat(n,"px\n ")})},114:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(25).c.div.withConfig({displayName:"styles__StyledMargin",componentId:"bqdulz-0"})(["margin:",";"],function(e){return e.x?"".concat(e.x,"px"):"5px"});n.a=function(e){return o.a.createElement(a,{x:e.x})}},115:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=t(25).c.div.withConfig({displayName:"styles__StyledContainer",componentId:"mfq7p4-0"})(["position:relative;z-index:2;margin:0 auto;max-width:1240px;padding:0 24px;"])},117:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(40),c=t(25),i=t(28),l=t(39);function u(){var e=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n\n  &:after{\n    box-shadow: ",";\n  }\n  &:hover {\n    span{\n      color: ",";\n    }\n  }\n  &:active {\n    background-color: ",";\n  }\n"]);return u=function(){return e},e}function s(){var e=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  font-size: ",";\n  padding: 1rem 2rem;\n\n  &:after{\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    content: '';\n    border-radius: 4px;\n    opacity: 0;\n    box-shadow: ",";\n    transition: opacity .3s cubic-bezier(0,.5,.5,1), transform .1s cubic-bezier(0,.5,.5,1);\n  }\n  &:hover {\n    transform: translate3d(0, -1px, 0);\n    &:after{\n      opacity: 1;\n    }\n    span{\n      color: white\n    }\n  }\n  &:active {\n    transform: translate3d(0, 1px, 0);\n    background-color: ",";\n    &:after{\n      opacity: 0;\n    }\n  }\n"]);return s=function(){return e},e}function p(){var e=Object(a.a)(["\n  border: 2px solid ",";\n  color: ",";\n  padding: 0.5rem 2rem;\n  font-size: 16px;\n  background-color: transparent;\n\n  &:before{\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    height: calc(100% - 4px);\n    width: calc(100% - 4px);\n    content: '';\n    border-radius: 2px;\n    background-color: ",";\n    transition: transform .1s cubic-bezier(0,.5,.5,1);\n    transform: scale3d(1, 0, 1);\n    transform-origin : 50% 0%;\n    color: ",";\n  }\n\n  &:hover {\n    color: ",";\n    &:before{\n      transform: scale3d(1, 1, 1);\n    }\n  }\n"]);return p=function(){return e},e}function f(){var e=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n  margin-top: ",";\n  margin-bottom: ",";\n\n ","\n\n  span{\n    position: relative;\n    color: inherit\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n"]);return m=function(){return e},e}Object(c.c)(l.b)(m());var d=c.c.button(f(),function(e){var n=e.top;return n?"".concat(n,"px"):0},function(e){var n=e.bottom;return n?"".concat(n,"px"):0},function(e){return e.centered&&"\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n "}),b=Object(c.c)(d)(p(),function(e){return e.theme.secondaryColor},function(e){return e.theme.secondaryColor},function(e){var n=e.theme;return Object(i.a)(.03,n.secondaryColor)},function(e){return e.theme.secondaryColor},function(e){return e.theme.whiteColor}),h=Object(c.c)(d)(s(),function(e){return e.theme.secondaryColor},function(e){return e.theme.whiteColor},function(e){return e.theme.baseFontSize},function(e){var n=e.theme;return"0 4px 4px ".concat(Object(i.c)(n.secondaryColor,.2),", 0 8px 8px  ").concat(Object(i.c)(n.secondaryColor,.2),", 0 16px 16px ").concat(Object(i.c)(n.secondaryColor,.03),", 0 32px 32px  ").concat(Object(i.a)(.1,Object(i.c)(n.secondaryColor,.1)),", 0 64px 64px ").concat(Object(i.a)(.1,Object(i.c)(n.secondaryColor,.1)))},function(e){var n=e.theme;return Object(i.a)(.03,n.secondaryColor)}),x=Object(c.c)(h)(u(),function(e){return e.theme.whiteColor},function(e){return e.theme.secondaryColor},function(e){var n=e.theme;return"0 4px 4px ".concat(Object(i.c)(n.whiteColor,.2),", 0 8px 8px  ").concat(Object(i.c)(n.whiteColor,.2),", 0 16px 16px ").concat(Object(i.c)(n.whiteColor,.03),", 0 32px 32px  ").concat(Object(i.a)(.1,Object(i.c)(n.whiteColor,.1)),", 0 64px 64px ").concat(Object(i.a)(.1,Object(i.c)(n.whiteColor,.1)))},function(e){return e.theme.secondaryColor},function(e){var n=e.theme;return Object(i.a)(.03,n.whiteColor)});function g(e){return e.white?o.a.createElement(x,e,o.a.createElement("span",null,e.children)):o.a.createElement(h,e,o.a.createElement("span",null,e.children))}function y(e){return o.a.createElement(b,e,o.a.createElement("span",null,e.children))}t.d(n,"a",function(){return g}),t.d(n,"b",function(){return y})},120:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(115);n.a=function(e){return o.a.createElement(a.a,null,e.children)}},121:function(e,n,t){e.exports=t.p+"static/media/logo.0f5ee2ce.svg"},124:function(e,n,t){"use strict";var r=t(130),o=t(0),a=t.n(o),c=t(29),i=t(369),l=t(25),u=t(115),s=t(28),p=l.c.header.withConfig({displayName:"styles__StyledHeader",componentId:"pp62kf-0"})(["position:",";z-index:10;top:0;left:0;width:100%;min-height:50px;padding:10px 0;background-color:",";backdrop-filter:blur(3px);"],function(e){var n=e.position;return n||"fixed"},function(e){return Object(s.c)(e.theme.whiteColor,.6)}),f=Object(l.c)(u.a).withConfig({displayName:"styles__StyledHeaderContainer",componentId:"pp62kf-1"})(["display:flex;justify-content:space-between;"]),m=t(121),d=t.n(m),b=t(39),h=l.c.div.withConfig({displayName:"styles__StyledMenu",componentId:"qn6uix-0"})(["display:flex;align-items:center;"]),x=Object(l.c)(b.b).withConfig({displayName:"styles__StyledMenuItem",componentId:"qn6uix-1"})(["margin:0 24px;font-weight:300;"]),g=l.c.div.withConfig({displayName:"styles__StyledSpacer",componentId:"qn6uix-2"})(["margin:0 12px"]),y=Object(l.c)(b.b).withConfig({displayName:"styles__StyledLoginButton",componentId:"qn6uix-3"})(["position:relative;padding:0.4rem 1.4rem;border-radius:4px;border:2px solid ",";span{position:relative;color:",";}&:before{position:absolute;left:2px;top:2px;height:calc(100% - 4px);width:calc(100% - 4px);content:'';border-radius:2px;background-color:",";transition:transform .1s cubic-bezier(0,.5,.5,1);transform:scale3d(1,0,1);transform-origin:50% 100%;color:",";}&:hover{color:",";&:before{transform:scale3d(1,1,1);}span{color:",";}}"],function(e){return e.theme.secondaryColor},function(e){return e.theme.secondaryColor},function(e){var n=e.theme;return Object(s.a)(.03,n.secondaryColor)},function(e){return e.theme.secondaryColor},function(e){return e.theme.whiteColor},function(e){return e.theme.whiteColor});var v=function(e){var n=e.page;return a.a.createElement(h,null,a.a.createElement(x,{to:"contact"},"E-mail us"),a.a.createElement(g,null),"login"!==n&&a.a.createElement(x,{to:"login"},"Log In"),"signUp"!==n&&a.a.createElement(y,{to:"signUp"},a.a.createElement("span",null,"Create an account")))},E=i.a.Option;n.a=function(e){var n=Object(c.b)(),t=(n.t,n.i18n),l=Object(o.useState)("pt_BR"),u=Object(r.a)(l,2),s=u[0],m=u[1];return Object(o.useEffect)(function(){t.changeLanguage(s)},[s]),a.a.createElement(p,{position:e.position},a.a.createElement(f,null,a.a.createElement(b.b,{to:"/"},a.a.createElement("img",{src:d.a,height:36,alt:"Privacy Tools"})),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(v,{page:e.page}),a.a.createElement(i.a,{defaultValue:"pt_BR",size:"large",onChange:function(e){m(e)},style:{width:120,marginLeft:"20px"}},a.a.createElement(E,{value:"en"},"English"),a.a.createElement(E,{value:"pt_BR"},"Portugu\xeas")))))}},125:function(e,n,t){"use strict";var r=t(40),o=t(25),a=t(28);function c(){var e=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  text-align: ",";\n  max-width: ",";\n  margin-left: ",";\n  margin-right: ",";\n  color: ",";\n"]);return c=function(){return e},e}n.a=o.c.p(c(),Object(a.b)("18px"),Object(a.b)("24px"),function(e){return e.centered?"center":"left"},function(e){var n=e.maxWidth;return n?"".concat(n,"px"):"100%"},function(e){return e.maxWidth?"auto":0},function(e){return e.maxWidth?"auto":0},function(e){var n=e.theme;return e.white?n.whiteColor:n.fourthColor})},126:function(e,n,t){e.exports=t.p+"static/media/trubr-logo.9b778ecf.svg"},127:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(124),c=t(29),i=t(126),l=t.n(i),u=t(111),s=t.n(u),p=t(116);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&(t[r[o]]=e[r[o]])}return t},b=function(e){return r.createElement(p.a,null,function(n){var t,o=n.getPrefixCls,a=e.prefixCls,c=e.type,i=void 0===c?"horizontal":c,l=e.orientation,u=void 0===l?"":l,p=e.className,b=e.children,h=e.dashed,x=d(e,["prefixCls","type","orientation","className","children","dashed"]),g=o("divider",a),y=u.length>0?"-"+u:u,v=s()(p,g,"".concat(g,"-").concat(i),(m(t={},"".concat(g,"-with-text").concat(y),b),m(t,"".concat(g,"-dashed"),!!h),t));return r.createElement("div",f({className:v},x),b&&r.createElement("span",{className:"".concat(g,"-inner-text")},b))})},h=t(113),x=t(117),g=t(40);function y(){var e=Object(g.a)(["\n    padding: 72px 0 0;\n\n    .footer-list{\n        margin-top: 36px;\n        h3{\n            margin-bottom: 24px;\n        }\n        li{\n            margin-top: 6px;\n            a{\n                color: ",";\n            }\n        }\n    }\n"]);return y=function(){return e},e}var v=t(25).c.footer(y(),function(e){return e.fourthColor}),E=t(114),O=t(120),w=t(148),j=t(39);var C=function(){var e=Object(c.b)().t;return o.a.createElement(v,null,o.a.createElement(h.a,{centered:!0},e("footer.title")),o.a.createElement(j.b,{to:"/contact"},o.a.createElement(x.a,{as:"span",centered:!0},e("know-more"))),o.a.createElement(E.a,{x:72}),o.a.createElement(b,null),o.a.createElement(E.a,{x:72}),o.a.createElement(O.a,null,o.a.createElement(E.a,{x:36}),o.a.createElement(w.a,{type:"flex",justify:"space-between"},o.a.createElement("a",{href:"/",style:{fontSize:"12px"}},"Powered by",o.a.createElement("img",{src:l.a,height:12,style:{marginLeft:"3px"}})),o.a.createElement("small",null,"Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved")),o.a.createElement(E.a,{x:36})))};n.a=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),e.children,o.a.createElement(C,null))}},148:function(e,n,t){"use strict";var r=t(226);n.a=r.a},150:function(e,n,t){"use strict";t.d(n,"a",function(){return g});var r=t(0),o=t(7),a=t(111),c=t.n(a),i=t(141),l=t(116);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&(t[r[o]]=e[r[o]])}return t},x=o.oneOfType([o.object,o.number]),g=function(e){function n(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=m(this,d(n).apply(this,arguments))).renderCol=function(n){var t,o=n.getPrefixCls,a=e.props,l=a.prefixCls,f=a.span,m=a.order,d=a.offset,b=a.push,x=a.pull,g=a.className,y=a.children,v=h(a,["prefixCls","span","order","offset","push","pull","className","children"]),E=o("col",l),O={};["xs","sm","md","lg","xl","xxl"].forEach(function(e){var n,t={};"number"===typeof a[e]?t.span=a[e]:"object"===p(a[e])&&(t=a[e]||{}),delete v[e],O=s({},O,(u(n={},"".concat(E,"-").concat(e,"-").concat(t.span),void 0!==t.span),u(n,"".concat(E,"-").concat(e,"-order-").concat(t.order),t.order||0===t.order),u(n,"".concat(E,"-").concat(e,"-offset-").concat(t.offset),t.offset||0===t.offset),u(n,"".concat(E,"-").concat(e,"-push-").concat(t.push),t.push||0===t.push),u(n,"".concat(E,"-").concat(e,"-pull-").concat(t.pull),t.pull||0===t.pull),n))});var w=c()(E,(u(t={},"".concat(E,"-").concat(f),void 0!==f),u(t,"".concat(E,"-order-").concat(m),m),u(t,"".concat(E,"-offset-").concat(d),d),u(t,"".concat(E,"-push-").concat(b),b),u(t,"".concat(E,"-pull-").concat(x),x),t),g,O);return r.createElement(i.a.Consumer,null,function(e){var n=e.gutter,t=v.style;return n>0&&(t=s({paddingLeft:n/2,paddingRight:n/2},t)),r.createElement("div",s({},v,{style:t,className:w}),y)})},e}var t,o,a;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,r["Component"]),t=n,(o=[{key:"render",value:function(){return r.createElement(l.a,null,this.renderCol)}}])&&f(t.prototype,o),a&&f(t,a),n}();g.propTypes={span:o.number,order:o.number,offset:o.number,push:o.number,pull:o.number,className:o.string,children:o.node,xs:x,sm:x,md:x,lg:x,xl:x,xxl:x}},173:function(e,n,t){"use strict";var r=t(150);n.a=r.a},225:function(e,n,t){e.exports=t.p+"static/media/banner-header.4223c8de.svg"},233:function(e,n,t){e.exports=t.p+"static/media/blockchain-icon.744548ba.svg"},234:function(e,n,t){e.exports=t.p+"static/media/cookie-icon.7d8e8bde.svg"},235:function(e,n,t){e.exports=t.p+"static/media/consentiment-icon.7698b7ec.svg"},371:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(29),c=t(120),i=t(117),l=t(113),u=t(148),s=t(173),p=t(225),f=t.n(p),m=t(114),d=t(39);var b=function(){var e=Object(a.b)().t;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(u.a,{gutter:36,type:"flex",align:"middle",justify:"space-between"},o.a.createElement(s.a,{xs:24,lg:12},o.a.createElement(l.a,null,e("banner.heading")),o.a.createElement(m.a,{x:24}),o.a.createElement("p",null,e("banner.body")),o.a.createElement(m.a,{x:48}),o.a.createElement(d.b,{to:"/contact"},o.a.createElement(i.a,{as:"span"},e("know-more")))),o.a.createElement(s.a,{xs:24,lg:12},o.a.createElement("img",{src:f.a})))))},h=t(25),x=h.c.div.withConfig({displayName:"styles__StyledTools",componentId:"sc-1856q0c-0"})(["padding:74px 0;background-color:",""],function(e){return e.theme.sixthColor}),g=t(28),y=h.c.div.withConfig({displayName:"styles__StyledToolIconWrapper",componentId:"sc-112auvq-0"})(["position:relative;margin:0 auto 24px;display:flex;justify-content:center;align-items:center;height:144px;width:144px;border-radius:72px;&:after{position:absolute;z-index:1;left:50%;top:50%;height:120px;width:120px;content:'';border-radius:4px;pointer-events:none;border-radius:72px;transform:translate3d(-50%,-50%,0);background-color:",";}img{position:relative;z-index:3;height:90%;width:auto;}"],function(e){return e.theme.secondaryColor}),v=h.c.div.withConfig({displayName:"styles__StyledTool",componentId:"sc-112auvq-1"})(["position:relative;margin:24px 0;padding:24px;border-radius:2px;background-color:",";text-align:center;cursor:pointer;&:after{position:absolute;z-index:1;left:0;top:0;height:100%;width:100%;content:'';border-radius:4px;opacity:0;pointer-events:none;box-shadow:",";transition:opacity .3s cubic-bezier(0,.5,.5,1),transform .1s cubic-bezier(0,.5,.5,1);}&:hover{transform:translate3d(0,-1px,0);&:after{opacity:1;}}"],function(e){return e.theme.whiteColor},function(e){var n=e.theme;return"0 4px 4px ".concat(Object(g.c)(n.primaryColor,.05),", 0 8px 8px  ").concat(Object(g.c)(n.primaryColor,.05),", 0 16px 16px  ").concat(Object(g.c)(n.primaryColor,.05),", 0 32px 32px  ").concat(Object(g.c)(n.primaryColor,.1),", 0 64px 64px ").concat(Object(g.c)(n.primaryColor,.1))});var E=function(e){return o.a.createElement(d.b,{to:e.to},o.a.createElement(v,null,e.children))},O=t(233),w=t.n(O),j=t(234),C=t.n(j),k=t(235),_=t.n(k);var S=function(e){var n=Object(a.b)().t;return o.a.createElement(x,null,o.a.createElement(c.a,null,e.children,o.a.createElement(u.a,{gutter:36,type:"flex",justify:"center"},o.a.createElement(s.a,{xs:24,lg:8},o.a.createElement(E,{to:"/proof-on-concession"},o.a.createElement(y,null,o.a.createElement("img",{src:_.a,alt:"Proof On Concession"})),o.a.createElement(l.b,{centered:!0},n("tools.proof-on-concession.title")),o.a.createElement("p",null,n("tools.proof-on-concession.body")),o.a.createElement(i.b,{as:"span",top:12},n("know-more")))),o.a.createElement(s.a,{xs:24,lg:8},o.a.createElement(E,{to:"/auditing-in-blockchain"},o.a.createElement(y,null,o.a.createElement("img",{src:w.a,alt:"Auditing In Blockchain"})),o.a.createElement(l.b,{centered:!0},n("tools.auditing-in-blockchain.title")),o.a.createElement("p",null,n("tools.auditing-in-blockchain.body")),o.a.createElement(i.b,{as:"span",top:12},n("know-more")))),o.a.createElement(s.a,{xs:24,lg:8},o.a.createElement(E,{to:"/cookie-consent"},o.a.createElement(y,null,o.a.createElement("img",{src:C.a,alt:"Cookie Consent"})),o.a.createElement(l.b,{centered:!0},n("tools.cookie-consent.title")),o.a.createElement("p",null,n("tools.cookie-consent.body")),o.a.createElement(i.b,{as:"span",top:12},n("know-more")))))))},z=t(125),P=t(127);n.default=function(){var e=Object(a.b)().t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,null,o.a.createElement(m.a,{x:96}),o.a.createElement(b,null),o.a.createElement(m.a,{x:72}),o.a.createElement(S,null,o.a.createElement(l.a,{centered:!0},e("tools.section.title")),o.a.createElement(z.a,{centered:!0,maxWidth:480},e("tools.section.headline")))))}}}]);
//# sourceMappingURL=5.aacaa2f2.chunk.js.map