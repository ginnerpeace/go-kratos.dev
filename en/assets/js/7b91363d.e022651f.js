(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{116:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=t,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,i(i({ref:r},p),{},{components:n})):o.a.createElement(d,i({ref:r},p))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(116)),c={id:"errors",title:"(en) Errors"},i={unversionedId:"component/errors",id:"component/errors",isDocsHomePage:!1,title:"(en) Errors",description:"APIs \u9519\u8bef\u7801\u53ef\u4ee5\u7edf\u4e00\u901a\u8fc7 proto \u5b9a\u4e49\u4e1a\u52a1\u539f\u56e0\uff0c\u7136\u540e\u901a\u8fc7 protoc-gen-go-errors \u751f\u6210\u5224\u5b9a\u4ee3\u7801\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/errors.md",slug:"/component/errors",permalink:"/en/docs/component/errors",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/errors.md",version:"current",sidebar:"docs",previous:{title:"(en) API",permalink:"/en/docs/component/api"},next:{title:"Config",permalink:"/en/docs/component/config"}},s=[{value:"\u5b89\u88c5\u5de5\u5177",id:"\u5b89\u88c5\u5de5\u5177",children:[]},{value:"\u9519\u8bef\u5b9a\u4e49",id:"\u9519\u8bef\u5b9a\u4e49",children:[]},{value:"\u9519\u8bef\u751f\u6210",id:"\u9519\u8bef\u751f\u6210",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],p={toc:s};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"APIs \u9519\u8bef\u7801\u53ef\u4ee5\u7edf\u4e00\u901a\u8fc7 proto \u5b9a\u4e49\u4e1a\u52a1\u539f\u56e0\uff0c\u7136\u540e\u901a\u8fc7 protoc-gen-go-errors \u751f\u6210\u5224\u5b9a\u4ee3\u7801\u3002"),Object(a.b)("p",null,"\u5728errors\u5305\u4e2d\uff0c\u9519\u8bef\u4fe1\u606f\u901a\u8fc7 proto \u5b9a\u4e49\uff0c\u5e76\u4e14\u5b9e\u73b0\u5bf9\u5e94\u7684 Error \u63a5\u53e3\uff0c\u5e76\u4e14\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 middleware \u8f6c\u6362\u6210 gRPC \u9519\u8bef\u7801\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-protobuf"},"message Status {\n  // \u9519\u8bef\u7801\uff0c\u8ddf grpc-status \u4e00\u81f4\uff0c\u5e76\u4e14\u5728HTTP\u4e2d\u53ef\u6620\u5c04\u6210 http-status\n  int32 code = 1;\n  // \u9519\u8bef\u539f\u56e0\uff0c\u5b9a\u4e49\u4e3a\u4e1a\u52a1\u5224\u5b9a\u9519\u8bef\u7801\n  string reason = 2;\n  // \u9519\u8bef\u4fe1\u606f\uff0c\u4e3a\u7528\u6237\u53ef\u8bfb\u7684\u4fe1\u606f\uff0c\u53ef\u4f5c\u4e3a\u7528\u6237\u63d0\u793a\u5185\u5bb9\n  string message = 3;\n  // \u9519\u8bef\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u9644\u52a0\u81ea\u5b9a\u4e49\u7684\u4fe1\u606f\u5217\u8868\n  repeated google.protobuf.Any details = 4;\n}\n")),Object(a.b)("h3",{id:"\u5b89\u88c5\u5de5\u5177"},"\u5b89\u88c5\u5de5\u5177"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"go get github.com/go-kratos/kratos/cmd/protoc-gen-go-errors@latest\n")),Object(a.b)("h3",{id:"\u9519\u8bef\u5b9a\u4e49"},"\u9519\u8bef\u5b9a\u4e49"),Object(a.b)("p",null,"api/helloworld/errors/helloworld.proto"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage api.helloworld.errors;\n\nimport "kratos/api/annotations.proto";\n\n// \u591a\u8bed\u8a00\u7279\u5b9a\u5305\u540d\uff0c\u7528\u4e8e\u6e90\u4ee3\u7801\u5f15\u7528\noption go_package = "api/helloworld/errors;errors";\noption java_multiple_files = true;\noption java_package = "helloworld.errors";\noption objc_class_prefix = "APIHelloworldErrors";\n\nenum Helloworld {\n    option (kratos.api.errors) = true;\n\n    MissingName = 0;\n}\n')),Object(a.b)("h3",{id:"\u9519\u8bef\u751f\u6210"},"\u9519\u8bef\u751f\u6210"),Object(a.b)("p",null,"\u901a\u8fc7 proto \u751f\u6210\u5bf9\u5e94\u7684\u4ee3\u7801\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"make proto\n")),Object(a.b)("p",null,"\u751f\u6210\u7684\u6e90\u7801\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"errors.IsMissingName(err)")," \u8fdb\u884c\u5bf9\u5e94\u7684\u9519\u8bef\u5224\u5b9a:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'const (\n    Errors_MissingName = "Helloworld_MissingName"\n)\n\nfunc IsMissingName(err error) bool {\n    return errors.Reason(err) == Errors_MissingName\n}\n')),Object(a.b)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/errors"\nimport apierr "app/api/errors"\n\nfunc doSomething() error {\n    return errrors.InvalidArgument("reason", "message")\n}\n\nif err := doSomething(); apierr.IsMissingName(err) {\n    // TODO\n}\n')))}l.isMDXComponent=!0}}]);