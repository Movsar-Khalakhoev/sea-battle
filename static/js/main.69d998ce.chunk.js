(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],{18:function(e,t,n){e.exports={container:"Registration_container__13fa5",mainForm:"Registration_mainForm__30liy",mainFormButton:"Registration_mainFormButton__3kgcf",createFormGameId:"Registration_createFormGameId__2fCJO",createFormGameIdContainer:"Registration_createFormGameIdContainer__1qts7",createFormGameIdDescription:"Registration_createFormGameIdDescription__GGpja",createFormGameIdButton:"Registration_createFormGameIdButton__1VJsp",buttons:"Registration_buttons__2IDfJ",buttonsButton:"Registration_buttonsButton__E--Sq"}},24:function(e,t,n){e.exports={container:"MyMapInitializer_container__2F5bg",header:"MyMapInitializer_header__1a_XO",painter:"MyMapInitializer_painter__1qVno",actions:"MyMapInitializer_actions__3fyYO",actionsAction:"MyMapInitializer_actionsAction__2-1Q8",actionsReady:"MyMapInitializer_actionsReady__16WFr",actionsInsctruction:"MyMapInitializer_actionsInsctruction__3uUQk"}},28:function(e,t,n){e.exports={modal:"RulesModal_modal__2FI5z",header:"RulesModal_header__2HDy4",rulesList:"RulesModal_rulesList__10loH",rulesListItem:"RulesModal_rulesListItem__2Kb6k",backlightGreen:"RulesModal_backlightGreen__1dTQ8",backlightRed:"RulesModal_backlightRed__1p61M"}},32:function(e,t,n){e.exports={container:"Game_container__8M1qb",containerGameContainer:"Game_containerGameContainer__aNFiP",containerNicknames:"Game_containerNicknames__qUvng",containerNickname:"Game_containerNickname__1Bxe2",orderText:"Game_orderText__2Js8j"}},35:function(e,t,n){e.exports={button:"Button_button__24M3H",buttonDisabled:"Button_buttonDisabled__3wpUj",buttonLoadingWrapper:"Button_buttonLoadingWrapper__3M6Mn",buttonLoadingLabel:"Button_buttonLoadingLabel__1cUEo"}},36:function(e,t,n){e.exports={container:"Modal_container__1_e6j",overlay:"Modal_overlay__2Gig-",content:"Modal_content__3i_vk",contentCross:"Modal_contentCross__2fSSK"}},37:function(e,t,n){e.exports={container:"End_container__3ciQC",winLabel:"End_winLabel__1Nur4",restartButton:"End_restartButton___Iq2p"}},45:function(e,t,n){e.exports={input:"Input_input__3peQW",label:"Input_label__2vsRk"}},49:function(e,t,n){e.exports={ldsDualRing:"Spinner_ldsDualRing__2we_u"}},56:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t),n.d(t,"firebaseApp",(function(){return Le}));var i=n(5),a=n.n(i),r=n(47),o=n.n(r),c=(n(56),n(11)),s=n(24),l=n.n(s),d=n(12),u=n(64),j=30,p=window.innerWidth<=450,h=["a","b","c","d","e","f","g","h","i","j"],f=["1","2","3","4","5","6","7","8","9","10"],b=n(3),y=[{coords:[{x:2,y:13},{x:2,y:14},{x:2,y:15},{x:2,y:16}],id:Object(u.a)()},{coords:[{x:4,y:13},{x:4,y:14},{x:4,y:15}],id:Object(u.a)()},{coords:[{x:6,y:13},{x:6,y:14},{x:6,y:15}],id:Object(u.a)()},{coords:[{x:8,y:13},{x:8,y:14}],id:Object(u.a)()},{coords:[{x:10,y:13},{x:10,y:14}],id:Object(u.a)()},{coords:[{x:10,y:16},{x:10,y:17}],id:Object(u.a)()},{coords:[{x:8,y:16}],id:Object(u.a)()},{coords:[{x:6,y:17}],id:Object(u.a)()},{coords:[{x:4,y:17}],id:Object(u.a)()},{coords:[{x:2,y:18}],id:Object(u.a)()}],x=a.a.createContext({mapShips:[],setMapShips:function(){},positionedShips:y,setPositionedShips:function(){},conjecturalShip:null,setConjecturalShip:function(){},rulesModalOpened:!1,setRulesModelOpened:function(){},initializerCellSideSize:j,setInitializerCellSideSize:function(){},resetInitializer:function(){}}),v=function(e){var t=e.children,n=a.a.useState([]),i=Object(c.a)(n,2),r=i[0],o=i[1],s=a.a.useState(y),l=Object(c.a)(s,2),d=l[0],u=l[1],p=a.a.useState(null),h=Object(c.a)(p,2),f=h[0],v=h[1],m=a.a.useState(!1),O=Object(c.a)(m,2),S=O[0],g=O[1],_=a.a.useState(j),k=Object(c.a)(_,2),N=k[0],M=k[1];return Object(b.jsx)(x.Provider,{value:{mapShips:r,setMapShips:o,positionedShips:d,setPositionedShips:u,conjecturalShip:f,setConjecturalShip:v,rulesModalOpened:S,setRulesModelOpened:g,initializerCellSideSize:N,setInitializerCellSideSize:M,resetInitializer:function(){o([]),u(y),v(null)}},children:t})},m=function(e){var t=e.size,n=e.position,i=e.cellSideSize,a=void 0===i?j:i;return Object(b.jsxs)(d.c,{width:t.width,height:t.height,x:null===n||void 0===n?void 0:n.x,y:null===n||void 0===n?void 0:n.y,children:[Array.from({length:t.height/a+1}).map((function(e,n){return Object(b.jsx)(d.d,{points:[0,n*a,t.width,n*a],stroke:"blue",strokeWidth:1,opacity:.4},n)})),Array.from({length:t.width/a+1}).map((function(e,n){return Object(b.jsx)(d.d,{points:[n*a,0,n*a,t.height],stroke:"blue",strokeWidth:1,opacity:.4},n)}))]})},O=function(e){var t=e.cellSideSize,n=void 0===t?j:t;return Object(b.jsx)(d.b,{children:h.map((function(e,t){return Object(b.jsx)(d.b,{x:n*(t+1),y:0,children:Object(b.jsx)(d.h,{text:e,align:"center",verticalAlign:"middle",width:n,height:n,fontSize:.6*n})},t)}))})},S=function(e){var t=e.cellSideSize,n=void 0===t?j:t;return Object(b.jsx)(d.b,{children:f.map((function(e,t){return Object(b.jsx)(d.b,{x:0,y:n*(t+1),children:Object(b.jsx)(d.h,{text:e,align:"center",verticalAlign:"middle",width:n,height:n,fontSize:.6*n})},t)}))})},g=n(17),_=function(e){var t=e.coord,n=e.cellSideSize,i=void 0===n?j:n,a=e.fill;return Object(b.jsxs)(d.b,{x:h.findIndex((function(e){return e===t.x}))*i,y:f.findIndex((function(e){return e===t.y}))*i,width:i,height:i,children:[Object(b.jsx)(d.e,{width:i,height:i,strokeWidth:1,stroke:"red",fill:a},t.x+t.y),Object(b.jsx)(d.d,{points:[0,0,i,i],strokeWidth:1,stroke:"red"}),Object(b.jsx)(d.d,{points:[i/2,0,i,i/2],strokeWidth:1,stroke:"red"}),Object(b.jsx)(d.d,{points:[0,i/2,i/2,i],strokeWidth:1,stroke:"red"}),Object(b.jsx)(d.d,{points:[i,0,0,i],strokeWidth:1,stroke:"red"}),Object(b.jsx)(d.d,{points:[i/2,0,0,i/2],strokeWidth:1,stroke:"red"}),Object(b.jsx)(d.d,{points:[i,i/2,i/2,i],strokeWidth:1,stroke:"red"})]})},k=function(e){var t=e.coord,n=e.cellSideSize,i=void 0===n?j:n,a=e.fill;return Object(b.jsx)(d.e,{x:h.findIndex((function(e){return e===t.x}))*i,y:f.findIndex((function(e){return e===t.y}))*i,width:i,height:i,strokeWidth:1,stroke:"red",fill:a},t.x+t.y)},N=function(e){var t=e.mapState,n=t.ships,i=t.hits,r=e.onShipClick,o=e.cellSideSize,c=void 0===o?j:o,s=e.fill;return Object(b.jsx)(d.b,{children:n.map((function(e,t){return Object(b.jsx)(d.b,{x:c,y:c,opacity:e.destroyed?.6:1,onClick:function(){return r&&r(e)},onTap:function(){return r&&r(e)},children:e.coords.map((function(t){var n=i.find((function(e){return e.x===t.x&&e.y===t.y}));return Object(b.jsxs)(a.a.Fragment,{children:[e.destroyed?Object(b.jsx)(_,{coord:t,cellSideSize:c,fill:s}):Object(b.jsx)(k,{coord:t,cellSideSize:c,fill:s}),n&&!e.destroyed&&Object(b.jsx)(d.a,{radius:c/3,stroke:"red",strokeWidth:1,x:h.findIndex((function(e){return e===t.x}))*c+c/2,y:f.findIndex((function(e){return e===t.y}))*c+c/2})]},t.x+t.y)}))},t)}))})},M=function(e){var t=e.position,n=e.cellSideSize,i=void 0===n?j:n,r=a.a.useContext(x),o=r.mapShips,c=r.setMapShips,s=r.setPositionedShips;return Object(b.jsx)(d.c,{x:((null===t||void 0===t?void 0:t.x)||0)*i,y:((null===t||void 0===t?void 0:t.y)||0)*i,width:(h.length+1)*i,height:(f.length+1)*i,children:Object(b.jsx)(N,{mapState:{ships:o,hits:[]},onShipClick:function(e){c((function(t){return t.filter((function(t){return t.id!==e.id}))}));var t=y.find((function(t){return t.id===e.id}));t&&s((function(e){return[].concat(Object(g.a)(e),[t])}))},cellSideSize:i,fill:"pink"})})},C=n(20),z=n(31),w=["positionedShip","fill","cellSlideSize"],I=function(e){var t=e.positionedShip,n=e.fill,i=e.cellSlideSize,a=void 0===i?j:i,r=Object(z.a)(e,w);return Object(b.jsx)(d.b,Object(C.a)(Object(C.a)({},r),{},{children:t.map((function(e){return Object(b.jsx)(d.e,{x:(e.x-1)*a,y:(e.y-1)*a,height:a,width:a,strokeWidth:3,opacity:n?.3:void 0,fill:n},e.x+e.y)}))}))},P=function(e){var t=e.position,n=e.cellSideSize,i=void 0===n?j:n,r=a.a.useContext(x).conjecturalShip;return Object(b.jsx)(d.c,{x:((null===t||void 0===t?void 0:t.x)||0)*i,y:((null===t||void 0===t?void 0:t.y)||0)*i,width:(h.length+1)*i,height:(f.length+1)*i,children:r&&Object(b.jsx)(d.b,{x:i,y:i,children:Object(b.jsx)(I,{positionedShip:r.ship.coords,fill:r.wrongPosition?"red":"green",cellSlideSize:i})})})},R=function(e){var t=e.position,n=e.cellSideSize,i=void 0===n?j:n,r=a.a.useContext(x),o=r.mapShips,c=r.setMapShips,s=r.positionedShips,l=r.setPositionedShips,u=r.conjecturalShip,p=r.setConjecturalShip,y=a.a.useRef(null),v=function(e){l((function(t){return t.map((function(t){if(t.id!==e)return t;var n=!(t.coords.length>=2)||t.coords[0].y===t.coords[1].y,i=F(t);return Object(C.a)(Object(C.a)({},i),{},{coords:n?i.coords.map((function(e,t){return{x:i.coords[0].x,y:i.coords[0].y+t}})):i.coords.map((function(e,t){return{x:i.coords[0].x+t,y:i.coords[0].y}}))})}))}))};return Object(b.jsx)(d.c,{x:((null===t||void 0===t?void 0:t.x)||0)*i,y:((null===t||void 0===t?void 0:t.y)||0)*i,ref:y,children:s.map((function(e,t){return Object(b.jsx)(I,{positionedShip:e.coords,cellSlideSize:i,draggable:!0,fill:"blue",onDragMove:function(t){return function(e,t){var n=e.coords.reduce((function(e,t){return t.y<e.y?t:e}),e.coords[0]),a=!(e.coords.length>=2)||e.coords[0].y===e.coords[1].y,r=Math.round((t.x+(n.x-1)*i)/i),c=Math.round((t.y+(n.y-1)*i)/i),s=F(e);if(s.coords=s.coords.map((function(t,i){var o=a?i:0,s=a?0:i,l=t.x+(r-n.x),d=t.y+(c-n.y);return{x:l<1+o||l>h.length+o-(a?e.coords.length-1:0)?l<1+o?1+o:h.length+o-(a?e.coords.length-1:0):l,y:d<1+s||d>f.length+s-(a?0:e.coords.length-1)?d<1+s?1+s:f.length+s-(a?0:e.coords.length-1):d}})),!u||JSON.stringify(s)!==JSON.stringify(F(u.ship))){var l=o.map((function(e){return G(e.coords)}));p({ship:s,wrongPosition:!!l.find((function(e){return e.find((function(e){return s.coords.find((function(t){return[e.y,e.y-1,e.y+1].includes(t.y)&&[e.x,e.x-1,e.x+1].includes(t.x)}))}))}))})}}(e,t.target.position())},onDragEnd:function(){return function(e,t){if(u&&y.current){if(u.wrongPosition)return p(null),void y.current.children[t].position({x:0,y:0});c((function(e){return[].concat(Object(g.a)(e),[{coords:T(u.ship.coords),destroyed:!1,id:u.ship.id}])})),p(null),l((function(t){return t.filter((function(t){return t.id!==e}))}))}}(e.id,t)},onClick:function(){return v(e.id)},onTap:function(){return v(e.id)}},e.id)}))})},F=function(e){return{coords:e.coords.sort((function(e,t){return e.x<t.x?-1:1})).sort((function(e,t){return e.y<t.y?-1:1})),id:e.id}},T=function(e){return e.map((function(e){return{x:h[e.x-1],y:f[e.y-1]}}))},G=function(e){return e.map((function(e){return{x:h.findIndex((function(t){return t===e.x}))+1,y:f.findIndex((function(t){return t===e.y}))+1}}))},B=function(e){return getComputedStyle(document.querySelector(":root")).getPropertyValue(e)},D={x:1,y:1},E={height:20,width:13},W=function(){var e=a.a.useContext(x).initializerCellSideSize,t=a.a.useMemo((function(){return{height:E.height*e,width:E.width*e}}),[E,e]);return Object(b.jsx)(x.Consumer,{children:function(n){return Object(b.jsx)(d.f,{width:E.width*e,height:E.height*e,children:Object(b.jsxs)(x.Provider,{value:n,children:[Object(b.jsx)(m,{size:t,cellSideSize:e}),Object(b.jsxs)(d.c,{x:((null===D||void 0===D?void 0:D.x)||0)*e,y:((null===D||void 0===D?void 0:D.y)||0)*e,children:[Object(b.jsx)(O,{cellSideSize:e}),Object(b.jsx)(S,{cellSideSize:e}),Object(b.jsx)(d.e,{x:e,y:e,width:h.length*e,height:f.length*e,strokeWidth:2,stroke:B("--blue")})]}),Object(b.jsx)(M,{position:D,cellSideSize:e}),Object(b.jsx)(P,{position:D,cellSideSize:e}),Object(b.jsx)(R,{position:D,cellSideSize:e})]})})}})},L=n(10),H=n(35),J=n.n(H);function A(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return e?"string"===typeof e?e:"object"===typeof e?Object.keys(e).map((function(t){return e[t]?t:""})).join(" "):"":""})).join(" ").trim()}var q=n(49),Q=n.n(q),U=function(e){var t=e.size,n=void 0===t?30:t;return Object(b.jsx)("div",{style:{width:n,height:n},className:Q.a.ldsDualRing})},K=["children","disabled","loading","loadingLabel","className"],V=function(e){var t=e.children,n=e.disabled,i=e.loading,a=e.loadingLabel,r=e.className,o=Object(z.a)(e,K);return Object(b.jsx)("button",Object(C.a)(Object(C.a)({className:A(J.a.button,r,Object(L.a)({},J.a.buttonDisabled,n))},o),{},{children:i?Object(b.jsxs)("div",{className:J.a.buttonLoadingWrapper,children:[Object(b.jsx)(U,{}),Object(b.jsx)("span",{className:J.a.buttonLoadingLabel,children:a})]}):t}))},X=n(28),Z=n.n(X),Y=n(36),$=n.n(Y),ee=function(e){var t=e.opened,n=void 0!==t&&t,i=e.onClose,a=e.className,r=e.children;return Object(b.jsx)(b.Fragment,{children:n?Object(b.jsxs)("div",{className:$.a.container,children:[Object(b.jsx)("div",{className:$.a.overlay,onClick:i}),Object(b.jsxs)("div",{className:A($.a.content,a),children:[Object(b.jsx)("span",{className:$.a.contentCross,onClick:i}),r]})]}):null})},te=function(){var e=a.a.useContext(x),t=e.rulesModalOpened,n=e.setRulesModelOpened;return Object(b.jsxs)(ee,{opened:t,onClose:function(){return n(!1)},className:Z.a.modal,children:[Object(b.jsx)("h4",{className:Z.a.header,children:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430:"}),Object(b.jsx)("ol",{className:Z.a.rulesList,children:Object(b.jsxs)("li",{className:Z.a.rulesListItem,children:["\u041a\u043e\u0440\u0430\u0431\u043b\u0438 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0441\u0442\u043e\u044f\u0442\u044c \u0440\u044f\u0434\u043e\u043c \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c. ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u0415\u0441\u043b\u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u044c \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c, \u0442\u043e \u043f\u043e\u0434 \u043d\u0438\u043c \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0440\u0435\u0442\u044c"," ",Object(b.jsx)("span",{className:Z.a.backlightGreen,children:"\u0437\u0435\u043b\u0451\u043d\u0430\u044f \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"\u0415\u0441\u043b\u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0440\u0435\u0442\u044c"," ",Object(b.jsx)("span",{className:Z.a.backlightRed,children:"\u043a\u0440\u0430\u0441\u043d\u0430\u044f \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430"})]})})]})},ne=a.a.createContext({game:null,setGame:function(){},step:"register",setStep:function(){},myMap:{ships:[],hits:[]},setMyMapShips:function(){},setMyMapHits:function(){},rivalMap:{ships:[],hits:[]},setRivalMapShips:function(){},setRivalMapHits:function(){},reset:function(){}}),ie=function(e){var t=e.children,n=a.a.useState("register"),i=Object(c.a)(n,2),r=i[0],o=i[1],s=a.a.useState(null),l=Object(c.a)(s,2),d=l[0],u=l[1],j=a.a.useState([]),p=Object(c.a)(j,2),h=p[0],f=p[1],y=a.a.useState([]),x=Object(c.a)(y,2),v=x[0],m=x[1],O=a.a.useState([]),S=Object(c.a)(O,2),g=S[0],_=S[1],k=a.a.useState([]),N=Object(c.a)(k,2),M=N[0],z=N[1];return a.a.useEffect((function(){f((function(e){return e.map((function(e){var t=!e.coords.filter((function(e){return!v.find((function(t){return e.x===t.x&&e.y===t.y}))})).length;return Object(C.a)(Object(C.a)({},e),{},{destroyed:t})}))}))}),[v]),a.a.useEffect((function(){_((function(e){return e.map((function(e){var t=!e.coords.filter((function(e){return!M.find((function(t){return e.x===t.x&&e.y===t.y}))})).length;return Object(C.a)(Object(C.a)({},e),{},{destroyed:t})}))}))}),[M]),Object(b.jsx)(ne.Provider,{value:{game:d,setGame:u,step:r,setStep:o,myMap:{ships:h,hits:v},setMyMapShips:f,setMyMapHits:m,rivalMap:{ships:g,hits:M},setRivalMapShips:_,setRivalMapHits:z,reset:function(){o("initializer"),f([]),_([]),z([]),m([])}},children:t})},ae=n(0),re=n(1),oe=n(15),ce=function(){function e(){Object(ae.a)(this,e)}return Object(re.a)(e,null,[{key:"setFirestoreDb",value:function(e){this.firestoreDb=e}},{key:"getFirestoreDb",value:function(){return this.firestoreDb}},{key:"createBattle",value:function(e){return Object(oe.a)(Object(oe.c)(this.firestoreDb,this.collectionName),{move:"player1",player1:{readyToPlay:!1,nickname:e,map:[],hits:[]},player2:{readyToPlay:!1,nickname:null,map:[],hits:[]}})}},{key:"joinToBattle",value:function(e,t){return Object(oe.o)(Object(oe.d)(this.firestoreDb,this.collectionName,e),{"player2.nickname":t})}},{key:"readyToPlay",value:function(e,t,n){var i,a=Object(oe.d)(this.firestoreDb,this.collectionName,e);return Object(oe.o)(a,(i={},Object(L.a)(i,"".concat(t,".map"),n),Object(L.a)(i,"".concat(t,".readyToPlay"),!0),i))}},{key:"hit",value:function(e,t,n,i){return Object(oe.o)(Object(oe.d)(this.firestoreDb,this.collectionName,e),Object(L.a)({move:i},"".concat("player1"===n?"player2":"player1",".hits"),Object(oe.b)(t)))}},{key:"reset",value:function(e){return Object(oe.o)(Object(oe.d)(this.firestoreDb,this.collectionName,e),{"player1.hits":[],"player1.map":[],"player1.readyToPlay":!1,"player2.hits":[],"player2.map":[],"player2.readyToPlay":!1})}}]),e}();ce.collectionName="battles",ce.firestoreDb=void 0;var se=n(26),le=n(50);function de(e){return Object(le.a)(e?Object(oe.d)(ce.getFirestoreDb(),ce.collectionName,e):void 0)}var ue=function(e){se.Store.addNotification({type:"success",message:e,dismiss:{duration:3e3},container:"top-right"})},je=function(){var e,t,n,i,r,o,s,d,u=a.a.useRef(null),j=a.a.useContext(ne),p=j.setStep,h=j.setMyMapShips,f=j.setRivalMapShips,y=j.game,v=a.a.useContext(x),m=v.mapShips,O=v.positionedShips,S=v.setRulesModelOpened,g=v.setInitializerCellSideSize,_=a.a.useState(!1),k=Object(c.a)(_,2),N=k[0],M=k[1],C=de(null===y||void 0===y?void 0:y.id),z=Object(c.a)(C,1)[0];return a.a.useEffect((function(){u.current&&g(u.current.clientWidth/E.width)}),[]),a.a.useEffect((function(){var e=null===z||void 0===z?void 0:z.data();e&&("player1"===(null===y||void 0===y?void 0:y.player)&&e.player2.readyToPlay&&!e.player1.readyToPlay||"player2"===(null===y||void 0===y?void 0:y.player)&&e.player1.readyToPlay&&!e.player2.readyToPlay)&&ue("".concat("player1"===(null===y||void 0===y?void 0:y.player)?e.player2.nickname:e.player1.nickname," \u0433\u043e\u0442\u043e\u0432 \u043a \u0431\u043e\u044e!"))}),[z]),a.a.useEffect((function(){var e=null===z||void 0===z?void 0:z.data();y&&e&&e.player1.readyToPlay&&e.player2.readyToPlay&&(p("game"),h(m),f(e["player1"===y.player?"player2":"player1"].map),se.Store.addNotification({type:"success",message:"\u0418\u0433\u0440\u0430 \u043d\u0430\u0447\u0430\u043b\u0430\u0441\u044c!",container:"top-right",dismiss:{duration:3e3}}))}),[z]),Object(b.jsxs)("div",{className:l.a.container,ref:u,children:[Object(b.jsx)("h2",{className:l.a.header,children:"\u0420\u0430\u0441\u0441\u0442\u0430\u0432\u044c \u0441\u0432\u043e\u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u0438!"}),Object(b.jsx)("div",{className:l.a.painter,children:Object(b.jsx)(W,{})}),Object(b.jsxs)("div",{className:l.a.actions,children:[Object(b.jsx)(V,{className:A(l.a.actionsAction,l.a.actionsReady),disabled:!!O.length,onClick:function(){y&&(M(!0),ce.readyToPlay(y.id,y.player,m).finally((function(){return M(!1)})))},loading:N||("player1"===(null===y||void 0===y?void 0:y.player)?(null===z||void 0===z||null===(e=z.data())||void 0===e?void 0:e.player1.readyToPlay)&&!(null!==z&&void 0!==z&&null!==(t=z.data())&&void 0!==t&&t.player2.readyToPlay):(null===z||void 0===z||null===(n=z.data())||void 0===n?void 0:n.player2.readyToPlay)&&!(null!==z&&void 0!==z&&null!==(i=z.data())&&void 0!==i&&i.player1.readyToPlay)),loadingLabel:("player1"===(null===y||void 0===y?void 0:y.player)?!(null===z||void 0===z||null===(r=z.data())||void 0===r?void 0:r.player1.readyToPlay)||null!==z&&void 0!==z&&null!==(o=z.data())&&void 0!==o&&o.player2.readyToPlay:!(null===z||void 0===z||null===(s=z.data())||void 0===s?void 0:s.player2.readyToPlay)||null!==z&&void 0!==z&&null!==(d=z.data())&&void 0!==d&&d.player1.readyToPlay)?void 0:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u0430",children:"\u0413\u043e\u0442\u043e\u0432!"}),Object(b.jsx)(V,{className:A(l.a.actionsAction,l.a.actionsInsctruction),onClick:function(){return S(!0)},children:"?"}),Object(b.jsx)(te,{})]})]})},pe=n(32),he=n.n(pe),fe=function(e){var t=e.mapState,n=t.ships,i=t.hits,r=e.cellSideSize,o=void 0===r?j:r,c=a.a.useMemo((function(){return i.filter((function(e){return!n.map((function(e){return e.coords})).flat().find((function(t){return t.x===e.x&&t.y===e.y}))}))}),[n,i]);return Object(b.jsx)(d.b,{x:o,y:o,children:c.map((function(e){return Object(b.jsx)(d.g,{numPoints:Math.floor(o/4),innerRadius:o/9,outerRadius:o/3,strokeWidth:1,stroke:"red",x:h.findIndex((function(t){return t===e.x}))*o+o/2,y:f.findIndex((function(t){return t===e.y}))*o+o/2},e.x+e.y)}))})},be=function(e){var t=e.cellSideSize,n=void 0===t?j:t,i=e.onClick,r=e.existsHits,o=e.disabled,s=a.a.useState(null),l=Object(c.a)(s,2),u=l[0],p=l[1],y=function(e){var t={x:e.x<0?"a":e.x>h.length*n?h[h.length-1]:h[Math.floor(e.x/n)],y:e.y<0?"1":e.y>f.length*n?f[f.length-1]:f[Math.floor(e.y/n)]};o||JSON.stringify(t)===JSON.stringify(u)||p({position:t,wrongPosition:!!r.find((function(e){return e.x===t.x&&e.y===t.y}))})};return a.a.useEffect((function(){o&&p(null)}),[o]),Object(b.jsxs)(d.b,{x:n,y:n,onMouseLeave:function(){return p(null)},children:[Object(b.jsx)(d.e,{width:h.length*n,height:f.length*n,fill:"red",opacity:.1,onMouseMove:function(e){return y(e.target.getRelativePointerPosition())},onTap:function(e){return y(e.target.getRelativePointerPosition())}}),u&&Object(b.jsx)(d.e,{x:h.findIndex((function(e){return e===u.position.x}))*n,y:f.findIndex((function(e){return e===u.position.y}))*n,height:n,width:n,fill:u.wrongPosition?"red":"green",opacity:.5,onClick:function(){return!u.wrongPosition&&!o&&i(u.position)},onTap:function(){return!u.wrongPosition&&!o&&i(u.position)}})]})},ye=function(e){var t=e.mapState,n=e.position,i=e.cellSideSize,a=void 0===i?j:i,r=e.nickname,o=e.hit;return Object(b.jsxs)(d.c,{x:((null===n||void 0===n?void 0:n.x)||0)*a,y:((null===n||void 0===n?void 0:n.y)||0)*a,children:[Object(b.jsx)(O,{cellSideSize:a}),Object(b.jsx)(S,{cellSideSize:a}),r&&Object(b.jsx)(d.h,{text:r,fontSize:20,y:-20,x:10}),Object(b.jsx)(d.e,{x:a,y:a,width:h.length*a,height:f.length*a,stroke:B("--blue"),strokeWidth:3}),Object(b.jsx)(N,{mapState:t,cellSideSize:a}),Object(b.jsx)(fe,{mapState:t,cellSideSize:a}),o&&Object(b.jsx)(be,{cellSideSize:a,onClick:o.onHit,existsHits:o.hits,disabled:o.disabled})]})},xe=function(e){var t=e.position,n=e.cellSideSize,i=a.a.useContext(ne),r=i.setStep,o=i.myMap,s=i.setMyMapHits,l=i.game,d=de(null===l||void 0===l?void 0:l.id),u=Object(c.a)(d,1)[0];return a.a.useEffect((function(){var e=null===u||void 0===u?void 0:u.data();l&&e&&("player1"===l.player?s(e.player1.hits):s(e.player2.hits))}),[u]),a.a.useEffect((function(){o.ships.reduce((function(e,t){return e&&t.destroyed}),!0)&&r("end")}),[o]),Object(b.jsx)(ye,{position:t,mapState:o,cellSideSize:n,nickname:null===l||void 0===l?void 0:l.myNickname})},ve=n(4),me=n(2),Oe=n.n(me),Se=function(e){var t,n=e.position,i=e.cellSideSize,r=void 0===i?j:i,o=a.a.useContext(ne),s=o.setStep,l=o.rivalMap,d=o.setRivalMapHits,u=o.game,p=a.a.useState([]),h=Object(c.a)(p,2),f=h[0],y=h[1],x=de(null===u||void 0===u?void 0:u.id),v=Object(c.a)(x,1)[0],m=function(){var e=Object(ve.a)(Oe.a.mark((function e(t){var n,i;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=5;break}return n=l.ships.map((function(e){return e.coords})).flat(),i=!!n.find((function(e){return e.x===t.x&&e.y===t.y})),e.next=5,ce.hit(u.id,t,u.player,i?u.player:"player1"===u.player?"player2":"player1");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.useEffect((function(){var e=null===v||void 0===v?void 0:v.data();u&&e&&("player1"===u.player?d(e.player2.hits):d(e.player1.hits))}),[v]),a.a.useEffect((function(){l.ships.length===f.length&&f.reduce((function(e,t){return e&&t.destroyed}),!0)&&s("end")}),[f]),a.a.useEffect((function(){var e=JSON.parse(JSON.stringify(l.ships)),t=[];e.forEach((function(e){if(!!e.coords.find((function(e){return l.hits.find((function(t){return e.x===t.x&&e.y===t.y}))}))){var n=e.coords.length;e.coords=e.coords.filter((function(e){return l.hits.find((function(t){return e.x===t.x&&e.y===t.y}))})),n===e.coords.length&&(e.destroyed=!0),t.push(e)}})),y(t)}),[l.hits]),Object(b.jsx)(ye,{position:n,mapState:{ships:f,hits:l.hits},cellSideSize:r,nickname:null===u||void 0===u?void 0:u.rivalNickname,hit:{onHit:m,hits:l.hits,disabled:(null===v||void 0===v||null===(t=v.data())||void 0===t?void 0:t.move)!==(null===u||void 0===u?void 0:u.player)}})},ge=p?27:15,_e=p?15:27,ke=function(e){var t=e.containerWidth,n=a.a.useState(j),i=Object(c.a)(n,2),r=i[0],o=i[1];return a.a.useEffect((function(){o(Math.min(t,800)/_e)}),[t]),Object(b.jsx)(ne.Consumer,{children:function(e){return Object(b.jsx)(d.f,{width:_e*r,height:ge*r,children:Object(b.jsxs)(ne.Provider,{value:e,children:[Object(b.jsx)(m,{size:{width:_e*r,height:ge*r},cellSideSize:r}),Object(b.jsx)(xe,{position:{x:p?2:1,y:2},cellSideSize:r}),Object(b.jsx)(Se,{position:{x:p?2:14,y:p?14:2},cellSideSize:r})]})})}})},Ne=function(){var e,t=a.a.useContext(ne).game,n=de(null===t||void 0===t?void 0:t.id),i=Object(c.a)(n,1)[0];return Object(b.jsx)("div",{children:t&&null!==i&&void 0!==i&&i.data()?(null===i||void 0===i||null===(e=i.data())||void 0===e?void 0:e.move)===t.player?Object(b.jsx)("p",{className:he.a.orderText,children:"\u0422\u0432\u043e\u0439 \u0445\u043e\u0434!"}):Object(b.jsx)("p",{className:he.a.orderText,children:"\u0422\u0435\u043f\u0435\u0440\u044c \u0445\u043e\u0434\u0438\u0442 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a. \u0416\u0434\u0451\u043c!"}):null})},Me=function(){var e=a.a.useRef(null),t=a.a.useState(0),n=Object(c.a)(t,2),i=n[0],r=n[1];return a.a.useEffect((function(){e.current&&r(e.current.clientWidth)}),[]),Object(b.jsxs)("div",{className:he.a.container,ref:e,children:[Object(b.jsx)(Ne,{}),Object(b.jsx)("div",{className:he.a.containerGameContainer,children:Object(b.jsx)(ke,{containerWidth:i})})]})},Ce=n(18),ze=n.n(Ce);var we=n(45),Ie=n.n(we),Pe=["label","className","containerClassName"],Re=function(e){var t=e.label,n=e.className,i=e.containerClassName,a=Object(z.a)(e,Pe);return Object(b.jsxs)("div",{className:A(i),children:[t&&Object(b.jsx)("span",{className:Ie.a.label,children:t}),Object(b.jsx)("input",Object(C.a)({className:A(Ie.a.input,n),type:"text"},a))]})},Fe=function(e){var t,n,i=e.onClose,r=a.a.useContext(ne),o=r.setGame,s=r.setStep,l=a.a.useState(""),d=Object(c.a)(l,2),u=d[0],j=d[1],p=a.a.useState(""),h=Object(c.a)(p,2),f=h[0],y=h[1],x=a.a.useState(!1),v=Object(c.a)(x,2),m=v[0],O=v[1],S=de(u),g=Object(c.a)(S,1)[0],_=function(){var e=Object(ve.a)(Oe.a.mark((function e(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(!0),ce.createBattle(f).then((function(e){j(e.id),ue("\u0411\u0438\u0442\u0432\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e")})).catch(console.log).finally((function(){return O(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){var e=null===g||void 0===g?void 0:g.data();e&&e.player1.nickname&&e.player2.nickname&&(o({id:u,player:"player1",myNickname:e.player1.nickname,rivalNickname:e.player2.nickname}),s("initializer"))}),[g]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:ze.a.createFormGameIdContainer,children:[Object(b.jsx)("p",{className:ze.a.createFormGameIdDescription,children:"\u042d\u0442\u043e\u0442 \u043a\u043e\u0434 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0443:"}),Object(b.jsx)("p",{className:ze.a.createFormGameId,children:u}),!u&&Object(b.jsx)("p",{className:ze.a.createFormGameId,children:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0431\u0438\u0442\u0432\u0443, \u0437\u0430\u0442\u0435\u043c \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043a\u043e\u0434"}),Object(b.jsx)(V,{className:ze.a.createFormGameIdButton,onClick:function(){return function(e){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(e);var t=document.createElement("textarea");return t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",document.body.appendChild(t),t.focus(),t.select(),new Promise((function(e,n){document.execCommand("copy")?e():n(),t.remove()}))}(u)},disabled:!u,children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(b.jsx)(Re,{placeholder:"\u0412\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0439 \u043d\u0438\u043a\u043d\u044d\u0439\u043c",label:"\u041d\u0438\u043a\u043d\u044d\u0439\u043c*",onChange:function(e){return y(e.target.value)},value:f,disabled:!(null===g||void 0===g||!g.data())}),Object(b.jsxs)("div",{className:ze.a.buttons,children:[Object(b.jsx)(V,{onClick:_,className:ze.a.buttonsButton,disabled:!f||!(null===g||void 0===g||!g.data()),loading:m||(null===g||void 0===g?void 0:g.data())&&!(null!==g&&void 0!==g&&null!==(t=g.data())&&void 0!==t&&t.player2.nickname),loadingLabel:null===g||void 0===g||!g.data()||null!==g&&void 0!==g&&null!==(n=g.data())&&void 0!==n&&n.player2.nickname?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430":"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0438\u0433\u0440\u043e\u043a\u0430",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),Object(b.jsx)(V,{onClick:i,className:ze.a.buttonsButton,children:"\u041d\u0430\u0437\u0430\u0434"})]})]})},Te=function(e){var t,n=e.onClose,i=a.a.useContext(ne),r=i.setGame,o=i.setStep,s=a.a.useState(""),l=Object(c.a)(s,2),d=l[0],u=l[1],j=a.a.useState(""),p=Object(c.a)(j,2),h=p[0],f=p[1],y=a.a.useState(!1),x=Object(c.a)(y,2),v=x[0],m=x[1],O=de(d),S=Object(c.a)(O,1)[0];a.a.useEffect((function(){var e,t;h===(null===S||void 0===S||null===(e=S.data())||void 0===e?void 0:e.player1.nickname)&&(t="\u041d\u0438\u043a\u0438 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0438. \u0412\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439 \u043d\u0438\u043a",se.Store.addNotification({type:"warning",message:t,dismiss:{duration:3e3},container:"top-right"}))}),[h]),a.a.useEffect((function(){var e=null===S||void 0===S?void 0:S.data();e&&e.player1.nickname&&e.player2.nickname&&(r({id:d,player:"player2",myNickname:e.player2.nickname,rivalNickname:e.player1.nickname}),o("initializer"))}),[S]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Re,{label:"\u0412\u0441\u0442\u0430\u0432\u044c \u0441\u044e\u0434\u0430 \u043a\u043e\u0434 \u0438\u0433\u0440\u044b",placeholder:"\u041a\u043e\u0434 \u0438\u0433\u0440\u044b",onChange:function(e){return u(e.target.value)},value:d}),Object(b.jsx)(Re,{placeholder:"\u0412\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0439 \u043d\u0438\u043a\u043d\u044d\u0439\u043c",label:"\u041d\u0438\u043a\u043d\u044d\u0439\u043c*",onChange:function(e){return f(e.target.value)},value:h}),Object(b.jsxs)("div",{className:ze.a.buttons,children:[Object(b.jsx)(V,{onClick:function(){m(!0),ce.joinToBattle(d,h).then((function(){return console.log("joined to game")})).catch((function(){return e="\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",void se.Store.addNotification({type:"danger",message:e,dismiss:{duration:3e3},container:"top-right"});var e})).finally((function(){return m(!1)}))},className:ze.a.buttonsButton,disabled:!h||!d||h===(null===S||void 0===S||null===(t=S.data())||void 0===t?void 0:t.player1.nickname),loading:v,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(b.jsx)(V,{onClick:n,className:ze.a.buttonsButton,children:"\u041d\u0430\u0437\u0430\u0434"})]})]})},Ge=function(){var e=a.a.useState(null),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(b.jsx)("div",{className:ze.a.container,children:Object(b.jsxs)("div",{className:ze.a.mainForm,children:[null===n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V,{className:ze.a.mainFormButton,onClick:function(){return i("create")},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u0433\u0440\u0443"}),Object(b.jsx)(V,{className:ze.a.mainFormButton,onClick:function(){return i("login")},children:"\u0412\u043e\u0439\u0442\u0438 \u0441 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e"})]}),"create"===n&&Object(b.jsx)(Fe,{onClose:function(){return i(null)}}),"login"===n&&Object(b.jsx)(Te,{onClose:function(){return i(null)}})]})})},Be=n(37),De=n.n(Be),Ee=function(){var e=a.a.useContext(ne),t=e.myMap,n=e.rivalMap,i=e.reset,r=e.game,o=a.a.useContext(x).resetInitializer,c=function(){var e=Object(ve.a)(Oe.a.mark((function e(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=5;break}return i(),o(),e.next=5,ce.reset(r.id);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:De.a.container,children:[!!t.ships.length&&t.ships.reduce((function(e,t){return t.destroyed&&e}),!0)&&Object(b.jsx)("p",{className:De.a.winLabel,children:"\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438((("}),!!n.ships.length&&n.ships.reduce((function(e,t){return t.destroyed&&e}),!0)&&Object(b.jsx)("p",{className:De.a.winLabel,children:"\u0412\u044b \u0432\u044b\u0438\u0433\u0440\u0430\u043b\u0438!"}),Object(b.jsx)(V,{onClick:c,className:De.a.restartButton,children:"\u0418\u0433\u0440\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430"})]})};var We=function(){var e=a.a.useContext(ne).step;return Object(b.jsxs)("div",{className:"app",children:["register"===e&&Object(b.jsx)(Ge,{}),"initializer"===e&&Object(b.jsx)(je,{}),"game"===e&&Object(b.jsx)(Me,{}),"end"===e&&Object(b.jsx)(Ee,{}),Object(b.jsx)(se.ReactNotifications,{})]})},Le=n(51).a({apiKey:"AIzaSyDUrwg_ZtFObXBZEx0Q7nmiXs5tRpsTJBc",authDomain:"sea-battle-3cb54.firebaseapp.com",projectId:"sea-battle-3cb54",storageBucket:"sea-battle-3cb54.appspot.com",messagingSenderId:"391483818458",appId:"1:391483818458:web:c8166093bec5421e0bc0e3"});ce.setFirestoreDb(Object(oe.k)(Le)),o.a.render(Object(b.jsx)(i.StrictMode,{children:Object(b.jsx)(ie,{children:Object(b.jsx)(v,{children:Object(b.jsx)(We,{})})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.69d998ce.chunk.js.map