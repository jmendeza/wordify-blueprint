(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[6,11],{190:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var r,n,l=t(0),m=t(11),o=t(98),c=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(n||(n={}));function s(e){var a=function(a){return l.createElement(o.a.Consumer,null,(function(t){Object(m.f)(t);var r=a.value,n=a.children,l=c(a,["value","children"]),o="string"===typeof r?new Date(r||0):r;return n("formatDate"===e?t.formatDateToParts(o,l):t.formatTimeToParts(o,l))}))};return a.displayName=n[e],a}function i(e){var a=function(a){return l.createElement(o.a.Consumer,null,(function(t){Object(m.f)(t);var r=a.value,n=a.children,o=c(a,["value","children"]),s=t[e](r,o);if("function"===typeof n)return n(s);var i=t.textComponent||l.Fragment;return l.createElement(i,null,s)}))};return a.displayName=r[e],a}function d(e){return e}i("formatDate"),i("formatTime"),i("formatNumber"),i("formatList"),i("formatDisplayName"),s("formatDate"),s("formatTime")},192:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(85);a.default=function(e){var a=e.model,t=e.model,r=t.linkButtonText_s,m=t.linkButtonUrl_s,o=t.showLinkButton_b,c=t.facebookLink_s,s=t.twitterLink_s,i=t.instagramLink_s,d=t.youTubeLink_s;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.b,{className:"bio text-center",model:a},n.a.createElement(l.d,{component:"img",target:"src",model:a,fieldId:"profilePic_s",className:"img-fluid",alt:""}),n.a.createElement("div",{className:"bio-body"},n.a.createElement(l.d,{component:"h2",model:a,fieldId:"name_s"}),n.a.createElement(l.d,{component:"p",model:a,fieldId:"bio_t"}),o&&n.a.createElement("p",null,n.a.createElement(l.b,{component:"a",model:a,fieldId:"linkButtonText_s,linkButtonUrl_s",className:"btn btn-primary btn-sm rounded",href:m},r)),n.a.createElement("p",{className:"social"},c&&n.a.createElement("a",{href:c,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-facebook"})),s&&n.a.createElement("a",{href:s,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-twitter"})),i&&n.a.createElement("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-instagram"})),d&&n.a.createElement("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener"},n.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},200:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(219),m=t(220),o=t(216),c=t(221),s=t(222),i=t(217),d=t(223),f=t(85),u=t(100);a.default=function(e){var a,t=e.model,r=e.posts;return n.a.createElement(l.a,null,n.a.createElement("section",{className:"site-section py-lg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row blog-entries element-animate-disabled"},n.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},n.a.createElement(f.b,{component:"img",model:t,fieldId:"mainImage_s",src:t.mainImage_s,alt:"",className:"img-fluid mb-5"}),n.a.createElement("div",{className:"post-meta"},n.a.createElement("span",{className:"author mr-2"},n.a.createElement("img",{src:"/static-assets/images/person_1.jpg",alt:"",className:"mr-2"})," Colorlib")," \u2022 ",n.a.createElement("span",{className:"mr-2"},t.createdDate_dt)," \u2022 ",n.a.createElement("span",{className:"ml-2"},n.a.createElement("span",{className:"fa fa-comments"})," 3")),n.a.createElement(f.b,{component:"h1",model:t,fieldId:"headline_s",className:"mb-4"},t.headline_s),n.a.createElement("a",{className:"category mb-5",href:"/"},"Food")," ",n.a.createElement("a",{className:"category mb-5",href:"/"},"Travel"),n.a.createElement(f.b,{model:t,component:"div",fieldId:"content_o",className:"post-content-body"},null===(a=t.content_o)||void 0===a?void 0:a.map((function(e,a){return n.a.createElement(f.b,{key:e.craftercms.id,model:t,fieldId:"content_o",index:a},n.a.createElement(f.a,{model:e,contentTypeMap:u.a}))}))),n.a.createElement("div",{className:"pt-5"},n.a.createElement("div",null,"Categories: ",n.a.createElement("a",{href:"/"},"Food"),", ",n.a.createElement("a",{href:"/"},"Travel")),n.a.createElement("div",null,"Tags: ",n.a.createElement("a",{href:"/"},"#manila"),", ",n.a.createElement("a",{href:"/"},"#asia")))),n.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},n.a.createElement(i.a,null),n.a.createElement(d.a,{model:t,fieldId:"authorBio_o"}),n.a.createElement(m.a,{posts:r}),n.a.createElement(c.a,null),n.a.createElement(s.a,null))))),n.a.createElement("section",{className:"py-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",{className:"mb-3"},"Related Post"))),n.a.createElement("div",{className:"row"},null===r||void 0===r?void 0:r.map((function(e){return n.a.createElement("div",{key:e.craftercms.id,className:"col-md-6 col-lg-4"},n.a.createElement(o.d,{model:e,format:o.a,classes:{root:"sm height-md"}}))}))))))}},217:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(190),m=t(212),o=t(218),c=Object(l.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(m.a)().formatMessage;return n.a.createElement("div",{className:"sidebar-box search-form-wrap"},n.a.createElement(o.a,{id:"s",placeholder:e(c.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},223:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(0),n=t.n(r),l=t(192),m=t(85);function o(e){var a,t=e.model,r=e.fieldId;return n.a.createElement(m.b,{model:t,fieldId:r},null===(a=t[r])||void 0===a?void 0:a.map((function(e,a){return n.a.createElement(m.b,{key:e.craftercms.id,model:t,fieldId:r,index:a,className:"sidebar-box"},n.a.createElement(l.default,{model:e}))})))}}}]);
//# sourceMappingURL=6.b0021476.chunk.js.map