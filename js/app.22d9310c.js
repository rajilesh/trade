(function(t){function e(e){for(var r,n,o=e[0],c=e[1],d=e[2],h=0,p=[];h<o.length;h++)n=o[h],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=i,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.script,expression:"script"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.script=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"NIFTY"}},[t._v("NIFTY")]),a("option",{attrs:{value:"BANKNIFTY"}},[t._v("BANKNIFTY")])]),t._v(" "),0==t.fetchingStarted?a("span",{on:{click:t.autoFetch}},[t._v("Start")]):t._e(),1==t.fetchingStarted?a("span",{on:{click:t.clearFetch}},[t._v("Stop")]):t._e(),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.interval,expression:"interval"}],attrs:{type:"text"},domProps:{value:t.interval},on:{input:function(e){e.target.composing||(t.interval=e.target.value)}}}),t._v(" "+t._s(t.last_updated)+" "),a("ul",{staticStyle:{width:"150px"}},t._l(t.history,(function(e){return a("li",{key:e,class:e==t.history_active?"active":"",style:e==t.history_active?"cursor:pointer; color:#f00;":"cursor:pointer;",on:{click:function(a){return t.applyStoredData(e)}}},[t._v(" "+t._s(e.replace("saved_"+t.script+"_data_",""))+" "),a("span",{staticStyle:{cursor:"pointer",color:"#f00"},on:{click:function(a){return t.removeStoredItems(e)}}},[t._v("Remove")])])})),0),a("button",{on:{click:t.storeCurrentData}},[t._v("save "+t._s(t.type))]),a("signals",{attrs:{type:"openInterest",interval:"1000",script:t.script,chart_data:t.chart_data,applyStoredData:t.applyStoredData,removeStoredItems:t.removeStoredItems,history:t.history,history_active:t.history_active}}),a("visualisation",{attrs:{type:"openInterest",interval:"1000",script:t.script,chart_data:t.chart_data,applyStoredData:t.applyStoredData,removeStoredItems:t.removeStoredItems,history:t.history,history_active:t.history_active}}),a("visualisation",{attrs:{type:"changeinOpenInterest",interval:"1000",script:t.script,chart_data:t.chart_data,applyStoredData:t.applyStoredData,removeStoredItems:t.removeStoredItems,history:t.history,history_active:t.history_active}}),a("visualisation",{attrs:{type:"totalTradedVolume",interval:"1000",script:t.script,chart_data:t.chart_data,applyStoredData:t.applyStoredData,removeStoredItems:t.removeStoredItems,history:t.history,history_active:t.history_active}}),a("visualisation",{attrs:{type:"pChange",interval:"1000",script:t.script,chart_data:t.chart_data,applyStoredData:t.applyStoredData,removeStoredItems:t.removeStoredItems,history:t.history,history_active:t.history_active}}),a("visualisation",{attrs:{type:"bidprice",interval:"1000",script:t.script,chart_data:t.chart_data,applyStoredData:t.applyStoredData,removeStoredItems:t.removeStoredItems,history:t.history,history_active:t.history_active}}),a("visualisation",{attrs:{type:"askPrice",interval:"1000",script:t.script,chart_data:t.chart_data,applyStoredData:t.applyStoredData,removeStoredItems:t.removeStoredItems,history:t.history,history_active:t.history_active}}),a("visualisation",{attrs:{type:"pchangeinOpenInterest",interval:"1000",script:t.script,chart_data:t.chart_data,applyStoredData:t.applyStoredData,removeStoredItems:t.removeStoredItems,history:t.history,history_active:t.history_active}}),a("visualisation",{attrs:{type:"impliedVolatility",interval:"1000",script:t.script,chart_data:t.chart_data,applyStoredData:t.applyStoredData,removeStoredItems:t.removeStoredItems,history:t.history,history_active:t.history_active}})],1)},i=[],n=a("5530"),o=(a("b64b"),a("4de4"),a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v(t._s(t.type))]),a("ul",{staticStyle:{width:"150px"}},t._l(t.history,(function(e){return a("li",{key:e,class:e==t.history_active?"active":"",style:e==t.history_active?"cursor:pointer; color:#f00;":"cursor:pointer;",on:{click:function(a){return t.applyStoredData(e)}}},[t._v(" "+t._s(e.replace("saved_"+t.script+"_data_",""))+" "),a("span",{staticStyle:{cursor:"pointer",color:"#f00"},on:{click:function(a){return t.removeStoredItems(e)}}},[t._v("Remove")])])})),0),t._v(" "+t._s(t.underlyingValue)+" "),a("chart",{ref:"chart",attrs:{"chart-data":t.datacollection}})],1)}),c=[],d=a("53ca"),l=(a("159b"),a("b680"),a("d81d"),a("1fca")),h={extends:l["a"],mixins:[l["b"].reactiveProp],props:["chartData"],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}],xAxes:[{gridLines:{display:!1},barPercentage:2}]},tooltips:{mode:"x-axis"},legend:{display:!0},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.render()},methods:{render:function(){this.renderChart(this.chartData,this.options)}}},p={props:["type","interval","script","chart_data","history","applyStoredData","removeStoredItems","history_active"],components:{Chart:h},data:function(){return{datacollection:null,underlyingValue:null,data_key:"",last_updated:"Not updated"}},mounted:function(){this.data_key=this.script+"_data_"},methods:{getData:function(t){t(this.chart_data)},applyData:function(t,e){if("undefined"==typeof t||0==t)return!1;var a=e.type,r=[],s=[],i=[],o=[];t="object"==Object(d["a"])(t)?t:JSON.parse(t),t&&t.records&&t.records.underlyingValue&&(e.underlyingValue=t.records.underlyingValue);var c=t.filtered.data;c.forEach((function(t){r.push(t.strikePrice),s.push(t.CE[a]),i.push(t.PE[a]);var e=t.PE[a]/t.CE[a];e=e>10?10:e<0?0:e,e=e.toFixed(2),o.push(e)}));var l=Math.min.apply(Math,s),h=Math.max.apply(Math,s),p=Math.min.apply(Math,i),u=Math.max.apply(Math,i);Math.min(l,p),Math.max(h,u);e.datacollection=Object(n["a"])(Object(n["a"])({},e.datacollection),{},{lables:r,datasets:[{label:"Call "+a,backgroundColor:"#e93f38",data:s},{label:"Put "+a,backgroundColor:"#3f7d0c",data:i},{label:"Ratio "+a,backgroundColor:"#00f",data:o}]})},addLabel:function(){!0;var t=this;new Promise(this.getData).then((function(e){t.applyData(e,t),t.getStoredItems()}))},fillData:function(){if("undefined"==typeof this.chart_data||"undefined"==typeof this.chart_data.filtered||"undefined"==typeof this.chart_data.filtered.data)return!1;var t=this.chart_data.filtered.data.map((function(t){return t.strikePrice}));this.datacollection={labels:t,datasets:[{backgroundColor:"#f87979",data:[0,10,60]},{backgroundColor:"#e93f38",data:[0,20,50]},{backgroundColor:"#3f7d0c",data:[0,30,-40]},{backgroundColor:"#00f",data:[0]}]}}},watch:{data:function(){this._chart.destroy(),this.renderChart(this.data,this.options)},script:function(){this.data_key=this.script+"_data_",localStorage.setItem("script",this.script)},chart_data:function(){this.fillData(),this.applyData(this.chart_data,this)}}},u=p,f=a("2877"),y=Object(f["a"])(u,o,c,!1,null,null,null),v=y.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v(t._s(t.type))]),t._v(" "+t._s(t.new_pcr)+" "+t._s(t.new_pcr>1?"Only Buy":.5>t.new_pcr?"Only Sell":"Neutral")+" "),a("ul",{staticStyle:{width:"150px"}},t._l(t.history,(function(e){return a("li",{key:e,class:e==t.history_active?"active":"",style:e==t.history_active?"cursor:pointer; color:#f00;":"cursor:pointer;",on:{click:function(a){return t.applyStoredData(e)}}},[t._v(" "+t._s(e.replace("saved_"+t.script+"_data_",""))+" "),a("span",{staticStyle:{cursor:"pointer",color:"#f00"},on:{click:function(a){return t.removeStoredItems(e)}}},[t._v("Remove")])])})),0),t._v(" "+t._s(t.underlyingValue)+" "),a("chart",{ref:"chart",attrs:{"chart-data":t.datacollection}})],1)},m=[],b={props:["type","interval","script","chart_data","history","applyStoredData","removeStoredItems","history_active"],components:{Chart:h},data:function(){return{datacollection:null,underlyingValue:null,data_key:"",last_updated:"Not updated",new_pcr:0}},mounted:function(){this.data_key=this.script+"_data_"},methods:{getData:function(t){t(this.chart_data)},applyData:function(t,e){if("undefined"==typeof t||0==t)return!1;var a=e.type,r=[],s=[],i=[],o=[];t="object"==Object(d["a"])(t)?t:JSON.parse(t),t&&t.records&&t.records.underlyingValue&&(e.underlyingValue=t.records.underlyingValue);var c=t.filtered.data;c.forEach((function(t){r.push(t.strikePrice),s.push(t.CE[a]),i.push(t.PE[a]);var n=t.PE[a]/t.CE[a];n=n>10?10:n<0?0:n,n=n.toFixed(2),o.push(n),e.underlyingValue-50<=t.strikePrice&&e.underlyingValue+50>=t.strikePrice&&(e.new_pcr=n)}));var l=Math.min.apply(Math,s),h=Math.max.apply(Math,s),p=Math.min.apply(Math,i),u=Math.max.apply(Math,i);Math.min(l,p),Math.max(h,u);e.datacollection=Object(n["a"])(Object(n["a"])({},e.datacollection),{},{lables:r,datasets:[{label:"Ratio "+a,backgroundColor:"#61ca28",data:o}]})},addLabel:function(){!0;var t=this;new Promise(this.getData).then((function(e){t.applyData(e,t),t.getStoredItems()}))},fillData:function(){if("undefined"==typeof this.chart_data||"undefined"==typeof this.chart_data.filtered||"undefined"==typeof this.chart_data.filtered.data)return!1;var t=this.chart_data.filtered.data.map((function(t){return t.strikePrice}));this.datacollection={labels:t,datasets:[{backgroundColor:"#61ca28",data:[0]}]}}},watch:{data:function(){this._chart.destroy(),this.renderChart(this.data,this.options)},script:function(){this.data_key=this.script+"_data_",localStorage.setItem("script",this.script)},chart_data:function(){this.fillData(),this.applyData(this.chart_data,this)}}},j=b,g=Object(f["a"])(j,_,m,!1,null,null,null),S=g.exports,k={name:"App",components:{Visualisation:v,Signals:S},data:function(){return{script:"NIFTY",chart_data:null,chart_data_nifty:null,chart_data_banknifty:null,interval:6e4,intervalTimeout:null,fetchingStarted:!1,history:[],history_active:"",data_key:"",type:"",last_updated:"Not updated"}},mounted:function(){var t=localStorage.getItem("script");t?this.script=t:localStorage.setItem("script","NIFTY"),this.data_key=this.script+"_data_"},created:function(){this.renderCharts(),this.autoFetch()},methods:{getStoredItems:function(){var t=Object(n["a"])({},localStorage),e=Object.keys(t),a=this;e.sort(),this.history=e.filter((function(t){return t.indexOf("_"+a.script+"_")>-1&&t}))},removeStoredItems:function(t){localStorage.removeItem(t),this.getStoredItems()},applyStoredData:function(t){this.history_active=t,t.indexOf("_NIFTY_")>-1?this.script="NIFTY":this.script="BANKNIFTY";var e=this.getWithExpiry(t);e&&(this.chart_data=JSON.parse(e),this.clearFetch())},storeCurrentData:function(){var t=this.chart_data,e=new Date,a=e.getDate()+"_"+e.getHours()+"_"+e.getMinutes()+"_"+e.getSeconds();t&&this.setWithExpiry("saved_"+this.data_key+a,JSON.stringify(t),1296e4),this.getStoredItems()},setWithExpiry:function(t,e,a){var r=new Date,s={value:e,expiry:r.getTime()+a};localStorage.setItem(t,JSON.stringify(s))},getWithExpiry:function(t){var e=localStorage.getItem(t);if(!e)return null;var a=JSON.parse(e),r=new Date;return r.getTime()>a.expiry?(localStorage.removeItem(t),null):a.value},autoFetch:function(){this.fetchingStarted=!0,this.intervalTimeout=setInterval(this.renderCharts,this.interval)},clearFetch:function(){this.fetchingStarted=!1,clearTimeout(this.intervalTimeout)},renderCharts:function(){this.getStoredItems(),"NIFTY"==this.script?null!=this.chart_data_nifty&&(this.chart_data=this.chart_data_nifty):null!=this.chart_data_banknifty&&(this.chart_data=this.chart_data_banknifty);var t="";t="https://www.nseindia.com/api/option-chain-indices?symbol="+this.script;var e=this;fetch(t,{credentials:"omit",headers:{mode:"no-cors","Access-Control-Allow-Origin":"*",Origin:"nseindia.com"}}).then((function(t){return 200==t.status&&t.json()})).then((function(t){if(t){e.chart_data=t,"NIFTY"==e.script?e.chart_data_nifty=t:e.chart_data_banknifty=t;var a=new Date;e.last_updated=a.getDate()+"-"+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()}}))}},watch:{script:function(){this.data_key=this.script+"_data_",localStorage.setItem("script",this.script),this.renderCharts()}}},I=k,D=Object(f["a"])(I,s,i,!1,null,null,null),x=D.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=app.22d9310c.js.map