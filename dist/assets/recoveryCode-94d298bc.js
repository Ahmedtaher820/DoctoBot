import{_ as k}from"./Auth-cec95aeb.js";import{d as $,l as V,r as p,b as n,c as d,u as t,e as S,f as B,h as u,w as r,g as e,n as s,ab as L,a8 as N,ad as F,F as D,i as E,t as f,y as H,v as M,x as T,k as j}from"./index-862ae978.js";import{_ as q}from"./Mask-adf02053.js";import{u as A,r as P,a as R}from"./index-08879cc7.js";import{a as U}from"./Auth-8cb73594.js";const z={class:"flex flex-col justify-start items-start md:px-16"},G=e("div",{class:"logo py-3 px-6 second-bg"},null,-1),I={class:"text-3xl mt-6 mb-5 font-bold"},J=e("br",null,null,-1),K=e("span",{class:"text-sm"},"or",-1),O=["onSubmit"],Q={class:"form-field pass"},W=e("label",null,"Code",-1),X={class:"error-msg"},Y={class:"text-red-500 text-lg font-semibold"},Z=e("div",{class:"right-bg py-4"},[e("div",{class:"img-content rounded-md overflow-hidden bg-white"},[e("img",{src:q,class:"w-full h-full border rounded-md",alt:""})])],-1),re=$({__name:"recoveryCode",setup(ee){const{resetCodeFun:h}=U(),o=V({resetCode:""}),v={resetCode:{required:P,minLength:R(6)}},l=A(v,o),i=p(""),c=p(!1),g=H(),x=()=>{l.value.$touch(),!l.value.$invalid&&(c.value=!0,h(o).then(()=>{g.push({path:"/resetPassword"})}).catch(_=>{i.value=_.response.data.message,console.log(i.value)}).finally(()=>{c.value=!1}))};return(_,m)=>{const b=j,y=M("router-link"),C=T,w=k;return n(),d("div",null,[t(c)?(n(),S(b,{key:0})):B("",!0),u(w,null,{"left-part":r(()=>[e("div",z,[G,e("h2",I,[s("Enter security code "),J,s(),K,s(),u(y,{class:"text-base text-primary ms-3",to:"/login"},{default:r(()=>[s("Login Here")]),_:1})]),e("form",{class:"w-full flex flex-col gap-4",onSubmit:L(x,["prevent"])},[e("div",Q,[N(e("input",{type:"text",class:"w-full",placeholder:" ","onUpdate:modelValue":m[0]||(m[0]=a=>t(o).resetCode=a)},null,512),[[F,t(o).resetCode]]),W,(n(!0),d(D,null,E(t(l).resetCode.$errors,a=>(n(),d("div",{class:"input-errors",key:a.$uid},[e("div",X,f(a.$message),1)]))),128))]),e("p",Y,f(t(i)),1),u(C,{type:"submit",class:"hover:bg-primary-600 duration-200 transition-all"},{default:r(()=>[s(" Continue ")]),_:1})],40,O)])]),"right-part":r(()=>[Z]),_:1})])}}});export{re as default};
