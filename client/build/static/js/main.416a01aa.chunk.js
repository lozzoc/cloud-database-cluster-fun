(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{222:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),i=n.n(r),o=n(34),s=n(109),l=n(56),d=n(41),u=n(51),h=n(89),j=n(88),b=n(62),f=n(36),O=n(293),p=n(294),v=n(290),g=n(287),x=n(160),m=n.n(x),y=n(122),S=n(23),w=n(7),T=n(289),E=n(156),C=n.n(E),R=n(155),L=n.n(R),k=n(158),N=n.n(k),P=n(157),H=n.n(P),M="TAGS_SET",_="SELECTED_MOVIE_TO_WATCH",I="HISTORY_SET_PI_CLUSTER",A="SEARCH_SET_RESULTS",D=n(30),F=n(151),z=n.n(F),V=n(99),G=n.n(V),U=n(14);function W(e,t){return["random","popular","atoz","filtered","related"].includes(t)?e.search[t]:void 0}var B=Object(U.a)((function(e){return e.root}),(function(e){return e.tags}));function Y(e){return e.history.pi}function J(e){return e.root.selectedmovie}var Z,q=n(111),K=n(4);var Q=function(e){e.value;var t=e.setValue,n=c.a.useState(0),a=Object(w.a)(n,2),r=a[0],i=a[1],o=Object(q.a)(Z||(Z=Object(b.a)(["\n   color: ",";\n   background-color: ",";\n   flex-wrap: wrap;\n   padding: 8px;\n   margin: 5px;\n   overflow-y: auto;\n "])),r?"#fff":"blue",function(e){switch(e){case 1:return"green";case 2:return"#a9203e";default:return"white"}}(r));return Object(K.jsx)("button",{className:o,onClick:function(){var e=r||0;t((e+1)%3),i((e+1)%3)},children:e.label})},X=n(292);var $=Object(o.b)(null,(function(e){return{setSearchResults:function(t){return e(function(e){return console.log("setting search results"),{type:A,payload:e}}(t))}}}))((function(e){var t=Object(a.useState)({}),n=Object(w.a)(t,2),c=n[0],r=n[1],i=Object(o.c)(B),s=function(t){var n={};t.andtags.length>0&&(n.andtags=t.andtags.join(",")),t.ortags.length>0&&(n.ortags=t.ortags.join(",")),(t.ortags.length>0||t.andtags.length>0)&&z.a.get("/api/search/movies?".concat(G.a.stringify(n))).then((function(t){console.log(t.data),e.setSearchResults(function(e){var t,n,a;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e}(t.data))})).catch((function(e){}))},l=Object(a.useMemo)((function(){return console.log("RERENDERING TAGS"),i.map((function(e,t){return Object(K.jsx)(Q,{value:c[e.tagid],label:e.tagname,setValue:function(t){var n=Object(D.a)({},c);n["".concat(e.tagid)]=t,r(n)}},"tagname-".concat(e.tagid))}))}),[i.length]);return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("p",{children:" Red means AND, Green means OR"}),Object(K.jsx)("div",{children:i.length>0&&l}),Object(K.jsx)(X.a,{varient:"contained",color:"success",onClick:function(){var e={andtags:[],ortags:[]};Object.keys(c).filter((function(e){return c[e]>0})).forEach((function(t){1==c[t]?e.ortags.push(t):2==c[t]&&e.andtags.push(t)})),s(e)},children:"Search"})]})})),ee=n(102),te=[{field:"leecher",headerName:"Leecher",width:150},{field:"title",headerName:"Title",width:300},{field:"epoch",headerName:"Epoch",width:150},{field:"size",headerName:"(GB)"},{field:"year",headerName:"Year"},{field:"episode",headerName:"Ep"}];var ne=Object(o.b)((function(e){var t=function(e){return e.search.currentType}(e,W(e));return{items:W(e,t)}}),(function(e){return{didSelectMovie:function(t){return e(function(e){return{type:_,payload:e}}(t))}}}))((function(e){return Object(K.jsx)("div",{style:{height:400,width:"100%"},children:e.items.length>0&&Object(K.jsx)(ee.a,{rows:e.items,onSelectionModelChange:function(t){e.didSelectMovie(e.items[t[0]])},columns:te})})}));function ae(e){var t=e.route;e.tags;switch(t){case 0:return Object(K.jsx)($,{});case 1:return Object(K.jsx)("p",{children:"Random"});case 2:return Object(K.jsx)("p",{children:"Popular"});default:return Object(K.jsx)("p",{children:"AtoZ"})}}var ce=Object(o.b)(null,(function(e){return{setCurrentSearchResultType:function(t){return e({type:"SEARCH_SET_TYPE",payload:["filtered","random","popular","atoz"][t]})}}}))((function(e){var t=Object(a.useState)(0),n=Object(w.a)(t,2),c=n[0],r=n[1];return Object(K.jsxs)(T.a,{sx:{height:"100%"},children:[Object(K.jsx)(ae,{route:c}),Object(K.jsx)(ne,{}),Object(K.jsxs)(O.a,{showLabels:!0,value:"Recents",onChange:function(t,n){console.log(n),r(n),e.setCurrentSearchResultType(n)},children:[Object(K.jsx)(p.a,{label:"Filter",icon:Object(K.jsx)(L.a,{})}),Object(K.jsx)(p.a,{label:"Random",icon:Object(K.jsx)(C.a,{})}),Object(K.jsx)(p.a,{disabled:!0,label:"Popular",icon:Object(K.jsx)(H.a,{color:"disabled"})}),Object(K.jsx)(p.a,{disabled:!0,label:"A-Z",icon:Object(K.jsx)(N.a,{color:"disabled"})})]})]})}));var re=Object(o.b)((function(e){return{selectedvideo:J(e)}}))((function(e){var t=c.a.useState(!1),n=Object(w.a)(t,2),a=n[0],r=n[1];c.a.useEffect((function(){e.selectedvideo&&r(!1)}),[e.selectedvideo]);var i=e.selectedvideo?G.a.stringify({size:e.selectedvideo.movie_size,path:e.selectedvideo.filename}):null;return Object(K.jsxs)("div",{children:[!!e.selectedvideo&&!a&&Object(K.jsxs)("div",{children:[Object.keys(e.selectedvideo).map((function(t){return Object(K.jsx)("div",{children:Object(K.jsx)("p",{children:e.selectedvideo[t]})},"video: ".concat(t))})),Object(K.jsx)("button",{onClick:function(){r(!0)},children:"WatchNow!"})]}),!!e.selectedvideo&&a&&Object(K.jsxs)("div",{children:[Object(K.jsxs)("video",{controls:!0,width:"100%",children:[Object(K.jsx)("source",{src:"/stream?".concat(i),type:"video/mp4"}),"Sorry, your browser doesn't support embedded videos."]}),Object(K.jsx)("button",{onClick:function(){r(!1)},children:"StopWatching"})]})]})})),ie=[{field:"submask",headerName:"Subnet Mask",width:150},{field:"osname",headerName:"OS",width:200},{field:"cpuload",headerName:"Load(~5min)",width:150},{field:"processuptime",headerName:"pUptime (Hours)",width:200},{field:"date",headerName:"Date",width:150}];var oe,se=Object(o.b)((function(e){return{items:Y(e)}}))((function(e){return Object(K.jsxs)("div",{style:{height:"90vh"},children:[0===e.items.length&&Object(K.jsx)("p",{children:" loading your stats please wait "}),e.items.length>0&&Object(K.jsx)(ee.a,{rows:e.items,columns:ie,onSelectionModelChange:function(t){e.didSelectMovie(e.items[t[0]])}})]})})),le=function(e){var t=Object(S.e)();return Object(K.jsxs)(O.a,{showLabels:!0,value:"Recents",onChange:function(e,n){0===n?t.push("/server"):t.push("/movies")},children:[Object(K.jsx)(p.a,{label:"Server",icon:Object(K.jsx)(g.a,{})}),Object(K.jsx)(p.a,{label:"Explore",icon:Object(K.jsx)(m.a,{})})]})},de=function(e){var t=Object(q.a)(oe||(oe=Object(b.a)(["\n  display: flex;\n  flex-wrap: no-wrap;\n  flex-direction: row;\n  "])));return Object(K.jsxs)("div",{children:[Object(K.jsx)("p",{children:"MIRRORS"}),Object(K.jsx)("div",{className:t,children:["http://10.0.0.114","http://10.0.0.92","http://10.0.0.237"].map((function(e,t){return Object(K.jsxs)("button",{onClick:function(){window.location.href=e},children:["Mirror ",t+1]},e)}))})]})},ue=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={tags:[],isLoadingCommercial:!1,history:Object(f.a)()},e.setValue=e.setValue.bind(Object(u.a)(e)),e.handleLoadTags=e.handleLoadTags.bind(Object(u.a)(e)),e.handleLoadPiHistory=e.handleLoadPiHistory.bind(Object(u.a)(e)),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.handleLoadTags(),this.handleLoadPiHistory(),this.handleLoadUserHistory(),this.state.history.push("/movies")}},{key:"render",value:function(){return Object(K.jsx)(y.a,{history:this.state.history,children:Object(K.jsxs)("div",{style:{height:"100%"},children:[Object(K.jsx)(de,{}),Object(K.jsx)(le,{}),Object(K.jsx)(S.a,{path:"/server",children:Object(K.jsx)(se,{})}),Object(K.jsx)(S.a,{path:"/movies",children:Object(K.jsxs)(v.a,{container:!0,spacing:2,sx:{height:"85%"},children:[Object(K.jsx)(v.a,{item:!0,xs:4,children:Object(K.jsx)(re,{url:"/stream/asdf"})}),Object(K.jsx)(v.a,{item:!0,xs:8,children:Object(K.jsx)(ce,{})}),Object(K.jsxs)(v.a,{item:!0,xs:12,children:[Object(K.jsx)("p",{children:"xs=4"}),"  "]})]})})]})})}},{key:"setValue",value:function(e){}},{key:"handleLoadRelatedContent",value:function(e){}},{key:"handleLoadUserHistory",value:function(){sessionStorage.getItem("Watch History")}},{key:"handleLoadPiHistory",value:function(){var e=this;fetch("/api/getAllPiStats").then((function(e){return e.json()})).then((function(t){e.props.setPiHistory(t)})).catch((function(e){console.log(e)}))}},{key:"handleLoadTags",value:function(){var e=this;fetch("/api/tags").then((function(e){return e.json()})).then((function(t){e.props.setTags(t)})).catch((function(e){console.log(e)}))}}]),n}(c.a.Component);var he=Object(o.b)(null,(function(e){return{setPiHistory:function(t){return e({type:I,payload:t})},setTags:function(t){return e(function(e){return{type:M,payload:e}}(t))},setRelatedContent:function(t,n){return e({type:"RELATEDCONTENT"})}}}))(ue),je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,297)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},be={history:{pi:[]},search:{currentType:"filtered",random:[],popular:[],atoz:[],filtered:[],related:[]},root:{tags:[],nextTagPage:1,selectedmovie:null}};var fe=Object(s.a)({history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.history,t=arguments.length>1?arguments[1]:void 0;return t.type===I?Object(D.a)(Object(D.a)({},e),{},{pi:t.payload.map((function(e){var t=new Date(parseInt(e.date)).toString().split(" ");return Object(D.a)(Object(D.a)({},e),{},{id:e.date,processuptime:(parseInt(e.processuptime)/3600).toFixed(2),osuptime:(parseInt(e.osuptime)/3600).toFixed(2),date:"".concat(t[1]," ").concat(t[2]," @ ").concat(t[4])})}))}):e},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.search,t=arguments.length>1?arguments[1]:void 0;if(t.type===A){var n=e.currentType;console.log(n);var a=Object(D.a)({},e);return a[n]=t.payload.map((function(e,t){return Object(D.a)(Object(D.a)({},e),{},{id:t})})),a}return e},root:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.root,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{tags:t.payload.tags,nextTagPage:t.payload.next};case _:return e.selectedmovie&&e.selectedmovie.movieid==t.payload.movieid?Object(D.a)(Object(D.a)({},e),{},{selectedmovie:null}):Object(D.a)(Object(D.a)({},e),{},{selectedmovie:t.payload});default:return e}}});i.a.render(Object(K.jsx)(c.a.StrictMode,{children:Object(K.jsx)(o.a,{store:Object(s.b)(fe,{}),children:Object(K.jsx)(he,{})})}),document.getElementById("root")),je()}},[[222,1,2]]]);
//# sourceMappingURL=main.416a01aa.chunk.js.map