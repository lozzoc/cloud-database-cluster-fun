(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{222:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(17),o=n.n(i),r=n(34),s=n(110),l=n(51),d=n(35),u=n(47),h=n(71),b=n(70),j=n(37),p=n(38),f=n(291),O=n(292),v=n(288),m=n(285),x=n(160),g=n.n(x),y=n(122),w=n(23),S=n(7),k=n(287),T=n(156),N=n.n(T),C=n(155),E=n.n(C),L=n(158),P=n.n(L),R=n(157),z=n.n(R),H="TAGS_SET",_="SELECTED_MOVIE_TO_WATCH",M="HISTORY_SET_PI_CLUSTER",A="SEARCH_SET_RESULTS",I="SET_PI_NAMES",D=n(24),F=n(151),V=n.n(F),U=n(100),Y=n.n(U),B=n(14);function G(e,t){return["random","popular","atoz","filtered","related"].includes(t)?e.search[t]:void 0}var W=Object(B.a)((function(e){return e.root}),(function(e){return e.tags}));function J(e){return e.history.stats}function Z(e){return e.root.selectedmovie}function q(e){return e.history.names}var K,Q=n(54),X=n(3);var $=function(e){var t=e.value,n=e.setValue,a=c.a.useState(t),i=Object(S.a)(a,2),o=i[0],r=i[1],s=Object(Q.a)(K||(K=Object(j.a)(["\n   color: ",";\n   background-color: ",";\n   flex-wrap: wrap;\n   padding: 8px;\n   margin: 5px;\n   overflow-y: auto;\n "])),o?"#fff":"blue",function(e){switch(e){case 1:return"green";case 2:return"#a9203e";default:return"white"}}(o));return Object(X.jsx)("button",{className:s,onClick:function(){var e=o||0;n((e+1)%3),r((e+1)%3)},children:e.label})},ee=n(290);var te=Object(r.b)(null,(function(e){return{setSearchResults:function(t){return e(function(e){return console.log("setting search results"),{type:A,payload:e}}(t))}}}))((function(e){var t=Object(a.useState)({}),n=Object(S.a)(t,2),c=n[0],i=n[1],o=Object(r.c)(W),s=function(t){var n={};t.andtags.length>0&&(n.andtags=t.andtags.join(",")),t.ortags.length>0&&(n.ortags=t.ortags.join(",")),n.type=t.type,(t.ortags.length>0||t.andtags.length>0)&&V.a.get("/api/search/movies?".concat(Y.a.stringify(n))).then((function(t){console.log(t.data),e.setSearchResults(function(e){var t,n,a;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e}(t.data))})).catch((function(e){}))},l=o.map((function(e,t){return Object(X.jsx)($,{value:c[e.tagid],label:e.tagname,setValue:function(t){var n=Object(D.a)({},c);n["".concat(e.tagid)]=t,i(n)}},"tagname-".concat(e.tagid))}));return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)("p",{children:" Red means AND, Green means OR"}),Object(X.jsx)("div",{children:o.length>0&&l}),Object(X.jsx)(ee.a,{varient:"contained",color:"success",onClick:function(){var e=Object.keys(c).filter((function(e){return c[e]>0}));if(e.includes("1")&&e.includes("25"))alert("You cannot fetch results for movies and tvs at the same time it would suck :P");else{var t={andtags:[],ortags:[],type:e.includes("1")?"movie":"tvshow"};e.forEach((function(e){switch(c[e]){case 1:t.ortags.push(e);break;case 2:t.andtags.push(e)}})),s(t)}},children:"Search"})]})})),ne=n(103),ae=[{field:"leecher",headerName:"Leecher",width:150},{field:"title",headerName:"Title",width:300},{field:"epoch",headerName:"Epoch",width:150},{field:"size",headerName:"(GB)"},{field:"year",headerName:"Year"},{field:"episode",headerName:"Ep"}];var ce=Object(r.b)((function(e){var t=function(e){return e.search.currentType}(e,G(e));return{items:G(e,t)}}),(function(e){return{didSelectMovie:function(t){return e(function(e){return{type:_,payload:e}}(t))}}}))((function(e){return Object(X.jsx)("div",{style:{height:"68%",width:"100%"},children:e.items.length>0&&Object(X.jsx)(ne.a,{rows:e.items,onSelectionModelChange:function(t){e.didSelectMovie(e.items[t[0]])},columns:ae})})}));function ie(e){switch(e.route){case 0:return Object(X.jsx)(te,{});case 1:return Object(X.jsx)("p",{children:"Random"});case 2:return Object(X.jsx)("p",{children:"Popular"});default:return Object(X.jsx)("p",{children:"AtoZ"})}}var oe=Object(r.b)(null,(function(e){return{setCurrentSearchResultType:function(t){return e({type:"SEARCH_SET_TYPE",payload:["filtered","random","popular","atoz"][t]})}}}))((function(e){var t=Object(a.useState)(0),n=Object(S.a)(t,2),c=n[0],i=n[1];return Object(X.jsxs)(k.a,{sx:{height:"100%"},children:[Object(X.jsx)(ie,{route:c}),Object(X.jsx)(ce,{}),Object(X.jsxs)(f.a,{showLabels:!0,value:"Recents",onChange:function(t,n){console.log(n),i(n),e.setCurrentSearchResultType(n)},children:[Object(X.jsx)(O.a,{label:"Filter",icon:Object(X.jsx)(E.a,{})}),Object(X.jsx)(O.a,{label:"Random",icon:Object(X.jsx)(N.a,{})}),Object(X.jsx)(O.a,{disabled:!0,label:"Popular",icon:Object(X.jsx)(z.a,{color:"disabled"})}),Object(X.jsx)(O.a,{disabled:!0,label:"A-Z",icon:Object(X.jsx)(P.a,{color:"disabled"})})]})]})}));var re,se,le=Object(r.b)((function(e){return{selectedvideo:Z(e)}}))((function(e){var t=c.a.useState(!1),n=Object(S.a)(t,2),a=n[0],i=n[1];c.a.useEffect((function(){e.selectedvideo&&i(!1)}),[e.selectedvideo]);var o=e.selectedvideo?Y.a.stringify({size:e.selectedvideo.movie_size,path:e.selectedvideo.filename.replace("/home/pi/Videos/","/moviez/")}):null;return e.selectedvideo&&console.log("http://10.0.0.227:4444/stream?".concat(o)),Object(X.jsxs)("div",{children:[!!e.selectedvideo&&!a&&Object(X.jsxs)("div",{children:[Object.keys(e.selectedvideo).map((function(t){return Object(X.jsx)("div",{children:Object(X.jsx)("p",{children:e.selectedvideo[t]})},"video: ".concat(t))})),Object(X.jsx)("button",{onClick:function(){i(!0)},children:"WatchNow!"})]}),!!e.selectedvideo&&a&&Object(X.jsxs)("div",{children:[Object(X.jsxs)("video",{controls:!0,width:"100%",children:[Object(X.jsx)("source",{src:"http://10.0.0.227:4444/stream?".concat(o)}),"Sorry, your browser doesn't support embedded videos."]}),Object(X.jsx)("button",{onClick:function(){i(!1)},children:"StopWatching"})]})]})}));var de=[{field:"submask",headerName:"Subnet Mask",width:150},{field:"cpuload",headerName:"Load(~5min)",width:200},{field:"processuptime",headerName:"pUptime (Hours)",width:200},{field:"date",headerName:"Date",width:200}],ue=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={selectedpi:null},e.setSelectedPi=e.setSelectedPi.bind(Object(u.a)(e)),e}return Object(d.a)(n,[{key:"setSelectedPi",value:function(e){var t,n;t=this.state.selectedpi,n=e.submask,t&&t.submask===n?this.setState({selectedpi:null}):this.setState({selectedpi:e})}},{key:"render",value:function(){var e=this.state.selectedpi,t=Object(Q.a)(re||(re=Object(j.a)(["\n    height: 40px;\n    width: 80px;\n    border: 3px solid green;\n    "]))),n=Object(Q.a)(se||(se=Object(j.a)(["\n    height: 35px;\n    width: 75px;\n    border: 1px solid black;\n    "]))),a=this.setSelectedPi;return Object(X.jsxs)(v.a,{container:!0,spacing:2,sx:{height:"90vh"},children:[Object(X.jsxs)(v.a,{item:!0,xs:4,children:[Object(X.jsx)("p",{children:" Click on a identity below to view its stats and information"}),Object(X.jsx)("div",{className:"mirror-container",children:this.props.names.map((function(c){return Object(X.jsx)("button",{className:e&&e.submask===c.submask?t:n,onClick:function(){return a(c)},children:c.submask},"infotainment-".concat(c.submask))}))}),!!e&&Object(X.jsx)("div",{children:Object.keys(e).map((function(t){return Object(X.jsx)("div",{children:Object(X.jsx)("p",{children:e[t]})},"video: ".concat(t))}))})]}),Object(X.jsx)(v.a,{item:!0,xs:8,children:Object(X.jsx)(ne.a,{rows:this.props.items,columns:de})})]})}}]),n}(c.a.Component);var he,be=Object(r.b)((function(e){var t,n;return{names:null!==(t=q(e))&&void 0!==t?t:[],items:null!==(n=J(e))&&void 0!==n?n:[]}}))(ue),je=Object(Q.a)(he||(he=Object(j.a)(['\n *,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n*:focus,\n*::before:focus,\n*::after:focus {\n  outline: none;\n}\n*::-webkit-input-placeholder,\n*::before::-webkit-input-placeholder,\n*::after::-webkit-input-placeholder {\n  color: #222;\n}\n*::-moz-placeholder,\n*::before::-moz-placeholder,\n*::after::-moz-placeholder {\n  color: #222;\n}\n\n\nbutton {\n  border: 0;\n}\nbutton:focus {\n  border: none;\n  outline: 0 !important;\n  outline-style: none;\n}\n\n.container {\n  width: 550px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.container .btn {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  box-shadow: 0px -6px 10px white, 0px 4px 15px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.container .btn:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  z-index: 2;\n}\n.container .btn:active {\n  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);\n}\n.container .btn:active:after {\n  box-shadow: inset 0px -2px 5px white, inset 0px 2px 5px rgba(0, 0, 0, 0.15);\n}\n.container .btn.active.play-pause .icon.pause {\n  opacity: 1;\n  transform: translate(-50%, -50%);\n}\n.container .btn.active.play-pause .icon.play {\n  opacity: 0;\n  transform: translate(-50%, 50%);\n}\n.container .btn .icon-container,\n.container .btn a {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.container .btn a {\n  z-index: 10;\n}\n.container .btn .icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-block;\n  fill: #868686;\n  height: 1.4rem;\n  vertical-align: middle;\n  width: 1.4rem;\n  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.container .btn.play-pause .icon.pause {\n  opacity: 0;\n  transform: translate(-50%, 50%);\n}\n.container .btn.volume-control {\n  height: 160px;\n  border-radius: 50px;\n}\n.container .btn.volume-control::after {\n  border-radius: 50px;\n}\n.container .btn.volume-control .icon-container {\n  height: 50%;\n}\n.container .btn.volume-control .icon-container:last-child {\n  transform: translateY(100%);\n}\n.container .btn.volume-control .icon {\n  width: 1.6rem;\n  height: 1.6rem;\n}\n.container .btn.volume-control .icon.plus {\n  transform: translate(-50%, -50%);\n}\n.container .btn.volume-control .icon.minus {\n  transform: translate(-50%, -50%);\n}\n']))),pe=["10.0.0.245","10.0.0.116","10.0.0.92","10.0.0.237","10.0.0.223"],fe={history:{pi:[],names:[]},search:{currentType:"filtered",random:[],popular:[],atoz:[],filtered:[],related:[]},root:{tags:[],nextTagPage:1,selectedmovie:null}};function Oe(e,t){return!e||e.movieid!==t}var ve,me,xe,ge=Object(s.a)({history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.history,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(D.a)(Object(D.a)({},e),{},{stats:t.payload.map((function(e){var t=new Date(parseInt(e.date)).toString().split(" ");return Object(D.a)(Object(D.a)({},e),{},{id:e.date,processuptime:(parseInt(e.processuptime)/3600).toFixed(2),date:"".concat(t[1]," ").concat(t[2]," @ ").concat(t[4])})}))});case I:return Object(D.a)(Object(D.a)({},e),{},{names:t.payload});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.search,t=arguments.length>1?arguments[1]:void 0;if(t.type===A){var n=e.currentType;console.log(n);var a=Object(D.a)({},e);return a[n]=t.payload.map((function(e,t){return Object(D.a)(Object(D.a)({},e),{},{id:t})})),a}return e},root:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.root,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{tags:t.payload.tags,nextTagPage:t.payload.next};case _:return Oe(e.selectedmovie,t.payload.movieid)?Object(D.a)(Object(D.a)({},e),{},{selectedmovie:t.payload}):Object(D.a)(Object(D.a)({},e),{},{selectedmovie:null});default:return e}}}),ye=function(e){var t=Object(w.e)();return Object(X.jsxs)(f.a,{showLabels:!0,value:"Recents",onChange:function(e,n){0===n?t.push("/server"):t.push("/movies")},children:[Object(X.jsx)(O.a,{label:"Server",icon:Object(X.jsx)(m.a,{})}),Object(X.jsx)(O.a,{label:"Explore",icon:Object(X.jsx)(g.a,{})})]})},we=function(e){var t=window.location.host,n=Object(Q.a)(ve||(ve=Object(j.a)(["\n    display: flex;\n    flex-wrap: no-wrap;\n    flex-direction: row;\n  "]))),a=Object(Q.a)(me||(me=Object(j.a)(["\n    color: green;\n  "]))),c=Object(Q.a)(xe||(xe=Object(j.a)(["\n  border-color: #121212;\n  background: 'white';\n  "])));return Object(X.jsxs)("div",{className:je,children:[Object(X.jsx)("p",{children:"MIRRORS - Click differnt one if search results are slow"}),Object(X.jsxs)("div",{className:"".concat(n," container"),children:[Object(X.jsx)("a",{href:"http://localhost:3000",children:Object(X.jsx)("button",{className:"btn play-pause ".concat(t.includes("localhost:3000")?a:c),children:Object(X.jsx)("div",{className:"icon-container",children:Object(X.jsx)("p",{children:"Dev Mirror"})})},"http://localhost:3000")}),pe.map((function(e,n){return console.log(e),Object(X.jsx)("a",{href:"http://".concat(e),children:Object(X.jsxs)("button",{className:"btn play-pause",children:[t.includes(e)&&Object(X.jsx)("button",{className:"btn play-pause",children:Object(X.jsx)("div",{className:"icon-container ".concat(a),children:Object(X.jsx)("p",{children:"Selected"})})}),!t.includes(e)&&Object(X.jsx)("div",{className:"icon-container ".concat(c),children:Object(X.jsxs)("button",{children:["Mirror ",n+1]})})]})},e)}))]})]})},Se=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={tags:[],isLoadingCommercial:!1,history:Object(p.a)()},e.setValue=e.setValue.bind(Object(u.a)(e)),e.handleLoadTags=e.handleLoadTags.bind(Object(u.a)(e)),e.handleLoadPiHistory=e.handleLoadPiHistory.bind(Object(u.a)(e)),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.handleLoadTags(),this.handleLoadPiHistory(),this.handleLoadUserHistory(),this.state.history.push("/movies")}},{key:"render",value:function(){return Object(X.jsx)(y.a,{history:this.state.history,children:Object(X.jsxs)("div",{style:{height:"100vh"},children:[Object(X.jsx)(we,{}),Object(X.jsx)(ye,{}),Object(X.jsx)(w.a,{path:"/server",children:Object(X.jsx)(be,{})}),Object(X.jsx)(w.a,{path:"/movies",children:Object(X.jsxs)(v.a,{container:!0,spacing:2,sx:{height:"90vh"},children:[Object(X.jsxs)(v.a,{item:!0,xs:4,children:[Object(X.jsx)(le,{}),Object(X.jsx)("p",{children:"view History coming soon"})]}),Object(X.jsx)(v.a,{item:!0,xs:8,children:Object(X.jsx)(oe,{})})]})})]})})}},{key:"setValue",value:function(e){}},{key:"handleLoadRelatedContent",value:function(e){}},{key:"handleLoadUserHistory",value:function(){}},{key:"handleLoadPiHistory",value:function(){var e=this;fetch("/api/pies/stats").then((function(e){return e.json()})).then((function(t){e.props.setPiHistory(t)})).catch((function(e){console.log(e)})),fetch("/api/pies/names").then((function(e){return e.json()})).then((function(t){e.props.setPiNamesAction(t)})).catch((function(e){console.log(e)}))}},{key:"handleLoadTags",value:function(){var e=this;fetch("/api/tags").then((function(e){return e.json()})).then((function(t){e.props.setTags(t)})).catch((function(e){console.log(e)}))}}]),n}(c.a.Component);var ke=Object(r.b)(null,(function(e){return{setPiHistory:function(t){return e({type:M,payload:t})},setTags:function(t){return e(function(e){return{type:H,payload:e}}(t))},setRelatedContent:function(t,n){return e({type:"RELATEDCONTENT"})},setPiNamesAction:function(t){return e({type:I,payload:t})}}}))(Se),Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,295)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(r.a,{store:Object(s.b)(ge,{}),children:Object(X.jsx)(ke,{})})}),document.getElementById("root")),Te()}},[[222,1,2]]]);
//# sourceMappingURL=main.624043cb.chunk.js.map