"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[831],{831:function(n,e,t){t.r(e);var r=t(439),i=t(791),a=t(689),c=t(435),u=t(184),o=new c.Z;e.default=function(){var n=(0,i.useState)([]),e=(0,r.Z)(n,2),t=e[0],c=e[1],s=(0,i.useState)(null),h=(0,r.Z)(s,2),f=h[0],p=h[1],l=(0,i.useState)(!1),Z=(0,r.Z)(l,2),I=Z[0],d=Z[1],g=(0,a.UO)();return(0,i.useEffect)((function(){d(!0),o.Reviews(g.movieId).then((function(n){c(n),0===n.length&&p("There is no Reviews")})).catch((function(n){p(n)})).finally((function(){d(!1)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[I&&"Loading ...",f&&"".concat(f),0!==t.length&&t.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("p",{children:["Author: ",e]}),(0,u.jsx)("p",{children:t})]},r)}))]})}},435:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(861),i=t(671),a=t(144),c=t(757),u=t.n(c),o=function(){function n(){(0,i.Z)(this,n)}return(0,a.Z)(n,[{key:"All",value:function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?language=en-US&include_adult=false",e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},n.abrupt("return",fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US&include_adult=false",e).then((function(n){return n.json()})).then((function(n){return n.results})));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"Movie",value:function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,i,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,r="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(t),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},n.abrupt("return",fetch(r,i).then((function(n){return n.json()})).then((function(n){return n.results})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"Details",value:function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},n.abrupt("return",fetch(t,r).then((function(n){return n.json()})));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"Credits",value:function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},n.abrupt("return",fetch(t,r).then((function(n){return n.json()})).then((function(n){return n.cast})));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"Reviews",value:function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,i,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=").concat(t),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},n.abrupt("return",fetch(r,i).then((function(n){return n.json()})).then((function(n){return n.results})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),n}()},861:function(n,e,t){function r(n,e,t,r,i,a,c){try{var u=n[a](c),o=u.value}catch(s){return void t(s)}u.done?e(o):Promise.resolve(o).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var c=n.apply(e,t);function u(n){r(c,i,a,u,o,"next",n)}function o(n){r(c,i,a,u,o,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=831.7c1b866b.chunk.js.map