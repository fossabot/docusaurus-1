(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(67),i=t(17),o=t(69),c=t(71),s=t.n(c),u=t(68),m=t(97),d=t.n(m);function b(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(t.push(i.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=24;var p=function(e){var a=b(Object(n.useState)(!1),2),t=a[0],l=a[1],i=e.docsMetadata,o=e.sidebar;if(!o)return null;var c=i.docsSidebars[o];if(!c)throw new Error("Can not find ".concat(o," config"));var m=function e(a){switch(a.type){case"category":return r.a.createElement("li",{className:"menu__list-item",key:a.label},r.a.createElement("a",{className:"menu__link",href:"#!"},a.label),r.a.createElement("ul",{className:"menu__list"},a.items.map(e)));case"link":return r.a.createElement("li",{className:"menu__list-item",key:a.label},r.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",to:a.href,onClick:function(){l(!1)}},a.label));case"ref":default:return e(function(e){var a=e.id,t=i.docs[a];if(!t)throw new Error("Improper sidebars file, document with id '".concat(a,"' not found."));return{type:"link",label:t.sidebar_label||t.title,href:t.permalink}}(a))}};return r.a.createElement("div",{className:d.a.sidebar},r.a.createElement("div",{className:s()("menu","menu--responsive",{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){l(!t)}},t?r.a.createElement("span",{className:s()(d.a.sidebarMenuIcon,d.a.sidebarMenuCloseIcon)},"×"):r.a.createElement("svg",{className:d.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:f,width:f,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return m(e)})))))},h=t(74);a.default=function(e){var a=e.route,t=e.docsMetadata,n=e.location,c=t.permalinkToId,s=c[n.pathname]||c[n.pathname.replace(/\/$/,"")],u=t.docs[s]||{},m=u.sidebar,d=u.description,b=u.title,f=u.permalink,v=u.image;return r.a.createElement(o.a,{noFooter:!0,description:d,title:b,image:v,permalink:f},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(p,{docsMetadata:t,sidebar:m})),r.a.createElement("main",{className:"col"},r.a.createElement(l.a,{components:h.a},Object(i.a)(a.routes,{docsMetadata:t}))))))}},97:function(e,a,t){e.exports={sidebar:"sidebar_Qb2S",sidebarMenuIcon:"sidebarMenuIcon_1uhT",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_3KMq"}}}]);