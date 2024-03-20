"use strict";(self.webpackChunktailor_desk=self.webpackChunktailor_desk||[]).push([[185],{1201:function(e,r,n){n.d(r,{Z:function(){return Z}});var a=n(4942),t=n(1413),s=n(9439),l=n(9134),i=n(390),o=n(4926),c=n(8991),d=(n(3508),n(9914)),u=n(3948),h=n(5753),m=n(17),x=n(8067),j=n(2559);function Z(e){var r=e.showModel,n=e.closeModal,Z=e.isAddingWorker,f=(0,i.useState)({name:"",mobilenu:"",register_nu:""}),v=(0,s.Z)(f,2),b=v[0],k=v[1],g=(0,i.useState)({name:"",mobilenu:""}),p=(0,s.Z)(g,2),w=p[0],N=p[1],C=localStorage.getItem("userId"),y=function(e){k((0,t.Z)((0,t.Z)({},b),{},(0,a.Z)({},e.target.name,e.target.value))),N((0,t.Z)((0,t.Z)({},w),{},(0,a.Z)({},e.target.name,"")))};return(0,j.jsx)("div",{children:(0,j.jsxs)(c.Z,{show:r,centered:!0,children:[(0,j.jsx)(c.Z.Header,{children:(0,j.jsx)(c.Z.Title,{children:!0===Z?"Add Worker":"Add Customer"})}),(0,j.jsx)(c.Z.Body,{children:(0,j.jsxs)(o.Z,{children:[(0,j.jsxs)(d.Z,{className:"mb-3",children:[(0,j.jsx)(u.Z,{lg:2,children:(0,j.jsx)(o.Z.Label,{children:"Name :"})}),(0,j.jsxs)(u.Z,{children:[(0,j.jsx)(o.Z.Control,{type:"text",placeholder:"Enter name",autoFocus:!0,name:"name",className:"form-control ".concat(w.name?"is-invalid":""),value:b.name,onChange:y}),w.name&&(0,j.jsx)("div",{className:"text-danger",children:w.name})]})]}),(0,j.jsxs)(d.Z,{className:"mb-3",children:[(0,j.jsx)(u.Z,{lg:2,children:(0,j.jsx)(o.Z.Label,{children:"Mobile :"})}),(0,j.jsxs)(u.Z,{children:[(0,j.jsx)(o.Z.Control,{type:"number",placeholder:"Enter mobile number",name:"mobilenu",className:"form-control ".concat(w.mobilenu?"is-invalid":""),value:b.mobilenu,onChange:y}),w.mobilenu&&(0,j.jsx)("div",{className:"text-danger",children:w.mobilenu})]})]}),!Z&&(0,j.jsxs)(d.Z,{children:[(0,j.jsx)(u.Z,{lg:2,children:(0,j.jsx)(o.Z.Label,{children:"Book Nu."})}),(0,j.jsx)(u.Z,{children:(0,j.jsx)(o.Z.Control,{type:"number",placeholder:"Enter book Nu.",className:"form-control",name:"register_nu",value:b.register_nu,onChange:y})})]})]})}),(0,j.jsxs)(c.Z.Footer,{children:[(0,j.jsx)(h.Z,{variant:"secondary",onClick:n,children:"Close"}),(0,j.jsx)(h.Z,{variant:"primary",onClick:function(e){if(e.preventDefault(),function(){var e=!0,r={};return""===b.name.trim()&&(r.name="Name is required",e=!1),""===b.mobilenu.trim()?(r.mobilenu="Mobile number is required",e=!1):/^\d{10}$/.test(b.mobilenu)||(r.mobilenu="Mobile number should be a 10-digit number",e=!1),N(r),e}()){var r=Z?"/worker/addworker":"/customer/add_customer",a=Z?{workername:b.name,mobilenu:b.mobilenu,userId:C}:{name:b.name,mobilenu:b.mobilenu,userId:C,register_nu:b.register_nu};l.Z.post(r,a,{headers:{Authorization:x.r}}).then((function(e){if("success"===e.data.status){n();var r=Z?"Worker added successfully!":"Customer added successfully!";m.Am.success(r,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}})).catch((function(e){n();var r=Z?"Failed to add worker! Try with another mobile number.":"Failed to add customer! Try with another mobile number.";m.Am.error(r,{autoClose:5e3,style:{backgroundColor:"black",color:"white"}})}))}},children:"Save"})]})]})})}},5185:function(e,r,n){n.r(r),n.d(r,{default:function(){return A}});var a=n(9439),t=n(5400),s=n(9134),l=n(390),i=n(2395),o=n(4066),c=n(1662),d=n(6303),u=n(8464),h=n(4942),m=n(1413),x=n(8991),j=n(4926),Z=n(9914),f=n(3948),v=n(5753),b=n(17),k=n(8067),g=n(2559);function p(e){var r=e.showModel1,n=e.closeModal1,t=e.selectedId,i=(0,l.useState)({date:"",shirt:"",pent:"",kurta:"",withdrawal:""}),o=(0,a.Z)(i,2),c=o[0],d=o[1],u=(0,l.useState)(""),p=(0,a.Z)(u,2),w=p[0],N=p[1],C=function(e){d((0,m.Z)((0,m.Z)({},c),{},(0,h.Z)({},e.target.name,e.target.value)))};(0,l.useEffect)((function(){s.Z.get("/worker/single_worker/".concat(t),{headers:{Authorization:k.r}}).then((function(e){N(e.data.data.workername)})).catch((function(e){}))}),[]);return(0,g.jsxs)(x.Z,{centered:!0,show:r,children:[(0,g.jsx)(x.Z.Header,{children:(0,g.jsx)(x.Z.Title,{children:"Add Work"})}),(0,g.jsx)(x.Z.Body,{children:(0,g.jsxs)(j.Z,{children:[(0,g.jsxs)(Z.Z,{className:"mb-3",children:[(0,g.jsx)(f.Z,{lg:2,children:(0,g.jsx)(j.Z.Label,{children:"Name :"})}),(0,g.jsx)(f.Z,{children:(0,g.jsx)(j.Z.Control,{type:"text",placeholder:"Enter name",autoFocus:!0,name:"name",value:w,onChange:C})})]}),(0,g.jsxs)(Z.Z,{className:"mb-3",children:[(0,g.jsx)(f.Z,{lg:2,children:(0,g.jsx)(j.Z.Label,{children:"Date :"})}),(0,g.jsx)(f.Z,{children:(0,g.jsx)(j.Z.Control,{type:"date",name:"date",value:c.date,onChange:C})})]}),(0,g.jsxs)(Z.Z,{className:"mb-3",children:[(0,g.jsx)(f.Z,{lg:2,children:(0,g.jsx)(j.Z.Label,{children:"Shirt :"})}),(0,g.jsx)(f.Z,{children:(0,g.jsx)(j.Z.Control,{type:"number",placeholder:"Enter shirt",autoFocus:!0,name:"shirt",value:c.shirt,onChange:C})})]}),(0,g.jsxs)(Z.Z,{className:"mb-3",children:[(0,g.jsx)(f.Z,{lg:2,children:(0,g.jsx)(j.Z.Label,{children:"Pent :"})}),(0,g.jsx)(f.Z,{children:(0,g.jsx)(j.Z.Control,{type:"number",placeholder:"Enter pent",autoFocus:!0,name:"pent",value:c.pent,onChange:C})})]}),(0,g.jsxs)(Z.Z,{className:"mb-3",children:[(0,g.jsx)(f.Z,{lg:2,children:(0,g.jsx)(j.Z.Label,{children:"Kurta :"})}),(0,g.jsx)(f.Z,{children:(0,g.jsx)(j.Z.Control,{type:"number",placeholder:"Enter kurta",autoFocus:!0,name:"kurta",value:c.kurta,onChange:C})})]}),(0,g.jsxs)(Z.Z,{className:"mb-3",children:[(0,g.jsx)(f.Z,{lg:3,children:(0,g.jsx)(j.Z.Label,{children:"Withdrawal :"})}),(0,g.jsx)(f.Z,{children:(0,g.jsx)(j.Z.Control,{type:"number",placeholder:"Enter withdrawal",autoFocus:!0,name:"withdrawal",value:c.withdrawal,onChange:C})})]})]})}),(0,g.jsxs)(x.Z.Footer,{children:[(0,g.jsx)(v.Z,{variant:"secondary",onClick:n,children:"Close"}),(0,g.jsx)(v.Z,{variant:"primary",onClick:function(e){e.preventDefault(),s.Z.post("/worker/addwork",{worker_id:t,date:c.date,shirt:c.shirt,pent:c.pent,kurta:c.kurta,withdrawal:c.withdrawal},{headers:{Authorization:k.r}}).then((function(e){n(),"success"===e.data.status&&b.Am.success("Data saved succesfully !",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})})).catch((function(e){b.Am.error("please enter another data !",{autoClose:5e3,style:{backgroundColor:"black",color:"white"}}),n()}))},children:"Save"})]})]})}var w=n(1211),N=n(4569),C=n(749),y=n(4106),S=n(1201),_=n(6472);function A(){var e=(0,l.useState)(),r=(0,a.Z)(e,2),n=r[0],h=r[1],m=(0,l.useState)(1),x=(0,a.Z)(m,2),j=x[0],Z=x[1],f=(0,l.useState)(),v=(0,a.Z)(f,2),b=v[0],A=v[1],E=10*(j-1),I=(0,l.useState)(""),L=(0,a.Z)(I,2),D=L[0],W=L[1],F=(0,l.useState)(!1),M=(0,a.Z)(F,2),z=M[0],T=M[1],B=(0,l.useState)(!1),H=(0,a.Z)(B,2),R=H[0],O=H[1],G=(0,l.useState)(null),q=(0,a.Z)(G,2),K=q[0],P=q[1],V=(0,l.useState)(!1),U=(0,a.Z)(V,2),$=U[0],J=U[1],Q=(0,l.useState)(!1),X=(0,a.Z)(Q,2),Y=X[0],ee=X[1],re=(0,l.useState)(!1),ne=(0,a.Z)(re,2),ae=ne[0],te=ne[1],se=function(){T(!0)},le=function(e){O(!0),n.map((function(r){r._id===e&&P(e)}))},ie=function(e){J(!0),n.map((function(r){r._id===e&&P(e)}))},oe=function(e){ee(!0),n.map((function(r){r._id===e&&P(e)}))};(0,l.useEffect)((function(){ce(),document.title="Simplex Tailor - Worker List"}),[j]);var ce=function(){s.Z.get("/worker/viewworker?page_no=".concat(j,"&userId=").concat(k.xS),{headers:{Authorization:k.r}}).then((function(e){h(e.data.data),A(e.data.totalpage)})).catch((function(e){}))};return(0,g.jsxs)("div",{children:[(0,g.jsx)(i.Z,{}),(0,g.jsx)(o.Z,{}),(0,g.jsxs)("div",{className:"content-wrapper",style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[(0,g.jsx)("section",{className:"content-header",children:(0,g.jsx)("div",{className:"container-fluid",children:(0,g.jsxs)("div",{className:"row mb-2",children:[(0,g.jsx)("div",{className:"col-sm-6",children:(0,g.jsx)("h1",{children:"Workers"})}),(0,g.jsx)("div",{className:"col-sm-6",children:(0,g.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,g.jsx)("li",{className:"mr-3",children:(0,g.jsxs)("button",{className:"btn btn-primary",onClick:se,children:[(0,g.jsx)(u.jCV,{})," Add Worker"]})}),(0,g.jsx)("li",{children:(0,g.jsxs)("button",{className:"btn btn-primary",onClick:function(){return te(!0)},children:[(0,g.jsx)(C.t9y,{})," Rate"]})})]})})]})})}),(0,g.jsx)("section",{className:"content",children:(0,g.jsx)("div",{className:"container-fluid",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsx)("div",{className:"col-12",children:(0,g.jsxs)("div",{className:"card",children:[(0,g.jsxs)("div",{className:"card-header d-flex",children:[(0,g.jsx)("h3",{className:"card-title",children:"View all worker"}),(0,g.jsxs)("div",{className:"d-flex ml-auto",children:[(0,g.jsx)("span",{children:"Search:"}),(0,g.jsx)("input",{type:"text",className:"form-control form-control-sm ml-2",name:"search",value:D,onChange:function(e){var r,n=(null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.value)||"";W(n),""!==n?(0,s.Z)({method:"GET",url:"/worker/search_worker",params:{mobileNumber:n,userId:k.xS},headers:{Authorization:localStorage.getItem("token")}}).then((function(e){h(e.data.data)})):ce()}})]})]}),(0,g.jsxs)("div",{className:"card-body table-responsive",children:[(0,g.jsxs)("table",{id:"example2",className:"table table-bordered table-hover text-center responsive",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Number"}),(0,g.jsx)("th",{children:"Name"}),(0,g.jsx)("th",{children:"Mobile Number"}),(0,g.jsx)("th",{colSpan:4,children:"Action"})]})}),(0,g.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e,r){return(0,g.jsxs)("tr",{children:[(0,g.jsxs)("td",{children:[" ",E+r+1]}),(0,g.jsx)("td",{style:{textTransform:"capitalize"},children:e.workername}),(0,g.jsx)("td",{children:e.mobilenu}),(0,g.jsx)("td",{onClick:function(){return le(e._id)},children:(0,g.jsx)("i",{className:"fas fa-plus-circle"})}),(0,g.jsx)("td",{children:(0,g.jsx)(t.rU,{to:"/workerprofile/".concat(e._id),children:(0,g.jsx)("i",{className:"fas fa-eye"})})}),(0,g.jsx)("td",{onClick:function(){return ie(e._id)},children:(0,g.jsx)("i",{className:"fas fa-edit"})}),(0,g.jsx)("td",{onClick:function(){return oe(e._id)},children:(0,g.jsx)("i",{className:"fas fa-trash"})})]},r)}))})]}),(0,g.jsx)(d.Z,{sx:{justifyContent:"center",alignItems:"center",marginTop:"20px"},children:(0,g.jsx)(c.Z,{count:b,color:"primary",page:j,onChange:function(e,r){return Z(r)}})})]})]})})})})})]}),z&&(0,g.jsx)(S.Z,{showModel:se,closeModal:function(){T(!1),ce()},isAddingWorker:!0}),R&&(0,g.jsx)(p,{showModel1:le,closeModal1:function(){O(!1)},selectedId:K}),$&&(0,g.jsx)(w.Z,{showEdit:ie,closeEdit:function(){J(!1),ce()},selectedId:K,WorkerEdit:!0}),Y&&(0,g.jsx)(N.Z,{showDelete:oe,closeDelete:function(){ee(!1),ce()},DelWorker:!0,selectedId:K}),ae&&(0,g.jsx)(y.Z,{rateModel:ae,closeModel:function(){return te(!1)}}),(0,g.jsx)(_.Z,{})]})}},4569:function(e,r,n){n.d(r,{Z:function(){return o}});var a=n(9134),t=n(8991),s=n(5753),l=n(17),i=n(2559);function o(e){var r=e.showDelete,n=e.closeDelete,o=e.DelWorker,c=e.selectedId,d=o?"Are you sure you want to delete this worker? Deleting a worker will also delete other releted data of worker.":"Are you sure you want to delete this customer? Deleting a customer will also delete other associated data.";return(0,i.jsx)("div",{children:(0,i.jsxs)(t.Z,{show:r,backdrop:"static",keyboard:!1,children:[(0,i.jsx)(t.Z.Header,{children:(0,i.jsx)(t.Z.Title,{children:"Confirm Deletion"})}),(0,i.jsx)(t.Z.Body,{children:d}),(0,i.jsxs)(t.Z.Footer,{children:[(0,i.jsx)(s.Z,{variant:"danger",onClick:function(){var e=o?"/worker/delete_worker/".concat(c):"/customer/delete_customer/".concat(c);a.Z.delete(e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){l.Am.success("Data deleted succesfully !",{autoClose:5e3,style:{backgroundColor:"black",color:"white"}}),n()})).catch((function(e){l.Am.error("Failed to delete data !",{autoClose:5e3,style:{backgroundColor:"black",color:"white"}}),n()}))},children:"Delete"}),(0,i.jsx)(s.Z,{variant:"secondary",onClick:n,children:"Cancel"})]})]})})}},1211:function(e,r,n){n.d(r,{Z:function(){return j}});var a=n(4942),t=n(1413),s=n(9439),l=n(390),i=n(9134),o=n(8991),c=n(4926),d=n(9914),u=n(3948),h=n(5753),m=n(17),x=n(2559);function j(e){var r=e.showEdit,n=e.closeEdit,j=e.selectedId,Z=e.WorkerEdit,f=(0,l.useState)({workername:"",customername:"",mobilenu:""}),v=(0,s.Z)(f,2),b=v[0],k=v[1];(0,l.useEffect)((function(){!function(){var e=Z?"/worker/single_worker/".concat(j):"/customer/single_customer/".concat(j);i.Z.get(e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){k(e.data.data)}))}()}),[j]);var g=function(e){k((0,t.Z)((0,t.Z)({},b),{},(0,a.Z)({},e.target.name,e.target.value)))};return(0,x.jsx)("div",{children:(0,x.jsxs)(o.Z,{centered:!0,show:r,children:[(0,x.jsx)(o.Z.Header,{children:(0,x.jsxs)(o.Z.Title,{children:["Edit ",Z?"Worker":"Customer"]})}),(0,x.jsx)(o.Z.Body,{children:(0,x.jsxs)(c.Z,{children:[(0,x.jsxs)(d.Z,{className:"mb-3",children:[(0,x.jsx)(u.Z,{lg:2,children:(0,x.jsx)(c.Z.Label,{children:"Name :"})}),(0,x.jsx)(u.Z,{children:(0,x.jsx)(c.Z.Control,{type:"text",name:Z?"workername":"customername",value:b.workername?b.workername:b.customername,onChange:g})})]}),(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(u.Z,{lg:2,children:(0,x.jsx)(c.Z.Label,{children:"Mobile :"})}),(0,x.jsx)(u.Z,{children:(0,x.jsx)(c.Z.Control,{type:"number",name:"mobile",value:b.mobilenu,onChange:g})})]})]})}),(0,x.jsxs)(o.Z.Footer,{children:[(0,x.jsx)(h.Z,{variant:"secondary",onClick:n,children:"Close"}),(0,x.jsx)(h.Z,{variant:"primary",onClick:function(e){e.preventDefault();var r=Z?"/worker/update_worker/".concat(j):"/customer/update_customer/".concat(j),a=Z?{workername:b.workername,mobilenu:b.mobilenu}:{customername:b.customername,mobilenu:b.mobilenu};i.Z.put(r,a,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){if("success"===e.data.status){n();var r=Z?"Worker edited successfully!":"Customer edited successfully!";m.Am.success(r,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}})).catch((function(e){n();var r=Z?"Failed to edit worker!":"Failed to edit customer!";m.Am.error(r,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}))},children:"Save"})]})]})})}},6472:function(e,r,n){n.d(r,{Z:function(){return t}});var a=n(2559);function t(){return(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)("footer",{className:"main-footer d-md-flex justify-content-between p-2",children:(0,a.jsxs)("p",{className:"mb-0 fs-6",children:[(0,a.jsx)("strong",{children:"Copyright \xa9 2024-2025. "}),"Developed by DG. All rights reserved."]})})})})}},8067:function(e,r,n){n.d(r,{As:function(){return s},r:function(){return t},xS:function(){return a}});var a=localStorage.getItem("userId"),t=localStorage.getItem("token"),s=localStorage.getItem("shopName")},4106:function(e,r,n){n.d(r,{Z:function(){return Z}});var a=n(4942),t=n(1413),s=n(9439),l=n(390),i=n(9134),o=n(8991),c=n(9914),d=n(3948),u=n(5753),h=n(4926),m=n(17),x=n(8067),j=n(2559);function Z(e){var r=e.rateModel,n=e.closeModel,Z=e.isCustomerRate,f=(0,l.useState)({shirt_rate:"",pent_rate:"",kurta_rate:""}),v=(0,s.Z)(f,2),b=v[0],k=v[1],g=function(e){k((0,t.Z)((0,t.Z)({},b),{},(0,a.Z)({},e.target.name,e.target.value)))},p=Z?"/customer/ratecustomer":"/worker/rate_worker";return(0,l.useEffect)((function(){i.Z.get(p+"?userId="+x.xS).then((function(e){null!==e.data.result&&k(e.data.result)})).catch((function(e){}))}),[]),(0,j.jsx)("div",{children:(0,j.jsxs)(o.Z,{show:r,centered:!0,children:[(0,j.jsx)(o.Z.Header,{children:(0,j.jsx)(o.Z.Title,{})}),(0,j.jsx)(o.Z.Body,{children:(0,j.jsxs)(h.Z,{children:[(0,j.jsxs)(c.Z,{className:"mb-3",children:[(0,j.jsx)(d.Z,{lg:3,children:(0,j.jsx)(h.Z.Label,{children:"Shirt Rate :"})}),(0,j.jsx)(d.Z,{children:(0,j.jsx)(h.Z.Control,{type:"number",name:"shirt_rate",value:b.shirt_rate,onChange:g})})]}),(0,j.jsxs)(c.Z,{className:"mb-3",children:[(0,j.jsx)(d.Z,{lg:3,children:(0,j.jsx)(h.Z.Label,{children:"Pent Rate :"})}),(0,j.jsx)(d.Z,{children:(0,j.jsx)(h.Z.Control,{type:"number",name:"pent_rate",value:b.pent_rate,onChange:g})})]}),(0,j.jsxs)(c.Z,{children:[(0,j.jsx)(d.Z,{lg:3,children:(0,j.jsx)(h.Z.Label,{children:"Kurta Rate :"})}),(0,j.jsx)(d.Z,{children:(0,j.jsx)(h.Z.Control,{type:"number",name:"kurta_rate",value:b.kurta_rate,onChange:g})})]})]})}),(0,j.jsxs)(o.Z.Footer,{children:[(0,j.jsx)(u.Z,{variant:"secondary",onClick:n,children:"Close"}),(0,j.jsx)(u.Z,{variant:"primary",onClick:function(){i.Z.post(p,{shirt_rate:b.shirt_rate,pent_rate:b.pent_rate,kurta_rate:b.kurta_rate,userId:x.xS}).then((function(e){k(e.data),n(),m.Am.success("Rate Saved Succesfully !",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})})).catch((function(e){m.Am.error("Failed to saved rate !",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}))},children:"Save"})]})]})})}},2395:function(e,r,n){n.d(r,{Z:function(){return d}});var a=n(1413),t=n(9439),s=n(390),l=n(5400),i=n(749),o=n(8067),c=n(2559);function d(){var e=(0,s.useState)(window.innerWidth<1e3),r=(0,t.Z)(e,2),n=r[0],d=r[1];return(0,s.useEffect)((function(){var e=function(){d(window.innerWidth<1e3)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",children:[(0,c.jsxs)(l.OL,{className:"brand-link",activeClassName:"active-link",children:[(0,c.jsx)("img",{src:"/images/cap.png",className:"brand-image img-circle",style:{opacity:".8"}}),(0,c.jsx)("span",{className:"brand-text font-weight-light text-uppercase",children:(0,c.jsx)("b",{children:o.As})}),(0,c.jsx)("i",{"data-widget":"pushmenu",className:"d-lg-none ml-2 ".concat(n?"":"invisible"),children:(0,c.jsx)(i.dL9,{})})]}),(0,c.jsx)("div",{className:"sidebar",children:(0,c.jsx)("nav",{className:"mt-3",children:(0,c.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column",children:[(0,c.jsx)("li",{className:"nav-item",children:(0,c.jsxs)(l.OL,(0,a.Z)((0,a.Z)({to:"/dashboard",className:"nav-link"},n&&{"data-widget":"pushmenu"}),{},{children:[(0,c.jsx)("i",{className:"nav-icon fas fa-tachometer-alt"}),(0,c.jsx)("p",{children:"Dashboard"})]}))}),(0,c.jsx)("li",{className:"nav-item",children:(0,c.jsxs)(l.OL,(0,a.Z)((0,a.Z)({to:"/allworker",className:"nav-link"},n&&{"data-widget":"pushmenu"}),{},{children:[(0,c.jsx)("i",{className:"nav-icon fas fa-th"}),(0,c.jsx)("p",{children:"Worker"})]}))}),(0,c.jsx)("li",{className:"nav-item",children:(0,c.jsxs)(l.OL,(0,a.Z)((0,a.Z)({to:"/customer_list",className:"nav-link"},n&&{"data-widget":"pushmenu"}),{},{children:[(0,c.jsx)("i",{className:"nav-icon fas fa-user"}),(0,c.jsx)("p",{children:"Customer"})]}))}),(0,c.jsx)("li",{className:"nav-item",children:(0,c.jsxs)(l.OL,(0,a.Z)((0,a.Z)({to:"/bill",className:"nav-link"},n&&{"data-widget":"pushmenu"}),{},{children:[(0,c.jsx)(i.t9y,{className:"nav-icon"}),(0,c.jsx)("p",{children:"Generate Bill"})]}))})]})})})]})})}},4066:function(e,r,n){n.d(r,{Z:function(){return s}});var a=n(5545),t=n(2559);function s(){var e=(0,a.s0)();return(0,t.jsxs)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:[(0,t.jsx)("ul",{className:"navbar-nav",children:(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button",children:(0,t.jsx)("i",{className:"fas fa-bars"})})})}),(0,t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link","data-widget":"fullscreen",href:"#",role:"button",children:(0,t.jsx)("i",{className:"fas fa-expand-arrows-alt"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link",onClick:function(){localStorage.clear(),e("../",{replace:!0}),e(0)},role:"button",children:(0,t.jsx)("i",{className:"fas fa-power-off"})})})]})]})}}}]);
//# sourceMappingURL=185.d9299d2d.chunk.js.map