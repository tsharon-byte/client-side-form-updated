(this["webpackJsonpclient-side-form-updated"]=this["webpackJsonpclient-side-form-updated"]||[]).push([[0],{16:function(e,t,a){},22:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),u=a(7),o=a.n(u),i=a(5),s=a(11),m=a(20),p=function e(t,a,n,l,r,c,u,o){var i=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;Object(m.a)(this,e),this.id=i,this.firstName=t,this.lastName=a,this.email=n,this.age=l,this.currentUserRole=r,this.recommend=c,this.language=u,this.comments=o};a(16);var d=function(e){return l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"language",className:"filled-in",checked:e.checked,onClick:e.onClick,value:e.value}),l.a.createElement("span",null,e.value)))};var h=function(e){return l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{value:e.title,name:"group1",type:"radio",onChange:e.onChange,checked:e.checked}),l.a.createElement("span",null,e.title)))};var E=function(e){return l.a.createElement("div",null,l.a.createElement("label",{id:e.id+"-label",htmlFor:e.id},e.id),l.a.createElement("input",{id:e.id,type:e.type,placeholder:"Enter your "+e.id,required:!0,value:e.value,onChange:e.onChange,min:e.min,max:e.max}))},f=[{title:"Java",active:!0},{title:"Java script",active:!1},{title:"C++",active:!1}],v=["Full time job","Student"],b=[{title:"Yes"},{title:"No"},{title:"Maybe"}];function g(){return(g=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://server-side-form.herokuapp.com/employee",e.prev=1,e.next=4,fetch("https://server-side-form.herokuapp.com/employee",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 4:(a=e.sent).ok?alert("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e \u0432 \u0411\u0414"):alert("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+a.status),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),o=u[0],s=u[1],m=Object(n.useState)(""),y=Object(i.a)(m,2),k=y[0],j=y[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),C=x[0],N=x[1],S=Object(n.useState)(v[0]),w=Object(i.a)(S,2),T=w[0],L=w[1],F=Object(n.useState)(b[0].title),J=Object(i.a)(F,2),P=J[0],A=J[1],D=Object(n.useState)(),B=Object(i.a)(D,2),H=B[0],R=B[1],W=Object(n.useState)(f),U=Object(i.a)(W,2),q=U[0],G=U[1];function I(e){G(q.map((function(t){return t.title===e.target.value?{title:t.title,active:!t.active}:t})))}return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){g.apply(this,arguments)}(new p(a,o,k,C,T,P,q.reduce((function(e,t){return t.active?e+=t.title+"; ":e}),""),H))},id:"survey-form"},l.a.createElement(E,{value:a,onChange:function(e){return r(e.target.value)},id:"First Name",type:"text"}),l.a.createElement(E,{value:o,onChange:function(e){return s(e.target.value)},id:"Last Name",type:"text"}),l.a.createElement(E,{value:k,onChange:function(e){return j(e.target.value)},id:"E-mail",type:"email"}),l.a.createElement(E,{value:C,onChange:function(e){return N(e.target.value)},id:"Age(optional)",min:"10",max:"99",type:"number"}),l.a.createElement("label",{id:"select-label",htmlFor:"dropdown"},"Which option best describes your current role?"),l.a.createElement("select",{className:"browser-default",value:T,onChange:function(e){return L(e.target.value)}},v.map((function(e,t){return l.a.createElement("option",{key:t,value:e},e)}))),l.a.createElement("label",null,"Would you recommend our site to your friend?"),b.map((function(e,t){return l.a.createElement(h,{key:t,checked:e.title===P,title:e.title,onChange:function(e){A(e.target.value)}})})),l.a.createElement("label",null,"What language do you like to learn?"),q.map((function(e,t){return l.a.createElement(d,{key:t,checked:e.active,value:e.title,onClick:I})})),l.a.createElement("label",{htmlFor:"comments"},"Any comments or suggestions?"),l.a.createElement("textarea",{id:"comments",name:"comments",className:"form-control",value:H,onChange:function(e){return R(e.target.value)}}),l.a.createElement("div",{style:{marginTop:"20px"}},l.a.createElement("button",{id:"submit",type:"submit",className:"btn"},"Submit"))))};function k(){return(k=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:8080/employee",e.prev=1,e.next=4,fetch("http://localhost:8080/employee",{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=9;break}alert("\u0423\u0434\u0430\u043b\u0435\u043d\u043e \u0438\u0437 \u0411\u0414"),e.next=15;break;case 9:e.t0=a.status,e.next=404===e.t0?12:14;break;case 12:return alert("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0411\u0414: ".concat(t.firstName," ").concat(t.lastName)),e.abrupt("break",15);case 14:alert("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+a.status);case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(1),alert("\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}var j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),u=Object(i.a)(c,2),m=u[0],p=u[1];function d(){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://server-side-form.herokuapp.com/employeeList",e.prev=1,e.next=4,fetch("https://server-side-form.herokuapp.com/employeeList",{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"}});case 4:if(!(t=e.sent).ok){e.next=12;break}return e.next=8,t.json();case 8:a=e.sent,r(a),e.next=13;break;case 12:alert("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+t.status);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),alert("\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443");case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}function E(e){p(!m),function(e){k.apply(this,arguments)}(a[e.target.value]),d()}return Object(n.useEffect)((function(){d()}),[m]),l.a.createElement("div",null,l.a.createElement("h2",null,"List of all persons"),l.a.createElement("div",null,l.a.createElement("table",{border:"2",cellSpacing:"5",className:"highlight pd1"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last name"),l.a.createElement("th",null,"E-mail"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Current role"),l.a.createElement("th",null,"Recommend"),l.a.createElement("th",null,"Language"),l.a.createElement("th",null,"Comments"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.firstName),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.currentUserRole),l.a.createElement("td",null,e.recommend),l.a.createElement("td",null,e.language),l.a.createElement("td",null,e.comments),l.a.createElement("td",null,l.a.createElement("button",{className:"btn",value:t,onClick:E},"delete")))}))))))};var O=function(){return l.a.createElement("div",null,l.a.createElement("h3",{id:"title"},"This is a test application to check interactions with server"),l.a.createElement("div",null,"Press ",l.a.createElement("u",null,"Add person")," to add a person into DB."),l.a.createElement("div",null,"Press ",l.a.createElement("u",null,"List of persons")," to get all persons from DB."))},x=(a(28),a(8));var C=function(){var e={color:"white"};return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper  blue accent-1"},l.a.createElement("a",{href:"/",className:"brand-logo"},"Logo"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(x.b,{to:"/form",style:e},"Add person")),l.a.createElement("li",null,l.a.createElement(x.b,{to:"/list",style:e},"List of persons")))))},N=a(1);var S=function(){return l.a.createElement(x.a,null,l.a.createElement(C,null),l.a.createElement(N.c,null,l.a.createElement(N.a,{exact:!0,path:"/",component:O}),l.a.createElement(N.a,{path:"/form",component:y}),l.a.createElement(N.a,{path:"/list",component:j})))};a(33),a(34);c.a.render(l.a.createElement(x.a,null,l.a.createElement(S,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.72a24cb5.chunk.js.map