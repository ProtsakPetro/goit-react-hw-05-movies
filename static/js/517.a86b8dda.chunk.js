"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[517],{517:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(735),o=n(87),h=n(19),l=n(184),f=function(e){var t=e.submit,n=(0,o.lr)(),r=(0,a.Z)(n,2),u=r[0],c=r[1],s=u.get("search")||"";return(0,l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:(0,l.jsxs)(h.yh,{children:[(0,l.jsx)(h.II,{name:"title",type:"text",value:s,placeholder:"I search...",required:!0,onChange:function(e){var t=e.target.value;c(""===t?{search:void 0}:{search:t})}}),(0,l.jsx)(h.zx,{type:"submit",children:"SEARCH"})]})})},p=n(243),d=new URLSearchParams({include_adult:"false",language:"en-US",page:"1"}),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(d,"&query=").concat(t),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjU5ZDljNDA1MDhkOGIzZjNhOWM1YmJmNGQ4MjMxYiIsInN1YiI6IjY1MjliYTlmODEzODMxMDBjNDhhZjFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fINv1qn7RIF6QqQY4oOTPAsipMP0leD8fxTF0uky0-A"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,s.useState)(!1),d=(0,a.Z)(p,2),j=d[0],x=d[1],m=(0,s.useState)(null),I=(0,a.Z)(m,2),Z=I[0],g=I[1],b=(0,s.useState)(""),y=(0,a.Z)(b,2),k=y[0],N=y[1],w=(0,o.lr)(),D=(0,a.Z)(w,1)[0].get("search"),J=(0,s.useRef)(D),S=(0,s.useCallback)(function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),g(null),e.next=5,v(t);case 5:n=e.sent,g(n.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u(e.t0.response.data);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return(0,s.useEffect)((function(){k&&S(k)}),[S,k]),(0,s.useEffect)((function(){J.current&&S(J.current)}),[S]),(0,l.jsxs)(h.TU,{children:[(0,l.jsx)(f,{submit:function(e){N(e)}}),j&&"Loading...",n&&n.message,Z&&(Z.length?(0,l.jsx)(i.Z,{data:Z}):(0,l.jsx)("h1",{children:"No data found"}))]})}}}]);
//# sourceMappingURL=517.a86b8dda.chunk.js.map