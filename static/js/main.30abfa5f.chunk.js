(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(65),r=n(155),c=n(219),s=n.n(c),i=n(174),u=n(75),o=n(29),l=["get","post","put","patch","del"],d=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.a.MAIN;Object(a.a)(this,e),this.accessToken=null,l.forEach(function(e){t[e]=function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=r.params,i=r.data,l=r.files,d=r.accessToken,p=s.a[e]("".concat(n).concat(a)),b=u.a.store.getState(),f=o.c.getAccessToken(b.auth),j=d||t.accessToken||f;if(j&&(p=p.set("Authorization",j)),c&&(p=p.query(c)),i&&(p=p.send(i)),l){var O=new FormData;Object.keys(l).forEach(function(e){O.append(e,l[e])}),p=p.send(O)}return p}})}return Object(r.a)(e,[{key:"setAccessToken",value:function(e){this.accessToken=e}}]),e}()},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(222),s=n(895),i=n(860),u=n(857),o=n(78),l=n(886),d=n(884),p=n(858),b=n(63),f=n(29),j=(n(306),Object(o.connect)(function(e){var t=e.auth,n=e.users;return{isAuth:f.c.getIsAuth(t),loggedUsername:f.c.getLoggedUser(t).username,isLoggingOut:b.d.getLogoutContext(n).isPending}},{logout:b.b})(function(e){var t=e.isAuth,n=e.isLoggingOut,a=e.loggedUsername,c=e.logout;return r.a.createElement("div",{className:"navigation"},r.a.createElement(u.a,null,r.a.createElement(l.a,{borderless:!0,stackable:!0,attached:"top",color:"orange"},r.a.createElement(l.a.Item,{header:!0},r.a.createElement(p.a,{to:"/"},r.a.createElement("img",{src:"/scribo/img/scribo.svg",style:{height:36},alt:"logo"}))),r.a.createElement(l.a.Item,{name:"\u8d0a\u52a9",as:p.a,to:"/donation"}),r.a.createElement(l.a.Item,{name:"\u610f\u898b\u56de\u994b",as:p.a,to:"/contact"}),r.a.createElement(l.a.Menu,{position:"right"},t&&r.a.createElement(l.a.Item,{name:"\u6211\u7684\u90e8\u843d\u683c",as:p.a,to:"/@".concat(a)}),t&&r.a.createElement(l.a.Item,{name:"\u64b0\u5beb\u65b0\u6587\u7ae0",as:p.a,to:"/post/new"}),t&&r.a.createElement(l.a.Item,{disabled:n,onClick:function(){return c()}},"\u767b\u51fa"),!t&&r.a.createElement(l.a.Item,{as:p.a,to:"/user/signin"},"\u767b\u5165"),!t&&r.a.createElement(l.a.Item,null,r.a.createElement(d.a,{primary:!0,as:p.a,to:"/user/signup"},"\u8a3b\u518a"))))))})),O=n(208),m=n(887),g=n(883),x=n(889),E=n(32),h=n(37),A=(n(405),function(){return r.a.createElement(u.a,null,r.a.createElement(m.a,{columns:2,stackable:!0,padded:!0,textAlign:"left",className:"footer"},r.a.createElement(m.a.Row,null,r.a.createElement(m.a.Column,null,r.a.createElement(s.a,{basic:!0,compact:!0},r.a.createElement(g.a,{horizontal:!0,size:"big"},r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.b})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.e})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.g})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.m})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.j}))))),r.a.createElement(m.a.Column,null,r.a.createElement(s.a,{basic:!0,compact:!0},r.a.createElement(g.a,{horizontal:!0,size:"big"},r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.d})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.a})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.f})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.i})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.k})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.l})),r.a.createElement(g.a.Item,null,r.a.createElement(E.a,{icon:h.c})))))),r.a.createElement(m.a.Row,null,r.a.createElement(m.a.Column,null,r.a.createElement(s.a,{basic:!0,compact:!0},r.a.createElement(x.a,{as:"h3"},"\u591a\u5143\u7528\u9014"),r.a.createElement(g.a,null,r.a.createElement(g.a.Item,null,"\u90e8\u843d\u683c"),r.a.createElement(g.a.Item,null,"\u65b0\u805e"),r.a.createElement(g.a.Item,null,"\u5c65\u6b77"),r.a.createElement(g.a.Item,null,"\u5167\u5bb9\u5206\u4eab")))),r.a.createElement(m.a.Column,null,r.a.createElement(s.a,{basic:!0,compact:!0},r.a.createElement(x.a,{as:"h3"},"\u5c08\u696d\u6a21\u7d44"),r.a.createElement(g.a,null,r.a.createElement(g.a.Item,null,"Markdown"),r.a.createElement(g.a.Item,null,"Code Block"),r.a.createElement(g.a.Item,null,"Math Support")))))))}),v=(n(407),n(410),function(e){var t=e.title,n=e.titleSuffix,a=e.placeholder,o=e.container,l=e.loading,d=e.children;return r.a.createElement(s.a,{basic:!0,style:{padding:0}},r.a.createElement(c.Helmet,null,r.a.createElement("title",null,"".concat(t).concat("Scribo"!==t?n:""))),r.a.createElement("div",{className:"app-content"},r.a.createElement(j,null),r.a.createElement(O.a,{active:l}),!0===a&&r.a.createElement(i.a,{hidden:!0}),!0!==a&&a,o?r.a.createElement(u.a,null,d):d,r.a.createElement(i.a,{hidden:!0,section:!0})),r.a.createElement(A,null))});v.defaultProps={title:"Scribo",titleSuffix:" - Scribo",container:!0};t.a=v},174:function(e,t,n){"use strict";t.a={MAIN:"https://scribo-backend.herokuapp.com/api",IMGUR:"https://api.imgur.com/3"}},208:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(895),s=n(857),i=n(860),u=n(890),o=n(861),l=function(e){var t=e.active,n=e.content;return t?r.a.createElement(c.a,{basic:!0},r.a.createElement(s.a,null,r.a.createElement(i.a,{hidden:!0,section:!0}),r.a.createElement(u.a,{inverted:!0,active:!0,style:{backgroundColor:"inherit"}},r.a.createElement(o.a,{inverted:!0,content:n})))):null};l.defaultProps={active:!1,content:"\u8f09\u5165\u4e2d"},t.a=l},275:function(e,t,n){e.exports=n(413)},29:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return p});var a,r=n(10),c=n(7),s=n(877),i=n(881),u=Object(s.a)({SET_AUTH:function(e,t,n,a){return{accessToken:e,ttl:t,tokenCreatedAt:n,user:a}},CLEAR_AUTH:function(){return{}}}),o=u.setAuth,l=u.clearAuth,d={auth:null,users:{}};t.b=Object(i.a)((a={},Object(r.a)(a,o,function(e,t){var n=t.payload,a=n.accessToken,s=n.ttl,i=n.tokenCreatedAt,u=n.user,o=u.id,l=new Date(new Date(i).getTime()+1e3*s);return{auth:o,users:Object(c.a)({},e.users,Object(r.a)({},o,Object(c.a)({accessToken:a,ttl:s,tokenCreatedAt:i,tokenExpiredAt:l},u)))}}),Object(r.a)(a,l,function(){return d}),a),d);var p={getIsAuth:function(e){return Boolean(e.auth)},getUsers:function(e){return e.users},getLoggedUserId:function(e){return e.auth},getLoggedUser:function(e){var t=this.getLoggedUserId(e);return t?this.getUsers(e)[t]:{}},getAccessToken:function(e){return this.getLoggedUser(e).accessToken}}},306:function(e,t,n){},36:function(e,t,n){"use strict";t.a=function(e){var t=e.response;return t||{body:{error:{message:e.message||"Unknown error"}}}}},405:function(e,t,n){},407:function(e,t,n){},410:function(e,t,n){},413:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(69),s=n.n(c),i=n(78),u=n(215);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(75),l=n(90),d=n(862),p=n(863),b=n(31),f=n(221),j=n.n(f),O=n(158),m=function(){return r.a.createElement(O.a,{placeholder:!0,loading:!0})},g=[{exact:!0,path:"/",component:function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,864))}},{exact:!0,path:"/theme",component:function(){return n.e(9).then(n.bind(null,865))}},{exact:!0,path:"/donation",component:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(28),n.e(10)]).then(n.bind(null,885))}},{exact:!0,path:"/contact",component:function(){return Promise.all([n.e(0),n.e(4),n.e(11)]).then(n.bind(null,870))}},{exact:!0,path:"/user/signup",component:function(){return Promise.all([n.e(2),n.e(3),n.e(12)]).then(n.bind(null,892))}},{exact:!0,path:"/user/signin",component:function(){return Promise.all([n.e(2),n.e(3),n.e(13)]).then(n.bind(null,896))}},{exact:!0,path:"/post/new",component:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,871))}},{path:"/user/:userId/post/:postId",component:function(){return Promise.all([n.e(0),n.e(6),n.e(4),n.e(5)]).then(n.bind(null,894))}},{exact:!0,path:"/@:username",component:function(){return Promise.all([n.e(1),n.e(27),n.e(15)]).then(n.bind(null,872))}},{path:"/@:username/:postSlug",component:function(){return Promise.all([n.e(0),n.e(6),n.e(4),n.e(5)]).then(n.bind(null,894))}},{path:"/post/:postId/edit",component:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,873))}},{path:"*",component:function(){return n.e(17).then(n.bind(null,874))}}].map(function(e,t){var n=e.path,a=e.component,c=Object(l.a)(e,["path","component"]);return r.a.createElement(d.a,Object.assign({key:n||t,path:n,component:j()({loader:a,loading:m,delay:300})},c))}),x=function(e){var t=e.history;return r.a.createElement(b.ConnectedRouter,{history:t},r.a.createElement(p.a,null,g))};"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()});var E=o.a.store,h=o.a.history,A=o.a.persistor;s.a.render(r.a.createElement(i.Provider,{store:E},r.a.createElement(u.a,{loading:null,persistor:A},r.a.createElement(x,{history:h}))),document.getElementById("root"))},52:function(e,t,n){"use strict";var a=n(65),r=n(88),c=n(87),s=n(89),i=new(function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,i=new Array(s),u=0;u<s;u++)i[u]=arguments[u];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).list=function(e){for(var t,a=arguments.length,r=new Array(a>1?a-1:0),c=1;c<a;c++)r[c-1]=arguments[c];return(t=n).get.apply(t,["/app-users/".concat(e,"/posts")].concat(r))},n.listMixed=function(){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n).get.apply(e,["/posts/mixed"].concat(a))},n.listByUsername=function(e){for(var t,a=arguments.length,r=new Array(a>1?a-1:0),c=1;c<a;c++)r[c-1]=arguments[c];return(t=n).get.apply(t,["/app-users/username/".concat(e,"/posts")].concat(r))},n.create=function(e,t){return n.post("/app-users/".concat(e,"/posts"),{data:t})},n.read=function(e,t){return n.get("/app-users/".concat(e,"/posts/").concat(t))},n.readByUsernameAndSlug=function(e,t){for(var a,r=arguments.length,c=new Array(r>2?r-2:0),s=2;s<r;s++)c[s-2]=arguments[s];return(a=n).get.apply(a,["/app-users/username/".concat(e,"/posts/").concat(t)].concat(c))},n.update=function(e,t,a){return n.put("/app-users/".concat(e,"/posts/").concat(t),{data:a})},n.delete=function(e,t){return n.del("/app-users/".concat(e,"/posts/").concat(t))},n}return Object(s.a)(t,e),t}(n(100).a));t.a=i},53:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(877),r=Object(a.a)({ADD_ENTITIES:function(e){return{entities:e}}}).addEntities},63:function(e,t,n){"use strict";var a,r=n(10),c=n(7),s=n(12),i=n.n(s),u=n(27),o=n(877),l=n(881),d=n(6),p=n(31),b=n(29),f=n(65),j=n(88),O=n(87),m=n(89),g=new(function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).signup=function(e){return n.post("/app-users",{data:e})},n.signin=function(e){return n.post("/app-users/login",{data:e})},n.logout=function(){return n.post("/app-users/logout")},n}return Object(m.a)(t,e),t}(n(100).a)),x=n(53),E=n(36);n.d(t,"c",function(){return v}),n.d(t,"f",function(){return P}),n.d(t,"e",function(){return R}),n.d(t,"b",function(){return U}),n.d(t,"d",function(){return M});var h=Object(o.a)({SIGNUP_API_REQUEST:function(e,t,n){return{user:e,resolve:t,reject:n}},SIGNUP_API_SUCCESS:function(e){return{res:e}},SIGNUP_API_FAILURE:function(e){return{res:e}},SIGNIN_API_REQUEST:function(e,t,n){return{credentials:e,resolve:t,reject:n}},SIGNIN_API_SUCCESS:function(e){return{res:e}},SIGNIN_API_FAILURE:function(e){return{res:e}},LOGOUT_API_REQUEST:function(e,t){return{resolve:e,reject:t}},LOGOUT_API_SUCCESS:function(e){return{res:e}},LOGOUT_API_FAILURE:function(e){return{res:e}}}),A={handleSignupApiRequest:i.a.mark(function e(t){var n,a,r,c,s,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.user,r=n.resolve,c=n.reject,e.prev=1,e.next=4,Object(d.a)(g.signup,a);case 4:return s=e.sent,e.next=7,Object(d.b)(I(s));case 7:return e.next=9,Object(d.b)(Object(p.push)("/user/signin"));case 9:if(e.t0=r,!e.t0){e.next=13;break}return e.next=13,Object(d.a)(r,s.body);case 13:e.next=24;break;case 15:return e.prev=15,e.t1=e.catch(1),u=Object(E.a)(e.t1),e.next=20,Object(d.b)(S(u));case 20:if(e.t2=c,!e.t2){e.next=24;break}return e.next=24,Object(d.a)(c,u.body);case 24:case"end":return e.stop()}},e,null,[[1,15]])}),handleSigninApiRequest:i.a.mark(function e(t){var n,a,r,c,s,u,o,l,f,j,O,m;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.credentials,r=n.resolve,c=n.reject,s={},s=a.emailOrUsername.indexOf("@")>=0?{email:a.emailOrUsername,password:a.password}:{username:a.emailOrUsername,password:a.password},e.prev=3,e.next=6,Object(d.a)(g.signin,s);case 6:return u=e.sent,o=u.body,l=o.accessToken,f=o.ttl,j=o.tokenCreatedAt,O=o.user,e.next=10,Object(d.b)(Object(b.d)(l,f,j,O));case 10:return e.next=12,Object(d.b)(y(u));case 12:return e.next=14,Object(d.b)(Object(p.push)("/@".concat(O.username)));case 14:if(e.t0=r,!e.t0){e.next=18;break}return e.next=18,Object(d.a)(r,u.body);case 18:e.next=29;break;case 20:return e.prev=20,e.t1=e.catch(3),m=Object(E.a)(e.t1),e.next=25,Object(d.b)(_(m));case 25:if(e.t2=c,!e.t2){e.next=29;break}return e.next=29,Object(d.a)(c,m.body);case 29:case"end":return e.stop()}},e,null,[[3,20]])}),handleLogoutApiRequest:i.a.mark(function e(t){var n,a,r,c,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.resolve,r=n.reject,e.prev=1,e.next=4,Object(d.a)(g.logout);case 4:return c=e.sent,e.next=7,Object(d.b)(k(c));case 7:return e.next=9,Object(d.b)(Object(p.push)("/user/signin"));case 9:return e.next=11,Object(d.b)(Object(b.a)());case 11:if(e.t0=a,!e.t0){e.next=15;break}return e.next=15,Object(d.a)(a,c.body);case 15:e.next=29;break;case 17:return e.prev=17,e.t1=e.catch(1),s=Object(E.a)(e.t1),e.next=22,Object(d.b)(w(s));case 22:if(!window.confirm("\u767b\u51fa\u6642\u767c\u751f\u4ee5\u4e0b\u932f\u8aa4\uff0c\u662f\u5426\u5f37\u5236\u767b\u51fa\uff1f\n".concat(s.body.error.message))){e.next=25;break}return e.next=25,Object(d.b)(Object(b.a)());case 25:if(e.t2=r,!e.t2){e.next=29;break}return e.next=29,Object(d.a)(r,s.body);case 29:case"end":return e.stop()}},e,null,[[1,17]])})},v={onSignupApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(P,A.handleSignupApiRequest);case 2:case"end":return e.stop()}},e)}),onSigninApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(R,A.handleSigninApiRequest);case 2:case"end":return e.stop()}},e)}),onLogoutApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(U,A.handleLogoutApiRequest);case 2:case"end":return e.stop()}},e)})},P=h.signupApiRequest,I=h.signupApiSuccess,S=h.signupApiFailure,R=h.signinApiRequest,y=h.signinApiSuccess,_=h.signinApiFailure,U=h.logoutApiRequest,k=h.logoutApiSuccess,w=h.logoutApiFailure,T={},L={signup:{isPending:!1,isFulfilled:!1,isRejected:!1},signin:{isPending:!1,isFulfilled:!1,isRejected:!1},logout:{isPending:!1,isFulfilled:!1,isRejected:!1}},C=Object(l.a)(Object(r.a)({},x.a,function(e,t){var n=t.payload.entities;return Object(c.a)({},e,n.users)}),T),F=Object(l.a)((a={},Object(r.a)(a,P,function(e){return Object(c.a)({},e,{signup:Object(c.a)({},e.signup,{isPending:!0,isFulfilled:!1,isRejected:!1})})}),Object(r.a)(a,I,function(e){return Object(c.a)({},e,{signup:Object(c.a)({},e.signup,{isPending:!1,isFulfilled:!0})})}),Object(r.a)(a,S,function(e){return Object(c.a)({},e,{signup:Object(c.a)({},e.signup,{isPending:!1,isRejected:!0})})}),Object(r.a)(a,R,function(e){return Object(c.a)({},e,{signin:Object(c.a)({},e.signin,{isPending:!0,isFulfilled:!1,isRejected:!1})})}),Object(r.a)(a,y,function(e){return Object(c.a)({},e,{signin:Object(c.a)({},e.signin,{isPending:!1,isFulfilled:!0})})}),Object(r.a)(a,_,function(e){return Object(c.a)({},e,{signin:Object(c.a)({},e.signin,{isPending:!1,isRejected:!0})})}),Object(r.a)(a,U,function(e){return Object(c.a)({},e,{logout:Object(c.a)({},e.logout,{isPending:!0,isFulfilled:!1,isRejected:!1})})}),Object(r.a)(a,k,function(e){return Object(c.a)({},e,{logout:Object(c.a)({},e.logout,{isPending:!1,isFulfilled:!0})})}),Object(r.a)(a,w,function(e){return Object(c.a)({},e,{logout:Object(c.a)({},e.logout,{isPending:!1,isRejected:!0})})}),a),L),M=(t.a=Object(u.c)({entities:C,context:F}),{getSignupContext:function(e){return e.context.signup||{}},getSigninContext:function(e){return e.context.signin||{}},getLogoutContext:function(e){return e.context.logout||{}}})},75:function(e,t,n){"use strict";var a=n(168),r=n(27),c=n(31),s=n(30),i=n(154),u=n(216),o=n.n(u),l=n(888),d=n(217),p=n(227),b=n(218),f=n(63),j=n(91),O=[f.c,j.j],m=function(e){O.forEach(function(t){for(var n in t)e.run(t[n])})},g=n(29),x=Object(s.a)(),E={key:"root",storage:o.a,whitelist:["auth"]},h=Object(r.c)({form:l.a,auth:g.b,users:f.a,posts:j.a}),A=Object(i.a)(E,h),v=Object(p.a)(),P=(Object(d.createLogger)({diff:!0,collapsed:!0}),[]);P=[v,b.a,Object(c.routerMiddleware)(x)];var I=Object(r.e)(Object(c.connectRouter)(x)(A),{},Object(r.d)(r.a.apply(void 0,Object(a.a)(P))));m(v);var S=Object(i.b)(I);t.a={store:I,history:x,persistor:S}},91:function(e,t,n){"use strict";var a,r=n(10),c=n(7),s=n(12),i=n.n(s),u=(n(157),n(27)),o=n(877),l=n(881),d=n(6),p=n(31),b=n(54),f=n(52),j=n(53),O=new b.b.Entity("users"),m=new b.b.Entity("posts",{author:O}),g=n(29),x=n(36),E=n(90),h=function(e){var t={};return Object.keys(e).forEach(function(n){var a=e[n],r=a.seriesPosts,s=a.seriesPostsMetadata,i=Object(E.a)(a,["seriesPosts","seriesPostsMetadata"]),u=r.map(function(e){return Object(c.a)({},e,{order:s.filter(function(t){return t.seriesPostId===e.id})[0].order})});t[n]=Object(c.a)({seriesPosts:u},i)}),t};n.d(t,"j",function(){return P}),n.d(t,"e",function(){return I}),n.d(t,"d",function(){return y}),n.d(t,"b",function(){return k}),n.d(t,"f",function(){return L}),n.d(t,"g",function(){return M}),n.d(t,"h",function(){return D}),n.d(t,"c",function(){return Q}),n.d(t,"i",function(){return H}),n.d(t,"k",function(){return re});var A=Object(o.a)({POST_LIST_API_SUCCESS:function(e){return{res:e}},POST_LIST_API_FAILURE:function(e){return{res:e}},POST_LIST_MIXED_API_REQUEST:function(e,t,n){return{pageId:e,resolve:t,reject:n}},POST_LIST_MIXED_API_SUCCESS:function(e,t){return{res:e,pageId:t}},POST_LIST_MIXED_API_FAILURE:function(e,t){return{res:e,pageId:t}},POST_LIST_BY_USERNAME_API_REQUEST:function(e,t,n,a){return{username:e,pageId:t,resolve:n,reject:a}},POST_LIST_BY_USERNAME_API_SUCCESS:function(e,t,n){return{res:e,username:t,pageId:n}},POST_LIST_BY_USERNAME_API_FAILURE:function(e,t,n){return{res:e,username:t,pageId:n}},POST_CREATE_API_REQUEST:function(e,t,n){return{post:e,resolve:t,reject:n}},POST_CREATE_API_SUCCESS:function(e){return{res:e}},POST_CREATE_API_FAILURE:function(e){return{res:e}},POST_READ_API_REQUEST:function(e,t,n,a){return{userId:e,postId:t,resolve:n,reject:a}},POST_READ_API_SUCCESS:function(e){return{res:e}},POST_READ_API_FAILURE:function(e){return{res:e}},POST_READ_BY_USERNAME_AND_SLUG_API_REQUEST:function(e,t,n,a){return{username:e,postSlug:t,resolve:n,reject:a}},POST_READ_BY_USERNAME_AND_SLUG_API_SUCCESS:function(e,t,n){return{res:e,username:t,postSlug:n}},POST_READ_BY_USERNAME_AND_SLUG_API_FAILURE:function(e,t,n){return{res:e,username:t,postSlug:n}},POST_UPDATE_API_REQUEST:function(e,t,n,a,r){return{postId:e,post:t,isSaveOnly:n,resolve:a,reject:r}},POST_UPDATE_API_SUCCESS:function(e){return{res:e}},POST_UPDATE_API_FAILURE:function(e){return{res:e}},POST_DELETE_API_REQUEST:function(e,t,n,a){return{userId:e,postId:t,resolve:n,reject:a}},POST_DELETE_API_SUCCESS:function(e){return{res:e}},POST_DELETE_API_FAILURE:function(e){return{res:e}},SET_MIXED_PAGE:function(e,t){return{pageId:e,postIds:t}},SET_USER_PAGE:function(e,t,n,a){return{username:e,pageId:t,meta:n,postIds:a}},REDIRECT_TO_NEW_POST:function(){}}),v={handlePostListMixedApiRequest:i.a.mark(function e(t){var n,a,r,c,s,u,o,l,p;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.pageId,r=n.resolve,c=n.reject,e.prev=1,e.next=4,Object(d.a)(f.a.listMixed);case 4:return s=e.sent,u=Object(b.a)(s.body,[m]),o=u.result,l=u.entities,e.next=8,Object(d.b)(S(s,a));case 8:return e.next=10,Object(d.b)(Object(j.a)(l));case 10:return e.next=12,Object(d.b)(W(1,o));case 12:if(e.t0=r,!e.t0){e.next=16;break}return e.next=16,Object(d.a)(r,s.body);case 16:e.next=27;break;case 18:return e.prev=18,e.t1=e.catch(1),p=Object(x.a)(e.t1),e.next=23,Object(d.b)(R(p,a));case 23:if(e.t2=c,!e.t2){e.next=27;break}return e.next=27,Object(d.a)(c,p.body);case 27:case"end":return e.stop()}},e,null,[[1,18]])}),handlePostListByUsernameApiRequest:i.a.mark(function e(t){var n,a,r,c,s,u,o,l,p,O,g,E,h;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.username,r=n.pageId,c=n.resolve,s=n.reject,e.prev=1,e.next=4,Object(d.a)(f.a.listByUsername,a,{params:{pageId:r}});case 4:return u=e.sent,o=u.body,l=o.posts,p=o.meta,O=Object(b.a)(l,[m]),g=O.result,E=O.entities,e.next=9,Object(d.b)(_(u,a,r));case 9:return e.next=11,Object(d.b)(Object(j.a)(E));case 11:return e.next=13,Object(d.b)(X(a,r,p,g));case 13:if(e.t0=c,!e.t0){e.next=17;break}return e.next=17,Object(d.a)(c,u.body);case 17:e.next=28;break;case 19:return e.prev=19,e.t1=e.catch(1),h=Object(x.a)(e.t1),e.next=24,Object(d.b)(U(h,a,r));case 24:if(e.t2=s,!e.t2){e.next=28;break}return e.next=28,Object(d.a)(s,h.body);case 28:case"end":return e.stop()}},e,null,[[1,19]])}),handlePostCreateApiRequest:i.a.mark(function e(t){var n,a,r,c,s,u,o,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.post,r=n.resolve,c=n.reject,e.prev=1,e.next=4,Object(d.c)(function(e){var t=e.auth;return g.c.getLoggedUser(t)});case 4:return s=e.sent,e.next=7,Object(d.a)(f.a.create,s.id,a);case 7:return u=e.sent,o=u.body.slug,e.next=11,Object(d.b)(w(u));case 11:return e.next=13,Object(d.b)(Object(p.push)("/@".concat(s.username,"/").concat(o)));case 13:if(e.t0=r,!e.t0){e.next=17;break}return e.next=17,Object(d.a)(r,u.body);case 17:e.next=28;break;case 19:return e.prev=19,e.t1=e.catch(1),l=Object(x.a)(e.t1),e.next=24,Object(d.b)(T(l));case 24:if(e.t2=c,!e.t2){e.next=28;break}return e.next=28,Object(d.a)(c,l.body);case 28:case"end":return e.stop()}},e,null,[[1,19]])}),handlePostReadApiRequest:i.a.mark(function e(t){var n,a,r,c,s,u,o,l,p;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.userId,r=n.postId,c=n.resolve,s=n.reject,e.prev=1,e.next=4,Object(d.a)(f.a.read,a,r);case 4:return u=e.sent,o=Object(b.a)(u.body,m),(l=o.entities).posts=h(l.posts),e.next=9,Object(d.b)(C(u));case 9:return e.next=11,Object(d.b)(Object(j.a)(l));case 11:if(e.t0=c,!e.t0){e.next=15;break}return e.next=15,Object(d.a)(c,u.body);case 15:e.next=26;break;case 17:return e.prev=17,e.t1=e.catch(1),p=Object(x.a)(e.t1),e.next=22,Object(d.b)(F(p));case 22:if(e.t2=s,!e.t2){e.next=26;break}return e.next=26,Object(d.a)(s,p.body);case 26:case"end":return e.stop()}},e,null,[[1,17]])}),handlePostReadByUsernameAndSlugApiRequest:i.a.mark(function e(t){var n,a,r,c,s,u,o,l,p;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.username,r=n.postSlug,c=n.resolve,s=n.reject,e.prev=1,e.next=4,Object(d.a)(f.a.readByUsernameAndSlug,a,r);case 4:return u=e.sent,o=Object(b.a)(u.body,m),(l=o.entities).posts=h(l.posts),e.next=9,Object(d.b)(q(u,a,r));case 9:return e.next=11,Object(d.b)(Object(j.a)(l));case 11:if(e.t0=c,!e.t0){e.next=15;break}return e.next=15,Object(d.a)(c,u.body);case 15:e.next=26;break;case 17:return e.prev=17,e.t1=e.catch(1),p=Object(x.a)(e.t1),e.next=22,Object(d.b)(B(p,a,r));case 22:if(e.t2=s,!e.t2){e.next=26;break}return e.next=26,Object(d.a)(s,p.body);case 26:case"end":return e.stop()}},e,null,[[1,17]])}),handlePostUpdateApiRequest:i.a.mark(function e(t){var n,a,r,c,s,u,o,l,b,j;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.postId,r=n.post,c=n.isSaveOnly,s=n.resolve,u=n.reject,e.prev=1,e.next=4,Object(d.c)(function(e){var t=e.auth;return g.c.getLoggedUser(t)});case 4:return o=e.sent,e.next=7,Object(d.a)(f.a.update,o.id,a,r);case 7:return l=e.sent,b=l.body.slug,e.next=11,Object(d.b)(N(l));case 11:if(c){e.next=14;break}return e.next=14,Object(d.b)(Object(p.push)("/@".concat(o.username,"/").concat(b)));case 14:if(e.t0=s,!e.t0){e.next=18;break}return e.next=18,Object(d.a)(s,l.body);case 18:e.next=29;break;case 20:return e.prev=20,e.t1=e.catch(1),j=Object(x.a)(e.t1),e.next=25,Object(d.b)(G(j));case 25:if(e.t2=u,!e.t2){e.next=29;break}return e.next=29,Object(d.a)(u,j.body);case 29:case"end":return e.stop()}},e,null,[[1,20]])}),handlePostDeleteApiRequest:i.a.mark(function e(t){var n,a,r,c,s,u,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,a=n.userId,r=n.postId,c=n.resolve,s=n.reject,e.prev=1,e.next=4,Object(d.a)(f.a.delete,a,r);case 4:return u=e.sent,e.next=7,Object(d.b)(Y(u));case 7:if(e.t0=c,!e.t0){e.next=11;break}return e.next=11,Object(d.a)(c,u.body);case 11:e.next=22;break;case 13:return e.prev=13,e.t1=e.catch(1),o=Object(x.a)(e.t1),e.next=18,Object(d.b)(z(o));case 18:if(e.t2=s,!e.t2){e.next=22;break}return e.next=22,Object(d.a)(s,o.body);case 22:case"end":return e.stop()}},e,null,[[1,13]])}),handleRedirectToNewPost:i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(function(e){var t=e.auth;return g.c.getIsAuth(t)});case 2:if(!e.sent){e.next=8;break}return e.next=6,Object(d.b)(Object(p.push)("/post/new"));case 6:e.next=10;break;case 8:return e.next=10,Object(d.b)(Object(p.push)("/user/signin"));case 10:case"end":return e.stop()}},e)})},P={onPostListMixedApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(I,v.handlePostListMixedApiRequest);case 2:case"end":return e.stop()}},e)}),onPostListByUsernameApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(y,v.handlePostListByUsernameApiRequest);case 2:case"end":return e.stop()}},e)}),onPostCreateApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(k,v.handlePostCreateApiRequest);case 2:case"end":return e.stop()}},e)}),onPostReadApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(L,v.handlePostReadApiRequest);case 2:case"end":return e.stop()}},e)}),onPostReadByUsernameAndSlugApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(M,v.handlePostReadByUsernameAndSlugApiRequest);case 2:case"end":return e.stop()}},e)}),onPostUpdateApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(D,v.handlePostUpdateApiRequest);case 2:case"end":return e.stop()}},e)}),onPostDeleteApiRequest:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(Q,v.handlePostDeleteApiRequest);case 2:case"end":return e.stop()}},e)}),onRedirectToNewPost:i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.d)(H,v.handleRedirectToNewPost);case 2:case"end":return e.stop()}},e)})},I=(A.postListApiSuccess,A.postListApiFailure,A.postListMixedApiRequest),S=A.postListMixedApiSuccess,R=A.postListMixedApiFailure,y=A.postListByUsernameApiRequest,_=A.postListByUsernameApiSuccess,U=A.postListByUsernameApiFailure,k=A.postCreateApiRequest,w=A.postCreateApiSuccess,T=A.postCreateApiFailure,L=A.postReadApiRequest,C=A.postReadApiSuccess,F=A.postReadApiFailure,M=A.postReadByUsernameAndSlugApiRequest,q=A.postReadByUsernameAndSlugApiSuccess,B=A.postReadByUsernameAndSlugApiFailure,D=A.postUpdateApiRequest,N=A.postUpdateApiSuccess,G=A.postUpdateApiFailure,Q=A.postDeleteApiRequest,Y=A.postDeleteApiSuccess,z=A.postDeleteApiFailure,W=A.setMixedPage,X=A.setUserPage,H=A.redirectToNewPost,J={},$={},K={},V={listMixed:{},listByUsername:{},entities:{},create:{isPending:!1,isFulfilled:!1,isRejected:!1},read:{isPending:!1,isFulfilled:!1,isRejected:!1},update:{isSaveOnly:!1,isPending:!1,isFulfilled:!1,isRejected:!1}},Z={total:1,pageId:1,limit:1},ee=Object(l.a)(Object(r.a)({},j.a,function(e,t){var n=t.payload.entities;return Object(c.a)({},e,n.posts)}),J),te=Object(l.a)(Object(r.a)({},W,function(e,t){var n=t.payload,a=n.pageId,s=n.postIds,i=e[a]||{};return Object(c.a)({},e,Object(r.a)({},a,Object(c.a)({},i,{elements:s})))}),$),ne=Object(l.a)(Object(r.a)({},X,function(e,t){var n,a=t.payload,s=a.username,i=a.pageId,u=a.meta,o=a.postIds,l=e[s]||{},d=l[i]||{};return Object(c.a)({},e,Object(r.a)({},s,Object(c.a)({},l,(n={},Object(r.a)(n,i,Object(c.a)({},d,{elements:o})),Object(r.a)(n,"meta",u),n))))}),K),ae=Object(l.a)((a={},Object(r.a)(a,I,function(e,t){var n=t.payload.pageId,a=e.listMixed[n]||{};return Object(c.a)({},e,{listMixed:Object(c.a)({},e.listMixed,Object(r.a)({},n,Object(c.a)({},a,{isPending:!0,isFulfilled:!1,isRejected:!1})))})}),Object(r.a)(a,S,function(e,t){var n=t.payload.pageId,a=e.listMixed[n]||{};return Object(c.a)({},e,{listMixed:Object(c.a)({},e.listMixed,Object(r.a)({},n,Object(c.a)({},a,{isPending:!1,isFulfilled:!0})))})}),Object(r.a)(a,R,function(e,t){var n=t.payload.pageId,a=e.listMixed[n]||{};return Object(c.a)({},e,{listMixed:Object(c.a)({},e.listMixed,Object(r.a)({},n,Object(c.a)({},a,{isPending:!1,isRejected:!0})))})}),Object(r.a)(a,y,function(e,t){var n=t.payload,a=n.username,s=n.pageId,i=e.listByUsername[a]||{},u=i[s]||{};return Object(c.a)({},e,{listByUsername:Object(c.a)({},e.listByUsername,Object(r.a)({},a,Object(c.a)({},i,Object(r.a)({},s,Object(c.a)({},u,{isPending:!0,isFulfilled:!1,isRejected:!1})))))})}),Object(r.a)(a,_,function(e,t){var n=t.payload,a=n.username,s=n.pageId,i=e.listByUsername[a]||{},u=i[s]||{};return Object(c.a)({},e,{listByUsername:Object(c.a)({},e.listByUsername,Object(r.a)({},a,Object(c.a)({},i,Object(r.a)({},s,Object(c.a)({},u,{isPending:!1,isFulfilled:!0})))))})}),Object(r.a)(a,U,function(e,t){var n=t.payload,a=n.username,s=n.pageId,i=e.listByUsername[a]||{},u=i[s]||{};return Object(c.a)({},e,{listByUsername:Object(c.a)({},e.listByUsername,Object(r.a)({},a,Object(c.a)({},i,Object(r.a)({},s,Object(c.a)({},u,{isPending:!1,isRejected:!0})))))})}),Object(r.a)(a,k,function(e){return Object(c.a)({},e,{create:Object(c.a)({},e.create,{isPending:!0,isFulfilled:!1,isRejected:!1})})}),Object(r.a)(a,w,function(e){return Object(c.a)({},e,{create:Object(c.a)({},e.create,{isPending:!1,isFulfilled:!0})})}),Object(r.a)(a,T,function(e){return Object(c.a)({},e,{create:Object(c.a)({},e.create,{isPending:!1,isRejected:!0})})}),Object(r.a)(a,L,function(e){return Object(c.a)({},e,{read:Object(c.a)({},e.read,{isPending:!0,isFulfilled:!1,isRejected:!1})})}),Object(r.a)(a,C,function(e){return Object(c.a)({},e,{read:Object(c.a)({},e.read,{isPending:!1,isFulfilled:!0})})}),Object(r.a)(a,F,function(e){return Object(c.a)({},e,{read:Object(c.a)({},e.read,{isPending:!1,isRejected:!0})})}),Object(r.a)(a,M,function(e,t){var n=t.payload,a=n.username,s=n.postSlug,i="".concat(a,",").concat(s),u=e.entities[i]||{};return Object(c.a)({},e,{entities:Object(r.a)({},i,Object(c.a)({},u,{isPending:!0,isFulfilled:!1,isRejected:!1}))})}),Object(r.a)(a,q,function(e,t){var n=t.payload,a=n.username,s=n.postSlug,i="".concat(a,",").concat(s),u=e.entities[i]||{};return Object(c.a)({},e,{entities:Object(r.a)({},i,Object(c.a)({},u,{isPending:!1,isFulfilled:!0}))})}),Object(r.a)(a,B,function(e,t){var n=t.payload,a=n.username,s=n.postSlug,i="".concat(a,",").concat(s),u=e.entities[i]||{};return Object(c.a)({},e,{entities:Object(r.a)({},i,Object(c.a)({},u,{isPending:!1,isRejected:!0}))})}),Object(r.a)(a,D,function(e,t){var n=t.payload.isSaveOnly;return Object(c.a)({},e,{update:Object(c.a)({},e.update,{isSaveOnly:n,isPending:!0,isFulfilled:!1,isRejected:!1})})}),Object(r.a)(a,N,function(e){return Object(c.a)({},e,{update:Object(c.a)({},e.update,{isPending:!1,isFulfilled:!0})})}),Object(r.a)(a,G,function(e){return Object(c.a)({},e,{update:Object(c.a)({},e.update,{isPending:!1,isRejected:!0})})}),a),V),re=(t.a=Object(u.c)({entities:ee,mixedPages:te,userPages:ne,context:ae}),{getListMixedContext:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e.context.listMixed[t]||{}},getListByUsernameContext:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(e.context.listByUsername[t]||{})[n]||{}},getCreateContext:function(e){return e.context.create||{}},getReadContext:function(e){return e.context.read||{}},getEntitiesContext:function(e,t,n){return e.context.entities["".concat(t,",").concat(n)]||{}},getUpdateContext:function(e){return e.context.update||{}},getMixedPage:function(e,t){return e.mixedPages[t]||{}},getUserPage:function(e,t,n){return n=n?n.toString():"1",(e.userPages[t]||{})[n]||{}},getUserPagesMeta:function(e,t){return(e.userPages[t]||{}).meta||Z},getMixedPosts:function(e){return(this.getMixedPage(e,"1").elements||[]).map(function(t){return e.entities[t]})},getUserPosts:function(e,t,n){return(this.getUserPage(e,t,n).elements||[]).map(function(t){return e.entities[t]})},getMixedPostsWithAuthor:function(e,t){return this.getMixedPosts(e).map(function(e){return Object(c.a)({},e,{author:t[e.authorId]})})},getUserPostsWithAuthor:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return this.getUserPosts(e,n,a).map(function(e){return Object(c.a)({},e,{author:t[e.authorId]})})},getPost:function(e,t){return e.entities[t]||{isNotExist:!0}},getPostByUsernameAndSlug:function(e,t,n,a){var r={isNotExist:!0},c=Object.keys(t).filter(function(e){return t[e].username===n});if(0===c.length)return r;var s=c[0],i=Object.keys(e.entities).filter(function(t){var n=e.entities[t];return n.slug===a&&n.authorId===s});if(0===i.length)return r;if(i.length>1)throw new Error("Duplicate (username, slug) pair, cannot retrieve post correctly.");var u=i[0];return e.entities[u]}})}},[[275,29,26]]]);