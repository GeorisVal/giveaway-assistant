import{r as o,a as e,j as i,F as m,d as p}from"./app-554e89a8.js";import{t as x}from"./transition-b3776586.js";import{P as g}from"./PrimaryButton-0514403d.js";import{S as w}from"./SecondaryButton-106f90e5.js";const f=o.createContext(),l=({children:n})=>{const[t,r]=o.useState(!1),a=()=>{r(s=>!s)};return e(f.Provider,{value:{open:t,setOpen:r,toggleOpen:a},children:e("div",{className:"relative",children:n})})},v=({children:n})=>{const{open:t,setOpen:r,toggleOpen:a}=o.useContext(f);return i(m,{children:[e("div",{onClick:a,children:n}),t&&e("div",{className:"absolute inset-0 z-40",onClick:()=>r(!1)})]})},y=({align:n="right",width:t="48",contentClasses:r="py-1 bg-white",children:a})=>{const{open:s,setOpen:u}=o.useContext(f);let c="origin-top";n==="left"?c="origin-top-left left-0":n==="right"&&(c="origin-top-right right-0");let h="";return t==="48"&&(h="w-48"),e(m,{children:e(x,{as:o.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`fixed left-[22em] z-50 mt-2 rounded-md shadow-lg ${c} ${h}`,onClick:()=>u(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:a})})})})},N=({href:n,method:t,as:r,children:a})=>e(p,{href:n,method:t,as:r,children:a});l.Trigger=v;l.Content=y;l.Link=N;const d=l;function L(n){function t(r){r.shiftKey?window.location.href="/login":window.location.href="/"}return n.auth.user!=null?e(m,{children:e("nav",{className:"bg-gray-100 border-gray-200 py-2.5 rounded",children:i("div",{className:"flex flex-wrap justify-between items-center w-full",children:[e("div",{className:"",children:i(p,{href:"/",className:"flex items-center",children:[e("img",{src:"ga.png",className:"h-20 mr-3",alt:"logo",onClick:r=>{t(r)}}),e("span",{className:"self-center text-xl font-semibold whitespace-nowrap hidden",children:"Giftaway"})]})}),e("div",{className:"block w-auto max-md:hidden",id:"navbar-default",children:i("ul",{className:"flex flex-row p-4 border-gray-100 rounded-lg space-x-8 mt-0 text-sm font-medium border-0 bg-gray-100",children:[e("li",{children:e(d.Link,{href:route("calendar"),"aria-current":"page",children:e(g,{children:"Calendar"})})}),e("li",{children:e(d.Link,{href:route("donations.index"),"aria-current":"page",children:e(g,{children:"Donations"})})}),e("li",{children:e(w,{children:i(d.Link,{href:route("logout"),method:"post",as:"button",children:["Log out",e("i",{className:"fa-solid fa-right-from-bracket pl-2"})]})})})]})})]})})}):e("nav",{className:"bg-gray-100 border-gray-200 py-2.5 rounded",children:e("div",{className:"flex flex-wrap items-center w-full sm:max-xl:flex-col sm:max-xl:items-start",children:i("div",{className:"flex sm:max-xl:flex-col",children:[e("img",{src:"ga.png",className:"h-20 mr-3 cursor-pointer",alt:"logo",onClick:r=>{t(r)}}),e("span",{className:"self-center text-xl font-semibold whitespace-nowrap hidden",children:"Giftaway"})]})})})}export{d as D,L as N};