(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{692:function(e,n,t){"use strict";var r=t(7),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk2NDE3YzZmNTdkYmE2NjM3Yjg5ZTA1MTlkZjhjMCIsInN1YiI6IjY0ZDQ5NmNiYmYzMWYyMDFjZTY3NTk4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oUfYFt39LV0c4K3VhOIRVjLifgRGqlfBdeSL9BhgEbU"}};function o(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),i).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something go wrong, please try again"))}))}function a(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),i).then((function(n){return n.ok?n.json():Promise.reject(new Error("Ther is no movie with name ".concat(e)))}))}function s(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),i).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something go wrong, please try again"))}))}function c(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),i).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have reviews for this movie"))}))}({fetchMovieDetails:o,fetchSearchMovies:a,fetchCast:s,fetchReviews:c}).propTypes={movieId:t.n(r)().string};var l={fetchTrendingMovies:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",i).then((function(e){return e.ok?e.json():Promise.reject("Something go wrong, please try again")}))},fetchMovieDetails:o,fetchSearchMovies:a,fetchCast:s,fetchReviews:c};n.Z=l},871:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r,i,o,a,s,c=t(791),l=t(689),v=t(87),u=t(439),d=t(692),f=t(168),h=t(867),p=(0,h.ZP)("section")(r||(r=(0,f.Z)(["\n   display: flex;     \n   padding-bottom: 3px;\n   box-shadow: 0px 2px 2px 1px rgba(0, 0, 255, .2);\n"]))),x=(0,h.ZP)("div")(i||(i=(0,f.Z)(["\n   padding-left: 16px;\n"]))),m=(0,h.ZP)("img")(o||(o=(0,f.Z)(["\n   margin: 5px;\n"]))),V=t(935),g=t(184),R=V,P=function(){var e=(0,c.useState)(null),n=(0,u.Z)(e,2),t=n[0],r=n[1],i=(0,c.useState)(null),o=(0,u.Z)(i,2),a=o[0],s=o[1],v=(0,l.UO)().movieId;if((0,c.useEffect)((function(){d.Z.fetchMovieDetails(v).then((function(e){return r(e)})).catch((function(e){return s(e)}))}),[v]),t){var f=t.poster_path,h=t.original_title,V=t.release_date,P=t.overview,j=t.vote_average,O=t.genres;return(0,g.jsxs)(p,{children:[a&&(0,g.jsx)("p",{children:a}),(0,g.jsx)(m,{src:f?"https://image.tmdb.org/t/p/w200"+f:R,alt:"card"}),(0,g.jsxs)(x,{children:[(0,g.jsxs)("h2",{children:[h," (",V&&V.slice(0,4),")"]}),(0,g.jsxs)("p",{children:["User score: ",Math.trunc(10*j),"%"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:P}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("p",{children:null===O||void 0===O?void 0:O.map((function(e){return e.name+" "}))})]})]})}},j=(0,h.ZP)("main")(a||(a=(0,f.Z)(["\n   padding-bottom: 8px;\n   box-shadow: 0px 2px 2px 1px rgba(0, 0, 255, .2);\n"]))),O=(0,h.ZP)("button")(s||(s=(0,f.Z)(["\n   margin: 8px 10px 0 5px;\n   width: 75px;\n   box-shadow: inset 0px 0px 4px 2px rgba(0, 0, 255, .2);\n"]))),b=function(){var e,n,t=null!==(e=null===(n=(0,l.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,g.jsxs)(j,{children:[(0,g.jsx)(v.rU,{to:t,children:(0,g.jsx)(O,{children:" Go back"})}),(0,g.jsx)("div",{children:(0,g.jsx)(P,{})}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("h4",{children:"Additional information"}),(0,g.jsx)("li",{children:(0,g.jsx)(v.rU,{to:"cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(v.rU,{to:"reviews",children:"Reviews"})})]}),(0,g.jsx)(c.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading..."}),children:(0,g.jsx)(l.j3,{})})]})}},888:function(e,n,t){"use strict";var r=t(47);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},7:function(e,n,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},935:function(e){"use strict";e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=871.f0fa09b6.chunk.js.map