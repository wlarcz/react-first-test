(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{107:function(e,t,n){"use strict";var r={};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return e}},112:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1OwCE"}},125:function(e,t,n){},126:function(e,t,n){},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(110),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"13d4a9ef-08ca-4bf5-824e-01bca24f4d32"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&counter=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},21:function(e,t,n){e.exports={nav:"Navbar_nav__3Ggbo",item:"Navbar_item__3Og_l",active:"Navbar_active__32wIm"}},252:function(e,t,n){"use strict";n.r(t);var r=n(1),a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,258)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},s=n(0),c=n.n(s),i=n(53),o=n.n(i),u=(n(125),n(3)),l=n(4),d=n(9),j=n(10),b=(n(126),n(22)),f=n(21),p=n.n(f),g=function(){return Object(r.jsxs)("nav",{className:p.a.nav,children:[Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:p.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(r.jsx)(b.b,{to:"/dialogs",activeClassName:p.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)("a",{children:"News"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)("a",{children:"Music"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)("a",{children:"Settings"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/users",activeClassName:p.a.active,children:"Users"})})]})},h=n(7),O=n(26),m=n(8),A=n.n(m),x=n(19),v=n(12),P=n(2),w=n(14),S=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),r):e}))},y="FOLLOW",C="UNFOLLOW",E="SET_USERS",k="SET_CURRENT_PAGE",I="SET_TOTAL_USERS_COUNT",U="TOGGLE_IS_FETCHING",T="TOGGLE_IS_FOLLOWING_PROGRESS",F={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},L=function(e){return{type:y,userID:e}},N=function(e){return{type:C,userID:e}},B=function(e){return{type:k,currentPage:e}},z=function(e){return{type:U,isFetching:e}},q=function(e,t){return{type:T,isFetching:e,userId:t}},M=function(){var e=Object(x.a)(A.a.mark((function e(t,n,r,a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(q(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(q(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(P.a)(Object(P.a)({},e),{},{users:S(e.users,t.userID,"id",{followed:!0})});case C:return Object(P.a)(Object(P.a)({},e),{},{users:S(e.users,t.userID,"id",{followed:!1})});case E:return Object(P.a)(Object(P.a)({},e),{},{users:Object(v.a)(t.users)});case k:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case I:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.count});case U:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case T:return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},G=n(39),H=n(57),R=n(32),V=n(61),W=n.n(V),Q=n(111),X=n.n(Q),D=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var j=Math.ceil(u/o),b=Object(s.useState)(1),f=Object(R.a)(b,2),p=f[0],g=f[1],h=(p-1)*o+1,O=p*o;return Object(r.jsxs)("div",{className:W.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){g(p-1)},children:"PREF"}),l.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:X()(Object(H.a)({},W.a.selectedPage,a===e),W.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),j>p&&Object(r.jsx)("button",{onClick:function(){g(p+1)},children:"NEXT"})]})},K=n.p+"static/media/user.6257f558.jpg",Z=n(112),_=n.n(Z),Y=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{alt:"\u043a\u043e\u0440\u0442\u0438\u043d\u043a\u0430",src:null!=t.photos.small?t.photos.small:K,className:_.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"u.location.city"}),Object(r.jsx)("div",{children:"u.location.country"})]})]})]})},$=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,s=e.onPageChanged,c=e.users,i=Object(G.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(D,{currentPage:t,onPageChanged:s,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:c.map((function(e){return Object(r.jsx)(Y,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},ee=n(35),te=n(23),ne=n(113),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ae=function(e){return e.usersPage.pageSize},se=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},ie=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(ee.a,{}):null,Object(r.jsx)($,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),le=Object(te.d)(Object(O.b)((function(e){return{users:re(e),pageSize:ae(e),totalUsersCount:se(e),currentPage:ce(e),isFetching:ie(e),followingInProgress:oe(e)}}),{follow:function(e){return function(){var t=Object(x.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M(n,e,w.c.follow.bind(w.c),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M(n,e,w.c.unfollow.bind(w.c),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:B,toggleFollowingProgress:q,requestUsers:function(e,t){return function(){var n=Object(x.a)(A.a.mark((function n(r){var a;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(!0)),r(B(e)),n.next=4,w.c.getUsers(e,t);case 4:a=n.sent,r(z(!1)),r((c=a.items,{type:E,users:c})),r((s=a.totalCount,{type:I,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),de=n(73),je=n.n(de),be=function(e){return Object(r.jsxs)("header",{className:je.a.header,children:[Object(r.jsx)("img",{src:"data:image/jpeg;base64,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"}),Object(r.jsx)("div",{className:je.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[" ",e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(r.jsx)(b.b,{to:"/login",children:"Login"})})]})},fe="samurai-network/auth/SET_USER_DATA",pe={userId:null,email:null,login:null,isAuth:!1},ge=function(e,t,n,r){return{type:fe,payload:{userId:e,email:t,login:n,isAuth:r}}},he=function(){return function(){var e=Object(x.a)(A.a.mark((function e(t){var n,r,a,s,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(ge(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},me=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(be,Object(P.a)({},this.props))}}]),n}(c.a.Component),Ae=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(me),xe=n(38),ve=n(43),Pe=n.n(ve),we=n(54),Se=function(e){return Object(r.jsx)("div",{className:Pe.a.error,children:e.children})},ye=function(e){var t=e.label,n=e.name,a=Object(G.a)(e,["label","name"]);return Object(r.jsxs)("div",{className:Pe.a.formControl,children:[Object(r.jsx)("label",{htmlFor:n,children:t}),Object(r.jsx)(xe.b,Object(P.a)({id:n,name:n},a)),Object(r.jsx)(xe.a,{name:n,component:Se})]})},Ce=function(e){var t=e.label,n=e.name,a=Object(G.a)(e,["label","name"]);return Object(r.jsxs)("div",{className:Pe.a.formControl,children:[Object(r.jsx)("label",{htmlFor:n,children:t}),Object(r.jsx)(xe.b,Object(P.a)({id:n,name:n},a))]})},Ee=function(e){var t=e.control,n=Object(G.a)(e,["control"]);switch(t){case"input":return Object(r.jsx)(ye,Object(P.a)({},n));case"textarea":case"select":case"radio":case"checkbox":return Object(r.jsx)(Ce,Object(P.a)({},n));case"date":default:return null}},ke=function(e){var t=we.a({email:we.b().email("Invalid email format").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:we.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")});return Object(r.jsx)(xe.d,{initialValues:{email:"",password:"",rememberMe:!1},validationSchema:t,onSubmit:e.onSubmit,children:function(e){return Object(r.jsxs)(xe.c,{children:[Object(r.jsx)(Ee,{control:"input",type:"email",label:"Email",name:"email"}),Object(r.jsx)(Ee,{control:"input",type:"password",label:"Password",name:"password"}),Object(r.jsx)(Ee,{control:"checkbox",type:"checkbox",label:"Remember me",name:"rememberMe"}),e.status&&e.status.message&&Object(r.jsx)("div",{className:Pe.a.error,children:e.status.message}),Object(r.jsx)("button",{type:"submit",disabled:!e.isValid,children:"Submit"})]})}})},Ie=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(x.a)(A.a.mark((function a(s){var c,i;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?s(he()):(r.setSubmitting(!1),i=c.data.messages.length>0?c.data.messages[0]:"some error",r.setStatus({message:i}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(h.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(ke,{onSubmit:function(t,n){e.login(t.email,t.password,t.rememberMe,n)}})]})})),Ue="INITIALIZED_SUCCESS",Te={initialized:!1},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},Le=n(75),Ne=n(76),Be=n(107),ze=n(119),qe=Object(te.c)({profilePage:Le.b,dialogsPage:Ne.a,sidebar:Be.a,usersPage:J,auth:Oe,app:Fe}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,Je=Object(te.e)(qe,Me(Object(te.a)(ze.a)));window.__store__=Je;var Ge=Je,He=function(e){return function(t){return Object(r.jsx)(c.a.Suspense,{fallback:Object(r.jsx)(ee.a,{}),children:Object(r.jsx)(e,Object(P.a)({},t))})}},Re=c.a.lazy((function(){return n.e(4).then(n.bind(null,260))})),Ve=c.a.lazy((function(){return n.e(3).then(n.bind(null,259))})),We=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized||ee.a,Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(Ae,{}),Object(r.jsx)(g,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(h.b,{path:"/dialogs",render:He(Re)}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:He(Ve)}),Object(r.jsx)(h.b,{path:"/users",render:function(){return Object(r.jsx)(le,{})}}),Object(r.jsx)(h.b,{path:"/login",render:function(){return Object(r.jsx)(Ie,{})}})]})]})}}]),n}(s.Component),Qe=Object(te.d)(h.f,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(he());Promise.all([t]).then((function(){e({type:Ue})}))}}}))(We),Xe=function(e){return Object(r.jsx)(b.a,{children:Object(r.jsx)(O.a,{store:Ge,children:Object(r.jsx)(Qe,{})})})};o.a.render(Object(r.jsx)(Xe,{}),document.getElementById("root")),a()},35:function(e,t,n){"use strict";var r=n(1),a=n.p+"static/media/preloader.cfc0ad5a.svg";t.a=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"white"},children:Object(r.jsx)("img",{src:a})})}},43:function(e,t,n){e.exports={formControl:"Login_formControl__J6qj7",error:"Login_error__302c5"}},61:function(e,t,n){e.exports={paginator:"Paginator_paginator__15zm_",pageNumber:"Paginator_pageNumber__IFSyB",selectedPage:"Paginator_selectedPage__2WwVp"}},73:function(e,t,n){e.exports={header:"Header_header__1HrdU",loginBlock:"Header_loginBlock__hzbPP"}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(8),a=n.n(r),s=n(19),c=n(12),i=n(2),o=n(14),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",b={posts:[{id:1,message:"\u042d\u0439\u0451, \u0447\u0435 \u043a\u0430\u043a \u043e\u043d\u043e?",likesCount:12},{id:2,message:"\u041f\u0435\u0440\u0432\u0430\u044f \u043c\u0435\u0441\u0441\u0430\u0433\u0430",likesCount:11},{id:3,message:"\u0412\u0442\u043e\u0440\u0430\u044f \u043c\u0435\u0441\u0441\u0430\u0433\u0430",likesCount:0},{id:4,message:"\u0422\u0440\u0435\u0442\u044c\u044f \u043c\u0435\u0441\u0441\u0430\u0433\u0430",likesCount:-1}],profile:null,status:""},f=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},76:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(12),a=n(2),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your zen?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"},{id:6,message:"Yo"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:7,message:n}])});default:return e}}}},[[252,1,2]]]);
//# sourceMappingURL=main.8af2e015.chunk.js.map