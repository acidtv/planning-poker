var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function l(t,e,n){return t.set(n),e}function u(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(){return p("")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function y(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function x(t,e,n){t.classList[n?"add":"remove"](e)}let k;function w(t){k=t}function _(t){(function(){if(!k)throw new Error("Function called outside component initialization");return k})().$$.on_mount.push(t)}function C(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const E=[],R=[];let M=[];const j=[],N=Promise.resolve();let S=!1;function O(t){M.push(t)}const A=new Set;let B=0;function I(){if(0!==B)return;const t=k;do{try{for(;B<E.length;){const t=E[B];B++,w(t),J(t.$$)}}catch(t){throw E.length=0,B=0,t}for(w(null),E.length=0,B=0;R.length;)R.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];A.has(e)||(A.add(e),e())}M.length=0}while(E.length);for(;j.length;)j.pop()();S=!1,A.clear(),w(t)}function J(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const U=new Set;let P;function T(){P={r:0,c:[],p:P}}function z(){P.r||o(P.c),P=P.p}function L(t,e){t&&t.i&&(U.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(U.has(t))return;U.add(t),P.c.push((()=>{U.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function D(t,e){F(t,1,1,(()=>{e.delete(t.key)}))}function H(t,e,n,r,c,s,i,l,u,a,f,d){let p=t.length,m=s.length,h=p;const $={};for(;h--;)$[t[h].key]=h;const g=[],v=new Map,b=new Map,y=[];for(h=m;h--;){const t=d(c,s,h),o=n(t);let l=i.get(o);l?r&&y.push((()=>l.p(t,e))):(l=a(o,t),l.c()),v.set(o,g[h]=l),o in $&&b.set(o,Math.abs(h-$[o]))}const x=new Set,k=new Set;function w(t){L(t,1),t.m(l,f),i.set(t.key,t),f=t.first,m--}for(;p&&m;){const e=g[m-1],n=t[p-1],o=e.key,r=n.key;e===n?(f=e.first,p--,m--):v.has(r)?!i.has(o)||x.has(o)?w(e):k.has(r)?p--:b.get(o)>b.get(r)?(k.add(o),w(e)):(x.add(r),p--):(u(n,i),p--)}for(;p--;){const e=t[p];v.has(e.key)||u(e,i)}for(;m;)w(g[m-1]);return o(y),g}function q(t){t&&t.c()}function W(t,n,c,s){const{fragment:i,after_update:l}=t.$$;i&&i.m(n,c),s||O((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(O)}function G(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];M.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),M=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(E.push(t),S||(S=!0,N.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(e,r,c,s,i,l,u,a=[-1]){const d=k;w(e);const p=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:a,skip_bound:!1,root:r.target||d.$$.root};u&&u(p.root);let m=!1;if(p.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&K(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&L(e.$$.fragment),W(e,r.target,r.anchor,r.customElement),I()}w(d)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/*! js-cookie v3.0.1 | MIT */function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}var X=function t(e,n){function o(t,o,r){if("undefined"!=typeof document){"number"==typeof(r=V({},n,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var s in r)r[s]&&(c+="; "+s,!0!==r[s]&&(c+="="+r[s].split(";")[0]));return document.cookie=t+"="+e.write(o,t)+c}}return Object.create({set:o,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],o={},r=0;r<n.length;r++){var c=n[r].split("="),s=c.slice(1).join("=");try{var i=decodeURIComponent(c[0]);if(o[i]=e.read(s,i),t===i)break}catch(t){}}return t?o[t]:o}},remove:function(t,e){o(t,"",V({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,V({},this.attributes,e))},withConverter:function(e){return t(V({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});function Z(t){let e=document.getElementById(t);if(e)return JSON.parse(e.textContent)}function tt(t){let e,n;return{c(){e=d("div"),n=p(t[0]),g(e,"class","invalid-feedback")},m(t,o){a(t,e,o),u(e,n)},p(t,e){1&e&&v(n,t[0])},d(t){t&&f(e)}}}function et(e){let n,r,c,s,i,l,p,h,v,y,k,w,_,C=e[0]&&tt(e);return{c(){n=d("form"),r=d("div"),c=d("input"),s=m(),i=d("div"),l=d("input"),p=m(),C&&C.c(),h=m(),v=d("div"),v.innerHTML='<input type="submit" class="btn btn-primary" value="Join"/>',y=m(),k=d("div"),k.innerHTML='<label class="col"><input type="checkbox" name="is_spectator"/> Join as a spectator 👁️</label>',g(c,"type","hidden"),g(c,"name","csrfmiddlewaretoken"),c.value=(console.log(X.get()),X.get("csrftoken")),g(l,"type","text"),g(l,"name","name"),g(l,"class","form-control"),x(l,"is-invalid",e[0]),g(i,"class","col"),g(v,"class","col"),g(r,"class","row row-cols-lg-auto"),g(k,"class","row"),g(n,"method","post")},m(t,o){a(t,n,o),u(n,r),u(r,c),u(r,s),u(r,i),u(i,l),b(l,e[1]),u(i,p),C&&C.m(i,null),u(r,h),u(r,v),u(n,y),u(n,k),w||(_=[$(l,"change",e[2]),$(l,"input",e[3])],w=!0)},p(t,[e]){2&e&&l.value!==t[1]&&b(l,t[1]),1&e&&x(l,"is-invalid",t[0]),t[0]?C?C.p(t,e):(C=tt(t),C.c(),C.m(i,null)):C&&(C.d(1),C=null)},i:t,o:t,d(t){t&&f(n),C&&C.d(),w=!1,o(_)}}}function nt(t,e,n){let o,r="";_((()=>{const t=new Proxy(new URLSearchParams(window.location.search),{get:(t,e)=>t.get(e)});t.name&&n(1,r=t.name)}));return[o,r,()=>{n(0,o=r?void 0:"Name cannot be empty")},function(){r=this.value,n(1,r)}]}class ot extends Q{constructor(t){super(),Y(this,t,nt,et,c,{})}}function rt(t){let e,n,r,c;const s=t[3].default,l=function(t,e,n,o){if(t){const r=i(t,e,n,o);return t[0](r)}}(s,t,t[2],null);return{c(){e=d("div"),l&&l.c(),g(e,"class","card btn btn-light svelte-kizkkp"),g(e,"disabled",t[0]),x(e,"selected",t[1])},m(o,s){a(o,e,s),l&&l.m(e,null),n=!0,r||(c=[$(e,"click",t[4]),$(e,"keypress",t[5])],r=!0)},p(t,[o]){l&&l.p&&(!n||4&o)&&function(t,e,n,o,r,c){if(r){const s=i(e,n,o,c);t.p(s,r)}}(l,s,t,t[2],n?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(s,t[2],o,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null),(!n||1&o)&&g(e,"disabled",t[0]),(!n||2&o)&&x(e,"selected",t[1])},i(t){n||(L(l,t),n=!0)},o(t){F(l,t),n=!1},d(t){t&&f(e),l&&l.d(t),r=!1,o(c)}}}function ct(t,e,n){let{$$slots:o={},$$scope:r}=e,{disabled:c=!0}=e,{selected:s=""}=e;return t.$$set=t=>{"disabled"in t&&n(0,c=t.disabled),"selected"in t&&n(1,s=t.selected),"$$scope"in t&&n(2,r=t.$$scope)},[c,s,r,o,function(e){C.call(this,t,e)},function(e){C.call(this,t,e)}]}class st extends Q{constructor(t){super(),Y(this,t,ct,rt,c,{disabled:0,selected:1})}}function it(t){let e;function n(t,e){return t[1]?at:ut}let o=n(t),r=o(t);return{c(){r.c(),e=h()},m(t,n){r.m(t,n),a(t,e,n)},p(t,c){o===(o=n(t))&&r?r.p(t,c):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&f(e)}}}function lt(e){let n;return{c(){n=p("👁️")},m(t,e){a(t,n,e)},p:t,d(t){t&&f(n)}}}function ut(e){let n;return{c(){n=p("⌛")},m(t,e){a(t,n,e)},p:t,d(t){t&&f(n)}}}function at(t){let e,n=t[0].vote+"";return{c(){e=p(n)},m(t,n){a(t,e,n)},p(t,o){1&o&&n!==(n=t[0].vote+"")&&v(e,n)},d(t){t&&f(e)}}}function ft(t){let e;function n(t,e){return t[0].is_spectator?lt:t[0].vote?it:void 0}let o=n(t),r=o&&o(t);return{c(){r&&r.c(),e=h()},m(t,n){r&&r.m(t,n),a(t,e,n)},p(t,c){o===(o=n(t))&&r?r.p(t,c):(r&&r.d(1),r=o&&o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r&&r.d(t),t&&f(e)}}}function dt(t){let e,n,o,r,c,s=t[0].name+"";return r=new st({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){e=d("div"),n=p(s),o=m(),q(r.$$.fragment),g(e,"class","participant svelte-ef8jv9"),y(e,"transform","rotate("+t[2]+"deg) translate(33vw) rotate(90deg)")},m(t,s){a(t,e,s),u(e,n),u(e,o),W(r,e,null),c=!0},p(t,[o]){(!c||1&o)&&s!==(s=t[0].name+"")&&v(n,s);const i={};131&o&&(i.$$scope={dirty:o,ctx:t}),r.$set(i),(!c||4&o)&&y(e,"transform","rotate("+t[2]+"deg) translate(33vw) rotate(90deg)")},i(t){c||(L(r.$$.fragment,t),c=!0)},o(t){F(r.$$.fragment,t),c=!1},d(t){t&&f(e),G(r)}}}function pt(t,e,n){let o,r,c,{user:s}=e,{isRevealed:i}=e,{i:l}=e,{count:u}=e;return t.$$set=t=>{"user"in t&&n(0,s=t.user),"isRevealed"in t&&n(1,i=t.isRevealed),"i"in t&&n(3,l=t.i),"count"in t&&n(4,u=t.count)},t.$$.update=()=>{if(120&t.$$.dirty)if(1==u)n(2,c=-90);else{const t=176,e=90,s=t-4;n(6,r=Math.min(s,e+u/8*(s-e))),n(5,o=Math.min(t,135+u/8*(t-135))),n(2,c=l*(r/(u-1))-o)}},[s,i,c,l,u,o,r]}class mt extends Q{constructor(t){super(),Y(this,t,pt,dt,c,{user:0,isRevealed:1,i:3,count:4})}}const ht=[];function $t(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!ht.length;for(const t of r)t[1](),ht.push(t,e);if(t){for(let t=0;t<ht.length;t+=2)ht[t][0](ht[t+1]);ht.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const l=[c,i];return r.add(l),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(l),0===r.size&&o&&(o(),o=null)}}}}function gt(t,e,n){const o=t.slice();return o[16]=e[n],o}function vt(t,e,n){const o=t.slice();return o[12]=e[n][0],o[19]=e[n][1],o}function bt(t,e,n){const o=t.slice();return o[11]=e[n],o[23]=n,o}function yt(t,e){let n,o,r;return o=new mt({props:{isRevealed:e[0],user:e[11],i:e[23],count:e[2].length}}),{key:t,first:null,c(){n=h(),q(o.$$.fragment),this.first=n},m(t,e){a(t,n,e),W(o,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.isRevealed=e[0]),4&n&&(r.user=e[11]),4&n&&(r.i=e[23]),4&n&&(r.count=e[2].length),o.$set(r)},i(t){r||(L(o.$$.fragment,t),r=!0)},o(t){F(o.$$.fragment,t),r=!1},d(t){t&&f(n),G(o,t)}}}function xt(t){let e,n,o=[],r=new Map,c=t[1];const s=t=>t[12];for(let e=0;e<c.length;e+=1){let n=vt(t,c,e),i=s(n);r.set(i,o[e]=_t(i,n))}let i=null;return c.length||(i=kt()),{c(){e=d("div");for(let t=0;t<o.length;t+=1)o[t].c();i&&i.c(),g(e,"class","row")},m(t,r){a(t,e,r);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,null);i&&i.m(e,null),n=!0},p(t,n){2&n&&(c=t[1],T(),o=H(o,n,s,1,t,c,r,e,D,_t,null,vt),z(),!c.length&&i?i.p(t,n):c.length?i&&(i.d(1),i=null):(i=kt(),i.c(),i.m(e,null)))},i(t){if(!n){for(let t=0;t<c.length;t+=1)L(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)F(o[t]);n=!1},d(t){t&&f(e);for(let t=0;t<o.length;t+=1)o[t].d();i&&i.d()}}}function kt(e){let n;return{c(){n=d("div"),n.textContent="No votes",g(n,"class","col text-center")},m(t,e){a(t,n,e)},p:t,d(t){t&&f(n)}}}function wt(t){let e,n=t[12]+"";return{c(){e=p(n)},m(t,n){a(t,e,n)},p(t,o){2&o&&n!==(n=t[12]+"")&&v(e,n)},d(t){t&&f(e)}}}function _t(t,e){let n,o,r,c,s,i,l,h,$=e[19]+"";return o=new st({props:{$$slots:{default:[wt]},$$scope:{ctx:e}}}),{key:t,first:null,c(){n=d("div"),q(o.$$.fragment),r=m(),c=d("span"),s=p($),i=p("x"),l=m(),g(c,"class","text-muted"),g(n,"class","col text-center"),this.first=n},m(t,e){a(t,n,e),W(o,n,null),u(n,r),u(n,c),u(c,s),u(c,i),u(n,l),h=!0},p(t,n){e=t;const r={};16777218&n&&(r.$$scope={dirty:n,ctx:e}),o.$set(r),(!h||2&n)&&$!==($=e[19]+"")&&v(s,$)},i(t){h||(L(o.$$.fragment,t),h=!0)},o(t){F(o.$$.fragment,t),h=!1},d(t){t&&f(n),G(o)}}}function Ct(t){let e;return{c(){e=p("You joined as spectator")},m(t,n){a(t,e,n)},d(t){t&&f(e)}}}function Et(e){let n,o,r;return{c(){n=d("button"),n.textContent="Reveal",g(n,"class","btn btn-primary")},m(t,c){a(t,n,c),o||(r=$(n,"click",e[8]),o=!0)},p:t,d(t){t&&f(n),o=!1,r()}}}function Rt(e){let n,o,r;return{c(){n=d("button"),n.textContent="Clear",g(n,"class","btn btn-warning")},m(t,c){a(t,n,c),o||(r=$(n,"click",e[9]),o=!0)},p:t,d(t){t&&f(n),o=!1,r()}}}function Mt(t){let e,n,o=t[4],r=[];for(let e=0;e<o.length;e+=1)r[e]=Nt(gt(t,o,e));const c=t=>F(r[t],1,1,(()=>{r[t]=null}));return{c(){e=d("div");for(let t=0;t<r.length;t+=1)r[t].c();g(e,"class","d-flex justify-content-center mb-3")},m(t,o){a(t,e,o);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(e,null);n=!0},p(t,n){if(4121&n){let s;for(o=t[4],s=0;s<o.length;s+=1){const c=gt(t,o,s);r[s]?(r[s].p(c,n),L(r[s],1)):(r[s]=Nt(c),r[s].c(),L(r[s],1),r[s].m(e,null))}for(T(),s=o.length;s<r.length;s+=1)c(s);z()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)L(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)F(r[t]);n=!1},d(t){t&&f(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function jt(t){let e,n,o=t[16]+"";return{c(){e=p(o),n=m()},m(t,o){a(t,e,o),a(t,n,o)},p(t,n){16&n&&o!==(o=t[16]+"")&&v(e,o)},d(t){t&&f(e),t&&f(n)}}}function Nt(t){let e,n;return e=new st({props:{disabled:t[0],selected:t[16]==t[3].vote,$$slots:{default:[jt]},$$scope:{ctx:t}}}),e.$on("click",(function(){r(t[12](t[16]))&&t[12](t[16]).apply(this,arguments)})),e.$on("keypress",(function(){r(t[12](t[16]))&&t[12](t[16]).apply(this,arguments)})),{c(){q(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},p(n,o){t=n;const r={};1&o&&(r.disabled=t[0]),24&o&&(r.selected=t[16]==t[3].vote),16777232&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function St(e){let n,o,r;return{c(){n=d("button"),n.textContent="Add fake users",g(n,"class","btn btn-light")},m(t,c){a(t,n,c),o||(r=$(n,"click",e[10]),o=!0)},p:t,d(t){t&&f(n),o=!1,r()}}}function Ot(t){let e,n,o,r,c,s,i,l,p,$,v=[],b=new Map,y=t[2];const x=t=>t[11].id;for(let e=0;e<y.length;e+=1){let n=bt(t,y,e),o=x(n);b.set(o,v[e]=yt(o,n))}let k=t[0]&&xt(t),w=t[3].is_spectator&&Ct();function _(t,e){return t[0]?Rt:Et}let C=_(t),E=C(t),R=!t[3].is_spectator&&Mt(t),M="Jieter"==t[3].name&&St(t);return{c(){e=d("div");for(let t=0;t<v.length;t+=1)v[t].c();n=m(),o=d("div"),k&&k.c(),r=m(),w&&w.c(),c=m(),s=d("div"),E.c(),i=m(),R&&R.c(),l=m(),M&&M.c(),p=h(),g(s,"class","d-flex justify-content-center mb-3"),g(o,"class","controls svelte-14wosg6"),g(e,"class","participants svelte-14wosg6")},m(t,f){a(t,e,f);for(let t=0;t<v.length;t+=1)v[t]&&v[t].m(e,null);u(e,n),u(e,o),k&&k.m(o,null),u(o,r),w&&w.m(o,null),u(o,c),u(o,s),E.m(s,null),a(t,i,f),R&&R.m(t,f),a(t,l,f),M&&M.m(t,f),a(t,p,f),$=!0},p(t,[i]){5&i&&(y=t[2],T(),v=H(v,i,x,1,t,y,b,e,D,yt,n,bt),z()),t[0]?k?(k.p(t,i),1&i&&L(k,1)):(k=xt(t),k.c(),L(k,1),k.m(o,r)):k&&(T(),F(k,1,1,(()=>{k=null})),z()),t[3].is_spectator?w||(w=Ct(),w.c(),w.m(o,c)):w&&(w.d(1),w=null),C===(C=_(t))&&E?E.p(t,i):(E.d(1),E=C(t),E&&(E.c(),E.m(s,null))),t[3].is_spectator?R&&(T(),F(R,1,1,(()=>{R=null})),z()):R?(R.p(t,i),8&i&&L(R,1)):(R=Mt(t),R.c(),L(R,1),R.m(l.parentNode,l)),"Jieter"==t[3].name?M?M.p(t,i):(M=St(t),M.c(),M.m(p.parentNode,p)):M&&(M.d(1),M=null)},i(t){if(!$){for(let t=0;t<y.length;t+=1)L(v[t]);L(k),L(R),$=!0}},o(t){for(let t=0;t<v.length;t+=1)F(v[t]);F(k),F(R),$=!1},d(t){t&&f(e);for(let t=0;t<v.length;t+=1)v[t].d();k&&k.d(),w&&w.d(),E.d(),t&&f(i),R&&R.d(t),t&&f(l),M&&M.d(t),t&&f(p)}}}function At(t,e,n){let o,r,c,i;const u=Z("websocket_url"),{user:a,participants:f,isRevealed:d,choices:p,update:m}=function(t){const e=$t([]),n=$t([]),o=$t(!1),r=$t({});let c;const s=()=>{c=new WebSocket(t),c.onclose=()=>{console.log("WebSocket connection closed unexpectedly. Trying to reconnect in 2s..."),setTimeout((()=>{console.log("Reconnecting..."),s()}),2e3)},c.onmessage=t=>{const c=JSON.parse(t.data);switch(console.log("message",c),c.type){case"init":e.set(c.users),n.set(c.choices),r.set(c.user);break;case"join":e.update((t=>[...t,c.user]));break;case"leave":e.update((t=>{let e;return t.forEach(((t,n)=>{t.name==c.name&&(e=n)})),t.splice(e,1),t}));break;case"reveal":o.set(!0);break;case"clear":o.set(!1),e.update((t=>(t.map((t=>(t.vote=null,t))),t)));break;case"vote":e.update((t=>(t.forEach((t=>{t.id==c.user_id&&(t.vote=c.value)})),[...t])))}}};return s(),{participants:e,isRevealed:o,user:r,choices:n,update:async function(t,e=undefined){(e=e||{}).action=t,console.log("update",e),c.send(JSON.stringify(e))}}}(u);s(t,a,(t=>n(3,c=t))),s(t,f,(t=>n(2,r=t))),s(t,d,(t=>n(0,o=t))),s(t,p,(t=>n(4,i=t)));let h;return t.$$.update=()=>{1&t.$$.dirty&&n(1,h=function(){const t=new Proxy({},{get:(t,e)=>e in t?t[e]:0});return r.forEach((e=>{null!=e.vote&&(t[e.vote]+=1)})),Object.entries(t).sort(((t,e)=>e[1]-t[1]))}())},[o,h,r,c,i,f,d,p,()=>m("reveal"),()=>{l(a,c.vote=null,c),m("clear")},function(){f.update((t=>{const e=t=>t[Math.floor(Math.random()*t.length)];var n,o;return[...t,{id:(n=1e4,o=2e4,Math.floor(Math.random()*(o-n)+n)),name:e(["Bob","Charlie","Erin","Felix","Gude","Henri","Irma","June","Kevin"]),vote:e(["1","2"])}]}))},a,t=>()=>{o||(m("vote",{value:t}),l(a,c.vote=t,c))}]}class Bt extends Q{constructor(t){super(),Y(this,t,At,Ot,c,{})}}function It(t){let e,n;return e=new ot({}),{c(){q(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Jt(t){let e,n;return e=new Bt({}),{c(){q(e.$$.fragment)},m(t,o){W(e,t,o),n=!0},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Ut(e){let n,o,r,c,s,i,l,u,p;const h=[Jt,It],$=[];return r=function(t,e){return t[0]?0:1}(e),c=$[r]=h[r](e),{c(){n=d("h1"),n.textContent="Planning poker",o=m(),c.c(),s=m(),i=d("br"),l=m(),u=d("a"),u.textContent="New poker session",g(u,"href","/")},m(t,e){a(t,n,e),a(t,o,e),$[r].m(t,e),a(t,s,e),a(t,i,e),a(t,l,e),a(t,u,e),p=!0},p:t,i(t){p||(L(c),p=!0)},o(t){F(c),p=!1},d(t){t&&f(n),t&&f(o),$[r].d(t),t&&f(s),t&&f(i),t&&f(l),t&&f(u)}}}function Pt(t){return[Z("websocket_url")]}return new class extends Q{constructor(t){super(),Y(this,t,Pt,Ut,c,{})}}({target:document.querySelector("#poker")})}();
