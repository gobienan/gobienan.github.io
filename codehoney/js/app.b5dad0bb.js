(function(e){function t(t){for(var i,s,c=t[0],o=t[1],u=t[2],p=0,d=[];p<c.length;p++)s=c[p],a[s]&&d.push(a[s][0]),a[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00a8":function(e,t,n){},"0bca":function(e,t,n){"use strict";var i=n("0e60"),a=n.n(i);a.a},"0c5d":function(e,t,n){"use strict";var i=n("d965"),a=n.n(i);a.a},"0e60":function(e,t,n){},"0f09":function(e,t,n){"use strict";var i=n("a933"),a=n.n(i);a.a},"47a8":function(e,t,n){"use strict";var i=n("52c0"),a=n.n(i);a.a},"52c0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Sidebar",{attrs:{languages:e.languages,tags:e.tags}}),n("div",{staticClass:"Window"},[n("SnippetExplorer",{attrs:{snippets:e.snippets}}),n("Editor",{attrs:{snippet:e.snippet}})],1),n("div",{staticClass:"WindowButtons"},[n("WindowButton",{attrs:{red:""}}),n("WindowButton",{attrs:{orange:""}}),n("WindowButton",{attrs:{green:""}})],1)],1)},r=[],s=n("cebc"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Sidebar"},[i("img",{staticClass:"Logo",attrs:{src:n("9b19")}}),i("Categories",{attrs:{title:"Languages",categories:e.languages},on:{select:e.selectLanguage}}),i("Categories",{attrs:{title:"Tags",categories:e.tags},on:{select:e.selectTag}})],1)},o=[],u=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Categories"},[n("h3",{staticClass:"Title"},[e._v(e._s(e.title))]),e._l(e.categories,function(t,i){return n("Category",{key:i,attrs:{item:t},on:{click:function(t){e.handleClick(t)}}})})],2)},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Category",class:{"is-selected":e.item.isSelected},on:{click:e.click}},[n("span",{staticClass:"Name"},[e._v(e._s(e.item.name))]),n("span",{staticClass:"Counter"},[e._v(e._s(e.item.count))])])},f=[],m={name:"Category",props:{item:Object},methods:{click:function(e){this.$emit("click",this.item.id)}}},g=m,v=(n("0c5d"),n("2877")),_=Object(v["a"])(g,d,f,!1,null,"f1b78330",null);_.options.__file="Category.vue";var S=_.exports,E={name:"Categories",components:{Category:S},data:function(){return{}},props:{title:String,categories:Array},methods:{handleClick:function(e){this.$emit("select",e)}}},b=E,h=(n("7df3"),Object(v["a"])(b,l,p,!1,null,"20aaf4f8",null));h.options.__file="Categories.vue";var A=h.exports,T={name:"Sidebar",props:{languages:Array,tags:Array},components:{Categories:A},data:function(){return{}},methods:Object(s["a"])({},Object(u["b"])(["selectLanguage","selectTag"]))},C=T,O=(n("47a8"),Object(v["a"])(C,c,o,!1,null,"d895e874",null));O.options.__file="Sidebar.vue";var y=O.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"SnippetExplorer"},[i("Search"),i("Snippets",{attrs:{snippets:e.snippets},on:{select:e.selectSnippet}}),i("Button",{attrs:{icon:"",round:""}},[i("img",{attrs:{src:n("d0d5")},on:{click:e.handleClick}})])],1)},P=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Button",class:[{"is-icon":e.icon},{"is-round":e.round}],on:{click:function(t){e.$emit("click")}}},[e._t("default")],2)},N=[],G={name:"Button",props:{title:String,icon:Boolean,round:Boolean}},w=G,x=(n("d210"),Object(v["a"])(w,L,N,!1,null,"6ab3e5c6",null));x.options.__file="Button.vue";var I=x.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Search"},[i("input",{attrs:{required:"",type:"text",name:""}}),i("label",[e._v("search for your code...")]),i("img",{staticClass:"Icon Icon--search",attrs:{src:n("66d7")}})])}],B={name:"Search",components:{},props:{title:String}},M=B,$=(n("b317"),Object(v["a"])(M,D,k,!1,null,"1860c614",null));$.options.__file="Search.vue";var R=$.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Snippets"},e._l(e.snippets,function(t,i){return n("Snippet",{key:i,attrs:{item:t},on:{click:function(t){e.handleClick(t)}}})}),1)},W=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Snippet",class:[{"is-selected":e.item.isSelected}],on:{click:e.click}},[n("h3",[e._v(e._s(e.item.name))]),n("p",{staticClass:"Description"},[e._v(e._s(e.item.description))])])},V=[],q={name:"Snippet",props:{item:Object},methods:{click:function(e){this.$emit("click",this.item.id)}},computed:{},mounted:function(){}},F=q,J=(n("0f09"),Object(v["a"])(F,U,V,!1,null,null,null));J.options.__file="Snippet.vue";var z=J.exports,K={name:"Snippets",components:{Snippet:z},props:{title:String,snippets:Array},data:function(){return{selectedItem:null}},methods:{handleClick:function(e){this.$emit("select",e)}},mounted:function(){}},Q=K,X=(n("e91d"),Object(v["a"])(Q,H,W,!1,null,"a84da020",null));X.options.__file="Snippets.vue";var Y=X.exports,Z=n("cc98"),ee=n.n(Z),te={name:"SnippetExplorer",components:{Button:I,Search:R,Snippets:Y},props:{snippets:Array},data:function(){return{}},methods:Object(s["a"])({handleClick:function(){var e=ee()();this.addSnippet(e),this.selectSnippet(e)}},Object(u["b"])(["selectSnippet","addSnippet"]))},ne=te,ie=(n("81fa"),Object(v["a"])(ne,j,P,!1,null,"0151c897",null));ie.options.__file="SnippetExplorer.vue";var ae=ie.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Editor"},[n("Headline",{attrs:{title:e.snippet.name,description:e.snippet.description}}),n("Code",{attrs:{content:e.snippet.code}})],1)},se=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Headline"},[n("h1",{attrs:{contenteditable:""}},[e._v(e._s(e.title))]),n("p",{attrs:{contenteditable:""}},[e._v(e._s(e.description))])])},oe=[],ue={name:"Headline",props:{title:String,description:String}},le=ue,pe=(n("bcb5"),Object(v["a"])(le,ce,oe,!1,null,null,null));pe.options.__file="Headline.vue";var de=pe.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"Code"},[n("code",{attrs:{focus:"",contenteditable:""},domProps:{innerHTML:e._s(e.code)}}),n("span",{staticClass:"LineNumbers"},e._l(e.lines,function(t,i){return n("span",{key:e.randomID(i),staticClass:"LineNumber"},[e._v(e._s(i+1))])}),0),e._v("\n")])},me=[],ge=(n("c5f6"),n("6c7b"),n("c197")),ve=n.n(ge),_e=(n("84bf"),n("e552")),Se=n("cc98"),Ee={name:"Code",props:{content:String},data:function(){return{code:"",lines:0}},watch:{content:{immediate:!0,handler:function(e){var t=this.beautify(e),n=this.highlight(t);this.code=n,this.lineNumbers()}}},methods:{beautify:function(e){return _e(e,{indent_size:4,space_in_empty_paren:!0})},highlight:function(e){return ve.a.highlight(e,ve.a.languages.javascript,"javascript")},lineNumbers:function(){var e=this;setTimeout(function(){var t=document.querySelector(".Code code"),n=t?t.offsetHeight:400,i=(n/24).toFixed(0);e.lines=Array(Number(i)).fill(0)},1)},randomID:function(e){return Se(e)}},computed:{},created:function(){},mounted:function(){}},be=Ee,he=(n("be7d"),Object(v["a"])(be,fe,me,!1,null,"5156f340",null));he.options.__file="Code.vue";var Ae=he.exports,Te={name:"Editor",components:{Headline:de,Code:Ae},props:{snippet:{name:"",description:"",code:""}},data:function(){return{}},created:function(e){}},Ce=Te,Oe=(n("0bca"),Object(v["a"])(Ce,re,se,!1,null,"59fd7f8a",null));Oe.options.__file="Editor.vue";var ye=Oe.exports,je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"WindowButton",class:[{"is-red":e.red},{"is-green":e.green},{"is-orange":e.orange}]})},Pe=[],Le={name:"WindowButton",props:{red:Boolean,orange:Boolean,green:Boolean}},Ne=Le,Ge=(n("ff3e"),Object(v["a"])(Ne,je,Pe,!1,null,"7c7990d5",null));Ge.options.__file="WindowButton.vue";var we=Ge.exports,xe={name:"app",components:{Sidebar:y,SnippetExplorer:ae,Editor:ye,WindowButton:we},data:function(){return{}},computed:Object(s["a"])({},Object(u["c"])({languages:"languages",language:"activeLanguage",tags:"tags",snippets:"snippets",snippet:"activeSnippet"}))},Ie=xe,De=(n("5c0b"),Object(v["a"])(Ie,a,r,!1,null,null,null));De.options.__file="App.vue";var ke,Be=De.exports,Me={languages:[{id:1,count:35,name:"Javascript",isSelected:!0,snippets:[{id:0,name:"numWays(n, steps)",description:"returns the numbers of possible ways to go the stairs up for a given set of steps",code:"var num = 0;var steps = [1,2,4];function numWays(n) {if (n == 0) {num++;}for (var step of steps) {if (n - step >= 0) {  numWays(n - step);  }}}console.time();numWays(30);console.timeEnd();document.getElementById('num').innerHTML = 'Number of ways: ' + num;",isSelected:!0,timeStamp:1548799437196},{id:1,name:"longestItem(Array)",description:"return the longest item in an Array",code:"const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));",isSelected:!1,timeStamp:1548799457085},{id:2,name:"offset(arr, offset)",description:"Moves the specified amount of elements to the end of the array.",code:"const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];",isSelected:!1,timeStamp:1548799472231},{id:3,name:"remove(arr, func)",description:"Removes elements from an array for which the given function returns false.",code:"const remove = (arr, func) => Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => { arr.splice(arr.indexOf(val), 1); return acc.concat(val); }, []) : [];",isSelected:!1,timeStamp:1548799483443}]},{id:2,name:"SCSS",count:0,isSelected:!1,snippets:[]},{id:3,name:"HTML",count:0,isSelected:!1,snippets:[]}],tags:[{id:1,name:"Arrays",count:0,isSelected:!1},{id:2,name:"cool functions",count:0,isSelected:!1}]},$e=Me,Re=(n("55dd"),n("7514"),{languages:function(e){return e.languages},tags:function(e){return e.tags},language:function(e){return function(t){return e.languages.find(function(e){return e.id===t})}},snippets:function(e,t){return t.activeLanguage.snippets.sort(function(e,t){return t.timeStamp-e.timeStamp})},snippet:function(e,t){return function(e){return t.language.snippets[e]}},activeLanguage:function(e){return e.languages.find(function(e){return e.isSelected})},activeTag:function(e){return e.tags.find(function(e){return e.isSelected})||{}},activeSnippet:function(e,t){var n=t.activeLanguage,i=n.snippets.find(function(e){return e.isSelected});return i||{}}}),He=Re,We={ADD_LANGUAGE:"ADD_LANGUAGE",ADD_TAG:"ADD_TAG",ADD_SNIPPET:"ADD_SNIPPET",SELECT_LANGUAGE:"SELECT_LANGUAGE",SELECT_SNIPPET:"SELECT_SNIPPET",SELECT_TAG:"SELECT_TAG",REMOVE_LANGUAGE:"REMOVE_LANGUAGE",REMOVE_SNIPPET:"REMOVE_SNIPPET",REMOVE_TAG:"REMOVE_TAG",EDIT_SNIPPET:"EDIT_SNIPPET",SEARCH_SNIPPET:"SEARCH_SNIPPET"},Ue=We,Ve={addLanguage:function(e,t){var n=e.commit;n(Ue.ADD_LANGUAGE,{payload:t})},addTag:function(e,t){var n=e.commit;n(Ue.ADD_TAG,{payload:t})},addSnippet:function(e,t){var n=e.getters,i=e.commit,a=n.activeLanguage;i(Ue.ADD_SNIPPET,{id:t,language:a})},selectLanguage:function(e,t){var n=e.commit;n(Ue.SELECT_LANGUAGE,{id:t})},selectTag:function(e,t){var n=e.getters,i=e.commit,a=n.activeTag;i(Ue.SELECT_TAG,{activeTag:a,id:t})},selectSnippet:function(e,t){var n=e.getters,i=e.commit,a=n.activeLanguage.snippets,r=n.activeSnippet;i(Ue.SELECT_SNIPPET,{snippets:a,activeSnippet:r,id:t})},removeLanguage:function(e,t){var n=e.commit;n(Ue.REMOVE_LANGUAGE,{payload:t})},removeTag:function(e,t){var n=e.commit;n(Ue.REMOVE_TAG,{payload:t})},removeSnippet:function(e,t){var n=e.commit;n(Ue.REMOVE_SNIPPET,{payload:t})},editSnippet:function(e,t){var n=e.commit;n(Ue.EDIT_SNIPPET,{payload:t})},searchSnippet:function(e,t){var n=e.commit;n(Ue.SEARCH_SNIPPET,{payload:t})}},qe=Ve,Fe=n("bd86"),Je=(n("ac6a"),n("0a0d")),ze=n.n(Je),Ke=n("6ee6"),Qe=(ke={},Object(Fe["a"])(ke,Ue.ADD_LANGUAGE,function(e,t){Object(Ke["a"])(t)}),Object(Fe["a"])(ke,Ue.ADD_TAG,function(e,t){Object(Ke["a"])(t)}),Object(Fe["a"])(ke,Ue.ADD_SNIPPET,function(e,t){var n=t.id,i=t.language,a={id:n,name:"a beautiful new snippet",isSelected:!1,code:"awesome new code",description:"snipp snipp snipp",timeStamp:ze()()};i.snippets.unshift(a)}),Object(Fe["a"])(ke,Ue.SELECT_LANGUAGE,function(e,t){var n=t.id,i=e.languages.find(function(e){return e.id===n});e.languages.forEach(function(e){e.isSelected=!1}),i.isSelected=!0}),Object(Fe["a"])(ke,Ue.SELECT_TAG,function(e,t){var n=t.activeTag,i=t.id,a=e.tags.find(function(e){return e.id===i});a.isSelected?a.isSelected=!1:a.isSelected=!0,n.isSelected=!1}),Object(Fe["a"])(ke,Ue.SELECT_SNIPPET,function(e,t){var n=t.snippets,i=t.activeSnippet,a=t.id,r=n.find(function(e){return e.id===a});i.isSelected=!1,r.isSelected=!0}),Object(Fe["a"])(ke,Ue.REMOVE_LANGUAGE,function(e,t){Object(Ke["a"])(t)}),Object(Fe["a"])(ke,Ue.REMOVE_TAG,function(e,t){Object(Ke["a"])(t)}),Object(Fe["a"])(ke,Ue.REMOVE_SNIPPET,function(e,t){Object(Ke["a"])(t)}),Object(Fe["a"])(ke,Ue.EDIT_SNIPPET,function(e,t){Object(Ke["a"])(t)}),Object(Fe["a"])(ke,Ue.SEARCH_SNIPPET,function(e,t){Object(Ke["a"])(t)}),ke),Xe=Qe;i["a"].use(u["a"]);var Ye=new u["a"].Store({state:$e,getters:He,mutations:Xe,actions:qe}),Ze=n("9483");Object(Ze["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({store:Ye,render:function(e){return e(Be)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),a=n.n(i);a.a},"5e27":function(e,t,n){},"66d7":function(e,t,n){e.exports=n.p+"img/icon-search.8ed15a82.svg"},"7df3":function(e,t,n){"use strict";var i=n("f023"),a=n.n(i);a.a},"81fa":function(e,t,n){"use strict";var i=n("9b7f"),a=n.n(i);a.a},"833e":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.2820a69c.svg"},"9b7f":function(e,t,n){},"9bd1":function(e,t,n){},a868:function(e,t,n){},a933:function(e,t,n){},b317:function(e,t,n){"use strict";var i=n("a868"),a=n.n(i);a.a},bab4:function(e,t,n){},bcb5:function(e,t,n){"use strict";var i=n("bab4"),a=n.n(i);a.a},be7d:function(e,t,n){"use strict";var i=n("00a8"),a=n.n(i);a.a},d0d5:function(e,t,n){e.exports=n.p+"img/icon-plus.b5049b4c.svg"},d210:function(e,t,n){"use strict";var i=n("833e"),a=n.n(i);a.a},d965:function(e,t,n){},dded:function(e,t,n){},e91d:function(e,t,n){"use strict";var i=n("9bd1"),a=n.n(i);a.a},f023:function(e,t,n){},ff3e:function(e,t,n){"use strict";var i=n("dded"),a=n.n(i);a.a}});
//# sourceMappingURL=app.b5dad0bb.js.map