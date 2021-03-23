(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=o.a.createContext({}),p=function(e){var n=o.a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(g.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(a,".").concat(d)]||u[d]||s[d]||l;return t?o.a.createElement(m,c(c({ref:n},g),{},{components:t})):o.a.createElement(m,c({ref:n},g))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var g=2;g<l;g++)a[g]=t[g];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),l=(t(0),t(116)),a={id:"logging",title:"(en) Logging"},c={unversionedId:"component/logging",id:"component/logging",isDocsHomePage:!1,title:"(en) Logging",description:"\u63a5\u53e3\u5b9e\u73b0",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/logging.md",slug:"/component/logging",permalink:"/en/docs/component/logging",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/logging.md",version:"current",sidebar:"docs",previous:{title:"Config",permalink:"/en/docs/component/config"},next:{title:"(en) Metrics",permalink:"/en/docs/component/metrics"}},i=[{value:"\u63a5\u53e3\u5b9e\u73b0",id:"\u63a5\u53e3\u5b9e\u73b0",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],g={toc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"\u63a5\u53e3\u5b9e\u73b0"},"\u63a5\u53e3\u5b9e\u73b0"),Object(l.b)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u4e1a\u52a1\u81ea\u9002\u914d\u4e0d\u540c\u7684log\u63a5\u5165\u4f7f\u7528\uff0cLogger\u53ea\u5305\u542b\u4e86\u6700\u7b80\u5355\u7684print\u63a5\u53e3\u3002\u5f53\u4e1a\u52a1\u9700\u8981\u5728kratos\u6846\u67b6\u5185\u90e8\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684logging middlerware\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u7b80\u5355\u5b9e\u73b0Print\u65b9\u6cd5\u5373\u53ef"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},"type Logger interface {\n    Print(pairs ...interface{})\n}\n")),Object(l.b)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(l.b)("h4",{id:"\u8f93\u51fa\u65e5\u5fd7\u5230stdout"},"\u8f93\u51fa\u65e5\u5fd7\u5230stdout"),Object(l.b)("p",null,"\u4f7f\u7528\u81ea\u5e26\u7684StdLogger\u53ef\u4ee5\u521b\u5efa\u6807\u51c6\u8f93\u51fa\u65e5\u5fd7\u5bf9\u8c61. \u901a\u8fc7NewHelper\u6784\u9020\u65e5\u5fd7\u6a21\u5757\uff0chelp\u751f\u6210\u7684\u65e5\u5fd7\u6a21\u5757\u53ef\u4ee5\u63d0\u4f9b\u4e0d\u540c\u7b49\u7ea7\u7684\u65e5\u5fd7\u8f93\u51fa\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},'logger := log.NewStdLogger()\nlog := log.NewHelper("module_name", logger)\n// Levels\nlog.Info("some log")\nlog.Infof("format %s", "some log")\nlog.Infow("field_name", "some log")\n')),Object(l.b)("h4",{id:"\u8f93\u51fa\u65e5\u5fd7\u5230fluentd"},"\u8f93\u51fa\u65e5\u5fd7\u5230fluentd"),Object(l.b)("p",null,"\u5f15\u5165 fluent sdk"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/fluent"\n\naddr := "unix:///var/run/fluent/fluent.sock"\nlogger,err := fluent.NewLogger(addr)\nif err != nil {\n    return \n}\nlog := log.NewHelper("module_name", logger)\n// Levels\nlog.Info("some log")\nlog.Infof("format %s", "some log")\nlog.Infow("field_name", "some log")\n')),Object(l.b)("h4",{id:"\u5728kratos\u4e2d\u5f15\u5165logging-middleware"},"\u5728kratos\u4e2d\u5f15\u5165logging middleware"),Object(l.b)("p",null,"\u5728http.ServerOption \u4e2d\u5f15\u5165logging.Server(), \u5219kratos\u4f1a\u5728\u6bcf\u6b21\u6536\u5230http\u8bf7\u6c42\u7684\u65f6\u5019\u6253\u5370\u8be6\u7ec6\u8bf7\u6c42\u4fe1\u606f\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},"var opts = []http.ServerOption{\n        http.Middleware(\n            middleware.Chain(\n                logging.Server(),\n            ),\n        ),\n    }\nhttp.NewServer(opts...)\n")))}p.isMDXComponent=!0}}]);