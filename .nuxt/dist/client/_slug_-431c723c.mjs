import{_ as b}from"./Tags-4e2749a4.mjs";import{_ as $,j as w,m as v,o,c as n,b as t,E as l,d as _,y as c,N,F as p,D as m,O as k,z as L}from"./entry-a56fc2c4.mjs";const B={__name:"[slug]",setup(h,{expose:r}){r();const{params:{slug:a}}=w(),e=a.split(",");console.log({filter:e}),v({title:`All articles with ${a}`,meta:[{name:"description",content:"Featured articles"}]});const i={slug:a,filter:e};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},F={class:"page-heading"},S={class:"wrapper"},V={class:"text-5xl font-extrabold"},j=t("p",{class:"font-medium text-lg"},"List of articles",-1),q={class:"page-section"},A={class:"article-list"},C={class:"wrapper"},D={class:"img-cont w-32"},E=["src","alt"],O={class:"text-2xl font-semibold"},T={class:"article-tags"},z=t("p",null,"No articles found.",-1);function H(h,r,a,e,i,P){const g=b,d=L,f=N;return o(),n("main",null,[t("header",F,[t("div",S,[t("h1",V,'All articles with "'+l(e.slug)+'"',1),j])]),t("section",q,[_(g),_(f,{path:"/blog",query:{only:["title","description","tags","_path","img"],where:{tags:{$contains:e.filter}},$sensitivity:"base"}},{default:c(({list:x})=>[t("ul",A,[(o(!0),n(p,null,m(x,s=>(o(),n("li",{key:s._path,class:"article-item"},[_(d,{to:s._path},{default:c(()=>[t("div",C,[t("div",D,[t("img",{src:`/${s.img}`,alt:s.title,class:"rounded-lg max-h-[8rem]"},null,8,E)]),t("header",null,[t("h1",O,l(s.title),1),t("p",null,l(s.description),1),t("ul",T,[(o(!0),n(p,null,m(s.tags,(u,y)=>(o(),n("li",{class:"tag",key:y},[_(d,{to:`/blog/tags/${u}`,class:"underline"},{default:c(()=>[k(l(u),1)]),_:2},1032,["to"])]))),128))])])])]),_:2},1032,["to"])]))),128))])]),"not-found":c(()=>[z]),_:1},8,["query"])])])}var I=$(B,[["render",H]]);export{I as default};
