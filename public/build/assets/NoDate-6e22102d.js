import{R as s,j as l,a as e,b as u,F as P,n as F}from"./app-c3831edb.js";import{h as v}from"./moment-fbc5633a.js";import{Q,k as R}from"./react-toastify.esm-e71df230.js";import{N as B}from"./NavLink-04b5d736.js";import{B as M}from"./Buttons-b3c0ff6f.js";import{R as V}from"./Responsive-85f0714c.js";import{F as j}from"./PlatformList-dfd839c4.js";/* empty css                      *//* empty css            */import"./transition-2524eab3.js";import"./PrimaryButton-ede05bab.js";import"./SecondaryButton-e9b436aa.js";import"./Checkbox-0e308bfc.js";const W=t=>{const h=a=>Q("Copied "+a+" to clipboard"),[r,c]=s.useState({status:t.status}),[n,f]=s.useState({currencies:t.currencies}),[k,i]=s.useState(!1),[b,C]=s.useState({note:t.notes}),[o,g]=s.useState({items:t.items}),[w,d]=s.useState(!1);s.useState(!1);const[p,D]=s.useState(0),S=()=>{switch(t.shoutout){case"Yes - Shout out my Nookazon account":return"Yes - Nookazon";case"Yes - Shout out my Discord account":return"Yes - Discord";case"No - I would like to remain anonymous":return"No";default:return"Something went wrong"}},_=()=>{switch(r.status){case"Pending pick up":return"bg-cream-550 border-[#f9fafb] py-1";case"Did Not Respond":return"bg-red-575 border-[#f9fafb] py-1";case"Queued for Programs":return"bg-purple-550 border-[#f9fafb] py-1";case"Queued for Website":return"bg-lightgreen-550 border-[#f9fafb] py-1";case"Queued for Discord":return"bg-discord-550 border-[#f9fafb] py-1";case"Donator Contacted":return"bg-yellow-550 border-[#f9fafb] py-1";case"Items Collected":return"bg-orange-550 border-[#f9fafb] py-1";case"Invalid":return"bg-red-575 border-[#f9fafb] py-1";case"Cancelled":return"bg-red-575 border-[#f9fafb] py-1";case"Complete":return"bg-gris-550 border-[#f9fafb]";default:return"bg-white border-[#f9fafb]"}},I=v(new Date).format("YYYY-MM-DD"),x=a=>{a.preventDefault(),d(!1),g({items:o}),u.put("/api/donations/"+t.id,{items:o})},N=a=>{i(!1),a.preventDefault(),f({currencies:n}),u.put("/api/donations/"+t.id,{currencies:n})},z=a=>{c({...r,[a.target.name]:a.target.value}),console.log(r),u.put("/api/donations/"+t.id,{status:a.target.value}).then(m=>{})},y=a=>{a.preventDefault(),document.activeElement.blur(),u.put("/api/donations/"+t.id,{notes:b}).then(m=>{console.log(m)})},E=a=>{c({...r,[a.target.name]:a.target.value}),u.put("/api/donations/"+t.id,{schedule_date:a.target.value}).then(m=>{console.log(m)})};async function Y(){await navigator.clipboard.writeText(t.discord_id),await h(t.discord_username+"'s ID ")}return l("tr",{className:p?"bg-[#fffbab] border-b leading-tight":"bg-white border-b leading-tight",children:[e("td",{className:"pl-6 sticky z-10 bg-white left-0",children:e("input",{type:"checkbox",tabIndex:"-1",id:"checkbox"+t.id,onChange:a=>D(!p),disabled:!t.canEdit})}),e("td",{className:"pr-6 truncate z-10 bg-white sticky left-[3rem] ...",children:v(t.timestamp).format("DD-MM-YYYY")}),e("td",{className:"sticky z-10 left-[9.5rem] bg-white px-2",children:e("form",{id:"form"+t.id,children:l("select",{name:"status",tabIndex:"-1",id:"status"+t.id,value:r.status,defaultValue:t.status,className:_(),onChange:z,disabled:!t.canEdit,children:[e("option",{value:"Invalid",children:"Invalid"}),e("option",{value:"Did Not Respond",children:"DNR"}),e("option",{value:"Donator Contacted",children:"Contacted"}),e("option",{value:"Pending pick up",children:"Pending Pickup"}),e("option",{value:"Items Collected",children:"Collected"}),e("option",{value:"Queued for Website",children:"Scheduled Web"}),e("option",{value:"Queued for Discord",children:"Scheduled Discord"}),e("option",{value:"Queued for Programs",children:"Scheduled Programs"}),e("option",{value:"Completed",children:"Done"}),e("option",{value:"Cancelled",children:"Cancelled"}),e("option",{value:""})]})})}),e("td",{className:"sticky z-10 left-[23.2rem] bg-white px-3",children:e("input",{type:"date",tabIndex:"-1",min:I,className:t.schedule_date?"py-1 border-[#e5e5e5]":"text-red-500 border-[#FED3CD] py-1",defaultValue:t.schedule_date,onChange:E,disabled:!t.canEdit})}),e("td",{className:"pl-6 truncate ...",children:e("form",{id:"note"+t.id,onSubmit:y,className:"flex flex-row",children:e("input",{type:"text",defaultValue:t.notes,className:"leading-3 border-[#e5e5e5] py-1",onChange:a=>C(a.target.value),onBlur:t.notes===b.note?()=>console.log("If you see this, you are too curious."):y,disabled:!t.canEdit})})}),e("td",{className:"px-6 truncate ...",children:t.platform=="Nookazon Programs (i.e. Streams, Contests, etc.)"?"Nookazon Programs":t.platform}),e("td",{className:"px-6 text-center truncate ...",children:S()}),e("td",{className:"px-6 truncate ...",children:t.contact_method}),e("td",{className:"px-6 truncate max-w-[215px] hover:max-w-[5000px] ...",children:t.discord_username}),e("td",{className:"px-6 truncate max-w-[215px] hover:max-w-[5000px] hover:cursor-pointer ...",onClick:Y,children:t.discord_id}),e("td",{className:"px-6 truncate ...",children:e("a",{href:t.nookazon_link,tabIndex:"-1",children:t.nookazon_username})}),e("td",{className:"px-6 max-w-[250px] hover:max-w-[5000px] truncate ...",children:e("form",{id:"currencies"+t.id,onSubmit:t.currencies===n.currencies?()=>i(!1):N,className:"flex flex-row",children:k?e("input",{type:"text",autoFocus:!0,defaultValue:n.currencies,className:"leading-3 p-1 border-[#f9fafb]",onChange:a=>f(a.target.value),onBlur:t.currencies===n.currencies?()=>i(!1):N}):e("p",{className:t.canEdit?"cursor-pointer":"cursor-default",onClick:()=>t.canEdit?i(!0):i(!1),children:n.currencies})})}),e("td",{className:"px-6 max-w-[250px] hover:max-w-[5000px] truncate ...",children:e("form",{id:"items"+t.id,onSubmit:t.items===o.items?()=>d(!1):x,className:"flex flex-row",children:w?e("input",{type:"text",autoFocus:!0,defaultValue:o.items,className:"leading-3 p-1 border-[#f9fafb] w-auto",onChange:a=>g(a.target.value),onBlur:t.items===o.items?()=>d(!1):x}):e("p",{className:t.canEdit?"cursor-pointer":"cursor-default",onClick:()=>t.canEdit?d(!0):d(!1),children:o.items})})})]})},T=W;function te({donations:t,platform:h,auth:r}){return l(P,{children:[e(F,{title:"Scheduled w/o dates"}),l("div",{className:"mx-20",children:[e("header",{children:e(B,{auth:{user:"logged"}})}),e(R,{autoClose:1e3,position:"top-center"}),e("div",{className:"relative overflow-x-scroll overflow-y-scroll max-h-[78vh] shadow-md sm:rounded-lg",children:l("table",{className:"w-full text-sm text-left text-gray-500",children:[e("thead",{className:"text-xs text-black-550 uppercase bg-gray-50 z-20 sticky top-0",children:l("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 bg-gray-50 sticky left-0"}),e("th",{scope:"col",className:"px-6 py-3 truncate bg-gray-50 sticky left-[3rem] cursor-default ...",children:"Date"}),e("th",{scope:"col",className:"px-6 py-3 truncate bg-gray-50 cursor-default sticky left-[9.5rem] ...",children:"Status"}),e("th",{scope:"col",className:"px-6 py-3 truncate bg-gray-50 cursor-default sticky left-[23.2rem] ...",children:"Scheduled date"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Notes"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:r.user.canEdit?e(j,{platform:h}):e("p",{className:"cursor-not-allowed",children:"platform ⇅"})}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Shoutout ?"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Contact"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Discord user"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Discord ID"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Nookazon user"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Bells/NMTs"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Items"})]})}),e("tbody",{children:t.map(c=>e(T,{id:c.id,timestamp:c.timestamp,status:c.status,notes:c.notes,schedule_date:c.schedule_date,platform:c.platform,shoutout:c.shoutout,contact_method:c.contact_method,discord_username:c.discord_username,discord_id:c.discord_id,nookazon_username:c.nookazon_username,nookazon_link:c.nookazon_link,currencies:c.currencies,items:c.items,canEdit:r.user.canEdit},c.id))})]})}),e(M,{}),e(V,{})]})]})}export{te as default};
