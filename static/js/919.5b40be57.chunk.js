"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[919],{435:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(861),a=e(671),i=e(144),c=e(757),u=e.n(c),o=function(){function t(){(0,a.Z)(this,t)}return(0,i.Z)(t,[{key:"All",value:function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?language=en-US&include_adult=false",n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},t.abrupt("return",fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US&include_adult=false",n).then((function(t){return t.json()})).then((function(t){return t.results})));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"Movie",value:function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a,i=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:1,r="https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=").concat(e),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},t.abrupt("return",fetch(r,a).then((function(t){return t.json()})).then((function(t){return t.results})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},{key:"Details",value:function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},t.abrupt("return",fetch(e,r).then((function(t){return t.json()})));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},{key:"Credits",value:function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},t.abrupt("return",fetch(e,r).then((function(t){return t.json()})).then((function(t){return t.cast})));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},{key:"Reviews",value:function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a,i=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:1,r="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=").concat(e),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA2OTg2YTMwZWVkNDNmMjRmZjJhZmE5ZGY0N2FiOCIsInN1YiI6IjY0ZDg4MzEzZDEwMGI2MDExYzgyM2U2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8rp64-ZzW-scI2R6ybCgpdPObOATyZzVgg59Sy_an8"}},t.abrupt("return",fetch(r,a).then((function(t){return t.json()})).then((function(t){return t.results})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}]),t}()},919:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(439),a=e(791),i=e(689),c=e(435),u=e(830),o=e(184),s=function(t){return t.list.map((function(t){var n=t.profile_path,e=t.name,r=t.id,a=t.character,i=n?"https://image.tmdb.org/t/p/w300/".concat(n):u;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:i,alt:"".concat(e," portrait"),style:{innerHeight:"450",innerWidth:"300"}}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["Name: ",e]}),(0,o.jsxs)("p",{children:["Character: ",a]})]})]},r)}))},h=new c.Z,p=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],c=n[1],u=(0,a.useState)(null),p=(0,r.Z)(u,2),f=p[0],d=p[1],g=(0,a.useState)(!1),l=(0,r.Z)(g,2),Z=l[0],I=l[1],y=(0,i.UO)(),m=y.movieId;return(0,a.useEffect)((function(){I(!0),h.Credits(y.movieId).then((function(t){c(t),0===t.length&&d("There is no Casts")})).catch((function(t){d(t)})).finally((function(){I(!1)}))}),[m]),(0,o.jsxs)(o.Fragment,{children:[Z&&"Loading ...",f&&"".concat(f),0!==e.length&&(0,o.jsx)(s,{list:e})]})}},830:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAHCAgMAAAAoXRwUAAAADFBMVEXR1dr////x8vTh4+ZI3UB1AAAErklEQVR42u3cy7WjOBCAYQOHBQt65xAIwesmBC8sLqcPC0IgBJIgiwnCSSiE2c96VjP9ut1+UlL98pXbIoDvFEWpBLLkzSZd6UpXutKVrnSlK11/+PX5H4z613w5QtQnY8wEWX//b/VcWKZjrN1XyyAJK5ZvVktY9TfKjNwtmoGwvt8i8iDz75R5A6zqh0UURfPDMoBlf1r6Ait+UmZWW9m71WKpJzrF7t0audQD1vJuDdxj1Fv5L6uHGg5i/SoJc+BKwnR/USMbGJH2d2uiyktfFb9TytZanFgdVarq5Nen1gRaI1T2X689VPbqIXlmHbAhpCywreEKzJ5ahrRmamgrrTNKM3cX59YEWiPWJlSDKDu3BqxNsFaPtRzV4L6wFIO7BK3dudVFahmsrcKW/2y7DWr5N0MbqbUEjasF4/K3LijF5BGpVTyPNcZg5cnSvZqw1j4GqwbvsX6ee0yWmzXEEFf1AnFVKa4U1/PGtU/5StaTWGOK6zHvhVXYd8xk/RnWFIMV+JtvSpbTtztptS8Ql7dVgNYnMF+Xy+T+P55cLtX6/7BwuVTr/2PANeuILa+y1oyVF2u1yXJoE2xcU4rrEXGluv84a/NMcc0ff4/B4/K1lhe1jhFY9kUt3/fCbVjL+923eR7Le0PTLqzl/Q1TXlp9DFbg3+ZIi1zP8bYC7zfx/na/0vCP3pYNuV9OsVexAvd21uC+2ixSKwf3Ib+CVYTcAx6JteG2UD6PdVRYS6SWDWht4rRUZ1i2kVpNOOstFos8IxXQUp0DK0GrCmepDkDW4Bm8LJw1aqwcPP9YhLM0rwDnE+SsshbQstw51tMmrfzrgga0dtwZ4tOmozwNXmEt56xRKM9cZ1ibOBvco87acMPxdBDNSsty5/BPCl9JnfzZgNYqQWsH3mOscSUrDuuY4npoXE2ge4wprmTFYWnn7S1oxRrXK1g2UFxtRHHZQHHFak1Ka0mWt0V+p0VkFeB3bTBL+e2eR2plodY6DqClXBuqQq0zketfyo+FBlwvbIKtY+omooVbQ96EWycfsOGoHJA1+LtVGe63OfT32hYrL3a/Saz/49Zxj5HdZ+U9usn/G6rBfY9V2H2i6F7rCUu9d+XX16weaV6q5F/b0uyb/MVgh2uuHvnxTH593fKq/N11y3Cp90v+DcqnVeS3rAFpEt6T963U+yTf3rRaLPUeyc9vWz2Weo/k3069+yRp71gt0J89k5/fs3os9c7Jb+5Zjsm3d60WS73jQkV23+qx1Dsm/37q3ZJvV6wWaTjOlZ+vWT2Weqfk79Ysh56/XbVmLPUOyc/XLfGEW69b4redct3qqBHkMoqswGqxxyh+kLnEGrDHKH6QpcTquMcofZBWZMke5CKyJmA+c5rXMpnVYyUhLIpSZnVMg5YXxVZozVh5yYpCSEk6RSG19lDHEXadWmodgPnf4T2glFodV6qSd4pGbB2xspcUvhVbLdRVZYNITK0PokJu7UFrwIajwMrkVo8NbcHgruTW2yOtUm51XJtYbxQu1hFrOY+1tg7W/EDLOlgtaE1YW43XGrF2v2oVH2XtI7UGbBp6WitzsfrHWfVHxXUA4wpo/QdgjLH+7DqDwgAAAABJRU5ErkJggg=="},861:function(t,n,e){function r(t,n,e,r,a,i,c){try{var u=t[i](c),o=u.value}catch(s){return void e(s)}u.done?n(o):Promise.resolve(o).then(r,a)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(a,i){var c=t.apply(n,e);function u(t){r(c,a,i,u,o,"next",t)}function o(t){r(c,a,i,u,o,"throw",t)}u(void 0)}))}}e.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=919.5b40be57.chunk.js.map