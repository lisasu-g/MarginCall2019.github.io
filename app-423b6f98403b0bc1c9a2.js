webpackJsonp([0xd2a57dc1d883],{418:function(e,t,n){"use strict";function o(e,t,n){var o=u.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function r(e,t,n){return u.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=o,t.apiRunnerAsync=r;var u=[{plugin:n(648),options:{plugins:[]}},{plugin:n(650),options:{plugins:[]}},{plugin:n(649),options:{plugins:[],trackingId:"UA-113297020-1"}},{plugin:n(516),options:{plugins:[]}}]},509:function(e,t,n){"use strict";var o;t.components={"component---src-layouts-skill-js":n(636),"component---src-layouts-portfolio-js":n(635),"component---src-pages-404-js":n(637),"component---src-pages-index-js":n(638)},t.json=(o={"layout-index.json":n(112),"about.json":n(641)},o["layout-index.json"]=n(112),o["cloud.json"]=n(642),o["layout-index.json"]=n(112),o["iot.json"]=n(646),o["layout-index.json"]=n(112),o["code.json"]=n(643),o["layout-index.json"]=n(112),o["design.json"]=n(644),o["layout-index.json"]=n(112),o["portfolio.json"]=n(647),o["layout-index.json"]=n(112),o["404.json"]=n(639),o["layout-index.json"]=n(112),o["index.json"]=n(645),o["layout-index.json"]=n(112),o["404-html.json"]=n(640),o),t.layouts={"layout---index":n(634)}},510:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),s=o(c),l=n(2),f=o(l),d=n(464),p=o(d),g=n(401),h=o(g),m=n(418),y=n(697),v=o(y),R=function(e){var t=e.children;return s.default.createElement("div",null,t())},w=function(e){function t(n){r(this,t);var o=u(this,e.call(this)),a=n.location;return p.default.getPage(a.pathname)||(a=i({},a,{pathname:"/404.html"})),o.state={location:a,pageResources:p.default.getResourcesForPathname(a.pathname)},o}return a(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;p.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),p.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(t){p.default.getPage(e.state.location.pathname)&&t.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||(!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path)||(0,v.default)(this,e,t)))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:R,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);w.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=w,e.exports=t.default},401:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(669),u=o(r),a=(0,u.default)();e.exports=a},511:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(416),u=n(465),a=o(u),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),u=(0,a.default)(o,t);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),i[u])return i[u];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(u,{path:e.path})||(0,r.matchPath)(u,{path:e.matchPath}))return c=e,i[u]=e,!0}else{if((0,r.matchPath)(u,{path:e.path,exact:!0}))return c=e,i[u]=e,!0;if((0,r.matchPath)(u,{path:e.path+"index.html"}))return c=e,i[u]=e,!0}return!1}),c}}},512:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(456),u=o(r),a=n(418),i=(0,a.apiRunner)("replaceHistory"),c=i[0],s=c||(0,u.default)();e.exports=s},640:function(e,t,n){n(45),e.exports=function(e){return n.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(658)})})}},639:function(e,t,n){n(45),e.exports=function(e){return n.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(659)})})}},641:function(e,t,n){n(45),e.exports=function(e){return n.e(0xf927f8900006,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(660)})})}},642:function(e,t,n){n(45),e.exports=function(e){return n.e(0x8c6205d04844,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(661)})})}},643:function(e,t,n){n(45),e.exports=function(e){return n.e(0x898befc1e701,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(662)})})}},644:function(e,t,n){n(45),e.exports=function(e){return n.e(0x736221a5aede,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(663)})})}},645:function(e,t,n){n(45),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(664)})})}},646:function(e,t,n){n(45),e.exports=function(e){return n.e(0xadf5c90cab5d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(665)})})}},112:function(e,t,n){n(45),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(459)})})}},647:function(e,t,n){n(45),e.exports=function(e){return n.e(0xaeb581a62131,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(666)})})}},634:function(e,t,n){n(45),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(513)})})}},464:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(1),u=(o(r),n(511)),a=o(u),i=n(401),c=o(i),s=n(465),l=o(s),f=void 0,d={},p={},g={},h={},m={},y=[],v=[],R={},w="",j=[],b={},_=function(e){return e&&e.default||e},x=void 0,P=!0,k=[],C={},E={},N=5;x=n(514)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(e){O(e,function(){j=j.filter(function(t){return t!==e}),x.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var S=function(e,t){return b[e]>b[t]?1:b[e]<b[t]?-1:0},T=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},O=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[t])e.nextTick(function(){n(null,h[t])});else{var o=void 0;o="component---"===t.slice(0,12)?p.components[t]:"layout---"===t.slice(0,9)?p.layouts[t]:p.json[t],o(function(e,o){h[t]=o,k.push({resource:t,succeeded:!e}),E[t]||(E[t]=e),k=k.slice(-N),n(e,o)})}},L=function(t,n){m[t]?e.nextTick(function(){n(null,m[t])}):E[t]?e.nextTick(function(){n(E[t])}):O(t,function(e,o){if(e)n(e);else{var r=_(o());m[t]=r,n(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=k.find(function(e){return e.succeeded});return!!t},I=function(e,t){console.log(t),C[e]||(C[e]=t),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},D=1,M={empty:function(){v=[],R={},b={},j=[],y=[],w=""},addPagesArray:function(e){y=e,f=(0,a.default)(e,w)},addDevRequires:function(e){d=e},addProdRequires:function(e){p=e},dequeue:function(){return v.pop()},enqueue:function(e){var t=(0,l.default)(e,w);if(!y.some(function(e){return e.path===t}))return!1;var n=1/D;D+=1,R[t]?R[t]+=1:R[t]=1,M.has(t)||v.unshift(t),v.sort(T);var o=f(t);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+n:b[o.jsonName]=1+n,j.indexOf(o.jsonName)!==-1||h[o.jsonName]||j.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+n:b[o.componentChunkName]=1+n,j.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||j.unshift(o.componentChunkName)),j.sort(S),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:b}},getPages:function(){return{pathArray:v,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return v.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};P&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var u=r;u.unregister()}window.location.reload()}})),P=!1;if(C[t])return I(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return I(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,g[t])return e.nextTick(function(){n(g[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:g[t]})}),g[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,u=void 0,a=void 0,i=function(){if(r&&u&&(!o.layoutComponentChunkName||a)){g[t]={component:r,json:u,layout:a,page:o};var e={component:r,json:u,layout:a,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return L(o.componentChunkName,function(e,t){e&&I(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),L(o.jsonName,function(e,t){e&&I(o.path,"Loading the JSON for "+o.path+" failed"),u=t,i()}),void(o.layoutComponentChunkName&&L(o.layout,function(e,t){e&&I(o.path,"Loading the Layout for "+o.path+" failed"),a=t,i()}))},peek:function(e){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(e){return v.length-v.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:M.getResourcesForPathname};t.default=M}).call(t,n(671))},667:function(e,t){e.exports=[{componentChunkName:"component---src-layouts-skill-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-layouts-skill-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cloud.json",path:"/cloud"},{componentChunkName:"component---src-layouts-skill-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"iot.json",path:"/iot"},{componentChunkName:"component---src-layouts-skill-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"code.json",path:"/code"},{componentChunkName:"component---src-layouts-skill-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"design.json",path:"/design"},{componentChunkName:"component---src-layouts-portfolio-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"portfolio.json",path:"/portfolio"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},514:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],u=function(){var e=t();e&&(r.push(e),n(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&u()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(418),a=n(1),i=o(a),c=n(29),s=o(c),l=n(416),f=n(656),d=n(623),p=o(d),g=n(458),h=n(512),m=o(h),y=n(401),v=o(y),R=n(667),w=o(R),j=n(668),b=o(j),_=n(510),x=o(_),P=n(509),k=o(P),C=n(464),E=o(C);n(543),window.___history=m.default,window.___emitter=v.default,E.default.addPagesArray(w.default),E.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=E.default,window.matchPath=l.matchPath;var N=b.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),S=function(e){var t=N[e];return null!=t&&(m.default.replace(t.toPath),!0)};S(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,t){S(e.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:e,action:t})},0)}))}function t(e,t){var n=t.location.pathname,o=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&n(515);var o=function(e){function t(e){e.page.path===E.default.getPage(o).path&&(v.default.off("onPostLoadPageResources",t),clearTimeout(u),window.___history.push(n))}var n=(0,g.createLocation)(e,null,null,m.default.location),o=n.pathname,r=N[o];if(r&&(o=r.toPath),window.location.pathname!==o){var u=setTimeout(function(){v.default.off("onPostLoadPageResources",t),v.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(n)},1e3);E.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(n)):v.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,u.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var c=!1,d=(0,u.apiRunner)("replaceRouterComponent",{history:m.default})[0],h=function(e){var t=e.children;return i.default.createElement(l.Router,{history:m.default},t)},y=(0,l.withRouter)(x.default);E.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,a.createElement)(d?d:h,null,(0,a.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,a.createElement)(y,{layout:!0,children:function(t){return(0,a.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return E.default.getPage(o.location.pathname)?(0,a.createElement)(x.default,r({page:!0},o)):(0,a.createElement)(x.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,u.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,p.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},668:function(e,t){e.exports=[]},515:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(401),u=o(r),a="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},465:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},516:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(670),u=o(r);t.onClientEntry=function(){(0,u.default)()}},623:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",u=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return u||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),u=1;e=t.shift();)e()}),function(e){u?setTimeout(e,0):t.push(e)}})},45:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,u=n.s;n.e=function(o,a){var i=!1,c=!0,s=function(e){a&&(a(n,e),a=null)};return!u&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,u?u[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},648:function(e,t,n){"use strict";var o=n(257);t.onClientEntry=function(){"undefined"!=typeof window&&"undefined"!=typeof window.__EMOTION_CRITICAL_CSS_IDS__&&(0,o.hydrate)(window.__EMOTION_CRITICAL_CSS_IDS__)}},649:function(e,t,n){"use strict";t.onRouteUpdate=function(e){var t=e.location;"function"==typeof ga&&(window.ga("set","page",(t||{}).pathname),window.ga("send","pageview"))}},650:function(e,t,n){"use strict";n(541),n(542)},669:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},670:function(e,t){"use strict";function n(e,t){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+e+"' height='"+t+"'%3E%3C/svg%3E"}function o(e){if(e.srcset&&!y&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}function r(e){for(var t,n=getComputedStyle(e).fontFamily,o={};null!==(t=d.exec(n));)o[t[1]]=t[2];return o}function u(e,t,o){var r=n(t||1,o||0);v.call(e,"src")!==r&&R.call(e,"src",r)}function a(e,t){e.naturalWidth?t(e):setTimeout(a,100,e,t)}function i(e){var t=r(e),n=e[f];if(t["object-fit"]=t["object-fit"]||"fill",!n.img){if("fill"===t["object-fit"])return;if(!n.skipTest&&g&&!t["object-position"])return}if(!n.img){n.img=new Image(e.width,e.height),n.img.srcset=v.call(e,"data-ofi-srcset")||e.srcset,n.img.src=v.call(e,"data-ofi-src")||e.src,R.call(e,"data-ofi-src",e.src),e.srcset&&R.call(e,"data-ofi-srcset",e.srcset),u(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{c(e)}catch(e){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}o(n.img),e.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(t["object-fit"])?a(n.img,function(){n.img.naturalWidth>e.width||n.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"}):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),a(n.img,function(t){u(e,t.naturalWidth,t.naturalHeight)})}function c(e){var t={get:function(t){return e[f].img[t?t:"src"]},set:function(t,n){return e[f].img[n?n:"src"]=t,R.call(e,"data-ofi-"+n,t),i(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}function s(){function e(e,t){return e[f]&&e[f].img&&("src"===t||"srcset"===t)?e[f].img:e}h||(HTMLImageElement.prototype.getAttribute=function(t){return v.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,n){return R.call(e(this,t),t,String(n))})}function l(e,t){var n=!w&&!e;if(t=t||{},e=e||"img",h&&!t.skipTest||!m)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var o=0;o<e.length;o++)e[o][f]=e[o][f]||{skipTest:t.skipTest},i(e[o]);n&&(document.body.addEventListener("load",function(e){"IMG"===e.target.tagName&&l(e.target,{skipTest:t.skipTest})},!0),w=!0,e="img"),t.watchMQ&&window.addEventListener("resize",l.bind(null,e,{skipTest:t.skipTest}))}var f="bfred-it:object-fit-images",d=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,p="undefined"==typeof Image?{style:{"object-position":1}}:new Image,g="object-fit"in p.style,h="object-position"in p.style,m="background-size"in p.style,y="string"==typeof p.currentSrc,v=p.getAttribute,R=p.setAttribute,w=!1;l.supportsObjectFit=g,l.supportsObjectPosition=h,s(),e.exports=l},671:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?g=p.concat(g):m=-1,g.length&&i())}function i(){if(!h){var e=r(a);h=!0;for(var t=g.length;t;){for(p=g,g=[];++m<t;)p&&p[m].run();m=-1,t=g.length}p=null,h=!1,u(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var p,g=[],h=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new c(e,t)),1!==g.length||h||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},697:function(e,t){"use strict";function n(e,t){for(var n in e)if(!(n in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}t.__esModule=!0,t.default=function(e,t,o){return n(e.props,t)||n(e.state,o)},e.exports=t.default},635:function(e,t,n){n(45),e.exports=function(e){return n.e(91322373450782,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(524)})})}},636:function(e,t,n){n(45),e.exports=function(e){return n.e(64089156084587,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(525)})})}},637:function(e,t,n){n(45),e.exports=function(e){return n.e(0x9427c64ab85d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(526)})})}},638:function(e,t,n){n(45),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(527)})})}}});
//# sourceMappingURL=app-423b6f98403b0bc1c9a2.js.map