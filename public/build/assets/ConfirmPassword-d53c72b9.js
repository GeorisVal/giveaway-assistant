import{_ as p,r as l,j as a,a as s,n as c}from"./app-2ba340fb.js";import{G as u}from"./GuestLayout-a3137082.js";import{T as f,I as w}from"./TextInput-0b1104e2.js";import{I as h}from"./InputLabel-7e8a966d.js";import{P as g}from"./PrimaryButton-6eff5780.js";/* empty css            */import"./ApplicationLogo-b5cc9c47.js";function j(){const{data:e,setData:t,post:o,processing:n,errors:m,reset:i}=p({password:""});l.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(w,{message:m.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:n,children:"Confirm"})})]})]})}export{j as default};