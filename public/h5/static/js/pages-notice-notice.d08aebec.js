(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-notice"],{"0ee0":function(t,i,e){var n=e("d137");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("6e0d3101",n,!0,{sourceMap:!1,shadowMode:!1})},"140a":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{src:{type:String,default:""},image:{type:String,default:"/static/images/51.png"},mode:{type:String,default:"scaleToFill"},borderRadius:{type:String,default:"10rpx"},width:{type:String,default:"100rpx"},height:{type:String,default:"100rpx"}},data:function(){return{is_load:!0}},methods:{showimage:function(){this.is_load=!1}}};i.default=n},"1bca":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"lazy",style:{"border-radius":t.borderRadius,width:t.width,height:t.height}},[e("v-uni-image",{staticClass:"lazy-image",style:{"border-radius":t.borderRadius,width:t.width,height:t.height},attrs:{src:t.src,mode:t.mode},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.showimage.apply(void 0,arguments)}}}),e("v-uni-image",{staticClass:"lazy-load",class:t.is_load?"":"hide-image",style:{"border-radius":t.borderRadius,width:t.width,height:t.height},attrs:{src:t.image,mode:t.mode}})],1)},r=[]},"467c":function(t,i,e){t.exports=e.p+"static/img/WechatIMG3.56c6fe5c.png"},"4bdc":function(t,i,e){var n=e("cc75");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("02716fcc",n,!0,{sourceMap:!1,shadowMode:!1})},"60c4":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("713f")),r={data:function(){return{gomelist:[],lunbotu:[]}},onShow:function(){uni.setTabBarStyle({backgroundColor:"#fff",selectedColor:"#666"})},components:{lazy:a.default},onLoad:function(){this.getdata()},methods:{openurl:function(t){this.$openurl(t.url)},getdata:function(){var t=this;this.$loading(),uni.request({url:this.$url+"/api/adv/app",method:"GET",data:{limit:999},success:function(i){t.getlbt(),t.gomelist=i.data.data}})},getlbt:function(){var t=this;uni.request({url:this.$url+"/api/adv/lb",data:{class:3},success:function(i){uni.hideLoading(),t.lunbotu=i.data.data,console.log(i.data)}})},tokefu:function(){uni.navigateTo({url:"../mine/zaixian"})},toliuyan:function(){uni.getStorageSync("usertoken")?uni.navigateTo({url:"../mine/kefu"}):uni.showToast({icon:"none",title:"請登入"})}}};i.default=r},6168:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"notice"},[n("v-uni-view",{staticClass:"title"},[t._v("熱門應用")]),n("v-uni-scroll-view",{staticClass:"applist",attrs:{"scroll-x":"true"}},t._l(t.gomelist,(function(i,e){return n("v-uni-view",{key:e,staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openurl(i)}}},[n("v-uni-image",{attrs:{src:i.image_text,mode:"aspectFill"}}),n("v-uni-text",[t._v(t._s(i.name))])],1)})),1),n("v-uni-swiper",{staticStyle:{height:"232rpx"},attrs:{autoplay:!0,interval:3e3,duration:500}},t._l(t.lunbotu,(function(i,e){return n("v-uni-swiper-item",{key:e,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openurl(i)}}},[n("v-uni-view",{staticClass:"guanggao"},[n("v-uni-image",{attrs:{src:i.image_text}}),n("v-uni-view",{staticClass:"text"},[t._v("廣告")])],1)],1)})),1),n("v-uni-view",{staticClass:"xiaoxi",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toliuyan.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"image",attrs:{src:e("467c"),mode:"aspectFit"}}),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"name"},[t._v("留言")])],1)],1),n("v-uni-view",{staticClass:"xiaoxi",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tokefu.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"image",attrs:{src:e("467c"),mode:"aspectFit"}}),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"name"},[t._v("線上客服")])],1)],1)],1)},r=[]},"6c59":function(t,i,e){"use strict";var n=e("4bdc"),a=e.n(n);a.a},"713f":function(t,i,e){"use strict";e.r(i);var n=e("1bca"),a=e("f821");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("b4d2");var o,s=e("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b03cb5b8",null,!1,n["a"],o);i["default"]=l.exports},"9bb2":function(t,i,e){"use strict";e.r(i);var n=e("60c4"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},b4d2:function(t,i,e){"use strict";var n=e("0ee0"),a=e.n(n);a.a},cc75:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.xiaoxi[data-v-67a344d6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?40?% %?20?% 0 %?20?%}.xiaoxi .image[data-v-67a344d6]{margin-right:%?16?%;width:%?100?%;height:%?100?%;border-radius:%?100?%}.xiaoxi .right[data-v-67a344d6]{width:%?550?%}.xiaoxi .right .name[data-v-67a344d6]{font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#202000}.xiaoxi .right .text[data-v-67a344d6]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.guanggao[data-v-67a344d6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;width:%?710?%;height:%?232?%;margin:0 auto}.guanggao uni-image[data-v-67a344d6]{width:%?710?%;height:%?232?%}.guanggao .text[data-v-67a344d6]{position:absolute;right:0;width:%?108?%;height:%?40?%;background:#000;border-radius:%?4?%;opacity:.53;text-align:center;line-height:%?40?%;color:#fff;font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#fff;bottom:%?16?%}.applist[data-v-67a344d6]{white-space:nowrap;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?32?%}.applist .item[data-v-67a344d6]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?12?%}.applist .item uni-image[data-v-67a344d6]{width:%?124?%;height:%?124?%;margin-bottom:%?8?%;border-radius:%?20?%}.applist .item uni-text[data-v-67a344d6]{width:%?124?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.title[data-v-67a344d6]{margin:%?20?%;font-size:%?32?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#202020}',""]),t.exports=i},d137:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.hide-image[data-v-b03cb5b8]{-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:opacity;transition-property:opacity;opacity:0!important}.lazy[data-v-b03cb5b8]{position:relative}.lazy-image[data-v-b03cb5b8]{position:absolute;top:0;left:0}.lazy-load[data-v-b03cb5b8]{position:absolute;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:opacity;transition-property:opacity;top:0;left:0;z-index:10;opacity:1}',""]),t.exports=i},ee5a:function(t,i,e){"use strict";e.r(i);var n=e("6168"),a=e("9bb2");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("6c59");var o,s=e("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"67a344d6",null,!1,n["a"],o);i["default"]=l.exports},f821:function(t,i,e){"use strict";e.r(i);var n=e("140a"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a}}]);