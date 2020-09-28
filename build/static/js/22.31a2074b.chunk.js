(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[22],{41:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=a(552),i=a(49),s=(a(51),function(e){var t=r.a.createElement("div",{className:"modal ".concat("form_modal"===e.className?"form_modal":"info_modal"),style:{height:"".concat(e.height)}},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("div",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return l.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(i.a,{onClick:e.onCancel}),r.a.createElement(o.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(s,e)))}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(42),r=a.n(n),c=a(43),l=a(8),o=a(0),i=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(o.useRef)([]),p=Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,l,o,i,s,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,l=u.length>3&&void 0!==u[3]?u[3]:{},n(!0),o=new AbortController,d.current.push(o),e.prev=6,e.next=9,fetch(t,{method:a,body:c,headers:l,signal:o.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(s=e.sent,d.current=d.current.filter((function(e){return e!==o})),i.ok){e.next=16;break}throw new Error(s.message);case 16:return n(!1),e.abrupt("return",s);case 20:throw e.prev=20,e.t0=e.catch(6),m(e.t0.message),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:u,sendRequest:p,clearError:function(){m(null)}}}},48:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(41),l=a(346);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:e.header,show:!!e.error,footer:r.a.createElement(l.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},49:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(13),l=a.n(c);a(50);t.a=function(e){return l.a.createPortal(r.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";var n=a(8),r=a(0),c=a.n(r),l=a(524),o=a(81),i=a.n(o),s=a(35),u=Object(s.a)((function(e){return{badge:{right:-8,top:13,padding:"0 6px"}}}))(l.a);t.a=function(e){var t=Object(r.useState)(0),a=Object(n.a)(t,2),l=a[0],o=a[1],s=Object(r.useState)([]),m=Object(n.a)(s,2),d=m[0],p=m[1];return Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e.userId));t||(localStorage.setItem(e.userId,JSON.stringify([])),t=JSON.parse(localStorage.getItem(e.userId))),p(t)}),[e.change,e.userId]),Object(r.useEffect)((function(){var e=0;0===d.length?o(0):d.forEach((function(t){o((function(){return e+=parseInt(t.quantity)}))}))}),[d]),c.a.createElement(u,{badgeContent:l,color:"secondary"},c.a.createElement(i.a,{style:{marginRight:"0.5rem"}}))}},557:function(e,t,a){"use strict";a.r(t);var n=a(84),r=a(42),c=a.n(r),l=a(43),o=a(8),i=a(0),s=a.n(i),u=a(70),m=a(62),d=a(279),p=a(395),E=a(346),f=a(35),g=a(282),y=a(564),h=a(281),b=a(419),v=a(367),x=a(81),O=a.n(x),C=Object(f.a)({root:{color:"black",margin:"2rem",width:"22rem"}})(d.a),w=function(e){return s.a.createElement(C,null,s.a.createElement(m.c,{initialValues:{image:e.image,id:e.id,name:e.name,category:e.category,styleNum:e.styleNum,price:e.price,size:e.sizes[0],colour:e.colours[0],quantity:1,subtotal:1},enableReinitialize:!0,onSubmit:function(t,a){var n=a.setSubmitting;n(!0),t.subtotal=t.price*t.quantity,e.onAdd(t),n(!1)}},(function(t){var a=t.values,n=t.isSubmitting,r=t.handleChange;return s.a.createElement(m.b,null,s.a.createElement(h.a,{component:"img",style:{height:"350px",width:"100%",objectFit:"contain"},src:e.image}),s.a.createElement(g.a,{style:{marginLeft:"2rem",marginRight:"2rem"}},s.a.createElement("h2",{style:{marginTop:"0"}},e.name),s.a.createElement("div",null,s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("h4",{style:{fontWeight:"bold",margin:"2px 1px 2px 1px"}},"Category:"),s.a.createElement("p",{style:{margin:"2px 0 2px auto"}},e.category)),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("h4",{style:{fontWeight:"bold",margin:"2px 1px 2px 1px"}},"Style Num:"),s.a.createElement("p",{style:{margin:"2px 0 2px auto"}},e.styleNum)),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("h4",{style:{fontWeight:"bold",margin:"2px 1px 2px 1px"}},"Price:"),s.a.createElement("p",{style:{margin:"2px 0 2px auto"}},"$",e.price))),s.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem"}},s.a.createElement(v.a,{variant:"outlined"},s.a.createElement("h3",{style:{margin:"2px 0 0.5rem 0"}},"Sizes:"),s.a.createElement(b.a,{name:"size",value:a.size,onChange:r,style:{width:"6rem"}},e.sizes.map((function(e,t){return s.a.createElement(p.a,{key:t,value:e+""},e)})))),s.a.createElement(v.a,{variant:"outlined"},s.a.createElement("h3",{style:{margin:"2px 0 0.5rem "}},"Colours:"),s.a.createElement(b.a,{name:"colour",value:a.colour,onChange:r,style:{width:"8rem"}},e.colours.map((function(e,t){return s.a.createElement(p.a,{key:t,value:e+""},e)}))))),s.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem"}},s.a.createElement(v.a,{variant:"outlined"},s.a.createElement("h3",{style:{margin:"2px 0 0.5rem "}},"Quantity:"),s.a.createElement(y.a,{type:"number",name:"quantity",inputProps:{min:"1"},value:a.quantity,onChange:r,style:{width:"6rem"}})),s.a.createElement(E.a,{style:{backgroundColor:"black",color:"white",height:"3.5rem",marginTop:"auto"},variant:"contained",color:"default",startIcon:s.a.createElement(O.a,null),disabled:n,type:"submit"},"Add to cart"))))})))},j=a(365),k=a(46),S=a(15),N=a(16),B=a(48);t.default=function(e){var t=Object(i.useContext)(S.a),a=Object(k.a)(),r=a.isLoading,m=a.error,d=a.sendRequest,p=a.clearError,f={sortNum:function(e){return e.sort((function(e,t){return parseFloat(t.price)-parseFloat(e.price)}))},sortString:function(e,t){return"name"===t?e.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0})):e.sort((function(e,t){var a=e.category.toLowerCase(),n=t.category.toLowerCase();return a<n?-1:a>n?1:0}))},filterGarments:function(e,t){return e.filter((function(e){return!0===e.name.toLowerCase().includes(t.toLowerCase())}))}},g=f.sortNum,y=f.sortString,h=f.filterGarments,b=Object(i.useState)([]),v=Object(o.a)(b,2),x=v[0],O=v[1],C=Object(i.useState)([]),I=Object(o.a)(C,2),A=I[0],L=I[1],z=Object(i.useState)(""),R=Object(o.a)(z,2),q=R[0],T=R[1];Object(i.useEffect)((function(){(function(){var e=Object(l.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("".concat("https://radiant-journey-52325.herokuapp.com/api","/garments/user/").concat(t.userId),"GET",null,{Authorization:"Bearer "+t.token});case 3:a=e.sent,O(a.garments),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t.userId,t.token,d]),Object(i.useEffect)((function(){L(Object(n.a)(x))}),[x]);var P=Object(i.useState)([]),D=Object(o.a)(P,2),J=D[0],_=D[1],G=function(e){var a=localStorage.getItem(t.userId);a=JSON.parse(a);var r=Object(n.a)(a),c=e.id,l=e.size,o=e.colour,i=r.find((function(e){return e.id===c&&e.size===l&&e.colour===o}));i?i.quantity+=e.quantity:r.push(e),_(r);var s=JSON.stringify(r);localStorage.setItem(t.userId,s)};return s.a.createElement(u.a,{user:"client",onAdd:J},s.a.createElement("div",{style:{marginLeft:"4rem",marginRight:"4rem",marginTop:"3rem"}},s.a.createElement("h1",null,"Your Catalogue"),s.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},s.a.createElement("div",null,s.a.createElement(E.a,{color:"primary",onClick:function(){return L(Object(n.a)(x))}},"Reset to default"),s.a.createElement(E.a,{color:"primary",onClick:function(){return L(Object(n.a)(y(A,"name")))}},"Sort by Name"),s.a.createElement(E.a,{color:"primary",onClick:function(){return L(Object(n.a)(y(A,"category")))}},"Sort by Category"),s.a.createElement(E.a,{color:"primary",onClick:function(){return L(Object(n.a)(g(A)))}},"Sort by Price")),s.a.createElement(j.a,{style:{verticalAlign:"baseline",backgroundColor:"white"},id:"standard-basic",value:q,onChange:function(e){T(e.target.value),L(Object(n.a)(h(x,e.target.value)))},variant:"outlined",label:"Search"}))),s.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},s.a.createElement(B.a,{header:"An Error Occured",error:m,onClear:p}),r?s.a.createElement("div",{style:{placeItems:"center"}},s.a.createElement(N.a,null)):A.length>0||r?A.map((function(e,t){return s.a.createElement(w,{key:t,image:e.image,id:e.id,name:e.name,category:e.category,styleNum:e.styleNum,price:e.price,colours:e.colours,sizes:e.sizes,onAdd:G})})):s.a.createElement("h2",null,"Search returned no results. Please adjust filter.")))}},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";var n=a(64),r=a(0),c=a.n(r),l=a(537),o=a(375),i=a(84),s=a(8),u=a(14),m=a(15),d=a(346),p=a(532),E=a(386),f=a(535),g=a(382),y=a(558),h=a(107),b=a.n(h),v=a(89),x=a.n(v),O=a(108),C=a.n(O),w=a(109),j=a.n(w),k=a(113),S=a.n(k),N=a(110),B=a.n(N),I=a(111),A=a.n(I),L=a(112),z=a.n(L),R=a(57),q=a.n(R),T=a(536),P=a(538),D=a(385),J=a(384),_=function(e){return c.a.createElement("div",{style:{display:"flex",marginLeft:"1rem",marginRight:"1rem",marginTop:"1.8rem",marginBottom:"1.8rem"}},c.a.createElement("img",{style:{height:"75px",width:"75px"},src:e.image,alt:"garment"}),c.a.createElement("div",{style:{marginLeft:"1.2rem"}},c.a.createElement("h3",{style:{margin:0,paddingBottom:"1rem"}},e.name),c.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},c.a.createElement("div",null,c.a.createElement("p",{style:{margin:0,padding:0}},"Price: $",e.price),c.a.createElement("p",{style:{margin:0,padding:0}},"Quantity: ",e.quantity)),c.a.createElement("div",{style:{marginLeft:"1rem"}},c.a.createElement("p",{style:{margin:0,padding:0}},"Size: ",e.size),c.a.createElement("p",{style:{margin:0,padding:0}},"Colour: ",e.colour)))),c.a.createElement(q.a,{onClick:function(){return e.onRemove(e)},fontSize:"small",style:{cursor:"pointer",display:"block",marginLeft:"auto",marginBottom:"auto",color:"grey"}}))},G=(a(67),a(52)),F=Object(o.a)((function(e){var t;return{drawer:Object(n.a)({},e.breakpoints.up("lg"),{width:350,flexShrink:0}),appBar:(t={},Object(n.a)(t,e.breakpoints.up("lg"),{width:"calc(100% - ".concat(350,"px)"),marginLeft:350}),Object(n.a)(t,"backgroundColor","black"),t),menuButton:Object(n.a)({marginRight:e.spacing(2)},e.breakpoints.up("lg"),{display:"none"}),shopButton:{marginRight:e.spacing(2)},toolbar:e.mixins.toolbar,drawerPaper:{width:350,backgroundColor:"#212121"},shopDrawer:{width:400,backgroundColor:"white"},content:{flexGrow:1,padding:e.spacing(3)}}})),H=function(e){var t=Object(r.useContext)(m.a),a=Object(r.useState)([]),n=Object(s.a)(a,2),o=n[0],h=n[1],v=Object(r.useState)(0),O=Object(s.a)(v,2),w=O[0],k=O[1],N=e.window,I=F();Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem(t.userId));h(e)}),[e.onAdd,t.userId]),Object(r.useEffect)((function(){var e=0;0===o.length?k(0):o.forEach((function(t){k((function(){return e+=t.quantity*t.price}))}))}),[o]);var L=Object(r.useState)(!1),R=Object(s.a)(L,2),H=R[0],M=R[1],W=function(){M(!H)},U=Object(r.useState)(!1),$=Object(s.a)(U,2),Q=$[0],Y=$[1],K=function(){Y(!Q)},V=function(e){var a=Object(i.a)(o);a=a.filter((function(t){return t.id!==e.id||t.colour!==e.colour||t.size!==e.size})),h(a);var n=JSON.stringify(a);localStorage.setItem(t.userId,n)},X=c.a.createElement("div",null,c.a.createElement("div",{className:I.toolbar}),c.a.createElement("h2",{style:{color:"white",paddingLeft:"1rem"}},"Actions "),c.a.createElement(p.a,{style:{color:"#B3B3B3"}},"adminstaff"===e.user&&["Orders","Headquarters","Garments"].map((function(e,t){return c.a.createElement(u.c,{key:t,to:"/admin/".concat(e.charAt(0).toLowerCase()+e.slice(1)),style:{display:"flex",padding:"8px 16px 8px 16px",textDecoration:"none",color:"#B3B3B3"}},c.a.createElement(f.a,{style:{color:"white"}},"Orders"===e&&c.a.createElement(b.a,null),"Headquarters"===e&&c.a.createElement(C.a,null),"Garments"===e&&c.a.createElement(j.a,null)),c.a.createElement(g.a,{primary:"".concat(e),style:{color:"white"}}))})),"client"===e.user&&["Orders","Catalogue","Checkout"].map((function(e,a){return c.a.createElement(u.c,{key:a,to:"/".concat(t.username,"/").concat(e.charAt(0).toLowerCase()+e.slice(1)),style:{display:"flex",padding:"8px 16px 8px 16px",textDecoration:"none",color:"#B3B3B3"}},c.a.createElement(f.a,{style:{color:"white"}},"Orders"===e&&c.a.createElement(b.a,null),"Catalogue"===e&&c.a.createElement(C.a,null),"Checkout"===e&&c.a.createElement(j.a,null)),c.a.createElement(g.a,{primary:"".concat(e),style:{color:"white"}}))}))),c.a.createElement(T.a,{style:{backgroundColor:"grey"}}),c.a.createElement("h2",{style:{color:"white",paddingLeft:"1rem"}},"Pages"),c.a.createElement(p.a,{style:{color:"#B3B3B3"}},["Home","About","Team","Contact"].map((function(e,t){return c.a.createElement(u.c,{key:t,to:"/".concat(0===t?"":e.charAt(0).toLowerCase()+e.slice(1)),style:{display:"flex",padding:"8px 16px 8px 16px",textDecoration:"none",color:"#B3B3B3"}},c.a.createElement(f.a,{style:{color:"white"}},"Home"===e&&c.a.createElement(B.a,null),"About"===e&&c.a.createElement(x.a,null),"Team"===e&&c.a.createElement(A.a,null),"Contact"===e&&c.a.createElement(z.a,null)),c.a.createElement(g.a,{primary:"".concat(e),style:{color:"white"}}))})))),Z=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"close-section"},c.a.createElement(J.a,{"aria-label":"open drawer",onClick:K},c.a.createElement(q.a,null)),c.a.createElement(T.a,{style:{backgroundColor:"#E6E6E6"}})),c.a.createElement("div",{className:"cart-section"},0!==o.length?o.map((function(e,t){return c.a.createElement(_,{key:t,id:e.id,image:e.image,name:e.name,price:e.price,size:e.size,colour:e.colour,quantity:e.quantity,onRemove:V})})):c.a.createElement("div",{style:{textAlign:"center",margin:"3rem"}},c.a.createElement("h2",null,"Your shopping cart is currently empty"),c.a.createElement("p",null," Add some garments and view them here."))),c.a.createElement("div",{className:"checkout-section"},c.a.createElement(T.a,null),c.a.createElement("div",{className:"total-price"},c.a.createElement("h3",null,"Total"),c.a.createElement("h3",null,"$",w.toFixed(2))),c.a.createElement(T.a,null),c.a.createElement("div",{className:"nav-section"},c.a.createElement(u.c,{to:"/".concat(t.username,"/catalogue"),style:{textDecoration:"none",color:"white"}},c.a.createElement(d.a,{variant:"outlined"},c.a.createElement("p",null,"ADD MORE TO CART"))),c.a.createElement(u.c,{to:"/".concat(t.username,"/checkout"),style:{textDecoration:"none",color:"white"}},c.a.createElement(d.a,{variant:"contained",style:{backgroundColor:"black",color:"white"}},c.a.createElement("p",null,"PROCEED TO CHECKOUT")))))),ee=void 0!==N?function(){return N().document.body}:void 0;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null),c.a.createElement(P.a,{position:"fixed",className:I.appBar},c.a.createElement(D.a,{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement(J.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:W,className:I.menuButton},c.a.createElement(S.a,null)),c.a.createElement("h1",null," Hello ",t.username," "),"adminstaff"!==t.username&&c.a.createElement(J.a,{color:"inherit","aria-label":"open shopCart",edge:"end",onClick:K,className:I.shopButton},c.a.createElement(G.a,{userId:t.userId,change:o})))),c.a.createElement("nav",{className:I.drawer,"aria-label":"mailbox folders"},c.a.createElement(y.a,{lgUp:!0,implementation:"css"},c.a.createElement(E.a,{container:ee,variant:"temporary",anchor:"left",open:H,onClose:W,classes:{paper:I.drawerPaper},ModalProps:{keepMounted:!0}},X)),c.a.createElement(y.a,{mdDown:!0,implementation:"css"},c.a.createElement(E.a,{classes:{paper:I.drawerPaper},variant:"permanent",open:!0},X)),"adminstaff"!==t.username&&c.a.createElement(y.a,{lgUp:!0,implementation:"css"},c.a.createElement(E.a,{container:ee,variant:"temporary",anchor:"right",open:Q,onClose:K,classes:{paper:I.shopDrawer},ModalProps:{keepMounted:!0}},Z))))},M=(a(68),Object(o.a)((function(e){return{menuButton:Object(n.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)}}})));t.a=function(e){var t=M();return c.a.createElement("div",{className:"dashboard"},c.a.createElement(l.a,null),c.a.createElement(H,{user:e.user,onAdd:e.onAdd}),c.a.createElement("main",{className:t.content},c.a.createElement("div",{className:t.toolbar}),e.children))}}}]);
//# sourceMappingURL=22.31a2074b.chunk.js.map