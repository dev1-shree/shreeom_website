import{c as x,o as y,a as m,t as F,g as W,h as A,i as j,j as ee,k as Y,l as k,e as O,m as v,p as te,q as K,s as ne,b as L,F as z,r as D,w as H,v as ae,f as E,x as ie,y as oe}from"./DeymVjhc.js";import{x as C,p as Q,y as P,n as X,a as J,b as G,z as re,A as q,S as se,u as le,B as de}from"./DER8bhhy.js";import{N as ue,P as fe}from"./Bv675WkT.js";import{_ as pe}from"./DlAUqK2U.js";const He=""+new URL("about-us-1.DfCSyCzG.png",import.meta.url).href,ce={props:{title:String,subtitle:String,largeMargin:Boolean},computed:{shouldApplyMargin(){return this.largeMargin}}},Ae={class:"text-base text-primarycolor mb-[30px]"},ge={class:"text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold"};function me(t,o,i,d,n,u){return y(),x("div",{class:W(u.shouldApplyMargin?"mb-[80px]":"?")},[m("h6",Ae,F(i.title),1),m("h2",ge,F(i.subtitle),1)],2)}const ve=pe(ce,[["render",me]]);function V(t,o){t===void 0&&(t={});const i={on:{}},d={},n={};C(i,re),i._emitClasses=!0,i.init=!1;const u={},a=Q.map(e=>e.replace(/_/,"")),l=Object.assign({},t);return Object.keys(l).forEach(e=>{typeof t[e]>"u"||(a.indexOf(e)>=0?P(t[e])?(i[e]={},n[e]={},C(i[e],t[e]),C(n[e],t[e])):(i[e]=t[e],n[e]=t[e]):e.search(/on[A-Z]/)===0&&typeof t[e]=="function"?i.on[`${e[2].toLowerCase()}${e.substr(3)}`]=t[e]:u[e]=t[e])}),["navigation","pagination","scrollbar"].forEach(e=>{i[e]===!0&&(i[e]={}),i[e]===!1&&delete i[e]}),{params:i,passedParams:n,rest:u,events:d}}function be(t,o){let{el:i,nextEl:d,prevEl:n,paginationEl:u,scrollbarEl:a,swiper:l}=t;X(o)&&d&&n&&(l.params.navigation.nextEl=d,l.originalParams.navigation.nextEl=d,l.params.navigation.prevEl=n,l.originalParams.navigation.prevEl=n),J(o)&&u&&(l.params.pagination.el=u,l.originalParams.pagination.el=u),G(o)&&a&&(l.params.scrollbar.el=a,l.originalParams.scrollbar.el=a),l.init(i)}function he(t,o,i,d,n){const u=[];if(!o)return u;const a=e=>{u.indexOf(e)<0&&u.push(e)};if(i&&d){const e=d.map(n),f=i.map(n);e.join("")!==f.join("")&&a("children"),d.length!==i.length&&a("children")}return Q.filter(e=>e[0]==="_").map(e=>e.replace(/_/,"")).forEach(e=>{if(e in t&&e in o)if(P(t[e])&&P(o[e])){const f=Object.keys(t[e]),s=Object.keys(o[e]);f.length!==s.length?a(e):(f.forEach(r=>{t[e][r]!==o[e][r]&&a(e)}),s.forEach(r=>{t[e][r]!==o[e][r]&&a(e)}))}else t[e]!==o[e]&&a(e)}),u}const we=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function T(t,o,i){t===void 0&&(t={});const d=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},u=(a,l)=>{Array.isArray(a)&&a.forEach(e=>{const f=typeof e.type=="symbol";l==="default"&&(l="container-end"),f&&e.children?u(e.children,l):e.type&&(e.type.name==="SwiperSlide"||e.type.name==="AsyncComponentWrapper")||e.componentOptions&&e.componentOptions.tag==="SwiperSlide"?d.push(e):n[l]&&n[l].push(e)})};return Object.keys(t).forEach(a=>{if(typeof t[a]!="function")return;const l=t[a]();u(l,a)}),i.value=o.value,o.value=d,{slides:d,slots:n}}function ye(t,o,i){if(!i)return null;const d=s=>{let r=s;return s<0?r=o.length+s:r>=o.length&&(r=r-o.length),r},n=t.value.isHorizontal()?{[t.value.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:u,to:a}=i,l=t.value.params.loop?-o.length:0,e=t.value.params.loop?o.length*2:o.length,f=[];for(let s=l;s<e;s+=1)s>=u&&s<=a&&f.length<o.length&&f.push(o[d(s)]);return f.map(s=>{if(s.props||(s.props={}),s.props.style||(s.props.style={}),s.props.swiperRef=t,s.props.style=n,s.type)return v(s.type,{...s.props},s.children);if(s.componentOptions)return v(s.componentOptions.Ctor,{...s.props},s.componentOptions.children)})}const Be={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},swiperElementNodeName:{type:String,default:"SWIPER-CONTAINER"},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},breakpointsBase:{type:String,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideFullyVisibleClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slidesUpdated","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(t,o){let{slots:i,emit:d}=o;const{tag:n,wrapperTag:u}=t,a=A("swiper"),l=A(null),e=A(!1),f=A(!1),s=A(null),r=A(null),h=A(null),c={value:[]},b={value:[]},N=A(null),R=A(null),U=A(null),I=A(null),{params:B,passedParams:Z}=V(t);T(i,c,b),h.value=Z,b.value=c.value;const _=()=>{T(i,c,b),e.value=!0};B.onAny=function(g){for(var p=arguments.length,w=new Array(p>1?p-1:0),S=1;S<p;S++)w[S-1]=arguments[S];d(g,...w)},Object.assign(B.on,{_beforeBreakpoint:_,_containerClasses(g,p){a.value=p}});const M={...B};if(delete M.wrapperClass,r.value=new se(M),r.value.virtual&&r.value.params.virtual.enabled){r.value.virtual.slides=c.value;const g={cache:!1,slides:c.value,renderExternal:p=>{l.value=p},renderExternalUpdate:!1};C(r.value.params.virtual,g),C(r.value.originalParams.virtual,g)}Y(()=>{!f.value&&r.value&&(r.value.emitSlidesClasses(),f.value=!0);const{passedParams:g}=V(t),p=he(g,h.value,c.value,b.value,w=>w.props&&w.props.key);h.value=g,(p.length||e.value)&&r.value&&!r.value.destroyed&&le({swiper:r.value,slides:c.value,passedParams:g,changedParams:p,nextEl:N.value,prevEl:R.value,scrollbarEl:I.value,paginationEl:U.value}),e.value=!1}),K("swiper",r),te(l,()=>{ne(()=>{we(r.value)})}),j(()=>{s.value&&(be({el:s.value,nextEl:N.value,prevEl:R.value,paginationEl:U.value,scrollbarEl:I.value,swiper:r.value},B),d("swiper",r.value))}),k(()=>{r.value&&!r.value.destroyed&&r.value.destroy(!0,!1)});function $(g){return B.virtual?ye(r,g,l.value):(g.forEach((p,w)=>{p.props||(p.props={}),p.props.swiperRef=r,p.props.swiperSlideIndex=w}),g)}return()=>{const{slides:g,slots:p}=T(i,c,b);return v(n,{ref:s,class:q(a.value)},[p["container-start"],v(u,{class:de(B.wrapperClass)},[p["wrapper-start"],$(g),p["wrapper-end"]]),X(t)&&[v("div",{ref:R,class:"swiper-button-prev"}),v("div",{ref:N,class:"swiper-button-next"})],G(t)&&v("div",{ref:I,class:"swiper-scrollbar"}),J(t)&&v("div",{ref:U,class:"swiper-pagination"}),p["container-end"]])}}},xe={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(t,o){let{slots:i}=o,d=!1;const{swiperRef:n}=t,u=A(null),a=A("swiper-slide"),l=A(!1);function e(r,h,c){h===u.value&&(a.value=c)}j(()=>{!n||!n.value||(n.value.on("_slideClass",e),d=!0)}),ee(()=>{d||!n||!n.value||(n.value.on("_slideClass",e),d=!0)}),Y(()=>{!u.value||!n||!n.value||(typeof t.swiperSlideIndex<"u"&&(u.value.swiperSlideIndex=t.swiperSlideIndex),n.value.destroyed&&a.value!=="swiper-slide"&&(a.value="swiper-slide"))}),k(()=>{!n||!n.value||n.value.off("_slideClass",e)});const f=O(()=>({isActive:a.value.indexOf("swiper-slide-active")>=0,isVisible:a.value.indexOf("swiper-slide-visible")>=0,isPrev:a.value.indexOf("swiper-slide-prev")>=0,isNext:a.value.indexOf("swiper-slide-next")>=0}));K("swiperSlide",f);const s=()=>{l.value=!0};return()=>v(t.tag,{class:q(`${a.value}`),ref:u,"data-swiper-slide-index":typeof t.virtualIndex>"u"&&n&&n.value&&n.value.params.loop?t.swiperSlideIndex:t.virtualIndex,onLoadCapture:s},t.zoom?v("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof t.zoom=="number"?t.zoom:void 0},[i.default&&i.default(f.value),t.lazy&&!l.value&&v("div",{class:"swiper-lazy-preloader"})]):[i.default&&i.default(f.value),t.lazy&&!l.value&&v("div",{class:"swiper-lazy-preloader"})])}},Fe={class:"py-16 px-4"},Ce={class:"container"},Se={class:"flex justify-center space-x-4 mb-8"},Ee=["src","alt"],Ne={class:""},Re={class:"bg-green-100 p-8 rounded-xl text-center max-w-4xl mx-auto"},Ue=["src"],Ie={class:"text-lg font-medium text-gray-700 mb-4"},Te={class:"font-bold text-gray-900"},Oe={class:"text-gray-500 text-sm"},Ve={__name:"TestimonialsSlider",setup(t){const o=A([{id:1,name:"Rajesh Patel",role:"CEO of InnovateTech",text:"ShreeOm has been a game-changer for our business! Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help. Highly recommend!",logo:"/shreeom_website/Images/logos/testmonial-logo-1.png",avatar:"/shreeom_website/Images/testmonial/reviews-1.png"},{id:2,name:"Emily Johnson",role:"Marketing Director at Brandify",text:"Working with ShreeOm has been fantastic! Their creative approach and attention to detail have helped our brand stand out.",logo:"/shreeom_website/images/logoipsum.png",avatar:"/shreeom_website/Images/testmonial/reviews-2.png"},{id:3,name:"Michael Smith",role:"Founder of TechNest",text:"We were impressed with their seamless integration and efficiency. A must-have partner for any tech-driven company.",logo:"/shreeom_website/images/logoipsum.png",avatar:"/shreeom_website/Images/testmonial/reviews-4.png"}]);return(i,d)=>(y(),x("section",Fe,[m("div",Ce,[L(ve,{class:"text-center",largeMargin:!0,title:"Our working process",subtitle:"How to start ?"}),m("div",Se,[(y(!0),x(z,null,D(o.value,n=>(y(),x("img",{key:n.id,src:n.avatar,alt:n.name,class:"w-14 h-14 rounded-full border-2 border-gray-300"},null,8,Ee))),128))]),m("div",Ne,[L(E(Be),{modules:[E(ue),E(fe)],navigation:!0,pagination:!1,loop:!0,class:"relative"},{default:H(()=>[(y(!0),x(z,null,D(o.value,n=>(y(),ae(E(xe),{key:n.id,class:"flex justify-center"},{default:H(()=>[m("div",Re,[m("img",{src:n.logo,alt:"Company Logo",class:"mx-auto mb-4 w-20"},null,8,Ue),m("p",Ie,'"'+F(n.text)+'"',1),m("h4",Te,F(n.name),1),m("p",Oe,F(n.role),1)])]),_:2},1024))),128))]),_:1},8,["modules"])])])]))}},Pe=["data-stop"],je={class:"font-medium text-black mt-2"},We=ie({__name:"Counter",props:{value:{},label:{},extraClass:{}},setup(t){const o=t,i=O(()=>typeof o.value=="number"?o.value:Number(o.value)),d=A(null),n=O(()=>o.label||"Default Label"),u=a=>a>=1e3?`${Math.floor(a/1e3)}K+`:`${a}+`;return j(()=>{if(!d.value)return;const a=new IntersectionObserver(l=>{l.forEach(e=>{if(e.isIntersecting){const f=i.value,s=1e3,r=30,h=Math.ceil(f/r);let c=0;const b=()=>{c+=h,c>=f&&(c=f),d.value&&(d.value.innerText=u(c)),c<f&&setTimeout(b,s/r)};b(),a.unobserve(e.target)}})},{threshold:.5});a.observe(d.value),oe(()=>{d.value&&a.unobserve(d.value)})}),(a,l)=>(y(),x("div",{class:W(`text-center ${a.extraClass}`)},[m("h3",{ref_key:"countRef",ref:d,"data-stop":i.value,class:"text-[55px] font-bold leading-[70px] text-primarycolor"}," 0 ",8,Pe),m("p",je,F(n.value),1)],2))}}),Ye=[{title:"Web Design & Development",description:"Professional website design crafted by web design leading artistic minds. We create a custom digital experience that engages and inspires your audience.",icon:"web-design.png",borderColor:"#FF0011",bgColor:"#FFF9F9"},{title:"E-Commerce Website Development",description:"We provide effective e-commerce services to help you create an impressive online store with easy functionality and increase your sales and profits.",icon:"e-commerce.png",borderColor:"#039873",bgColor:"#F9FFF9"},{title:"Digital Marketing",description:"Digital Marketing is an extremely effective way to drive traffic to your website and generate leads and client retention.",icon:"digital-marketing.png",borderColor:"#FFD500",bgColor:"#FFF9F9"},{title:"UI/UX Designing",description:"We create experiences that are intuitive to use and visually appealing. From information architecture to user flow and branding, our design team handles all aspects of product design.",icon:"ui-ux.png",borderColor:"#0077FF",bgColor:"#F9FCFF"},{title:"CMS Website Development",description:"CMS services make our clients’ websites more informative. Stand out in your industry with our content-customized service.",icon:"cms-website.png",borderColor:"#6F00FF",bgColor:"#FFF9FF"},{title:"Maintenance & Support",description:"Whether or not we wrote the original code for your software, count on us to keep your products functional and bug-free.",icon:"maintenance.png",borderColor:"#FF7700",bgColor:"#FFFAF9"}],ke=[{title:"Predict future performance to plan better now",description:"When you start working with Elementor, everything will feel familiar and intuitive. This is possible thanks to interface features like Navigator, Copy/Paste, Copy Style, and more.",buttonText:"View more",buttonColor:"linear-gradient(90deg, #02B78A 0%, #3D927D 100%)",bgColor:"linear-gradient(180deg, #E0FFEE 0%, #F8FFFC 100%)",textColor:"#38947E",bgimgColor:"#0398730A",image:"/shreeom_website/Images/portfolio/portfolio-1.png"},{title:"Optimize your workflow effortlessly",description:"Work with tools that make everything feel intuitive. Features like Navigator, Copy/Paste, and Smart Automation ensure a seamless experience.",buttonText:"View more",buttonColor:"linear-gradient(90deg, #B7B102 0%, #88923D 100%)",bgColor:"linear-gradient(180deg, #FFFEE0 0%, #FFFFF8 100%)",textColor:"#919438",bgimgColor:"#7398030A",image:"/shreeom_website/Images/portfolio/portfolio-1.png"},{title:"Enhance productivity with intuitive tools",description:"Streamline your work with AI-powered tools, reducing time and effort while maximizing results. Navigate seamlessly with features designed for efficiency.",buttonText:"View more",buttonColor:"linear-gradient(90deg, #B74202 0%, #B35C1E 100%)",bgColor:"linear-gradient(180deg, #FFEBE0 0%, #FFFBF8 100%)",textColor:"#944338",bgimgColor:"#9864030A",image:"/shreeom_website/Images/portfolio/portfolio-1.png"},{title:"Transform ideas into reality effortlessly",description:"With an intuitive interface and real-time insights, decision-making becomes effortless. Optimize strategies and improve outcomes instantly.",buttonText:"View more",buttonColor:"linear-gradient(90deg, #B7028A 0%, #923D86 100%)",bgColor:"linear-gradient(180deg, #FFE0FB 0%, #FFF8FF 100%)",textColor:"#943888",bgimgColor:"#9864030A",image:"/shreeom_website/Images/portfolio/portfolio-1.png"}],Ke=[{id:1,title:"Requirement Gathering",bgColor:"linear-gradient(180deg, #FFE9D0 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/requirement.png"},{id:2,title:"Planning",bgColor:"linear-gradient(180deg, #B9EEFF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/planning.png"},{id:3,title:"UI/UX Design",bgColor:"linear-gradient(180deg, #C0CBFF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/ui-ux-design.png"},{id:4,title:"Prototype",bgColor:"linear-gradient(180deg, #D9BAFF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/prototype.png"},{id:5,title:"Development",bgColor:"linear-gradient(180deg, #F3AEFF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/prototype.png"},{id:6,title:"Quality Assurance",bgColor:"linear-gradient(180deg, #FFBDBD 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/quality.png"},{id:7,title:"Deployment",bgColor:"linear-gradient(180deg, #D3E7FF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/deployment.png"},{id:8,title:"Support & Maintenance",bgColor:"  linear-gradient(180deg, #FFF3B7 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/support.png"}],Qe=""+new URL("hero-section.kLSdPXtS.png",import.meta.url).href,Xe=""+new URL("about-section.CaCswnWl.png",import.meta.url).href,Je=""+new URL("work-process-section.j1z2JFnx.png",import.meta.url).href,Ge=""+new URL("cta-section.UIO9OtJ5.png",import.meta.url).href,qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGMSURBVHgBtVU9SwNBEH13SRNJMKBNioCNsfQiCH4QUewStNQySvwBCpaW/oA0lsK1sRJEwSKgFmplbP0AjyBYCRHUSowzThbu8O643J0P9vbjdt++mZ2d1dDDPJD9AEYSgIFwsK6BM9XR+DMLVL+BOjWziAaLytYVcKhNkUpif0KM+AKKOpFuImYkgTW9G938PyCxg7rfhMwA2VSQkhty/itPA6d0KquL7muT8EFpHNhZl/b+kRSF3LBs7AVf4jKFy8srkE6JMjvxQRO4uQMen93XerqCTZ8gF7Ro8QnFT7rnFoUV2mhvW+q+iBXJ8SVw0ZL2xhICw5O4tgy8fzrHRvOiPAhcfWyPAjZXgUkrFA2NJsIRV2ak5gO6b0ubo6BGrpgzhFgp58MNTFwyZEG94RzngyqOiUWZFPpTzC5gpW5Kdk2gkBffn9/KnIe2OzEnIZOuYBUxgvhMHf8Ezm4dxAxKbG8qH/MViCvLdbqcj+k5sSgxL0Cyf1T8cjGnZh+dpPcuEV45v3mW6vwADOdaqXpWInsAAAAASUVORK5CYII=",Ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAgCAYAAAD9oDOIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJiSURBVHgBtVU9b9NQFL33OhSH7wqQWiSIET8ALNjrCgnUAdQsiIk6YmKLxNCBoTF/oGViTCIk1I3sCLX9BfXIRD2A1Im67dCUxPfybOIUtUn8qrhnsJ+fj4/vuz7HD+EYDuYtCwbAtJxQna4dn8eVRnBiLh3sP7+zJADVQQ/GuHzvcRMQF2AwGsDspS+g+LD37HZdCdaGCWrABaI1qbpWIqoEXVWBC+PDUjr1RFS9YQHyAqIjb1+XCEQeQJ4QmY17GkKeYA5IfaANyBc+MdEK5AWRD8pWIU22Aj8SqcC4bRBp4nI99vmR+XdUkoi5+ocmZ7py9YRfr9x9uHGBdmfS65/FG1Z8LkaH69fbu7Hx19N7hXTQMresAsJ91ePBbtgG79UqulNfOw5iYQlBrN4dR1kpmHr6MdieKwb9Sj+9kHkx4AuMXB5UFitRiAYN4wXcOZyNhan+UiwluAwZ2LoFJSU4imfhufP/EmXE5ccRy8CP6WyeWrYz/U1KJAhaifp9URwdHkVRkqhc0REjJBTwdciX2qjFI277FJnQUjYKssiPvkMzm4eN5OtXGhgyQln1dmSibu5BSNwt45DkSWKptpdUGx8qn9FnBltEVTNC/NeTCT/qoC0sTTgSD1VEvYN9tFPz9xP1ZtEDg2iHGUMctMGxqmVVBWsO4wddGIFE1NysWQjGmrAyMIyPZPmxIGoEQFvU3Hzv5imYiBqc8x4FveXrQIS1f+IUkV5S2NBLXiJqArd0ktK2axmc/0RDuxZ2gcowfI8KGLoenAJJTzv2O58hstWwn5Re9d6Emj9NlWeGv1do6Rf5MCLhAAAAAElFTkSuQmCC",_e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPjSURBVHgB5ZtdUhNBEMf/PRM1Pok3wBt4A3ODcAOxyir1iUV8t3z3I3kR9cVwg3CDvYHewHgC45MRdmfsCYIBsuxXuicWv6oUYTcU29vd8+/tngCx+JTc7+wnPUSig0hYZ3cc4Se/TREBg3j0iPAQkYhiuH2/t8U/NuGxESvc43jcoH/61pN9iQgQtNlPNi3Zb/h3BdP8Zn4PjwZTKKLucQvTO3eAw90cmW0oox/qRJcWNPLUhzK6oX4xzBfIO7zYPX7zHUqoetwQJYXnjv0jKKJqOMEUhjQZ2oEieobvv+ghaHcRypquZrglX1qlObJbUEJncXuXbNguL2qEDVx9NWqaruJx2zVbpUYHONztzKh4XSfUl2j3Sj7bAvlQv0K7i8hv5Xelw13c48bXD10zMwmEETe8iT4bMuIlrKzhZdpdgIcXb0uJGl5Fu4uQ1nTpUO+hIfO21OekXAIbItNs5As2v23w9iaa8vc53QEDCLBaOeO87JhO3zu/XalgqcaEX2nu8wM8G6RYEe0ND949Mrxy0xZ53IcsE76pQ0duzDdhghY0MzzkHpeW9qTK6iEOKbw/yLt8ExoUO/UMlwnldnhM+VrGdVOh3HAuOY0xD8lx92RdjC1mQkTjzGXDslRYbnjI219mm6uuUEH18H9ykgpw6bKbcN5wDmUbGvxhkVp/79ZhlBMO8eTN+PQArWXeyjFBkMY8H5obDlM2+q4nrzrJiIHnoohD/Cc7euNcqM+HeYTwijbFXDVs7JTL3688tHiVPXudnh5fvriF5gFMD3F1ui0pR/Khu+1Gy3S+kpx1yCYOvk+gTawxwbsGNOwgG80ayVkBHX6+5mflbQ/0aU0WwrmxhAOeN48XQ7mMxiXrvBt6bUrWZYTKLvTVDHakU8ETfTUOh1k3G7RtRq70sfQsFcg/WNVNaBrKZYi1l83H5wlLyDu0gKeru8c3s5FEq1mur151bFQAR87EPX17D0LI9dx2B1NP7gAN4VRJIYhos9F4O0ZDKDxfCyI+QjIf977UbUlJh3lAfmjo6BB1IQwhjLjhbpbVbg875xqnSFXkPb47l6K0xl+kbTuoVdCZj3NpKfLZFqgYns84dEM3tIywFaQrH+YBHY9X1XSPsdaeVrVdT1U0XVq7z/0vKGL3934UlbAa2r2I6s5Gz92R4rMN9L4FqoY7bgkVnvO5yDi4CN1t2yf6nC45o6Ldi6jvVw+dz8sHvdqidoq64e43t3svaPp8vqWM/jcUQgnLDf6FIyPtMA9E+RZSmGqc/cLNQ1wngqabD89rbfVcJdG+YhlKWIK5g0hEMzyUsJnLok1o/wDJuIIg8C5z+AAAAABJRU5ErkJggg==",$e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJmSURBVHgBzVZBaxNBGP2+yW6TUAlpSxG0YIMnPW2FUk+6HipJUWjxIoKQ/AN7trEp/QG2f0AjeLde7M0OHj3lH7h3L7lIK3RnujNhQ2ZmZzObXvog2ew338zbN/veEAx/HG4DsgA0nH/6c4/9i5Uacv799+nXE703aL5e9Ym/r9crL+9CqXFLLwNt7nU88EiEDL7pg/6jJfj/669S44DbQdimA9ofKr2ClGNbeciaD15jXs5S6gyOxZXQ5+8HydCxQbxWh9JKVS/X/Wq8r6vVSQWqr1YgAxHD+EgSy9vzuAcIQ71rbmMpYy6+W998M341WVvsPawBqXnGTM75AW31ojEx3ekNeYwHeqNQ7D2oGQuAV/ooLuvNt21ji8vE8sAQ0daHfnpD0h90a+8o2XKqd5efLsvFVGAoSRENtX6wYFELncl7dUUOhmqrAsTPyfeqUkoMNfd40SQF7NNWl1qJxaDNaGLRaShvLGYP8EtDEDGaLEarbN6GPJDlsjSVDkx2MTVULnGu0e7Pgw2VF3eyyhG7GMVnKrEkT4yWXAZ6vfwky2hT4pMIAVfi0STY1WviPftBXa05xseZWBoNwTiX/bUFxWj2+MTPIAckbxBYvKsbTShMjZYfH9NQzsRiMmfMiJcwmvgUiU8hYokLLowW6WXh4iLxMfrAAeHpYYgIZw6t0Vmz23Doc1AM4xONTusT8QFHOBGPVo07WSfaBAZ58ZmZ2Ga08XPxeAcKwF2xgMVoLvG5FrE8x5lxokUu8bkWsSTf6p5MGi2Jz5eiamciHs0iqeroZ6vbgxkwE3H6z7RIfG4MrgDqht7hgxPlBgAAAABJRU5ErkJggg==",et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgBtVW/S8NAFP6SZqlWKC62urSgbkqhWMd2dNDBzR+DndyKg3+A9h8Q3aoudRCcpIPQtVkLATGTP8AKto1LqbTYpXDeyxmsmJYkpB+Eu3uX+95733u5SLAQScTAlANIUhiewd6AfhHGfY1WkmmbWeGk7BS+Qc7CqF5JZsRQXuEnJLTR68dlTpyF32AII6hkOTmLYRzgDpShm9PR33mrCS+wJ985AlbX/9peNOA678qRPHKXiJ41Mc4ngdw5EJyCUygjd8sXQPVOzHMF4WBuUWSR2QJSG8JZqwHcngD1JziPfBC9jhiJLMUl2zwUdfnqCIf0uIp8IiQOLaeBpYyw1R+BtX0xp6woYsupK3KKbhDlS6G/roqCp7eF00H5HJPrFeCd69jrCj1Ja8tOnUPyLPA67PLuCvIs1RsX5A+qbUSmVPrPHjkgciq2K/JhIDlIFpKIIjazUf+9Zk9upT/sgyEiIqUiUhfp9hnyWzFZ5MMe/EfeeZ97gGzevWMjZ1IJ40ElgG6jhlA0znVPwC8wdoYPrRAwF91mCZOzn3wWoRLDCxhr87MG/8HnYWjHZPoGmZqFEZGnVXsAAAAASUVORK5CYII=",tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAYCAYAAAB5j+RNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOVSURBVHgB1VZPTxNREJ/3tpQeVOonYI2evNgCd5ejByN8AHUXYyLEhHL1UnryCNyIMewSL8ZL6wdQlhjjhT/Fi0eXKxpYVKCWfe85s90my0JDaYHE3+Z139uZN/PbmXmzBbgE5HI5HToAh0sA59wcHBz8jmPkTPvg8qDjKOfz+f52N1wmuTPj/yOHBZyFUzBiG6fqtGurlQ5LKBmaptk41ZVS01LKuWq16sd1CmUj+yuVnqwfqMIfX7ogxFRl3PVOcEi2itCoNZIb9Bxt6uvr65tNUnhYJhljBRxeEASj6M87Qo6OekTKSPjwkGRpbW3NocXzpXsjh4dqJvir9IN9CbU9idwUpHuYoylRemu5XuSwSA7hBDTJDQwMmKgzg4+SUXOEECUimQoZMjYdJ4aEfHxGm3S823jClvoe9TJ/OyhfuZYChRcL96FuABBwMLcb8bXwJcstbB2JKtltoWOijdBWsuZ8ZJ3HSF3H+WJCBls/9zFSMiRFP2gQhFRwsCdAYQSTtlA+jJHK49yF1nByD2/P9fVfnYqRXab7MXIYzmqk4B2RZGpwiNfOVoCyUCMcNK/XJNCVtLWysuJSeprOTgLJerPpx7fu3/ToJTA4N5pllIJ2kcGxx2FnV8CVPi3kRskNi1bhr3YscjrWVREjt4ERfNzKLMqKX998m/v88UsFl5W4LBm5amzuJWQ+HPR4lFb/R9BIa8N8Q1qHjZCnUhsxx9NRDeqRzMexS35imdFru/UZ/LTZyW8wj4yQ4ujq6upoU0ChpRDjdJEMulbVV3sa1g8v/d6WEBxGaeTK5ZINuy8+zUb7CqhvJcsCfZQwijeoNdHA+TA9i6nQQbDjPY9BBzBeGvq167yQ6WXuO+tDpWCb2TrwSUxzTgVibv6p45Le0NDQNJK8gy85Fe9fcURtjNqOi8E5ktaOyMUxYT9BUmAoEFPzluON22MFJbF3cenQmojPWo7fie2uyE3YY0UJfHneeu3SmojUakgsQ4a1mQBEiQE3XlkLs9AB2j+tJ4LpSKz0zB4zGUarDuwOpNUmdhVPcfVeg1Q2A4EDHaJLcjFwTl0vyzh1euYrkGEqO01paBLOD/1C4MmuCez06i6cA7oiR83kmW3qjZVa5prKQpqbVGsceNv/eC+EHCAJkNzEdvygF4Q7by04gstKD2iT+DnbbB6UTtF1K2li3H5SVkpuAtN8PASz3dTahYBaCZwj/gE/N8uPNVjDeQAAAABJRU5ErkJggg==",nt="data:image/png;base64,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",at="data:image/png;base64,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";export{ve as S,We as _,qe as a,nt as b,He as c,Xe as d,ke as e,Ze as f,Je as g,Qe as h,Ve as i,Ge as j,_e as k,tt as n,et as p,at as r,Ye as s,$e as v,Ke as w};
