(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{56:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(69),m=t(72),c=t(68);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,o=a.name,s=a.count;return n.a.createElement(l.a,{title:'Blog | Tagged "'.concat(o,'"'),description:'Blog | Tagged "'.concat(o,'"')},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s,' post(s) tagged with "',o,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content,t=e.metadata;return n.a.createElement("div",{key:t.permalink},n.a.createElement(m.a,{frontMatter:a.frontMatter,metadata:t,truncated:!0},n.a.createElement(a,null)))})))))))}},72:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(67),m=t(68),c=t(74);a.a=function(e){var a,t,r,o,s,i=e.children,u=e.frontMatter,g=e.metadata,E=e.truncated,d=g.date,v=g.permalink,h=g.tags,p=u.author,f=u.authorURL,N=u.authorTitle,b=u.authorFBID,k=u.title;return n.a.createElement("div",null,(a=d.substring(0,10).split("-"),t=a[0],r=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(a[1],10)-1],o=parseInt(a[2],10),s=b?"https://graph.facebook.com/".concat(b,"/picture/?height=200&width=200"):u.authorImageURL,n.a.createElement("header",null,n.a.createElement("h1",{className:"margin-bottom--xs"},n.a.createElement(m.a,{to:v},k)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("small",null,r," ",o,", ",t)),n.a.createElement("div",{className:"avatar margin-bottom--md"},s&&n.a.createElement("a",{className:"avatar__photo-link",href:f,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:s,alt:p})),n.a.createElement("div",{className:"avatar__intro"},p&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},p)),n.a.createElement("small",{className:"avatar__subtitle"},N)))))),n.a.createElement("article",{className:"markdown"},n.a.createElement(l.a,{components:c.a},i)),n.a.createElement("div",{className:"row margin-vert--lg"},n.a.createElement("div",{className:"col"},h.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("strong",null,"Tags:"),h.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)})))),n.a.createElement("div",{className:"col text--right"},E&&n.a.createElement(m.a,{to:g.permalink},n.a.createElement("strong",null,"Read More")))))}}}]);