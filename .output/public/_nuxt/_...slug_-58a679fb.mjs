import{_ as x,o as c,c as l,b as n,F as w,D as b,n as L,E as p,G as I,H as S,a as g,y as h,d as u,I as v,s as k,z as N,j as C,J as R,m as P,x as j,K as y,k as B,L as O}from"./entry-c94afddb.mjs";const D={__name:"Toc",props:["links"],setup(s,{expose:_}){_();const e=r=>{let o=r.map(a=>{let i=[a];if(a.children){let d=e(a.children);i=[a,...d]}return i}).flat(1);return console.log({_links:o}),o},t={flattenLinks:e};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},T=s=>(I("data-v-6f21b509"),s=s(),S(),s),V={class:"toc"},z=T(()=>n("header",{class:"toc-header"},[n("h3",{class:"text-xl font-bold"},"Table of contents")],-1)),E={class:"toc-links"},F=["href"];function H(s,_,e,t,r,o){return c(),l("nav",V,[z,n("ul",E,[(c(!0),l(w,null,b(t.flattenLinks(e.links),a=>(c(),l("li",{key:a.id,class:L(`toc-link _${a.depth}`)},[n("a",{href:`#${a.id}`},p(a.text),9,F)],2))),128))])])}var q=x(D,[["render",H],["__scopeId","data-v-6f21b509"]]);const G={__name:"PrevNext",props:["prev","next"],setup(s,{expose:_}){_();const e={ArrowLeftIcon:k.ArrowLeftIcon,ArrowRightIcon:k.ArrowRightIcon};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},J={class:"prev-next-cont"},K={class:"link-item prev"},M={class:"link-item next"};function Q(s,_,e,t,r,o){const a=N;return c(),l("ul",J,[n("li",K,[e.prev?(c(),g(a,{key:0,to:e.prev._path},{default:h(()=>[u(t.ArrowLeftIcon,{class:"icon stroke"}),n("span",null,p(e.prev.title),1)]),_:1},8,["to"])):v("",!0)]),n("li",M,[e.next?(c(),g(a,{key:0,to:e.next._path},{default:h(()=>[n("span",null,p(e.next.title),1),u(t.ArrowRightIcon,{class:"icon stroke"})]),_:1},8,["to"])):v("",!0)])])}var U=x(G,[["render",Q],["__scopeId","data-v-4d02dcb6"]]);const W={__name:"[...slug]",async setup(s,{expose:_}){_();let e,t;const{path:r}=C(),{data:o}=([e,t]=R(async()=>j(`content-${r}`,async()=>{let m=y().where({_path:r}).findOne(),f=y().only(["_path","title","description"]).sort({date:1}).findSurround(r);return{article:await m,surround:await f}})),e=await e,t(),e),[a,i]=o.value.surround;console.log({data:o,prev:a,next:i}),P({title:o.value.article.title,meta:[{name:"description",content:o.value.article.description},{hid:"og:image",property:"og:image",content:`https://site.com/${o.value.article.img}`}]});const d={path:r,data:o,prev:a,next:i};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},$=s=>(I("data-v-8c9ad0a0"),s=s(),S(),s),X={id:"main",class:"article-main"},Y={key:0,class:"article-header"},Z={class:"img-cont h-72 mb-12"},tt=["src","alt"],et={class:"heading"},nt={class:"supporting"},at={class:"article-tags"},st=$(()=>n("hr",null,null,-1)),ot={class:"article-section"},ct={class:"aside"},rt={class:"article"},_t=$(()=>n("p",null,"No content found.",-1));function lt(s,_,e,t,r,o){const a=q,i=O,d=B,m=U;return c(),l("main",X,[t.data.article?(c(),l("header",Y,[n("div",Z,[n("img",{src:`/${t.data.article.img}`,alt:t.data.article.title,class:"rounded-2xl"},null,8,tt)]),n("h1",et,p(t.data.article.title),1),n("p",nt,p(t.data.article.description),1),n("ul",at,[(c(!0),l(w,null,b(t.data.article.tags,(f,A)=>(c(),l("li",{class:"tag",key:A},p(f),1))),128))])])):v("",!0),st,n("section",ot,[n("aside",ct,[u(a,{links:t.data.article.body.toc.links},null,8,["links"])]),n("article",rt,[u(d,{value:t.data.article},{empty:h(()=>[_t]),default:h(()=>[u(i,{value:t.data.article},null,8,["value"])]),_:1},8,["value"])])]),u(m,{prev:t.prev,next:t.next},null,8,["prev","next"])])}var dt=x(W,[["render",lt],["__scopeId","data-v-8c9ad0a0"]]);export{dt as default};