import{r as a,a as Y,H as P,M as me,L as Z,B as X,S as se,I as $,T as pe}from"./antd-DRHhcGrz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var oe={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=a,xe=Symbol.for("react.element"),ve=Symbol.for("react.fragment"),we=Object.prototype.hasOwnProperty,ye=ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,be={key:!0,ref:!0,__self:!0,__source:!0};function le(e,t,n){var s,o={},l=null,p=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(p=t.ref);for(s in t)we.call(t,s)&&!be.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)o[s]===void 0&&(o[s]=t[s]);return{$$typeof:xe,type:e,key:l,ref:p,props:o,_owner:ye.current}}W.Fragment=ve;W.jsx=le;W.jsxs=le;oe.exports=W;var r=oe.exports,ie,q=Y;ie=q.createRoot,q.hydrateRoot;var ae={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Q=P.createContext&&P.createContext(ae),je=["attr","size","title"];function Ne(e,t){if(e==null)return{};var n=Se(e,t),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)s=l[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function Se(e,t){if(e==null)return{};var n={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;n[s]=e[s]}return n}function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},K.apply(this,arguments)}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,s)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ee(Object(n),!0).forEach(function(s){Ce(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Ce(e,t,n){return t=Oe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oe(e){var t=ke(e,"string");return typeof t=="symbol"?t:t+""}function ke(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ce(e){return e&&e.map((t,n)=>P.createElement(t.tag,U({key:n},t.attr),ce(t.child)))}function H(e){return t=>P.createElement(Ee,K({attr:U({},e.attr)},t),ce(e.child))}function Ee(e){var t=n=>{var{attr:s,size:o,title:l}=e,p=Ne(e,je),h=o||n.size||"1em",g;return n.className&&(g=n.className),e.className&&(g=(g?g+" ":"")+e.className),P.createElement("svg",K({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,p,{className:g,style:U(U({color:e.color||n.color},n.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&P.createElement("title",null,l),e.children)};return Q!==void 0?P.createElement(Q.Consumer,null,n=>t(n)):t(ae)}function Le(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z"},child:[]}]})(e)}function Me(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 3H20C20.5523 3 21 3.44772 21 4V11H3V4C3 3.44772 3.44772 3 4 3ZM3 13H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13ZM7 16V18H10V16H7ZM7 6V8H10V6H7Z"},child:[]}]})(e)}function _e(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM3 12.5L7 9V16L3 12.5Z"},child:[]}]})(e)}function Pe(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM7 12.5L3 16V9L7 12.5Z"},child:[]}]})(e)}function Ve(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z"},child:[]}]})(e)}function He(e){return H({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M6 8h-6v-6h1v4.109c1.013-3.193 4.036-5.484 7.5-5.484 3.506 0 6.621 2.36 7.574 5.739l-0.963 0.271c-0.832-2.95-3.551-5.011-6.611-5.011-3.226 0.001-6.016 2.276-6.708 5.376h4.208v1zM11 9v1h4.208c-0.693 3.101-3.479 5.375-6.708 5.375-3.062 0-5.78-2.061-6.611-5.011l-0.963 0.271c0.952 3.379 4.067 5.739 7.574 5.739 3.459 0 6.475-2.28 7.5-5.482v4.108h1v-6h-6z"},child:[]}]})(e)}function Re(e){return H({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125 73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z"},child:[]}]})(e)}function Te(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 16l-4 4"},child:[]},{tag:"path",attr:{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"},child:[]},{tag:"path",attr:{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M3 21l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M18.5 5.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M10 11l-2 2"},child:[]},{tag:"path",attr:{d:"M13 14l-2 2"},child:[]},{tag:"path",attr:{d:"M16 16l4 4"},child:[]}]})(e)}function Fe(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"},child:[]},{tag:"path",attr:{d:"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M3 21l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M18.5 5.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M10 11l-2 2"},child:[]},{tag:"path",attr:{d:"M13 14l-2 2"},child:[]}]})(e)}function A(e,...t){const n=!!window.pywebview;n&&e?e(...t):(n||console.error("Please use pywebview environment"),e&&console.error("Function is not provided"))}const Ie=({toggleConnectStatusOpen:e,toggleLocalFileListOpen:t,toggleSendStatusOpen:n,toggleRemoteFileListOpen:s,handleReload:o})=>{const[l,p]=a.useState(!1),[h,g]=a.useState(()=>{const d=localStorage.getItem("dataList");return d?JSON.parse(d):[]}),[O,u]=a.useState(""),[y,C]=a.useState(""),[k,v]=a.useState(""),[E,m]=a.useState(""),[w,L]=a.useState(""),[N,V]=a.useState(!1),[T,c]=a.useState(!1);a.useEffect(()=>{localStorage.setItem("dataList",JSON.stringify(h))},[h]);const i=()=>{if(O.trim()&&w.trim()&&k.trim()&&E.trim()){const d=h.some(M=>M.host===O);g(d?h.map(M=>M.name===y?{host:O,user:w,password:k,port:E}:M):[...h,{name:y.trim(),host:O.trim(),user:w,password:k,port:E}]),u(""),L(""),v(""),m(""),C("")}},f=()=>{console.log("Cancelling...")},x=()=>{console.log("Connecting to the last connected server...")},F=async()=>{console.log("Disconnecting...");const d=await window.pywebview.api.close(),M=JSON.parse(d);console.log(M.message)},_=d=>{switch(d.currentTarget.getAttribute("id")){case"1":e();break;case"2":t();break;case"3":s();break;case"4":n();break;case"5":A(o);break;case"6":A(f);break;case"7":A(x);break;case"8":A(F);break}},D=d=>{u(d.host),C(d.name),L(d.user),v(d.password),m(d.port),c(!0),p(!0)},j=d=>{console.log(`Connecting to ${d.host}`)},S=d=>{g(h.filter(M=>M.host!==d.host))},b=()=>{u(""),L(""),v(""),m(""),C(""),c(!1),p(!1)};return r.jsxs("div",{className:"flex flex-row items-center space-x-5 bg-gray-500 border border-white",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("button",{title:"站台管理員",onClick:()=>p(!0),children:r.jsx(Me,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#87A2FF"})}),r.jsx(me,{title:"保存資料管理",open:l,onCancel:b,cancelText:"關閉",okText:y?"保存":"新增",onOk:i,destroyOnClose:!0,children:r.jsxs("div",{className:"flex flex-row w-full",children:[r.jsx("div",{className:"w-1/2 text-center flex1 h-[250px] overflow-auto",children:r.jsx(Z,{dataSource:h,header:r.jsx("div",{children:"站台列表"}),renderItem:(d,M)=>r.jsxs(Z.Item,{onClick:()=>D(d),className:"w-full text-lg cursor-pointer",children:[r.jsx("p",{children:`${d.name}`}),r.jsxs("div",{children:[r.jsx(X,{className:"ml-2",onClick:R=>{R.stopPropagation(),S(d)},children:"刪除"}),r.jsx(X,{className:"ml-2",onClick:R=>{R.stopPropagation(),j(d)},children:"連線"})]})]},M)})}),r.jsx("div",{className:"w-1/2 text-center flex1",children:r.jsxs(se,{direction:"vertical",children:[r.jsx($,{placeholder:"名稱",value:y,disabled:T,onChange:d=>C(d.target.value)}),r.jsx($,{placeholder:"主機地址",value:O,defaultValue:"127.0.0.1",onChange:d=>u(d.target.value)}),r.jsx($,{placeholder:"使用者帳號",value:w,onChange:d=>L(d.target.value)}),r.jsx($.Password,{placeholder:"使用者密碼",visibilityToggle:{visible:N,onVisibleChange:V},value:k,onChange:d=>v(d.target.value)}),r.jsx($,{placeholder:"連接埠",value:E,defaultValue:"50051",onChange:d=>m(d.target.value)})]})})]})})]}),r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("button",{title:"連線紀錄",id:"1",onClick:_,children:r.jsx(Ve,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#ffc800"})}),r.jsx("button",{title:"切換本地目錄樹",id:"2",onClick:_,children:r.jsx(_e,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#7acf6a"})}),r.jsx("button",{title:"切換遠端目錄樹",id:"3",onClick:_,children:r.jsx(Pe,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#87A2FF"})}),r.jsx("button",{title:"檔案傳輸過程",id:"4",onClick:_,children:r.jsx(Le,{className:"w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#5ba4a4"})})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("button",{title:"重新整理檔案及資料夾",id:"5",onClick:_,children:r.jsx(He,{className:"h-9 w-9 lg:w-16 lg:h-16 md:w-12 md:h-12",color:"#99ff99"})}),r.jsx("button",{title:"取消檔案動作",className:"ml-2 lg:ml-4 md:ml-3",id:"6",onClick:_,children:r.jsx(Re,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#cc0000"})}),r.jsx("button",{title:"連接伺服器",className:"ml-1 md:ml-2",id:"7",onClick:_,children:r.jsx(Fe,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#99ff33"})}),r.jsx("button",{title:"中斷伺服器",className:"-ml-1 md:-ml-2",id:"8",onClick:_,children:r.jsx(Te,{className:"w-10 h-10 lg:w-20 lg:h-20 md:w-16 md:h-16",color:"#ff6600"})})]})]})},De=({setMessage:e})=>{const[t,n]=a.useState("127.0.0.1"),[s,o]=a.useState(""),[l,p]=a.useState(""),[h,g]=a.useState("50051"),O=()=>{A(async()=>{if(t===""||h===""||s===""||l===""){e("請輸入完整資訊");return}const u=await window.pywebview.api.login(t,h,s,l),y=JSON.parse(u);"error"in y?e(y.error):e(y.message)})};return r.jsxs("div",{className:"flex flex-wrap items-center justify-start p-2 bg-gray-500 border border-white gap-7",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"host",className:"mr-1 text-sm text-white whitespace-nowrap",children:"主機(H):"}),r.jsx("input",{type:"text",id:"host",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:t,onChange:u=>n(u.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"username",className:"mr-1 text-sm text-white whitespace-nowrap",children:"使用者名稱(U):"}),r.jsx("input",{type:"text",id:"username",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:s,onChange:u=>o(u.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"password",className:"mr-1 text-sm text-white whitespace-nowrap",children:"密碼(W):"}),r.jsx("input",{type:"password",id:"password",className:"px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500",value:l,onChange:u=>p(u.target.value)})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx("label",{htmlFor:"port",className:"mr-1 text-sm text-white whitespace-nowrap",children:"連接埠(P):"}),r.jsx("input",{type:"number",id:"port",className:"w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500",value:h,onChange:u=>g(u.target.value)})]}),r.jsx("button",{className:"px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:O,children:"快速連線(Q)"})]})},$e=({message:e})=>{const[t,n]=a.useState([]),s=a.useRef(null);return a.useEffect(()=>{n(o=>[...o,e])},[e]),a.useEffect(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[t]),r.jsx("div",{ref:s,className:"w-full h-full p-2 overflow-auto bg-gray-500 border",style:{maxHeight:"400px"},children:r.jsx(se,{direction:"vertical",children:r.jsx(Z,{dataSource:t,renderItem:(o,l)=>r.jsx(Z.Item,{style:{paddingTop:"2px",paddingBottom:"2px"},children:r.jsx("div",{className:"flex items-center w-full h-full px-2 text-white",children:o})},l)})})})};function de(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=de(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function B(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=de(e))&&(s&&(s+=" "),s+=t);return s}var ue=a.createContext({}),Ae=()=>a.useContext(ue),ze=e=>P.createElement(ue.Provider,{...e});function Be(){let e=new Map;return{on(t,n){return e.has(t)?e.get(t).add(n):e.set(t,new Set([n])),this},off(t,n){return e.has(t)&&e.get(t).delete(n),this},emit(t,n){return e.has(t)&&e.get(t).forEach(s=>{s(n)}),this}}}var J=Be(),Ze=()=>a.useRef(new Map).current,Ke=()=>{},te=["resize","contextmenu","click","scroll","blur"],G={show({event:e,id:t,props:n,position:s}){e.preventDefault&&e.preventDefault(),J.emit(0).emit(t,{event:e.nativeEvent||e,props:n,position:s})},hideAll(){J.emit(0)}};function Ue(){let e=new Map,t,n,s,o,l=!1;function p(m){o=Array.from(m.values()),t=-1,s=!0}function h(){o[t].node.focus()}let g=()=>t>=0&&o[t].isSubmenu,O=()=>Array.from(o[t].submenuRefTracker.values());function u(){return t===-1?(y(),!1):!0}function y(){t+1<o.length?t++:t+1===o.length&&(t=0),l&&v(),h()}function C(){t===-1||t===0?t=o.length-1:t-1<o.length&&t--,l&&v(),h()}function k(){if(u()&&g()){let m=O(),{node:w,setSubmenuPosition:L}=o[t];return e.set(w,{isRoot:s,focusedIndex:t,parentNode:n||w,items:o}),L(),w.classList.add("contexify_submenu-isOpen"),n=w,m.length>0?(t=0,o=m):l=!0,s=!1,h(),!0}return!1}function v(){if(u()&&!s){let m=e.get(n);n.classList.remove("contexify_submenu-isOpen"),o=m.items,n=m.parentNode,m.isRoot&&(s=!0,e.clear()),l||(t=m.focusedIndex,h())}}function E(m){function w(L){for(let N of L)N.isSubmenu&&N.submenuRefTracker&&w(Array.from(N.submenuRefTracker.values())),N.keyMatcher&&N.keyMatcher(m)}w(o)}return{init:p,moveDown:y,moveUp:C,openSubmenu:k,closeSubmenu:v,matchKeys:E}}function z(e){return typeof e=="function"}function re(e){return typeof e=="string"}function Je(e,t){return a.Children.map(a.Children.toArray(e).filter(Boolean),n=>a.cloneElement(n,t))}function We(e){let t={x:e.clientX,y:e.clientY},n=e.changedTouches;return n&&(t.x=n[0].clientX,t.y=n[0].clientY),(!t.x||t.x<0)&&(t.x=0),(!t.y||t.y<0)&&(t.y=0),t}function ne(e,t){return z(e)?e(t):e}function Ye(e,t){return{...e,...z(t)?t(e):t}}var fe=({id:e,theme:t,style:n,className:s,children:o,animation:l="fade",preventDefaultOnKeydown:p=!0,disableBoundariesCheck:h=!1,onVisibilityChange:g,...O})=>{let[u,y]=a.useReducer(Ye,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),C=a.useRef(null),k=Ze(),[v]=a.useState(()=>Ue()),E=a.useRef(),m=a.useRef();a.useEffect(()=>(J.on(e,L).on(0,N),()=>{J.off(e,L).off(0,N)}),[e,l,h]),a.useEffect(()=>{u.visible?v.init(k):k.clear()},[u.visible,v,k]);function w(j,S){if(C.current&&!h){let{innerWidth:b,innerHeight:d}=window,{offsetWidth:M,offsetHeight:R}=C.current;j+M>b&&(j-=j+M-b),S+R>d&&(S-=S+R-d)}return{x:j,y:S}}a.useEffect(()=>{u.visible&&y(w(u.x,u.y))},[u.visible]),a.useEffect(()=>{function j(b){p&&b.preventDefault()}function S(b){switch(b.key){case"Enter":case" ":v.openSubmenu()||N();break;case"Escape":N();break;case"ArrowUp":j(b),v.moveUp();break;case"ArrowDown":j(b),v.moveDown();break;case"ArrowRight":j(b),v.openSubmenu();break;case"ArrowLeft":j(b),v.closeSubmenu();break;default:v.matchKeys(b);break}}if(u.visible){window.addEventListener("keydown",S);for(let b of te)window.addEventListener(b,N)}return()=>{window.removeEventListener("keydown",S);for(let b of te)window.removeEventListener(b,N)}},[u.visible,v,p]);function L({event:j,props:S,position:b}){j.stopPropagation();let d=b||We(j),{x:M,y:R}=w(d.x,d.y);Y.flushSync(()=>{y({visible:!0,willLeave:!1,x:M,y:R,triggerEvent:j,propsFromTrigger:S})}),clearTimeout(m.current),!E.current&&z(g)&&(g(!0),E.current=!0)}function N(j){j!=null&&(j.button===2||j.ctrlKey)&&j.type!=="contextmenu"||(l&&(re(l)||"exit"in l&&l.exit)?y(S=>({willLeave:S.visible})):y(S=>({visible:S.visible?!1:S.visible})),m.current=setTimeout(()=>{z(g)&&g(!1),E.current=!1}))}function V(){u.willLeave&&u.visible&&Y.flushSync(()=>y({visible:!1,willLeave:!1}))}function T(){return re(l)?B({[`contexify_willEnter-${l}`]:c&&!_,[`contexify_willLeave-${l} contexify_willLeave-'disabled'`]:c&&_}):l&&"enter"in l&&"exit"in l?B({[`contexify_willEnter-${l.enter}`]:l.enter&&c&&!_,[`contexify_willLeave-${l.exit} contexify_willLeave-'disabled'`]:l.exit&&c&&_}):null}let{visible:c,triggerEvent:i,propsFromTrigger:f,x,y:F,willLeave:_}=u,D=B("contexify",s,{[`contexify_theme-${t}`]:t},T());return P.createElement(ze,{value:k},c&&P.createElement("div",{...O,className:D,onAnimationEnd:V,style:{...n,left:x,top:F,opacity:1},ref:C,role:"menu"},Je(o,{propsFromTrigger:f,triggerEvent:i})))},I=({id:e,children:t,className:n,style:s,triggerEvent:o,data:l,propsFromTrigger:p,keyMatcher:h,onClick:g=Ke,disabled:O=!1,hidden:u=!1,closeOnClick:y=!0,handlerEvent:C="onClick",...k})=>{let v=a.useRef(),E=Ae(),m={id:e,data:l,triggerEvent:o,props:p},w=ne(O,m),L=ne(u,m);function N(i){m.event=i,i.stopPropagation(),w||(y?V():g(m))}function V(){let i=v.current;i.focus(),i.addEventListener("animationend",()=>setTimeout(G.hideAll),{once:!0}),i.classList.add("contexify_item-feedback"),g(m)}function T(i){i&&!w&&(v.current=i,E.set(i,{node:i,isSubmenu:!1,keyMatcher:!w&&z(h)&&(f=>{h(f)&&(f.stopPropagation(),f.preventDefault(),m.event=f,V())})}))}function c(i){(i.key==="Enter"||i.key===" ")&&(i.stopPropagation(),m.event=i,V())}return L?null:P.createElement("div",{...k,[C]:N,className:B("contexify_item",n,{"contexify_item-disabled":w}),style:s,onKeyDown:c,ref:T,tabIndex:-1,role:"menuitem","aria-disabled":w},P.createElement("div",{className:"contexify_itemContent"},t))};const{DirectoryTree:Ge}=pe,Xe=e=>({fileMenuId:`file_menu_${e?"local":"remote"}`,folderMenuId:`folder_menu_${e?"local":"remote"}`}),qe=({nodeKey:e,onOpenFolder:t,nodeTitle:n,isLocal:s,menuId:o})=>r.jsxs(fe,{id:o,children:[r.jsx(I,{onClick:()=>t(e),children:"開啟資料夾"}),r.jsx(I,{onClick:()=>console.log(s?"新增檔案":"新增遠端檔案"),children:s?"新增檔案":"新增遠端檔案"}),r.jsx(I,{onClick:()=>console.log("刪除資料夾"),disabled:n==="根目錄"||n==="遠端根目錄"||n==="downloads"||n==="uploads",children:"刪除資料夾"})]}),he=({initialTreeData:e=[{title:"根目錄",key:"root",children:void 0}],isLocal:t,onNodeSelect:n,setSendStatus:s})=>{const[o,l]=a.useState(e),[p,h]=a.useState([]),[g,O]=a.useState(""),[u,y]=a.useState(null),C=Xe(t);a.useEffect(()=>{h(t?["localStorage"]:["remoteStorage"])},[t]);const k=async(c,i)=>{const f=i.key,x=await window.pywebview.api.get_file_size(f),F=JSON.parse(x);if(F.error){console.error(F.error);return}const _=`${F.size}`,D=c==="上傳檔案"?"上傳":"下載",j=t?"":`/remote/path/${i.title}`;s(S=>[...S,{fileName:String(i.title),fileSize:_,direction:D,remotePath:j,status:"傳送中"}]),c==="上傳檔案"?await window.pywebview.api.get_local_children(f):c==="下載檔案"&&await window.pywebview.api.get_server_children(f),s(S=>S.map(b=>b.fileName===String(i.title)?{...b,status:"完成"}:b))},v=({isLocal:c,menuId:i})=>r.jsxs(fe,{id:i,children:[r.jsx(I,{onClick:()=>console.log("開啟檔案"),children:"開啟檔案"}),r.jsx(I,{onClick:()=>console.log("刪除檔案"),children:"刪除檔案"}),r.jsx(I,{onClick:f=>k(c?"上傳檔案":"下載檔案",f.props.node),children:c?"上傳檔案":"下載檔案"})]}),E=(c,i,f)=>c.map(x=>x.key===i?{...x,children:f}:x.children?{...x,children:E(x.children,i,f)}:x),m=async c=>{try{const i=await window.pywebview.api.get_local_children(c),f=JSON.parse(i);return f.error?(console.error("Error:",f.error),[]):!Array.isArray(f)||f.length===0?[{title:"無檔案",key:`${c}-empty`,isLeaf:!0}]:f.map(x=>({title:x.title,key:x.key,isLeaf:x.isLeaf,children:x.children||void 0}))}catch(i){return console.error("Failed to fetch local children:",i),[]}},w=async c=>{try{const i=await window.pywebview.api.get_server_children(c),f=JSON.parse(i);return f.error?(console.error("Error:",f.error),[]):!Array.isArray(f)||f.length===0?[{title:"無檔案",key:`${c}-empty`,isLeaf:!0}]:f.map(x=>({title:x.title,key:x.key,isLeaf:x.isLeaf,children:x.children||void 0}))}catch(i){return console.error("Failed to fetch remote children:",i),[]}},L=async({key:c,children:i})=>{if(i)return Promise.resolve();const f=t?await m(c):await w(c);l(x=>E(x,c,f))},N=(c,i)=>{c.preventDefault();const f=typeof i.title=="string"?i.title:String(i.title);O(f),y(i.key),i.isLeaf?G.show({id:C.fileMenuId,event:c,props:{node:i}}):G.show({id:C.folderMenuId,event:c,props:{node:i}})},V=(c,i)=>{if(n&&c.length>0){const f=c[0],x=i.node;n(f,x)}},T=c=>{h(i=>[...i,c])};return r.jsxs(r.Fragment,{children:[r.jsx(Ge,{loadData:L,treeData:o,onSelect:V,expandedKeys:p,onRightClick:({event:c,node:i})=>N(c,i),onExpand:c=>h(c)}),r.jsx(v,{isLocal:t,menuId:C.fileMenuId}),u!==null&&r.jsx(qe,{nodeKey:u,onOpenFolder:T,nodeTitle:g,isLocal:t,menuId:C.folderMenuId})]})},Qe=(e,t)=>{console.log("Selected node key:",e)},et=({setSendStatus:e})=>{const t=[{title:"根目錄",key:"localStorage",children:void 0}];return r.jsx("div",{className:"h-full px-2 py-1 bg-gray-500 border-2 rounded",children:r.jsx(he,{onNodeSelect:Qe,initialTreeData:t,isLocal:!0,setSendStatus:e})})},tt=(e,t)=>{console.log("Selected remote node key:",e)},rt=({setSendStatus:e})=>{const t=[{title:"遠端根目錄",key:"remoteStorage",children:void 0}];return r.jsx("div",{className:"h-full px-2 py-1 bg-gray-500 border-2 rounded",children:r.jsx(he,{onNodeSelect:tt,initialTreeData:t,isLocal:!1,setSendStatus:e})})},nt=({setSendStatus:e,localOpen:t,remoteOpen:n})=>r.jsxs("div",{className:"flex flex-row w-full h-full gap-2",children:[t&&r.jsx("div",{className:"flex-1",children:r.jsx(et,{setSendStatus:e})}),n&&r.jsx("div",{className:"flex-1",children:r.jsx(rt,{setSendStatus:e})})]}),st=({sendStatus:e})=>(console.log(e),r.jsxs("div",{className:"box-border w-full h-full p-2 pb-4 bg-gray-500 border rounded",children:[r.jsxs("div",{className:"box-border grid grid-cols-5 gap-1 p-2 text-white bg-gray-600 border rounded",children:[r.jsx("div",{className:"col-span-1 truncate",children:"檔案名稱"}),r.jsx("div",{className:"col-span-1 truncate",children:"檔案大小/本地檔案"}),r.jsx("div",{className:"col-span-1 truncate",children:"方向"}),r.jsx("div",{className:"col-span-1 truncate",children:"遠端檔案"}),r.jsx("div",{className:"col-span-1 truncate",children:"狀態"})]}),r.jsx("div",{className:"overflow-y-auto",style:{maxHeight:"3.5rem"},children:e.map((t,n)=>r.jsxs("div",{className:`grid grid-cols-5 gap-1 p-2 ${n%2===0?"bg-gray-400":"bg-gray-300"} border rounded box-border`,children:[r.jsx("div",{className:"col-span-1 truncate",children:t.fileName}),r.jsxs("div",{className:"col-span-1 truncate",children:[t.fileSize," "]}),r.jsx("div",{className:"col-span-1 truncate",children:t.direction}),r.jsx("div",{className:"col-span-1 truncate",children:t.remotePath}),r.jsx("div",{className:"col-span-1 truncate",children:t.status})]},n))})]})),ot=()=>{const[e,t]=a.useState(""),[n,s]=a.useState([]),[o,l]=a.useState(!0),[p,h]=a.useState(!0),[g,O]=a.useState(!0),[u,y]=a.useState(!0),[C,k]=a.useState(0),v=()=>{console.log("Reloading..."),k(N=>N+1)},E=()=>l(!o),m=()=>h(!p),w=()=>y(!u),L=()=>O(!g);return console.log(p,g),r.jsxs("div",{className:"grid grid-rows-[auto_auto_2fr_auto] h-screen min-w-full gap-1 p-2 bg-gray-700",children:[r.jsxs("div",{children:[r.jsx(Ie,{handleReload:v,toggleConnectStatusOpen:E,toggleLocalFileListOpen:m,toggleRemoteFileListOpen:L,toggleSendStatusOpen:w}),r.jsx(De,{setMessage:t})]}),o&&r.jsx("div",{className:"h-28",children:r.jsx($e,{message:e})}),(p||g)&&r.jsx("div",{className:"grid grid-cols-1 gap-1",children:r.jsx(nt,{setSendStatus:s,localOpen:p,remoteOpen:g},C)}),u&&r.jsx("div",{className:"h-28",children:r.jsx(st,{sendStatus:n})})]})};ie(document.getElementById("root")).render(r.jsx(a.StrictMode,{children:r.jsx(ot,{})}));
