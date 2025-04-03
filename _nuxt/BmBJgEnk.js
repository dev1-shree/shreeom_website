import{_ as I}from"./Da748gA7.js";import{c as i,o as l,a as e,t as p,n as E,r as U,e as j,f as T,g as x,F as h,h as w,i as S,j as C,b as a,w as F,d as B,k as r}from"./BMZde3Rz.js";import{_ as L}from"./DlAUqK2U.js";import{_ as M}from"./BGxbPcCe.js";import{_ as Y}from"./Baqrj4JS.js";const H=""+new URL("about-us-1.DfCSyCzG.png",import.meta.url).href,Q={props:{title:String,subtitle:String,largeMargin:Boolean},computed:{shouldApplyMargin(){return this.largeMargin}}},K={class:"text-base text-primarycolor mb-[30px]"},P={class:"text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold"};function V(g,n,t,s,o,u){return l(),i("div",{class:E(u.shouldApplyMargin?"mb-[80px]":"?")},[e("h6",K,p(t.title),1),e("h2",P,p(t.subtitle),1)],2)}const f=L(Q,[["render",V]]),X=window.setInterval,J={class:"flex flex-col items-center max-w-3xl mx-auto relative"},D={class:"w-full overflow-hidden mt-6 relative"},G=["src","onClick"],W={class:"relative w-full overflow-hidden mt-6"},O=["src"],q={class:"text-lg font-medium text-gray-700"},z={class:"text-lg font-bold text-gray-800 mt-4"},_={class:"text-sm text-gray-500"},Z={__name:"TestimonialsSlider",setup(g){const n=U([{image:"https://randomuser.me/api/portraits/women/1.jpg",logo:"https://placehold.co/100x50?text=Logo",text:"ShreeOm has been a game-changer for our business! Their IT solutions are innovative, reliable, and perfectly tailored to our needs.",name:"Rajesh Patel",role:"CEO of InnovateTech"},{image:"https://randomuser.me/api/portraits/men/2.jpg",logo:"https://placehold.co/100x50?text=Logo",text:"The team is professional and always ready to help. Highly recommend!",name:"Priya Sharma",role:"CTO of TechWorld"},{image:"https://randomuser.me/api/portraits/women/3.jpg",logo:"https://placehold.co/100x50?text=Logo",text:"Their support is unmatched, and their expertise is invaluable for any business.",name:"Anil Mehta",role:"Founder of DigitalFlow"}]),t=U(0);let s;const o=()=>{t.value=(t.value+1)%n.value.length},u=()=>{t.value=(t.value-1+n.value.length)%n.value.length};return j(()=>{s=X(o,5e3)}),T(()=>{clearInterval(s)}),(A,v)=>(l(),i("div",J,[e("div",D,[e("div",{class:"flex gap-6 justify-center h-[130px] mx-auto items-center transition-transform duration-500 ease-in-out",style:x({transform:`translateX(-${t.value*100}px)`})},[(l(!0),i(h,null,w(n.value,(c,d)=>(l(),i("img",{key:d,src:c.image,class:E(["rounded-full object-cover cursor-pointer transition-all duration-500",t.value===d?"w-24 h-24 ring-4 ring-green-500 scale-125 z-10":"w-14 h-14 opacity-50"]),onClick:y=>t.value=d},null,10,G))),128))],4)]),e("div",W,[e("div",{class:"flex transition-transform duration-500 ease-in-out",style:x({transform:`translateX(-${t.value*100}%)`})},[(l(!0),i(h,null,w(n.value,(c,d)=>(l(),i("div",{key:d,class:"bg-green-100 p-8 rounded-xl text-center shadow-md w-full shrink-0"},[e("img",{src:c.logo,alt:"Company Logo",class:"w-16 mx-auto mb-4"},null,8,O),e("p",q,'"'+p(c.text)+'"',1),e("h4",z,p(c.name),1),e("p",_,p(c.role),1)]))),128))],4)]),e("button",{class:"absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-xl",onClick:u}," ❮ "),e("button",{class:"absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-xl",onClick:o}," ❯ ")]))}},$=["data-stop"],ee={class:"font-medium text-black mt-2"},b=S({__name:"Counter",props:{value:{},label:{},extraClass:{}},setup(g){const n=g,t=C(()=>typeof n.value=="number"?n.value:Number(n.value)),s=U(null),o=C(()=>n.label||"Default Label"),u=A=>A>=1e3?`${Math.floor(A/1e3)}K+`:`${A}+`;return j(()=>{if(!s.value)return;const A=new IntersectionObserver(v=>{v.forEach(c=>{if(c.isIntersecting){const d=t.value,y=1e3,R=30,k=Math.ceil(d/R);let m=0;const N=()=>{m+=k,m>=d&&(m=d),s.value&&(s.value.innerText=u(m)),m<d&&setTimeout(N,y/R)};N(),A.unobserve(c.target)}})},{threshold:.5});A.observe(s.value),T(()=>{s.value&&A.unobserve(s.value)})}),(A,v)=>(l(),i("div",{class:E(`text-center ${A.extraClass}`)},[e("h3",{ref_key:"countRef",ref:s,"data-stop":t.value,class:"text-[55px] font-bold leading-[70px] text-primarycolor"}," 0 ",8,$),e("p",ee,p(o.value),1)],2))}}),te=""+new URL("requirement.8NJU4ffi.png",import.meta.url).href,se=""+new URL("planning.DZCaWpti.png",import.meta.url).href,oe=""+new URL("ui-ux-design.CjVzdBRU.png",import.meta.url).href,ae=""+new URL("prototype.q-F9DFvl.png",import.meta.url).href,ne=[{id:1,title:"Requirement Gathering",bgColor:"linear-gradient(180deg, #FFE9D0 0%, #FFFFFF 100%)",image:te},{id:2,title:"Planning",bgColor:"linear-gradient(180deg, #B9EEFF 0%, #FFFFFF 100%)",image:se},{id:3,title:"UI/UX Design",bgColor:"linear-gradient(180deg, #C0CBFF 0%, #FFFFFF 100%)",image:oe},{id:4,title:"Prototype",bgColor:"linear-gradient(180deg, #D9BAFF 0%, #FFFFFF 100%)",image:ae},{id:5,title:"Development",bgColor:"linear-gradient(180deg, #F3AEFF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/prototype.png"},{id:6,title:"Quality Assurance",bgColor:"linear-gradient(180deg, #FFBDBD 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/quality.png"},{id:7,title:"Deployment",bgColor:"linear-gradient(180deg, #D3E7FF 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/deployment.png"},{id:8,title:"Support & Maintenance",bgColor:"  linear-gradient(180deg, #FFF3B7 0%, #FFFFFF 100%)",image:"/shreeom_website/Images/icons/support.png"}],re=""+new URL("hero-section.kLSdPXtS.png",import.meta.url).href,ie=""+new URL("about-section.CaCswnWl.png",import.meta.url).href,le=""+new URL("work-process-section.j1z2JFnx.png",import.meta.url).href,Ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGMSURBVHgBtVU9SwNBEH13SRNJMKBNioCNsfQiCH4QUewStNQySvwBCpaW/oA0lsK1sRJEwSKgFmplbP0AjyBYCRHUSowzThbu8O643J0P9vbjdt++mZ2d1dDDPJD9AEYSgIFwsK6BM9XR+DMLVL+BOjWziAaLytYVcKhNkUpif0KM+AKKOpFuImYkgTW9G938PyCxg7rfhMwA2VSQkhty/itPA6d0KquL7muT8EFpHNhZl/b+kRSF3LBs7AVf4jKFy8srkE6JMjvxQRO4uQMen93XerqCTZ8gF7Ro8QnFT7rnFoUV2mhvW+q+iBXJ8SVw0ZL2xhICw5O4tgy8fzrHRvOiPAhcfWyPAjZXgUkrFA2NJsIRV2ak5gO6b0ubo6BGrpgzhFgp58MNTFwyZEG94RzngyqOiUWZFPpTzC5gpW5Kdk2gkBffn9/KnIe2OzEnIZOuYBUxgvhMHf8Ezm4dxAxKbG8qH/MViCvLdbqcj+k5sSgxL0Cyf1T8cjGnZh+dpPcuEV45v3mW6vwADOdaqXpWInsAAAAASUVORK5CYII=",de="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAgCAYAAAD9oDOIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJiSURBVHgBtVU9b9NQFL33OhSH7wqQWiSIET8ALNjrCgnUAdQsiIk6YmKLxNCBoTF/oGViTCIk1I3sCLX9BfXIRD2A1Im67dCUxPfybOIUtUn8qrhnsJ+fj4/vuz7HD+EYDuYtCwbAtJxQna4dn8eVRnBiLh3sP7+zJADVQQ/GuHzvcRMQF2AwGsDspS+g+LD37HZdCdaGCWrABaI1qbpWIqoEXVWBC+PDUjr1RFS9YQHyAqIjb1+XCEQeQJ4QmY17GkKeYA5IfaANyBc+MdEK5AWRD8pWIU22Aj8SqcC4bRBp4nI99vmR+XdUkoi5+ocmZ7py9YRfr9x9uHGBdmfS65/FG1Z8LkaH69fbu7Hx19N7hXTQMresAsJ91ePBbtgG79UqulNfOw5iYQlBrN4dR1kpmHr6MdieKwb9Sj+9kHkx4AuMXB5UFitRiAYN4wXcOZyNhan+UiwluAwZ2LoFJSU4imfhufP/EmXE5ccRy8CP6WyeWrYz/U1KJAhaifp9URwdHkVRkqhc0REjJBTwdciX2qjFI277FJnQUjYKssiPvkMzm4eN5OtXGhgyQln1dmSibu5BSNwt45DkSWKptpdUGx8qn9FnBltEVTNC/NeTCT/qoC0sTTgSD1VEvYN9tFPz9xP1ZtEDg2iHGUMctMGxqmVVBWsO4wddGIFE1NysWQjGmrAyMIyPZPmxIGoEQFvU3Hzv5imYiBqc8x4FveXrQIS1f+IUkV5S2NBLXiJqArd0ktK2axmc/0RDuxZ2gcowfI8KGLoenAJJTzv2O58hstWwn5Re9d6Emj9NlWeGv1do6Rf5MCLhAAAAAElFTkSuQmCC",ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPjSURBVHgB5ZtdUhNBEMf/PRM1Pok3wBt4A3ODcAOxyir1iUV8t3z3I3kR9cVwg3CDvYHewHgC45MRdmfsCYIBsuxXuicWv6oUYTcU29vd8+/tngCx+JTc7+wnPUSig0hYZ3cc4Se/TREBg3j0iPAQkYhiuH2/t8U/NuGxESvc43jcoH/61pN9iQgQtNlPNi3Zb/h3BdP8Zn4PjwZTKKLucQvTO3eAw90cmW0oox/qRJcWNPLUhzK6oX4xzBfIO7zYPX7zHUqoetwQJYXnjv0jKKJqOMEUhjQZ2oEieobvv+ghaHcRypquZrglX1qlObJbUEJncXuXbNguL2qEDVx9NWqaruJx2zVbpUYHONztzKh4XSfUl2j3Sj7bAvlQv0K7i8hv5Xelw13c48bXD10zMwmEETe8iT4bMuIlrKzhZdpdgIcXb0uJGl5Fu4uQ1nTpUO+hIfO21OekXAIbItNs5As2v23w9iaa8vc53QEDCLBaOeO87JhO3zu/XalgqcaEX2nu8wM8G6RYEe0ND949Mrxy0xZ53IcsE76pQ0duzDdhghY0MzzkHpeW9qTK6iEOKbw/yLt8ExoUO/UMlwnldnhM+VrGdVOh3HAuOY0xD8lx92RdjC1mQkTjzGXDslRYbnjI219mm6uuUEH18H9ykgpw6bKbcN5wDmUbGvxhkVp/79ZhlBMO8eTN+PQArWXeyjFBkMY8H5obDlM2+q4nrzrJiIHnoohD/Cc7euNcqM+HeYTwijbFXDVs7JTL3688tHiVPXudnh5fvriF5gFMD3F1ui0pR/Khu+1Gy3S+kpx1yCYOvk+gTawxwbsGNOwgG80ayVkBHX6+5mflbQ/0aU0WwrmxhAOeN48XQ7mMxiXrvBt6bUrWZYTKLvTVDHakU8ETfTUOh1k3G7RtRq70sfQsFcg/WNVNaBrKZYi1l83H5wlLyDu0gKeru8c3s5FEq1mur151bFQAR87EPX17D0LI9dx2B1NP7gAN4VRJIYhos9F4O0ZDKDxfCyI+QjIf977UbUlJh3lAfmjo6BB1IQwhjLjhbpbVbg875xqnSFXkPb47l6K0xl+kbTuoVdCZj3NpKfLZFqgYns84dEM3tIywFaQrH+YBHY9X1XSPsdaeVrVdT1U0XVq7z/0vKGL3934UlbAa2r2I6s5Gz92R4rMN9L4FqoY7bgkVnvO5yDi4CN1t2yf6nC45o6Ldi6jvVw+dz8sHvdqidoq64e43t3svaPp8vqWM/jcUQgnLDf6FIyPtMA9E+RZSmGqc/cLNQ1wngqabD89rbfVcJdG+YhlKWIK5g0hEMzyUsJnLok1o/wDJuIIg8C5z+AAAAABJRU5ErkJggg==",pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJmSURBVHgBzVZBaxNBGP2+yW6TUAlpSxG0YIMnPW2FUk+6HipJUWjxIoKQ/AN7trEp/QG2f0AjeLde7M0OHj3lH7h3L7lIK3RnujNhQ2ZmZzObXvog2ew338zbN/veEAx/HG4DsgA0nH/6c4/9i5Uacv799+nXE703aL5e9Ym/r9crL+9CqXFLLwNt7nU88EiEDL7pg/6jJfj/669S44DbQdimA9ofKr2ClGNbeciaD15jXs5S6gyOxZXQ5+8HydCxQbxWh9JKVS/X/Wq8r6vVSQWqr1YgAxHD+EgSy9vzuAcIQ71rbmMpYy6+W998M341WVvsPawBqXnGTM75AW31ojEx3ekNeYwHeqNQ7D2oGQuAV/ooLuvNt21ji8vE8sAQ0daHfnpD0h90a+8o2XKqd5efLsvFVGAoSRENtX6wYFELncl7dUUOhmqrAsTPyfeqUkoMNfd40SQF7NNWl1qJxaDNaGLRaShvLGYP8EtDEDGaLEarbN6GPJDlsjSVDkx2MTVULnGu0e7Pgw2VF3eyyhG7GMVnKrEkT4yWXAZ6vfwky2hT4pMIAVfi0STY1WviPftBXa05xseZWBoNwTiX/bUFxWj2+MTPIAckbxBYvKsbTShMjZYfH9NQzsRiMmfMiJcwmvgUiU8hYokLLowW6WXh4iLxMfrAAeHpYYgIZw6t0Vmz23Doc1AM4xONTusT8QFHOBGPVo07WSfaBAZ58ZmZ2Ga08XPxeAcKwF2xgMVoLvG5FrE8x5lxokUu8bkWsSTf6p5MGi2Jz5eiamciHs0iqeroZ6vbgxkwE3H6z7RIfG4MrgDqht7hgxPlBgAAAABJRU5ErkJggg==",ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgBtVW/S8NAFP6SZqlWKC62urSgbkqhWMd2dNDBzR+DndyKg3+A9h8Q3aoudRCcpIPQtVkLATGTP8AKto1LqbTYpXDeyxmsmJYkpB+Eu3uX+95733u5SLAQScTAlANIUhiewd6AfhHGfY1WkmmbWeGk7BS+Qc7CqF5JZsRQXuEnJLTR68dlTpyF32AII6hkOTmLYRzgDpShm9PR33mrCS+wJ985AlbX/9peNOA678qRPHKXiJ41Mc4ngdw5EJyCUygjd8sXQPVOzHMF4WBuUWSR2QJSG8JZqwHcngD1JziPfBC9jhiJLMUl2zwUdfnqCIf0uIp8IiQOLaeBpYyw1R+BtX0xp6woYsupK3KKbhDlS6G/roqCp7eF00H5HJPrFeCd69jrCj1Ja8tOnUPyLPA67PLuCvIs1RsX5A+qbUSmVPrPHjkgciq2K/JhIDlIFpKIIjazUf+9Zk9upT/sgyEiIqUiUhfp9hnyWzFZ5MMe/EfeeZ97gGzevWMjZ1IJ40ElgG6jhlA0znVPwC8wdoYPrRAwF91mCZOzn3wWoRLDCxhr87MG/8HnYWjHZPoGmZqFEZGnVXsAAAAASUVORK5CYII=",ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAYCAYAAAB5j+RNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOVSURBVHgB1VZPTxNREJ/3tpQeVOonYI2evNgCd5ejByN8AHUXYyLEhHL1UnryCNyIMewSL8ZL6wdQlhjjhT/Fi0eXKxpYVKCWfe85s90my0JDaYHE3+Z139uZN/PbmXmzBbgE5HI5HToAh0sA59wcHBz8jmPkTPvg8qDjKOfz+f52N1wmuTPj/yOHBZyFUzBiG6fqtGurlQ5LKBmaptk41ZVS01LKuWq16sd1CmUj+yuVnqwfqMIfX7ogxFRl3PVOcEi2itCoNZIb9Bxt6uvr65tNUnhYJhljBRxeEASj6M87Qo6OekTKSPjwkGRpbW3NocXzpXsjh4dqJvir9IN9CbU9idwUpHuYoylRemu5XuSwSA7hBDTJDQwMmKgzg4+SUXOEECUimQoZMjYdJ4aEfHxGm3S823jClvoe9TJ/OyhfuZYChRcL96FuABBwMLcb8bXwJcstbB2JKtltoWOijdBWsuZ8ZJ3HSF3H+WJCBls/9zFSMiRFP2gQhFRwsCdAYQSTtlA+jJHK49yF1nByD2/P9fVfnYqRXab7MXIYzmqk4B2RZGpwiNfOVoCyUCMcNK/XJNCVtLWysuJSeprOTgLJerPpx7fu3/ToJTA4N5pllIJ2kcGxx2FnV8CVPi3kRskNi1bhr3YscjrWVREjt4ERfNzKLMqKX998m/v88UsFl5W4LBm5amzuJWQ+HPR4lFb/R9BIa8N8Q1qHjZCnUhsxx9NRDeqRzMexS35imdFru/UZ/LTZyW8wj4yQ4ujq6upoU0ChpRDjdJEMulbVV3sa1g8v/d6WEBxGaeTK5ZINuy8+zUb7CqhvJcsCfZQwijeoNdHA+TA9i6nQQbDjPY9BBzBeGvq167yQ6WXuO+tDpWCb2TrwSUxzTgVibv6p45Le0NDQNJK8gy85Fe9fcURtjNqOi8E5ktaOyMUxYT9BUmAoEFPzluON22MFJbF3cenQmojPWo7fie2uyE3YY0UJfHneeu3SmojUakgsQ4a1mQBEiQE3XlkLs9AB2j+tJ4LpSKz0zB4zGUarDuwOpNUmdhVPcfVeg1Q2A4EDHaJLcjFwTl0vyzh1euYrkGEqO01paBLOD/1C4MmuCez06i6cA7oiR83kmW3qjZVa5prKQpqbVGsceNv/eC+EHCAJkNzEdvygF4Q7by04gstKD2iT+DnbbB6UTtF1K2li3H5SVkpuAtN8PASz3dTahYBaCZwj/gE/N8uPNVjDeQAAAABJRU5ErkJggg==",me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAVCAYAAADM+lfpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAV4SURBVHgBrVZtbFNlFD63a7u2Y6yLsvK10RGZfARaY5jxB6xTMTGoLGokxgS2H2pEE9wPJKgoMw4mIQTwlwFC/40I2BKHWxYNrUqcPwxTPiwg43bg1q37uB1t7/e9vuft7qXdcHzEk7w97+15zznP+XjPvQw8IH0TuugvAvCDRfdamKIyDTS3xcIAaDqIosqJksRJotSb5qV483v1vQ9im7nXgVDovBusxZtlWW3IZEQ/z0tuwkFRNJAkBVRVM88iKIZhwGazgK7rZKmg6mpEyIqneVkKH2h7g30oMCdCFwLE3me3b/OBRCIF2axEAeSTw2EFp8NO9+Nc9u4OqAeN6MqQ4fmInBFajhx5K3JfYNpD572Maj2WTKYoiKkA8umxxXY493M7eL1eKH+0HgYGJ2Am0jSNBJUhwFPBrCi0hI83s/nyovyHk6HLDdm01HntWmLp+HiWKOszGp/lmoDdrZ+A2+2GsnLfjMCRsIR2ezGUuFx+WZAaF1QHrvwd644Zcqux+bbj4ubEABeMx0dN5eXL5pIyWAsMjnM89N3InYnHr1D++NIVsIKczZeXu52wuPqRAl1eUIhsBAQBYMHC+W6rLRl6Yf2XzZ1nth+gYPGnvf28dyIr9vX1JQvKxqg90NbWWmDQ7/fD2+80w9BIBfzx+9cQDoenyXd+ug8GExPw/pZXCmRYzg0bXofFS9abJR0YSMDIyHig87sPoxaKWJLPkowUAHE4bNDTc47uGxoaoLGxEQKBAPT29sJHO7bCumeqgWVZU44LnaH8q0NfQIlTMMGhLsrx/MGDeyFz+86N93jmkNtnC+K+6PCxXwPDw+kPeF4uiKKqshx++ekUJBIJ+HjnUciK1bC27iVIT1yHWCwGq1f74OjRw/Ts563HoaR0JdTXPw3fnzlFe8jpxGB6YNOmd2GW+1lY5auH2tVLIBr9EUpLHbCwqpb2mMWC+dDdnnlPRS2kw+sEoRAIksup0yjRcJbPJS3/tgwN/UM5ZmtwMEWvtiBmzHKgLtIib82kbor4LIa7UVnZbNIvTINFkVVv/uAyiGWvmGk2wK5Y5jGdIEiDGyD72aumDsdxdD+7rIpybOj+/gt0v8pXS2wqpi+73QY6YymzKKrKEsjTwCSHb5hRukj9Vy4vgVMn9lEn2AOJRJLKa2qeoBx7LB7PgfH5fGZWnQ6V6g7e6oZgMEjtPVrhK/DF8wJBoHNWMtKjxcVWOiHzSRLHKEcDuAzCqJ9btwlOnjhEn7EM/aRi8+fNhtOTDR2PxylH4K+9utbURXCtuw/Cn5e06WB0iFq3Na+L7N3/A8vzitcYcpjS385dovuNG98Ez9wFkxHXgtW+CEbIQFxb9zxULaoh78dSwMxiZvA/XAZhP2FJjAxXVj0JFy9jkEoBmOHhUba7Y3uYTjSG0ZtcLuvZdDqXnfJyl9kbL768ZdIAwNXr+JuYNFEJzlmVcGsgF8DlvxLkeQ3dx2JdlK9ctYb8lwMzNIJrGKbS0FCSvO35JtzTOYPZsduhmQCiB/AmYYoxGuMm3S/NI+WKxXJZrfBUz3gWgZDea+nq2BHB5wJPbfu7tyqyvmtuhcPNjfXTGt8csBZ0/r0Iy1XqyjX3HM9SmrGpJEkS3Lw1yGUmMi3Gq2AaGKQ9ezq9jK3oGAEQkCSNfK/o8H+RqqqQTI7B6OhYRBHkpq6uHWy+/D9rsGdvZyMRb5ZkjYJSlIcHxfM8pFJpAoKLKIpolmUq3bMhMFMKaI3kaB0Z3wHMlJEtch0n1x2g+M0iyzIphUzKK+rk2kYJjyqKEukIb4vM5OuBunPXrpBbwe9fBnyaCm6Sdq9CprdOlkxKoMoqKKoclwSVVTSVTYOjNxxs4u7X/r/x9c7BvEPEwQAAAABJRU5ErkJggg==",xe="data:image/png;base64,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",he={class:"container"},fe={class:"max-w-[834px] text-center mx-auto relative z-10"},be={class:"flex justify-center gap-6 flex-wrap"},we={class:"grid counter-wrapper lg:grid-cols-4 grid-cols-2 gap-6 mt-[100px] text-center"},ve={class:"absolute rotate-[330deg] bg-white w-[37px] h-[35px] backdrop-blur-[41.2449836730957px] xl:top-[23.5%] xl:left-[22.5%] top-[22%] left-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Fe=["src"],Be={class:"absolute rotate-12 bg-white w-[50px] h-[50px] backdrop-blur-[41.2449836730957px] xl:top-[42%] xl:left-[17%] top-[45%] left-[15%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Ue=["src"],Ce={class:"absolute rotate-[350deg] bg-white w-[58px] h-[58px] backdrop-blur-[41.2449836730957px] xl:top-[54%] xl:left-[24%] top-[61%] left-[20%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Ee=["src"],ye={class:"absolute rotate-[40deg] bg-white w-[38px] h-[38px] backdrop-blur-[41.2449836730957px] top-[20%] right-[25%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Re=["src"],Ne={class:"absolute rotate-[320deg] bg-white w-[51px] h-[51px] backdrop-blur-[41.2449836730957px] xl:top-[38%] xl:right-[20%] lg:top-[38%] top-[34%] right-[13%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},je=["src"],Te={class:"absolute rotate-[25deg] bg-white w-[53px] h-[53px] backdrop-blur-[41.2449836730957px] top-[46%] xl:right-[14%] right-[10%] max-md:hidden rounded-[6px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},ke=["src"],Ie={class:"absolute rotate-[25deg] bg-white w-[67px] h-[67px] backdrop-blur-[41.2449836730957px] xl:top-[57%] xl:right-[22%] top-[57%] right-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]"},Se=["src"],Le={class:"pt-[50px] pb-[100px]"},Me={class:"container"},Ye={class:"pb-[100px] relative"},He={class:"container"},Qe={class:"flex flex-col gap-6 lg:flex-row items-center justify-between"},Ke={class:"w-full lg:w-1/2"},Pe={class:"absolute bottom-0 left-[45%] z-[-1]"},Ve=["src"],Xe={class:"pb-[100px]"},Je={class:"container"},De={class:"container"},Ge={class:"grid grid-cols-2 working-wrapper md:grid-cols-4 gap-x-6"},We=["src","alt"],Oe={class:"text-center"},qe={class:"text-xl font-semibold"},ze={class:"overflow-hidden whitespace-nowrap py-[50px]"},_e={class:"flex gap-16 md:gap-[170px] animate-marquee"},Ze=["src"],$e={class:"text-4xl md:text-[50px] font-semibold"},nt={__name:"index",props:{itemsText:{type:Array,default:()=>new Array(40).fill("Get In Touch")}},setup(g){return C(()=>"hidden"),(n,t)=>{const s=I;return l(),i(h,null,[e("section",{class:"pt-[187px] pb-11 relative",style:x({backgroundImage:`url(${r(re)})`})},[e("div",he,[e("div",fe,[t[2]||(t[2]=e("h6",{class:"text-base text-primarycolor mb-[38px]"},"Welcome to Shreeom",-1)),t[3]||(t[3]=e("h1",{class:"text-[85px] leading-[102px] font-semibold max-lg:text-5xl max-sm:text-4xl"}," Turn your ideas into great products ",-1)),t[4]||(t[4]=e("p",{class:"mt-[30px] mb-[50px] max-w-[527px] mx-auto text-lg"}," Building an expert software development team for your project, we put your needs first. Let's join us now! ",-1)),e("div",be,[a(s,{to:"/",class:"theme-btn px-[60px] py-[14px]"},{default:F(()=>t[0]||(t[0]=[B(" Let's Talk ")])),_:1}),a(s,{to:"/",class:"theme-btn-border px-[60px]"},{default:F(()=>t[1]||(t[1]=[B(" About Us ")])),_:1})])]),e("div",we,[a(b,{value:"100",label:"Projects Delivered"}),a(b,{value:"2",label:"Years of Experience"}),a(b,{value:"98",label:"Clients Satisfaction"}),a(b,{value:"10",label:"Team Members"})])]),t[5]||(t[5]=e("div",{class:"w-[50%] h-[234px] hero-bg absolute top-[30%] left-1/3 z-0"},null,-1)),e("div",ve,[e("img",{src:r(Ae),alt:"ai"},null,8,Fe)]),e("div",Be,[e("img",{src:r(pe),alt:"vue"},null,8,Ue)]),e("div",Ce,[e("img",{src:r(de),alt:"figma"},null,8,Ee)]),e("div",ye,[e("img",{src:r(ue),alt:"ps"},null,8,Re)]),e("div",Ne,[e("img",{src:r(me),alt:"php"},null,8,je)]),e("div",Te,[e("img",{src:r(ge),alt:"node"},null,8,ke)]),e("div",Ie,[e("img",{src:r(xe),alt:"react"},null,8,Se)])],4),e("section",Le,[e("div",Me,[e("div",null,[a(f,{class:"text-center",largeMargin:"true",title:"Our Services",subtitle:"Our Core Services we deliver"}),a(Y)])])]),e("section",Ye,[e("div",He,[e("div",Qe,[e("div",Ke,[a(f,{class:"mb-[25px]",title:"About us",subtitle:"The Shreeomsoft Difference"}),t[7]||(t[7]=e("p",{class:"mb-[30px] text-lg sm:leading-9"},"The shreeomsoft is a website and mobile development companies and we are helping startup businesses turn their idea into a digital product into reality. With a team of over 10+ professionals and 2+ years of outstanding service such as branding design, web design & development, app development, maintenance, we are providing dedicated support.",-1)),a(s,{to:"/",class:"inline-block theme-btn px-[60px] py-[14px]"},{default:F(()=>t[6]||(t[6]=[B("Learn more")])),_:1})]),t[8]||(t[8]=e("div",{class:"w-full lg:w-1/2"},[e("img",{src:H,class:"mx-auto",alt:""})],-1))])]),e("div",Pe,[e("img",{src:r(ie),alt:""},null,8,Ve)])]),e("section",Xe,[e("div",Je,[e("div",null,[a(f,{class:"text-center",largeMargin:"true",title:"Projects",subtitle:"Our Core Services we deliver"}),a(M,{showCategories:!1})])])]),e("section",{class:"pb-[100px] bg-auto bg-bottom bg-no-repeat",style:x({backgroundImage:`url(${r(le)})`})},[e("div",De,[e("div",null,[a(f,{class:"text-center",largeMargin:!0,title:"Our working process",subtitle:"How to start ?"}),e("div",Ge,[(l(!0),i(h,null,w(r(ne),(o,u)=>(l(),i("div",{key:o.id,class:"md:mb-[100px] mb-12"},[e("div",{class:"w-[150px] h-[150px] rounded-full mx-auto flex items-center justify-center mb-3",style:x({background:o.bgColor})},[e("img",{src:o.image,alt:o.title},null,8,We)],4),e("div",Oe,[e("p",qe,p(o.id)+". "+p(o.title),1)])]))),128))])])])],4),a(Z),e("section",ze,[e("div",_e,[(l(!0),i(h,null,w(g.itemsText,(o,u)=>(l(),i("div",{key:u,class:"flex items-center gap-4 md:gap-[25px] text-primarycolor"},[e("img",{src:r(ce),class:"max-md:w-[15%]",alt:"Star"},null,8,Ze),e("h4",$e,p(o),1)]))),128))])])],64)}}};export{nt as default};
