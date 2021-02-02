(this["webpackJsonpclient-side-form-updated"]=this["webpackJsonpclient-side-form-updated"]||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=(a(24),a(25),a(19)),c=a.n(r),u=a(11),i=a(1);a(29);var o=function(){var e={color:"white"};return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper  blue accent-1"},l.a.createElement("a",{href:"/",className:"brand-logo"},"Logo"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(u.b,{to:"/form",style:e},"Add person")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/list",style:e},"List of persons")))))};var s=function(){return l.a.createElement("div",null,l.a.createElement("h3",{id:"title"},"This is a test application to check interactions with server"),l.a.createElement("div",null,"Press ",l.a.createElement("u",null,"Add person")," to add a person into DB."),l.a.createElement("div",null,"Press ",l.a.createElement("u",null,"List of persons")," to get all persons from DB."))},m=a(7),p=a.n(m),d=a(5),h=a(9),E=a(21),f=function e(t,a,n,l,r,c,u,i){var o=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;Object(E.a)(this,e),this.id=o,this.firstName=t,this.lastName=a,this.email=n,this.age=l,this.currentUserRole=r,this.recommend=c,this.language=u,this.comments=i};a(18);var v=function(e){return l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"language",className:"filled-in",checked:e.checked,onClick:e.onClick,value:e.value}),l.a.createElement("span",null,e.value)))};var b=function(e){return l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{value:e.title,name:"group1",type:"radio",onChange:e.onChange,checked:e.checked}),l.a.createElement("span",null,e.title)))};var g=function(e){return l.a.createElement("div",null,l.a.createElement("label",{id:e.id+"-label",htmlFor:e.id},e.id),l.a.createElement("input",{id:e.id,type:e.type,placeholder:"Enter your "+e.id,required:!0,value:e.value,onChange:e.onChange,min:e.min,max:e.max}))},y=[{title:"Java",active:!0},{title:"Java script",active:!1},{title:"C++",active:!1}],k=["Full time job","Student"],j=[{title:"Yes"},{title:"No"},{title:"Maybe"}];function O(){return(O=Object(h.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://server-side-form.herokuapp.com/training","/employee"),e.prev=1,e.next=4,fetch(a,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 4:(n=e.sent).ok?alert("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e \u0432 \u0411\u0414"):alert("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+n.status),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var x=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(d.a)(c,2),i=u[0],o=u[1],s=Object(n.useState)(""),m=Object(d.a)(s,2),p=m[0],h=m[1],E=Object(n.useState)(""),x=Object(d.a)(E,2),C=x[0],N=x[1],w=Object(n.useState)(k[0]),S=Object(d.a)(w,2),T=S[0],L=S[1],D=Object(n.useState)(j[0].title),F=Object(d.a)(D,2),P=F[0],A=F[1],J=Object(n.useState)(),B=Object(d.a)(J,2),H=B[0],R=B[1],W=Object(n.useState)(y),U=Object(d.a)(W,2),q=U[0],G=U[1];function I(e){G(q.map((function(t){return t.title===e.target.value?{title:t.title,active:!t.active}:t})))}return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){O.apply(this,arguments)}(new f(a,i,p,C,T,P,q.reduce((function(e,t){return t.active?e+=t.title+"; ":e}),""),H))},id:"survey-form"},l.a.createElement(g,{value:a,onChange:function(e){return r(e.target.value)},id:"First Name",type:"text"}),l.a.createElement(g,{value:i,onChange:function(e){return o(e.target.value)},id:"Last Name",type:"text"}),l.a.createElement(g,{value:p,onChange:function(e){return h(e.target.value)},id:"E-mail",type:"email"}),l.a.createElement(g,{value:C,onChange:function(e){return N(e.target.value)},id:"Age(optional)",min:"10",max:"99",type:"number"}),l.a.createElement("label",{id:"select-label",htmlFor:"dropdown"},"Which option best describes your current role?"),l.a.createElement("select",{className:"browser-default",value:T,onChange:function(e){return L(e.target.value)}},k.map((function(e,t){return l.a.createElement("option",{key:t,value:e},e)}))),l.a.createElement("label",null,"Would you recommend our site to your friend?"),j.map((function(e,t){return l.a.createElement(b,{key:t,checked:e.title===P,title:e.title,onChange:function(e){A(e.target.value)}})})),l.a.createElement("label",null,"What language do you like to learn?"),q.map((function(e,t){return l.a.createElement(v,{key:t,checked:e.active,value:e.title,onClick:I})})),l.a.createElement("label",{htmlFor:"comments"},"Any comments or suggestions?"),l.a.createElement("textarea",{id:"comments",name:"comments",className:"form-control",value:H,onChange:function(e){return R(e.target.value)}}),l.a.createElement("div",{style:{marginTop:"20px"}},l.a.createElement("button",{id:"submit",type:"submit",className:"btn"},"Submit"))))},C=function(e){var t=e.employeeList,a=e.handleDelete;return l.a.createElement("div",null,l.a.createElement("h2",null,"List of all persons"),l.a.createElement("div",null,l.a.createElement("table",{border:"2",cellSpacing:"5",className:"highlight pd1"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last name"),l.a.createElement("th",null,"E-mail"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Current role"),l.a.createElement("th",null,"Recommend"),l.a.createElement("th",null,"Language"),l.a.createElement("th",null,"Comments"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.firstName),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.currentUserRole),l.a.createElement("td",null,e.recommend),l.a.createElement("td",null,e.language),l.a.createElement("td",null,e.comments),l.a.createElement("td",null,l.a.createElement("button",{className:"btn",value:e.id,onClick:a},"delete")))}))))))},N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),u=Object(d.a)(c,2),i=u[0],o=u[1];function s(){return(s=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.target.value);case 2:o(!i);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://server-side-form.herokuapp.com/training","/employee/").concat(t),e.prev=1,e.next=4,fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"}});case 4:if(!(n=e.sent).ok){e.next=9;break}alert("\u0423\u0434\u0430\u043b\u0435\u043d\u043e \u0438\u0437 \u0411\u0414"),e.next=15;break;case 9:e.t0=n.status,e.next=404===e.t0?12:14;break;case 12:return alert("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0411\u0414: ".concat(t)),e.abrupt("break",15);case 14:alert("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+n.status);case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(1),alert("\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}function f(){return(f=Object(h.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://server-side-form.herokuapp.com/training","/employeeList"),e.prev=1,e.next=4,fetch(t,{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"}});case 4:if(!(a=e.sent).ok){e.next=12;break}return e.next=8,a.json();case 8:n=e.sent,r(n),e.next=13;break;case 12:alert("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+a.status);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),alert("\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443");case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[i]),l.a.createElement(C,{employeeList:a,handleDelete:function(e){return s.apply(this,arguments)}})};var w=function(){return l.a.createElement(u.a,null,l.a.createElement(o,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:s}),l.a.createElement(i.a,{path:"/form",component:x}),l.a.createElement(i.a,{path:"/list",component:N})))};c.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.26311af8.chunk.js.map