import{r as o,a as e,j as i,F as m,d as g}from"./app-a55d2435.js";import{t as x}from"./transition-0c0e29ad.js";import{P as d}from"./PrimaryButton-2b93aabb.js";import{S as w}from"./SecondaryButton-6cc98272.js";const h=o.createContext(),l=({children:t})=>{const[n,r]=o.useState(!1),a=()=>{r(s=>!s)};return e(h.Provider,{value:{open:n,setOpen:r,toggleOpen:a},children:e("div",{className:"relative",children:t})})},v=({children:t})=>{const{open:n,setOpen:r,toggleOpen:a}=o.useContext(h);return i(m,{children:[e("div",{onClick:a,children:t}),n&&e("div",{className:"absolute inset-0 z-40",onClick:()=>r(!1)})]})},N=({align:t="right",width:n="48",contentClasses:r="py-1 bg-white",children:a})=>{const{open:s,setOpen:u}=o.useContext(h);let c="origin-top";t==="left"?c="origin-top-left left-0":t==="right"&&(c="origin-top-right right-0");let p="";return n==="48"&&(p="w-48"),e(m,{children:e(x,{as:o.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`fixed left-[22em] z-50 mt-2 rounded-md shadow-lg ${c} ${p}`,onClick:()=>u(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:a})})})})},b=({href:t,method:n,as:r,children:a})=>e(g,{href:t,method:n,as:r,children:a});l.Trigger=v;l.Content=N;l.Link=b;const f=l;function L(t){function n(r){r.shiftKey?window.location.href="/login":window.location.href="/"}return t.auth.user!=null?e(m,{children:e("nav",{className:"bg-[#fcfcff] border-gray-200 py-2.5 rounded",children:i("div",{className:"flex flex-wrap justify-between items-center w-full",children:[e("div",{className:"",children:i(g,{href:"/",className:"flex items-center",children:[e("img",{src:"ga.png",className:"h-20 mr-3",alt:"logo",onClick:r=>{n(r)}}),e("span",{className:"self-center text-xl font-semibold whitespace-nowrap hidden",children:"Giftaway"})]})}),e("div",{className:"block w-auto max-md:hidden",id:"navbar-default",children:i("ul",{className:"flex flex-row p-4 border-[#fcfcff] rounded-lg space-x-8 mt-0 text-sm font-medium border-0 bg-[#fcfcff]",children:[e("li",{children:e("a",{href:"https://docs.google.com/spreadsheets/d/1S4_yGtCH_6VjcLTU3xxzBjwDpqDEHMJ06Nyivi7_ngo/edit#gid=1151497179","aria-current":"page",target:"_blank",children:e(d,{children:"Customer Support Sheet"})})}),e("li",{children:e(f.Link,{href:route("calendar"),"aria-current":"page",children:e(d,{children:"Calendar"})})}),e("li",{children:e(f.Link,{href:route("donations.index"),"aria-current":"page",children:e(d,{children:"Donations"})})}),e("li",{children:e(w,{children:i(f.Link,{href:route("logout"),method:"post",as:"button",children:["Log out",e("i",{className:"fa-solid fa-right-from-bracket pl-2"})]})})})]})})]})})}):e("nav",{className:"bg-[#fcfcff] border-gray-200 py-2.5 rounded",children:e("div",{className:"flex flex-wrap items-center w-full sm:max-xl:flex-col sm:max-xl:items-start",children:i("div",{className:"flex sm:max-xl:flex-col",children:[e("img",{src:"ga.png",className:"h-20 mr-3 cursor-pointer",alt:"logo",onClick:r=>{n(r)}}),e("span",{className:"self-center text-xl font-semibold whitespace-nowrap hidden",children:"Giftaway"})]})})})}export{f as D,L as N};