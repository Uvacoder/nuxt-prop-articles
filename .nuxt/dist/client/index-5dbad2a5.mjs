import{_ as y}from"./Tags-e661f680.mjs";import{_ as v,bs as $,B as k,bv as w,o as n,c as o,b as t,d as i,b3 as c,bG as B,V as d,aI as p,Q as r,bB as L}from"./entry-3cc30ced.mjs";import"./index-59ea95d1.mjs";const N={__name:"index",setup(u,{expose:_}){_();const{query:{tags:s}}=$(),a=k(s==null?void 0:s.split(","));w({title:"All articles",meta:[{name:"description",content:"All articles"}]});const l={tags:s,filter:a};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},q=t("header",{class:"page-heading"},[t("div",{class:"wrapper"},[t("h1",{class:"text-5xl font-extrabold"},"All articles"),t("p",{class:"font-medium text-lg"},"List of all articles")])],-1),A={class:"page-section"},S={class:"article-list"},V={class:"wrapper"},C={class:"img-cont w-32 shrink-0"},j=["src","alt"],D={class:"text-2xl font-semibold"},E={class:"article-tags"},F=t("p",null,"No articles found.",-1);function G(u,_,s,a,l,H){const m=y,h=L,f=B;return n(),o("main",null,[q,t("section",A,[i(m),i(f,{path:"/blog",query:{only:["title","description","tags","_path","img"],where:{tags:{$contains:a.filter}},$sensitivity:"base"}},{default:c(({list:g})=>[t("ul",S,[(n(!0),o(d,null,p(g,e=>(n(),o("li",{key:e._path,class:"article-item"},[i(h,{to:e._path},{default:c(()=>[t("div",V,[t("div",C,[t("img",{src:`/${e.img}`,alt:e.title,class:"rounded-lg max-h-[8rem]"},null,8,j)]),t("header",null,[t("h1",D,r(e.title),1),t("p",null,r(e.description),1),t("ul",E,[(n(!0),o(d,null,p(e.tags,(x,b)=>(n(),o("li",{class:"tag !py-0.5",key:b},r(x),1))),128))])])])]),_:2},1032,["to"])]))),128))])]),"not-found":c(()=>[F]),_:1},8,["query"])])])}var Q=v(N,[["render",G]]);export{Q as default};