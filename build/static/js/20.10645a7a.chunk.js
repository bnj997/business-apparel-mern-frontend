(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[20],{212:function(e,t,a){},41:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=a(552),i=a(49),s=(a(51),function(e){var t=r.a.createElement("div",{className:"modal ".concat("form_modal"===e.className?"form_modal":"info_modal"),style:{height:"".concat(e.height)}},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("div",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return c.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(i.a,{onClick:e.onCancel}),r.a.createElement(o.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(s,e)))}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(42),r=a.n(n),l=a(43),c=a(8),o=a(0),i=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(),s=Object(c.a)(i,2),m=s[0],u=s[1],d=Object(o.useRef)([]),p=Object(o.useCallback)(function(){var e=Object(l.a)(r.a.mark((function e(t){var a,l,c,o,i,s,m=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.length>1&&void 0!==m[1]?m[1]:"GET",l=m.length>2&&void 0!==m[2]?m[2]:null,c=m.length>3&&void 0!==m[3]?m[3]:{},n(!0),o=new AbortController,d.current.push(o),e.prev=6,e.next=9,fetch(t,{method:a,body:l,headers:c,signal:o.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(s=e.sent,d.current=d.current.filter((function(e){return e!==o})),i.ok){e.next=16;break}throw new Error(s.message);case 16:return n(!1),e.abrupt("return",s);case 20:throw e.prev=20,e.t0=e.catch(6),u(e.t0.message),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:m,sendRequest:p,clearError:function(){u(null)}}}},48:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(41),c=a(346);t.a=function(e){return r.a.createElement(l.a,{onCancel:e.onClear,header:e.header,show:!!e.error,footer:r.a.createElement(c.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},49:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(13),c=a.n(l);a(50);t.a=function(e){return c.a.createPortal(r.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";var n=a(8),r=a(0),l=a.n(r),c=a(524),o=a(81),i=a.n(o),s=a(35),m=Object(s.a)((function(e){return{badge:{right:-8,top:13,padding:"0 6px"}}}))(c.a);t.a=function(e){var t=Object(r.useState)(0),a=Object(n.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)([]),u=Object(n.a)(s,2),d=u[0],p=u[1];return Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e.userId));t||(localStorage.setItem(e.userId,JSON.stringify([])),t=JSON.parse(localStorage.getItem(e.userId))),p(t)}),[e.change,e.userId]),Object(r.useEffect)((function(){var e=0;0===d.length?o(0):d.forEach((function(t){o((function(){return e+=parseInt(t.quantity)}))}))}),[d]),l.a.createElement(m,{badgeContent:c,color:"secondary"},l.a.createElement(i.a,{style:{marginRight:"0.5rem"}}))}},561:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),c=a(70),o=a(42),i=a.n(o),s=a(43),m=a(8),u=a(98),d=a.n(u),p=(a(212),a(48)),E=a(16),f=a(46),h=a(15),g=function(e){var t=Object(n.useContext)(h.a),a=Object(f.a)(),c=a.isLoading,o=a.error,u=a.sendRequest,g=a.clearError,b=Object(n.useState)(0),y=Object(m.a)(b,2),v=y[0],O=y[1],w=Object(l.h)().oid,x=Object(n.useState)([]),j=Object(m.a)(x,2),k=j[0],C=j[1],B=Object(n.useState)(""),S=Object(m.a)(B,2),N=S[0],I=S[1],R=Object(n.useState)(""),A=Object(m.a)(R,2),T=A[0],D=A[1],P=Object(n.useState)(""),L=Object(m.a)(P,2),_=L[0],q=L[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u("".concat("https://radiant-journey-52325.herokuapp.com/api","/order-lines/").concat(w),"GET",null,{Authorization:"Bearer "+t.token});case 3:a=e.sent,C(a.orderlines),n=0,0===a.orderlines.length?O(0):a.orderlines.forEach((function(e){O((function(){return n+=e.subtotal}))})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.prev=11,e.next=14,u("".concat("https://radiant-journey-52325.herokuapp.com/api","/orders/").concat(w),"GET",null,{Authorization:"Bearer "+t.token});case 14:r=e.sent,I(r.order),D(r.order.hq.name),q(r.order.branch.name),e.next=22;break;case 20:e.prev=20,e.t1=e.catch(11);case 22:case"end":return e.stop()}}),e,null,[[0,9],[11,20]])})));return function(){return e.apply(this,arguments)}})()()}),[u,t.token,w]);var z=[{name:"image",label:"Image",options:{sort:!1,customBodyRender:function(e){return r.a.createElement("img",{style:{width:"75px",height:"75px"},alt:"Garment",src:e})}}},{name:"name",label:"Name"},{name:"colour",label:"Colour"},{name:"size",label:"Size",options:{customBodyRender:function(e){return r.a.createElement("p",null,e)}}},{name:"quantity",label:"Quantity"},{name:"price",label:"Price per unit",options:{customBodyRender:function(e){return r.a.createElement("p",null,"$".concat(e.toFixed(2)))}}},{name:"subtotal",label:"Subtotal",options:{customBodyRender:function(e){return r.a.createElement("p",null,"$".concat(e.toFixed(2)))}}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{header:"An Error Occured",error:o,onClear:g}),r.a.createElement("div",{className:"checkout_table",style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.a.createElement("div",{className:"order_table ",style:{backgroundColor:"white"}},c?r.a.createElement("div",{style:{placeItems:"center"}},r.a.createElement(E.a,null)):r.a.createElement(d.a,{className:"table-center",data:k,columns:z,options:{tableBodyHeight:"55rem",rowsPerPage:10,print:!1,download:!1,elevation:1,selectableRows:"none"}})),r.a.createElement("div",{className:"additional_info",style:{backgroundColor:"white"}},r.a.createElement("div",{style:{margin:"2rem"}},r.a.createElement("div",{style:{marginTop:"2rem",marginBottom:"2rem"}},r.a.createElement("h2",null,"User Information:"),r.a.createElement("div",{className:"calculations",style:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("div",null,r.a.createElement("h3",null,"HQ:"),r.a.createElement("h3",null,"Branch: ")),r.a.createElement("div",null,r.a.createElement("h3",{style:{fontWeight:"normal"}},T),r.a.createElement("h3",{style:{fontWeight:"normal"}},_)))),r.a.createElement("div",{style:{marginTop:"2rem",marginBottom:"2rem"}},r.a.createElement("h2",null,"Additional Information:"),r.a.createElement("p",null,N.info)),r.a.createElement("div",{className:"calculations",style:{marginTop:"2rem",marginBottom:"2rem"}},r.a.createElement("h2",null,"Payment Due:"),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("div",null,r.a.createElement("h3",null,"Subtotal:"),r.a.createElement("h3",null,"GST:"),r.a.createElement("h3",null,"Total Price: ")),r.a.createElement("div",null,r.a.createElement("h3",{style:{fontWeight:"normal"}},"$",v.toFixed(2)),r.a.createElement("h3",{style:{fontWeight:"normal"}},"$",(.1*v).toFixed(2)),r.a.createElement("h3",{style:{fontWeight:"normal"}},"$",(v+.1*v).toFixed(2)))))))))};t.default=function(e){var t=Object(l.h)().oid;return r.a.createElement(c.a,{user:"adminstaff"},r.a.createElement("div",{style:{marginLeft:"4rem",marginRight:"4rem",marginTop:"3rem"}},r.a.createElement("h1",null,"Order Information: ",t," "),r.a.createElement(g,null)))}},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";var n=a(64),r=a(0),l=a.n(r),c=a(537),o=a(375),i=a(84),s=a(8),m=a(14),u=a(15),d=a(346),p=a(532),E=a(386),f=a(535),h=a(382),g=a(558),b=a(107),y=a.n(b),v=a(89),O=a.n(v),w=a(108),x=a.n(w),j=a(109),k=a.n(j),C=a(113),B=a.n(C),S=a(110),N=a.n(S),I=a(111),R=a.n(I),A=a(112),T=a.n(A),D=a(57),P=a.n(D),L=a(536),_=a(538),q=a(385),z=a(384),F=function(e){return l.a.createElement("div",{style:{display:"flex",marginLeft:"1rem",marginRight:"1rem",marginTop:"1.8rem",marginBottom:"1.8rem"}},l.a.createElement("img",{style:{height:"75px",width:"75px"},src:e.image,alt:"garment"}),l.a.createElement("div",{style:{marginLeft:"1.2rem"}},l.a.createElement("h3",{style:{margin:0,paddingBottom:"1rem"}},e.name),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement("div",null,l.a.createElement("p",{style:{margin:0,padding:0}},"Price: $",e.price),l.a.createElement("p",{style:{margin:0,padding:0}},"Quantity: ",e.quantity)),l.a.createElement("div",{style:{marginLeft:"1rem"}},l.a.createElement("p",{style:{margin:0,padding:0}},"Size: ",e.size),l.a.createElement("p",{style:{margin:0,padding:0}},"Colour: ",e.colour)))),l.a.createElement(P.a,{onClick:function(){return e.onRemove(e)},fontSize:"small",style:{cursor:"pointer",display:"block",marginLeft:"auto",marginBottom:"auto",color:"grey"}}))},G=(a(67),a(52)),W=Object(o.a)((function(e){var t;return{drawer:Object(n.a)({},e.breakpoints.up("lg"),{width:350,flexShrink:0}),appBar:(t={},Object(n.a)(t,e.breakpoints.up("lg"),{width:"calc(100% - ".concat(350,"px)"),marginLeft:350}),Object(n.a)(t,"backgroundColor","black"),t),menuButton:Object(n.a)({marginRight:e.spacing(2)},e.breakpoints.up("lg"),{display:"none"}),shopButton:{marginRight:e.spacing(2)},toolbar:e.mixins.toolbar,drawerPaper:{width:350,backgroundColor:"#212121"},shopDrawer:{width:400,backgroundColor:"white"},content:{flexGrow:1,padding:e.spacing(3)}}})),H=function(e){var t=Object(r.useContext)(u.a),a=Object(r.useState)([]),n=Object(s.a)(a,2),o=n[0],b=n[1],v=Object(r.useState)(0),w=Object(s.a)(v,2),j=w[0],C=w[1],S=e.window,I=W();Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem(t.userId));b(e)}),[e.onAdd,t.userId]),Object(r.useEffect)((function(){var e=0;0===o.length?C(0):o.forEach((function(t){C((function(){return e+=t.quantity*t.price}))}))}),[o]);var A=Object(r.useState)(!1),D=Object(s.a)(A,2),H=D[0],J=D[1],$=function(){J(!H)},M=Object(r.useState)(!1),U=Object(s.a)(M,2),Q=U[0],K=U[1],Y=function(){K(!Q)},V=function(e){var a=Object(i.a)(o);a=a.filter((function(t){return t.id!==e.id||t.colour!==e.colour||t.size!==e.size})),b(a);var n=JSON.stringify(a);localStorage.setItem(t.userId,n)},X=l.a.createElement("div",null,l.a.createElement("div",{className:I.toolbar}),l.a.createElement("h2",{style:{color:"white",paddingLeft:"1rem"}},"Actions "),l.a.createElement(p.a,{style:{color:"#B3B3B3"}},"adminstaff"===e.user&&["Orders","Headquarters","Garments"].map((function(e,t){return l.a.createElement(m.c,{key:t,to:"/admin/".concat(e.charAt(0).toLowerCase()+e.slice(1)),style:{display:"flex",padding:"8px 16px 8px 16px",textDecoration:"none",color:"#B3B3B3"}},l.a.createElement(f.a,{style:{color:"white"}},"Orders"===e&&l.a.createElement(y.a,null),"Headquarters"===e&&l.a.createElement(x.a,null),"Garments"===e&&l.a.createElement(k.a,null)),l.a.createElement(h.a,{primary:"".concat(e),style:{color:"white"}}))})),"client"===e.user&&["Orders","Catalogue","Checkout"].map((function(e,a){return l.a.createElement(m.c,{key:a,to:"/".concat(t.username,"/").concat(e.charAt(0).toLowerCase()+e.slice(1)),style:{display:"flex",padding:"8px 16px 8px 16px",textDecoration:"none",color:"#B3B3B3"}},l.a.createElement(f.a,{style:{color:"white"}},"Orders"===e&&l.a.createElement(y.a,null),"Catalogue"===e&&l.a.createElement(x.a,null),"Checkout"===e&&l.a.createElement(k.a,null)),l.a.createElement(h.a,{primary:"".concat(e),style:{color:"white"}}))}))),l.a.createElement(L.a,{style:{backgroundColor:"grey"}}),l.a.createElement("h2",{style:{color:"white",paddingLeft:"1rem"}},"Pages"),l.a.createElement(p.a,{style:{color:"#B3B3B3"}},["Home","About","Team","Contact"].map((function(e,t){return l.a.createElement(m.c,{key:t,to:"/".concat(0===t?"":e.charAt(0).toLowerCase()+e.slice(1)),style:{display:"flex",padding:"8px 16px 8px 16px",textDecoration:"none",color:"#B3B3B3"}},l.a.createElement(f.a,{style:{color:"white"}},"Home"===e&&l.a.createElement(N.a,null),"About"===e&&l.a.createElement(O.a,null),"Team"===e&&l.a.createElement(R.a,null),"Contact"===e&&l.a.createElement(T.a,null)),l.a.createElement(h.a,{primary:"".concat(e),style:{color:"white"}}))})))),Z=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"close-section"},l.a.createElement(z.a,{"aria-label":"open drawer",onClick:Y},l.a.createElement(P.a,null)),l.a.createElement(L.a,{style:{backgroundColor:"#E6E6E6"}})),l.a.createElement("div",{className:"cart-section"},0!==o.length?o.map((function(e,t){return l.a.createElement(F,{key:t,id:e.id,image:e.image,name:e.name,price:e.price,size:e.size,colour:e.colour,quantity:e.quantity,onRemove:V})})):l.a.createElement("div",{style:{textAlign:"center",margin:"3rem"}},l.a.createElement("h2",null,"Your shopping cart is currently empty"),l.a.createElement("p",null," Add some garments and view them here."))),l.a.createElement("div",{className:"checkout-section"},l.a.createElement(L.a,null),l.a.createElement("div",{className:"total-price"},l.a.createElement("h3",null,"Total"),l.a.createElement("h3",null,"$",j.toFixed(2))),l.a.createElement(L.a,null),l.a.createElement("div",{className:"nav-section"},l.a.createElement(m.c,{to:"/".concat(t.username,"/catalogue"),style:{textDecoration:"none",color:"white"}},l.a.createElement(d.a,{variant:"outlined"},l.a.createElement("p",null,"ADD MORE TO CART"))),l.a.createElement(m.c,{to:"/".concat(t.username,"/checkout"),style:{textDecoration:"none",color:"white"}},l.a.createElement(d.a,{variant:"contained",style:{backgroundColor:"black",color:"white"}},l.a.createElement("p",null,"PROCEED TO CHECKOUT")))))),ee=void 0!==S?function(){return S().document.body}:void 0;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null),l.a.createElement(_.a,{position:"fixed",className:I.appBar},l.a.createElement(q.a,{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(z.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:$,className:I.menuButton},l.a.createElement(B.a,null)),l.a.createElement("h1",null," Hello ",t.username," "),"adminstaff"!==t.username&&l.a.createElement(z.a,{color:"inherit","aria-label":"open shopCart",edge:"end",onClick:Y,className:I.shopButton},l.a.createElement(G.a,{userId:t.userId,change:o})))),l.a.createElement("nav",{className:I.drawer,"aria-label":"mailbox folders"},l.a.createElement(g.a,{lgUp:!0,implementation:"css"},l.a.createElement(E.a,{container:ee,variant:"temporary",anchor:"left",open:H,onClose:$,classes:{paper:I.drawerPaper},ModalProps:{keepMounted:!0}},X)),l.a.createElement(g.a,{mdDown:!0,implementation:"css"},l.a.createElement(E.a,{classes:{paper:I.drawerPaper},variant:"permanent",open:!0},X)),"adminstaff"!==t.username&&l.a.createElement(g.a,{lgUp:!0,implementation:"css"},l.a.createElement(E.a,{container:ee,variant:"temporary",anchor:"right",open:Q,onClose:Y,classes:{paper:I.shopDrawer},ModalProps:{keepMounted:!0}},Z))))},J=(a(68),Object(o.a)((function(e){return{menuButton:Object(n.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)}}})));t.a=function(e){var t=J();return l.a.createElement("div",{className:"dashboard"},l.a.createElement(c.a,null),l.a.createElement(H,{user:e.user,onAdd:e.onAdd}),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.toolbar}),e.children))}}}]);
//# sourceMappingURL=20.10645a7a.chunk.js.map