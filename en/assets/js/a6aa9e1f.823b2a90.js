(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),i=t(124),s=t(136),m=t(120),c=t(119);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(m.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},r.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},d=t(130);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,m=Object(l.default)().siteConfig.title,c=a.blogDescription,u=a.blogTitle,g="/"===a.permalink?m:u;return r.a.createElement(i.a,{title:g,description:c,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(d.a,{sidebar:n})),r.a.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return r.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},122:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"d",(function(){return i})),t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return m})),t.d(a,"f",(function(){return c})),t.d(a,"e",(function(){return o}));var n=t(121),r=t.n(n);t(126)(r.a),t(128).lunrLanguageZh(r.a),t(127)(r.a);var l=["en","zh"],i=!1,s=null,m="cc31b5a7",c=8,o=50},130:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),l=t(117),i=t(120),s=t(55),m=t.n(s);function c(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(m.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:m.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:m.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},r.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title))}))))}},136:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(117),i=t(116),s=t(119),m=t(120),c=t(137),o=t(135),d=t(57),u=t.n(d),g=t(118);a.a=function(e){var a,t,n=(a=Object(g.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=e.children,p=e.frontMatter,v=e.metadata,b=e.truncated,E=e.isBlogPostPage,h=void 0!==E&&E,f=v.date,N=v.formattedDate,_=v.permalink,k=v.tags,w=v.readingTime,T=p.author,L=p.title,M=p.image,O=p.keywords,P=p.author_url||p.authorURL,x=p.author_title||p.authorTitle,y=p.author_image_url||p.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{keywords:O,image:M}),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(t=h?"h1":"h2",r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",u.a.blogPostTitle)},h?L:r.a.createElement(m.a,{to:_},L)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:u.a.blogPostDate},N,w&&r.a.createElement(r.a.Fragment,null," \xb7 ",n(w)))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement(m.a,{className:"avatar__photo-link avatar__photo",href:P},r.a.createElement("img",{src:y,alt:T})),r.a.createElement("div",{className:"avatar__intro"},T&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(m.a,{href:P},T)),r.a.createElement("small",{className:"avatar__subtitle"},x)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(i.a,{components:c.a},d)),(k.length>0||b)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),b&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:v.permalink,"aria-label":"Read more about "+L},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);