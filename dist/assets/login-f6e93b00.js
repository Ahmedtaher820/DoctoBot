import{u as k,_ as $,a as C,b as V,r as u,e as A,m as B}from"./index-4b422c59.js";import{f as L,l as S,o as l,m as M,w as e,a as s,n as N,p as _,v as m,u as o,c as r,r as p,t as h,F as f,b as d,k as g,q as T,j,s as q}from"./index-f0d984af.js";const D="/background/Mask.svg",E={class:"flex flex-col justify-start items-start md:px-16"},F=s("div",{class:"logo py-3 px-6 second-bg"},null,-1),U=s("h2",{class:"text-3xl my-6"},"Login to Continue",-1),G=["onSubmit"],P={class:"form-field pass"},R=s("label",null,"Email",-1),W={class:"error-msg"},Y={class:"form-field pass"},z=s("label",null,"Password",-1),H={class:"error-msg"},I={class:"grid"},J=s("span",{class:"flex-1"}," Create With Google ",-1),K=s("img",{src:$,class:"right-4 absolute top-1",alt:""},null,-1),O=s("span",{class:"flex-1"}," Create An Twitter ",-1),Q=s("img",{src:C,class:"right-4 absolute top-1",alt:""},null,-1),X=s("div",{class:"right-bg py-4"},[s("div",{class:"img-content rounded-md overflow-hidden bg-white"},[s("img",{src:D,class:"w-full h-full border rounded-md",alt:""})])],-1),os=L({__name:"login",setup(Z){const a=S({email:"",password:""}),v={email:{required:u,email:A},password:{required:u,minLength:B(8)}},n=k(v,a),b=T(),w=()=>{n.value.$touch(),!n.value.$invalid&&b.push({path:"/"})};return(ss,i)=>{const c=j,x=q("router-link"),y=V;return l(),M(y,null,{"left-part":e(()=>[s("div",E,[F,U,s("form",{class:"w-full flex flex-col gap-5",onSubmit:N(w,["prevent"])},[s("div",P,[_(s("input",{type:"email",class:"w-full",placeholder:" ","onUpdate:modelValue":i[0]||(i[0]=t=>o(a).email=t)},null,512),[[m,o(a).email]]),R,(l(!0),r(f,null,p(o(n).email.$errors,t=>(l(),r("div",{class:"input-errors",key:t.$uid},[s("div",W,h(t.$message),1)]))),128))]),s("div",Y,[_(s("input",{type:"password",class:"w-full",placeholder:" ","onUpdate:modelValue":i[1]||(i[1]=t=>o(a).password=t)},null,512),[[m,o(a).password]]),z,(l(!0),r(f,null,p(o(n).password.$errors,t=>(l(),r("div",{class:"input-errors",key:t.$uid},[s("div",H,h(t.$message),1)]))),128))]),s("div",I,[d(c,{type:"submit",class:"mt-4 hover:bg-primary-600 duration-200 transition-all"},{default:e(()=>[g(" Create An Account ")]),_:1}),d(c,{type:"submit",class:"mt-4 relative text-black hover:shadow-md duration-200 transition-all flex items-center","custome-bg":"bg-white "},{default:e(()=>[J,K]),_:1}),d(c,{type:"submit",class:"mt-4 md:w-80 text-black hover:shadow-md duration-200 transition-all flex items-center","custome-bg":"bg-white relative"},{default:e(()=>[O,Q]),_:1})]),d(x,{to:"/register",class:"text-base underline"},{default:e(()=>[g("You dont have account?")]),_:1})],40,G)])]),"right-part":e(()=>[X]),_:1})}}});export{os as default};
