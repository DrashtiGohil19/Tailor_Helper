"use strict";(self.webpackChunktailor_desk=self.webpackChunktailor_desk||[]).push([[913],{1201:function(e,n,r){r.d(n,{Z:function(){return f}});var a=r(4942),t=r(1413),s=r(9439),l=r(9134),i=r(390),c=r(4926),o=r(8991),d=(r(3508),r(9914)),u=r(3948),m=r(5753),h=r(17),x=r(8067),j=r(2559);function f(e){var n=e.showModel,r=e.closeModal,f=e.isAddingWorker,Z=(0,i.useState)({name:"",mobilenu:""}),v=(0,s.Z)(Z,2),b=v[0],g=v[1],k=(0,i.useState)({name:"",mobilenu:""}),p=(0,s.Z)(k,2),N=p[0],w=p[1],C=localStorage.getItem("userId"),y=function(e){g((0,t.Z)((0,t.Z)({},b),{},(0,a.Z)({},e.target.name,e.target.value))),w((0,t.Z)((0,t.Z)({},N),{},(0,a.Z)({},e.target.name,"")))};return(0,j.jsx)("div",{children:(0,j.jsxs)(o.Z,{show:n,centered:!0,children:[(0,j.jsx)(o.Z.Header,{children:(0,j.jsx)(o.Z.Title,{children:!0===f?"Add Worker":"Add Customer"})}),(0,j.jsx)(o.Z.Body,{children:(0,j.jsxs)(c.Z,{children:[(0,j.jsxs)(d.Z,{className:"mb-3",children:[(0,j.jsx)(u.Z,{lg:2,children:(0,j.jsx)(c.Z.Label,{children:"Name :"})}),(0,j.jsxs)(u.Z,{children:[(0,j.jsx)(c.Z.Control,{type:"text",placeholder:"Enter name",autoFocus:!0,name:"name",className:"form-control ".concat(N.name?"is-invalid":""),value:b.name,onChange:y}),N.name&&(0,j.jsx)("div",{className:"text-danger",children:N.name})]})]}),(0,j.jsxs)(d.Z,{children:[(0,j.jsx)(u.Z,{lg:2,children:(0,j.jsx)(c.Z.Label,{children:"Mobile :"})}),(0,j.jsxs)(u.Z,{children:[(0,j.jsx)(c.Z.Control,{type:"number",placeholder:"Enter mobile number",name:"mobilenu",className:"form-control ".concat(N.mobilenu?"is-invalid":""),value:b.mobilenu,onChange:y}),N.mobilenu&&(0,j.jsx)("div",{className:"text-danger",children:N.mobilenu})]})]})]})}),(0,j.jsxs)(o.Z.Footer,{children:[(0,j.jsx)(m.Z,{variant:"secondary",onClick:r,children:"Close"}),(0,j.jsx)(m.Z,{variant:"primary",onClick:function(e){if(e.preventDefault(),function(){var e=!0,n={};return""===b.name.trim()&&(n.name="Name is required",e=!1),""===b.mobilenu.trim()?(n.mobilenu="Mobile number is required",e=!1):/^\d{10}$/.test(b.mobilenu)||(n.mobilenu="Mobile number should be a 10-digit number",e=!1),w(n),e}()){var n=f?"/worker/addworker":"/customer/add_customer",a=f?{workername:b.name,mobilenu:b.mobilenu,userId:C}:{name:b.name,mobilenu:b.mobilenu,userId:C};l.Z.post(n,a,{headers:{Authorization:x.r}}).then((function(e){if("success"===e.data.status){r();var n=f?"Worker added successfully!":"Customer added successfully!";h.Am.success(n,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}})).catch((function(e){r();var n=f?"Failed to add worker! Try with another mobile number.":"Failed to add customer! Try with another mobile number.";h.Am.error(n,{autoClose:5e3,style:{backgroundColor:"black",color:"white"}})}))}},children:"Save"})]})]})})}},5913:function(e,n,r){r.r(n),r.d(n,{default:function(){return C}});var a=r(4942),t=r(9439),s=r(390),l=r(9134),i=r(5545),c=r(5400),o=r(2395),d=r(4066),u=r(6303),m=r(1662),h=r(8464),x=r(749),j=r(4569),f=r(1211),Z=r(1201),v=r(4106),b=r(3948),g=r(5111),k=r(7721),p=r(8067),N=r(6472),w=r(2559);function C(){var e=(0,s.useState)([]),n=(0,t.Z)(e,2),r=n[0],C=n[1],y=(0,s.useState)(1),S=(0,t.Z)(y,2),_=S[0],I=S[1],A=(0,s.useState)(),L=(0,t.Z)(A,2),D=L[0],E=L[1],M=(0,s.useState)(""),W=(0,t.Z)(M,2),F=W[0],z=W[1],T=(0,s.useState)(!1),B=(0,t.Z)(T,2),R=B[0],H=B[1],O=(0,s.useState)(!1),G=(0,t.Z)(O,2),K=G[0],q=G[1],U=(0,s.useState)(null),V=(0,t.Z)(U,2),P=V[0],$=V[1],J=(0,s.useState)(!1),Q=(0,t.Z)(J,2),X=Q[0],Y=Q[1],ee=(0,s.useState)(!1),ne=(0,t.Z)(ee,2),re=ne[0],ae=ne[1],te=(0,i.s0)(),se=function(){H(!0)},le=function(e){q(!0),r.map((function(n){n._id===e&&$(e)})),de()},ie=function(e){Y(!0),r.map((function(n){n._id===e&&$(e)}))},ce=function(){ae(!0)};(0,s.useEffect)((function(){var e=localStorage.getItem("userId"),n=localStorage.getItem("isLoggedIn");null===e||null===n?(localStorage.clear(),te("../",{replace:!0}),te(0)):(""===F&&de(),oe(),document.title="Simplex Tailor - Customer List")}),[_,F,te]);var oe=function(){l.Z.get("/userdata?id="+p.xS).then((function(e){e.data.user.isLoggedIn||(localStorage.clear(),te("../",{replace:!0}),te(0))}))},de=function(){l.Z.get("/customer/view_customer?page_no=".concat(_,"&userId=").concat(p.xS),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){C(e.data.data),E(e.data.totalpage)}))};return(0,w.jsxs)("div",{children:[(0,w.jsx)(o.Z,{}),(0,w.jsx)(d.Z,{}),(0,w.jsxs)("div",{className:"content-wrapper",style:{minHeight:"100vh"},children:[(0,w.jsx)("section",{className:"content-header",children:(0,w.jsx)("div",{className:"container-fluid",children:(0,w.jsxs)("div",{className:"row mb-2",children:[(0,w.jsx)("div",{className:"col-sm-6",children:(0,w.jsx)("h1",{children:"Customer List"})}),(0,w.jsx)("div",{className:"col-sm-6",children:(0,w.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,w.jsx)("li",{className:"mr-3",children:(0,w.jsxs)("button",{className:"btn btn-primary",onClick:se,children:[(0,w.jsx)(h.jCV,{})," Add Customer"]})}),(0,w.jsx)("li",{className:"",children:(0,w.jsxs)("button",{className:"btn btn-primary",onClick:function(){return ce()},children:[(0,w.jsx)(x.t9y,{})," Rate"]})})]})})]})})}),(0,w.jsx)("section",{className:"content",children:(0,w.jsx)("div",{className:"container-fluid",children:(0,w.jsx)("div",{className:"row",children:(0,w.jsx)("div",{className:"col-12",children:(0,w.jsxs)("div",{className:"card",children:[(0,w.jsx)("div",{className:"card-header",children:(0,w.jsxs)("div",{className:"row",children:[(0,w.jsx)(b.Z,{xs:6,sm:4,children:(0,w.jsx)("input",{type:"number",className:"form-control",placeholder:"Search...",name:"search",value:F,onChange:function(e){return z(e.target.value)}})}),(0,w.jsx)(b.Z,{xs:6,sm:3,children:(0,w.jsxs)(k.Z,{title:"Search With",onSelect:function(e){if("mobileNumber"===e||"billNumber"===e){var n=(0,a.Z)((0,a.Z)({},e,F),"userId",p.xS);(0,l.Z)({method:"GET",url:"/customer/search_customer",params:n,headers:{Authorization:localStorage.getItem("token")}}).then((function(e){C(e.data.data)}))}},children:[(0,w.jsx)(g.Z.Item,{eventKey:"mobileNumber",children:"Mobile Number"}),(0,w.jsx)(g.Z.Item,{eventKey:"billNumber",children:"Bill Number"})]})})]})}),(0,w.jsxs)("div",{className:"card-body table-responsive",children:[(0,w.jsxs)("table",{className:"table table-bordered table-hover text-center responsive",children:[(0,w.jsx)("thead",{children:(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{children:"Bill Nu."}),(0,w.jsx)("th",{children:"Name"}),(0,w.jsx)("th",{children:"Mobile Number"}),(0,w.jsx)("th",{children:"Measurement"}),(0,w.jsx)("th",{children:"History"}),(0,w.jsx)("th",{colSpan:2,children:"Action"})]})}),(0,w.jsx)("tbody",{children:null===r||void 0===r?void 0:r.map((function(e,n){return(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{children:e.bill_nu}),(0,w.jsx)("td",{style:{textTransform:"capitalize"},children:e.customername}),(0,w.jsx)("td",{children:e.mobilenu}),(0,w.jsx)("td",{children:(0,w.jsx)(c.rU,{to:"/add_measurement/".concat(e._id),children:(0,w.jsx)(h.jCV,{style:{fontSize:"18px"}})})}),(0,w.jsx)("td",{children:(0,w.jsx)(c.rU,{to:"/customer_profile/".concat(e._id),children:(0,w.jsx)(x.ceS,{})})}),(0,w.jsx)("td",{onClick:function(){return ie(e._id)},children:(0,w.jsx)("i",{className:"fas fa-edit"})}),(0,w.jsx)("td",{onClick:function(){return le(e._id)},children:(0,w.jsx)("i",{className:"fas fa-trash",style:{color:"red"}})})]},n)}))})]}),(0,w.jsx)(u.Z,{sx:{justifyContent:"center",alignItems:"center",marginTop:"20px"},children:(0,w.jsx)(m.Z,{count:D,color:"primary",page:_,onChange:function(e,n){return I(n)}})})]})]})})})})})]}),R&&(0,w.jsx)(Z.Z,{showModel:se,closeModal:function(){H(!1),de()},isAddingWorker:!1}),K&&(0,w.jsx)(j.Z,{showDelete:le,closeDelete:function(){q(!1),de()},DelWorker:!1,selectedId:P}),X&&(0,w.jsx)(f.Z,{showEdit:ie,closeEdit:function(){Y(!1),de()},selectedId:P,WorketEdit:!1}),re&&(0,w.jsx)(v.Z,{rateModel:ce,closeModel:function(){ae(!1),de()},isCustomerRate:!0}),(0,w.jsx)(N.Z,{})]})}},4569:function(e,n,r){r.d(n,{Z:function(){return c}});var a=r(9134),t=r(8991),s=r(5753),l=r(17),i=r(2559);function c(e){var n=e.showDelete,r=e.closeDelete,c=e.DelWorker,o=e.selectedId,d=c?"Are you sure you want to delete this worker? Deleting a worker will also delete other releted data of worker.":"Are you sure you want to delete this customer? Deleting a customer will also delete other associated data.";return(0,i.jsx)("div",{children:(0,i.jsxs)(t.Z,{show:n,backdrop:"static",keyboard:!1,children:[(0,i.jsx)(t.Z.Header,{children:(0,i.jsx)(t.Z.Title,{children:"Confirm Deletion"})}),(0,i.jsx)(t.Z.Body,{children:d}),(0,i.jsxs)(t.Z.Footer,{children:[(0,i.jsx)(s.Z,{variant:"danger",onClick:function(){var e=c?"/worker/delete_worker/".concat(o):"/customer/delete_customer/".concat(o);a.Z.delete(e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){l.Am.success("Data deleted succesfully !",{autoClose:5e3,style:{backgroundColor:"black",color:"white"}}),r()})).catch((function(e){l.Am.error("Failed to delete data !",{autoClose:5e3,style:{backgroundColor:"black",color:"white"}}),r()}))},children:"Delete"}),(0,i.jsx)(s.Z,{variant:"secondary",onClick:r,children:"Cancel"})]})]})})}},1211:function(e,n,r){r.d(n,{Z:function(){return j}});var a=r(4942),t=r(1413),s=r(9439),l=r(390),i=r(9134),c=r(8991),o=r(4926),d=r(9914),u=r(3948),m=r(5753),h=r(17),x=r(2559);function j(e){var n=e.showEdit,r=e.closeEdit,j=e.selectedId,f=e.WorkerEdit,Z=(0,l.useState)({workername:"",customername:"",mobilenu:""}),v=(0,s.Z)(Z,2),b=v[0],g=v[1];(0,l.useEffect)((function(){!function(){var e=f?"/worker/single_worker/".concat(j):"/customer/single_customer/".concat(j);i.Z.get(e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){g(e.data.data)}))}()}),[j]);var k=function(e){g((0,t.Z)((0,t.Z)({},b),{},(0,a.Z)({},e.target.name,e.target.value)))};return(0,x.jsx)("div",{children:(0,x.jsxs)(c.Z,{centered:!0,show:n,children:[(0,x.jsx)(c.Z.Header,{children:(0,x.jsxs)(c.Z.Title,{children:["Edit ",f?"Worker":"Customer"]})}),(0,x.jsx)(c.Z.Body,{children:(0,x.jsxs)(o.Z,{children:[(0,x.jsxs)(d.Z,{className:"mb-3",children:[(0,x.jsx)(u.Z,{lg:2,children:(0,x.jsx)(o.Z.Label,{children:"Name :"})}),(0,x.jsx)(u.Z,{children:(0,x.jsx)(o.Z.Control,{type:"text",name:f?"workername":"customername",value:b.workername?b.workername:b.customername,onChange:k})})]}),(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(u.Z,{lg:2,children:(0,x.jsx)(o.Z.Label,{children:"Mobile :"})}),(0,x.jsx)(u.Z,{children:(0,x.jsx)(o.Z.Control,{type:"number",name:"mobile",value:b.mobilenu,onChange:k})})]})]})}),(0,x.jsxs)(c.Z.Footer,{children:[(0,x.jsx)(m.Z,{variant:"secondary",onClick:r,children:"Close"}),(0,x.jsx)(m.Z,{variant:"primary",onClick:function(e){e.preventDefault();var n=f?"/worker/update_worker/".concat(j):"/customer/update_customer/".concat(j),a=f?{workername:b.workername,mobilenu:b.mobilenu}:{customername:b.customername,mobilenu:b.mobilenu};i.Z.put(n,a,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){if("success"===e.data.status){r();var n=f?"Worker edited successfully!":"Customer edited successfully!";h.Am.success(n,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}})).catch((function(e){r();var n=f?"Failed to edit worker!":"Failed to edit customer!";h.Am.error(n,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}))},children:"Save"})]})]})})}},6472:function(e,n,r){r.d(n,{Z:function(){return t}});var a=r(2559);function t(){return(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)("footer",{className:"main-footer d-md-flex justify-content-between p-2",children:(0,a.jsxs)("p",{className:"mb-0 fs-6",children:[(0,a.jsx)("strong",{children:"Copyright \xa9 2024-2025. "}),"Developed by DG. All rights reserved."]})})})})}},8067:function(e,n,r){r.d(n,{As:function(){return s},r:function(){return t},xS:function(){return a}});var a=localStorage.getItem("userId"),t=localStorage.getItem("token"),s=localStorage.getItem("shopName")},4106:function(e,n,r){r.d(n,{Z:function(){return f}});var a=r(4942),t=r(1413),s=r(9439),l=r(390),i=r(9134),c=r(8991),o=r(9914),d=r(3948),u=r(5753),m=r(4926),h=r(17),x=r(8067),j=r(2559);function f(e){var n=e.rateModel,r=e.closeModel,f=e.isCustomerRate,Z=(0,l.useState)({shirt_rate:"",pent_rate:"",kurta_rate:""}),v=(0,s.Z)(Z,2),b=v[0],g=v[1],k=function(e){g((0,t.Z)((0,t.Z)({},b),{},(0,a.Z)({},e.target.name,e.target.value)))},p=f?"/customer/ratecustomer":"/worker/rate_worker";return(0,l.useEffect)((function(){i.Z.get(p+"?userId="+x.xS).then((function(e){null!==e.data.result&&g(e.data.result)})).catch((function(e){}))}),[]),(0,j.jsx)("div",{children:(0,j.jsxs)(c.Z,{show:n,centered:!0,children:[(0,j.jsx)(c.Z.Header,{children:(0,j.jsx)(c.Z.Title,{})}),(0,j.jsx)(c.Z.Body,{children:(0,j.jsxs)(m.Z,{children:[(0,j.jsxs)(o.Z,{className:"mb-3",children:[(0,j.jsx)(d.Z,{lg:3,children:(0,j.jsx)(m.Z.Label,{children:"Shirt Rate :"})}),(0,j.jsx)(d.Z,{children:(0,j.jsx)(m.Z.Control,{type:"number",name:"shirt_rate",value:b.shirt_rate,onChange:k})})]}),(0,j.jsxs)(o.Z,{className:"mb-3",children:[(0,j.jsx)(d.Z,{lg:3,children:(0,j.jsx)(m.Z.Label,{children:"Pent Rate :"})}),(0,j.jsx)(d.Z,{children:(0,j.jsx)(m.Z.Control,{type:"number",name:"pent_rate",value:b.pent_rate,onChange:k})})]}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(d.Z,{lg:3,children:(0,j.jsx)(m.Z.Label,{children:"Kurta Rate :"})}),(0,j.jsx)(d.Z,{children:(0,j.jsx)(m.Z.Control,{type:"number",name:"kurta_rate",value:b.kurta_rate,onChange:k})})]})]})}),(0,j.jsxs)(c.Z.Footer,{children:[(0,j.jsx)(u.Z,{variant:"secondary",onClick:r,children:"Close"}),(0,j.jsx)(u.Z,{variant:"primary",onClick:function(){i.Z.post(p,{shirt_rate:b.shirt_rate,pent_rate:b.pent_rate,kurta_rate:b.kurta_rate,userId:x.xS}).then((function(e){g(e.data),r(),h.Am.success("Rate Saved Succesfully !",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})})).catch((function(e){h.Am.error("Failed to saved rate !",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}))},children:"Save"})]})]})})}},2395:function(e,n,r){r.d(n,{Z:function(){return d}});var a=r(1413),t=r(9439),s=r(390),l=r(5400),i=r(749),c=r(8067),o=r(2559);function d(){var e=(0,s.useState)(window.innerWidth<1e3),n=(0,t.Z)(e,2),r=n[0],d=n[1];return(0,s.useEffect)((function(){var e=function(){d(window.innerWidth<1e3)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,o.jsx)("div",{className:"wrapper",children:(0,o.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",children:[(0,o.jsxs)(l.OL,{className:"brand-link",activeClassName:"active-link",children:[(0,o.jsx)("img",{src:"/images/cap.png",className:"brand-image img-circle",style:{opacity:".8"}}),(0,o.jsx)("span",{className:"brand-text font-weight-light text-uppercase",children:(0,o.jsx)("b",{children:c.As})}),(0,o.jsx)("i",{"data-widget":"pushmenu",className:"d-lg-none ml-2 ".concat(r?"":"invisible"),children:(0,o.jsx)(i.dL9,{})})]}),(0,o.jsx)("div",{className:"sidebar",children:(0,o.jsx)("nav",{className:"mt-3",children:(0,o.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column",children:[(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsxs)(l.OL,(0,a.Z)((0,a.Z)({to:"/dashboard",className:"nav-link"},r&&{"data-widget":"pushmenu"}),{},{children:[(0,o.jsx)("i",{className:"nav-icon fas fa-tachometer-alt"}),(0,o.jsx)("p",{children:"Dashboard"})]}))}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsxs)(l.OL,(0,a.Z)((0,a.Z)({to:"/allworker",className:"nav-link"},r&&{"data-widget":"pushmenu"}),{},{children:[(0,o.jsx)("i",{className:"nav-icon fas fa-th"}),(0,o.jsx)("p",{children:"Worker"})]}))}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsxs)(l.OL,(0,a.Z)((0,a.Z)({to:"/customer_list",className:"nav-link"},r&&{"data-widget":"pushmenu"}),{},{children:[(0,o.jsx)("i",{className:"nav-icon fas fa-user"}),(0,o.jsx)("p",{children:"Customer"})]}))}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsxs)(l.OL,(0,a.Z)((0,a.Z)({to:"/bill",className:"nav-link"},r&&{"data-widget":"pushmenu"}),{},{children:[(0,o.jsx)(i.t9y,{className:"nav-icon"}),(0,o.jsx)("p",{children:"Generate Bill"})]}))})]})})})]})})}},4066:function(e,n,r){r.d(n,{Z:function(){return s}});var a=r(5545),t=r(2559);function s(){var e=(0,a.s0)();return(0,t.jsxs)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:[(0,t.jsx)("ul",{className:"navbar-nav",children:(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button",children:(0,t.jsx)("i",{className:"fas fa-bars"})})})}),(0,t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link","data-widget":"fullscreen",href:"#",role:"button",children:(0,t.jsx)("i",{className:"fas fa-expand-arrows-alt"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link",onClick:function(){localStorage.clear(),e("../",{replace:!0}),e(0)},role:"button",children:(0,t.jsx)("i",{className:"fas fa-power-off"})})})]})]})}}}]);
//# sourceMappingURL=913.18d6b369.chunk.js.map