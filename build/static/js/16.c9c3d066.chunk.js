(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[16],{41:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=a(553),i=a(49),s=(a(51),function(e){var t=r.a.createElement("div",{className:"modal ".concat("form_modal"===e.className?"form_modal":"info_modal"),style:{height:"".concat(e.height)}},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("div",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return l.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(i.a,{onClick:e.onCancel}),r.a.createElement(o.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(s,e)))}},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(42),r=a.n(n),c=a(43),l=a(8),o=a(0),i=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(o.useRef)([]),p=Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,l,o,i,s,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,l=u.length>3&&void 0!==u[3]?u[3]:{},n(!0),o=new AbortController,d.current.push(o),e.prev=6,e.next=9,fetch(t,{method:a,body:c,headers:l,signal:o.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(s=e.sent,d.current=d.current.filter((function(e){return e!==o})),i.ok){e.next=16;break}throw new Error(s.message);case 16:return n(!1),e.abrupt("return",s);case 20:throw e.prev=20,e.t0=e.catch(6),m(e.t0.message),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:u,sendRequest:p,clearError:function(){m(null)}}}},48:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(41),l=a(346);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:e.header,show:!!e.error,footer:r.a.createElement(l.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},49:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(13),l=a.n(c);a(50);t.a=function(e){return l.a.createPortal(r.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},50:function(e,t,a){},509:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";var n=a(8),r=a(0),c=a.n(r),l=a(525),o=a(83),i=a.n(o),s=a(35),u=Object(s.a)((function(e){return{badge:{right:-8,top:13,padding:"0 6px"}}}))(l.a);t.a=function(e){var t=Object(r.useState)(0),a=Object(n.a)(t,2),l=a[0],o=a[1],s=Object(r.useState)([]),m=Object(n.a)(s,2),d=m[0],p=m[1];return Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e.userId));t||(localStorage.setItem(e.userId,JSON.stringify([])),t=JSON.parse(localStorage.getItem(e.userId))),p(t)}),[e.change,e.userId]),Object(r.useEffect)((function(){var e=0;0===d.length?o(0):d.forEach((function(t){o((function(){return e+=parseInt(t.quantity)}))}))}),[d]),c.a.createElement(u,{badgeContent:l,color:"secondary"},c.a.createElement(i.a,{style:{marginRight:"0.5rem"}}))}},557:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),l=a(42),o=a.n(l),i=a(43),s=a(8),u=(a(509),a(45)),m=a(15),d=a(391),p=a(393),E=a(394),f=a(395),h=a(48),g=a(16),b=function(e){var t=Object(n.useContext)(m.a),a=Object(u.a)(),c=a.isLoading,l=a.error,b=a.sendRequest,y=a.clearError,v=Object(n.useState)(""),O=Object(s.a)(v,2),w=O[0],j=O[1],x=Object(n.useState)(""),k=Object(s.a)(x,2),C=k[0],B=k[1],N=Object(n.useState)(""),S=Object(s.a)(N,2),I=S[0],A=S[1],R=Object(n.useState)(""),D=Object(s.a)(R,2),L=D[0],q=D[1],T=Object(n.useState)(""),P=Object(s.a)(T,2),_=P[0],z=P[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("".concat("https://radiant-journey-52325.herokuapp.com/api","/branches/user/").concat(t.userId),"GET",null,{Authorization:"Bearer "+t.token});case 3:a=e.sent,j(a.userBranch.hq.image),B(a.userBranch.branch.name),A(a.userBranch.branch.address),q(a.userBranch.branch.telephone),z(a.userBranch.branch.email),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[b,t.token,t.userId]),r.a.createElement("div",{className:"profile_section"},r.a.createElement("div",{className:"hq_logo"},c?r.a.createElement("div",{style:{width:"250px",height:"250px",display:"grid",placeItems:"center"}},r.a.createElement(g.a,null)):r.a.createElement("img",{style:{width:"250px",height:"250px"},alt:"organisation logo",src:w})),r.a.createElement("div",{className:"info"},r.a.createElement(h.a,{header:"An Error Occured",error:l,onClear:y}),r.a.createElement(d.a,null,r.a.createElement(p.a,null,c?r.a.createElement("div",{style:{width:"30rem",height:"15rem",display:"grid",placeItems:"center"}},r.a.createElement(g.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{align:"left"},"Name: "),r.a.createElement(E.a,{align:"left"},C)),r.a.createElement(f.a,null,r.a.createElement(E.a,{align:"left"},"Address: "),r.a.createElement(E.a,{align:"left"},I)),r.a.createElement(f.a,null,r.a.createElement(E.a,{align:"left"},"Telephone: "),r.a.createElement(E.a,{align:"left"},L)),r.a.createElement(f.a,null,r.a.createElement(E.a,{align:"left"},"Email: "),r.a.createElement(E.a,{align:"left"},_)))))))},y=a(14),v=a(346),O=a(90),w=a.n(O),j=(a(98),a(73)),x=function(e){var t=Object(n.useContext)(m.a),a=Object(u.a)(),c=a.isLoading,l=a.error,d=a.sendRequest,p=a.clearError,E=Object(n.useState)([]),f=Object(s.a)(E,2),h=f[0],g=f[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("".concat("https://radiant-journey-52325.herokuapp.com/api","/orders/user/").concat(t.userId),"GET",null,{Authorization:"Bearer "+t.token});case 3:a=e.sent,g(a.orders),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[d,t.token,t.userId]);var b=[{name:"_id",options:{display:!1},label:"ID"},{name:"date",label:"Order Date",options:{sortCompare:function(e){return function(t,a){return(Date.parse(t.data)-Date.parse(a.data))*("asc"===e?1:-1)}}}},{name:"hq",label:"HQ",options:{customBodyRender:function(e){return e.name}}},{name:"branch",label:"Branch",options:{customBodyRender:function(e){return e.name}}},{name:"actions",label:"Actions",options:{customBodyRender:function(e,a,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"contained",color:"default",startIcon:r.a.createElement(w.a,null),style:{marginRight:"5%"},component:y.c,to:"/".concat(t.username,"/orders/").concat(a.rowData[0])},"View"))}}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{height:"29rem",error:l,clearError:p,isLoading:c,Datas:h,columns:b,options:{tableBodyHeight:"27rem",rowsPerPage:10,print:!1,download:!1,elevation:1,sortOrder:{name:"date",direction:"desc"},selectableRows:"none"}}))};t.default=function(e){return r.a.createElement(c.a,{user:"client"},r.a.createElement("div",{style:{marginLeft:"4rem",marginRight:"4rem",marginTop:"3rem"}},r.a.createElement("h1",null,"Branch Information"),r.a.createElement(b,null),r.a.createElement("h1",null,"Your Orders"),r.a.createElement(x,null)))}},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";var n=a(64),r=a(0),c=a.n(r),l=a(538),o=a(375),i=a(81),s=a(8),u=a(14),m=a(15),d=a(346),p=a(533),E=a(386),f=a(536),h=a(382),g=a(559),b=a(107),y=a.n(b),v=a(90),O=a.n(v),w=a(108),j=a.n(w),x=a(109),k=a.n(x),C=a(113),B=a.n(C),N=a(110),S=a.n(N),I=a(111),A=a.n(I),R=a(112),D=a.n(R),L=a(57),q=a.n(L),T=a(537),P=a(539),_=a(385),z=a(384),F=function(e){return c.a.createElement("div",{style:{display:"flex",marginLeft:"1rem",marginRight:"1rem",marginTop:"1.8rem",marginBottom:"1.8rem"}},c.a.createElement("img",{style:{height:"75px",width:"75px"},src:e.image,alt:"garment"}),c.a.createElement("div",{style:{marginLeft:"1.2rem"}},c.a.createElement("h3",{style:{margin:0,paddingBottom:"1rem"}},e.name),c.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},c.a.createElement("div",null,c.a.createElement("p",{style:{margin:0,padding:0}},"Price: $",e.price),c.a.createElement("p",{style:{margin:0,padding:0}},"Quantity: ",e.quantity)),c.a.createElement("div",{style:{marginLeft:"1rem"}},c.a.createElement("p",{style:{margin:0,padding:0}},"Size: ",e.size),c.a.createElement("p",{style:{margin:0,padding:0}},"Colour: ",e.colour)))),c.a.createElement(q.a,{onClick:function(){return e.onRemove(e)},fontSize:"small",style:{cursor:"pointer",display:"block",marginLeft:"auto",marginBottom:"auto",color:"grey"}}))},H=(a(67),a(52)),G=Object(o.a)((function(e){var t;return{drawer:Object(n.a)({},e.breakpoints.up("lg"),{width:310,flexShrink:0}),appBar:(t={},Object(n.a)(t,e.breakpoints.up("lg"),{width:"calc(100% - ".concat(310,"px)"),marginLeft:310}),Object(n.a)(t,"backgroundColor","black"),t),menuButton:Object(n.a)({marginRight:e.spacing(2)},e.breakpoints.up("lg"),{display:"none"}),shopButton:{marginRight:e.spacing(2)},toolbar:e.mixins.toolbar,drawerPaper:{width:310,backgroundColor:"#212121"},shopDrawer:{width:400,backgroundColor:"white"},content:{flexGrow:1,padding:e.spacing(3)}}})),J=function(e){var t=Object(r.useContext)(m.a),a=Object(r.useState)([]),n=Object(s.a)(a,2),o=n[0],b=n[1],v=Object(r.useState)(0),w=Object(s.a)(v,2),x=w[0],C=w[1],N=e.window,I=G();Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem(t.userId));b(e)}),[e.onAdd,t.userId]),Object(r.useEffect)((function(){var e=0;0===o.length?C(0):o.forEach((function(t){C((function(){return e+=t.quantity*t.price}))}))}),[o]);var R=Object(r.useState)(!1),L=Object(s.a)(R,2),J=L[0],M=L[1],U=function(){M(!J)},Q=Object(r.useState)(!1),Y=Object(s.a)(Q,2),$=Y[0],K=Y[1],V=function(){K(!$)},W=function(e){var a=Object(i.a)(o);a=a.filter((function(t){return t.id!==e.id||t.colour!==e.colour||t.size!==e.size})),b(a);var n=JSON.stringify(a);localStorage.setItem(t.userId,n)},X=c.a.createElement("div",null,c.a.createElement("div",{className:I.toolbar}),c.a.createElement("h2",{style:{color:"white",paddingLeft:"1rem"}},"Actions "),c.a.createElement(p.a,{style:{color:"#B3B3B3"}},"adminstaff"===e.user&&["Orders","Headquarters","Garments"].map((function(e,t){return c.a.createElement(u.c,{key:t,to:"/admin/".concat(e.charAt(0).toLowerCase()+e.slice(1)),style:{display:"flex",padding:"8px 16px 8px 16px",textDecoration:"none",color:"#B3B3B3"}},c.a.createElement(f.a,{style:{color:"white"}},"Orders"===e&&c.a.createElement(y.a,null),"Headquarters"===e&&c.a.createElement(j.a,null),"Garments"===e&&c.a.createElement(k.a,null)),c.a.createElement(h.a,{primary:"".concat(e),style:{color:"white"}}))})),"client"===e.user&&["Orders","Catalogue","Checkout"].map((function(e,a){return c.a.createElement(u.c,{key:a,to:"/".concat(t.username,"/").concat(e.charAt(0).toLowerCase()+e.slice(1)),style:{display:"flex",padding:"8px 16px 8px 16px",textDecoration:"none",color:"#B3B3B3"}},c.a.createElement(f.a,{style:{color:"white"}},"Orders"===e&&c.a.createElement(y.a,null),"Catalogue"===e&&c.a.createElement(j.a,null),"Checkout"===e&&c.a.createElement(k.a,null)),c.a.createElement(h.a,{primary:"".concat(e),style:{color:"white"}}))}))),c.a.createElement(T.a,{style:{backgroundColor:"grey"}}),c.a.createElement("h2",{style:{color:"white",paddingLeft:"1rem"}},"Pages"),c.a.createElement(p.a,{style:{color:"#B3B3B3"}},["Home","About","Team","Contact"].map((function(e,t){return c.a.createElement(u.c,{key:t,to:"/".concat(0===t?"":e.charAt(0).toLowerCase()+e.slice(1)),style:{display:"flex",padding:"8px 16px 8px 16px",textDecoration:"none",color:"#B3B3B3"}},c.a.createElement(f.a,{style:{color:"white"}},"Home"===e&&c.a.createElement(S.a,null),"About"===e&&c.a.createElement(O.a,null),"Team"===e&&c.a.createElement(A.a,null),"Contact"===e&&c.a.createElement(D.a,null)),c.a.createElement(h.a,{primary:"".concat(e),style:{color:"white"}}))})))),Z=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"close-section"},c.a.createElement(z.a,{"aria-label":"open drawer",onClick:V},c.a.createElement(q.a,null)),c.a.createElement(T.a,{style:{backgroundColor:"#E6E6E6"}})),c.a.createElement("div",{className:"cart-section"},0!==o.length?o.map((function(e,t){return c.a.createElement(F,{key:t,id:e.id,image:e.image,name:e.name,price:e.price,size:e.size,colour:e.colour,quantity:e.quantity,onRemove:W})})):c.a.createElement("div",{style:{textAlign:"center",margin:"3rem"}},c.a.createElement("h2",null,"Your shopping cart is currently empty"),c.a.createElement("p",null," Add some garments and view them here."))),c.a.createElement("div",{className:"checkout-section"},c.a.createElement(T.a,null),c.a.createElement("div",{className:"total-price"},c.a.createElement("h3",null,"Total"),c.a.createElement("h3",null,"$",x.toFixed(2))),c.a.createElement(T.a,null),c.a.createElement("div",{className:"nav-section"},c.a.createElement(u.c,{to:"/".concat(t.username,"/catalogue"),style:{textDecoration:"none",color:"white"}},c.a.createElement(d.a,{variant:"outlined"},c.a.createElement("p",null,"ADD MORE TO CART"))),c.a.createElement(u.c,{to:"/".concat(t.username,"/checkout"),style:{textDecoration:"none",color:"white"}},c.a.createElement(d.a,{variant:"contained",style:{backgroundColor:"black",color:"white"}},c.a.createElement("p",null,"PROCEED TO CHECKOUT")))))),ee=void 0!==N?function(){return N().document.body}:void 0;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null),c.a.createElement(P.a,{position:"fixed",className:I.appBar},c.a.createElement(_.a,{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement(z.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:U,className:I.menuButton},c.a.createElement(B.a,null)),c.a.createElement("h1",null," Hello ",t.username," "),"adminstaff"!==t.username&&c.a.createElement(z.a,{color:"inherit","aria-label":"open shopCart",edge:"end",onClick:V,className:I.shopButton},c.a.createElement(H.a,{userId:t.userId,change:o})))),c.a.createElement("nav",{className:I.drawer,"aria-label":"mailbox folders"},c.a.createElement(g.a,{lgUp:!0,implementation:"css"},c.a.createElement(E.a,{container:ee,variant:"temporary",anchor:"left",open:J,onClose:U,classes:{paper:I.drawerPaper},ModalProps:{keepMounted:!0}},X)),c.a.createElement(g.a,{mdDown:!0,implementation:"css"},c.a.createElement(E.a,{classes:{paper:I.drawerPaper},variant:"permanent",open:!0},X)),"adminstaff"!==t.username&&c.a.createElement(g.a,{lgUp:!0,implementation:"css"},c.a.createElement(E.a,{container:ee,variant:"temporary",anchor:"right",open:$,onClose:V,classes:{paper:I.shopDrawer},ModalProps:{keepMounted:!0}},Z))))},M=(a(68),Object(o.a)((function(e){return{menuButton:Object(n.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)}}})));t.a=function(e){var t=M();return c.a.createElement("div",{className:"dashboard"},c.a.createElement(l.a,null),c.a.createElement(J,{user:e.user,onAdd:e.onAdd}),c.a.createElement("main",{className:t.content},c.a.createElement("div",{className:t.toolbar}),e.children))}},73:function(e,t,a){"use strict";var n=a(374),r=a(122),c=a.n(r),l=a(0),o=a.n(l),i=a(48),s=a(16);t.a=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{header:"An Error Occured",error:e.error,onClear:e.clearError}),e.isLoading&&o.a.createElement("div",null,o.a.createElement(n.a,{style:{width:"100%",height:e.height,display:"grid",placeItems:"center"}},o.a.createElement(s.a,null))),!e.isLoading&&o.a.createElement(c.a,{className:"table-center",data:e.Datas,columns:e.columns,options:e.options}))}},98:function(e,t,a){}}]);
//# sourceMappingURL=16.c9c3d066.chunk.js.map