"use strict";(self.webpackChunktailor_desk=self.webpackChunktailor_desk||[]).push([[913],{1201:function(e,a,n){n.d(a,{Z:function(){return j}});var s=n(4942),r=n(1413),t=n(9439),l=n(9134),c=n(390),i=n(4926),o=n(356),d=(n(3508),n(9914)),u=n(3948),m=n(5753),h=n(17),x=n(2559);function j(e){var a=e.showModel,n=e.closeModal,j=e.isAddingWorker,f=(0,c.useState)({name:"",mobilenu:""}),v=(0,t.Z)(f,2),Z=v[0],b=v[1],k=(0,c.useState)({name:"",mobilenu:""}),g=(0,t.Z)(k,2),N=g[0],p=g[1],C=function(e){b((0,r.Z)((0,r.Z)({},Z),{},(0,s.Z)({},e.target.name,e.target.value))),p((0,r.Z)((0,r.Z)({},N),{},(0,s.Z)({},e.target.name,"")))};return(0,x.jsx)("div",{children:(0,x.jsxs)(o.Z,{show:a,centered:!0,children:[(0,x.jsx)(o.Z.Header,{children:(0,x.jsx)(o.Z.Title,{children:!0===j?"Add Worker":"Add Customer"})}),(0,x.jsx)(o.Z.Body,{children:(0,x.jsxs)(i.Z,{children:[(0,x.jsxs)(d.Z,{className:"mb-3",children:[(0,x.jsx)(u.Z,{lg:2,children:(0,x.jsx)(i.Z.Label,{children:"Name :"})}),(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(i.Z.Control,{type:"text",placeholder:"Enter name",autoFocus:!0,name:"name",className:"form-control ".concat(N.name?"is-invalid":""),value:Z.name,onChange:C}),N.name&&(0,x.jsx)("div",{className:"text-danger",children:N.name})]})]}),(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(u.Z,{lg:2,children:(0,x.jsx)(i.Z.Label,{children:"Mobile :"})}),(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(i.Z.Control,{type:"number",placeholder:"Enter mobile number",name:"mobilenu",className:"form-control ".concat(N.mobilenu?"is-invalid":""),value:Z.mobilenu,onChange:C}),N.mobilenu&&(0,x.jsx)("div",{className:"text-danger",children:N.mobilenu})]})]})]})}),(0,x.jsxs)(o.Z.Footer,{children:[(0,x.jsx)(m.Z,{variant:"secondary",onClick:n,children:"Close"}),(0,x.jsx)(m.Z,{variant:"primary",onClick:function(e){if(e.preventDefault(),function(){var e=!0,a={};return""===Z.name.trim()&&(a.name="Name is required",e=!1),""===Z.mobilenu.trim()?(a.mobilenu="Mobile number is required",e=!1):/^\d{10}$/.test(Z.mobilenu)||(a.mobilenu="Mobile number should be a 10-digit number",e=!1),p(a),e}()){var a=j?"/worker/addworker":"/customer/add_customer",s=j?{workername:Z.name,mobilenu:Z.mobilenu}:{name:Z.name,mobilenu:Z.mobilenu};l.Z.post(a,s,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){if("success"===e.data.status){n();var a=j?"Worker added successfully!":"Customer added successfully!";h.Am.success(a,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}})).catch((function(e){n();var a=j?"Failed to add worker!":"Failed to add customer!";h.Am.error(a,{autoClose:5e3,style:{backgroundColor:"black",color:"white"}})}))}},children:"Save"})]})]})})}},5913:function(e,a,n){n.r(a),n.d(a,{default:function(){return Z}});var s=n(9439),r=n(390),t=n(9134),l=n(5400),c=n(2395),i=n(4066),o=n(6303),d=n(1662),u=n(8464),m=n(749),h=n(4569),x=n(1211),j=n(1201),f=(n(6472),n(4106)),v=n(2559);function Z(){var e=(0,r.useState)(),a=(0,s.Z)(e,2),n=a[0],Z=a[1],b=(0,r.useState)(1),k=(0,s.Z)(b,2),g=k[0],N=k[1],p=(0,r.useState)(),C=(0,s.Z)(p,2),w=C[0],y=C[1],_=10*(g-1),S=(0,r.useState)(""),A=(0,s.Z)(S,2),L=A[0],I=A[1],M=(0,r.useState)(!1),D=(0,s.Z)(M,2),E=D[0],F=D[1],W=(0,r.useState)(!1),R=(0,s.Z)(W,2),T=R[0],z=R[1],O=(0,r.useState)(null),B=(0,s.Z)(O,2),H=B[0],P=B[1],V=(0,r.useState)(!1),q=(0,s.Z)(V,2),U=q[0],X=q[1],G=(0,r.useState)(!1),K=(0,s.Z)(G,2),$=K[0],J=K[1],Q=(localStorage.getItem("token"),function(){F(!0)}),Y=function(e){z(!0),n.map((function(a){a._id===e&&P(e)})),ne()},ee=function(e){X(!0),n.map((function(a){a._id===e&&P(e)}))},ae=function(){J(!0)};(0,r.useEffect)((function(){ne(),se(),document.title="Simplex Tailor - Customer List"}),[g]);var ne=function(){t.Z.get("/customer/view_customer?page_no=".concat(g),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){Z(e.data.data),y(e.data.totalpage)}))},se=function(e){var a,n=(null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value)||"";I(n),t.Z.get("/customer/search_customer?page_no=".concat(g,"&search=").concat(n),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){Z(e.data.data)}))};return(0,v.jsxs)("div",{children:[(0,v.jsx)(c.Z,{}),(0,v.jsx)(i.Z,{}),(0,v.jsxs)("div",{className:"content-wrapper",children:[(0,v.jsx)("section",{className:"content-header",children:(0,v.jsx)("div",{className:"container-fluid",children:(0,v.jsxs)("div",{className:"row mb-2",children:[(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsx)("h1",{children:"Customer List"})}),(0,v.jsx)("div",{className:"col-sm-6",children:(0,v.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,v.jsx)("li",{className:"mr-3",children:(0,v.jsxs)("button",{className:"btn btn-primary",onClick:Q,children:[(0,v.jsx)(u.jCV,{})," Add Customer"]})}),(0,v.jsx)("li",{className:"",children:(0,v.jsxs)("button",{className:"btn btn-primary",onClick:function(){return ae()},children:[(0,v.jsx)(m.t9y,{})," Rate"]})})]})})]})})}),(0,v.jsx)("section",{className:"content",children:(0,v.jsx)("div",{className:"container-fluid",children:(0,v.jsx)("div",{className:"row",children:(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("div",{className:"card",children:[(0,v.jsxs)("div",{className:"card-header d-flex",children:[(0,v.jsx)("h3",{className:"card-title",children:"View all customer"}),(0,v.jsxs)("div",{className:"d-flex ml-auto",children:[(0,v.jsx)("span",{children:"Search:"}),(0,v.jsx)("input",{type:"text",className:"form-control form-control-sm ml-2",name:"search",value:L,onChange:se})]})]}),(0,v.jsxs)("div",{className:"card-body table-responsive",children:[(0,v.jsxs)("table",{className:"table table-bordered table-hover text-center responsive",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Number"}),(0,v.jsx)("th",{children:"Name"}),(0,v.jsx)("th",{children:"Mobile Number"}),(0,v.jsx)("th",{children:"Bill Nu."}),(0,v.jsx)("th",{children:"Measurement"}),(0,v.jsx)("th",{children:"History"}),(0,v.jsx)("th",{colSpan:2,children:"Action"})]})}),(0,v.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e,a){return(0,v.jsxs)("tr",{children:[(0,v.jsxs)("td",{children:[" ",_+a+1]}),(0,v.jsx)("td",{style:{textTransform:"capitalize"},children:e.customername}),(0,v.jsx)("td",{children:e.mobilenu}),(0,v.jsx)("td",{children:e.bill_nu}),(0,v.jsx)("td",{children:(0,v.jsx)(l.rU,{to:"/add_measurement/".concat(e._id),children:(0,v.jsx)(u.jCV,{style:{fontSize:"18px"}})})}),(0,v.jsx)("td",{children:(0,v.jsx)(l.rU,{to:"/customer_profile/".concat(e._id),children:(0,v.jsx)(m.ceS,{})})}),(0,v.jsx)("td",{onClick:function(){return ee(e._id)},children:(0,v.jsx)("i",{className:"fas fa-edit"})}),(0,v.jsx)("td",{onClick:function(){return Y(e._id)},children:(0,v.jsx)("i",{className:"fas fa-trash",style:{color:"red"}})})]},a)}))})]}),(0,v.jsx)(o.Z,{sx:{justifyContent:"center",alignItems:"center",marginTop:"20px"},children:(0,v.jsx)(d.Z,{count:w,color:"primary",page:g,onChange:function(e,a){return N(a)}})})]})]})})})})})]}),E&&(0,v.jsx)(j.Z,{showModel:Q,closeModal:function(){F(!1),ne()},isAddingWorker:!1}),T&&(0,v.jsx)(h.Z,{showDelete:Y,closeDelete:function(){z(!1),ne()},DelWorker:!1,selectedId:H}),U&&(0,v.jsx)(x.Z,{showEdit:ee,closeEdit:function(){X(!1),ne()},selectedId:H,WorketEdit:!1}),$&&(0,v.jsx)(f.Z,{rateModel:ae,closeModel:function(){J(!1),ne()},isCustomerRate:!0})]})}},4569:function(e,a,n){n.d(a,{Z:function(){return i}});var s=n(9134),r=n(356),t=n(5753),l=n(17),c=n(2559);function i(e){var a=e.showDelete,n=e.closeDelete,i=e.DelWorker,o=e.selectedId,d=i?"Are you sure you want to delete this worker? Deleting a worker will also delete other releted data of worker.":"Are you sure you want to delete this customer? Deleting a customer will also delete other associated data.";return(0,c.jsx)("div",{children:(0,c.jsxs)(r.Z,{show:a,backdrop:"static",keyboard:!1,children:[(0,c.jsx)(r.Z.Header,{children:(0,c.jsx)(r.Z.Title,{children:"Confirm Deletion"})}),(0,c.jsx)(r.Z.Body,{children:d}),(0,c.jsxs)(r.Z.Footer,{children:[(0,c.jsx)(t.Z,{variant:"danger",onClick:function(){var e=i?"/worker/delete_worker/".concat(o):"/customer/delete_customer/".concat(o);s.Z.delete(e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){l.Am.success("Data deleted succesfully !",{autoClose:5e3,style:{backgroundColor:"black",color:"white"}}),n()})).catch((function(e){l.Am.error("Failed to delete data !",{autoClose:5e3,style:{backgroundColor:"black",color:"white"}}),n()}))},children:"Delete"}),(0,c.jsx)(t.Z,{variant:"secondary",onClick:n,children:"Cancel"})]})]})})}},1211:function(e,a,n){n.d(a,{Z:function(){return j}});var s=n(4942),r=n(1413),t=n(9439),l=n(390),c=n(9134),i=n(356),o=n(4926),d=n(9914),u=n(3948),m=n(5753),h=n(17),x=n(2559);function j(e){var a=e.showEdit,n=e.closeEdit,j=e.selectedId,f=e.WorkerEdit,v=(0,l.useState)({workername:"",customername:"",mobilenu:""}),Z=(0,t.Z)(v,2),b=Z[0],k=Z[1];(0,l.useEffect)((function(){!function(){var e=f?"/worker/single_worker/".concat(j):"/customer/single_customer/".concat(j);c.Z.get(e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){k(e.data.data)}))}()}),[j]);var g=function(e){k((0,r.Z)((0,r.Z)({},b),{},(0,s.Z)({},e.target.name,e.target.value)))};return(0,x.jsx)("div",{children:(0,x.jsxs)(i.Z,{centered:!0,show:a,children:[(0,x.jsx)(i.Z.Header,{children:(0,x.jsxs)(i.Z.Title,{children:["Edit ",f?"Worker":"Customer"]})}),(0,x.jsx)(i.Z.Body,{children:(0,x.jsxs)(o.Z,{children:[(0,x.jsxs)(d.Z,{className:"mb-3",children:[(0,x.jsx)(u.Z,{lg:2,children:(0,x.jsx)(o.Z.Label,{children:"Name :"})}),(0,x.jsx)(u.Z,{children:(0,x.jsx)(o.Z.Control,{type:"text",name:f?"workername":"customername",value:b.workername?b.workername:b.customername,onChange:g})})]}),(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(u.Z,{lg:2,children:(0,x.jsx)(o.Z.Label,{children:"Mobile :"})}),(0,x.jsx)(u.Z,{children:(0,x.jsx)(o.Z.Control,{type:"number",name:"mobile",value:b.mobilenu,onChange:g})})]})]})}),(0,x.jsxs)(i.Z.Footer,{children:[(0,x.jsx)(m.Z,{variant:"secondary",onClick:n,children:"Close"}),(0,x.jsx)(m.Z,{variant:"primary",onClick:function(e){e.preventDefault();var a=f?"/worker/update_worker/".concat(j):"/customer/update_customer/".concat(j),s=f?{workername:b.workername,mobilenu:b.mobilenu}:{customername:b.customername,mobilenu:b.mobilenu};c.Z.put(a,s,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){if("success"===e.data.status){n();var a=f?"Worker edited successfully!":"Customer edited successfully!";h.Am.success(a,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}})).catch((function(e){n();var a=f?"Failed to edit worker!":"Failed to edit customer!";h.Am.error(a,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}))},children:"Save"})]})]})})}},6472:function(e,a,n){n.d(a,{Z:function(){return r}});var s=n(2559);function r(){return(0,s.jsx)("div",{className:"layout-footer-fixed",children:(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsxs)("footer",{className:"main-footer",children:[(0,s.jsx)("strong",{children:"Copyright \xa9 2023-2024 SIMPLEX TAILOR ."})," All rights reserved."]})})})}},4106:function(e,a,n){n.d(a,{Z:function(){return j}});var s=n(4942),r=n(1413),t=n(9439),l=n(390),c=n(9134),i=n(356),o=n(9914),d=n(3948),u=n(5753),m=n(4926),h=n(17),x=n(2559);function j(e){var a=e.rateModel,n=e.closeModel,j=e.isCustomerRate,f=(0,l.useState)({shirt_rate:"",pent_rate:"",kurta_rate:""}),v=(0,t.Z)(f,2),Z=v[0],b=v[1],k=function(e){b((0,r.Z)((0,r.Z)({},Z),{},(0,s.Z)({},e.target.name,e.target.value)))},g=j?"/customer/ratecustomer":"/worker/rate_worker";return(0,l.useEffect)((function(){c.Z.get(g).then((function(e){b(e.data)})).catch((function(e){}))}),[]),(0,x.jsx)("div",{children:(0,x.jsxs)(i.Z,{show:a,centered:!0,children:[(0,x.jsx)(i.Z.Header,{children:(0,x.jsx)(i.Z.Title,{})}),(0,x.jsx)(i.Z.Body,{children:(0,x.jsxs)(m.Z,{children:[(0,x.jsxs)(o.Z,{className:"mb-3",children:[(0,x.jsx)(d.Z,{lg:3,children:(0,x.jsx)(m.Z.Label,{children:"Shirt Rate :"})}),(0,x.jsx)(d.Z,{children:(0,x.jsx)(m.Z.Control,{type:"text",name:"shirt_rate",value:Z.shirt_rate,onChange:k})})]}),(0,x.jsxs)(o.Z,{className:"mb-3",children:[(0,x.jsx)(d.Z,{lg:3,children:(0,x.jsx)(m.Z.Label,{children:"Pent Rate :"})}),(0,x.jsx)(d.Z,{children:(0,x.jsx)(m.Z.Control,{type:"number",name:"pent_rate",value:Z.pent_rate,onChange:k})})]}),(0,x.jsxs)(o.Z,{children:[(0,x.jsx)(d.Z,{lg:3,children:(0,x.jsx)(m.Z.Label,{children:"Kurta Rate :"})}),(0,x.jsx)(d.Z,{children:(0,x.jsx)(m.Z.Control,{type:"number",name:"kurta_rate",value:Z.kurta_rate,onChange:k})})]})]})}),(0,x.jsxs)(i.Z.Footer,{children:[(0,x.jsx)(u.Z,{variant:"secondary",onClick:n,children:"Close"}),(0,x.jsx)(u.Z,{variant:"primary",onClick:function(){c.Z.post(g,{shirt_rate:Z.shirt_rate,pent_rate:Z.pent_rate,kurta_rate:Z.kurta_rate}).then((function(e){b(e.data),200===e.status&&(n(),h.Am.success("Rate Saved Succesfully !",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}}))})).catch((function(e){h.Am.error("Failed to saved rate !",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}))},children:"Save"})]})]})})}},2395:function(e,a,n){n.d(a,{Z:function(){return l}});var s=n(5400),r=n(749),t=n(2559);function l(){return(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",children:[(0,t.jsxs)(s.OL,{className:"brand-link",activeclassname:"active-link",children:[(0,t.jsx)("img",{src:"/images/cap.png",className:"brand-image img-circle",style:{opacity:".8"}}),(0,t.jsx)("span",{className:"brand-text font-weight-light",children:(0,t.jsx)("b",{children:"SIMPLEX TAILOR"})}),(0,t.jsx)("i",{"data-widget":"pushmenu",className:"d-lg-none ml-2",children:(0,t.jsx)(r.dL9,{})})]}),(0,t.jsx)("div",{className:"sidebar",children:(0,t.jsx)("nav",{className:"mt-3",children:(0,t.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsxs)(s.OL,{to:"/dashboard",className:"nav-link",children:[(0,t.jsx)("i",{className:"nav-icon fas fa-tachometer-alt"}),(0,t.jsx)("p",{children:"Dashboard"})]})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsxs)(s.OL,{to:"/allworker",className:"nav-link",children:[(0,t.jsx)("i",{className:"nav-icon fas fa-th"}),(0,t.jsx)("p",{children:"Worker"})]})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsxs)(s.OL,{to:"/customer_list",className:"nav-link",children:[(0,t.jsx)("i",{className:"nav-icon fas fa-user"}),(0,t.jsx)("p",{children:"Customer"})]})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsxs)(s.OL,{to:"/bill",className:"nav-link",children:[(0,t.jsx)(r.t9y,{className:"nav-icon"}),(0,t.jsx)("p",{children:"Generate Bill"})]})})]})})})]})})}},4066:function(e,a,n){n.d(a,{Z:function(){return t}});var s=n(5545),r=n(2559);function t(){var e=(0,s.s0)();return(0,r.jsxs)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:[(0,r.jsx)("ul",{className:"navbar-nav",children:(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button",children:(0,r.jsx)("i",{className:"fas fa-bars"})})})}),(0,r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link","data-widget":"fullscreen",href:"#",role:"button",children:(0,r.jsx)("i",{className:"fas fa-expand-arrows-alt"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link",onClick:function(){localStorage.removeItem("token"),e("/")},role:"button",children:(0,r.jsx)("i",{className:"fas fa-power-off"})})})]})]})}}}]);
//# sourceMappingURL=913.8a778bca.chunk.js.map