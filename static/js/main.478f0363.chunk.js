(this.webpackJsonpproj_12_car_tuner_app=this.webpackJsonpproj_12_car_tuner_app||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(10),a(1)),i=a(2);var u=function(e){return r.a.createElement("div",{className:"spoiler",style:e.spoilerBaseStyle},r.a.createElement("div",{style:e.spoilerWingStyle}))},s={bottom:"-15px"};var m=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"front-wheel",style:s},r.a.createElement("div",{style:e.wheelsStyle})),r.a.createElement("div",{className:"rear-wheel",style:s},r.a.createElement("div",{style:e.wheelsStyle})))};var g=function(e){return r.a.createElement("div",{style:e.carStyleProp,className:"car"},r.a.createElement("div",{className:"cabin"},r.a.createElement("div",{className:"cabin-front"}),r.a.createElement("div",{className:"cabin-rear"})),r.a.createElement(u,{spoilerBaseStyle:e.spoilerBaseStyleProp,spoilerWingStyle:e.spoilerWingStyleProp}),r.a.createElement(m,{wheelsStyle:e.wheelsStyleProp}))};var d=function(e){var t=Object(n.useState)({red:0,green:210,blue:100}),a=Object(i.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",{className:"panel"},r.a.createElement("h2",{style:{textAlign:"center"}},"Body"),r.a.createElement("h4",null,"Color"),r.a.createElement("div",{className:"slider-menu"},r.a.createElement("div",null,"Red:",r.a.createElement("br",null),"Green:",r.a.createElement("br",null),"Blue:"),r.a.createElement("div",null,r.a.createElement("input",{type:"range",min:"0",max:"255",defaultValue:"0",onChange:function(t){return function(t){e.carStyle("rgb(".concat(t.target.value,", ").concat(l.green,", ").concat(l.blue,")"))}(t)},onMouseUp:function(e){return function(e){var t=e.target.value;c((function(e){return Object(o.a)({},e,{red:t})}))}(e)}}),r.a.createElement("input",{type:"range",min:"0",max:"255",defaultValue:"210",onChange:function(t){return function(t){e.carStyle("rgb(".concat(l.red,", ").concat(t.target.value,", ").concat(l.blue,")"))}(t)},onMouseUp:function(e){return function(e){var t=e.target.value;c((function(e){return Object(o.a)({},e,{green:t})}))}(e)}}),r.a.createElement("input",{type:"range",min:"0",max:"255",defaultValue:"100",onChange:function(t){return function(t){e.carStyle("rgb(".concat(l.red,", ").concat(l.green,", ").concat(t.target.value))}(t)},onMouseUp:function(e){return function(e){var t=e.target.value;c((function(e){return Object(o.a)({},e,{blue:t})}))}(e)}}))))};var p=function(e){return r.a.createElement("div",{className:"panel"},r.a.createElement("h2",{style:{textAlign:"center"}},"Wheels"),r.a.createElement("h4",null,"Size"),r.a.createElement("div",{className:"slider-menu"},r.a.createElement("div",null,"Diameter:"),r.a.createElement("div",null,r.a.createElement("input",{type:"range",min:"50",max:"90",step:"0.5",defaultValue:"80",onChange:function(t){return function(t){var a=t.target.value,n=(100-a)/2;e.wheelsStyle("".concat(a,"%"),"".concat(a,"%"),"".concat(n,"%"))}(t)}}))))};var h=function(e){var t=r.a.useState(e.defaults),a=Object(i.a)(t,2),n=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,e.title),r.a.createElement("div",{className:"slider-menu"},r.a.createElement("div",null,"Height:",r.a.createElement("br",null),"Width:",r.a.createElement("br",null),"Angle:",r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement("input",{type:"range",max:"100",min:"0",defaultValue:e.defaults.height,onChange:function(t){return function(t){var a=t.target.value;e.spoilerStyle("".concat(a,"px"),"".concat(n.width,"px"),"rotate(".concat(n.angle,"deg)")),l((function(e){return Object(o.a)({},e,{height:a})}))}(t)}}),r.a.createElement("input",{type:"range",max:"Base"===e.title?"20":"100",min:"1",defaultValue:e.defaults.width,onChange:function(t){return function(t){var a=t.target.value;e.spoilerStyle("".concat(n.height,"px"),"".concat(a,"px"),"rotate(".concat(n.angle,"deg)")),l((function(e){return Object(o.a)({},e,{width:a})}))}(t)}}),r.a.createElement("input",{type:"range",min:e.defaults.angle-90,max:e.defaults.angle+90,defaultValue:e.defaults.angle,onChange:function(t){return function(t){var a=t.target.value;e.spoilerStyle("".concat(n.height,"px"),"".concat(n.width,"px"),"rotate(".concat(a,"deg)")),l((function(e){return Object(o.a)({},e,{angle:a})}))}(t)}}))))};var f=function(e){return r.a.createElement("div",{className:"panel"},r.a.createElement("h2",{style:{textAlign:"center"}},"Spoiler"),r.a.createElement(h,{title:"Base",defaults:{height:30,width:10,angle:200},spoilerStyle:e.spoilerBaseStyle}),r.a.createElement(h,{title:"Wing",defaults:{height:10,width:50,angle:-30},spoilerStyle:e.spoilerWingStyle}))};var y=function(e){return r.a.createElement("div",{className:"tuner-board"},r.a.createElement(d,{carStyle:e.carStyle}),r.a.createElement(p,{wheelsStyle:e.wheelsStyle}),r.a.createElement(f,{spoilerWingStyle:e.spoilerWingStyle,spoilerBaseStyle:e.spoilerBaseStyle}))};var v=function(){var e=Object(n.useState)({height:"110px",width:"435px",backgroundColor:"rgb(0, 210, 100)",borderRadius:"50% 10px 25% 10px"}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({width:"80%",height:"80%",margin:"10%",backgroundColor:"#ddd",borderRadius:"50%"}),u=Object(i.a)(c,2),s=u[0],m=u[1],d=Object(n.useState)({height:"30px",width:"10px",transform:"rotate(200deg)",backgroundColor:"#333"}),p=Object(i.a)(d,2),h=p[0],f=p[1],v=Object(n.useState)({height:"10px",width:"50px",position:"absolute",bottom:"-5px",left:"calc(50% - 25px)",backgroundColor:"#222",transform:"rotate(-30deg)"}),E=Object(i.a)(v,2),b=E[0],S=E[1];return console.log(b),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{carStyleProp:a,spoilerBaseStyleProp:h,spoilerWingStyleProp:b,wheelsStyleProp:s}),r.a.createElement(y,{carStyle:function(e){return l((function(t){return Object(o.a)({},t,{backgroundColor:e})}))},wheelsStyle:function(e,t,a){return m((function(n){return Object(o.a)({},n,{height:e,width:t,margin:a})}))},spoilerBaseStyle:function(e,t,a){return f({height:e,width:t,transform:a})},spoilerWingStyle:function(e,t,a){return S((function(n){return Object(o.a)({},n,{height:e,width:t,transform:a})}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.478f0363.chunk.js.map