(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{106:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(110);e.a=function(n){return o.a.createElement(a.a,n,n.children)}},107:function(n,e,t){"use strict";t.d(e,"b",function(){return u}),t.d(e,"a",function(){return p});var r=t(37),o=t(25),a=t(27);function i(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n  text-align: ",";\n  color: ",";\n  margin: ",";\n\n ","\n\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  text-align: ",";\n  color: ",";\n\n  @media (min-width: 701px) {\n    font-size: ",";\n    line-height: ",";\n  }\n\n  @media (max-width: 700px) {\n     font-size: ",";\n    line-height: ",";\n  }\n\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 400;\n  overflow-wrap: break-word;\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n"]);return l=function(){return n},n}var u=o.c.h2(l(),function(n){return n.theme.fourthColor},Object(a.b)("36px"),Object(a.b)("36px")),p=o.c.h1(c(),function(n){return n.centered?"center":"left"},function(n){var e=n.theme;return n.white?e.whiteColor:e.fourthColor},Object(a.b)("52px"),Object(a.b)("58px"),Object(a.b)("40px"),Object(a.b)("44px"));o.c.h4(i(),Object(a.b)("18px"),Object(a.b)("24px"),function(n){return n.centered?"center":"left"},function(n){var e=n.theme;return n.white?e.whiteColor:e.fourthColor},function(n){return n.centered?"0 auto":0},function(n){var e=n.maxWidth;return e&&"\n    max-width: ".concat(e,"px\n ")})},108:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(25).c.div.withConfig({displayName:"styles__StyledMargin",componentId:"bqdulz-0"})(["margin:",";"],function(n){return n.x?"".concat(n.x,"px"):"5px"});e.a=function(n){return o.a.createElement(a,{x:n.x})}},110:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var r=t(25).c.div.withConfig({displayName:"styles__StyledContainer",componentId:"mfq7p4-0"})(["position:relative;z-index:2;margin:0 auto;max-width:",";padding:0 24px;"],function(n){return n.maxWidth+"px"||!1})},113:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(37),i=t(25),c=t(27),l=t(36);function u(){var n=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n\n  &:after{\n    box-shadow: ",";\n  }\n  &:hover {\n    span{\n      color: ",";\n    }\n  }\n  &:active {\n    background-color: ",";\n  }\n"]);return u=function(){return n},n}function p(){var n=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  font-size: ",";\n  padding: 0.8rem 2rem;\n\n  &:after{\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    content: '';\n    border-radius: 4px;\n    opacity: 0;\n    box-shadow: ",";\n    transition: opacity .3s cubic-bezier(0,.5,.5,1), transform .1s cubic-bezier(0,.5,.5,1);\n  }\n  &:hover {\n    transform: translate3d(0, -1px, 0);\n    &:after{\n      opacity: 1;\n    }\n    span{\n      color: white\n    }\n  }\n  &:active {\n    transform: translate3d(0, 1px, 0);\n    background-color: ",";\n    &:after{\n      opacity: 0;\n    }\n  }\n  &:disabled {\n    opacity: 0.5;\n    transform: none;\n    &:after{\n      opacity: 0;\n    }\n  }\n"]);return p=function(){return n},n}function s(){var n=Object(a.a)(["\n  border: 2px solid ",";\n  color: ",";\n  padding: 0.5rem 2rem;\n  font-size: 16px;\n  background-color: transparent;\n\n  &:before{\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    height: calc(100% - 4px);\n    width: calc(100% - 4px);\n    content: '';\n    border-radius: 2px;\n    background-color: ",";\n    transition: transform .1s cubic-bezier(0,.5,.5,1);\n    transform: scale3d(1, 0, 1);\n    transform-origin : 50% 0%;\n    color: ",";\n  }\n\n  &:hover {\n    color: ",";\n    &:before{\n      transform: scale3d(1, 1, 1);\n    }\n  }\n"]);return s=function(){return n},n}function m(){var n=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n  margin-top: ",";\n  margin-bottom: ",";\n\n ","\n\n  span{\n    position: relative;\n    color: inherit\n  }\n"]);return m=function(){return n},n}function f(){var n=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  border-radius: 4px;\n  z-index: 3;\n"]);return f=function(){return n},n}Object(i.c)(l.b)(f());var d=i.c.button(m(),function(n){var e=n.top;return e?"".concat(e,"px"):0},function(n){var e=n.bottom;return e?"".concat(e,"px"):0},function(n){return n.centered&&"\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n "}),h=Object(i.c)(d)(s(),function(n){return n.theme.secondaryColor},function(n){return n.theme.secondaryColor},function(n){var e=n.theme;return Object(c.a)(.03,e.secondaryColor)},function(n){return n.theme.secondaryColor},function(n){return n.theme.whiteColor}),b=Object(i.c)(d)(p(),function(n){return n.theme.secondaryColor},function(n){return n.theme.whiteColor},function(n){return n.theme.baseFontSize},function(n){var e=n.theme;return"0 4px 4px ".concat(Object(c.c)(e.secondaryColor,.2),", 0 8px 8px  ").concat(Object(c.c)(e.secondaryColor,.2),", 0 16px 16px ").concat(Object(c.c)(e.secondaryColor,.03),", 0 32px 32px  ").concat(Object(c.a)(.1,Object(c.c)(e.secondaryColor,.1)),", 0 64px 64px ").concat(Object(c.a)(.1,Object(c.c)(e.secondaryColor,.1)))},function(n){var e=n.theme;return Object(c.a)(.03,e.secondaryColor)}),x=Object(i.c)(b)(u(),function(n){return n.theme.whiteColor},function(n){return n.theme.secondaryColor},function(n){var e=n.theme;return"0 4px 4px ".concat(Object(c.c)(e.whiteColor,.2),", 0 8px 8px  ").concat(Object(c.c)(e.whiteColor,.2),", 0 16px 16px ").concat(Object(c.c)(e.whiteColor,.03),", 0 32px 32px  ").concat(Object(c.a)(.1,Object(c.c)(e.whiteColor,.1)),", 0 64px 64px ").concat(Object(c.a)(.1,Object(c.c)(e.whiteColor,.1)))},function(n){return n.theme.secondaryColor},function(n){var e=n.theme;return Object(c.a)(.03,e.whiteColor)});function g(n){return n.white?o.a.createElement(x,n,o.a.createElement("span",null,n.children)):o.a.createElement(b,n,o.a.createElement("span",null,n.children))}function y(n){return o.a.createElement(h,n,o.a.createElement("span",null,n.children))}t.d(e,"a",function(){return g}),t.d(e,"b",function(){return y})},116:function(n,e,t){n.exports=t.p+"static/media/logo.0f5ee2ce.svg"},117:function(n,e,t){n.exports=t.p+"static/media/br.4b39469f.svg"},118:function(n,e,t){n.exports=t.p+"static/media/us.944e5e02.svg"},119:function(n,e,t){n.exports=t.p+"static/media/trubr-logo.9b778ecf.svg"},120:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(25),i=t(110),c=t(27),l=a.c.header.withConfig({displayName:"styles__StyledHeader",componentId:"pp62kf-0"})(["position:",";z-index:10;top:0;left:0;width:100%;min-height:56px;padding:10px 0;background-color:",";backdrop-filter:blur(3px);"],function(n){var e=n.position;return e||"fixed"},function(n){return Object(c.c)(n.theme.whiteColor,.6)}),u=Object(a.c)(i.a).withConfig({displayName:"styles__StyledHeaderContainer",componentId:"pp62kf-1"})(["display:flex;justify-content:space-between;"]),p=t(116),s=t.n(p),m=t(126),f=t(128),d=t(136),h=t(133),b=t(135),x=t(26),g=t(36),y=a.c.div.withConfig({displayName:"styles__StyledMenu",componentId:"qn6uix-0"})(["@media (min-width:701px){display:flex;align-items:center;}@media (max-width:700px){position:fixed;opacity:",";top:0;right:0;z-index:99;width:100vw;min-height:100vh;padding:76px 24px 24px;background:",";"," transform:",";transition:transform .13s cubic-bezier(.215,.61,.355,1) .25s;box-shadow:",";a{display:block;}}"],function(n){return n.open?1:0},function(n){return n.theme.thirdColor},function(n){return!n.open&&"pointer-events: none;"},function(n){return n.open?"translate3d(0,0,0)":"translate3d(110%,0,0)"},function(n){var e=n.theme;return"-4px 0 4px ".concat(Object(c.c)(e.primaryColor,.05),", -8px 0 8px  ").concat(Object(c.c)(e.primaryColor,.05),", -16px 0 16px  ").concat(Object(c.c)(e.primaryColor,.05),", -32px 0 32px  ").concat(Object(c.c)(e.primaryColor,.1),",-64px 0 64px ").concat(Object(c.c)(e.primaryColor,.1))}),v=Object(a.c)(g.b).withConfig({displayName:"styles__StyledMenuItem",componentId:"qn6uix-1"})(["font-weight:300;@media (min-width:701px){margin:0 24px 0 0;}@media (max-width:700px){margin:12px 0 24px;display:block;}"]),w=a.c.div.withConfig({displayName:"styles__StyledSpacer",componentId:"qn6uix-2"})(["margin:0 12px;"]),O=Object(a.c)(g.b).withConfig({displayName:"styles__StyledLoginButton",componentId:"qn6uix-3"})(["position:relative;padding:0.4rem 1.4rem;border-radius:4px;border:2px solid ",";span{position:relative;color:",";}&:before{position:absolute;left:2px;top:2px;height:calc(100% - 4px);width:calc(100% - 4px);content:'';border-radius:2px;background-color:",";transition:transform 0.1s cubic-bezier(0,0.5,0.5,1);transform:scale3d(1,0,1);transform-origin:50% 100%;color:",";}&:hover{color:",";&:before{transform:scale3d(1,1,1);}span{color:",";}}"],function(n){return n.theme.secondaryColor},function(n){return n.theme.secondaryColor},function(n){var e=n.theme;return Object(c.a)(.03,e.secondaryColor)},function(n){return n.theme.secondaryColor},function(n){return n.theme.whiteColor},function(n){return n.theme.whiteColor}),j=a.c.div.withConfig({displayName:"styles__StyledHamburgerMenu",componentId:"qn6uix-4"})(["position:relative;margin-top:2px;margin-left:12px;z-index:999;display:inline-block;width:40px;height:24px;cursor:pointer;@media (min-width:701px){display:none}.hamburger-inner{position:absolute;top:auto;bottom:0;display:block;margin-top:-2px;width:40px;height:4px;transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;background-color:",";"," "," &:after,&:before{position:absolute;width:40px;height:4px;display:block;content:'';transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;background-color:",";}&:after{"," "," "," ","}&:before{"," "," "," ","}}"],function(n){return n.theme.secondaryColor},function(n){return n.open&&"transform: translate3d(0,-10px,0) rotate(-45deg);"},function(n){return n.open&&"transition-timing-function: cubic-bezier(.215,.61,.355,1);"},function(n){return n.theme.secondaryColor},function(n){return n.open&&"top: 0;"},function(n){return!n.open&&"top: -10px;"},function(n){return n.open&&"transition: top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s; transform: rotate(-90deg);"},function(n){return!n.open&&"transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear; "},function(n){return n.open&&"bottom: 0;"},function(n){return n.open&&"transition: top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s; opacity: 0"},function(n){return!n.open&&"top: -20px;"},function(n){return!n.open&&"transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, opacity 0.1s linear;"}),E=t(127),C=t(423),k=a.c.span.withConfig({displayName:"styles__StyledOption",componentId:"sc-6vvufw-0"})(["display:flex;height:100%;align-items:center;img{margin-right:5px;border-radius:20px;}@media (max-width:700px){span{display:none;}}"]),z=Object(a.c)(C.a).withConfig({displayName:"styles__StyledSelector",componentId:"sc-6vvufw-1"})(["background:transparent;@media (min-width:700px){width:150px;}"]),_=t(117),S=t.n(_),I=t(118),P=t.n(I),N=C.a.Option;var M=function(){var n=Object(x.c)().i18n,e=Object(r.useState)("pt_BR"),t=Object(E.a)(e,2),a=t[0],i=t[1];return Object(r.useEffect)(function(){n.changeLanguage(a)},[n,a]),o.a.createElement(z,{defaultValue:"pt_BR",size:"large",onChange:function(n){i(n)},style:{marginLeft:"20px",marginTop:0}},o.a.createElement(N,{value:"en"},o.a.createElement(k,null,o.a.createElement("img",{src:P.a,height:20,width:20,alt:"English"}),o.a.createElement("span",null,"English"))),o.a.createElement(N,{value:"pt_BR"},o.a.createElement(k,null,o.a.createElement("img",{src:S.a,height:20,width:20,alt:"Portugu\xeas"}),o.a.createElement("span",null,"Portugu\xeas"))))},q=function(n){function e(){var n,t;Object(m.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(d.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(o)))).state={openMenu:!1},t.setOpenMenu=function(n){return t.setState(function(){return{openMenu:n}})},t}return Object(b.a)(e,n),Object(f.a)(e,[{key:"render",value:function(){var n=this,e=this.state.openMenu,t=this.props,r=t.page,a=t.t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{open:e},o.a.createElement(v,{to:"contact"},a("menu.itens.email")),o.a.createElement(w,null),"login"!==r&&o.a.createElement(v,{to:"login"},a("menu.itens.login")),"signUp"!==r&&o.a.createElement(O,{to:"signUp"},o.a.createElement("span",null,a("menu.itens.create")))),o.a.createElement(M,null),o.a.createElement(j,{open:e,onClick:function(){return n.setOpenMenu(!e)}},o.a.createElement("div",{className:"hamburger-inner"})))}}]),e}(r.PureComponent),R=Object(x.d)()(o.a.memo(q));e.a=function(n){return o.a.createElement(l,{position:n.position},o.a.createElement(u,null,o.a.createElement(g.b,{to:"/"},o.a.createElement("img",{src:s.a,height:56,alt:"Privacy Tools - LGPD - GDPR - CCPA",title:"Privacy Tools - LGPD - GDPR - CCPA"})),o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(R,{page:n.page}))))}},121:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(26),i=(t(119),t(107)),c=t(113),l=t(37),u=t(25),p=t(36),s=t(106);function m(){var n=Object(l.a)(["\n\tmargin: 0 0 0 12px;\n"]);return m=function(){return n},n}function f(){var n=Object(l.a)(["\n\tfont-weight: 300;\n\tdisplay: block;\n\tcolor: ",";\n\n\t@media (min-width: 701px) {\n\t\tmargin: 0 24px 0 0;\n\t}\n\n\t@media (max-width: 700px) {\n\t\tmargin: 0 0 24px 0;\n\t}\n"]);return f=function(){return n},n}function d(){var n=Object(l.a)(["\n\t@media (min-width: 701px) {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t@media (max-width: 700px) {\n\t\tdisplay: block;\n\t}\n"]);return d=function(){return n},n}function h(){var n=Object(l.a)(["\n\tpadding: 72px 0 0;\n\n\t.footer-list {\n\t\tmargin-top: 36px;\n\t\th3 {\n\t\t\tmargin-bottom: 24px;\n\t\t}\n\t\tli {\n\t\t\tmargin-top: 6px;\n\t\t\ta {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t}\n\t}\n"]);return h=function(){return n},n}function b(){var n=Object(l.a)(["\n\tpadding: 72px 24px;\n\tbackground: ",";\n"]);return b=function(){return n},n}var x=Object(u.c)(s.a)(b(),function(n){return n.theme.secondaryColor}),g=u.c.footer(h(),function(n){return n.fourthColor}),y=u.c.div(d()),v=Object(u.c)(p.b)(f(),function(n){return n.theme.thirdColor}),w=u.c.a(m()),O=g,j=t(108),E=t(132),C=t(415);var k=function(){return Object(a.c)().t,o.a.createElement(y,null,o.a.createElement(v,{to:"/terms-of-use"},"Terms of Use"),o.a.createElement(v,{to:"/privacy-policy"},"Privacy Policy"))};E.a.IconFont;e.a=function(){var n=Object(a.c)().t;return o.a.createElement(O,null,o.a.createElement(i.a,{centered:!0},n("footer.title")),o.a.createElement(p.b,{to:"/contact"},o.a.createElement(c.a,{as:"span",centered:!0},n("know-more"))),o.a.createElement(j.a,{x:72}),o.a.createElement(x,null,o.a.createElement(j.a,{x:36}),o.a.createElement(C.a,{type:"flex",justify:"space-between"},o.a.createElement(k,null),o.a.createElement("div",null,o.a.createElement(w,{href:"https://www.linkedin.com/company/privacy-tools/",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"24px",color:"#fff"}},o.a.createElement(E.a,{type:"linkedin"})),o.a.createElement(w,{href:"https://www.facebook.com/privacytoolsgdpr/",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"24px",color:"#fff"}},o.a.createElement(E.a,{type:"facebook"})),o.a.createElement(w,{href:"https://twitter.com/ToolsPrivacy",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"24px",color:"#fff"}},o.a.createElement(E.a,{type:"twitter"})))),o.a.createElement(j.a,{x:24}),o.a.createElement(C.a,{type:"flex",justify:"space-between"},o.a.createElement("a",{href:"/",style:{fontSize:"12px",color:"#fff"}}," ","Uma empresa do",o.a.createElement("img",{src:"http://www.trubr.com/wp-content/themes/maven/img/logo%20grupo%20maven.png",height:24,style:{marginLeft:"3px"},alt:"Maven"})),o.a.createElement("small",{style:{color:"#fff"}},"Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved"))))}},123:function(n,e,t){"use strict";var r=t(37),o=t(25),a=t(27);function i(){var n=Object(r.a)(["\n  font-size: ",";\n  line-height: ",";\n  text-align: ",";\n  max-width: ",";\n  margin-left: ",";\n  margin-right: ",";\n  color: ",";\n"]);return i=function(){return n},n}e.a=o.c.p(i(),Object(a.b)("18px"),Object(a.b)("24px"),function(n){return n.centered?"center":"left"},function(n){var e=n.maxWidth;return e?"".concat(e,"px"):"100%"},function(n){return n.maxWidth?"auto":0},function(n){return n.maxWidth?"auto":0},function(n){var e=n.theme;return n.white?e.whiteColor:e.fourthColor})},124:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(120),i=t(121);e.a=o.a.memo(function(n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),n.children,o.a.createElement(i.a,null))})},421:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(26),i=t(108),c=t(107),l=t(106),u=(t(123),t(124)),p=t(194);e.default=function(n){var e=Object(a.c)().t;return Object(r.useEffect)(function(){window.scrollTo(0,0)},[n.location]),o.a.createElement(o.a.Fragment,null,o.a.createElement(p.Helmet,null,o.a.createElement("title",null,e("head.home.title")),o.a.createElement("description",null,e("head.home.description"))),o.a.createElement(u.a,null,o.a.createElement(i.a,{x:120}),o.a.createElement(l.a,{maxWidth:860},o.a.createElement(c.a,null,e("terms-and-use.title")),o.a.createElement(a.a,{i18nKey:"terms-and-use.body"})),o.a.createElement(i.a,{x:36})))}}}]);
//# sourceMappingURL=15.8db5399d.chunk.js.map