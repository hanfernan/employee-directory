(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{45:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(13),s=r.n(c),a=r(14),l=r(4),i=r.n(l),h=r(15),o=r(16),j=r(17),u=r(20),d=r(19),m=r(0);var b=function(e){return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(m.jsx)("input",{onChange:e.handleSearch,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for an employee by name",id:"search"}),Object(m.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3",children:"Search"})]})})};var O=function(e){return Object(m.jsxs)("table",{className:"m-5",children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("th",{children:"Email Address"}),Object(m.jsx)("th",{children:"Cell Phone Number"}),Object(m.jsx)("th",{children:"State"})]}),e.results.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.name.first}),Object(m.jsx)("td",{children:e.name.last}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.cell}),Object(m.jsx)("td",{children:e.location.state})]})}))]})},p=r(18),x=r.n(p),f=function(){return x.a.get("https://randomuser.me/api/?results=100&nat=us")},v=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"",order:"descend",results:[]},e.getEmployees=Object(h.a)(i.a.mark((function t(){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:r=t.sent,console.log(r),e.setState({results:r.data.results});case 5:case"end":return t.stop()}}),t)}))),e.searchEmployee=function(t){var r=t.target.name.first,n=t.target.value;e.setState(Object(a.a)({},r,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployee(e.state.search)},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(b,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleSearch:this.handleSearch}),Object(m.jsx)(O,{results:this.state.results})]})}}]),r}(n.Component);var y=function(){return Object(m.jsx)(v,{})};r(45),r(46);s.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.dba85e70.chunk.js.map