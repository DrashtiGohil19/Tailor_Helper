"use strict";(self.webpackChunktailor_desk=self.webpackChunktailor_desk||[]).push([[182],{6472:function(e,a,s){s.d(a,{Z:function(){return t}});var n=s(2559);function t(){return(0,n.jsx)("div",{className:"",children:(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsxs)("footer",{className:"main-footer d-flex justify-content-between",children:[(0,n.jsxs)("p",{className:"mb-0",children:[(0,n.jsx)("strong",{children:"Copyright \xa9 2023-2024 SIMPLEX TAILOR ."})," All rights reserved."]}),(0,n.jsx)("p",{className:"mb-0",children:"Developed by DG."})]})})})}},8067:function(e,a,s){s.d(a,{As:function(){return l},r:function(){return t},xS:function(){return n}});var n=localStorage.getItem("userId"),t=localStorage.getItem("token"),l=localStorage.getItem("shopName")},2395:function(e,a,s){s.d(a,{Z:function(){return o}});var n=s(1413),t=s(9439),l=s(390),r=s(5400),i=s(749),c=s(8067),d=s(2559);function o(){var e=(0,l.useState)(window.innerWidth<1e3),a=(0,t.Z)(e,2),s=a[0],o=a[1];return(0,l.useEffect)((function(){var e=function(){o(window.innerWidth<1e3)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,d.jsx)("div",{className:"wrapper",children:(0,d.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",children:[(0,d.jsxs)(r.OL,{className:"brand-link",activeClassName:"active-link",children:[(0,d.jsx)("img",{src:"/images/cap.png",className:"brand-image img-circle",style:{opacity:".8"}}),(0,d.jsx)("span",{className:"brand-text font-weight-light text-uppercase",children:(0,d.jsx)("b",{children:c.As})}),(0,d.jsx)("i",{"data-widget":"pushmenu",className:"d-lg-none ml-2 ".concat(s?"":"invisible"),children:(0,d.jsx)(i.dL9,{})})]}),(0,d.jsx)("div",{className:"sidebar",children:(0,d.jsx)("nav",{className:"mt-3",children:(0,d.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column",children:[(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsxs)(r.OL,(0,n.Z)((0,n.Z)({to:"/dashboard",className:"nav-link"},s&&{"data-widget":"pushmenu"}),{},{children:[(0,d.jsx)("i",{className:"nav-icon fas fa-tachometer-alt"}),(0,d.jsx)("p",{children:"Dashboard"})]}))}),(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsxs)(r.OL,(0,n.Z)((0,n.Z)({to:"/allworker",className:"nav-link"},s&&{"data-widget":"pushmenu"}),{},{children:[(0,d.jsx)("i",{className:"nav-icon fas fa-th"}),(0,d.jsx)("p",{children:"Worker"})]}))}),(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsxs)(r.OL,(0,n.Z)((0,n.Z)({to:"/customer_list",className:"nav-link"},s&&{"data-widget":"pushmenu"}),{},{children:[(0,d.jsx)("i",{className:"nav-icon fas fa-user"}),(0,d.jsx)("p",{children:"Customer"})]}))}),(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsxs)(r.OL,(0,n.Z)((0,n.Z)({to:"/bill",className:"nav-link"},s&&{"data-widget":"pushmenu"}),{},{children:[(0,d.jsx)(i.t9y,{className:"nav-icon"}),(0,d.jsx)("p",{children:"Generate Bill"})]}))})]})})})]})})}},4066:function(e,a,s){s.d(a,{Z:function(){return l}});var n=s(5545),t=s(2559);function l(){var e=(0,n.s0)();return(0,t.jsxs)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:[(0,t.jsx)("ul",{className:"navbar-nav",children:(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button",children:(0,t.jsx)("i",{className:"fas fa-bars"})})})}),(0,t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link","data-widget":"fullscreen",href:"#",role:"button",children:(0,t.jsx)("i",{className:"fas fa-expand-arrows-alt"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link",onClick:function(){localStorage.clear(),e("../",{replace:!0}),e(0)},role:"button",children:(0,t.jsx)("i",{className:"fas fa-power-off"})})})]})]})}},6182:function(e,a,s){s.r(a),s.d(a,{default:function(){return h}});var n=s(9439),t=s(390),l=s(5545),r=s(9134),i=s(2395),c=s(4066),d=s(6472),o=s(2559);function h(){var e=(0,t.useState)([]),a=(0,n.Z)(e,2),s=a[0],h=a[1],u=(0,t.useState)(),m=(0,n.Z)(u,2),x=m[0],j=m[1],v=(0,t.useState)(""),p=(0,n.Z)(v,2),f=p[0],N=p[1],b=(0,t.useState)(""),g=(0,n.Z)(b,2),w=g[0],k=g[1],S=(0,l.UO)();(0,t.useEffect)((function(){y(),Z()}),[]);var y=function(){var e=x||(new Date).getMonth()+1,a=f||(new Date).getFullYear();r.Z.get("/worker/workerprofile?data_id=".concat(S.id,"&selectedMonth=").concat(e,"&selectedYear=").concat(a),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){h(e.data.data)})).catch((function(e){}))},Z=function(){r.Z.get("/worker/single_worker/".concat(S.id),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){k(e.data.data.workername)})).catch((function(e){}))};return(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Z,{}),(0,o.jsx)(c.Z,{}),(0,o.jsxs)("div",{className:"content-wrapper",children:[(0,o.jsx)("section",{className:"content-header",children:(0,o.jsx)("div",{className:"container-fluid",children:(0,o.jsxs)("div",{className:"row mb-2",children:[(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsx)("h1",{children:"Monthly Work Report"})}),(0,o.jsx)("div",{className:"col-sm-6",children:(0,o.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,o.jsx)("li",{className:"breadcrumb-item",children:(0,o.jsx)("a",{href:"#",children:"Home"})}),(0,o.jsx)("li",{className:"breadcrumb-item active",children:"Work Report"})]})})]})})}),(0,o.jsx)("section",{className:"content",children:(0,o.jsx)("div",{className:"container-fluid",children:(0,o.jsxs)("div",{className:"card card-default",children:[(0,o.jsxs)("div",{className:"card-header",children:[(0,o.jsxs)("h3",{className:"card-title",children:[w,"'s Monthly Work Report"]}),(0,o.jsxs)("div",{className:"card-tools",children:[(0,o.jsx)("button",{type:"button",className:"btn btn-tool","data-card-widget":"collapse",children:(0,o.jsx)("i",{className:"fas fa-minus"})}),(0,o.jsx)("button",{type:"button",className:"btn btn-tool","data-card-widget":"remove",children:(0,o.jsx)("i",{className:"fas fa-times"})})]})]}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-5",children:(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{children:"Select Month"}),(0,o.jsxs)("select",{className:"form-control select2",style:{width:"100%"},value:x,onChange:function(e){return j(parseInt(e.target.value))},children:[(0,o.jsx)("option",{defaultValue:"Select Month",children:"Select month"}),(0,o.jsx)("option",{value:1,children:"January"}),(0,o.jsx)("option",{value:2,children:"February"}),(0,o.jsx)("option",{value:3,children:"March"}),(0,o.jsx)("option",{value:4,children:"April"}),(0,o.jsx)("option",{value:5,children:"May"}),(0,o.jsx)("option",{value:6,children:"June"}),(0,o.jsx)("option",{value:7,children:"July"}),(0,o.jsx)("option",{value:8,children:"August"}),(0,o.jsx)("option",{value:9,children:"September"}),(0,o.jsx)("option",{value:10,children:"October"}),(0,o.jsx)("option",{value:11,children:"November"}),(0,o.jsx)("option",{value:12,children:"December"})]})]})}),(0,o.jsx)("div",{className:"col-md-5",children:(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{children:"Select Year"}),(0,o.jsxs)("select",{className:"form-control select2",style:{width:"100%"},value:f,onChange:function(e){return N(parseInt(e.target.value))},children:[(0,o.jsx)("option",{defaultValue:"Select year",children:"Select year"}),(0,o.jsx)("option",{value:(new Date).getFullYear()-2,children:(new Date).getFullYear()-2}),(0,o.jsx)("option",{value:(new Date).getFullYear()-1,children:(new Date).getFullYear()-1}),(0,o.jsx)("option",{value:(new Date).getFullYear(),children:(new Date).getFullYear()})]})]})}),(0,o.jsx)("div",{className:"col-md-2",children:(0,o.jsx)("button",{className:"btn btn-primary",onClick:y,style:{marginTop:"29px"},children:"Get Data"})})]}),0===(null===s||void 0===s?void 0:s.length)?(0,o.jsx)("h4",{className:"text-center",children:"No Data Found In This Month"}):(0,o.jsxs)("table",{id:"example2",className:"table table-bordered table-hover text-center",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Date"}),(0,o.jsx)("th",{children:"Shirt"}),(0,o.jsx)("th",{children:"Pent"}),(0,o.jsx)("th",{children:"Kurta"}),(0,o.jsx)("th",{children:"Total Shirt"}),(0,o.jsx)("th",{children:"Total Pent"}),(0,o.jsx)("th",{children:"Total Kurta"}),(0,o.jsx)("th",{children:"Withdrawal"})]})}),(0,o.jsxs)("tbody",{children:[null===s||void 0===s?void 0:s.map((function(e,a){return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:new Date(e.date).toLocaleDateString("en-GB")}),(0,o.jsx)("td",{children:e.shirt}),(0,o.jsx)("td",{children:e.pent}),(0,o.jsx)("td",{children:e.kurta}),(0,o.jsx)("td",{children:e.total_shirt}),(0,o.jsx)("td",{children:e.total_pent}),(0,o.jsx)("td",{children:e.total_kurta}),(0,o.jsx)("td",{children:e.withdrawal})]},a)})),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{colSpan:"4",children:"Total amount"}),(0,o.jsx)("td",{colSpan:"3",children:s.reduce((function(e,a){return e+parseFloat(a.total_shirt)+parseFloat(a.total_pent)+parseFloat(a.total_kurta)}),0)}),(0,o.jsx)("td",{children:s.reduce((function(e,a){return e+parseFloat(a.withdrawal)}),0)})]})]})]})]})]})})})]}),(0,o.jsx)(d.Z,{})]})}}}]);
//# sourceMappingURL=182.fa04285b.chunk.js.map