(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-userinfo-userinfo"],{"0e3f":function(e,t,a){"use strict";var i=a("4ea4");a("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("1bf6")),s=i(a("b585")),o=i(a("5617")),r=i(a("795d")),u=i(a("7017")),d={data:function(){return{user_id:"",url:getApp().globalData.url,header:getApp().globalData.header,page:1,limit:10,user:[],community:[],more:"more",class:0,isguanzhu:""}},onLoad:function(e){this.user_id=e.id,this.class=e.class,this.isguanzhu=e.isguanzhu,console.log(e),1==this.isguanzhu?this.getdata():this.getdata1()},onReachBottom:function(){this.page++,this.more="loading",1==this.isguanzhu?this.getdata():this.getdata1()},methods:{toguanzhu:function(){uni.getStorageSync("usertoken")?(uni.showLoading({mask:!0,title:"請稍後"}),uni.request({url:this.url+"/api/community/follow",method:"GET",header:{token:uni.getStorageSync("usertoken")},data:{id:this.user.id,class:this.user.u},success:function(e){uni.hideLoading(),uni.showToast({icon:"none",title:e.data.msg})}})):uni.showToast({icon:"none",title:"請登入"})},getdata1:function(){var e,t=this;uni.showLoading({mask:!0,title:"請稍後"}),e=uni.getStorageSync("usertoken")?{token:uni.getStorageSync("usertoken")}:{},uni.request({url:this.url+"/api/community/personal",method:"POST",data:{id:this.user_id,class:this.class,current:this.page,every:this.limit},header:e,success:function(e){uni.hideLoading(),t.detail=e.data.data,t.user=e.data.data.user,e.data.data.community.length>0?t.community=t.community.concat(e.data.data.community):(t.page--,t.more="noMore"),console.log(e.data)}})},getdata:function(){var e=this;uni.showLoading({mask:!0,title:"請稍後"}),uni.request({url:this.url+"/api/community/click_follow",method:"POST",data:{id:this.user_id,class:this.class,current:this.page,every:this.limit},header:{token:uni.getStorageSync("usertoken")?uni.getStorageSync("usertoken"):""},success:function(t){uni.hideLoading(),e.detail=t.data.data,e.user=t.data.data.user,t.data.data.community.length>0?e.community=e.community.concat(t.data.data.community):(e.page--,e.more="noMore"),console.log(t.data)}})}},components:{tuwen:n.default,shipin:s.default,duanwen:o.default,wenda:r.default,uniLoadMore:u.default}};t.default=d},"36c8":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var i={uniLoadMore:a("7017").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"userinfo"},[i("v-uni-view",{staticClass:"header-view"},[i("v-uni-view",{staticClass:"header-bg"},[i("v-uni-image",{staticClass:"header-bg-img",attrs:{src:a("69c7")}})],1),i("v-uni-view",{staticClass:"user-view"},[i("v-uni-view",{staticClass:"user-header1"},[i("v-uni-view",{staticClass:"user-header1-left"},[i("v-uni-text",{staticClass:"user-header1-name"},[e._v(e._s(e.user.username))]),0==e.user.level?i("v-uni-image",{staticClass:"user-header1-img2",attrs:{mode:"aspectFit",src:"/static/images/142.png"}}):e._e(),1==e.user.level?i("v-uni-image",{staticClass:"user-header1-img2",attrs:{mode:"aspectFit",src:"/static/images/143.png"}}):e._e(),2==e.user.level?i("v-uni-image",{staticClass:"user-header1-img2",attrs:{mode:"aspectFit",src:"/static/images/141.png"}}):e._e(),i("v-uni-image",{staticClass:"user-header1-img1",attrs:{src:a("b80a")}})],1),i("v-uni-text",{staticClass:"user-header1-right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toguanzhu.apply(void 0,arguments)}}},[e._v("關注")])],1),i("v-uni-text",{staticClass:"user-jianjie"},[e._v(e._s(1==e.user.u?"這傢伙太懶了，還沒有任何簽名":e.user.bio))]),i("v-uni-text",{staticClass:"user-fensi"},[e._v(e._s(e.user.ganzhu)+"關注·"+e._s(e.user.fensi)+"粉絲")])],1),i("v-uni-image",{staticClass:"user-image",attrs:{src:e.user.avatar_text?e.user.avatar_text:e.user.avatar}})],1),i("v-uni-view",{staticClass:"all"},[i("v-uni-text",{staticClass:"all-text"},[e._v("全部")]),e.user?i("v-uni-text",{staticClass:"all-count"},[e._v("("+e._s(e.user.count)+")")]):e._e()],1),e._l(e.community,(function(t,a){return i("v-uni-view",[2==t.class?i("tuwen",{attrs:{items:t}}):e._e(),1==t.class?i("shipin",{attrs:{items:t}}):e._e(),0==t.class?i("duanwen",{attrs:{items:t}}):e._e()],1)})),i("uni-load-more",{attrs:{status:e.more}})],2)},s=[]},"4e63":function(e,t,a){"use strict";a.r(t);var i=a("36c8"),n=a("88a1");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("6465");var o,r=a("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"47f7ea22",null,!1,i["a"],o);t["default"]=u.exports},6465:function(e,t,a){"use strict";var i=a("ed9f"),n=a.n(i);n.a},"69c7":function(e,t,a){e.exports=a.p+"static/img/115.5a7d85e6.png"},"7ed2":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".all-count[data-v-47f7ea22]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#202020}.all-text[data-v-47f7ea22]{border-bottom-width:%?6?%;border-color:#ffd100;border-style:solid;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#202020;padding-bottom:%?8?%}.all[data-v-47f7ea22]{padding:%?24?% %?20?% 0 %?20?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;height:%?84?%}.user-fensi[data-v-47f7ea22]{padding:0 %?48?%;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#202020}.user-jianjie[data-v-47f7ea22]{padding:%?10?% %?48?% %?12?% %?48?%;\noverflow:hidden;white-space:nowrap;\n\nlines:1;text-overflow:ellipsis;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.user-header1-right[data-v-47f7ea22]{width:%?112?%;height:%?56?%;background-color:#ffd100;border-radius:%?28?%;text-align:center;line-height:%?56?%;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff}.user-header1-img2[data-v-47f7ea22]{width:%?170?%;height:%?50?%}.user-header1-img1[data-v-47f7ea22]{width:%?38?%;height:%?30?%;margin:0 %?14?%}.user-header1-name[data-v-47f7ea22]{font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#202020}.user-header1-left[data-v-47f7ea22]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user-header1[data-v-47f7ea22]{padding:%?70?% %?48?% 0 %?48?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.header-view[data-v-47f7ea22]{width:%?750?%;height:%?568?%}.user-image[data-v-47f7ea22]{width:%?136?%;height:%?136?%;border-style:solid;border-color:#fff;border-width:%?4?%;border-radius:%?100?%;\n  /* border:4px solid rgba(255,255,255,1); */position:absolute;bottom:%?202?%;z-index:10;left:%?68?%}.user-view[data-v-47f7ea22]{width:%?710?%;margin:%?-116?% %?20?% 0 %?20?%;height:%?268?%;background-color:#fff;border-radius:%?6?%;border-color:#e5e5e5;border-width:%?2?%;border-style:solid;position:relative\n  /* z-index:-10; */\n  /* border:2rpx solid rgba(229,229,229,1); */}.header-bg-img[data-v-47f7ea22]{width:%?750?%;height:%?416?%}.header-bg[data-v-47f7ea22]{width:%?750?%;height:%?416?%}",""]),e.exports=t},"88a1":function(e,t,a){"use strict";a.r(t);var i=a("0e3f"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},b80a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAADn0lEQVRIS7WWXWibZRTHf+dNk3VLsjlr96EIinObXgiCrM604IWCOPDKjzs/UJkfOMo+ukW9yM2wJYHhcBQURXsn3okfNw6UpcUV8UIY9JPCBOlsu3Ymb7bkTZ4jb2KypHnfJC14Lt/zP8/vOc/zf04i+ITmho+j+pFfnsX8nwSlRE/oPm+NKOgxCcc/9cqL10fNjQxizDlf6Ep+npXcA+V8b3iWnaEHPbXiwjkq4TOfrc83gTU3cgxjPvaFXnfmWM7uq+UFLcPvCO33h8ubEj79eX2+Aay54fcwet4fWphl2W7uTlDdFZmRHcED/nB9Q8LxL6r5Gljt4XdR/cQXulqYYcn27sotcjvfE5kmGjzoDcegvC6R+JcVOaD28NvABVQ975w1Z5ql7H60ovcPUd0bmZJo10P+cHlNImfGRO3ho8CoL/SGM8Xf2QPtobVDVPZGp4gGWsCtV0V/G7pAkedbtLGdEN2tO12XzWMj2L41XYEx0dnzW1i8ehE05ik0gTmi3HZxJzvImBks9fPDRfqjz1Tu+Pd4L7ZzGfT+5nVljbC1o+qHtlxVxSaHmHCTVpgiHD0sjybWbrv61xMP48gEqAtpDAkssY3etlBXYPMXlO5uXkNWEOmTWHK+5uqqSNNDT6PmB9CuhsKSzLHd6uy4M6UFLBpPTqQA8pT0Jy/VLLh+Z5o+8RbKaNOOt1gOXRJs2XWBWzglDyNar8hAcqy+1ntWp0+eQ3WwAaLWPBGpzGe/yOgsllk32eSsDKQ+bLo9rzVUExbj2W9RPVLLqywTsXp8TaYot8w/mHqPyDf0J1+Syo9FQ/hOIr2SiHA9Ow76SK1CAitsw4U3x025hinurktMErjnSXni+E0vecsRqJMf3Es+Pwm6p1xsZIao5f0+M8xhlSoGFLlKSPrkUHLR71bazF7QiaFDmNLPKFsRMQQtQ5BG1ztSoFAM/QfJEpSYPJ76o5Ud2oLdYr106gXEfF2e18ZaICqNz6Xarbsx4TmJpb5vacKOp5ELT596HzVngWuEA7vqahXbrILeCdagDCT9/0TU7aajjqt6TZ/8CtWXsQKrbGVn+XtOl1FzFyKj0p96p12n1fzGwFcSIVazP1Fid81k7tsN6AKxyBGRRPF/AZfv+3K8h6IzTtDah/t2ndI03V0xeWzkRqfQsvE3Iq4d+UT8IKXidxh16OZZ6UstbHSdTYHLnf9y+kVCZOTwyI8bhW66482A1tf8CwvqUVTyHywgAAAAAElFTkSuQmCC"},ed9f:function(e,t,a){var i=a("7ed2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("771af8ce",i,!0,{sourceMap:!1,shadowMode:!1})}}]);