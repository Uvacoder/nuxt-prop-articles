var b=Object.defineProperty;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var f=(i,e,o)=>e in i?b(i,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[e]=o,p=(i,e)=>{for(var o in e||(e={}))v.call(e,o)&&f(i,o,e[o]);if(m)for(var o of m(e))q.call(e,o)&&f(i,o,e[o]);return i};import{e as C,bs as l,u as D,h as r,bt as w,bu as x,aq as O,bv as S}from"./entry-acae6e6d.mjs";var H=C({props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>l().path},query:{type:Object,required:!1,default:void 0}},render(i){const e=D(),{tag:o,excerpt:s,path:d,query:h}=i,y=Object.assign(h||{},{path:d,find:"one"}),g=(n,t)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:t},null,2)),c=n=>{if(d!==l().path)return;const t=Object.assign({},n.head);t.title=t.title||n.title,t.meta=t.meta||[];const a=t.description||n.description;a&&t.meta.filter(u=>u.name==="description").length===0&&t.meta.push({name:"description",content:a}),t.image&&t.meta.filter(u=>u.property==="og:image").length===0&&t.meta.push({property:"og:image",content:t.image}),O(()=>S(t))};return r(x,y,{default:e!=null&&e.default?({data:n,refresh:t,isPartial:a})=>(c(n),e.default(p({doc:n,refresh:t,isPartial:a,excerpt:s},this.$attrs))):({data:n})=>(c(n),r(w,p({value:n,excerpt:s,tag:o},this.$attrs),{empty:t=>e!=null&&e.empty?e.empty(t):g("default",n)})),empty:n=>{var t;return((t=e==null?void 0:e.empty)==null?void 0:t.call(e,n))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var t;return((t=e==null?void 0:e["not-found"])==null?void 0:t.call(e,n))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{H as default};