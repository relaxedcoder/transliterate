(this.webpackJsonptransliterate=this.webpackJsonptransliterate||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),i=n.n(c),r=n(5),o=n.n(r),s=(n(13),n(2)),l=(n(14),n(6)),d=(n(15),n(3)),u=n.n(d),j=n.p+"static/media/delete.5fa30d53.png",b=function(e){var t=e.date,n=e.time,c=e.handleRestore,i=e.handleDelete;return Object(a.jsxs)("div",{id:u.a.container,children:[t+" "+n,Object(a.jsx)("button",{id:u.a.restore,onClick:c,children:"Restore"}),Object(a.jsx)("a",{onClick:i,children:Object(a.jsx)("img",{src:j,id:u.a.delete})})]})},f=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),o=Object(s.a)(r,2),d=o[0],u=o[1],j=Object(c.useState)(0),f=Object(s.a)(j,2),h=f[0],m=f[1],O=Object(c.useState)("New document"),g=Object(s.a)(O,2),v=g[0],x=g[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("transliterate-saves"));e&&u(e)}),[]),Object(c.useEffect)((function(){var e=document.getElementsByTagName("textarea")[0];e.placeholder="Type something...",e.focus()}),[]),Object(c.useEffect)((function(){localStorage.setItem("transliterate-saves",JSON.stringify(d))}),[h,d]);return Object(a.jsxs)("div",{id:"container",children:[Object(a.jsx)("h2",{children:"English to Hindi Transliterate"}),Object(a.jsx)("button",{id:"save",onClick:function(){var e=new Date,t=[e.getDate(),e.toLocaleString("default",{month:"short"}),e.getFullYear()].join(" "),a=e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});d.push({date:t,time:a,text:n}),m(h+1)},children:"Save"}),Object(a.jsx)("h3",{children:"Past Saves"}),d.map((function(e,t){return Object(a.jsx)(b,{date:e.date,time:e.time,handleRestore:function(){window.confirm("Restoring will delete current text if not saved. Are you sure?")&&(i(e.text),x(e.date+"_"+e.time))},handleDelete:function(){window.confirm("Deletion is irreversible. Are you sure?")&&(d.splice(t,1),m(h+1))}},t)})),Object(a.jsx)(l.a,{value:n,onChange:function(e){return i(e.target.value)},lang:"hi",Component:"textarea"}),Object(a.jsx)("button",{id:"download",onClick:function(){var e=document.createElement("a"),t=new Blob([n],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="Save_"+v,document.body.appendChild(e),e.click()},children:"Download .txt file"}),Object(a.jsx)("br",{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),h()},3:function(e,t,n){e.exports={container:"SaveItem_container__1j4TZ",restore:"SaveItem_restore__2431h",delete:"SaveItem_delete__1gmJo"}}},[[16,1,2]]]);
//# sourceMappingURL=main.b7da368c.chunk.js.map