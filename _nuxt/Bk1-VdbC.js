import{C as r,h as a,i as l,c as i,A as n,o as c,a as t,f as d}from"./DeymVjhc.js";const u=r("/Images/logos/loader-logo.png"),m={key:0,id:"preloader",class:"fixed inset-0 flex items-center justify-center bg-white z-[100]"},p={class:"relative flex items-center justify-center"},f=["src"],y={__name:"Preloader",setup(_){const s=a(!0);return l(()=>{setTimeout(()=>{const e=document.getElementById("preloader");e&&(e.style.transition="opacity 1s",e.style.opacity="0",setTimeout(()=>s.value=!1,500))},500)}),(e,o)=>s.value?(c(),i("div",m,[t("div",p,[t("img",{src:d(u),class:"w-24 h-24",alt:"Loader"},null,8,f),o[0]||(o[0]=t("div",{class:"absolute w-48 h-48 -left-12 -top-12 animate-spin border border-secondarycolor rounded-full border-t-white border-b-white"},null,-1))])])):n("",!0)}};export{y as _};
