import{a as b,_ as k,b as $}from"./Auth-e2e564c6.js";import{d as S,P as V,r as d,c as l,u as e,b as B,e as L,g as u,w as _,i as a,f as s,ai as P,ag as C,aj as N,F as j,h as D,t as F,ak as M,k as q}from"./index-7414be00.js";import{_ as A}from"./Mask-adf02053.js";import{u as E,r as m,e as H,m as R}from"./index-b5b355ee.js";const T={class:"flex flex-col justify-start items-start md:px-16"},U=s("div",{class:"logo py-3 px-6 second-bg"},null,-1),z=s("h2",{class:"text-3xl my-6 font-bold"},"Sign in to your account",-1),G=["onSubmit"],I={class:"form-field pass"},J=s("label",null,"Password",-1),K={class:"error-msg"},O=s("div",{class:"right-bg py-4"},[s("div",{class:"img-content rounded-md overflow-hidden bg-white"},[s("img",{src:A,class:"w-full h-full border rounded-md",alt:""})])],-1),ss=S({__name:"resetPassword",setup(Q){const{userLogin:p}=b(),t=V({email:"",password:""}),f={email:{required:m,email:H},password:{required:m,minLength:R(8)}},r=E(f,t),h=M(),n=d(!1),g=d(),v=()=>{r.value.$touch(),!r.value.$invalid&&(n.value=!0,p(t).then(()=>{h.push({path:"/"})}).catch(i=>{console.log(i)}).finally(()=>{n.value=!1}))};return(i,c)=>{const w=q,x=$,y=k;return a(),l("div",null,[e(n)?(a(),B(w,{key:0})):L("",!0),u(y,null,{"left-part":_(()=>[s("div",T,[U,z,s("form",{class:"w-full flex flex-col gap-5",onSubmit:P(v,["prevent"])},[s("div",I,[C(s("input",{type:"password",class:"w-full",placeholder:" ","onUpdate:modelValue":c[0]||(c[0]=o=>e(t).password=o)},null,512),[[N,e(t).password]]),J,(a(!0),l(j,null,D(e(r).password.$errors,o=>(a(),l("div",{class:"input-errors",key:o.$uid},[s("div",K,F(o.$message),1)]))),128))]),u(x,{errors:e(g)},null,8,["errors"])],40,G)])]),"right-part":_(()=>[O]),_:1})])}}});export{ss as default};
