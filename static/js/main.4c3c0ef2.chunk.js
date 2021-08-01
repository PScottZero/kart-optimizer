(this["webpackJsonpkart-optimizer"]=this["webpackJsonpkart-optimizer"]||[]).push([[0],{20:function(e,t,r){},21:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n,i=r(1),c=r.n(i),a=r(10),s=r.n(a),d=(r(20),r(4)),o=r(5),l=r(9),u=r(7),j=(r(21),r.p+"static/media/MarioKart8.428361ae.webp"),b=r(0),O=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Header",children:Object(b.jsxs)("div",{className:"Logo",children:[Object(b.jsx)("img",{className:"LogoImg",src:j,alt:"Mario Kart 8 Logo"}),Object(b.jsx)("p",{className:"LogoText",children:"Kart Optimizer"})]})})}}]),r}(i.Component),f=(r(23),r(8)),v=(r(24),r(3));!function(e){e.SPEED="Speed",e.ACCELERATION="Acceleration",e.WEIGHT="Weight",e.HANDLING="Handling",e.TRACTION="Traction",e.PRIORITY=""}(n||(n={}));var h,x,p={statPriority:[n.SPEED,n.ACCELERATION,n.PRIORITY,n.WEIGHT,n.HANDLING,n.TRACTION],setNewStatPriority:function(e){return console.log(e)}},m=c.a.createContext(p),g=function(e){var t=e.children,r=c.a.useState(p),n=Object(f.a)(r,2),i=n[0],a=n[1],s=function(e){a((function(t){return Object(v.a)(Object(v.a)({},t),{},{statPriority:e})}))};return c.a.useEffect((function(){a((function(e){return Object(v.a)(Object(v.a)({},e),{},{setNewStatPriority:s})}))}),[]),Object(b.jsx)(m.Provider,{value:i,children:t})};!function(e){e.GROUND="Ground",e.WATER="Water",e.ANTI_GRAVITY="Anti-Gravity",e.AIR="Air"}(h||(h={})),function(e){e.ON_ROAD="On-Road",e.OFF_ROAD="Off-Road"}(x||(x={}));var I,y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,j=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,b=arguments.length>11&&void 0!==arguments[11]?arguments[11]:0,O=arguments.length>12&&void 0!==arguments[12]?arguments[12]:0;Object(d.a)(this,e),this.weight=t,this.acceleration=r,this.onRoadTraction=n,this.offRoadTraction=i,this.miniTurbo=c,this.groundSpeed=a,this.waterSpeed=s,this.antiGravitySpeed=o,this.airSpeed=l,this.groundHandling=u,this.waterHandling=j,this.antiGravityHandling=b,this.airHandling=O},P=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new y;Object(d.a)(this,e),this.name=t,this.img=r,this.stats=n}return Object(o.a)(e,[{key:"getStat",value:function(e){switch(e){case n.SPEED:return this.stats.groundSpeed;case n.ACCELERATION:return this.stats.acceleration;case n.WEIGHT:return this.stats.weight;case n.HANDLING:return this.stats.groundHandling;case n.TRACTION:return this.stats.offRoadTraction;default:return 0}}},{key:"getStats",value:function(e){var t=this;return e.map((function(e){return t.getStat(e)}))}}]),e}();!function(e){e.DRIVER="Driver",e.BODY="Body",e.TIRE="Tire",e.GLIDER="Glider"}(I||(I={}));var k=r(11),N=r.n(k),T=r(12),R={drivers:[],bodies:[],tires:[],gliders:[],selectedDriver:new P,selectedBody:new P,selectedTire:new P,selectedGlider:new P,driverIsFixed:!1,bodyIsFixed:!1,tireIsFixed:!1,gliderIsFixed:!1,topKarts:[],topKartsLoaded:!0,setPart:function(e,t){return console.log(e,t)},setKart:function(e){return console.log(e)},setTopKarts:function(e){return console.log(e)},toggleFixed:function(e){return console.log(e)}},S=c.a.createContext(R),C=function(e){var t=e.children,r=c.a.useState(R),n=Object(f.a)(r,2),i=n[0],a=n[1],s=function(e,t){switch(t){case I.DRIVER:a((function(t){return Object(v.a)(Object(v.a)({},t),{},{selectedDriver:e})}));break;case I.BODY:a((function(t){return Object(v.a)(Object(v.a)({},t),{},{selectedBody:e})}));break;case I.TIRE:a((function(t){return Object(v.a)(Object(v.a)({},t),{},{selectedTire:e})}));break;case I.GLIDER:a((function(t){return Object(v.a)(Object(v.a)({},t),{},{selectedGlider:e})}))}},d=function(e){a((function(t){return Object(v.a)(Object(v.a)({},t),{},{selectedDriver:e.driver,selectedBody:e.body,selectedTire:e.tire,selectedGlider:e.glider})}))},o=function(e){a((function(t){return Object(v.a)(Object(v.a)({},t),{},{topKarts:e})}))},l=function(e){switch(e){case I.DRIVER:a((function(e){return Object(v.a)(Object(v.a)({},e),{},{driverIsFixed:!e.driverIsFixed})}));break;case I.BODY:a((function(e){return Object(v.a)(Object(v.a)({},e),{},{bodyIsFixed:!e.bodyIsFixed})}));break;case I.TIRE:a((function(e){return Object(v.a)(Object(v.a)({},e),{},{tireIsFixed:!e.tireIsFixed})}));break;case I.GLIDER:a((function(e){return Object(v.a)(Object(v.a)({},e),{},{gliderIsFixed:!e.gliderIsFixed})}))}},u=function(){var e=Object(T.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://kart-optimizer-backend.us-east-2.elasticbeanstalk.com"+t,{method:"GET"});case 3:if(!(r=e.sent).ok){e.next=8;break}return e.abrupt("return",r.text().then((function(e){return JSON.parse(e)})));case 8:return e.abrupt("return",[]);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return c.a.useEffect((function(){a({drivers:[],bodies:[],tires:[],gliders:[],selectedDriver:new P,selectedBody:new P,selectedTire:new P,selectedGlider:new P,driverIsFixed:!1,bodyIsFixed:!1,tireIsFixed:!1,gliderIsFixed:!1,topKarts:[],topKartsLoaded:!0,setPart:s,setKart:d,setTopKarts:o,toggleFixed:l}),u("/drivers").then((function(e){return a((function(t){return Object(v.a)(Object(v.a)({},t),{},{drivers:e,selectedDriver:e[0]})}))})),u("/bodies").then((function(e){a((function(t){return Object(v.a)(Object(v.a)({},t),{},{bodies:e,selectedBody:e[0]})}))})),u("/tires").then((function(e){a((function(t){return Object(v.a)(Object(v.a)({},t),{},{tires:e,selectedTire:e[0]})}))})),u("/gliders").then((function(e){a((function(t){return Object(v.a)(Object(v.a)({},t),{},{gliders:e,selectedGlider:e[0]})}))}))}),[]),Object(b.jsx)(S.Provider,{value:i,children:t})},E=(r(26),function(e){var t=c.a.useContext(S),r=function(){switch(e.selectedPartType){case I.DRIVER:return t.driverIsFixed;case I.BODY:return t.bodyIsFixed;case I.TIRE:return t.tireIsFixed;case I.GLIDER:return t.gliderIsFixed}};return Object(b.jsxs)("div",{className:"PartSelection",children:[Object(b.jsx)("div",{className:"SelectedPart",style:{background:e.isSelected&&void 0!==e.selectedPart?"#26baff":"#777"},onClick:e.onClick,children:Object(b.jsx)("img",{className:"PartImage",src:void 0!==e.selectedPart?e.selectedPart.img:"",alt:void 0!==e.selectedPart?e.selectedPart.name:""})}),Object(b.jsx)("div",{className:"PartLock",style:{background:r()?"#f92470":"#26baff"},onClick:function(){return void 0!==e.selectedPart?(r=e.selectedPartType,t.toggleFixed(r)):{};var r},children:Object(b.jsx)("p",{className:"PartLabel",children:void 0!==e.selectedPart?function(){var t=e.selectedPart.name.split(" ");return t[t.length-1].includes("(")&&t.pop(),t.length>=2?"".concat(t[0]," ").concat(t[1]):t.join(" ")}():"None"})})]})}),F=(r(27),function(e){var t=c.a.useContext(S);return Object(b.jsx)("div",{className:"PartTile",onClick:function(){e.type&&t.setPart(e.part,e.type)},style:{background:e.isSelected?"#26baff":"#555"},children:Object(b.jsx)("img",{className:"PartImage",src:e.part.img,alt:"Part"})})}),D=(r(28),function(e){var t=c.a.useContext(S);return Object(b.jsx)("div",{className:"PartList",children:new Array(e.partList.length).fill(0).map((function(r,n){return Object(b.jsx)(F,{part:e.partList[n],type:e.type,isSelected:(i=e.partList[n],i.name===t.selectedDriver.name||i.name===t.selectedBody.name||i.name===t.selectedTire.name||i.name===t.selectedGlider.name)},n);var i}))})}),w=function(){var e=c.a.useContext(S),t=Object(i.useState)({selectedPartList:c.a.useContext(S).drivers}),r=Object(f.a)(t,2),n=r[0],a=r[1],s=function(e){a({selectedPartList:e})},d=function(e){if(e.length>0)switch(e[0].name){case"Standard Kart":return I.BODY;case"Standard":return I.TIRE;case"Super Glider":return I.GLIDER;default:return I.DRIVER}return I.DRIVER},o=function(){return 0===n.selectedPartList.length?e.drivers:n.selectedPartList},l=function(e){return d(e)===d(n.selectedPartList)};return Object(b.jsx)("div",{className:"KartConfig",children:Object(b.jsxs)("div",{className:"CenterContainer",children:[Object(b.jsxs)("div",{className:"PartOptions",children:[Object(b.jsx)(E,{selectedPart:e.selectedDriver,selectedPartType:d(e.drivers),isSelected:l(e.drivers),isFixed:e.driverIsFixed,onClick:function(){return s(e.drivers)}}),Object(b.jsx)(E,{selectedPart:e.selectedBody,selectedPartType:d(e.bodies),isSelected:l(e.bodies),isFixed:e.bodyIsFixed,onClick:function(){return s(e.bodies)}}),Object(b.jsx)(E,{selectedPart:e.selectedTire,selectedPartType:d(e.tires),isSelected:l(e.tires),isFixed:e.tireIsFixed,onClick:function(){return s(e.tires)}}),Object(b.jsx)(E,{selectedPart:e.selectedGlider,selectedPartType:d(e.gliders),isSelected:l(e.gliders),isFixed:e.gliderIsFixed,onClick:function(){return s(e.gliders)}})]}),Object(b.jsx)("div",{className:"Separator"}),0!==o().length?Object(b.jsx)(D,{partList:o(),type:d(o())}):Object(b.jsxs)("p",{className:"NoBackend",children:["Backend is not running.",Object(b.jsx)("br",{}),"Please download the ",Object(b.jsx)("a",{href:"https://drive.google.com/file/d/1B-_u6OXax6jnumH9PEm9Pit_3ZycWg5m/view?usp=sharing",children:"backend"}),Object(b.jsx)("br",{}),"then open a terminal in the same location as the downloaded .jar file and run the command: ",Object(b.jsx)("span",{children:"java -jar ./kart-optimizer-backend.jar"})]})]})})},G=function(e){var t=function(e){return e/4+.75};return[t(e.map((function(e){return void 0!==e?e.stats.groundSpeed:0})).reduce((function(e,t){return e+t}))),t(e.map((function(e){return void 0!==e?e.stats.acceleration:0})).reduce((function(e,t){return e+t}))),t(e.map((function(e){return void 0!==e?e.stats.weight:0})).reduce((function(e,t){return e+t}))),t(e.map((function(e){return void 0!==e?e.stats.groundHandling:0})).reduce((function(e,t){return e+t}))),t(e.map((function(e){return void 0!==e?e.stats.offRoadTraction:0})).reduce((function(e,t){return e+t})))]},L=function(e){var t=[38,186,255],r=[249,36,112],n=t.map((function(e,t){return r[t]-e})).map((function(r,n){return t[n]+r*(e/6)}));return"rgb(".concat(n[0],", ").concat(n[1],", ").concat(n[2],")")},A=(r(29),function(e){for(var t=[],r=0;r<23;r++)t.push(Object(b.jsx)("div",{className:"VerticalSeparator",style:{height:(r+1)%4===0?"1rem":"0.5rem"}},"separator-".concat(r)));return Object(b.jsxs)("div",{className:"ProgressBar",children:[Object(b.jsxs)("p",{children:[e.label,":"," ",Object(b.jsx)("span",{style:{color:L(e.value)},children:+e.value.toFixed(2)})]}),Object(b.jsxs)("div",{className:"Bar",children:[Object(b.jsx)("div",{className:"Progress",style:{width:"".concat(100-e.value*(100/6),"%")}}),Object(b.jsx)("div",{className:"SeparatorContainer",children:t})]})]})}),K=(r(30),function(){var e=c.a.useContext(S),t=G([e.selectedDriver,e.selectedBody,e.selectedTire,e.selectedGlider]);return Object(b.jsxs)("div",{className:"PartStats",children:[Object(b.jsx)(A,{label:"Speed",value:t[0]}),Object(b.jsx)(A,{label:"Acceleration",value:t[1]}),Object(b.jsx)(A,{label:"Weight",value:t[2]}),Object(b.jsx)(A,{label:"Handling",value:t[3]}),Object(b.jsx)(A,{label:"Traction",value:t[4]})]})}),B=(r(31),function(e){var t=c.a.useContext(S),r=[],n=void 0!==e.kart.driver?G([e.kart.driver,e.kart.body,e.kart.tire,e.kart.glider]):[];return["S","A","W","H","T"].forEach((function(e,t){return r.push(Object(b.jsxs)("p",{children:[e,":"," ",Object(b.jsx)("span",{style:{color:L(n[t])},children:n[t]})]},"kart-combo-".concat(t)))})),Object(b.jsxs)("div",{className:"KartCombo",onClick:function(){return t.setKart(e.kart)},children:[Object(b.jsxs)("div",{className:"Parts",children:[Object(b.jsx)("div",{className:"KartComboPart",children:Object(b.jsx)("img",{src:e.kart.driver.img,alt:"Driver"})}),Object(b.jsx)("div",{className:"KartComboPart",children:Object(b.jsx)("img",{src:e.kart.body.img,alt:"Body"})}),Object(b.jsx)("div",{className:"KartComboPart",children:Object(b.jsx)("img",{src:e.kart.tire.img,alt:"Tire"})}),Object(b.jsx)("div",{className:"KartComboPart",children:Object(b.jsx)("img",{src:e.kart.glider.img,alt:"Glider"})})]}),Object(b.jsx)("div",{className:"Stats",children:r})]})}),H=(r(32),r(13)),Y=function e(t,r,n,i,c,a,s){Object(d.a)(this,e),this.fixedDriver=t,this.fixedBody=r,this.fixedTire=n,this.fixedGlider=i,this.priorityStats=c,this.regularStats=a,this.kartCount=s},W=(r(35),function(){var e=c.a.useContext(m),t=c.a.useContext(S),r=Object(H.b)((function(t){var r,i=t.value,c=t.currentIndex;return Object(b.jsx)("div",{className:"Stat",style:{background:(r=c,r<e.statPriority.indexOf(n.PRIORITY)?"#f92470":r>e.statPriority.indexOf(n.PRIORITY)?"#777":"#26baff")},children:Object(b.jsx)("p",{children:i})})})),i=Object(H.a)((function(e){var t=e.items;return Object(b.jsx)("ul",{children:t.map((function(e,t){return Object(b.jsx)(r,{index:t,currentIndex:t,value:e},"item-".concat(t))}))})})),a=function(){var r=Object(T.a)(N.a.mark((function r(){var i,c,a,s;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.statPriority.indexOf(n.PRIORITY),c=e.statPriority.slice(0,i),a=e.statPriority.slice(i+1),r.next=5,fetch("http://kart-optimizer-backend.us-east-2.elasticbeanstalk.com/topKarts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(new Y(t.driverIsFixed?t.selectedDriver:null,t.bodyIsFixed?t.selectedBody:null,t.tireIsFixed?t.selectedTire:null,t.gliderIsFixed?t.selectedGlider:null,c,a,100))});case 5:(s=r.sent).ok&&s.text().then((function(e){var r=JSON.parse(e);t.setTopKarts(r)}));case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"StatPriority",children:[Object(b.jsx)("div",{className:"StatList",children:Object(b.jsx)(i,{items:e.statPriority,onSortEnd:function(t){var r=t.oldIndex,n=t.newIndex;e.setNewStatPriority(Object(H.c)(e.statPriority,r,n))}})}),Object(b.jsx)("button",{onClick:a,children:"Generate Karts"})]})}),z=function(){var e=c.a.useContext(S);return Object(b.jsxs)("div",{className:"Optimizer",children:[Object(b.jsx)(W,{}),Object(b.jsx)("div",{className:"Options",children:e.topKarts.map((function(e,t){return Object(b.jsx)(B,{kart:e},"kart-".concat(t))}))})]})},V=(r(36),function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Sidebar",children:[Object(b.jsx)(K,{}),Object(b.jsx)(z,{})]})}}]),r}(i.Component)),J=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(b.jsx)(g,{children:Object(b.jsx)(C,{children:Object(b.jsxs)("div",{className:"KartOptimizerApp",children:[Object(b.jsx)(O,{}),Object(b.jsx)(w,{}),Object(b.jsx)(V,{})]})})})}}]),r}(i.Component);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.4c3c0ef2.chunk.js.map