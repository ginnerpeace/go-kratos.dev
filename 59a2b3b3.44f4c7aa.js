(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,_=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(n),g=r,s=b["".concat(_,".").concat(g)]||b[g]||u[g]||a;return n?o.a.createElement(s,c(c({ref:t},i),{},{components:n})):o.a.createElement(s,c({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,_=new Array(a);_[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,_[1]=c;for(var i=2;i<a;i++)_[i]=n[i];return o.a.createElement.apply(null,_)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return _})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(113)),_={slug:"go-project-layout",title:"Go\u5de5\u7a0b\u5316 - Project Layout \u6700\u4f73\u5b9e\u8df5",author:"Tony",author_title:"Maintainer of go-kratos",author_url:"https://github.com/tonybase",author_image_url:"https://avatars.githubusercontent.com/u/3871120?s=460&v=4",tags:["go","golang","project layout","best practice"]},c={permalink:"/blog/go-project-layout",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/blog/2021-03-08-go-project-layout.md",source:"@site/blog/2021-03-08-go-project-layout.md",description:"\u4ecb\u7ecd",date:"2021-03-08T00:00:00.000Z",tags:[{label:"go",permalink:"/blog/tags/go"},{label:"golang",permalink:"/blog/tags/golang"},{label:"project layout",permalink:"/blog/tags/project-layout"},{label:"best practice",permalink:"/blog/tags/best-practice"}],title:"Go\u5de5\u7a0b\u5316 - Project Layout \u6700\u4f73\u5b9e\u8df5",readingTime:1,truncated:!1},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",children:[]},{value:"\u5e94\u7528\u9879\u76ee",id:"\u5e94\u7528\u9879\u76ee",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),Object(a.b)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u8bb2 ",Object(a.b)("strong",{parentName:"p"},"Go \u9879\u76ee\u5de5\u7a0b\u5316")," \u4e0a\u7684\u4e00\u4e9b\u601d\u8003\uff0c\u4ee5\u53ca Kratos \u5728\u9879\u76ee\u4e0d\u540c\u89d2\u5ea6\u4e2d\u7684\u8bbe\u8ba1\u7406\u5ff5\u3002"),Object(a.b)("p",null,"Go \u662f\u4e00\u4e2a\u9762\u5411\u5305\u540d\u8bbe\u8ba1\u7684\u8bed\u8a00\uff0c\u53ef\u4ee5\u901a\u8fc7\u5404\u4e2a\u5305\u540d\u8fdb\u884c\u7ec4\u7ec7 ",Object(a.b)("em",{parentName:"p"},"Go\u9879\u76ee\u7684\u7ed3\u6784"),"\uff0c\u800c\u5927\u5bb6\u9075\u5faa\u89c4\u8303\u8bbe\u8ba1\u51c6\u5219\uff0c\u53ef\u4ee5\u6539\u5584\u56e2\u961f\u6210\u5458\u4e4b\u95f4\u7684\u6c9f\u901a\u3002"),Object(a.b)("h3",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),Object(a.b)("p",null,"\u6211\u4eec\u76f8\u4fe1\u5728\u6bcf\u4e2a\u516c\u53f8\u90fd\u5e94\u8be5\u5efa\u7acb\u4e00\u4e2a ",Object(a.b)("strong",{parentName:"p"},"Kit \u57fa\u7840\u5e93"),"\uff0c\u7136\u540e\u6bcf\u4e2a\u5e94\u7528\u4f9d\u8d56\u7ec4\u6210\u5fae\u670d\u52a1\u4f53\u7cfb\u3002"),Object(a.b)("h4",{id:"kit-\u57fa\u7840\u5e93"},"Kit \u57fa\u7840\u5e93"),Object(a.b)("p",null,"\u5c06 Kit \u9879\u76ee\u4f5c\u4e3a\u516c\u53f8\u7684\u6807\u51c6\u5e93\uff0c\u56e0\u6b64\u5e94\u8be5\u53ea\u6709\u4e00\u4e2a\u3002\u5e76\u4e14 Kit \u57fa\u7840\u5e93\u4e5f\u5e94\u8be5\u5177\u5907\u4ee5\u4e0b\u8fd9\u4e9b\u7279\u70b9\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7b80\u5355\uff1a\u4e0d\u8fc7\u5ea6\u8bbe\u8ba1\uff0c\u4ee3\u7801\u5e73\u5b9e\u7b80\u5355\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u901a\u7528\uff1a\u901a\u7528\u4e1a\u52a1\u5f00\u53d1\u6240\u9700\u8981\u7684\u57fa\u7840\u5e93\u7684\u529f\u80fd\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u9ad8\u6548\uff1a\u63d0\u9ad8\u4e1a\u52a1\u8fed\u4ee3\u7684\u6548\u7387\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u7a33\u5b9a\uff1a\u57fa\u7840\u5e93\u53ef\u6d4b\u8bd5\u6027\u9ad8\uff0c\u8986\u76d6\u7387\u9ad8\uff0c\u6709\u7ebf\u4e0a\u5b9e\u8df5\u5b89\u5168\u53ef\u9760\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u5065\u58ee\uff1a\u901a\u8fc7\u826f\u597d\u7684\u57fa\u7840\u5e93\u8bbe\u8ba1\uff0c\u51cf\u5c11\u9519\u7528\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\uff1a\u6027\u80fd\u9ad8\uff0c\u4f46\u4e0d\u7279\u5b9a\u4e3a\u4e86\u6027\u80fd\u505ahack\u4f18\u5316\uff0c\u7ea6\u4f1aunsafe\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u6269\u5c55\u6027\uff1a\u826f\u597d\u7684\u63a5\u53e3\u8bbe\u8ba1\uff0c\u6765\u6269\u5c55\u5b9e\u73b0\uff0c\u6216\u8005\u901a\u8fc7\u6dfb\u52a0\u57fa\u7840\u5e93\u76ee\u5f55\u6765\u6269\u5c55\u529f\u80fd\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u5bb9\u9519\u6027\uff1a\u4e3a\u5931\u8d25\u8bbe\u8ba1\uff0c\u5927\u91cf\u7ea6\u4f1a\u5bf9SRE\u7684\u7406\u89e3\uff0c\u9c81\u68d2\u6027\u9ad8\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u5de5\u5177\u94fe\uff1a\u5305\u542b\u5927\u91cf\u5de5\u5177\u94fe\uff0c\u53ef\u4ee5\u7f13\u5b58\u4ee3\u7801\u751f\u6210\uff0clint\u5de5\u5177\u7b49\u7b49\uff1b")),Object(a.b)("p",null,"\u4ee5 ",Object(a.b)("em",{parentName:"p"},"Kratos")," \u4e3a\u4f8b\u5b50\uff0c\u4e00\u4e2a\u5178\u578b\u7684 Kit \u57fa\u7840\u5e93 \u53ef\u80fd\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"github.com/go-kratos/kratos\n\u251c\u2500\u2500 cmd\n\u251c\u2500\u2500 docs\n\u251c\u2500\u2500 internal\n\u251c\u2500\u2500 examples\n\u251c\u2500\u2500 api\n\u251c\u2500\u2500 errors\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 log\n\u251c\u2500\u2500 metrics\n\u251c\u2500\u2500 registry\n\u251c\u2500\u2500 middleware\n\u251c\u2500\u2500 transport\n\u251c\u2500\u2500 third_party\n\u251c\u2500\u2500 app.go\n\u251c\u2500\u2500 options.go\n\u251c\u2500\u2500 go.mod\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e3a\u4e86\u4fdd\u8bc1 Kit \u57fa\u7840\u5e93\u7684\u53ef\u79fb\u690d\u6027\uff0c\u5c3d\u53ef\u80fd\u8fdb\u884c\u63a5\u53e3\u62bd\u8c61\uff0c\u5e76\u4e14 go.mod \u4f9d\u8d56\u7b2c\u4e09\u65b9\u5e93\u4e5f\u5c3d\u53ef\u80fd\u7b80\u5355\uff0c\u7136\u540e\u518d\u901a\u8fc7 plugins \u8fdb\u884c\u6269\u5c55\u57fa\u7840\u5e93\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u4e1a\u52a1\u9700\u6c42\u5b9a\u5236\u5316\u3002")),Object(a.b)("h3",{id:"\u5e94\u7528\u9879\u76ee"},"\u5e94\u7528\u9879\u76ee"),Object(a.b)("p",null,"\u5e94\u7528\u9879\u76ee\u5305\u542b\u7740\u4e00\u4e9b\u5e94\u7528\u6a21\u5757\uff0c\u7136\u540e\u5e94\u7528\u6a21\u5757\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7 cmd/main.go \u8fdb\u884c\u521d\u59cb\u5316\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"application\n|____api\n| |____helloworld\n| | |____v1\n| | | |____greeter_http.pb.go\n| | | |____greeter.pb.go\n| | | |____greeter.proto\n| | | |____greeter_grpc.pb.go\n| | |____errors\n| | | |____helloworld_errors.pb.go\n| | | |____helloworld.proto\n| | | |____helloworld.pb.go\n|____cmd\n| |____helloworld\n| | |____wire_gen.go\n| | |____wire.go\n| | |____main.go\n|____configs\n| |____config.yaml\n|____internal\n| |____conf\n| | |____conf.proto\n| | |____conf.pb.go\n| |____data\n| | |____data.go\n| | |____greeter.go\n| |____biz\n| | |____greeter.go\n| | |____biz.go\n| |____service\n| | |____service.go\n| | |____greeter.go\n| |____server\n| | |____server.go\n| | |____grpc.go\n| | |____http.go\n|____pkg\n|____go.sum\n|____go.mod\n|____LICENSE\n|____README.md\n")))}p.isMDXComponent=!0}}]);