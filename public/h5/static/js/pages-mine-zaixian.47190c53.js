(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-zaixian"],{"1d75":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[t.webview?e("v-uni-web-view",{attrs:{src:t.webview}}):t._e()],1)},r=[]},b27d:function(t,n,e){"use strict";e.r(n);var u=e("1d75"),a=e("bc93");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);var i,c=e("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"7b90e18f",null,!1,u["a"],i);n["default"]=o.exports},bc93:function(t,n,e){"use strict";e.r(n);var u=e("bf18"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a},bf18:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{url:getApp().globalData.url,webview:""}},onLoad:function(){var t=this;uni.request({url:this.$url+"/chat",success:function(n){t.webview=n.data.data,console.log(n.data.data)}})}};n.default=u}}]);