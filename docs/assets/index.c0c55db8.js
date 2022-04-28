import{_ as s,r as c,o,c as r,a as n,t as i,F as p,d}from"./index.9d76e90d.js";import"../../../at.alicdn.com/t/font_3366524_oz3yr0ggm4.js";const l=d(" ABOUT "),_={props:{msg:String},setup(a){c(0);const e=document.createElement("script");e.src="https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?appid=379020&bk_key=\u77F3\u69B4&callback=getResultList",document.body.appendChild(e);const t=document.createElement("script");return t.innerHTML=`
    function getResultList(res) {
        console.log("res", res)
    }
`,document.body.appendChild(t),(m,u)=>(o(),r(p,null,[l,n("h1",null,i(a.msg),1)],64))}};var b=s(_,[["__scopeId","data-v-7621ffcb"]]);export{b as default};
