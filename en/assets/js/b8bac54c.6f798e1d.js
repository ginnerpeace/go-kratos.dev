(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),c=(r(0),r(116)),a={id:"metrics",title:"Metrics"},i={unversionedId:"component/metrics",id:"component/metrics",isDocsHomePage:!1,title:"Metrics",description:"Interface",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/metrics.md",slug:"/component/metrics",permalink:"/en/docs/component/metrics",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/metrics.md",version:"current",sidebar:"docs",previous:{title:"(en) Logging",permalink:"/en/docs/component/logging"},next:{title:"Tracing",permalink:"/en/docs/component/tracing"}},s=[{value:"Interface",id:"interface",children:[]},{value:"Counter",id:"counter",children:[]},{value:"Usage",id:"usage",children:[]},{value:"References",id:"references",children:[]}],u={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"interface"},"Interface"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Counter"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Gauge"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Observer")," are the three major metric interface of kratos."),Object(c.b)("h3",{id:"counter"},"Counter"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},"\ntype Counter interface {\n    With(lvs ...string) Counter\n    Inc()\n    Add(delta float64)\n}\n")),Object(c.b)("p",null,"Counter is just a standard counter. It should expose ",Object(c.b)("inlineCode",{parentName:"p"},"Inc")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Add")," method. This counter can only count the increasing. It usually used at counting the numbers of errors or QPS."),Object(c.b)("h4",{id:"gauge"},"Gauge"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},"type Gauge interface {\n    With(lvs ...string) Gauge\n    Set(value float64)\n    Add(delta float64)\n    Sub(delta float64)\n}\n")),Object(c.b)("p",null,"Gauge is a status indicator. It records the current status of service. The value of gauge may increase or decrease. It usually used at monitoring CPU usage or Mem usage etc."),Object(c.b)("h4",{id:"observer"},"Observer"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},"type Observer interface {\n    With(lvs ...string) Observer\n    Observe(float64)\n}\n")),Object(c.b)("p",null,"Observer is a kind of more complex metric. It provides more extra information for monitoring sums, quantities and percentages. It is corresponding to Prometheus'",Object(c.b)("strong",{parentName:"p"},"Histogram")," and ",Object(c.b)("strong",{parentName:"p"},"Summary"),". The Histogram is used for record the counts in different buckets, such as the count of requests in different latency ranges. The Histogram is efficient. Summary records the percentiles, because of extra computation, it maybe slower."),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("h4",{id:"metrics-in-server"},"Metrics in server"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/go-kratos/kratos/v2/middleware"\n    kmetrics "github.com/go-kratos/prometheus/metrics"\n    "github.com/go-kratos/kratos/v2/middleware/metrics"\n    "github.com/go-kratos/kratos/v2/transport/http"\n    "github.com/prometheus/client_golang/prometheus"\n)\nfunc NewHTTPServer(c *conf.Server) *http.Server {\n    // for prometheus \n    counter := prometheus.NewCounterVec(prometheus.CounterOpts{Name: "kratos_counter"}, []string{"server", "qps"})\n    var opts = []http.ServerOption{\n        http.Middleware(\n            middleware.Chain(\n                recovery.Recovery(),\n                metrics.Server(metrics.WithRequests(kmetrics.NewCounter(counter))),\n            ),\n        ),\n    }\n\n')),Object(c.b)("h4",{id:"metrics-in-client"},"Metrics in Client"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n\n    "github.com/go-kratos/kratos/v2/middleware"\n    kmetrics "github.com/go-kratos/prometheus/metrics"\n\n    "github.com/go-kratos/kratos/v2/middleware/metrics"\n    "github.com/go-kratos/kratos/v2/transport/http"\n    "github.com/prometheus/client_golang/prometheus"\n)\nfunc useClient() {\n    counter := prometheus.NewCounterVec(prometheus.CounterOpts{Name: "kratos_counter"},\n        []string{"client", "qps"})\n    client, _ := http.NewClient(context.Background(),\n        http.WithMiddleware(metrics.Client(metrics.WithRequests(kmetrics.NewCounter(counter)))))\n    // ...\n}\n')),Object(c.b)("h3",{id:"references"},"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://prometheus.io/docs/concepts/metric_types/"},"https://prometheus.io/docs/concepts/metric_types/"))))}p.isMDXComponent=!0},116:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,d=l["".concat(a,".").concat(b)]||l[b]||m[b]||c;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);