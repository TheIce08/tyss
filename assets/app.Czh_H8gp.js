import{t as p}from"./chunks/theme.DyWh5B80.js";import{O as o,P as u,R as l,Q as c,S as f,U as d,V as m,W as h,X as g,Y as A,Z as P,d as v,i as y,j as C,x as w,$ as R,a0 as S,a1 as b,D as E}from"./chunks/framework.CwJY4Zxs.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(p),D=v({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=y();return C(()=>{w(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&R(),S(),b(),s.setup&&s.setup(),()=>E(s.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=x(),t=j();t.provide(l,e);const a=c(e.route);return t.provide(f,a),t.component("Content",d),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function j(){return g(D)}function x(){let e=o,t;return A(a=>{let n=P(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{T as createApp};