"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[680],{6713:function(n,e,t){t.d(e,{Hx:function(){return p},WK:function(){return f},Y5:function(){return o},uV:function(){return s},wr:function(){return i}});var r=t(5861),a=t(7757),c=t.n(a),u=t(3263),i=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=369463d5ad6fe666accc0e43886b3c6a&page=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=369463d5ad6fe666accc0e43886b3c6a&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=369463d5ad6fe666accc0e43886b3c6a&language&language=en-US\n    "));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=369463d5ad6fe666accc0e43886b3c6a&language=en-US&page=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=369463d5ad6fe666accc0e43886b3c6a&language=en-US&query=".concat(e,"&page=").concat(t,"&include_adult=true"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},854:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(5243),a=t(184);function c(){return(0,a.jsx)(r.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},680:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),c=t(7757),u=t.n(c),i=t(2791),o=t(6713),s=t(6214),p=t(854),f=t(184);e.default=function(){var n=(0,i.useState)(!1),e=(0,a.Z)(n,2),t=e[0],c=e[1],l=(0,i.useState)(""),d=(0,a.Z)(l,2),h=d[0],g=d[1],v=(0,i.useState)([]),m=(0,a.Z)(v,2),x=m[0],b=m[1],w=(0,i.useState)(1),Z=(0,a.Z)(w,2),y=Z[0],k=Z[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,(0,o.wr)(y);case 4:e=n.sent,b(y>1?function(n){return n.concat(e.results)}:e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),g(n.t0);case 11:return n.prev=11,c(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[y]),(0,f.jsxs)(f.Fragment,{children:[h&&(0,f.jsxs)("p",{children:["Whoops, something went wrong \ud83d\ude22: ",h.message]}),x.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.aV,{children:x.map((function(n){var e;return(0,f.jsx)(s.H2,{children:(0,f.jsxs)(s.up,{to:"/movies/".concat(n.id),children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(n.poster_path),alt:"".concat(n.name," poster"),height:300,loading:"lazy"}),(0,f.jsx)("p",{children:null!==(e=null===n||void 0===n?void 0:n.name)&&void 0!==e?e:n.original_title})]})},n.id)}))}),(0,f.jsx)(s.iz,{type:"button",onClick:function(n){n.preventDefault(),k((function(n){return n+1}))},children:"More movies"}),t&&(0,f.jsx)(p.Z,{})]})]})}},6214:function(n,e,t){t.d(e,{H2:function(){return f},aV:function(){return p},iz:function(){return l},up:function(){return d}});var r,a,c,u,i=t(168),o=t(6444),s=t(1598),p=o.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n  justify-content: center;\n  padding-inline-start: 0;\n"]))),f=o.ZP.li(a||(a=(0,i.Z)(["\n  width: 200px;\n"]))),l=o.ZP.button(c||(c=(0,i.Z)(["\n  cursor: pointer;\n  width: 200px;\n  height: 40px;\n  outline: none;\n  border: none;\n  background-color: orange;\n  color: aliceblue;\n  font-weight: 600;\n  border-radius: 13px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: black;\n    color: orange;\n  }\n"]))),d=(0,o.ZP)(s.rU)(u||(u=(0,i.Z)(["\n  padding: 0;\n"])))}}]);
//# sourceMappingURL=680.1051a7e4.chunk.js.map