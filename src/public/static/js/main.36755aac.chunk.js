(this["webpackJsonpparrot-friendship-society"]=this["webpackJsonpparrot-friendship-society"]||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/birds.947bf8a9.svg"},29:function(e,a,t){e.exports=t.p+"static/media/404.200fa0f2.svg"},31:function(e,a,t){e.exports=t(65)},36:function(e,a,t){},37:function(e,a,t){},55:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(26),r=t.n(c),m=(t(36),t(37),t(7)),s=t(1),i=t(9),o=t(10),u=t.n(o);t(55);var p=function(){var e=Object(s.h)().path,a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(!1),p=Object(i.a)(o,2),f=p[0],_=p[1];return Object(n.useEffect)((function(){f||(u.a.get("/users").then((function(e){r(e.data)})),_(!0))}),[c,f,_,r]),l.a.createElement("div",{className:"friends"},l.a.createElement("ul",{className:"friends__list"},c.map((function(a){return l.a.createElement("li",{className:"friend-preview",key:a._id},l.a.createElement(m.b,{to:"".concat(e,"/").concat(a._id)},l.a.createElement("img",{className:"friend-preview__image",src:a.profilePic,alt:""}),l.a.createElement("span",{className:"friend-preview__name"},a.name)))}))))};t(61);var f=function(){var e=Object(s.g)().id,a=Object(s.f)(),t=Object(n.useState)(!1),c=Object(i.a)(t,2),r=c[0],m=c[1],o=Object(n.useState)({}),p=Object(i.a)(o,2),f=p[0],_=p[1];return Object(n.useEffect)((function(){r||(u.a.get("/users/".concat(e)).then((function(e){_(e.data)})),m(!0))}),[r,f,m,_]),l.a.createElement("div",{className:"friend"},l.a.createElement("div",{className:"friend__card"},l.a.createElement("img",{className:"friend__userpic",src:f.profilePic,alt:f.name}),l.a.createElement("div",{className:"friend__details"},l.a.createElement("h3",{className:"friend__name"},f.name),l.a.createElement("p",{className:"friend__location"},"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: ",f.location),l.a.createElement("p",{className:"friend__quantity"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0445 \u043f\u043e\u043f\u0443\u0433\u0430\u0435\u0432: ",f.parrotsOwned&&f.parrotsOwned.length),l.a.createElement("p",{className:"friend__fav-quote"},'\u041b\u044e\u0431\u0438\u043c\u043e\u0435 \u0432\u044b\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u043e \u043f\u0442\u0438\u0446\u0430\u0445: "',f.favBirdQuote,'"'))),l.a.createElement("button",{className:"button button_type_back",onClick:function(){return a.goBack()}}))},_=(t(62),t(28)),d=t.n(_);var E=function(){return l.a.createElement("div",{className:"dashboard"},l.a.createElement("img",{src:d.a,alt:""}))},b=(t(63),t(29)),N=t.n(b);var v=function(){return l.a.createElement("div",{className:"not-found"},l.a.createElement("h3",{className:"not-found__title"},l.a.createElement("span",null,"404")," - \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),l.a.createElement("img",{className:"not-found__image",src:N.a,alt:""}),l.a.createElement("p",{className:"not-found__text"},"\u041e\u0439, \u0437\u0434\u0435\u0441\u044c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442"),l.a.createElement(m.b,{className:"button button_type_to-main",to:"/"},"\u041d\u0430\u0437\u0430\u0434"))},h=t(30),y=t(12);t(64);var O=function(){var e=Object(n.useState)({picture:"mary",parrotsOwned:[],tempValue:{name:"",toy:""}}),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(s.f)();return l.a.createElement("form",{className:"form",onChange:function(e){var a=Object(y.a)({},t),n=e.target,l=n.name,r=n.value;l.includes("parrot_")?a.tempValue[l.slice("parrot_".length)]=r:a[l]=r,c(a)}},l.a.createElement("label",{className:"form__label"},"\u0418\u043c\u044f \u0434\u0440\u0443\u0433\u0430",l.a.createElement("input",{type:"text",name:"name",className:"form__input"})),l.a.createElement("label",{className:"form__label"},"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",l.a.createElement("input",{type:"text",name:"location",className:"form__input"})),l.a.createElement("label",{className:"form__label"},"\u041b\u044e\u0431\u0438\u043c\u0430\u044f \u0446\u0438\u0442\u0430\u0442\u0430 \u043f\u0440\u043e \u043f\u043e\u043f\u0443\u0433\u043e\u0432",l.a.createElement("input",{type:"text",name:"favBirdQuote",className:"form__input"})),l.a.createElement("label",{className:"form__label"},"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 1",l.a.createElement("input",{type:"radio",defaultChecked:!0,name:"picture",value:"mary",className:"form__input"})),l.a.createElement("label",{className:"form__label"},"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 2",l.a.createElement("input",{type:"radio",name:"picture",value:"bill",className:"form__input"})),l.a.createElement("hr",{className:"form__divider"}),l.a.createElement("ul",null,t.parrotsOwned.map((function(e,a){return l.a.createElement("li",{key:e.name+a},e.name)}))),l.a.createElement("label",{className:"form__label"},"\u0418\u043c\u044f \u043f\u043e\u043f\u0443\u0433\u0430\u044f",l.a.createElement("input",{value:t.tempValue.name,type:"text",name:"parrot_name",className:"form__input"})),l.a.createElement("label",{className:"form__label"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043b\u044e\u0431\u0438\u043c\u044b\u0445 \u0438\u0433\u0440\u0443\u0448\u0435\u043a \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e",l.a.createElement("input",{value:t.tempValue.toy,type:"text",name:"parrot_toy",className:"form__input"})),l.a.createElement("label",{className:"form__label"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043f\u0443\u0433\u0430\u044f",l.a.createElement("button",{name:"parrot_add",type:"button",onClick:function(){var e=Object(y.a)({},t),a={name:t.tempValue.name,favoriteToys:t.tempValue.toy.split(",")};e.parrotsOwned.push(a),e.tempValue={name:"",toy:""},c(e)}},"+")),l.a.createElement("hr",{className:"form__divider"}),l.a.createElement("label",{className:"form__label"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440!",l.a.createElement("button",{type:"button",onClick:function(){var e=t.picture,a=(t.tempValue,Object(h.a)(t,["picture","tempValue"])),n=Object(y.a)(Object(y.a)({},a),{},{profilePic:"/profile-images/".concat(e,"-dark.png")});u.a.post("/users",n).then((function(e){r.push("/friends")}))}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var g=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"header"},l.a.createElement(m.c,{to:"/",className:"header__logo"},"Parrot Friendship Society"),l.a.createElement("nav",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(m.c,{className:"menu__link",to:"/friends"},"\u0414\u0440\u0443\u0437\u044c\u044f")),l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(m.c,{className:"menu__link",to:"/create"},"\u041d\u043e\u0432\u044b\u0439 \u0434\u0440\u0443\u0433"))))),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:["/","/index.html"]},l.a.createElement(E,null)),l.a.createElement(s.a,{exact:!0,path:"/friends"},l.a.createElement(p,null)),l.a.createElement(s.a,{path:"/friends/:id"},l.a.createElement(f,null)),l.a.createElement(s.a,{path:"/create"},l.a.createElement(O,null)),l.a.createElement(s.a,{path:"*"},l.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.36755aac.chunk.js.map