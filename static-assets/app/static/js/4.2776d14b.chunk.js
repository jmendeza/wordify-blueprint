(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[4,11],{181:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r,n,l=t(0),c=t(4),s=t(84),m=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(n||(n={}));function o(e){var a=function(a){return l.createElement(s.a.Consumer,null,(function(t){Object(c.f)(t);var r=a.value,n=a.children,l=m(a,["value","children"]),s="string"===typeof r?new Date(r||0):r;return n("formatDate"===e?t.formatDateToParts(s,l):t.formatTimeToParts(s,l))}))};return a.displayName=n[e],a}function i(e){var a=function(a){return l.createElement(s.a.Consumer,null,(function(t){Object(c.f)(t);var r=a.value,n=a.children,s=m(a,["value","children"]),o=t[e](r,s);if("function"===typeof n)return n(o);var i=t.textComponent||l.Fragment;return l.createElement(i,null,o)}))};return a.displayName=r[e],a}function u(e){return e}i("formatDate"),i("formatTime"),i("formatNumber"),i("formatList"),i("formatDisplayName"),o("formatDate"),o("formatTime")},184:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return d}));var r=t(9),n=t(0),l=t.n(n),c=t(5),s=t(185),m=t(70),o=t(20),i="landscape",u="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,n=Object(s.a)().formatDate,f=Object(o.b)(),p=Object(r.a)(f,1)[0].isAuthoring,E=e.classes,v=e.parentModelId,b=e.format,g=void 0===b?"portrait":b,N=e.showBlurb,h=void 0!==N&&N,y=e.tags,O=void 0===y?"":y,j=e.numOfComments,k=e.model,P=e.model,_=Object(r.a)(P.authorBio_o,1)[0],w=_.name_s,x=_.profilePic_s,F=P.blurb_t,T=P.headline_s,M=P.mainImage_s,C=P.mainImageAlt_s,D=void 0===C?"":C,I=P.craftercms.dateModified,L=k.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace("post/","articles/"),S=Object(m.b)({model:k,parentModelId:v,isAuthoring:p}).props;switch(g){case"portrait":return l.a.createElement(c.b,Object.assign({to:L,className:"blog-entry ".concat(null!==(a=null===E||void 0===E?void 0:E.root)&&void 0!==a?a:"")},S),l.a.createElement("img",{src:M,alt:D}),l.a.createElement("div",{className:"blog-content-body"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:x,alt:""})," ",w)," \u2022 ",l.a.createElement("span",{className:"mr-2"},n(I)),j&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",j))),l.a.createElement("h2",null,T)));case i:return l.a.createElement("div",Object.assign({className:"post-entry-horizontal"},S),l.a.createElement(c.b,{to:L,className:null===E||void 0===E?void 0:E.root},l.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(M,")")}}),l.a.createElement("span",{className:"text"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:x,alt:""})," ",w),"\u2022 ",l.a.createElement("span",{className:"mr-2"},n(I)),j&&l.a.createElement(l.a.Fragment,null,"\u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," $",j))),l.a.createElement("h2",null,T))));case u:return l.a.createElement(c.b,Object.assign({to:L,className:null===E||void 0===E?void 0:E.root},S),l.a.createElement("img",{src:M,alt:D,className:"mr-4"}),l.a.createElement("div",{className:"text"},l.a.createElement("h4",null,T),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"mr-2"},n(I)))));case d:return l.a.createElement(c.b,{to:L,className:"a-block d-flex align-items-center ".concat(null!==(t=null===E||void 0===E?void 0:E.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(M,")")}},l.a.createElement("div",Object.assign({className:"text ".concat(null===E||void 0===E?void 0:E.innerWrapper)},S),l.a.createElement("div",{className:"post-meta"},O&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"category"},O)," \u2022 "),l.a.createElement("span",{className:"mr-2"},n(I)),j&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",j))),l.a.createElement("h3",null,T),h&&l.a.createElement("p",null,F)));default:return console.error('Unknown PostCard format "'.concat(g,'" on post "').concat(T,'"')),l.a.createElement(c.b,Object.assign({to:L,className:null===E||void 0===E?void 0:E.root},S),l.a.createElement("h2",null,T))}}},185:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(0),n=t(84),l=t(4);function c(){var e=Object(r.useContext)(n.a);return Object(l.f)(e),e}},186:function(e,a,t){"use strict";var r=t(88),n=t(55),l=t(86),c=t(57),s=t(56),m=t(0),o=t(84),i=t(87),u=t(4),d=t(71),f=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t},p=t.n(d).a||d;function E(e,a){return Object(i.a)(Object.assign(Object.assign({},u.a),{locale:"en"}),Object(u.b)(),e,a)}var v=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,r=f(a,["values"]),n=e.values,l=f(e,["values"]);return!p(n,t)||!p(r,l)}},{key:"render",value:function(){var e=this;return m.createElement(o.a.Consumer,null,(function(a){e.props.defaultMessage||Object(u.f)(a);var t=a||{},n=t.formatMessage,l=void 0===n?E:n,c=t.textComponent,s=void 0===c?m.Fragment:c,o=e.props,i=o.id,d=o.description,f=o.defaultMessage,p=o.values,v=o.children,b=o.tagName,g=void 0===b?s:b,N=l({id:i,description:d,defaultMessage:f},p);return Array.isArray(N)||(N=[N]),"function"===typeof v?v.apply(void 0,Object(r.a)(N)):g?m.createElement.apply(m,[g,null].concat(Object(r.a)(N))):N}))}}]),t}(m.Component);v.displayName="FormattedMessage",v.defaultProps={values:{}},a.a=v},187:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(186),c=t(184);a.a=function(e){var a=e.posts;return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"common.popularPostsTitle",defaultMessage:"Popular Posts"})),n.a.createElement("div",{className:"post-entry-sidebar"},n.a.createElement("ul",null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement("li",{key:e.craftercms.id},n.a.createElement(c.d,{model:e,format:c.c}))})))))}},188:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(186);a.a=function(e){var a=e.categories;return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"})),n.a.createElement("ul",{className:"categories"},null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement("li",{key:e.key},n.a.createElement("a",{href:"/"},e.value))}))))}},189:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(186);a.a=function(e){var a=e.tags;return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement("h3",{className:"heading"},n.a.createElement(l.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"})),n.a.createElement("ul",{className:"tags"},null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement("li",{key:e.key},n.a.createElement("a",{href:"/"},e.value))}))))}},190:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r);a.default=function(e){var a=e.ice,t=e.model,r=t.bio_t,l=t.name_s,c=t.profilePic_s,s=t.linkButtonText_s,m=t.linkButtonUrl_s,o=t.showLinkButton_b,i=t.facebookLink_s,u=t.twitterLink_s,d=t.instagramLink_s,f=t.youTubeLink_s;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",Object.assign({className:"bio text-center"},a),n.a.createElement("img",{src:c,alt:"",className:"img-fluid"}),n.a.createElement("div",{className:"bio-body"},n.a.createElement("h2",null,l),n.a.createElement("p",null,r),o&&n.a.createElement("p",null,n.a.createElement("a",{href:m,className:"btn btn-primary btn-sm rounded"},s)),n.a.createElement("p",{className:"social"},i&&n.a.createElement("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-facebook"})),u&&n.a.createElement("a",{href:u,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-twitter"})),d&&n.a.createElement("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-instagram"})),f&&n.a.createElement("a",{href:f,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},193:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(190),c=t(23);function s(e){var a=e.model,t=Object(c.c)(e);return n.a.createElement("div",{className:"sidebar-box"},n.a.createElement(l.default,{ice:t,model:a}))}a.a=function(e){var a=e.bios;return n.a.createElement(n.a.Fragment,null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement(s,{key:e.craftercms.id,model:e})})))}},194:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(181),c=t(185),s=t(89),m=Object(l.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(c.a)().formatMessage;return n.a.createElement("div",{className:"sidebar-box search-form-wrap"},n.a.createElement(s.a,{id:"s",placeholder:e(m.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},195:function(e,a,t){"use strict";var r=t(29),n=t(23),l=t(0),c=t.n(l);a.a=function(e){var a=Object(n.a)(e),t=e.component,l=void 0===t?"div":t,s=Object(r.a)({},e);return delete s.model,delete s.component,delete s.fieldId,c.a.createElement(l,Object.assign({},a,s))}},198:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(85),c=t(90),s=t(184),m=t(186),o=t(187),i=t(195),u=t(193),d=t(194),f=t(189),p=t(188);a.default=function(e){var a=e.model,t=e.posts,r=e.categories,E=e.tags,v=e.model,b=v.headline_s,g=v.bios_o,N=v.content_o,h=a.craftercms.path;return n.a.createElement(l.a,null,n.a.createElement("section",{className:"site-section pt-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row blog-entries"},n.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{className:"mb-4"},b),n.a.createElement(i.a,{component:"div",model:a,fieldId:"content_o"},null===N||void 0===N?void 0:N.map((function(e){return n.a.createElement(c.a,{model:e,parentModelId:h,key:e.craftercms.id,wrapper:{component:"div",className:"mb-5"}})}))))),n.a.createElement("div",{className:"row mb-5 mt-5"},n.a.createElement("div",{className:"col-md-12 mb-5"},n.a.createElement("h2",null,n.a.createElement(m.a,{id:"common.latestPostSectionTitle",defaultMessage:"Latest Posts"}))),n.a.createElement("div",{className:"col-md-12"},null===t||void 0===t?void 0:t.map((function(e){return n.a.createElement(s.d,{model:e,format:s.b,key:e.craftercms.id})})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("nav",{"aria-label":"Page navigation",className:"text-center"},n.a.createElement("ul",{className:"pagination"},n.a.createElement("li",{className:"page-item active"},n.a.createElement("a",{className:"page-link",href:"/"},"<")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"1")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"2")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"3")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"4")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},"5")),n.a.createElement("li",{className:"page-item"},n.a.createElement("a",{className:"page-link",href:"/"},">"))))))),n.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},n.a.createElement(d.a,null),n.a.createElement(u.a,{bios:g}),n.a.createElement(o.a,{posts:t}),n.a.createElement(p.a,{categories:r}),n.a.createElement(f.a,{tags:E}))))))}}}]);
//# sourceMappingURL=4.2776d14b.chunk.js.map