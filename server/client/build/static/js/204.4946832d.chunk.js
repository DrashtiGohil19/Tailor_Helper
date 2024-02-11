/*! For license information please see 204.4946832d.chunk.js.LICENSE.txt */
(self.webpackChunktailor_desk=self.webpackChunktailor_desk||[]).push([[204],{3993:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var a=r(4942),n=r(1413),s=r(1002);function i(){i=function(){return t};var e,t={},r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",o=l.asyncIterator||"@@asyncIterator",d=l.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var s=t&&t.prototype instanceof y?t:y,i=Object.create(s.prototype),l=new C(a||[]);return n(i,"_invoke",{value:L(e,r,l)}),i}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var x="suspendedStart",p="suspendedYield",f="executing",j="completed",v={};function y(){}function b(){}function N(){}var _={};h(_,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(D([])));w&&w!==r&&a.call(w,c)&&(_=w);var k=N.prototype=y.prototype=Object.create(_);function q(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(n,i,l,c){var o=m(e[n],e,i);if("throw"!==o.type){var d=o.arg,h=d.value;return h&&"object"==(0,s.Z)(h)&&a.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,l,c)}),(function(e){r("throw",e,l,c)})):t.resolve(h).then((function(e){d.value=e,l(d)}),(function(e){return r("throw",e,l,c)}))}c(o.arg)}var i;n(this,"_invoke",{value:function(e,a){function n(){return new t((function(t,n){r(e,a,t,n)}))}return i=i?i.then(n,n):n()}})}function L(t,r,a){var n=x;return function(s,i){if(n===f)throw new Error("Generator is already running");if(n===j){if("throw"===s)throw i;return{value:e,done:!0}}for(a.method=s,a.arg=i;;){var l=a.delegate;if(l){var c=S(l,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===x)throw n=j,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=f;var o=m(t,r,a);if("normal"===o.type){if(n=a.done?j:p,o.arg===v)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(n=j,a.method="throw",a.arg=o.arg)}}}function S(t,r){var a=r.method,n=t.iterator[a];if(n===e)return r.delegate=null,"throw"===a&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==a&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),v;var s=m(n,t.iterator,r.arg);if("throw"===s.type)return r.method="throw",r.arg=s.arg,r.delegate=null,v;var i=s.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function Z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError((0,s.Z)(t)+" is not iterable")}return b.prototype=N,n(k,"constructor",{value:N,configurable:!0}),n(N,"constructor",{value:b,configurable:!0}),b.displayName=h(N,d,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,h(e,d,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},q(E.prototype),h(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,a,n,s){void 0===s&&(s=Promise);var i=new E(u(e,r,a,n),s);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},q(k),h(k,d,"Generator"),h(k,c,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=D,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return l.type="throw",l.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),o=a.call(i,"finallyLoc");if(c&&o){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=e,i.arg=t,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:D(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),v}},t}function l(e,t,r,a,n,s,i){try{var l=e[s](i),c=l.value}catch(o){return void r(o)}l.done?t(c):Promise.resolve(c).then(a,n)}var c=r(9439),o=r(390),d=r(2395),h=r(4066),u=r(9134),m=r(17),x=r(2559),p=o.forwardRef((function(e,t){var r=e.data,a=e.pentData,n=e.shirtData,s=e.kurtaData,i=e.customerData,l=0,c=n.shirt_qty>0,d=a.pent_qty>0,h=s.kurta_qty>0;return(0,o.useEffect)((function(){var e=document.querySelectorAll(".item-row"),t=e[e.length-1];t&&(t.style.height="150px")}),[]),(0,x.jsx)("div",{ref:t,children:(0,x.jsx)("section",{className:"content mt-3",children:(0,x.jsx)("div",{className:"container-fluid pb-5",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("div",{className:"card card-primary",children:(0,x.jsxs)("div",{className:"card-body table-responsive border border-dark",children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-sm-6",children:(0,x.jsx)("div",{className:"text-right",children:(0,x.jsx)("h6",{children:"|| \u0ab6\u0acd\u0ab0\u0ac0 \u0ae7 ||"})})}),(0,x.jsxs)("div",{className:"col-sm-6 text-right",children:[(0,x.jsx)("p",{className:"mb-0",children:"Vijaybhai : 94268 79057"}),(0,x.jsx)("p",{children:"Rajanibhai : 88661 28000"})]})]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-sm-3 text-center",children:(0,x.jsx)("img",{src:"images/cap.png",alt:"Logo image",height:"85px"})}),(0,x.jsx)("div",{className:"col-sm-9 mb-1",children:(0,x.jsx)("img",{src:"images/logo.jpg",alt:"logo",width:"250px",height:"100px"})}),(0,x.jsx)("div",{className:"m-auto",children:(0,x.jsx)("p",{children:"Shop No. 4, First Floor, Mira Complex Near Virat Nagar, Kapodra, Surat"})})]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-sm-7",children:(0,x.jsx)("table",{children:(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"Name :"}),(0,x.jsx)("td",{style:{textTransform:"capitalize"},children:i.customername})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"Mobile :"}),(0,x.jsx)("td",{children:i.mobilenu})]})]})})}),(0,x.jsx)("div",{className:"col-sm-5",children:(0,x.jsx)("table",{children:(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"Bill No :"}),(0,x.jsx)("td",{children:i.bill_nu})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"Date :"}),(0,x.jsx)("td",{children:new Date(i.bill_date).toLocaleDateString("en-GB")})]})]})})})]}),(0,x.jsxs)("table",{className:"table table-bordered text-center responsive border mt-1",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{className:"p-1",children:"No."}),(0,x.jsx)("th",{className:"w-50 p-1",children:"Item Name"}),(0,x.jsx)("th",{className:"p-1",children:"Qty"}),(0,x.jsx)("th",{className:"p-1",children:"Rate"}),(0,x.jsx)("th",{className:"p-1",children:"Amount"})]})}),(0,x.jsxs)("tbody",{children:[c&&(0,x.jsxs)("tr",{className:"item-row",children:[(0,x.jsx)("td",{className:"p-1",children:++l}),(0,x.jsx)("td",{className:"p-1",children:"shirt"}),(0,x.jsx)("td",{className:"p-1",children:n.shirt_qty}),(0,x.jsx)("td",{className:"p-1",children:n.shirt_rate}),(0,x.jsx)("td",{className:"p-1",children:n.shirt_amt})]}),d&&(0,x.jsxs)("tr",{className:"mb-6 item-row",children:[(0,x.jsx)("td",{className:"p-0",children:++l}),(0,x.jsx)("td",{className:"p-0",children:"Pent"}),(0,x.jsx)("td",{className:"p-0",children:a.pent_qty}),(0,x.jsx)("td",{className:"p-0",children:a.pent_rate}),(0,x.jsx)("td",{className:"p-0",children:a.pent_amt})]}),h&&(0,x.jsxs)("tr",{className:"mb-6 item-row",children:[(0,x.jsx)("td",{className:"p-0",children:++l}),(0,x.jsx)("td",{className:"p-0",children:"Kurta"}),(0,x.jsx)("td",{className:"p-0",children:s.kurta_qty}),(0,x.jsx)("td",{className:"p-0",children:s.kurta_rate}),(0,x.jsx)("td",{className:"p-0",children:s.kurta_amt})]}),(0,x.jsxs)("tr",{className:"border-top-none",children:[(0,x.jsx)("th",{colSpan:2,className:"p-1",children:"Total "}),(0,x.jsx)("td",{className:"p-1",children:(d?a.pent_qty:0)+(c?n.shirt_qty:0)+(h?s.kurta_qty:0)}),(0,x.jsx)("td",{className:"p-1"}),(0,x.jsx)("td",{className:"p-1",children:r.total_amt})]})]})]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-sm-7 mt-3",children:[(0,x.jsx)("p",{style:{fontSize:"13px"},className:"mb-1",children:"1. \u0a95\u0aaa\u0aa1\u0abe\u0a82 \u0ab2\u0ac7\u0ab5\u0abe \u0a86\u0ab5\u0acb \u0aa4\u0acd\u0aaf\u0abe\u0ab0\u0ac7 \u0aac\u0abf\u0ab2 \u0a85\u0ab5\u0ab6\u0acd\u0aaf \u0ab2\u0abe\u0ab5\u0ab5\u0ac1\u0a82."}),(0,x.jsx)("p",{style:{fontSize:"13px"},className:"mb-1",children:"2. \u0ab8\u0a82\u0a9c\u0acb\u0a97\u0acb \u0ab5\u0ab8\u0abe\u0aa4 \u0a95\u0aaa\u0aa1\u0abe \u0aa8\u0ac0 \u0aa1\u0abf\u0ab2\u0abf\u0ab5\u0ab0\u0ac0 \u0aae\u0abe\u0a82 \u0aab\u0ac7\u0ab0\u0aab\u0abe\u0ab0 \u0aa5\u0a88 \u0ab6\u0a95\u0ac7 \u0a9b\u0ac7."}),(0,x.jsx)("p",{style:{fontSize:"13px"},className:"mb-1",children:"3. \u0a95\u0abe\u0aaa\u0aa1 \u0aae\u0abe\u0a82 \u0a95\u0acb\u0a88 \u0aa8\u0ac1\u0a95\u0ab8\u0abe\u0aa8\u0ac0 \u0ab9\u0ab6\u0ac7 \u0aa4\u0acb \u0aa4\u0ac7\u0aa8\u0abe \u0aae\u0abe\u0a9f\u0ac7 \u0a85\u0aae\u0ac7 \u0a9c\u0ab5\u0abe\u0aac\u0aa6\u0abe\u0ab0 \u0ab0\u0ab9\u0ac7\u0ab6\u0ac1 \u0aa8\u0ab9\u0ac0\u0a82."})]}),(0,x.jsx)("div",{className:"col-sm-5",children:(0,x.jsx)("table",{className:"table",children:(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{className:"p-1",children:"Paid Amt :"}),(0,x.jsx)("td",{className:"p-1",children:r.paid_amt})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{className:"p-1",children:"Total Due Amt :"}),(0,x.jsx)("td",{className:"p-1",children:r.final_amt})]})]})})})]})]})})})})})})})})),f=r(7735),j=r.n(f),v=r(4926),y=r(3948);var b=function(){var e=(0,o.useState)({}),t=(0,c.Z)(e,2),r=t[0],s=t[1],f=(0,o.useState)(""),b=(0,c.Z)(f,2),N=b[0],_=b[1],g=(0,o.useState)({customername:"",bill_nu:"",bill_date:"",shirt_qty:0,pent_qty:0,kurta_qty:0,paid_amt:0,booking_date:"",delivery_date:""}),w=(0,c.Z)(g,2),k=w[0],q=w[1],E=(0,o.useState)(0),L=(0,c.Z)(E,2),S=L[0],Z=L[1],O=(0,o.useState)(0),C=(0,c.Z)(O,2),D=C[0],P=C[1],T=(0,o.useState)(0),I=(0,c.Z)(T,2),A=I[0],B=I[1],G=(0,o.useState)(),R=(0,c.Z)(G,2),F=R[0],z=R[1],M=(0,o.useState)({}),V=(0,c.Z)(M,2),U=V[0],W=V[1],K=localStorage.getItem("token"),Y=(0,o.useRef)(null),Q=function(){var e,t=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/bill/bill_data?mobilenu=".concat(N),{headers:{Authorization:K}}).then((function(e){null!==e.data.data&&(q(e.data.data),z(e.data.data._id))})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,n){var s=e.apply(t,r);function i(e){l(s,a,n,i,c,"next",e)}function c(e){l(s,a,n,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),X=S+D+A,H=k.paid_amt?X-k.paid_amt:X,$={customername:k.customername,mobilenu:N,bill_nu:k.bill_nu,bill_date:k.bill_date},J={shirt_qty:parseInt(k.shirt_qty)||0,shirt_amt:S||0,shirt_rate:r.shirt_rate},ee={pent_qty:parseInt(k.pent_qty)||0,pent_amt:D||0,pent_rate:r.pent_rate},te={kurta_qty:parseInt(k.kurta_qty)||0,kurta_amt:A||0,kurta_rate:r.kurta_rate},re={total_amt:X,paid_amt:k.paid_amt||0,final_amt:H};(0,o.useEffect)((function(){u.Z.get("/customer/ratecustomer").then((function(e){s(e.data)})).catch((function(e){})),Q(),document.title="Simplex Tailor - Bill Page"}),[N,F]);var ae=function(e){var t=e.target,s=t.name,i=t.value;q((function(e){return(0,n.Z)((0,n.Z)({},e),{},(0,a.Z)({},s,i))})),"shirt_qty"===s?Z(parseInt(i)*r.shirt_rate):"pent_qty"===s?P(parseInt(i)*r.pent_rate):"kurta_qty"===s&&B(parseInt(i)*r.kurta_rate)};return(0,x.jsxs)("div",{children:[(0,x.jsx)(d.Z,{}),(0,x.jsx)(h.Z,{}),(0,x.jsxs)("div",{className:"content-wrapper",children:[(0,x.jsx)("section",{className:"content-header",children:(0,x.jsx)("div",{className:"container-fluid",children:(0,x.jsx)("div",{className:"row mb-2",children:(0,x.jsx)("div",{className:"col-sm-6",children:(0,x.jsx)("h1",{children:"Generate Bill"})})})})}),(0,x.jsx)(v.Z,{onSubmit:function(e){e.preventDefault(),function(){var e=!0,t={};return""===N.trim()?(t.mobilenu="Mobile number is required",e=!1):/^\d{10}$/.test(N)?""!==N.trim()&&(t.mobilenu=""):(t.mobilenu="Mobile number should be a 10-digit number",e=!1),k.booking_date||(t.booking_date="Booking date is required",e=!1),new Date(k.delivery_date)<=new Date(k.booking_date)?(t.delivery_date="Delivery date must be after booking date",e=!1):k.delivery_date||(t.delivery_date="Delivery date is required",e=!1),k.bill_date||(t.bill_date="Bill date is required",e=!1),0===k.shirt_qty&&0===k.pent_qty&&0===k.kurta_qty&&(t.qty="At least one quantity is required",e=!1),W(t),e}()&&u.Z.post("/bill/add_bill",{customer_id:F,bill_date:k.bill_date,booking_date:k.booking_date,delivery_date:k.delivery_date,shirt_qty:k.shirt_qty||0,pent_qty:k.pent_qty||0,kurta_qty:k.kurta_qty||0,shirt_amt:S||0,pent_amt:D||0,kurta_amt:A||0,total_amt:X,paid_amt:k.paid_amt||0,final_amt:H},{headers:{Authorization:K}}).then((function(e){"success"===e.data.status&&m.Am.success("Saved Succesfully !",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})})).catch((function(e){m.Am.error("Failed to save !",{autoClose:4e3,style:{backgroundColor:"black",color:"white"}})}))},children:(0,x.jsx)("section",{className:"content measurement",children:(0,x.jsxs)("div",{className:"container-fluid pb-2",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)(y.Z,{sm:4,xs:6,md:4,children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Name"}),(0,x.jsx)("input",{type:"text",className:"form-control",readOnly:!0,value:k.customername,onChange:ae})]})}),(0,x.jsx)(y.Z,{sm:4,xs:6,md:4,children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Mobile Number"}),(0,x.jsx)("input",{type:"number",className:"form-control ".concat(U.mobilenu?"is-invalid":""),placeholder:"Enter ...",name:"mobilenu",value:N,onChange:function(e){return _(e.target.value)}}),U.mobilenu&&(0,x.jsx)("p",{className:"invalid-feedback",children:U.mobilenu})]})}),(0,x.jsx)(y.Z,{sm:4,xs:6,md:4,children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Bill No"}),(0,x.jsx)("input",{type:"number",className:"form-control",readOnly:!0,value:k.bill_nu,onChange:ae})]})}),(0,x.jsx)(y.Z,{sm:4,xs:6,md:4,children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Booking Date"}),(0,x.jsx)("input",{type:"date",className:"form-control ".concat(U.booking_date?"is-invalid":""),placeholder:"Enter ...",name:"booking_date",value:k.booking_date,onChange:ae}),U.booking_date&&(0,x.jsx)("p",{className:"invalid-feedback",children:U.booking_date})]})}),(0,x.jsx)(y.Z,{sm:4,xs:6,md:4,children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Delivery Date"}),(0,x.jsx)("input",{type:"date",className:"form-control ".concat(U.delivery_date?"is-invalid":""),placeholder:"Enter ...",name:"delivery_date",value:k.delivery_date,onChange:ae}),U.delivery_date&&(0,x.jsx)("div",{className:"invalid-feedback",children:U.delivery_date})]})}),(0,x.jsx)(y.Z,{sm:4,xs:6,md:4,children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Bill Date"}),(0,x.jsx)("input",{type:"date",className:"form-control ".concat(U.bill_date?"is-invalid":""),placeholder:"Enter ...",name:"bill_date",value:k.bill_date,onChange:ae}),U.bill_date&&(0,x.jsx)("div",{className:"invalid-feedback",children:U.bill_date})]})})]})})})})}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsxs)("div",{className:"card card-primary",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("h3",{className:"card-title",children:"Bill Details"})}),(0,x.jsx)("div",{className:"card-body table-responsive",children:(0,x.jsxs)("table",{id:"example2",className:"table table-bordered table-hover text-center responsive",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"No."}),(0,x.jsx)("th",{className:"w-50",children:"Item Name"}),(0,x.jsx)("th",{className:"w-25",children:"Quantity"}),(0,x.jsx)("th",{children:"Rate"}),(0,x.jsx)("th",{children:"Amount"})]})}),(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"1"}),(0,x.jsx)("td",{children:"Shirt"}),(0,x.jsx)("td",{children:(0,x.jsx)("div",{className:"d-flex justify-content-center",children:(0,x.jsx)("input",{type:"text",className:"w-50 form-control form-control-sm text-center",name:"shirt_qty",value:k.shirt_qty,onChange:ae})})}),(0,x.jsx)("td",{children:r.shirt_rate}),(0,x.jsx)("td",{children:S||0})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"2"}),(0,x.jsx)("td",{children:"Pent"}),(0,x.jsx)("td",{children:(0,x.jsx)("div",{className:"d-flex justify-content-center",children:(0,x.jsx)("input",{type:"text",className:"form-control w-50 form-control-sm text-center",name:"pent_qty",value:k.pent_qty,onChange:ae})})}),(0,x.jsx)("td",{children:r.pent_rate}),(0,x.jsx)("td",{children:D||0})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"3"}),(0,x.jsx)("td",{children:"Kurta"}),(0,x.jsx)("td",{children:(0,x.jsx)("div",{className:"d-flex justify-content-center",children:(0,x.jsx)("input",{type:"text",className:"w-50 form-control form-control-sm text-center",name:"kurta_qty",value:k.kurta_qty,onChange:ae})})}),(0,x.jsx)("td",{children:r.kurta_rate}),(0,x.jsx)("td",{children:A||0})]})]})]})})]})})}),(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)(y.Z,{sm:4,xs:4,md:2,children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Total Amount"}),(0,x.jsx)("input",{type:"text",className:"form-control",value:0===X?0:X})]})}),(0,x.jsx)(y.Z,{sm:4,xs:4,md:2,children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Paid Amount"}),(0,x.jsx)("input",{type:"number",className:"form-control",name:"paid_amt",value:k.paid_amt,onChange:ae})]})}),(0,x.jsx)(y.Z,{sm:4,xs:4,md:2,children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{children:"Final Amount"}),(0,x.jsx)("input",{type:"text",className:"form-control",value:H||0})]})})]})})}),(0,x.jsxs)("div",{className:"m-2",children:[(0,x.jsx)("button",{className:"btn btn-primary mr-3",type:"submit",children:"Save"}),(0,x.jsx)(j(),{trigger:function(){return(0,x.jsx)("button",{className:"btn btn-primary",children:"Get Print"})},content:function(){return Y.current}})]})]})})})]}),(0,x.jsx)("div",{style:{display:"none"},children:(0,x.jsx)("div",{ref:Y,children:(0,x.jsx)(p,{data:re,shirtData:J,pentData:ee,kurtaData:te,customerData:$})})})]})}},2395:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a=r(5400),n=r(749),s=r(2559);function i(){return(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",children:[(0,s.jsxs)(a.OL,{className:"brand-link",activeclassname:"active-link",children:[(0,s.jsx)("img",{src:"/images/cap.png",className:"brand-image img-circle",style:{opacity:".8"}}),(0,s.jsx)("span",{className:"brand-text font-weight-light",children:(0,s.jsx)("b",{children:"SIMPLEX TAILOR"})}),(0,s.jsx)("i",{"data-widget":"pushmenu",className:"d-lg-none ml-2",children:(0,s.jsx)(n.dL9,{})})]}),(0,s.jsx)("div",{className:"sidebar",children:(0,s.jsx)("nav",{className:"mt-3",children:(0,s.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsxs)(a.OL,{to:"/dashboard",className:"nav-link",children:[(0,s.jsx)("i",{className:"nav-icon fas fa-tachometer-alt"}),(0,s.jsx)("p",{children:"Dashboard"})]})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsxs)(a.OL,{to:"/allworker",className:"nav-link",children:[(0,s.jsx)("i",{className:"nav-icon fas fa-th"}),(0,s.jsx)("p",{children:"Worker"})]})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsxs)(a.OL,{to:"/customer_list",className:"nav-link",children:[(0,s.jsx)("i",{className:"nav-icon fas fa-user"}),(0,s.jsx)("p",{children:"Customer"})]})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsxs)(a.OL,{to:"/bill",className:"nav-link",children:[(0,s.jsx)(n.t9y,{className:"nav-icon"}),(0,s.jsx)("p",{children:"Generate Bill"})]})})]})})})]})})}},4066:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(5545),n=r(2559);function s(){var e=(0,a.s0)();return(0,n.jsxs)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:[(0,n.jsx)("ul",{className:"navbar-nav",children:(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("a",{className:"nav-link","data-widget":"pushmenu",href:"#",role:"button",children:(0,n.jsx)("i",{className:"fas fa-bars"})})})}),(0,n.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("a",{className:"nav-link","data-widget":"fullscreen",href:"#",role:"button",children:(0,n.jsx)("i",{className:"fas fa-expand-arrows-alt"})})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("a",{className:"nav-link",onClick:function(){localStorage.removeItem("token"),e("/")},role:"button",children:(0,n.jsx)("i",{className:"fas fa-power-off"})})})]})]})}},7392:function(e,t,r){"use strict";var a=r(7780);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,s,i){if(i!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return r.PropTypes=r,r}},188:function(e,t,r){e.exports=r(7392)()},7780:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7375:function(e,t,r){"use strict";r.d(t,{Ed:function(){return s},UI:function(){return n},XW:function(){return i}});var a=r(390);function n(e,t){var r=0;return a.Children.map(e,(function(e){return a.isValidElement(e)?t(e,r++):e}))}function s(e,t){var r=0;a.Children.forEach(e,(function(e){a.isValidElement(e)&&t(e,r++)}))}function i(e,t){return a.Children.toArray(e).some((function(e){return a.isValidElement(e)&&e.type===t}))}},2692:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(1413),n=r(5987),s=r(7715),i=r.n(s),l=/-(.)/g;var c=r(390),o=r(6047),d=r(2559),h=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(t=e,t.replace(l,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.displayName,s=void 0===r?u(e):r,l=t.Component,m=t.defaultProps,x=c.forwardRef((function(t,r){var s=t.className,c=t.bsPrefix,u=t.as,x=void 0===u?l||"div":u,p=(0,n.Z)(t,h),f=(0,a.Z)((0,a.Z)({},m),p),j=(0,o.vE)(c,e);return(0,d.jsx)(x,(0,a.Z)({ref:r,className:i()(s,j)},f))}));return x.displayName=s,x}}}]);
//# sourceMappingURL=204.4946832d.chunk.js.map