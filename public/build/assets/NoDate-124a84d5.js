import{R as s,j as l,a as e,b as d,F as Q,n as R}from"./app-7bd055ca.js";import{h as v}from"./moment-fbc5633a.js";import{Q as B,k as M}from"./react-toastify.esm-c73c7fa6.js";import{N as V}from"./NavLink-e8e2e25b.js";import{B as T}from"./Buttons-8a053dfa.js";import{R as j}from"./Responsive-704e30df.js";import{F as W}from"./PlatformList-827116f7.js";/* empty css                      *//* empty css            */import"./transition-547da5f9.js";import"./PrimaryButton-0874e1e7.js";import"./SecondaryButton-2914276a.js";import"./Checkbox-4ae2980f.js";const H=t=>{const i=a=>B("Copied "+a+" to clipboard"),[r,c]=s.useState({status:t.status}),[n,f]=s.useState({currencies:t.currencies}),[k,u]=s.useState(!1),[b,w]=s.useState({note:t.notes}),[o,g]=s.useState({items:t.items}),[C,m]=s.useState(!1);s.useState(!1);const[x,D]=s.useState(0),S=()=>{switch(t.shoutout){case"Yes - Shout out my Nookazon account":return"Yes - Nookazon";case"Yes - Shout out my Discord account":return"Yes - Discord";case"No - I would like to remain anonymous":return"No";default:return"Something went wrong"}},_=()=>{switch(r.status){case"Pending pick up":return"bg-cream-550 border-[#f9fafb] py-1";case"Did Not Respond":return"bg-red-575 border-[#f9fafb] py-1";case"Queued for Programs":return"bg-purple-550 border-[#f9fafb] py-1";case"Queued for Website":return"bg-lightgreen-550 border-[#f9fafb] py-1";case"Queued for Discord":return"bg-discord-550 border-[#f9fafb] py-1";case"Donator Contacted":return"bg-yellow-550 border-[#f9fafb] py-1";case"Items Collected":return"bg-orange-550 border-[#f9fafb] py-1";case"Invalid":return"bg-red-575 border-[#f9fafb] py-1";case"Cancelled":return"bg-red-575 border-[#f9fafb] py-1";case"Complete":return"bg-gris-550 border-[#f9fafb]";default:return"bg-white border-[#f9fafb]"}},I=v(new Date).format("YYYY-MM-DD"),p=a=>{a.preventDefault(),m(!1),g({items:o}),d.put("/api/donations/"+t.id,{items:o})},y=a=>{u(!1),a.preventDefault(),f({currencies:n}),d.put("/api/donations/"+t.id,{currencies:n})},z=a=>{c({...r,[a.target.name]:a.target.value}),console.log(r),d.put("/api/donations/"+t.id,{status:a.target.value}).then(h=>{})},N=a=>{a.preventDefault(),document.activeElement.blur(),d.put("/api/donations/"+t.id,{notes:b}).then(h=>{console.log(h)})},E=a=>{c({...r,[a.target.name]:a.target.value}),d.put("/api/donations/"+t.id,{schedule_date:a.target.value}).then(h=>{console.log(h)})};async function Y(){await navigator.clipboard.writeText(t.discord_id),await i(t.discord_username+"'s ID ")}async function P(a){t.canEdit&&(a.shiftKey?m(!0):(await navigator.clipboard.writeText(t.items),await i('"'+t.items+'"')))}async function F(a){t.canEdit&&(a.shiftKey?u(!0):(await navigator.clipboard.writeText(t.currencies),await i('"'+t.currencies+'"')))}return l("tr",{className:x?"bg-[#fffbab] border-b leading-tight":"bg-white border-b leading-tight",children:[e("td",{className:"pl-6 sticky z-10 bg-white left-0",children:e("input",{type:"checkbox",tabIndex:"-1",id:"checkbox"+t.id,onChange:a=>D(!x),disabled:!t.canEdit})}),e("td",{className:"pr-6 truncate z-10 bg-white sticky left-[3rem] ...",children:v(t.timestamp).format("DD-MM-YYYY")}),e("td",{className:"sticky z-10 left-[9.5rem] bg-white px-2",children:e("form",{id:"form"+t.id,children:l("select",{name:"status",tabIndex:"-1",id:"status"+t.id,value:r.status,defaultValue:t.status,className:_(),onChange:z,disabled:!t.canEdit,children:[e("option",{value:"Invalid",children:"Invalid"}),e("option",{value:"Did Not Respond",children:"DNR"}),e("option",{value:"Donator Contacted",children:"Contacted"}),e("option",{value:"Pending pick up",children:"Pending Pickup"}),e("option",{value:"Items Collected",children:"Collected"}),e("option",{value:"Queued for Website",children:"Scheduled Web"}),e("option",{value:"Queued for Discord",children:"Scheduled Discord"}),e("option",{value:"Queued for Programs",children:"Scheduled Programs"}),e("option",{value:"Completed",children:"Done"}),e("option",{value:"Cancelled",children:"Cancelled"}),e("option",{value:""})]})})}),e("td",{className:"sticky z-10 left-[23.2rem] bg-white px-3",children:e("input",{type:"date",tabIndex:"-1",min:I,className:t.schedule_date?"py-1 border-[#e5e5e5]":"text-red-500 border-[#FED3CD] py-1",defaultValue:t.schedule_date,onChange:E,disabled:!t.canEdit})}),e("td",{className:"pl-6 truncate ...",children:e("form",{id:"note"+t.id,onSubmit:N,className:"flex flex-row",children:e("input",{type:"text",defaultValue:t.notes,className:"leading-3 border-[#e5e5e5] py-1",onChange:a=>w(a.target.value),onBlur:t.notes===b.note?()=>console.log("If you see this, you are too curious."):N,disabled:!t.canEdit})})}),e("td",{className:"px-6 truncate ...",children:t.platform=="Nookazon Programs (i.e. Streams, Contests, etc.)"?"Nookazon Programs":t.platform}),e("td",{className:"px-6 text-center truncate ...",children:S()}),e("td",{className:"px-6 truncate ...",children:t.contact_method}),e("td",{className:"px-6 truncate max-w-[215px] hover:max-w-[5000px] ...",children:t.discord_username}),e("td",{className:"px-6 truncate max-w-[215px] hover:max-w-[5000px] hover:cursor-pointer ...",onClick:Y,children:t.discord_id}),e("td",{className:"px-6 truncate ...",children:e("a",{href:t.nookazon_link,tabIndex:"-1",children:t.nookazon_username})}),e("td",{className:"px-6 max-w-[250px] hover:max-w-[5000px] truncate ...",children:e("form",{id:"currencies"+t.id,onSubmit:t.currencies===n.currencies?()=>u(!1):y,className:"flex flex-row",children:k?e("input",{type:"text",autoFocus:!0,defaultValue:n.currencies,className:"leading-3 p-1 border-[#f9fafb]",onChange:a=>f(a.target.value),onBlur:t.currencies===n.currencies?()=>u(!1):y}):e("p",{className:t.canEdit?"cursor-pointer":"cursor-default",onClick:F,children:n.currencies})})}),e("td",{className:"px-6 max-w-[250px] hover:max-w-[5000px] truncate ...",children:e("form",{id:"items"+t.id,onSubmit:t.items===o.items?()=>m(!1):p,className:"flex flex-row",children:C?e("input",{type:"text",autoFocus:!0,defaultValue:o.items,className:"leading-3 p-1 border-[#f9fafb] w-auto",onChange:a=>g(a.target.value),onBlur:t.items===o.items?()=>m(!1):p}):e("p",{className:t.canEdit?"cursor-pointer":"cursor-default",onClick:P,children:o.items})})})]})},K=H;function ce({donations:t,platform:i,auth:r}){return l(Q,{children:[e(R,{title:"Scheduled w/o dates"}),l("div",{className:"mx-20",children:[e("header",{children:e(V,{auth:{user:"logged"}})}),e(M,{autoClose:1e3,position:"top-center"}),e("div",{className:"relative overflow-x-scroll overflow-y-scroll max-h-[78vh] shadow-md sm:rounded-lg",children:l("table",{className:"w-full text-sm text-left text-gray-500",children:[e("thead",{className:"text-xs text-black-550 uppercase bg-gray-50 z-20 sticky top-0",children:l("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 bg-gray-50 sticky left-0"}),e("th",{scope:"col",className:"px-6 py-3 truncate bg-gray-50 sticky left-[3rem] cursor-default ...",children:"Date"}),e("th",{scope:"col",className:"px-6 py-3 truncate bg-gray-50 cursor-default sticky left-[9.5rem] ...",children:"Status"}),e("th",{scope:"col",className:"px-6 py-3 truncate bg-gray-50 cursor-default sticky left-[23.2rem] ...",children:"Scheduled date"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Notes"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:r.user.canEdit?e(W,{platform:i}):e("p",{className:"cursor-not-allowed",children:"platform ⇅"})}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Shoutout ?"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Contact"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Discord user"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Discord ID"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Nookazon user"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Bells/NMTs"}),e("th",{scope:"col",className:"px-6 py-3 truncate ...",children:"Items"})]})}),e("tbody",{children:t.map(c=>e(K,{id:c.id,timestamp:c.timestamp,status:c.status,notes:c.notes,schedule_date:c.schedule_date,platform:c.platform,shoutout:c.shoutout,contact_method:c.contact_method,discord_username:c.discord_username,discord_id:c.discord_id,nookazon_username:c.nookazon_username,nookazon_link:c.nookazon_link,currencies:c.currencies,items:c.items,canEdit:r.user.canEdit},c.id))})]})}),e(T,{}),e(j,{})]})]})}export{ce as default};
