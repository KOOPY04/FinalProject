import{r as a,a as q,H as _,M as we,L as U,B as te,S as ae,I as B,T as ye,E as be}from"./antd-BtRyJUWE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ce={exports:{}},X={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=a,Se=Symbol.for("react.element"),Ne=Symbol.for("react.fragment"),Ce=Object.prototype.hasOwnProperty,ke=je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oe={key:!0,ref:!0,__self:!0,__source:!0};function de(e,t,n){var s,o={},i=null,f=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(f=t.ref);for(s in t)Ce.call(t,s)&&!Oe.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)o[s]===void 0&&(o[s]=t[s]);return{$$typeof:Se,type:e,key:i,ref:f,props:o,_owner:ke.current}}X.Fragment=Ne;X.jsx=de;X.jsxs=de;ce.exports=X;var r=ce.exports,ue,re=q;ue=re.createRoot,re.hydrateRoot;var fe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ne=_.createContext&&_.createContext(fe),Ee=["attr","size","title"];function Le(e,t){if(e==null)return{};var n=Me(e,t),s,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)s=i[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function Me(e,t){if(e==null)return{};var n={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;n[s]=e[s]}return n}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},G.apply(this,arguments)}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,s)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?se(Object(n),!0).forEach(function(s){_e(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function _e(e,t,n){return t=Pe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pe(e){var t=Ve(e,"string");return typeof t=="symbol"?t:t+""}function Ve(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function he(e){return e&&e.map((t,n)=>_.createElement(t.tag,J({key:n},t.attr),he(t.child)))}function T(e){return t=>_.createElement(He,G({attr:J({},e.attr)},t),he(e.child))}function He(e){var t=n=>{var{attr:s,size:o,title:i}=e,f=Le(e,Ee),y=o||n.size||"1em",x;return n.className&&(x=n.className),e.className&&(x=(x?x+" ":"")+e.className),_.createElement("svg",G({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,f,{className:x,style:J(J({color:e.color||n.color},n.style),e.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),i&&_.createElement("title",null,i),e.children)};return ne!==void 0?_.createElement(ne.Consumer,null,n=>t(n)):t(fe)}function Re(e){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z"},child:[]}]})(e)}function Te(e){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 3H20C20.5523 3 21 3.44772 21 4V11H3V4C3 3.44772 3.44772 3 4 3ZM3 13H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13ZM7 16V18H10V16H7ZM7 6V8H10V6H7Z"},child:[]}]})(e)}function Ie(e){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM3 12.5L7 9V16L3 12.5Z"},child:[]}]})(e)}function Fe(e){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM7 12.5L3 16V9L7 12.5Z"},child:[]}]})(e)}function De(e){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z"},child:[]}]})(e)}function $e(e){return T({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"},child:[]}]})(e)}function Ae(e){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125 73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z"},child:[]}]})(e)}function ze(e){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 16l-4 4"},child:[]},{tag:"path",attr:{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"},child:[]},{tag:"path",attr:{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M3 21l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M18.5 5.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M10 11l-2 2"},child:[]},{tag:"path",attr:{d:"M13 14l-2 2"},child:[]},{tag:"path",attr:{d:"M16 16l4 4"},child:[]}]})(e)}function Be(e){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"},child:[]},{tag:"path",attr:{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M3 21l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M18.5 5.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M10 11l-2 2"},child:[]},{tag:"path",attr:{d:"M13 14l-2 2"},child:[]}]})(e)}async function Z(e,...t){if(!!window.pywebview)if(typeof e=="function")try{await e(...t)}catch(s){console.error("Error executing the provided function:",s)}else console.error("Provided function is not valid.");else console.error("Please use pywebview environment")}const me=a.createContext(void 0),Ze=({children:e})=>{const[t,n]=a.useState(!1),[s,o]=a.useState(""),[i,f]=a.useState([]);return r.jsx(me.Provider,{value:{isLogining:t,setIsLogining:n,message:s,setMessage:o,sendStatus:i,setSendStatus:f},children:e})},A=()=>{const e=a.useContext(me);if(e===void 0)throw new Error("useGlobalState must be used within a GlobalStateProvider");return e},Ke=({toggleConnectStatusOpen:e,toggleLocalFileListOpen:t,toggleSendStatusOpen:n,toggleRemoteFileListOpen:s,handleReload:o})=>{const[i,f]=a.useState(!1),[y,x]=a.useState([]),[N,p]=a.useState("127.0.0.1"),[h,b]=a.useState(""),[O,w]=a.useState(""),[E,m]=a.useState("50051"),[j,L]=a.useState(""),[k,H]=a.useState(!1),[F,c]=a.useState(!1),{setIsLogining:l,setMessage:u}=A();a.useEffect(()=>{(async()=>{const M=await window.pywebview.api.read_host();x(M||[])})()},[]);const v=async()=>{if(N.trim()&&j.trim()&&O.trim()&&E.trim()){const d=y.some(M=>M.host===N);x(M=>{let V;return d?V=M.map(ee=>ee.host===N?{name:h,host:N,user:j,password:O,port:E}:ee):V=[...M,{name:h.trim(),host:N.trim(),user:j,password:O,port:E}],console.log("Data saved:",V),V}),p(""),L(""),w(""),m(""),b("")}},D=()=>{console.log("Cancelling...")},I=()=>{console.log("Connecting to the last connected server...")},z=async()=>{const d=await window.pywebview.api.close(),M=JSON.parse(d);u(M.message),l(!1)},g=d=>{switch(d.currentTarget.getAttribute("id")){case"1":e();break;case"2":t();break;case"3":s();break;case"4":n();break;case"5":Z(o);break;case"6":Z(D);break;case"7":Z(I);break;case"8":Z(z);break}},C=d=>{p(d.host),b(d.name),L(d.user),w(d.password),m(d.port),c(!0),f(!0)},S=d=>{console.log(`Connecting to ${d.host}`)},R=async d=>{const M=y.filter(V=>V.host!==d.host);x(M),await window.pywebview.api.save_host(M)},P=()=>{p("127.0.0.1"),L(""),w(""),m("50051"),b(""),c(!1),f(!1)};return r.jsxs("div",{className:"flex flex-row items-center space-x-5 bg-gray-500 border border-white",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("button",{title:"站台管理員",onClick:()=>f(!0),children:r.jsx(Te,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#87A2FF"})}),r.jsx(we,{title:"保存資料管理",open:i,onCancel:P,cancelText:"關閉",okText:h?"保存":"新增",onOk:v,destroyOnClose:!0,children:r.jsxs("div",{className:"flex flex-row w-full",children:[r.jsx("div",{className:"w-1/2 text-center flex1 h-[250px] overflow-auto",children:r.jsx(U,{dataSource:y,header:r.jsx("div",{children:"站台列表"}),renderItem:(d,M)=>r.jsxs(U.Item,{onClick:()=>C(d),className:"w-full text-lg cursor-pointer",children:[r.jsx("p",{children:`${d.name}`}),r.jsxs("div",{children:[r.jsx(te,{className:"ml-2",onClick:V=>{V.stopPropagation(),R(d)},children:"刪除"}),r.jsx(te,{className:"ml-2",onClick:V=>{V.stopPropagation(),S(d)},children:"連線"})]})]},M)})}),r.jsx("div",{className:"w-1/2 text-center flex1",children:r.jsxs(ae,{direction:"vertical",children:[r.jsx(B,{placeholder:"名稱",value:h,disabled:F,onChange:d=>b(d.target.value)}),r.jsx(B,{placeholder:"主機地址",value:N,defaultValue:"127.0.0.1",onChange:d=>p(d.target.value)}),r.jsx(B,{placeholder:"使用者帳號",value:j,onChange:d=>L(d.target.value)}),r.jsx(B.Password,{placeholder:"使用者密碼",visibilityToggle:{visible:k,onVisibleChange:H},value:O,onChange:d=>w(d.target.value)}),r.jsx(B,{placeholder:"連接埠",value:E,defaultValue:"50051",onChange:d=>m(d.target.value)})]})})]})})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("button",{title:"連線紀錄",id:"1",onClick:g,children:r.jsx(De,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#ffc800"})}),r.jsx("button",{title:"切換本地目錄樹",id:"2",onClick:g,children:r.jsx(Ie,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#7acf6a"})}),r.jsx("button",{title:"切換遠端目錄樹",id:"3",onClick:g,children:r.jsx(Fe,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#87A2FF"})}),r.jsx("button",{title:"檔案傳輸過程",id:"4",onClick:g,children:r.jsx(Re,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#5ba4a4"})})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("button",{title:"重新整理檔案及資料夾",id:"5",onClick:g,children:r.jsx($e,{className:"h-9 w-9 lg:w-16 lg:h-16 md:w-12 md:h-12",color:"#99ff99"})}),r.jsx("button",{title:"取消檔案動作",className:"ml-2 lg:ml-4 md:ml-3",id:"6",onClick:g,children:r.jsx(Ae,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#cc0000"})}),r.jsx("button",{title:"連接伺服器",className:"ml-1 md:ml-2",id:"7",onClick:g,children:r.jsx(Be,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#99ff33"})}),r.jsx("button",{title:"中斷伺服器",className:"-ml-1 md:-ml-2",id:"8",onClick:g,children:r.jsx(ze,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#ff6600"})})]})]})},We=()=>{const[e,t]=a.useState("127.0.0.1"),[n,s]=a.useState(""),[o,i]=a.useState(""),[f,y]=a.useState("50051"),{setIsLogining:x,setMessage:N}=A(),p=()=>{Z(async()=>{if(e===""||f===""||n===""||o===""){N("請輸入完整資訊");return}const h=await window.pywebview.api.login(e,f,n,o),b=JSON.parse(h);"error"in b?N(b.error):(N(b.message),x(!0))})};return r.jsxs("div",{className:"flex flex-wrap items-center justify-start p-2 bg-gray-500 border border-white gap-7",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"host",className:"mr-1 text-sm text-white whitespace-nowrap",children:"主機(H):"}),r.jsx("input",{type:"text",id:"host",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:e,onChange:h=>t(h.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"username",className:"mr-1 text-sm text-white whitespace-nowrap",children:"使用者名稱(U):"}),r.jsx("input",{type:"text",id:"username",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:n,onChange:h=>s(h.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"password",className:"mr-1 text-sm text-white whitespace-nowrap",children:"密碼(W):"}),r.jsx("input",{type:"password",id:"password",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:o,onChange:h=>i(h.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"port",className:"mr-1 text-sm text-white whitespace-nowrap",children:"連接埠(P):"}),r.jsx("input",{type:"number",id:"port",className:"w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500",value:f,onChange:h=>y(h.target.value)})]}),r.jsx("button",{className:"px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:p,children:"快速連線(Q)"})]})},Ue=()=>{const[e,t]=a.useState([]),n=a.useRef(null),{message:s}=A();return a.useEffect(()=>{t(o=>[...o,s])},[s]),a.useEffect(()=>{n.current&&(n.current.scrollTop=n.current.scrollHeight)},[e]),r.jsx("div",{ref:n,className:"w-full h-full p-2 overflow-auto bg-gray-500 border",style:{maxHeight:"400px"},children:r.jsx(ae,{direction:"vertical",children:r.jsx(U,{dataSource:e,renderItem:(o,i)=>r.jsx(U.Item,{style:{paddingTop:"2px",paddingBottom:"2px"},children:r.jsx("div",{className:"flex items-center w-full h-full px-2 text-white",children:o})},i)})})})};function ge(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ge(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function W(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=ge(e))&&(s&&(s+=" "),s+=t);return s}var pe=a.createContext({}),Ge=()=>a.useContext(pe),Je=e=>_.createElement(pe.Provider,{...e});function Ye(){let e=new Map;return{on(t,n){return e.has(t)?e.get(t).add(n):e.set(t,new Set([n])),this},off(t,n){return e.has(t)&&e.get(t).delete(n),this},emit(t,n){return e.has(t)&&e.get(t).forEach(s=>{s(n)}),this}}}var Y=Ye(),Xe=()=>a.useRef(new Map).current,qe=()=>{},oe=["resize","contextmenu","click","scroll","blur"],Q={show({event:e,id:t,props:n,position:s}){e.preventDefault&&e.preventDefault(),Y.emit(0).emit(t,{event:e.nativeEvent||e,props:n,position:s})},hideAll(){Y.emit(0)}};function Qe(){let e=new Map,t,n,s,o,i=!1;function f(m){o=Array.from(m.values()),t=-1,s=!0}function y(){o[t].node.focus()}let x=()=>t>=0&&o[t].isSubmenu,N=()=>Array.from(o[t].submenuRefTracker.values());function p(){return t===-1?(h(),!1):!0}function h(){t+1<o.length?t++:t+1===o.length&&(t=0),i&&w(),y()}function b(){t===-1||t===0?t=o.length-1:t-1<o.length&&t--,i&&w(),y()}function O(){if(p()&&x()){let m=N(),{node:j,setSubmenuPosition:L}=o[t];return e.set(j,{isRoot:s,focusedIndex:t,parentNode:n||j,items:o}),L(),j.classList.add("contexify_submenu-isOpen"),n=j,m.length>0?(t=0,o=m):i=!0,s=!1,y(),!0}return!1}function w(){if(p()&&!s){let m=e.get(n);n.classList.remove("contexify_submenu-isOpen"),o=m.items,n=m.parentNode,m.isRoot&&(s=!0,e.clear()),i||(t=m.focusedIndex,y())}}function E(m){function j(L){for(let k of L)k.isSubmenu&&k.submenuRefTracker&&j(Array.from(k.submenuRefTracker.values())),k.keyMatcher&&k.keyMatcher(m)}j(o)}return{init:f,moveDown:h,moveUp:b,openSubmenu:O,closeSubmenu:w,matchKeys:E}}function K(e){return typeof e=="function"}function ie(e){return typeof e=="string"}function et(e,t){return a.Children.map(a.Children.toArray(e).filter(Boolean),n=>a.cloneElement(n,t))}function tt(e){let t={x:e.clientX,y:e.clientY},n=e.changedTouches;return n&&(t.x=n[0].clientX,t.y=n[0].clientY),(!t.x||t.x<0)&&(t.x=0),(!t.y||t.y<0)&&(t.y=0),t}function le(e,t){return K(e)?e(t):e}function rt(e,t){return{...e,...K(t)?t(e):t}}var ve=({id:e,theme:t,style:n,className:s,children:o,animation:i="fade",preventDefaultOnKeydown:f=!0,disableBoundariesCheck:y=!1,onVisibilityChange:x,...N})=>{let[p,h]=a.useReducer(rt,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),b=a.useRef(null),O=Xe(),[w]=a.useState(()=>Qe()),E=a.useRef(),m=a.useRef();a.useEffect(()=>(Y.on(e,L).on(0,k),()=>{Y.off(e,L).off(0,k)}),[e,i,y]),a.useEffect(()=>{p.visible?w.init(O):O.clear()},[p.visible,w,O]);function j(g,C){if(b.current&&!y){let{innerWidth:S,innerHeight:R}=window,{offsetWidth:P,offsetHeight:d}=b.current;g+P>S&&(g-=g+P-S),C+d>R&&(C-=C+d-R)}return{x:g,y:C}}a.useEffect(()=>{p.visible&&h(j(p.x,p.y))},[p.visible]),a.useEffect(()=>{function g(S){f&&S.preventDefault()}function C(S){switch(S.key){case"Enter":case" ":w.openSubmenu()||k();break;case"Escape":k();break;case"ArrowUp":g(S),w.moveUp();break;case"ArrowDown":g(S),w.moveDown();break;case"ArrowRight":g(S),w.openSubmenu();break;case"ArrowLeft":g(S),w.closeSubmenu();break;default:w.matchKeys(S);break}}if(p.visible){window.addEventListener("keydown",C);for(let S of oe)window.addEventListener(S,k)}return()=>{window.removeEventListener("keydown",C);for(let S of oe)window.removeEventListener(S,k)}},[p.visible,w,f]);function L({event:g,props:C,position:S}){g.stopPropagation();let R=S||tt(g),{x:P,y:d}=j(R.x,R.y);q.flushSync(()=>{h({visible:!0,willLeave:!1,x:P,y:d,triggerEvent:g,propsFromTrigger:C})}),clearTimeout(m.current),!E.current&&K(x)&&(x(!0),E.current=!0)}function k(g){g!=null&&(g.button===2||g.ctrlKey)&&g.type!=="contextmenu"||(i&&(ie(i)||"exit"in i&&i.exit)?h(C=>({willLeave:C.visible})):h(C=>({visible:C.visible?!1:C.visible})),m.current=setTimeout(()=>{K(x)&&x(!1),E.current=!1}))}function H(){p.willLeave&&p.visible&&q.flushSync(()=>h({visible:!1,willLeave:!1}))}function F(){return ie(i)?W({[`contexify_willEnter-${i}`]:c&&!I,[`contexify_willLeave-${i} contexify_willLeave-'disabled'`]:c&&I}):i&&"enter"in i&&"exit"in i?W({[`contexify_willEnter-${i.enter}`]:i.enter&&c&&!I,[`contexify_willLeave-${i.exit} contexify_willLeave-'disabled'`]:i.exit&&c&&I}):null}let{visible:c,triggerEvent:l,propsFromTrigger:u,x:v,y:D,willLeave:I}=p,z=W("contexify",s,{[`contexify_theme-${t}`]:t},F());return _.createElement(Je,{value:O},c&&_.createElement("div",{...N,className:z,onAnimationEnd:H,style:{...n,left:v,top:D,opacity:1},ref:b,role:"menu"},et(o,{propsFromTrigger:u,triggerEvent:l})))},$=({id:e,children:t,className:n,style:s,triggerEvent:o,data:i,propsFromTrigger:f,keyMatcher:y,onClick:x=qe,disabled:N=!1,hidden:p=!1,closeOnClick:h=!0,handlerEvent:b="onClick",...O})=>{let w=a.useRef(),E=Ge(),m={id:e,data:i,triggerEvent:o,props:f},j=le(N,m),L=le(p,m);function k(l){m.event=l,l.stopPropagation(),j||(h?H():x(m))}function H(){let l=w.current;l.focus(),l.addEventListener("animationend",()=>setTimeout(Q.hideAll),{once:!0}),l.classList.add("contexify_item-feedback"),x(m)}function F(l){l&&!j&&(w.current=l,E.set(l,{node:l,isSubmenu:!1,keyMatcher:!j&&K(y)&&(u=>{y(u)&&(u.stopPropagation(),u.preventDefault(),m.event=u,H())})}))}function c(l){(l.key==="Enter"||l.key===" ")&&(l.stopPropagation(),m.event=l,H())}return L?null:_.createElement("div",{...O,[b]:k,className:W("contexify_item",n,{"contexify_item-disabled":j}),style:s,onKeyDown:c,ref:F,tabIndex:-1,role:"menuitem","aria-disabled":j},_.createElement("div",{className:"contexify_itemContent"},t))};const{DirectoryTree:nt}=ye,st=e=>({fileMenuId:`file_menu_${e?"local":"remote"}`,folderMenuId:`folder_menu_${e?"local":"remote"}`}),ot=({nodeKey:e,onOpenFolder:t,nodeTitle:n,isLocal:s,menuId:o})=>r.jsxs(ve,{id:o,children:[r.jsx($,{onClick:()=>t(e),children:"開啟資料夾"}),r.jsx($,{onClick:()=>console.log(s?"新增檔案":"新增遠端檔案"),children:s?"新增檔案":"新增遠端檔案"}),r.jsx($,{onClick:()=>console.log("刪除資料夾"),disabled:n==="根目錄"||n==="遠端根目錄"||n==="downloads"||n==="uploads",children:"刪除資料夾"})]}),xe=({initialTreeData:e=[{title:"根目錄",key:"root",children:void 0}],isLocal:t,onNodeSelect:n})=>{const[s,o]=a.useState(e),[i,f]=a.useState([]),[y,x]=a.useState(""),[N,p]=a.useState(null),{setSendStatus:h}=A(),b=st(t);a.useEffect(()=>{f(t?["localStorage"]:["remoteStorage"])},[t]);const O=async(c,l)=>{const u=l.key,v=await window.pywebview.api.get_file_size(u),D=JSON.parse(v);if(D.error){console.error(D.error);return}const I=`${D.size}`,z=c==="上傳檔案"?"上傳":"下載";console.log(l.key);const C=l.key.match(/(\/remoteStorage\/.+)/);let S;C&&(S=C[1],console.log(S));const R=t?"":`${S}`;h(P=>[...P,{fileName:String(l.title),fileSize:I,direction:z,remotePath:R,status:"傳送中"}]),c==="上傳檔案"?await window.pywebview.api.get_local_children(u):c==="下載檔案"&&await window.pywebview.api.get_server_children(u),h(P=>P.map(d=>d.fileName===String(l.title)?{...d,status:"完成"}:d))},w=({isLocal:c,menuId:l})=>r.jsxs(ve,{id:l,children:[r.jsx($,{onClick:()=>console.log("開啟檔案"),children:"開啟檔案"}),r.jsx($,{onClick:()=>console.log("刪除檔案"),children:"刪除檔案"}),r.jsx($,{onClick:u=>O(c?"上傳檔案":"下載檔案",u.props.node),children:c?"上傳檔案":"下載檔案"})]}),E=(c,l,u)=>c.map(v=>v.key===l?{...v,children:u}:v.children?{...v,children:E(v.children,l,u)}:v),m=async c=>{try{const l=await window.pywebview.api.get_local_children(c),u=JSON.parse(l);return u.error?(console.error("Error:",u.error),[]):!Array.isArray(u)||u.length===0?[{title:"無檔案",key:`${c}-empty`,isLeaf:!0}]:u.map(v=>({title:v.title,key:v.key,isLeaf:v.isLeaf,children:v.children||void 0}))}catch(l){return console.error("Failed to fetch local children:",l),[]}},j=async c=>{try{const l=await window.pywebview.api.get_server_children(c),u=JSON.parse(l);return u.error?(console.error("Error:",u.error),[]):!Array.isArray(u)||u.length===0?[{title:"無檔案",key:`${c}-empty`,isLeaf:!0}]:u.map(v=>({title:v.title,key:v.key,isLeaf:v.isLeaf,children:v.children||void 0}))}catch(l){return console.error("Failed to fetch remote children:",l),[]}},L=async({key:c,children:l})=>{if(l)return Promise.resolve();const u=t?await m(c):await j(c);o(v=>E(v,c,u))},k=(c,l)=>{c.preventDefault();const u=typeof l.title=="string"?l.title:String(l.title);x(u),p(l.key),l.isLeaf?Q.show({id:b.fileMenuId,event:c,props:{node:l}}):Q.show({id:b.folderMenuId,event:c,props:{node:l}})},H=(c,l)=>{if(n&&c.length>0){const u=c[0],v=l.node;n(u,v)}},F=c=>{f(l=>[...l,c])};return r.jsxs(r.Fragment,{children:[r.jsx(nt,{loadData:L,treeData:s,onSelect:H,expandedKeys:i,onRightClick:({event:c,node:l})=>k(c,l),onExpand:c=>f(c)}),r.jsx(w,{isLocal:t,menuId:b.fileMenuId}),N!==null&&r.jsx(ot,{nodeKey:N,onOpenFolder:F,nodeTitle:y,isLocal:t,menuId:b.folderMenuId})]})},it=(e,t)=>{console.log("Selected node key:",e)},lt=()=>{const e=[{title:"根目錄",key:"localStorage",children:void 0}];return r.jsx("div",{className:"h-full px-2 py-1 bg-gray-500 border-2 rounded",children:r.jsx(xe,{onNodeSelect:it,initialTreeData:e,isLocal:!0})})},at=(e,t)=>{console.log("Selected remote node key:",e)},ct=()=>{const{isLogining:e}=A(),t=[{title:"遠端根目錄",key:"remoteStorage",children:void 0}];return r.jsx("div",{className:"h-full px-2 py-1 bg-gray-500 border-2 rounded",children:e?r.jsx(xe,{onNodeSelect:at,initialTreeData:t,isLocal:!1}):r.jsx(be,{description:"請先登入"})})},dt=({localOpen:e,remoteOpen:t})=>r.jsxs("div",{className:"flex flex-row w-full h-full gap-2",children:[e&&r.jsx("div",{className:"flex-1",children:r.jsx(lt,{})}),t&&r.jsx("div",{className:"flex-1",children:r.jsx(ct,{})})]}),ut=()=>{const{sendStatus:e}=A();return console.log(e),r.jsxs("div",{className:"box-border w-full h-full p-2 pb-4 bg-gray-500 border rounded",children:[r.jsxs("div",{className:"box-border grid grid-cols-5 gap-1 p-2 text-white bg-gray-600 border rounded",children:[r.jsx("div",{className:"col-span-1 truncate",children:"檔案名稱"}),r.jsx("div",{className:"col-span-1 truncate",children:"檔案大小/本地檔案"}),r.jsx("div",{className:"col-span-1 truncate",children:"方向"}),r.jsx("div",{className:"col-span-1 truncate",children:"遠端檔案"}),r.jsx("div",{className:"col-span-1 truncate",children:"狀態"})]}),r.jsx("div",{className:"overflow-y-auto",style:{maxHeight:"3.5rem"},children:e.map((t,n)=>r.jsxs("div",{className:`grid grid-cols-5 gap-1 p-2 ${n%2===0?"bg-gray-400":"bg-gray-300"} border rounded box-border`,children:[r.jsx("div",{className:"col-span-1 truncate",children:t.fileName}),r.jsxs("div",{className:"col-span-1 truncate",children:[t.fileSize," "]}),r.jsx("div",{className:"col-span-1 truncate",children:t.direction}),r.jsx("div",{className:"col-span-1 truncate",children:t.remotePath}),r.jsx("div",{className:"col-span-1 truncate",children:t.status})]},n))})]})},ft=()=>{const[e,t]=a.useState(!0),[n,s]=a.useState(!0),[o,i]=a.useState(!0),[f,y]=a.useState(!0),[x,N]=a.useState(0),p=()=>{console.log("Reloading..."),N(E=>E+1)},h=()=>t(!e),b=()=>s(!n),O=()=>y(!f),w=()=>i(!o);return console.log(n,o),r.jsxs("div",{className:"grid grid-rows-[auto_auto_2fr_auto] h-screen min-w-full gap-1 p-2 bg-gray-700",children:[r.jsxs("div",{children:[r.jsx(Ke,{handleReload:p,toggleConnectStatusOpen:h,toggleLocalFileListOpen:b,toggleRemoteFileListOpen:w,toggleSendStatusOpen:O}),r.jsx(We,{})]}),e&&r.jsx("div",{className:"h-28",children:r.jsx(Ue,{})}),(n||o)&&r.jsx("div",{className:"grid grid-cols-1 gap-1",children:r.jsx(dt,{localOpen:n,remoteOpen:o},x)}),f&&r.jsx("div",{className:"h-28",children:r.jsx(ut,{})})]})};ue(document.getElementById("root")).render(r.jsx(a.StrictMode,{children:r.jsx(Ze,{children:r.jsx(ft,{})})}));
