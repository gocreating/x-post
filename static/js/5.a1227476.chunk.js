(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{840:function(e,t,a){},894:function(e,t,a){"use strict";a.r(t);var n=a(65),r=a(155),l=a(88),c=a(87),o=a(89),s=a(0),i=a.n(s),m=a(78),u=a(721),d=a(858),p=a(428),E=a.n(p),h=a(850),f=a(851),g=a(860),b=a(857),v=a(889),w=a(887),k=a(895),y=a(883),C=a(722),I=a(31),P=a(32),A=a(443),D=a(29),S=a(91),j=a(158),x=a(523),M=a(208),U=(a(510),function(e){var t=e.prefix,a=e.relative,n=e.relativeThresholdMs,r=e.children,l=E()(r).locale("zh-tw"),c=l.format("YYYY/MM/DD HH:mm"),o=Math.abs(l.diff(new Date))<n;return i.a.createElement("time",{title:c},t,o&&a&&l.fromNow(),(!o&&a||!a)&&l.format("YYYY/MM/DD"))});U.defaultProps={prefix:"",relative:!1,relativeThresholdMs:2592e5};var Y=U,N=a(719),O=(a(840),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).handleDeletePostClick=function(){a.deletePost()},a.fetchPost=function(){var e=a.props;(0,e.postReadByUsernameAndSlug)(e.username,e.postSlug)},a.deletePost=function(){var e=a.props,t=e.postDelete,n=e.post,r=e.push,l=e.username;n.seriesCount>0?alert("\u672c\u6587\u7ae0\u5305\u542b ".concat(n.seriesCount," \u7bc7\u7cfb\u5217\u6587\u7ae0\uff0c\u8acb\u79fb\u9664\u6240\u6709\u7cfb\u5217\u6587\u7ae0\u5f8c\u518d\u522a\u9664\u3002")):window.confirm("sure?")&&t(n.authorId,n.id,function(){r("/@".concat(l))},function(e){alert(e.error.message)})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchPost()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.username,n=t.postSlug;a===e.username&&n===e.postSlug||this.fetchPost()}},{key:"render",value:function(){var e=this.props,t=e.username,a=e.post,n=e.seriesPosts,r=e.isLoading,l=e.isError,c=e.isAuth,o=e.loggedUserId,s=a.headerImage||{},m=a.customCreatedAt||a.createdAt,u=a.customUpdatedAt||a.updatedAt,p=m&&u&&E()(u).diff(m)>1e3;return l?i.a.createElement(j.a,{placeholder:!0,title:"\u7121\u6cd5\u986f\u793a\u6587\u7ae0"},i.a.createElement(h.a,{negative:!0},i.a.createElement(h.a.Header,null,"\u7121\u6cd5\u986f\u793a\u6587\u7ae0"),i.a.createElement("p",null,"\u5f88\u62b1\u6b49\uff0c\u60a8\u6240\u700f\u89bd\u7684\u6587\u7ae0\u53ef\u80fd\u4e0d\u5b58\u5728\u3002"))):i.a.createElement(j.a,{placeholder:!1,container:!1,title:a.title},i.a.createElement("div",{className:"post-header-container"},s.src&&i.a.createElement(f.a,{fluid:!0,centered:!0,src:s.src}),a.title&&i.a.createElement(g.a,{hidden:!0}),i.a.createElement(b.a,null,a.title&&i.a.createElement(v.a,{size:"huge",className:"post-header web-font"},a.title,a.subtitle&&i.a.createElement(v.a.Subheader,{className:"web-font"},i.a.createElement(g.a,{hidden:!0}),a.subtitle)),a.title&&i.a.createElement(g.a,{hidden:!0,section:!0}))),i.a.createElement(b.a,null,i.a.createElement(w.a,{stackable:!0},i.a.createElement(w.a.Row,null,i.a.createElement(w.a.Column,{width:12},i.a.createElement("div",{className:"white background"},i.a.createElement(M.a,{active:r}),!r&&i.a.createElement(k.a,{padded:"very",attached:"top"},i.a.createElement(x.a,{blocks:a.blocks})))),i.a.createElement(w.a.Column,{width:4},c&&o===a.authorId&&i.a.createElement(y.a,{link:!0},i.a.createElement(y.a.Item,{as:d.a,to:"/post/".concat(a.id,"/edit")},"\u7de8\u8f2f\u6587\u7ae0"),i.a.createElement(y.a.Item,{as:d.a,to:"#",onClick:this.handleDeletePostClick},"\u522a\u9664\u6587\u7ae0")),i.a.createElement(y.a,{horizontal:!0,relaxed:!0,size:"big"},i.a.createElement(y.a.Item,null,i.a.createElement(f.a,{avatar:!0,src:"".concat("/scribo","/img/default-avatar.png")}),i.a.createElement(y.a.Content,null,i.a.createElement(y.a.Header,null,i.a.createElement(d.a,{to:"/@".concat(t)},t))))),i.a.createElement(y.a,{relaxed:!0},!r&&i.a.createElement(y.a.Item,null,i.a.createElement(y.a.Icon,{style:{borderBottom:0}},i.a.createElement(P.a,{icon:A.a})),i.a.createElement(y.a.Content,null,i.a.createElement("p",null,i.a.createElement(Y,{prefix:"\u767c\u8868\u65bc ",relative:!0},m),p&&[i.a.createElement("br",{key:"0"}),i.a.createElement(Y,{key:"1",prefix:"\u6700\u5f8c\u66f4\u65b0\u65bc ",relative:!0},u)])))))),n.length>0&&i.a.createElement(w.a.Row,null,i.a.createElement(w.a.Column,{width:12},i.a.createElement(k.a,{secondary:!0,padded:"very",color:"blue"},i.a.createElement(y.a,{divided:!0,relaxed:"very",size:"big"},n.map(function(e,a){return i.a.createElement(y.a.Item,{key:e.id},i.a.createElement(y.a.Content,null,i.a.createElement(C.a,{style:{float:"right"}},"# ",a+1),i.a.createElement(y.a.Header,{as:d.a,to:"/@".concat(t,"/").concat(e.slug),className:"web-font"},e.title),i.a.createElement("span",{className:"web-font"},e.subtitle)))}))))),i.a.createElement(w.a.Row,null,i.a.createElement(w.a.Column,{width:12},a.blocks&&i.a.createElement(N.a,{id:"post-id-".concat(a.id),path:"/@".concat(t,"/").concat(a.slug)}))))))}}]),t}(s.Component));t.default=Object(u.a)(Object(m.connect)(function(e,t){var a=e.posts,n=e.users,r=e.auth,l=t.match.params,c=l.username,o=l.postSlug,s=S.k.getPostByUsernameAndSlug(a,n.entities,c,o),i=S.k.getEntitiesContext(a,c,o),m=s.seriesPosts||[];return m.sort(function(e,t){return e.order-t.order}),{username:c,postSlug:o,post:s,seriesPosts:m,isLoading:i.isPending,isError:i.isRejected,isAuth:D.c.getIsAuth(r),loggedUserId:D.c.getLoggedUserId(r)}},{postReadByUsernameAndSlug:S.g,postDelete:S.c,push:I.push})(O))}}]);