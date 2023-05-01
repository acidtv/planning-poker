var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function s(t,e,n){t.$$.on_destroy.push(i(e,n))}function l(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(){return p("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function b(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function x(t,e,n){t.classList[n?"add":"remove"](e)}let k;function w(t){k=t}function _(t){(function(){if(!k)throw new Error("Function called outside component initialization");return k})().$$.on_mount.push(t)}function C(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const S=[],E=[];let N=[];const W=[],j=Promise.resolve();let R=!1;function A(t){N.push(t)}const O=new Set;let M=0;function I(){if(0!==M)return;const t=k;do{try{for(;M<S.length;){const t=S[M];M++,w(t),z(t.$$)}}catch(t){throw S.length=0,M=0,t}for(w(null),S.length=0,M=0;E.length;)E.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];O.has(e)||(O.add(e),e())}N.length=0}while(S.length);for(;W.length;)W.pop()();R=!1,O.clear(),w(t)}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const G=new Set;let P;function X(){P={r:0,c:[],p:P}}function T(){P.r||r(P.c),P=P.p}function B(t,e){t&&t.i&&(G.delete(t),t.i(e))}function D(t,e,n,r){if(t&&t.o){if(G.has(t))return;G.add(t),P.c.push((()=>{G.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function F(t,e){D(t,1,1,(()=>{e.delete(t.key)}))}function L(t,e,n,o,c,i,s,l,a,u,d,f){let p=t.length,m=i.length,h=p;const g={};for(;h--;)g[t[h].key]=h;const $=[],v=new Map,y=new Map,b=[];for(h=m;h--;){const t=f(c,i,h),r=n(t);let l=s.get(r);l?o&&b.push((()=>l.p(t,e))):(l=u(r,t),l.c()),v.set(r,$[h]=l),r in g&&y.set(r,Math.abs(h-g[r]))}const x=new Set,k=new Set;function w(t){B(t,1),t.m(l,d),s.set(t.key,t),d=t.first,m--}for(;p&&m;){const e=$[m-1],n=t[p-1],r=e.key,o=n.key;e===n?(d=e.first,p--,m--):v.has(o)?!s.has(r)||x.has(r)?w(e):k.has(o)?p--:y.get(r)>y.get(o)?(k.add(r),w(e)):(x.add(o),p--):(a(n,s),p--)}for(;p--;){const e=t[p];v.has(e.key)||a(e,s)}for(;m;)w($[m-1]);return r(b),$}function H(t){t&&t.c()}function J(t,n,c,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(n,c),i||A((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(A)}function U(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];N.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),N=e}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(S.push(t),R||(R=!0,j.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,o,c,i,s,l,a,u=[-1]){const f=k;w(e);const p=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:o.target||f.$$.root};a&&a(p.root);let m=!1;if(p.ctx=c?c(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),m&&V(e,t)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();o.intro&&B(e.$$.fragment),J(e,o.target,o.anchor,o.customElement),I()}w(f)}class Y{$destroy(){U(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/*! js-cookie v3.0.1 | MIT */function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var Q=function t(e,n){function r(t,r,o){if("undefined"!=typeof document){"number"==typeof(o=K({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var i in o)o[i]&&(c+="; "+i,!0!==o[i]&&(c+="="+o[i].split(";")[0]));return document.cookie=t+"="+e.write(r,t)+c}}return Object.create({set:r,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var c=n[o].split("="),i=c.slice(1).join("=");try{var s=decodeURIComponent(c[0]);if(r[s]=e.read(i,s),t===s)break}catch(t){}}return t?r[t]:r}},remove:function(t,e){r(t,"",K({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,K({},this.attributes,e))},withConverter:function(e){return t(K({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});function Z(t){let e=document.getElementById(t);if(e)return JSON.parse(e.textContent)}function tt(t){let e,n;return{c(){e=f("div"),n=p(t[2]),$(e,"class","invalid-feedback")},m(t,r){u(t,e,r),a(e,n)},p(t,e){4&e&&v(n,t[2])},d(t){t&&d(e)}}}function et(e){let n,o,c,i,s,l,h,v,b,k,w,_,C,S,E,N,W=e[2]&&tt(e);return{c(){n=f("form"),o=f("div"),c=f("input"),i=m(),s=f("div"),l=f("input"),h=m(),W&&W.c(),v=m(),b=f("div"),b.innerHTML='<input type="submit" class="btn btn-primary" value="Join"/>',k=m(),w=f("div"),_=f("label"),C=f("input"),S=p(" Join as a spectator 👁️"),$(c,"type","hidden"),$(c,"name","csrfmiddlewaretoken"),c.value=Q.get("csrftoken"),$(l,"type","text"),$(l,"name","name"),$(l,"class","form-control"),x(l,"is-invalid",e[2]),$(s,"class","col"),$(b,"class","col"),$(o,"class","row row-cols-lg-auto"),$(C,"type","checkbox"),$(C,"name","is_spectator"),$(_,"class","col"),$(w,"class","row"),$(n,"method","post")},m(t,r){u(t,n,r),a(n,o),a(o,c),a(o,i),a(o,s),a(s,l),y(l,e[0]),a(s,h),W&&W.m(s,null),a(o,v),a(o,b),a(n,k),a(n,w),a(w,_),a(_,C),C.checked=e[1],a(_,S),E||(N=[g(l,"change",e[3]),g(l,"input",e[4]),g(C,"change",e[5])],E=!0)},p(t,[e]){1&e&&l.value!==t[0]&&y(l,t[0]),4&e&&x(l,"is-invalid",t[2]),t[2]?W?W.p(t,e):(W=tt(t),W.c(),W.m(s,null)):W&&(W.d(1),W=null),2&e&&(C.checked=t[1])},i:t,o:t,d(t){t&&d(n),W&&W.d(),E=!1,r(N)}}}function nt(t,e,n){let r,o="",c=!1;_((()=>{const t=window.localStorage.getItem("name");t&&n(0,o=t);const e=window.localStorage.getItem("isSpectator");null!==e&&n(1,c="true"===e)}));return t.$$.update=()=>{1&t.$$.dirty&&o&&window.localStorage.setItem("name",o),2&t.$$.dirty&&window.localStorage.setItem("isSpectator",c)},[o,c,r,()=>{n(2,r=o?void 0:"Name cannot be empty")},function(){o=this.value,n(0,o)},function(){c=this.checked,n(1,c)}]}class rt extends Y{constructor(t){super(),q(this,t,nt,et,c,{})}}const ot=(t,e={})=>{St(e);let{colors:n=["#FFC700","#FF0000","#2E3191","#41BBC7"],duration:r=3500,force:o=.5,particleCount:c=150,particleShape:i="mix",particleSize:s=12,destroyAfterDone:l=!0,stageHeight:a=800,stageWidth:u=1600}=e;!function(t){const e=ht("style");e.dataset.neoconfetti="",e.textContent='@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}',gt(document.head,e)}(),t.classList.add("fk9XWG_container"),t.style.setProperty("--stage-height",a+"px");let d,f=$t(c,n),p=ct(t,f);function m(t,e){const n=pt(ft()*(kt-1)),c="rectangles"!==i&&("circles"===i||wt(n)),l=(e,n)=>t.style.setProperty(e,n+"");l("--x-landing-point",yt(dt(bt(e,90)-180),0,180,-u/2,u/2)+"px"),l("--duration-chaos",r-pt(1e3*ft())+"ms");const a=ft()<lt?vt(ft()*at,2):0;l("--x1",a),l("--x2",-1*a),l("--x3",a),l("--x4",vt(dt(yt(dt(bt(e,90)-180),0,180,-1,1)),4)),l("--y1",vt(ft()*ut,4)),l("--y2",vt(ft()*o*(xt()?1:-1),4)),l("--y3",ut),l("--y4",vt(mt(yt(dt(e-180),0,180,o,-o),0),4)),l("--width",(c?s:pt(4*ft())+s/2)+"px"),l("--height",(c?s:pt(2*ft())+s)+"px");const d=n.toString(2).padStart(3,"0").split("");l("--half-rotation",d.map((t=>+t/2+""))),l("--rotation",d),l("--rotation-duration",vt(ft()*(st-it)+it)+"ms"),l("--border-radius",c?"50%":0)}for(const[t,e]of Object.entries(p))m(e,f[+t].degree);return Promise.resolve().then((()=>d=setTimeout((()=>l&&(t.innerHTML="")),r))),{update(e){St(e);const m=e.particleCount??c,h=e.colors??n,g=e.stageHeight??a;if(f=$t(m,h),m===c&&JSON.stringify(n)!==JSON.stringify(h))for(const[t,{color:e}]of Object.entries(f))p[+t].style.setProperty("--bgcolor",e);m!==c&&(t.innerHTML="",p=ct(t,f)),l&&!e.destroyAfterDone&&clearTimeout(d),t.style.setProperty("--stage-height",g+"px"),n=h,r=e.duration??r,o=e.force??o,c=m,i=e.particleShape??i,s=e.particleSize??s,l=e.destroyAfterDone??l,a=g,u=e.stageWidth??u},destroy(){clearTimeout(d)}}};function ct(t,e=[]){const n=[];for(const{color:r}of e){const e=ht("div");e.className="fk9XWG_particle",e.style.setProperty("--bgcolor",r);const o=ht("div");gt(e,o),gt(t,e),n.push(e)}return n}const it=200,st=800,lt=.1,at=.3,ut=.5,dt=Math.abs,ft=Math.random,pt=Math.round,mt=Math.max,ht=t=>document.createElement(t),gt=(t,e)=>t.appendChild(e),$t=(t,e)=>Array.from({length:t},((n,r)=>({color:e[r%e.length],degree:360*r/t}))),vt=(t,e=2)=>pt((t+Number.EPSILON)*10**e)/10**e,yt=(t,e,n,r,o)=>(t-e)*(o-r)/(n-e)+r,bt=(t,e)=>t+e>360?t+e-360:t+e,xt=()=>ft()>.5,kt=6,wt=t=>1!==t&&xt(),_t=t=>void 0===t,Ct=(t,e)=>{if(!_t(t)&&Number.isSafeInteger(t)&&t<0)throw new Error(e+" must be a positive integer")},St=({particleCount:t,duration:e,colors:n,particleSize:r,force:o,stageHeight:c,stageWidth:i,particleShape:s})=>{if(Ct(t,"particleCount"),Ct(e,"duration"),Ct(r,"particleSize"),Ct(o,"force"),Ct(c,"stageHeight"),Ct(i,"stageWidth"),!_t(s)&&!/^(mix|circles|rectangles)$/i.test(s))throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');if(!_t(n)&&!Array.isArray(n))throw new Error("colors must be an array of strings");if(o>1)throw new Error("force must be within 0 and 1")};function Et(t){let e,n,o,c;const i=t[3].default,s=function(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}(i,t,t[2],null);return{c(){e=f("div"),s&&s.c(),$(e,"class","card btn svelte-xiahgm"),$(e,"disabled",t[0]),x(e,"selected",t[1])},m(r,i){u(r,e,i),s&&s.m(e,null),n=!0,o||(c=[g(e,"click",t[4]),g(e,"keypress",t[5])],o=!0)},p(t,[r]){s&&s.p&&(!n||4&r)&&function(t,e,n,r,o,c){if(o){const i=l(e,n,r,c);t.p(i,o)}}(s,i,t,t[2],n?function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(i,t[2],r,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null),(!n||1&r)&&$(e,"disabled",t[0]),(!n||2&r)&&x(e,"selected",t[1])},i(t){n||(B(s,t),n=!0)},o(t){D(s,t),n=!1},d(t){t&&d(e),s&&s.d(t),o=!1,r(c)}}}function Nt(t,e,n){let{$$slots:r={},$$scope:o}=e,{disabled:c=!0}=e,{selected:i=""}=e;return t.$$set=t=>{"disabled"in t&&n(0,c=t.disabled),"selected"in t&&n(1,i=t.selected),"$$scope"in t&&n(2,o=t.$$scope)},[c,i,o,r,function(e){C.call(this,t,e)},function(e){C.call(this,t,e)}]}class Wt extends Y{constructor(t){super(),q(this,t,Nt,Et,c,{disabled:0,selected:1})}}function jt(t){let e;function n(t,e){return t[1]?Ot:At}let r=n(t),o=r(t);return{c(){o.c(),e=h()},m(t,n){o.m(t,n),u(t,e,n)},p(t,c){r===(r=n(t))&&o?o.p(t,c):(o.d(1),o=r(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){o.d(t),t&&d(e)}}}function Rt(e){let n;return{c(){n=p("👁️")},m(t,e){u(t,n,e)},p:t,d(t){t&&d(n)}}}function At(e){let n;return{c(){n=p("⌛")},m(t,e){u(t,n,e)},p:t,d(t){t&&d(n)}}}function Ot(t){let e,n=t[0].vote+"";return{c(){e=p(n)},m(t,n){u(t,e,n)},p(t,r){1&r&&n!==(n=t[0].vote+"")&&v(e,n)},d(t){t&&d(e)}}}function Mt(t){let e;function n(t,e){return t[0].is_spectator?Rt:t[0].vote?jt:void 0}let r=n(t),o=r&&r(t);return{c(){o&&o.c(),e=h()},m(t,n){o&&o.m(t,n),u(t,e,n)},p(t,c){r===(r=n(t))&&o?o.p(t,c):(o&&o.d(1),o=r&&r(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){o&&o.d(t),t&&d(e)}}}function It(t){let e,n,r,o,c,i,s=t[0].name+"";return c=new Wt({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){e=f("div"),n=f("strong"),r=p(s),o=m(),H(c.$$.fragment),$(e,"class","participant svelte-1s7tb0t"),b(e,"transform","rotate("+t[2]+"deg) translate(33vw) rotate(90deg)")},m(t,s){u(t,e,s),a(e,n),a(n,r),a(e,o),J(c,e,null),i=!0},p(t,[n]){(!i||1&n)&&s!==(s=t[0].name+"")&&v(r,s);const o={};35&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o),(!i||4&n)&&b(e,"transform","rotate("+t[2]+"deg) translate(33vw) rotate(90deg)")},i(t){i||(B(c.$$.fragment,t),i=!0)},o(t){D(c.$$.fragment,t),i=!1},d(t){t&&d(e),U(c)}}}const zt=174;function Gt(t,e,n){let r,{user:o}=e,{isRevealed:c}=e,{i:i}=e,{count:s}=e;return t.$$set=t=>{"user"in t&&n(0,o=t.user),"isRevealed"in t&&n(1,c=t.isRevealed),"i"in t&&n(3,i=t.i),"count"in t&&n(4,s=t.count)},t.$$.update=()=>{28&t.$$.dirty&&(n(2,r=-90),s>1&&n(2,r-=Math.min(20,zt/s)*(i-(s-1)/2)))},[o,c,r,i,s]}class Pt extends Y{constructor(t){super(),q(this,t,Gt,It,c,{user:0,isRevealed:1,i:3,count:4})}}const Xt=[];function Tt(e,n=t){let r;const o=new Set;function i(t){if(c(e,t)&&(e=t,r)){const t=!Xt.length;for(const t of o)t[1](),Xt.push(t,e);if(t){for(let t=0;t<Xt.length;t+=2)Xt[t][0](Xt[t+1]);Xt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(c,s=t){const l=[c,s];return o.add(l),1===o.size&&(r=n(i)||t),c(e),()=>{o.delete(l),0===o.size&&r&&(r(),r=null)}}}}function Bt(e,n,c){const s=!Array.isArray(e),l=s?[e]:e,a=n.length<2;return u=e=>{let c=!1;const u=[];let d=0,f=t;const p=()=>{if(d)return;f();const r=n(s?u[0]:u,e);a?e(r):f=o(r)?r:t},m=l.map(((t,e)=>i(t,(t=>{u[e]=t,d&=~(1<<e),c&&p()}),(()=>{d|=1<<e}))));return c=!0,p(),function(){r(m),f()}},{subscribe:Tt(c,u).subscribe};var u}function Dt(t){const e=Tt([]),n=Tt([]),r=Tt(!1),o=Tt({}),c=Tt(void 0),s=Bt(e,(t=>{const e=new Proxy({},{get:(t,e)=>e in t?t[e]:0});return t.forEach((t=>{null!=t.vote&&(e[t.vote]+=1)})),Object.entries(e).sort(((t,e)=>e[1]-t[1]))})),l=t=>{o.update((e=>(e.vote=t,e)))};let a;const u=()=>{a=new WebSocket(t),a.onclose=()=>{c.set("WebSocket connection closed unexpectedly. Trying to reconnect in 2s..."),setTimeout((()=>{console.log("Reconnecting..."),u()}),2e3)},a.onmessage=t=>{const i=JSON.parse(t.data);switch(console.log("message",i),i.type){case"init":e.set(i.users),n.set(i.choices),o.set(i.user),r.set(i.is_revealed),c.set(void 0);break;case"vote":e.update((t=>(t.forEach((t=>{t.id==i.user_id&&(t.vote=i.value)})),[...t])));break;case"error":c.set(i.message)}}};async function d(t,e=undefined){(e=e||{}).action=t,console.log("update",e),a.send(JSON.stringify(e))}u();return{participants:e,isRevealed:r,user:o,choices:n,votes:s,revealVotes:()=>d("reveal"),clearVotes:()=>{l(null),d("clear")},vote:t=>()=>{(function(t){let e;return i(t,(t=>e=t))(),e})(r)||(d("vote",{value:t}),l(t))},changeDeck:()=>{d("change_deck")},error:c,update:d}}function Ft(t,e,n){const r=t.slice();return r[23]=e[n],r}function Lt(t,e,n){const r=t.slice();return r[19]=e[n][0],r[26]=e[n][1],r}function Ht(t,e,n){const r=t.slice();return r[18]=e[n],r[30]=n,r}function Jt(t){let e,n,r;return{c(){e=f("div"),n=f("div"),r=p(t[3]),$(n,"class","alert alert-danger"),$(n,"role","alert"),$(e,"class","fixed-top")},m(t,o){u(t,e,o),a(e,n),a(n,r)},p(t,e){8&e[0]&&v(r,t[3])},d(t){t&&d(e)}}}function Ut(t,e){let n,r,o;return r=new Pt({props:{isRevealed:e[4],user:e[18],i:e[30],count:e[1]}}),{key:t,first:null,c(){n=h(),H(r.$$.fragment),this.first=n},m(t,e){u(t,n,e),J(r,t,e),o=!0},p(t,n){e=t;const o={};16&n[0]&&(o.isRevealed=e[4]),1&n[0]&&(o.user=e[18]),1&n[0]&&(o.i=e[30]),2&n[0]&&(o.count=e[1]),r.$set(o)},i(t){o||(B(r.$$.fragment,t),o=!0)},o(t){D(r.$$.fragment,t),o=!1},d(t){t&&d(n),U(r,t)}}}function Vt(t){let e,n,r,o=[],c=new Map,i=t[5]&&1==t[5].length&&t[5][0][1]>1&&qt(),s=t[5];const l=t=>t[19];for(let e=0;e<s.length;e+=1){let n=Lt(t,s,e),r=l(n);c.set(r,o[e]=Qt(r,n))}let a=null;return s.length||(a=Yt()),{c(){i&&i.c(),e=m(),n=f("div");for(let t=0;t<o.length;t+=1)o[t].c();a&&a.c(),$(n,"class","summary rounded mb-3 text-center svelte-lta3sd")},m(t,c){i&&i.m(t,c),u(t,e,c),u(t,n,c);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(n,null);a&&a.m(n,null),r=!0},p(t,r){t[5]&&1==t[5].length&&t[5][0][1]>1?i||(i=qt(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),32&r[0]&&(s=t[5],X(),o=L(o,r,l,1,t,s,c,n,F,Qt,null,Lt),T(),!s.length&&a?a.p(t,r):s.length?a&&(a.d(1),a=null):(a=Yt(),a.c(),a.m(n,null)))},i(t){if(!r){for(let t=0;t<s.length;t+=1)B(o[t]);r=!0}},o(t){for(let t=0;t<o.length;t+=1)D(o[t]);r=!1},d(t){i&&i.d(t),t&&d(e),t&&d(n);for(let t=0;t<o.length;t+=1)o[t].d();a&&a.d()}}}function qt(e){let n,r,c;return{c(){n=f("div")},m(e,i){var s;u(e,n,i),r||(s=ot.call(null,n),c=s&&o(s.destroy)?s.destroy:t,r=!0)},d(t){t&&d(n),r=!1,c()}}}function Yt(e){let n;return{c(){n=f("div"),n.textContent="No votes",$(n,"class","col text-center")},m(t,e){u(t,n,e)},p:t,d(t){t&&d(n)}}}function Kt(t){let e,n=t[19]+"";return{c(){e=p(n)},m(t,n){u(t,e,n)},p(t,r){32&r[0]&&n!==(n=t[19]+"")&&v(e,n)},d(t){t&&d(e)}}}function Qt(t,e){let n,r,o,c,i,s,l,h,g=e[26]+"";return r=new Wt({props:{$$slots:{default:[Kt]},$$scope:{ctx:e}}}),{key:t,first:null,c(){n=f("div"),H(r.$$.fragment),o=m(),c=f("div"),i=p(g),s=p("x"),l=m(),$(c,"class","text-muted"),$(n,"class","d-inline-block text-center m-2"),this.first=n},m(t,e){u(t,n,e),J(r,n,null),a(n,o),a(n,c),a(c,i),a(c,s),a(n,l),h=!0},p(t,n){e=t;const o={};32&n[0]|1&n[1]&&(o.$$scope={dirty:n,ctx:e}),r.$set(o),(!h||32&n[0])&&g!==(g=e[26]+"")&&v(i,g)},i(t){h||(B(r.$$.fragment,t),h=!0)},o(t){D(r.$$.fragment,t),h=!1},d(t){t&&d(n),U(r)}}}function Zt(t){let e;return{c(){e=p("✓")},m(t,n){u(t,e,n)},d(t){t&&d(e)}}}function te(e){let n,r,o;return{c(){n=f("button"),n.textContent="Reveal",$(n,"class","btn btn-primary")},m(t,c){u(t,n,c),r||(o=g(n,"click",e[13]),r=!0)},p:t,d(t){t&&d(n),r=!1,o()}}}function ee(e){let n,r,o;return{c(){n=f("button"),n.textContent="Clear",$(n,"class","btn btn-warning")},m(t,c){u(t,n,c),r||(o=g(n,"click",e[14]),r=!0)},p:t,d(t){t&&d(n),r=!1,o()}}}function ne(t){let e,n,r=t[7],o=[];for(let e=0;e<r.length;e+=1)o[e]=ce(Ft(t,r,e));const c=t=>D(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,r){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,r);u(t,e,r),n=!0},p(t,n){if(524496&n[0]){let i;for(r=t[7],i=0;i<r.length;i+=1){const c=Ft(t,r,i);o[i]?(o[i].p(c,n),B(o[i],1)):(o[i]=ce(c),o[i].c(),B(o[i],1),o[i].m(e.parentNode,e))}for(X(),i=r.length;i<o.length;i+=1)c(i);T()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)B(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)D(o[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t),t&&d(e)}}}function re(e){let n,r,o,c,i,s=e[7].join(", ")+"";return{c(){n=p("You joined as spectator."),r=f("br"),o=p("\n        Current deck: "),c=p(s),i=p(".")},m(t,e){u(t,n,e),u(t,r,e),u(t,o,e),u(t,c,e),u(t,i,e)},p(t,e){128&e[0]&&s!==(s=t[7].join(", ")+"")&&v(c,s)},i:t,o:t,d(t){t&&d(n),t&&d(r),t&&d(o),t&&d(c),t&&d(i)}}}function oe(t){let e,n,r=t[23]+"";return{c(){e=p(r),n=m()},m(t,r){u(t,e,r),u(t,n,r)},p(t,n){128&n[0]&&r!==(r=t[23]+"")&&v(e,r)},d(t){t&&d(e),t&&d(n)}}}function ce(t){let e,n;return e=new Wt({props:{disabled:t[4],selected:t[23]==t[6].vote,$$slots:{default:[oe]},$$scope:{ctx:t}}}),e.$on("click",(function(){o(t[19](t[23]))&&t[19](t[23]).apply(this,arguments)})),e.$on("keypress",(function(){o(t[19](t[23]))&&t[19](t[23]).apply(this,arguments)})),{c(){H(e.$$.fragment)},m(t,r){J(e,t,r),n=!0},p(n,r){t=n;const o={};16&r[0]&&(o.disabled=t[4]),192&r[0]&&(o.selected=t[23]==t[6].vote),128&r[0]|1&r[1]&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function ie(e){let n;return{c(){n=f("button"),n.textContent="Reveal first!",n.disabled=!0,$(n,"class","btn btn-light")},m(t,e){u(t,n,e)},p:t,d(t){t&&d(n)}}}function se(e){let n,r,o;return{c(){n=f("button"),n.textContent="Change deck",$(n,"class","btn btn-secondary")},m(t,c){u(t,n,c),r||(o=g(n,"click",e[15]),r=!0)},p:t,d(t){t&&d(n),r=!1,o()}}}function le(e){let n,o,c,i,s,l,p,v,y,b,x,k,w,_,C,S,E,N=[],W=new Map,j=e[3]&&Jt(e),R=e[0];const A=t=>t[18].id;for(let t=0;t<R.length;t+=1){let n=Ht(e,R,t),r=A(n);W.set(r,N[t]=Ut(r,n))}let O=e[4]&&Vt(e),M=!e[4]&&e[2]&&Zt();function I(t,e){return t[4]?ee:te}let z=I(e),G=z(e);const P=[re,ne],H=[];function J(t,e){return t[6].is_spectator?0:1}function U(t,e){return t[4]?se:ie}x=J(e),k=H[x]=P[x](e);let V=U(e),q=V(e),Y=!e[8]&&function(e){let n,o,c,i,s;return{c(){n=f("button"),n.textContent="Add fake users",o=m(),c=f("button"),c.textContent="Fake votes",$(n,"class","btn btn-danger"),$(c,"class","btn btn-danger")},m(t,r){u(t,n,r),u(t,o,r),u(t,c,r),i||(s=[g(n,"click",e[20]),g(c,"click",e[21])],i=!0)},p:t,d(t){t&&d(n),t&&d(o),t&&d(c),i=!1,r(s)}}}(e);return{c(){j&&j.c(),n=m(),o=f("div");for(let t=0;t<N.length;t+=1)N[t].c();c=m(),i=f("div"),O&&O.c(),s=m(),l=f("div"),p=f("div"),M&&M.c(),v=m(),G.c(),y=m(),b=f("div"),k.c(),w=m(),_=f("div"),q.c(),C=m(),Y&&Y.c(),S=h(),$(p,"class","voting-status svelte-lta3sd"),$(l,"class","d-flex justify-content-center mb-3"),$(i,"class","controls svelte-lta3sd"),$(o,"class","participants svelte-lta3sd"),$(b,"class","d-flex justify-content-center mb-3"),$(_,"class","d-flex justify-content-center mb-3")},m(t,e){j&&j.m(t,e),u(t,n,e),u(t,o,e);for(let t=0;t<N.length;t+=1)N[t]&&N[t].m(o,null);a(o,c),a(o,i),O&&O.m(i,null),a(i,s),a(i,l),a(l,p),M&&M.m(p,null),a(l,v),G.m(l,null),u(t,y,e),u(t,b,e),H[x].m(b,null),u(t,w,e),u(t,_,e),q.m(_,null),u(t,C,e),Y&&Y.m(t,e),u(t,S,e),E=!0},p(t,e){t[3]?j?j.p(t,e):(j=Jt(t),j.c(),j.m(n.parentNode,n)):j&&(j.d(1),j=null),19&e[0]&&(R=t[0],X(),N=L(N,e,A,1,t,R,W,o,F,Ut,c,Ht),T()),t[4]?O?(O.p(t,e),16&e[0]&&B(O,1)):(O=Vt(t),O.c(),B(O,1),O.m(i,s)):O&&(X(),D(O,1,1,(()=>{O=null})),T()),!t[4]&&t[2]?M||(M=Zt(),M.c(),M.m(p,null)):M&&(M.d(1),M=null),z===(z=I(t))&&G?G.p(t,e):(G.d(1),G=z(t),G&&(G.c(),G.m(l,null)));let r=x;x=J(t),x===r?H[x].p(t,e):(X(),D(H[r],1,1,(()=>{H[r]=null})),T(),k=H[x],k?k.p(t,e):(k=H[x]=P[x](t),k.c()),B(k,1),k.m(b,null)),V===(V=U(t))&&q?q.p(t,e):(q.d(1),q=V(t),q&&(q.c(),q.m(_,null))),t[8]||Y.p(t,e)},i(t){if(!E){for(let t=0;t<R.length;t+=1)B(N[t]);B(O),B(k),E=!0}},o(t){for(let t=0;t<N.length;t+=1)D(N[t]);D(O),D(k),E=!1},d(t){j&&j.d(t),t&&d(n),t&&d(o);for(let t=0;t<N.length;t+=1)N[t].d();O&&O.d(),M&&M.d(),G.d(),t&&d(y),t&&d(b),H[x].d(),t&&d(w),t&&d(_),q.d(),t&&d(C),Y&&Y.d(t),t&&d(S)}}}function ae(t,e,n){let r,o,c,i,l,a,u;const d=!window.location.host.includes("localhost"),f=Z("websocket_url"),{user:p,participants:m,isRevealed:h,choices:g,votes:$,revealVotes:v,clearVotes:y,vote:b,changeDeck:x,error:k,update:w}=Dt(f);let _;s(t,p,(t=>n(6,a=t))),s(t,m,(t=>n(0,o=t))),s(t,h,(t=>n(4,i=t))),s(t,g,(t=>n(7,u=t))),s(t,$,(t=>n(5,l=t))),s(t,k,(t=>n(3,c=t)));return t.$$.update=()=>{1&t.$$.dirty[0]&&n(1,_=o.length),1&t.$$.dirty[0]&&n(2,r=o.every((t=>t.is_spectator||t.vote)))},[o,_,r,c,i,l,a,u,d,m,h,g,$,v,y,x,k,w,p,b,()=>w("add_fakes"),()=>w("fake_votes")]}class ue extends Y{constructor(t){super(),q(this,t,ae,le,c,{},null,[-1,-1])}}function de(t){let e,n;return e=new rt({}),{c(){H(e.$$.fragment)},m(t,r){J(e,t,r),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function fe(t){let e,n;return e=new ue({}),{c(){H(e.$$.fragment)},m(t,r){J(e,t,r),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function pe(e){let n,r,o,c,i,s;const l=[fe,de],a=[];return o=function(t,e){return t[0]?0:1}(e),c=a[o]=l[o](e),{c(){n=f("h1"),n.textContent="Planning poker",r=m(),c.c(),i=h()},m(t,e){u(t,n,e),u(t,r,e),a[o].m(t,e),u(t,i,e),s=!0},p:t,i(t){s||(B(c),s=!0)},o(t){D(c),s=!1},d(t){t&&d(n),t&&d(r),a[o].d(t),t&&d(i)}}}function me(t){return[Z("websocket_url")]}return new class extends Y{constructor(t){super(),q(this,t,me,pe,c,{})}}({target:document.querySelector("#poker")})}();
