"use strict";(self.webpackChunktailor_desk=self.webpackChunktailor_desk||[]).push([[908],{8908:function(a,e,s){s.r(e),s.d(e,{default:function(){return m}});var o=s(4942),t=s(1413),l=s(9439),r=s(9134),n=s(390),d=s(5545),i=s(17),c=s(2559);function m(){var a=(0,n.useState)({email:"",password:""}),e=(0,l.Z)(a,2),s=e[0],m=e[1],u=(0,d.s0)(),p=function(a){m((0,t.Z)((0,t.Z)({},s),{},(0,o.Z)({},a.target.name,a.target.value)))};return(0,c.jsx)("div",{className:"login-page",children:(0,c.jsx)("div",{className:"login-box",children:(0,c.jsx)("div",{className:"card",children:(0,c.jsxs)("div",{className:"card-body login-card-body",children:[(0,c.jsx)("p",{className:"login-box-msg",children:"Sign in to start your session"}),(0,c.jsxs)("form",{method:"post",children:[(0,c.jsx)("label",{children:"User Name"}),(0,c.jsxs)("div",{className:"input-group mb-3",children:[(0,c.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"email",value:s.email,onChange:p,autoComplete:"email"}),(0,c.jsx)("div",{className:"input-group-append",children:(0,c.jsx)("div",{className:"input-group-text",children:(0,c.jsx)("span",{className:"fas fa-envelope"})})})]}),(0,c.jsx)("label",{children:"Password"}),(0,c.jsxs)("div",{className:"input-group mb-3",children:[(0,c.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:s.password,onChange:p,autoComplete:"current-password"}),(0,c.jsx)("div",{className:"input-group-append",children:(0,c.jsx)("div",{className:"input-group-text",children:(0,c.jsx)("span",{className:"fas fa-lock"})})})]})]}),(0,c.jsx)("div",{className:"d-flex justify-content-center",children:(0,c.jsx)("button",{className:"btn btn-primary",onClick:function(){s.email.trim()&&s.password.trim()?r.Z.post("/login",{email:s.email,password:s.password}).then((function(a){if("Success"===a.data.status){var e=a.data.data[0].isLoggedIn,s=a.data.data[0]._id;localStorage.setItem("token",a.data.token),"user"===a.data.data[0].role?(localStorage.setItem("userId",s),localStorage.setItem("isLoggedIn",e),localStorage.setItem("shopName",a.data.data[0].shopName),u("/dashboard")):"admin"===a.data.data[0].role&&u("/admin/dashboard")}else i.Am.error(a.data.status,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})})).catch((function(a){console.log(a),i.Am.error(a.response.data.status,{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})})):i.Am.error("Please enter both email and password.",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})},children:"LOGIN"})})]})})})})}}}]);
//# sourceMappingURL=908.157bbfbd.chunk.js.map