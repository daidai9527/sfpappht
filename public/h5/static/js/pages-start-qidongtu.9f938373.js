(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-start-qidongtu"],{"0237":function(n,t,i){n.exports=i.p+"static/img/126.f2aa1c75.png"},"25af":function(n,t,i){n.exports=i.p+"static/img/120.79776984.png"},"2b42":function(n,t,i){n.exports=i.p+"static/img/about.94323aad.png"},"490b":function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.banben-box[data-v-1239a6d7]{width:%?602?%;height:%?1000?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative}.banben-box .banben-bg[data-v-1239a6d7]{width:%?602?%;height:%?830?%}.banben-box .banben-content[data-v-1239a6d7]{width:%?602?%;height:%?830?%;position:absolute;top:0;left:0}.banben-box .banben-content .title[data-v-1239a6d7]{height:%?250?%;line-height:%?250?%;font-size:%?40?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#202020;margin-left:%?72?%}.banben-box .banben-content .scroll-content[data-v-1239a6d7]{height:%?400?%;width:%?458?%;margin:0 auto}.banben-box .banben-content .shengji[data-v-1239a6d7]{width:%?444?%;height:%?88?%;background:#ffd100;border-radius:%?12?%;line-height:%?88?%;text-align:center;font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#202020;margin:%?40?% auto}.banben-box .banben-content .jindu[data-v-1239a6d7]{height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?40?%}.banben-box .banben-content .jindutiao[data-v-1239a6d7]{width:%?444?%}.banben-box .banben-close[data-v-1239a6d7]{width:%?100?%;height:%?100?%}.qidongtu[data-v-1239a6d7]{width:%?750?%;height:100vh;position:fixed;top:0;left:0}',""]),n.exports=t},"7ca1":function(n,t,i){var e=i("490b");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("0c7286b4",e,!0,{sourceMap:!1,shadowMode:!1})},"94e9":function(n,t,i){"use strict";var e=i("7ca1"),a=i.n(e);a.a},ca18:function(n,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var e={uniPopup:i("3fc4").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-image",{staticClass:"qidongtu",attrs:{src:i("2b42")}}),e("uni-popup",{ref:"banben",attrs:{maskClick:!1}},[e("v-uni-view",{staticClass:"banben-box"},[e("v-uni-image",{staticClass:"banben-bg",attrs:{src:i("0237")}}),e("v-uni-view",{staticClass:"banben-content"},[e("v-uni-view",{staticClass:"title"},[n._v("發現新版本")]),e("v-uni-scroll-view",{staticClass:"scroll-content",attrs:{"scroll-y":"true"}},[e("v-uni-rich-text",{attrs:{nodes:n.version.content}})],1),1==n.jindu?e("v-uni-view",{staticClass:"shengji",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.xiazia.apply(void 0,arguments)}}},[n._v("立即陞級")]):2==n.jindu?e("v-uni-view",{staticClass:"jindu"},[e("v-uni-progress",{staticClass:"jindutiao",attrs:{"border-radius":"100","stroke-width":"20",activeColor:"#ffe940",percent:n.xiazaidata.progress,"show-info":!0}})],1):3==n.jindu?e("v-uni-view",{staticClass:"shengji",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.anzhuang.apply(void 0,arguments)}}},[n._v("下載完成，去安裝")]):n._e()],1),e("v-uni-image",{staticClass:"banben-close",attrs:{src:i("25af")},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.closebanben.apply(void 0,arguments)}}})],1)],1)],1)},o=[]},ebd1:function(n,t,i){"use strict";i.r(t);var e=i("ca18"),a=i("efa9");for(var o in a)"default"!==o&&function(n){i.d(t,n,(function(){return a[n]}))}(o);i("94e9");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"1239a6d7",null,!1,e["a"],s);t["default"]=c.exports},efa9:function(n,t,i){"use strict";i.r(t);var e=i("f3b4"),a=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,(function(){return e[n]}))}(o);t["default"]=a.a},f3b4:function(n,t,i){"use strict";var e=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e(i("3fc4")),o={data:function(){return{version:[],jindu:1,xiazaidata:[],downapk:""}},components:{uniPopup:a.default},onLoad:function(){this.next()},methods:{anzhuang:function(){plus.runtime.install(this.downapk,{},{},(function(n){uni.showToast({icon:"none",title:"安裝失敗",duration:1500})}))},xiazia:function(){var n=this;this.jindu=2;var t=uni.downloadFile({url:this.version.file_text,success:function(t){100==n.xiazaidata.progress?(n.downapk=t.tempFilePath,n.jindu=3,n.anzhuang()):(uni.showToast({icon:"none",title:"下載失敗"}),n.jindu=1)}});t.onProgressUpdate((function(t){n.xiazaidata=t}))},closebanben:function(){this.$refs.banben.close(),this.next()},next:function(){uni.getStorageSync("isfirst")?uni.redirectTo({url:"./kaiping"}):(uni.reLaunch({url:"./start"}),uni.setStorageSync("isfirst",!0))},getdata:function(){var n=this;uni.request({url:this.$url+"/api/edition/index",success:function(t){uni.hideLoading(),200==t.data.code?(n.version=t.data.data,plus.runtime.version!=n.version.version?n.$refs.banben.open():n.next()):uni.showToast({icon:"none",title:"檢查版本失敗"})}})}}};t.default=o}}]);