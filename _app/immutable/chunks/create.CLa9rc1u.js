import{d as y,w as h,r as b}from"index.D0-3Lkmo.js";import{x as R,S as T,T as m}from"scheduler.DjuM1avT.js";function w(e){return Object.keys(e).reduce((n,t)=>e[t]===void 0?n:n+`${t}:${e[t]};`,"")}function I(e){return e?!0:void 0}w({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function G(e){if(e!==null)return""}function A(e){function n(t){return t(e),()=>{}}return{subscribe:n}}const E=e=>new Proxy(e,{get(n,t,s){return Reflect.get(n,t,s)},ownKeys(n){return Reflect.ownKeys(n).filter(t=>t!=="action")}}),p=e=>typeof e=="function";O("empty");function O(e,n){const{stores:t,action:s,returned:o}=n??{},r=(()=>{if(t&&o)return y(t,c=>{const a=o(c);if(p(a)){const i=(...l)=>E({...a(...l),[`data-melt-${e}`]:"",action:s??f});return i.action=s??f,i}return E({...a,[`data-melt-${e}`]:"",action:s??f})});{const c=o,a=c==null?void 0:c();if(p(a)){const i=(...l)=>E({...a(...l),[`data-melt-${e}`]:"",action:s??f});return i.action=s??f,A(i)}return A(E({...a,[`data-melt-${e}`]:"",action:s??f}))}})(),u=s??(()=>{});return u.subscribe=r.subscribe,u}function U(e){const n=r=>r?`${e}-${r}`:e,t=r=>`data-melt-${e}${r?`-${r}`:""}`,s=r=>`[data-melt-${e}${r?`-${r}`:""}]`;return{name:n,attribute:t,selector:s,getEl:r=>document.querySelector(s(r))}}const j=typeof document<"u",P=e=>typeof e=="function";function B(e){return e instanceof Element}function F(e){return e instanceof HTMLElement}function Y(e){const n=e.getAttribute("aria-disabled"),t=e.getAttribute("disabled"),s=e.hasAttribute("data-disabled");return!!(n==="true"||t!==null||s)}function L(e){return e!==null&&typeof e=="object"}function _(e){return L(e)&&"subscribe"in e}function C(...e){return(...n)=>{for(const t of e)typeof t=="function"&&t(...n)}}function f(){}function g(e,n,t,s){const o=Array.isArray(n)?n:[n];return o.forEach(r=>e.addEventListener(r,t,s)),()=>{o.forEach(r=>e.removeEventListener(r,t,s))}}function q(e,n,t,s){const o=Array.isArray(n)?n:[n];if(typeof t=="function"){const r=$(u=>t(u));return o.forEach(u=>e.addEventListener(u,r,s)),()=>{o.forEach(u=>e.removeEventListener(u,r,s))}}return()=>void 0}function D(e){const n=e.currentTarget;if(!F(n))return null;const t=new CustomEvent(`m-${e.type}`,{detail:{originalEvent:e},cancelable:!0});return n.dispatchEvent(t),t}function $(e){return n=>{const t=D(n);if(!(t!=null&&t.defaultPrevented))return e(n)}}const x=e=>{try{R(e)}catch{return e}},v=e=>{try{T(e)}catch{return e}};function S(e){return{...e,get:()=>m(e)}}S.writable=function(e){const n=h(e);let t=e;return{subscribe:n.subscribe,set(s){n.set(s),t=s},update(s){const o=s(t);n.set(o),t=o},get(){return t}}};S.derived=function(e,n){const t=new Map,s=()=>{const r=Array.isArray(e)?e.map(u=>u.get()):e.get();return n(r)};return{get:s,subscribe:r=>{const u=[];return(Array.isArray(e)?e:[e]).forEach(a=>{u.push(a.subscribe(()=>{r(s())}))}),r(s()),t.set(r,u),()=>{const a=t.get(r);if(a)for(const i of a)i();t.delete(r)}}}};const d={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"},M=[d.ARROW_DOWN,d.PAGE_UP,d.HOME],W=[d.ARROW_UP,d.PAGE_DOWN,d.END],X=[...M,...W],z=[d.ENTER,d.SPACE];function K(e,n){let t;const s=y(e,r=>{t==null||t(),t=n(r)}).subscribe(f),o=()=>{s(),t==null||t()};return v(o),o}b(void 0,e=>{function n(s){e(s),e(void 0)}return g(document,"pointerup",n,{passive:!1,capture:!0})});const k=b(void 0,e=>{function n(s){s&&s.key===d.ESCAPE&&e(s),e(void 0)}return g(document,"keydown",n,{passive:!1})}),J=(e,n={})=>{let t=f;function s(o={}){t();const r={enabled:!0,...o},u=_(r.enabled)?r.enabled:b(r.enabled);t=C(k.subscribe(c=>{var i;if(!c||!m(u))return;const a=c.target;if(!(!F(a)||a.closest("[data-escapee]")!==e)){if(c.preventDefault(),r.ignore){if(P(r.ignore)){if(r.ignore(c))return}else if(Array.isArray(r.ignore)&&r.ignore.length>0&&r.ignore.some(l=>l&&a===l))return}(i=r.handler)==null||i.call(r,c)}}),K(u,c=>{c?e.dataset.escapee="":delete e.dataset.escapee}))}return s(n),{update:s,destroy(){e.removeAttribute("data-escapee"),t()}}};b(!1),b(!1),b(void 0);export{X as F,z as S,F as a,P as b,B as c,C as d,K as e,g as f,U as g,q as h,j as i,Y as j,d as k,x as l,O as m,f as n,I as o,G as p,v as q,w as s,J as u,S as w};
