import{_ as wn}from"./CeBaQb7G.js";import{v as dt,C as kn,s as G,x as An,r as wt,H as Sn,g as oe,D as se,c as kt,o as At,j as On,a as d,b as y,k as E,w,d as k,n as St,F as Cn,A as Pn,t as En,I as _n}from"./CBgaBtS2.js";/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var it={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:a,iconNode:r,name:o,class:s,...l},{slots:c})=>dt("svg",{...it,width:t||it.width,height:t||it.height,stroke:a||it.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${In(o??"icon")}`],...l},[...r.map(u=>dt(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=(t,e)=>(n,{slots:a})=>dt(Nn,{...n,iconNode:e,name:t},a);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=Tn("ChevronsUpIcon",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Fn(t,e,n){return(e=zn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ie(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ie(Object(n),!0).forEach(function(a){Fn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ln(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zn(t){var e=Ln(t,"string");return typeof e=="symbol"?e:e+""}const le=()=>{};let Xt={},De={},je=null,Re={mark:le,measure:le};try{typeof window<"u"&&(Xt=window),typeof document<"u"&&(De=document),typeof MutationObserver<"u"&&(je=MutationObserver),typeof performance<"u"&&(Re=performance)}catch{}const{userAgent:fe=""}=Xt.navigator||{},B=Xt,v=De,ce=je,lt=Re;B.document;const j=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",Be=~fe.indexOf("MSIE")||~fe.indexOf("Trident/");var Dn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,jn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ue={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Rn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ye=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],O="classic",ht="duotone",Bn="sharp",Un="sharp-duotone",We=[O,ht,Bn,Un],Yn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Wn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Hn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Vn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},$n=["fak","fa-kit","fakd","fa-kit-duotone"],ue={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Gn=["kit"],Xn={kit:{"fa-kit":"fak"}},Kn=["fak","fakd"],qn={kit:{fak:"fa-kit"}},de={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Qn=["fak","fa-kit","fakd","fa-kit-duotone"],Jn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ta={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ea={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Nt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},na=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Tt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Zn,...na],aa=["solid","regular","light","thin","duotone","brands"],He=[1,2,3,4,5,6,7,8,9,10],ra=He.concat([11,12,13,14,15,16,17,18,19,20]),oa=[...Object.keys(ea),...aa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY].concat(He.map(t=>"".concat(t,"x"))).concat(ra.map(t=>"w-".concat(t))),sa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const z="___FONT_AWESOME___",Mt=16,Ve="fa",$e="svg-inline--fa",V="data-fa-i2svg",Ft="data-fa-pseudo-element",ia="data-fa-pseudo-element-pending",Kt="data-prefix",qt="data-icon",me="fontawesome-i2svg",la="async",fa=["HTML","HEAD","STYLE","SCRIPT"],Ge=(()=>{try{return!0}catch{return!1}})();function rt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[O]}})}const Xe=f({},Ue);Xe[O]=f(f(f(f({},{"fa-duotone":"duotone"}),Ue[O]),ue.kit),ue["kit-duotone"]);const ca=rt(Xe),Lt=f({},Vn);Lt[O]=f(f(f(f({},{duotone:"fad"}),Lt[O]),de.kit),de["kit-duotone"]);const pe=rt(Lt),zt=f({},Nt);zt[O]=f(f({},zt[O]),qn.kit);const Zt=rt(zt),Dt=f({},ta);Dt[O]=f(f({},Dt[O]),Xn.kit);rt(Dt);const ua=Dn,Ke="fa-layers-text",da=jn,ma=f({},Yn);rt(ma);const pa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot=Rn,ga=[...Gn,...oa],tt=B.FontAwesomeConfig||{};function ha(t){var e=v.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ba(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ba(ha(n));r!=null&&(tt[a]=r)});const qe={styleDefault:"solid",familyDefault:O,cssPrefix:Ve,replacementClass:$e,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);const Z=f(f({},qe),tt);Z.autoReplaceSvg||(Z.observeMutations=!1);const m={};Object.keys(qe).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){Z[t]=e,et.forEach(n=>n(m))},get:function(){return Z[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){Z.cssPrefix=t,et.forEach(e=>e(m))},get:function(){return Z.cssPrefix}});B.FontAwesomeConfig=m;const et=[];function ya(t){return et.push(t),()=>{et.splice(et.indexOf(t),1)}}const R=Mt,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function va(t){if(!t||!j)return;const e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=v.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return v.head.insertBefore(e,a),t}const xa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nt(){let t=12,e="";for(;t-- >0;)e+=xa[Math.random()*62|0];return e}function Q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Qt(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ze(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ze(t[n]),'" '),"").trim()}function bt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Jt(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function ka(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:u}}function Aa(t){let{transform:e,width:n=Mt,height:a=Mt,startCentered:r=!1}=t,o="";return r&&Be?o+="translate(".concat(e.x/R-n/2,"em, ").concat(e.y/R-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/R,"em), calc(-50% + ").concat(e.y/R,"em)) "):o+="translate(".concat(e.x/R,"em, ").concat(e.y/R,"em) "),o+="scale(".concat(e.size/R*(e.flipX?-1:1),", ").concat(e.size/R*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Qe(){const t=Ve,e=$e,n=m.cssPrefix,a=m.replacementClass;let r=Sa;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let ge=!1;function Ct(){m.autoAddCss&&!ge&&(va(Qe()),ge=!0)}var Oa={mixout(){return{dom:{css:Qe,insertCss:Ct}}},hooks(){return{beforeDOMElementCreation(){Ct()},beforeI2svg(){Ct()}}}};const D=B||{};D[z]||(D[z]={});D[z].styles||(D[z].styles={});D[z].hooks||(D[z].hooks={});D[z].shims||(D[z].shims=[]);var F=D[z];const Je=[],tn=function(){v.removeEventListener("DOMContentLoaded",tn),mt=1,Je.map(t=>t())};let mt=!1;j&&(mt=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),mt||v.addEventListener("DOMContentLoaded",tn));function Ca(t){j&&(mt?setTimeout(t,0):Je.push(t))}function ot(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ze(t):"<".concat(e," ").concat(wa(n),">").concat(a.map(ot).join(""),"</").concat(e,">")}function he(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Pt=function(e,n,a,r){var o=Object.keys(e),s=o.length,l=n,c,u,i;for(a===void 0?(c=1,i=e[o[0]]):(c=0,i=a);c<s;c++)u=o[c],i=l(i,e[u],u,e);return i};function Pa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function jt(t){const e=Pa(t);return e.length===1?e[0].toString(16):null}function Ea(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function be(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Rt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=be(e);typeof F.hooks.addPack=="function"&&!a?F.hooks.addPack(t,be(e)):F.styles[t]=f(f({},F.styles[t]||{}),r),t==="fas"&&Rt("fa",e)}const{styles:at,shims:_a}=F,en=Object.keys(Zt),Ia=en.reduce((t,e)=>(t[e]=Object.keys(Zt[e]),t),{});let te=null,nn={},an={},rn={},on={},sn={};function Na(t){return~ga.indexOf(t)}function Ta(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Na(r)?r:null}const ln=()=>{const t=a=>Pt(at,(r,o,s)=>(r[s]=Pt(o,a,{}),r),{});nn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=o}),a)),an=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=o}),a)),sn=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(l=>{a[l]=o}),a});const e="far"in at||m.autoFetchSvg,n=Pt(_a,(a,r)=>{const o=r[0];let s=r[1];const l=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});rn=n.names,on=n.unicodes,te=yt(m.styleDefault,{family:m.familyDefault})};ya(t=>{te=yt(t.styleDefault,{family:m.familyDefault})});ln();function ee(t,e){return(nn[t]||{})[e]}function Ma(t,e){return(an[t]||{})[e]}function H(t,e){return(sn[t]||{})[e]}function fn(t){return rn[t]||{prefix:null,iconName:null}}function Fa(t){const e=on[t],n=ee("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return te}const cn=()=>({prefix:null,iconName:null,rest:[]});function La(t){let e=O;const n=en.reduce((a,r)=>(a[r]="".concat(m.cssPrefix,"-").concat(r),a),{});return We.forEach(a=>{(t.includes(n[a])||t.some(r=>Ia[a].includes(r)))&&(e=a)}),e}function yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=O}=e,a=ca[n][t];if(n===ht&&!t)return"fad";const r=pe[n][t]||pe[n][a],o=t in F.styles?t:null;return r||o||null}function za(t){let e=[],n=null;return t.forEach(a=>{const r=Ta(m.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function ye(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function vt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Tt.concat(Qn),o=ye(t.filter(p=>r.includes(p))),s=ye(t.filter(p=>!Tt.includes(p))),l=o.filter(p=>(a=p,!Ye.includes(p))),[c=null]=l,u=La(o),i=f(f({},za(s)),{},{prefix:yt(c,{family:u})});return f(f(f({},i),Ba({values:t,family:u,styles:at,config:m,canonical:i,givenPrefix:a})),Da(n,a,i))}function Da(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?fn(r):{},s=H(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!at.far&&at.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ja=We.filter(t=>t!==O||t!==ht),Ra=Object.keys(Nt).filter(t=>t!==O).map(t=>Object.keys(Nt[t])).flat();function Ba(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,l=n===ht,c=e.includes("fa-duotone")||e.includes("fad"),u=s.familyDefault==="duotone",i=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(c||u||i)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ja.includes(n)&&(Object.keys(o).find(b=>Ra.includes(b))||s.autoFetchSvg)){const b=Hn.get(n).defaultShortPrefixId;a.prefix=b,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=U()||"fas"),a}class Ua{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=f(f({},this.definitions[o]||{}),r[o]),Rt(o,r[o]);const s=Zt[O][o];s&&Rt(s,r[o]),ln()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:l}=a[r],c=l[2];e[o]||(e[o]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[o][u]=l)}),e[o][s]=l}),e}}let ve=[],K={};const q={},Ya=Object.keys(q);function Wa(t,e){let{mixoutsTo:n}=e;return ve=t,K={},Object.keys(q).forEach(a=>{Ya.indexOf(a)===-1&&delete q[a]}),ve.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{K[s]||(K[s]=[]),K[s].push(o[s])})}a.provides&&a.provides(q)}),n}function Bt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(K[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function $(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(K[t]||[]).forEach(o=>{o.apply(null,n)})}function Y(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return q[t]?q[t].apply(null,e):void 0}function Ut(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||U();if(e)return e=H(n,e)||e,he(un.definitions,n,e)||he(F.styles,n,e)}const un=new Ua,Ha=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,$("noAuto")},Va={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?($("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ca(()=>{Ga({autoReplaceSvgRoot:e}),$("watch",t)})}},$a={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=yt(t[0]);return{prefix:n,iconName:H(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(ua))){const e=vt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||U(),iconName:H(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=U();return{prefix:e,iconName:H(e,t)||t}}}},_={noAuto:Ha,config:m,dom:Va,parse:$a,library:un,findIconDefinition:Ut,toHtml:ot},Ga=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=v}=t;(Object.keys(F.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&_.dom.i2svg({node:e})};function xt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ot(n))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;const n=v.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Xa(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(Jt(s)&&n.found&&!a.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};r.style=bt(f(f({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ka(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:s}),children:a}]}]}function ne(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:l,maskId:c,titleId:u,extra:i,watchable:p=!1}=t,{width:b,height:A}=n.found?n:e,T=Kn.includes(a),N=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(I=>i.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(i.classes).join(" ");let C={children:[],attributes:f(f({},i.attributes),{},{"data-prefix":a,"data-icon":r,class:N,role:i.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(A)})};const g=T&&!~i.classes.indexOf("fa-fw")?{width:"".concat(b/A*16*.0625,"em")}:{};p&&(C.attributes[V]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||nt())},children:[l]}),delete C.attributes.title);const h=f(f({},C),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:o,symbol:s,styles:f(f({},g),i.styles)}),{children:x,attributes:S}=n.found&&e.found?Y("generateAbstractMask",h)||{children:[],attributes:{}}:Y("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=x,h.attributes=S,s?Ka(h):Xa(h)}function xe(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:l=!1}=t,c=f(f(f({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(c[V]="");const u=f({},s.styles);Jt(r)&&(u.transform=Aa({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);const i=bt(u);i.length>0&&(c.style=i);const p=[];return p.push({tag:"span",attributes:c,children:[e]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function qa(t){const{content:e,title:n,extra:a}=t,r=f(f(f({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=bt(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Et}=F;function Yt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Za={found:!1,width:512,height:512};function Qa(t,e){!Ge&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wt(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=U()),new Promise((a,r)=>{if(n==="fa"){const o=fn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Et[e]&&Et[e][t]){const o=Et[e][t];return a(Yt(o))}Qa(t,e),a(f(f({},Za),{},{icon:m.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}const we=()=>{},Ht=m.measurePerformance&&lt&&lt.mark&&lt.measure?lt:{mark:we,measure:we},J='FA "6.7.2"',Ja=t=>(Ht.mark("".concat(J," ").concat(t," begins")),()=>dn(t)),dn=t=>{Ht.mark("".concat(J," ").concat(t," ends")),Ht.measure("".concat(J," ").concat(t),"".concat(J," ").concat(t," begins"),"".concat(J," ").concat(t," ends"))};var ae={begin:Ja,end:dn};const ct=()=>{};function ke(t){return typeof(t.getAttribute?t.getAttribute(V):null)=="string"}function tr(t){const e=t.getAttribute?t.getAttribute(Kt):null,n=t.getAttribute?t.getAttribute(qt):null;return e&&n}function er(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function nr(){return m.autoReplaceSvg===!0?ut.replace:ut[m.autoReplaceSvg]||ut.replace}function ar(t){return v.createElementNS("http://www.w3.org/2000/svg",t)}function rr(t){return v.createElement(t)}function mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ar:rr}=e;if(typeof t=="string")return v.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(mn(o,{ceFn:n}))}),a}function or(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ut={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(mn(n),e)}),e.getAttribute(V)===null&&m.keepOriginalSource){let n=v.createComment(or(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Qt(e).indexOf(m.replacementClass))return ut.replace(t);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>ot(o)).join(`
`);e.setAttribute(V,""),e.innerHTML=r}};function Ae(t){t()}function pn(t,e){const n=typeof e=="function"?e:ct;if(t.length===0)n();else{let a=Ae;m.mutateApproach===la&&(a=B.requestAnimationFrame||Ae),a(()=>{const r=nr(),o=ae.begin("mutate");t.map(r),o(),n()})}}let re=!1;function gn(){re=!0}function Vt(){re=!1}let pt=null;function Se(t){if(!ce||!m.observeMutations)return;const{treeCallback:e=ct,nodeCallback:n=ct,pseudoElementsCallback:a=ct,observeMutationsRoot:r=v}=t;pt=new ce(o=>{if(re)return;const s=U();Q(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!ke(l.addedNodes[0])&&(m.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&m.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&ke(l.target)&&~pa.indexOf(l.attributeName))if(l.attributeName==="class"&&tr(l.target)){const{prefix:c,iconName:u}=vt(Qt(l.target));l.target.setAttribute(Kt,c||s),u&&l.target.setAttribute(qt,u)}else er(l.target)&&n(l.target)})}),j&&pt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function sr(){pt&&pt.disconnect()}function ir(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function lr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=vt(Qt(t));return r.prefix||(r.prefix=U()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ma(r.prefix,t.innerText)||ee(r.prefix,jt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function fr(t){const e=Q(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||nt()):(e["aria-hidden"]="true",e.focusable="false")),e}function cr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=lr(t),o=fr(t),s=Bt("parseNodeAttributes",{},t);let l=e.styleParser?ir(t):[];return f({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},s)}const{styles:ur}=F;function hn(t){const e=m.autoReplaceSvg==="nest"?Oe(t,{styleParser:!1}):Oe(t);return~e.extra.classes.indexOf(Ke)?Y("generateLayersText",t,e):Y("generateSvgReplacementMutation",t,e)}function dr(){return[...$n,...Tt]}function Ce(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();const n=v.documentElement.classList,a=i=>n.add("".concat(me,"-").concat(i)),r=i=>n.remove("".concat(me,"-").concat(i)),o=m.autoFetchSvg?dr():Ye.concat(Object.keys(ur));o.includes("fa")||o.push("fa");const s=[".".concat(Ke,":not([").concat(V,"])")].concat(o.map(i=>".".concat(i,":not([").concat(V,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=Q(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const c=ae.begin("onTree"),u=l.reduce((i,p)=>{try{const b=hn(p);b&&i.push(b)}catch(b){Ge||b.name==="MissingIcon"&&console.error(b)}return i},[]);return new Promise((i,p)=>{Promise.all(u).then(b=>{pn(b,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),i()})}).catch(b=>{c(),p(b)})})}function mr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hn(t).then(n=>{n&&pn([n],e)})}function pr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ut(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ut(r||{})),t(a,f(f({},n),{},{mask:r}))}}const gr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=M,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:l=null,classes:c=[],attributes:u={},styles:i={}}=e;if(!t)return;const{prefix:p,iconName:b,icon:A}=t;return xt(f({type:"icon"},t),()=>($("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?u["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(l||nt()):(u["aria-hidden"]="true",u.focusable="false")),ne({icons:{main:Yt(A),mask:r?Yt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:b,transform:f(f({},M),n),symbol:a,title:s,maskId:o,titleId:l,extra:{attributes:u,styles:i,classes:c}})))};var hr={mixout(){return{icon:pr(gr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ce,t.nodeCallback=mr,t}}},provides(t){t.i2svg=function(e){const{node:n=v,callback:a=()=>{}}=e;return Ce(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:l,symbol:c,mask:u,maskId:i,extra:p}=n;return new Promise((b,A)=>{Promise.all([Wt(a,s),u.iconName?Wt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[N,C]=T;b([e,ne({icons:{main:N,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:i,title:r,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const l=bt(s);l.length>0&&(a.style=l);let c;return Jt(o)&&(c=Y("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},br={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return xt({type:"layer"},()=>{$("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},yr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return xt({type:"counter",content:t},()=>($("beforeDOMElementCreation",{content:t,params:e}),qa({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},vr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=M,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return xt({type:"text",content:t},()=>($("beforeDOMElementCreation",{content:t,params:e}),xe({content:t,transform:f(f({},M),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,l=null;if(Be){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/c,l=u.height/c}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,xe({content:e.innerHTML,width:s,height:l,transform:r,title:a,extra:o,watchable:!0})])}}};const xr=new RegExp('"',"ug"),Pe=[1105920,1112319],Ee=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Wn),sa),Jn),$t=Object.keys(Ee).reduce((t,e)=>(t[e.toLowerCase()]=Ee[e],t),{}),wr=Object.keys($t).reduce((t,e)=>{const n=$t[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function kr(t){const e=t.replace(xr,""),n=Ea(e,0),a=n>=Pe[0]&&n<=Pe[1],r=e.length===2?e[0]===e[1]:!1;return{value:jt(r?e[0]:e),isSecondary:a||r}}function Ar(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return($t[n]||{})[r]||wr[n]}function _e(t,e){const n="".concat(ia).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=Q(t.children).filter(b=>b.getAttribute(Ft)===e)[0],l=B.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(da),i=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(s&&!u)return t.removeChild(s),a();if(u&&p!=="none"&&p!==""){const b=l.getPropertyValue("content");let A=Ar(c,i);const{value:T,isSecondary:N}=kr(b),C=u[0].startsWith("FontAwesome");let g=ee(A,T),h=g;if(C){const x=Fa(T);x.iconName&&x.prefix&&(g=x.iconName,A=x.prefix)}if(g&&!N&&(!s||s.getAttribute(Kt)!==A||s.getAttribute(qt)!==h)){t.setAttribute(n,h),s&&t.removeChild(s);const x=cr(),{extra:S}=x;S.attributes[Ft]=e,Wt(g,A).then(I=>{const st=ne(f(f({},x),{},{icons:{main:I,mask:cn()},prefix:A,iconName:h,extra:S,watchable:!0})),W=v.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=st.map(xn=>ot(xn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Sr(t){return Promise.all([_e(t,"::before"),_e(t,"::after")])}function Or(t){return t.parentNode!==document.head&&!~fa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ft)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ie(t){if(j)return new Promise((e,n)=>{const a=Q(t.querySelectorAll("*")).filter(Or).map(Sr),r=ae.begin("searchPseudoElements");gn(),Promise.all(a).then(()=>{r(),Vt(),e()}).catch(()=>{r(),Vt(),n()})})}var Cr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ie,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=v}=e;m.searchPseudoElements&&Ie(n)}}};let Ne=!1;var Pr={mixout(){return{dom:{unwatch(){gn(),Ne=!0}}}},hooks(){return{bootstrap(){Se(Bt("mutationObserverCallbacks",{}))},noAuto(){sr()},watch(t){const{observeMutationsRoot:e}=t;Ne?Vt():Se(Bt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Te=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Er={mixout(){return{parse:{transform:t=>Te(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Te(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),i={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:i,path:p};return{tag:"g",attributes:f({},b.outer),children:[{tag:"g",attributes:f({},b.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),b.path)}]}]}}}};const _t={x:0,y:0,width:"100%",height:"100%"};function Me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function _r(t){return t.tag==="g"?t.children:[t]}var Ir={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?vt(n.split(" ").map(r=>r.trim())):cn();return a.prefix||(a.prefix=U()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:l}=e;const{width:c,icon:u}=r,{width:i,icon:p}=o,b=ka({transform:l,containerWidth:i,iconWidth:c}),A={tag:"rect",attributes:f(f({},_t),{},{fill:"white"})},T=u.children?{children:u.children.map(Me)}:{},N={tag:"g",attributes:f({},b.inner),children:[Me(f({tag:u.tag,attributes:f(f({},u.attributes),b.path)},T))]},C={tag:"g",attributes:f({},b.outer),children:[N]},g="mask-".concat(s||nt()),h="clip-".concat(s||nt()),x={tag:"mask",attributes:f(f({},_t),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,C]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:_r(p)},x]};return n.push(S,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(g,")")},_t)}),{children:n,attributes:a}}}},Nr={provides(t){let e=!1;B.matchMedia&&(e=B.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=f(f({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Tr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Mr=[Oa,hr,br,yr,vr,Cr,Pr,Er,Ir,Nr,Tr];Wa(Mr,{mixoutsTo:_});_.noAuto;_.config;_.library;_.dom;const Gt=_.parse;_.findIconDefinition;_.toHtml;const Fr=_.icon;_.layer;_.text;_.counter;function Fe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fe(Object(n),!0).forEach(function(a){P(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Lr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zr(t){var e=Lr(t,"string");return typeof e=="symbol"?e:e+""}function gt(t){"@babel/helpers - typeof";return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gt(t)}function P(t,e,n){return e=zr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Dr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function jr(t,e){if(t==null)return{};var n=Dr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bn={exports:{}};(function(t){(function(e){var n=function(g,h,x){if(!u(h)||p(h)||b(h)||A(h)||c(h))return h;var S,I=0,st=0;if(i(h))for(S=[],st=h.length;I<st;I++)S.push(n(g,h[I],x));else{S={};for(var W in h)Object.prototype.hasOwnProperty.call(h,W)&&(S[g(W,x)]=n(g,h[W],x))}return S},a=function(g,h){h=h||{};var x=h.separator||"_",S=h.split||/(?=[A-Z])/;return g.split(S).join(x)},r=function(g){return T(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(h,x){return x?x.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},o=function(g){var h=r(g);return h.substr(0,1).toUpperCase()+h.substr(1)},s=function(g,h){return a(g,h).toLowerCase()},l=Object.prototype.toString,c=function(g){return typeof g=="function"},u=function(g){return g===Object(g)},i=function(g){return l.call(g)=="[object Array]"},p=function(g){return l.call(g)=="[object Date]"},b=function(g){return l.call(g)=="[object RegExp]"},A=function(g){return l.call(g)=="[object Boolean]"},T=function(g){return g=g-0,g===g},N=function(g,h){var x=h&&"process"in h?h.process:h;return typeof x!="function"?g:function(S,I){return x(S,g,I)}},C={camelize:r,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(g,h){return n(N(r,h),g)},decamelizeKeys:function(g,h){return n(N(s,h),g,h)},pascalizeKeys:function(g,h){return n(N(o,h),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=C:e.humps=C})(Rr)})(bn);var Br=bn.exports,Ur=["class","style"];function Yr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Br.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return e[r]=o,e},{})}function Wr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function yn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return yn(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,u){var i=t.attributes[u];switch(u){case"class":c.class=Wr(i);break;case"style":c.style=Yr(i);break;default:c.attrs[u]=i}return c},{attrs:{},class:{},style:{}});n.class;var o=n.style,s=o===void 0?{}:o,l=jr(n,Ur);return dt(t.tag,L(L(L({},e),{},{class:r.class,style:L(L({},r.style),s)},r.attrs),l),a)}var vn=!1;try{vn=!0}catch{}function Hr(){if(!vn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function It(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?P({},t,e):{}}function Vr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},P(P(P(P(P(P(P(P(P(P(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),P(P(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Le(t){if(t&&gt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Gt.icon)return Gt.icon(t);if(t===null)return null;if(gt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var X=kn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=G(function(){return Le(e.icon)}),o=G(function(){return It("classes",Vr(e))}),s=G(function(){return It("transform",typeof e.transform=="string"?Gt.transform(e.transform):e.transform)}),l=G(function(){return It("mask",Le(e.mask))}),c=G(function(){return Fr(r.value,L(L(L(L({},o.value),s.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});An(c,function(i){if(!i)return Hr("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var u=G(function(){return c.value?yn(c.value.abstract[0],{},a):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const $r={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},Gr={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]},Xr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Kr={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},qr={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Zr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Qr={class:"container"},Jr={class:"flex items-center justify-between gap-4"},to={class:"flex items-center gap-4"},eo={class:"hidden lg:flex gap-10"},no={class:"px-4 py-8 border-b border-gray-100 flex justify-between items-center"},ao={class:"flex flex-col"},ro={class:"bg-[#02261D] pt-[64px]"},oo={class:"container"},so={class:"px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6"},io={class:"xl:col-span-4"},lo={class:"flex gap-4"},fo={href:"#",class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},co={href:"#",class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},uo={href:"#",class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},mo={class:"xl:col-span-2"},po={class:"space-y-4"},go={class:"xl:col-span-3"},ho={class:"space-y-4"},bo={class:"xl:col-span-3"},yo={class:"space-y-3 text-sm"},vo={class:"flex items-center gap-3"},xo={class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},wo={class:"flex items-center gap-3"},ko={class:"border rounded-[3px] border-[#295048] h-[35px] w-[35px] flex items-center justify-center"},Ao={class:"flex items-start gap-3"},So={class:"border rounded-[3px] border-[#295048] h-[35px] min-w-[35px] flex items-center justify-center"},Oo={class:"md:flex max-md:text-center justify-between gap-3 flex-wrap mt-14 border-t border-[#B8E0D3] w-full py-9"},Co={class:"md:flex max-md:mt-4 items-center gap-12 text-white"},ze="/shreeom_website/Images/logos/logo.png",Po="/shreeom_website/Images/logos/logo-white.png",Io={__name:"default",setup(t){const e=wt(!1),n=wt(!1);Sn();const a=wt(!1),r=()=>{a.value=window.scrollY>300},o=()=>{window.scrollTo({top:0,behavior:"smooth"})};oe(()=>{window.addEventListener("scroll",r)}),se(()=>{window.removeEventListener("scroll",r)});const s=()=>{e.value=!e.value},l=()=>{e.value=!1},c=()=>{n.value=window.scrollY>200};return oe(()=>{window.addEventListener("scroll",c)}),se(()=>{window.removeEventListener("scroll",c)}),(u,i)=>{const p=wn;return At(),kt("div",null,[a.value?(At(),kt("button",{key:0,onClick:o,class:"fixed bottom-6 right-6 bg-primarycolor text-white p-3 rounded-full z-50 shadow-lg transition-opacity duration-1000","aria-label":"Scroll to top"},[y(E(Mn))])):On("",!0),d("header",{class:St(["bg-transparent py-7 absolute top-0 left-0 w-full z-50 transition-all duration-1000",{"sticky top-0 bg-white/30 backdrop-blur-[50px] w-full shadow-lg py-4 animate-fadeInDown":n.value}])},[d("div",Qr,[d("div",Jr,[d("div",to,[y(p,{to:"/",class:"block"},{default:w(()=>[d("img",{src:ze,alt:"main logo",class:"h-auto w-auto max-sm:w-4/5"})]),_:1})]),d("nav",eo,[y(p,{to:"",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:w(()=>i[0]||(i[0]=[k("Services")])),_:1}),y(p,{to:"",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:w(()=>i[1]||(i[1]=[k("Technology")])),_:1}),y(p,{to:"",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:w(()=>i[2]||(i[2]=[k("Portfolio")])),_:1}),y(p,{to:"",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:w(()=>i[3]||(i[3]=[k("Company")])),_:1}),y(p,{to:"",class:"text-lg font-medium text-black hover:text-primarycolor transition"},{default:w(()=>i[4]||(i[4]=[k("Career")])),_:1}),y(p,{to:"",class:"lg:hidden"},{default:w(()=>i[5]||(i[5]=[k("Contact Us")])),_:1})]),d("div",{class:St(["fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden",{"opacity-100 visible":e.value,"opacity-0 invisible":!e.value}]),onClick:l},null,2),d("nav",{class:St(["fixed top-0 left-0 w-[320px] bg-white shadow-lg h-screen z-50 transition-transform duration-300 lg:hidden",{"translate-x-0":e.value,"-translate-x-full":!e.value}])},[d("div",no,[y(p,{to:"/",class:"block"},{default:w(()=>[d("img",{src:ze,alt:"main logo",class:"h-auto w-[60%]"})]),_:1}),d("button",{class:"lg:hidden",onClick:l,"aria-label":"Close menu"},i[6]||(i[6]=[d("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"text-black"},[d("path",{d:"M13.5857 2.39091C14.1323 1.84429 14.1323 0.956583 13.5857 0.409964C13.039 -0.136655 12.1513 -0.136655 11.6047 0.409964L7 5.01905L2.39091 0.414337C1.84429 -0.132282 0.956583 -0.132282 0.409964 0.414337C-0.136655 0.960956 -0.136655 1.84866 0.409964 2.39528L5.01905 7L0.414337 11.6091C-0.132282 12.1557 -0.132282 13.0434 0.414337 13.59C0.960956 14.1367 1.84866 14.1367 2.39528 13.59L7 8.98095L11.6091 13.5857C12.1557 14.1323 13.0434 14.1323 13.59 13.5857C14.1367 13.039 14.1367 12.1513 13.59 11.6047L8.98095 7L13.5857 2.39091Z",fill:"black"})],-1)]))]),d("ul",ao,[(At(),kt(Cn,null,Pn(["Home","Services","Technology","Portfolio","Company","Career","Contact"],(b,A)=>d("li",{key:A,class:"py-3 border-b border-gray-100 px-4"},[y(p,{to:"/"+b.toLowerCase(),onClick:l,class:"text-lg font-medium hover:text-primarycolor transition"},{default:w(()=>[k(En(b),1)]),_:2},1032,["to"])])),64))])],2),d("button",{class:"block lg:hidden p-2",onClick:s,"aria-label":"Open menu"},i[7]||(i[7]=[d("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"text-black"},[d("path",{d:"M17 13H1M17 7H1M17 1H1",stroke:"black","stroke-width":"2","stroke-linecap":"round"})],-1)])),y(p,{to:"contact",class:"lg:flex hidden theme-btn","aria-label":"Contact Us"},{default:w(()=>i[8]||(i[8]=[k(" Contact Us ")])),_:1})])])],2),d("main",null,[_n(u.$slots,"default")]),d("footer",ro,[d("div",oo,[d("div",so,[d("div",io,[d("img",{src:Po,alt:"Shreeom Logo",class:"mb-[25px]"}),i[9]||(i[9]=d("p",{class:"mb-[30px] text-[#B5B5B5]"}," shreeomsoft is a providing top-notch website and mobile app services. The company was founded in 2023 and headquartered in Surat, India. ",-1)),d("div",lo,[d("a",fo,[y(E(X),{icon:E($r),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),d("a",co,[y(E(X),{icon:E(Gr),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),d("a",uo,[y(E(X),{icon:E(Xr),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])])])]),d("div",mo,[i[15]||(i[15]=d("h3",{class:"font-medium text-white mb-6 text-xl"},"Company",-1)),d("ul",po,[d("li",null,[y(p,{to:"/",class:"text-[#B5B5B5]"},{default:w(()=>i[10]||(i[10]=[k("About Us ")])),_:1})]),d("li",null,[y(p,{to:"/",class:"text-[#B5B5B5]"},{default:w(()=>i[11]||(i[11]=[k("Services")])),_:1})]),d("li",null,[y(p,{to:"/",class:"text-[#B5B5B5]"},{default:w(()=>i[12]||(i[12]=[k("Technology")])),_:1})]),d("li",null,[y(p,{to:"/",class:"text-[#B5B5B5]"},{default:w(()=>i[13]||(i[13]=[k("Portfolio")])),_:1})]),d("li",null,[y(p,{to:"/",class:"text-[#B5B5B5]"},{default:w(()=>i[14]||(i[14]=[k("Career")])),_:1})])])]),d("div",go,[i[20]||(i[20]=d("h3",{class:"font-medium text-white mb-6 text-xl"},"Services",-1)),d("ul",ho,[d("li",null,[y(p,{to:"",class:"text-[#B5B5B5]"},{default:w(()=>i[16]||(i[16]=[k("UI/UX Designing")])),_:1})]),d("li",null,[y(p,{to:"",class:"text-[#B5B5B5]"},{default:w(()=>i[17]||(i[17]=[k("Web Design & Development")])),_:1})]),d("li",null,[y(p,{to:"",class:"text-[#B5B5B5]"},{default:w(()=>i[18]||(i[18]=[k("Digital Marketing")])),_:1})]),d("li",null,[y(p,{to:"",class:"text-[#B5B5B5]"},{default:w(()=>i[19]||(i[19]=[k("Maintenance & Support")])),_:1})])])]),d("div",bo,[i[24]||(i[24]=d("h3",{class:"font-medium text-white mb-6 text-xl"},"Contact us",-1)),d("ul",yo,[d("li",vo,[d("span",xo,[y(E(X),{icon:E(qr),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),i[21]||(i[21]=d("a",{href:"mailto:info@shreeomsoft.com",class:"text-[#B5B5B5]"},"info@shreeomsoft.com",-1))]),d("li",wo,[d("span",ko,[y(E(X),{icon:E(Kr),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),i[22]||(i[22]=d("a",{href:"tel:+919586773991",class:"text-[#B5B5B5]"},"+91 9586773991",-1))]),d("li",Ao,[d("span",So,[y(E(X),{icon:E(Zr),class:"text-white h-[15px] w-[15px]"},null,8,["icon"])]),i[23]||(i[23]=d("p",{class:"text-[#B5B5B5]"}," 214, Radhika Optima, Yamuna Chowk, nr. Sudama Chowk, Mota Varachha, Surat, Gujarat 394101, IN ",-1))])])])]),d("div",Oo,[i[28]||(i[28]=d("p",{class:"text-sm text-white"},"© 2025. Shreeomsoft All Rights Reserved.",-1)),d("ul",Co,[d("li",null,[y(p,{to:"/",class:"text-sm"},{default:w(()=>i[25]||(i[25]=[k("Terms of Service")])),_:1})]),d("li",null,[y(p,{to:"/",class:"text-sm"},{default:w(()=>i[26]||(i[26]=[k("Privacy Policy")])),_:1})]),d("li",null,[y(p,{to:"/",class:"text-sm"},{default:w(()=>i[27]||(i[27]=[k("Cookie Policy")])),_:1})])])])])])])}}};export{Io as default};
