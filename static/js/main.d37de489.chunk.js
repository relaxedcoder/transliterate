(this.webpackJsonptransliterate=this.webpackJsonptransliterate||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),o=n(5),i=n.n(o),s=(n(13),n(2)),u=(n(14),n(6)),l=(n(15),n(4)),d=n.n(l),j=function(e){var t=e.date,n=e.time,c=e.handleRestoreParent;return Object(a.jsxs)("div",{id:d.a.container,children:[t+" "+n,Object(a.jsx)("button",{id:d.a.restore,onClick:function(){c()},children:"Restore"})]})},b=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),i=Object(s.a)(o,2),l=i[0],d=i[1],b=Object(c.useState)(0),f=Object(s.a)(b,2),h=f[0],m=f[1],O=Object(c.useState)("New document"),g=Object(s.a)(O,2),v=g[0],x=g[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("transliterate-saves"));e&&d(e)}),[]),Object(c.useEffect)((function(){var e=document.getElementsByTagName("textarea")[0];e.placeholder="Type something...",e.focus()}),[]),Object(c.useEffect)((function(){localStorage.setItem("transliterate-saves",JSON.stringify(l))}),[h,l]);return Object(a.jsxs)("div",{id:"container",children:[Object(a.jsx)("h2",{children:"English to Hindi Transliterate"}),Object(a.jsx)("button",{id:"save",onClick:function(){var e=new Date,t=[e.getDate(),e.toLocaleString("default",{month:"short"}),e.getFullYear()].join(" "),a=e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}),c=l;c.push({date:t,time:a,text:n}),d(c),m(h+1)},children:"Save"}),Object(a.jsx)("h3",{children:"Past Saves"}),l.map((function(e,t){return Object(a.jsx)(j,{date:e.date,time:e.time,handleRestoreParent:function(){window.confirm("Restoring will delete current text if not saved. Are you sure?")&&(r(e.text),x(e.date+"_"+e.time))}},t)})),Object(a.jsx)(u.a,{value:n,onChange:function(e){return r(e.target.value)},lang:"hi",Component:"textarea"}),Object(a.jsx)("button",{id:"download",onClick:function(){var e=document.createElement("a"),t=new Blob([n],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="Save_"+v,document.body.appendChild(e),e.click()},children:"Download .txt file"}),Object(a.jsx)("br",{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),f()},4:function(e,t,n){e.exports={container:"SaveItem_container__1j4TZ",restore:"SaveItem_restore__2431h"}}},[[16,1,2]]]);
//# sourceMappingURL=main.d37de489.chunk.js.map