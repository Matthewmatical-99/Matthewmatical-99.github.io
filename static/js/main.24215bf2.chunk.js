(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,n,t){e.exports=t.p+"static/media/sanik.e071ee00.png"},63:function(e,n,t){e.exports=t(91)},68:function(e,n,t){},74:function(e,n,t){},90:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(12),o=t.n(i),c=(t(68),t(17)),l=t(22),u=t(24),f=t(40),m="/",h="/about-me/",s="/games/",d="/dank-memes/",p=t(25),v={MAZE_CONFIG:"MAZE_CONFIG"},x={width:58,height:37};var g=Object(u.b)({maze:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v.MAZE_CONFIG:return Object(p.a)({},e,function(e){var n={};return e.height&&(n.height=Math.max(e.height,5)),e.width&&(n.width=Math.max(e.width,5)),n}(n));default:return e}}}),E=t(50),y=t.n(E),b=t(8),w=t(9);function k(){var e=Object(b.a)(["\n    max-height: 100px;\n    max-width: 100px;\n    position: fixed;\n    left: -100px;\n    -webkit-animation: gottagofast 0.5s linear infinite;\n    animation: gottagofast 0.5s linear infinite;\n    bottom: 0px;\n\n    @-webkit-keyframes gottagofast {\n        from {\n            left: -100px;\n        } to {\n            left: 100vw;\n        }\n    }\n    \n    @keyframes gottagofast {\n        from {\n            left: -100px;\n        } to {\n            left: 100vw;\n        }\n    }\n"]);return k=function(){return e},e}var O=w.a.img(k()),j=function(){return r.a.createElement(O,{src:y.a})};t(74);var M=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"content-body"},r.a.createElement("p",null,"This is the official website of Matthew Phillips. Thank you for visiting."),r.a.createElement("p",null,"I made this website to show off my l33t c0d1ng ski11z."),r.a.createElement("p",null,"Since I've just started working on this, there isn't much here."),r.a.createElement("p",null,"More content (and maybe even some professionalism) coming soon. Please check again tomorrow."),r.a.createElement("a",{className:"App-link",href:"https://github.com/Matthewmatical-99",target:"_blank",rel:"noopener noreferrer"},"My GitHub page")),r.a.createElement(j,null))},_=function(){return r.a.createElement("div",null,r.a.createElement("p",{style:{color:"white"}},"This page is coming soon. Don't hold your breath."),r.a.createElement(c.b,{to:m,style:{color:"#61dafb"}},"Back to homepage"))},N=t(34),A=t(54),I=t(26),C=t(58),S=t(55),X=t(59),z=function(e){return Object(p.a)({},e,{type:v.MAZE_CONFIG})},H=t(109),W=function(e){var n=e.value,t=e.height,a=e.handler,i=e.name;return r.a.createElement("div",null,r.a.createElement("label",null,i),r.a.createElement(H.a,{max:201,min:5,onChange:function(e,n){return a(n)},step:t?2:1,value:n}))};function D(e,n){var t=Array(n).fill("placeholder");return t.forEach(function(a,r){t[r]=new Array(e).fill(!0),0===r||r===n-1?t[r].forEach(function(e,n){t[r][n]=!1}):r%2?t[r].forEach(function(e,n){t[r][n]=Math.random()<.85}):t[r].forEach(function(e,n){t[r][n]=!!(n&&!t[r][n-1]&&Math.random()<.35)}),t[r][0]=!1,t[r][e-1]=!1}),t[n-1][e-2]=!0,t[1][1]=!0,t[1][2]=!0,t[2][1]=!0,t}function Y(e){for(var n=0,t=e[0].length*e.length*4,a=1,r=1,i=1;n<3&&t;){if(a===e[0].length-2&&r===e.length-1)return!0;1===a&&1===r&&n++;var o=a+i%2*(i-2),c=r+!(i%2)*(i-1);e[c][o]?(a=o,r=c,i+=3):i++,i%=4,t--}return!1}function R(e,n){for(var t=D(e,n);!Y(t);t=D(e,n));return function(e){for(var n=e[0].length-2,t=e.length-2,a=2;a<t;a+=2)for(var r=1;r<=n;r++){if(e[a-1][r-1]&&e[a][r-1]&&e[a+1][r-1])for(var i=r;e[a-1][i]&&e[a+1][i];)e[a][i]=!1,i++;e[a-1][r]||e[a+1][r]||e[a][r-1]||e[a][r+1]||(e[a][r]=!1),e[a-2][r]||e[a][r]||e[a-1][r-1]||e[a-1][r+1]||(e[a-1][r]=!1)}for(var o=1;o<=n;o++)e[t-1][o]||e[t+1][o]||e[t][o-1]||e[t][o+1]||(e[t][o]=!1);return e}(t)}function T(){var e=Object(b.a)(["\n  width: 100px;\n  margin: 10px;\n"]);return T=function(){return e},e}function G(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return G=function(){return e},e}function P(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n"]);return P=function(){return e},e}function F(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  overflow: auto;\n\n  @media (max-width: ","px) {\n    align-self: flex-start;\n  }\n"]);return F=function(){return e},e}function U(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return U=function(){return e},e}function Z(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Z=function(){return e},e}function B(){var e=Object(b.a)(["\n  min-height: 10px;\n  min-width: 10px;\n  max-height: 10px;\n  max-width: 10px;\n  background-color: ",";\n  opacity: 0.8;\n"]);return B=function(){return e},e}var V=w.a.div(B(),function(e){return e.hall?"white":"black"}),J=w.a.div(Z()),L=w.a.div(U()),K=w.a.div(F(),function(e){return 10*e.mazeWidth}),$=w.a.div(P()),q=w.a.div(G()),Q=w.a.div(T()),ee=function(e,n,t){var a=Array(8).fill(null);return a.forEach(function(r,i){if(8*t+i>=e.length)return a.filter(function(e){return e});a[i]=e[8*t+i].slice(8*n,8*(n+1))}),a.filter(function(e){return e})},ne=function(e){function n(){return Object(A.a)(this,n),Object(C.a)(this,Object(S.a)(n).apply(this,arguments))}return Object(X.a)(n,e),Object(I.a)(n,[{key:"shouldComponentUpdate",value:function(e){var n=this.props,t=n.chunk,a=n.x,r=n.y,i=n.chunkX,o=n.chunkY,c=e.limits,l=c.minX,u=c.minY,f=c.maxX,m=c.maxY;return t!==e.chunk||(e.x!==a||e.y!==r)&&(Math.floor(e.x/8)===i&&u<=o&&m>=o||Math.floor(e.y/8)===o&&l<=i&&f>=i)}},{key:"render",value:function(){var e=this.props,n=e.chunk,t=e.chunkX,a=e.chunkY,i=e.cursorColour,o=e.makeHandler,c=e.x,l=e.y;return r.a.createElement(L,null,n.map(function(e,n){return r.a.createElement(J,null,e.map(function(e,u){var f=8*t+u,m=8*a+n;return r.a.createElement(V,{hall:e,style:f===c&&m===l?{backgroundColor:i}:{},onClick:o(f,m)})}))}))}}]),n}(r.a.Component),te=function(e){var n=e.grid,t=e.restartHandler,a=e.finishRestarting,i=r.a.useState({x:1,y:1}),o=Object(N.a)(i,2),c=o[0],l=o[1],u=r.a.useState([]),f=Object(N.a)(u,2),m=f[0],h=f[1],s=c.x===n[0].length-2&&c.y===n.length-1,d=s?"green":"red";r.a.useEffect(function(){l({x:1,y:1});var e=Math.ceil(n[0].length/8),t=Math.ceil(n.length/8),r=Array(t).fill(null);r.forEach(function(t,a){r[a]=[];for(var i=0;i<e;i++)r[a].push(ee(n,i,a))}),h(r),a()},[n]);var p=function(e,t){return function(){if(e===c.x){for(var a=Math.min(c.y,t);a<=Math.max(c.y,t);a++)if(!n[a][c.x])return;l({x:c.x,y:t})}else if(t===c.y){for(var r=Math.min(c.x,e);r<=Math.max(c.x,e);r++)if(!n[c.y][r])return;l({x:e,y:c.y})}}},v=[c.x,c.y,c.x,c.y],x=v[0],g=v[1],E=v[2],y=v[3];for(y=c.y;y<n.length-1&&n[y+1][c.x];y++);for(E=c.x;n[c.y][E+1];E++);for(x=c.x;n[c.y][x-1];x--);for(g=c.y;n[g-1][c.x];g--);var b={minX:x=Math.floor(x/8),minY:g=Math.floor(g/8),maxX:E=Math.floor(E/8),maxY:y=Math.floor(y/8)};return n?r.a.createElement($,{mazeWidth:n[0].length},r.a.createElement(K,{tabIndex:0,onKeyPress:function(e){if(t(e),!s)switch(e.key){case"w":case"W":n[c.y-1][c.x]&&l({x:c.x,y:c.y-1});break;case"a":case"A":n[c.y][c.x-1]&&l({x:c.x-1,y:c.y});break;case"s":case"S":n[c.y+1][c.x]&&l({x:c.x,y:c.y+1});break;case"d":case"D":n[c.y][c.x+1]&&l({x:c.x+1,y:c.y})}}},m.map(function(e,n){return r.a.createElement(J,null,e.map(function(e,t){return r.a.createElement(ne,Object.assign({cursorColour:d,chunkX:t,chunkY:n},c,{chunk:e,makeHandler:p,limits:b}))}))}))):null},ae=Object(f.b)(function(e){return Object(p.a)({},e.maze)},function(e){return{changeWidth:function(n){return e(z({width:n}))},changeHeight:function(n){return e(z({height:n-1}))}}})(function(e){var n=e.width,t=e.height,a=e.changeWidth,i=e.changeHeight,o=r.a.useState([]),c=Object(N.a)(o,2),l=c[0],u=c[1];l.length||u(R(n,t));var f=r.a.useState(!1),m=Object(N.a)(f,2),h=m[0],s=m[1],d=function(e){switch(e.key){case"r":case"R":h||(s(!0),u(R(n,t)))}};return r.a.createElement("div",null,r.a.createElement("div",{className:"content-body"},r.a.createElement(q,null,r.a.createElement("button",{onClick:function(){return d({key:"r"})}},"Restart"),r.a.createElement("p",null,"Maze Settings:"),r.a.createElement(Q,null,r.a.createElement(W,{value:n,handler:a,name:"Maze Width"})),r.a.createElement(Q,null,r.a.createElement(W,{value:t,handler:i,name:"Maze Height",height:!0})))),r.a.createElement(te,{grid:l,restartHandler:d,finishRestarting:function(){return s(!1)}}))});function re(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100vw;\n"]);return re=function(){return e},e}var ie=w.a.div(re()),oe=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"content-body"},r.a.createElement("p",null,"Here are some games I've made. More will be added approximately once every whenever I feel like it.")),r.a.createElement("div",{className:"content-body"},r.a.createElement("p",null,"Maze: Use WASD to move. Exit is in lower-right corner. Press R or click the button below to generate a new maze."),r.a.createElement("p",null,"Alternatively, tap/click any directly connected (same row/column) location to move there.")),r.a.createElement(ie,null,r.a.createElement(ae,null)))};function ce(){var e=Object(b.a)(["\n  height: 70px;\n  width: 120px;\n  background-color: #282c34;\n  color: white;\n  text-align: center;\n  line-height: 70px;\n  border: 2px solid #505868;\n  :hover {\n    background-color: #505868;\n  }\n  text-decoration-line: none;\n"]);return ce=function(){return e},e}function le(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  min-width: 80vw;\n  justify-content: center;\n"]);return le=function(){return e},e}function ue(){var e=Object(b.a)(["\n  min-width: 100vw;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"]);return ue=function(){return e},e}var fe=w.a.div(ue()),me=w.a.div(le()),he=w.a.div(ce()),se=function(){return r.a.createElement(fe,null,r.a.createElement(me,null,r.a.createElement(c.b,{to:m},r.a.createElement(he,null,"Home")),r.a.createElement(c.b,{to:h},r.a.createElement(he,null,"About Me")),r.a.createElement(c.b,{to:s},r.a.createElement(he,null,"Games")),r.a.createElement(c.b,{to:d},r.a.createElement(he,null,"Memes"))))},de=(t(90),Object(u.c)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),pe=function(){return r.a.createElement(f.a,{store:de},r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header",style:{backgroundImage:"url(https://imgur.com/kgbYeVO.jpg)"}},r.a.createElement("h1",{className:"page-title"},"Matthew Phillips' Website of Dank Memes")),r.a.createElement(se,null),r.a.createElement(l.a,{path:m,exact:!0,component:M}),r.a.createElement(l.a,{path:h,component:_}),r.a.createElement(l.a,{path:s,component:oe}),r.a.createElement(l.a,{path:d,component:_}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[63,1,2]]]);
//# sourceMappingURL=main.24215bf2.chunk.js.map