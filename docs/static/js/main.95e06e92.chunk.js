(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(r,e,t){},,,,,,,function(r,e,t){},function(r,e,t){},function(r,e,t){},,function(r,e,t){},function(r,e,t){},function(r,e,t){"use strict";t.r(e);var n=t(1),c=t.n(n),a=t(7),u=t.n(a),o=(t(13),t(8)),i=t(21),s=t(5),f=21;function d(){for(var r=[],e=0;e<f;e++){void 0===r[e]&&(r[e]=[]);for(var t=0;t<f;t++)r[e][t]=0,e===Math.floor(10.5)&&t===Math.floor(10.5)&&(r[e][t]=1)}return r}function j(r){for(var e=0,t=0,n=-1,c=0;c<f;c++)for(var a=0;a<f;a++)r[c][a]>n&&(e=c,t=a,n=r[c][a]);return{maxHead:n,xHead:e,yHead:t}}function l(r,e){return r=Math.ceil(r),e=Math.floor(e),Math.floor(Math.random()*(e-r))+r}function v(r){for(var e=0,t=0;t<f;t++)for(var n=0;n<f;n++)r[t][n]>0&&e++;return e-1}function b(r){for(var e=Object(s.a)(r),t=0;t<e.length;t++)e[t]=Object(s.a)(e[t]);return e}function x(r,e){var t=b(r);(function(r){for(var e=0;e<f;e++)for(var t=0;t<f;t++)if(-1===r[e][t])return!0;return!1})(t)||(t=function(r){console.log("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0436\u0435\u0440\u0442\u0432: 1");for(var e=b(r),t=l(0,f),n=l(0,f),c=0;c<f;c++)for(var a=0;a<f;a++)c===t&&a===n&&(e[c][a]=-1);return e}(t));var n=j(t),c=n.xHead,a=n.yHead,u=function(r,e,t){switch(t){case 0:--r<0&&(r=20);break;case 1:++r>20&&(r=0);break;case 2:--e<0&&(e=20);break;case 3:++e>20&&(e=0)}return{xNextHead:r,yNextHead:e}}(c,a,e),o=u.xNextHead,i=u.yNextHead;if(-1===t[o][i])return t[o][i]=t[c][a]+1,t;if(0===t[o][i]){var s=t[c][a];return(t=function(r){for(var e=b(r),t=0;t<f;t++)for(var n=0;n<f;n++)e[t][n]>0&&(e[t][n]=r[t][n]-1);return e}(t))[o][i]=s,t}return t[o][i]>0?t=d():t}t(14),t(15);var h=t(0);function O(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{className:"header1",children:"\u0417\u043c\u0435\u0439\u043a\u0430"}),Object(h.jsx)("h2",{className:"header2",children:"\u0418 \u0442\u0435\u0431\u044f \u0442\u043e\u0436\u0435 \u0441\u044a\u0435\u0441\u0442 (:"})]})}t(6);var m=function(r){var e=r.status,t=void 0===e?0:e,n=r.maxHead;return Object(h.jsx)("div",{className:"box "+(-1===t?"food":0===t?"empty":t===n?"head":t>0&&t<n?"body":void 0),children:" "})},y=(t(17),function(r){var e=r.matrix,t=j(e).maxHead;return Object(h.jsx)("div",{className:"matrix",children:e.map((function(r,e){return Object(h.jsx)("div",{className:"row",children:r.map((function(r,e){return Object(h.jsx)(m,{status:r,maxHead:t},e)}))},e)}))})}),p=(t(18),function(r){var e=r.bodyCount,t=void 0===e?0:e;return Object(h.jsxs)("div",{className:"counter",children:[" \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043a\u0443\u0448\u0446\u0430\u043d\u043d\u043e\u0433\u043e: ",t," "]})});var N=function(){var r=Object(n.useState)(d()),e=Object(o.a)(r,2),t=e[0],c=e[1],a=Object(n.useRef)(0),u=["w","W","ArrowUp"],s=["s","S","ArrowDown"],f=["a","A","ArrowLeft"],j=["d","D","ArrowRight"];return Object(i.a)((function(r){return u.includes(r.key)}),(function(){return 1!==a.current&&(a.current=0)})),Object(i.a)((function(r){return s.includes(r.key)}),(function(){return 0!==a.current&&(a.current=1)})),Object(i.a)((function(r){return f.includes(r.key)}),(function(){return 3!==a.current&&(a.current=2)})),Object(i.a)((function(r){return j.includes(r.key)}),(function(){return 2!==a.current&&(a.current=3)})),Object(n.useEffect)((function(){var r;return r=setInterval((function(){c((function(r){return x(r,a.current)}))}),100),function(){clearInterval(r)}}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"workspace",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("button",{className:"exit",onClick:function(){x(d(),0)},children:[" ","Restart Page"," "]}),Object(h.jsx)(p,{bodyCount:v(t)}),Object(h.jsx)(y,{matrix:t})]})})},H=function(r){r&&r instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,u=e.getTTFB;t(r),n(r),c(r),a(r),u(r)}))};u.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),H()}],[[19,1,2]]]);
//# sourceMappingURL=main.95e06e92.chunk.js.map