webpackJsonp([0],[,function(t,M,n){function e(t){n(11)}var i=n(0)(n(5),n(24),e,null,null);t.exports=i.exports},function(t,M,n){function e(t){n(12)}var i=n(0)(n(4),n(25),e,null,null);t.exports=i.exports},,function(t,M,n){"use strict";Object.defineProperty(M,"__esModule",{value:!0});var e=n(23),i=n.n(e),c=n(21),N=n.n(c),a=n(22),s=n.n(a),u=n(20),o=n.n(u);M.default={name:"app",components:{Intro:i.a,About:N.a,Contact:s.a,SocialContact:o.a}}},function(t,M,n){"use strict";Object.defineProperty(M,"__esModule",{value:!0}),M.default={name:"BgLines",props:{clearcanvas:{type:Boolean,default:function(){return!1}},taxifusion:{type:Boolean,default:function(){return!1}},lumencase:{type:Boolean,default:function(){return!1}},slected:{type:Boolean,default:function(){return!1}},bgLine:{type:Boolean,default:function(){return!0}}},components:{},data:function(){return{}},created:function(){},watch:{},computed:{},methods:{},mounted:function(){}}},function(t,M,n){"use strict";Object.defineProperty(M,"__esModule",{value:!0}),M.default={name:"SocialContact",props:{ButtonText:{type:String,default:function(){return""}}},components:{},data:function(){return{}},created:function(){},watch:{},computed:{},methods:{},mounted:function(){}}},function(t,M,n){"use strict";Object.defineProperty(M,"__esModule",{value:!0});var e=n(1),i=n.n(e);M.default={name:"About",props:{ButtonText:{type:String,default:function(){return""}}},components:{BgLines:i.a},data:function(){return{clearcanvas:!1,taxifusion:!1,lumencase:!1,slected:!1}},created:function(){},watch:{},computed:{},methods:{changeBg:function(t){switch(t){case"clearcanvas":this.clearcanvas=!0}}},mounted:function(){}}},function(t,M,n){"use strict";Object.defineProperty(M,"__esModule",{value:!0});var e=n(1),i=n.n(e);M.default={name:"Contact",props:{ButtonText:{type:String,default:function(){return""}}},components:{BgLines:i.a},data:function(){return{}},created:function(){},watch:{},computed:{},methods:{},mounted:function(){}}},function(t,M,n){"use strict";Object.defineProperty(M,"__esModule",{value:!0});var e=n(1),i=n.n(e);M.default={name:"Intro",props:{ButtonText:{type:String,default:function(){return""}}},components:{BgLines:i.a},data:function(){return{}},created:function(){},watch:{},computed:{},methods:{},mounted:function(){}}},function(t,M,n){"use strict";Object.defineProperty(M,"__esModule",{value:!0});var e=n(3),i=n(2),c=n.n(i);e.a.config.productionTip=!1,new e.a({el:"#app",template:"<App/>",components:{App:c.a}})},function(t,M){},function(t,M){},function(t,M){},function(t,M){},function(t,M){},function(t,M){},function(t,M){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU1MS4wMzQgNTUxLjAzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUxLjAzNCA1NTEuMDM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNzUuNTE3IiB5MT0iNC41NyIgeDI9IjI3NS41MTciIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UwOUIzRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNzRDNEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MDI0QzQiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV8pOyIgZD0iTTM4Ni44NzgsMEgxNjQuMTU2QzczLjY0LDAsMCw3My42NCwwLDE2NC4xNTZ2MjIyLjcyMg0KCQljMCw5MC41MTYsNzMuNjQsMTY0LjE1NiwxNjQuMTU2LDE2NC4xNTZoMjIyLjcyMmM5MC41MTYsMCwxNjQuMTU2LTczLjY0LDE2NC4xNTYtMTY0LjE1NlYxNjQuMTU2DQoJCUM1NTEuMDMzLDczLjY0LDQ3Ny4zOTMsMCwzODYuODc4LDB6IE00OTUuNiwzODYuODc4YzAsNjAuMDQ1LTQ4LjY3NywxMDguNzIyLTEwOC43MjIsMTA4LjcyMkgxNjQuMTU2DQoJCWMtNjAuMDQ1LDAtMTA4LjcyMi00OC42NzctMTA4LjcyMi0xMDguNzIyVjE2NC4xNTZjMC02MC4wNDYsNDguNjc3LTEwOC43MjIsMTA4LjcyMi0xMDguNzIyaDIyMi43MjINCgkJYzYwLjA0NSwwLDEwOC43MjIsNDguNjc2LDEwOC43MjIsMTA4LjcyMkw0OTUuNiwzODYuODc4TDQ5NS42LDM4Ni44Nzh6Ii8+DQoJDQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjc1LjUxNyIgeTE9IjQuNTciIHgyPSIyNzUuNTE3IiB5Mj0iNTQ5LjcyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTU0KSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMDlCM0QiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4zIiBzdHlsZT0ic3RvcC1jb2xvcjojQzc0QzREIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNiIgc3R5bGU9InN0b3AtY29sb3I6I0MyMTk3NSIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNzAyNEM0Ii8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzJfKTsiIGQ9Ik0yNzUuNTE3LDEzM0MxOTYuOTMzLDEzMywxMzMsMTk2LjkzMywxMzMsMjc1LjUxNnM2My45MzMsMTQyLjUxNywxNDIuNTE3LDE0Mi41MTcNCgkJUzQxOC4wMzQsMzU0LjEsNDE4LjAzNCwyNzUuNTE2UzM1NC4xMDEsMTMzLDI3NS41MTcsMTMzeiBNMjc1LjUxNywzNjIuNmMtNDguMDk1LDAtODcuMDgzLTM4Ljk4OC04Ny4wODMtODcuMDgzDQoJCXMzOC45ODktODcuMDgzLDg3LjA4My04Ny4wODNjNDguMDk1LDAsODcuMDgzLDM4Ljk4OCw4Ny4wODMsODcuMDgzQzM2Mi42LDMyMy42MTEsMzIzLjYxMSwzNjIuNiwyNzUuNTE3LDM2Mi42eiIvPg0KCQ0KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQxOC4zMSIgeTE9IjQuNTciIHgyPSI0MTguMzEiIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UwOUIzRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNzRDNEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MDI0QzQiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8zXyk7IiBjeD0iNDE4LjMxIiBjeT0iMTM0LjA3IiByPSIzNC4xNSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NyIgaGVpZ2h0PSI3OCIgdmlld0JveD0iMCAwIDc3IDc4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC41NDcgNzcuNikiPgogICAgPHBhdGggZmlsbD0iIzA2OSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMC4zMzYwMDkxNDUsNzEuMzU0NTY3OCBDMC4zMzYwMDkxNDUsNzQuMzcwMjk1NyAyLjg0MjczMTEsNzYuODE2NDk5MyA1LjkzNTA3NDgxLDc2LjgxNjQ5OTMgTDcwLjUwNDI1NDgsNzYuODE2NDk5MyBDNzMuNTk2NDk2Niw3Ni44MTY0OTkzIDc2LjEwMzMyMDQsNzQuMzcwMjk1NyA3Ni4xMDMzMjA0LDcxLjM1NDU2NzggTDc2LjEwMzMyMDQsNi4wMzA0MzcwMSBDNzYuMTAzMzIwNCwzLjAxMzY5MDI3IDczLjU5NjQ5NjYsMC41Njg1MDU0NjYgNzAuNTA0MjU0OCwwLjU2ODUwNTQ2NiBMNS45MzUwNzQ4MSwwLjU2ODUwNTQ2NiBDMi44NDI3MzExLDAuNTY4NTA1NDY2IDAuMzM2MDA5MTQ1LDMuMDEzNjkwMjcgMC4zMzYwMDkxNDUsNi4wMzA0MzcwMSBMMC4zMzYwMDkxNDUsNzEuMzU0NTY3OCBMMC4zMzYwMDkxNDUsNzEuMzU0NTY3OCBaIi8+CiAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjMuMzAzNDI2MiAxMi45ODkwMjU0TDIzLjMwMzQyNjIgNDcuNDE5MjY1MSAxMS44NTk0NTE5IDQ3LjQxOTI2NTEgMTEuODU5NDUxOSAxMi45ODkwMjU0IDIzLjMwMzQyNjIgMTIuOTg5MDI1NHpNMTcuNTgxMzg4MSA1Mi4xMjAxMzI4QzIxLjU3MjEzMzUgNTIuMTIwMTMyOCAyNC4wNTYwMzM3IDU0Ljc2Mzk4ODkgMjQuMDU2MDMzNyA1OC4wNjgwNDQ5IDIzLjk4MTY1OTMgNjEuNDQ2NDc1MiAyMS41NzIxMzM1IDY0LjAxNjk3NTcgMTcuNjU3MDg3IDY0LjAxNjk3NTcgMTMuNzQyNDQ4IDY0LjAxNjk3NTcgMTEuMTgyOTUwOCA2MS40NDY0NzUyIDExLjE4Mjk1MDggNTguMDY4MDQ0OSAxMS4xODI5NTA4IDU0Ljc2Mzk4ODkgMTMuNjY2MzQxNiA1Mi4xMjAxMzI4IDE3LjUwNjgxIDUyLjEyMDEzMjhMMTcuNTgxMTg0NCA1Mi4xMjAxMzI4IDE3LjU4MTM4ODEgNTIuMTIwMTMyOHpNMjkuNjM1NzQxNyAxMi45ODkwMjU0TDQxLjA3OTYxNDEgMTIuOTg5MDI1NCA0MS4wNzk2MTQxIDMyLjIxNjMyODZDNDEuMDc5NjE0MSAzMy4yNDUzNDM4IDQxLjE1Mzk4ODQgMzQuMjczMzQwMyA0MS40NTYxNzI1IDM1LjAwODkzMzQgNDIuMjgzNDYgMzcuMDY0OTI2MyA0NC4xNjY0NTYxIDM5LjE5NDI3NDcgNDcuMzI3ODc2MyAzOS4xOTQyNzQ3IDUxLjQ2ODg5ODYgMzkuMTk0Mjc0NyA1My4xMjU0MDk0IDM2LjAzNjkyOTggNTMuMTI1NDA5NCAzMS40MDgzOTg4TDUzLjEyNTQwOTQgMTIuOTg5MDI1NCA2NC41NjgzNjQ5IDEyLjk4OTAyNTQgNjQuNTY4MzY0OSAzMi43MzA4MzYyQzY0LjU2ODM2NDkgNDMuMzA2MjYwNSA1OC45MjI1MzUxIDQ4LjIyNzE5NDkgNTEuMzkzMzAxNyA0OC4yMjcxOTQ5IDQ1LjIxOTYxNzYgNDguMjI3MTk0OSA0Mi41MDkzMzQgNDQuNzc2NDI3OCA0MS4wMDM1MDc3IDQyLjQyNTk5MzlMNDEuMDc5OTE5NyA0Mi40MjU5OTM5IDQxLjA3OTkxOTcgNDcuNDE5MjY1MSAyOS42MzYwNDczIDQ3LjQxOTI2NTFDMjkuNzg2MjIyNCA0NC4xODg1NjQ2IDI5LjYzNjA0NzMgMTIuOTg5MDI1NCAyOS42MzYwNDczIDEyLjk4OTAyNTRMMjkuNjM1NzQxNyAxMi45ODkwMjU0eiIvPgogIDwvZz4KPC9zdmc+Cg=="},function(t,M){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAuMDAwMDYgMjQ0LjE4NzAzIiBoZWlnaHQ9IjI0NC4xOSIgd2lkdGg9IjMwMCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogPGcgc3R5bGU9IiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzOS4xOCAtNTY4Ljg2KSI+CiAgPHBhdGggZD0ibTYzMy45IDgxMi4wNGMxMTIuNDYgMCAxNzMuOTYtOTMuMTY4IDE3My45Ni0xNzMuOTYgMC0yLjY0NjMtMC4wNTM5LTUuMjgwNi0wLjE3MjYtNy45MDMgMTEuOTM4LTguNjMwMiAyMi4zMTQtMTkuNCAzMC40OTgtMzEuNjYtMTAuOTU1IDQuODY5NC0yMi43NDQgOC4xNDc0LTM1LjExMSA5LjYyNTUgMTIuNjIzLTcuNTY5MyAyMi4zMTQtMTkuNTQzIDI2Ljg4Ni0zMy44MTctMTEuODEzIDcuMDAzMS0yNC44OTUgMTIuMDkzLTM4LjgyNCAxNC44NDEtMTEuMTU3LTExLjg4NC0yNy4wNDEtMTkuMzE3LTQ0LjYyOS0xOS4zMTctMzMuNzY0IDAtNjEuMTQ0IDI3LjM4MS02MS4xNDQgNjEuMTMyIDAgNC43OTc4IDAuNTM2NCA5LjQ2NDYgMS41ODU0IDEzLjk0MS01MC44MTUtMi41NTY5LTk1Ljg3NC0yNi44ODYtMTI2LjAzLTYzLjg4LTUuMjUwOCA5LjAzNTQtOC4yNzg1IDE5LjUzMS04LjI3ODUgMzAuNzMgMCAyMS4yMTIgMTAuNzk0IDM5LjkzOCAyNy4yMDggNTAuODkzLTEwLjAzMS0wLjMwOTkyLTE5LjQ1NC0zLjA2MzUtMjcuNjktNy42NDY4LTAuMDA5IDAuMjU2NTItMC4wMDkgMC41MDY2MS0wLjAwOSAwLjc4MDc3IDAgMjkuNjEgMjEuMDc1IDU0LjMzMiA0OS4wNTEgNTkuOTM0LTUuMTM3NiAxLjQwMDYtMTAuNTQzIDIuMTUxNi0xNi4xMjIgMi4xNTE2LTMuOTMzNiAwLTcuNzY2LTAuMzg3MTYtMTEuNDkxLTEuMTAyNiA3Ljc4MzggMjQuMjkzIDMwLjM1NSA0MS45NzEgNTcuMTE1IDQyLjQ2NS0yMC45MjYgMTYuNDAyLTQ3LjI4NyAyNi4xNzEtNzUuOTM3IDI2LjE3MS00LjkyOSAwLTkuNzk4My0wLjI4MDM2LTE0LjU4NC0wLjg0NjM0IDI3LjA1OSAxNy4zNDQgNTkuMTg5IDI3LjQ2NCA5My43MjIgMjcuNDY0IiBmaWxsPSIjMWRhMWYyIi8+CiA8L2c+Cjwvc3ZnPgo="},function(t,M,n){function e(t){n(15)}var i=n(0)(n(6),n(28),e,"data-v-7893bf67",null);t.exports=i.exports},function(t,M,n){function e(t){n(13)}var i=n(0)(n(7),n(26),e,null,null);t.exports=i.exports},function(t,M,n){function e(t){n(16)}var i=n(0)(n(8),n(29),e,null,null);t.exports=i.exports},function(t,M,n){function e(t){n(14)}var i=n(0)(n(9),n(27),e,null,null);t.exports=i.exports},function(t,M){t.exports={render:function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("div",{staticClass:"Bg-Lines",class:{"hasColor-clearcanvas":t.clearcanvas,"hasColor-taxifusion":t.taxifusion,"hasColor-lumencase":t.lumencase,"hasColor-slected":t.slected}},[n("div",{staticClass:"Bg-Line Bg-Line-1"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"Bg-Line Bg-Line-3"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.bgLine,expression:"bgLine"}],staticClass:"Bg-Line-Animation"})]),t._v(" "),n("div",{staticClass:"Bg-Line Bg-Line-4"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.bgLine,expression:"bgLine"}],staticClass:"Bg-Line-Animation"})]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"Bg-Line Bg-Line-6"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.bgLine,expression:"bgLine"}],staticClass:"Bg-Line-Animation"})]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"Bg-Line Bg-Line-8"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.bgLine,expression:"bgLine"}],staticClass:"Bg-Line-Animation"})])])},staticRenderFns:[function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("div",{staticClass:"Bg-Line Bg-Line-2"},[n("div",{staticClass:"Bg-Line-Animation"})])},function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("div",{staticClass:"Bg-Line Bg-Line-5"},[n("div",{staticClass:"Bg-Line-Animation"})])},function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("div",{staticClass:"Bg-Line Bg-Line-7"},[n("div",{staticClass:"Bg-Line-Animation"})])}]}},function(t,M){t.exports={render:function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("div",{attrs:{id:"app"}},[n("Intro"),t._v(" "),n("SocialContact"),t._v(" "),n("About"),t._v(" "),n("Contact")],1)},staticRenderFns:[]}},function(t,M){t.exports={render:function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("section",{staticClass:"About"},[n("BgLines",{attrs:{clearcanvas:t.clearcanvas,taxifusion:t.taxifusion,lumencase:t.lumencase,slected:t.slected}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"Section-Wrapper"},[n("span",[t._v("Introduction")]),t._v(" "),n("h1",[n("span",[t._v("Gobie ")]),n("span",[t._v("Nanthakumar ")]),n("span",[t._v("— ")]),n("span",[t._v("webdeveloper ")]),n("span",[t._v("from ")]),n("span",[t._v("Germany")]),n("span",[t._v(", ")]),n("span",[t._v("currently ")]),n("span",[t._v("working ")]),n("span",[t._v("for ")]),n("a",{staticClass:"ClearCanvas",class:{isWhite:t.clearcanvas},attrs:{href:"http://www.clear-canvas.com/",target:"_blank"},on:{mouseover:function(M){t.clearcanvas=!t.clearcanvas},mouseleave:function(M){t.clearcanvas=!t.clearcanvas}}},[t._v("ClearCanvas ")]),n("span",[t._v("in ")]),n("span",[t._v("lovely ")]),n("span",[t._v("Berlin")]),n("span",[t._v(". ")])]),t._v(" "),n("h2",[n("span",[t._v("Projects ")]),n("span",[t._v("I ")]),n("span",[t._v("am ")]),n("span",[t._v("working ")]),n("span",[t._v("on")]),n("span",[t._v(": ")]),n("a",{staticClass:"Taxifusion ",class:{isWhite:t.taxifusion},attrs:{href:"http://www.taxifusion.de ",target:"_blank "},on:{mouseover:function(M){t.taxifusion=!t.taxifusion},mouseleave:function(M){t.taxifusion=!t.taxifusion}}},[t._v("TaxiFusion")]),n("span",[t._v(", ")]),n("a",{staticClass:"Lumencase",class:{isWhite:t.lumencase},attrs:{href:"http://www.lumencase.com",target:"_blank"},on:{mouseover:function(M){t.lumencase=!t.lumencase},mouseleave:function(M){t.lumencase=!t.lumencase}}},[t._v("Lumencase ")]),n("span",[t._v("and ")]),n("a",{staticClass:"Slected ",class:{isWhite:t.slected},attrs:{href:"http://www.slected.me ",target:"_blank "},on:{mouseover:function(M){t.slected=!t.slected},mouseleave:function(M){t.slected=!t.slected}}},[t._v("Slected ")])])])],1)},staticRenderFns:[function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("div",{staticClass:"Logo "},[n("img",{attrs:{src:"/../../static/logo.svg",alt:"Logo "}})])}]}},function(t,M){t.exports={render:function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("section",{staticClass:"Intro"},[n("BgLines")],1)},staticRenderFns:[]}},function(t,M,n){t.exports={render:function(){var t=this,M=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,M=t.$createElement,e=t._self._c||M;return e("div",{staticClass:"Socila-Contacts"},[e("a",{attrs:{target:"_blank",href:"https://www.instagram.com/gobienan/"}},[e("img",{attrs:{src:n(17),alt:"Instagram-Logo"}})]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/gobie-nanthakumar/"}},[e("img",{attrs:{src:n(18),alt:"LinkedIn-Logo"}})]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://twitter.com/gobienan"}},[e("img",{attrs:{src:n(19),alt:"Twitter-Logo"}})])])}]}},function(t,M){t.exports={render:function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("section",{staticClass:"Contact"},[n("BgLines"),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,M=t.$createElement,n=t._self._c||M;return n("div",{staticClass:"Section-Wrapper"},[n("span",[t._v("Email")]),t._v(" "),n("h2",[t._v("\n\t\t\tGet in touch with me.\n\t\t")]),t._v(" "),n("h2",{staticClass:"Mail"},[n("a",{attrs:{href:"mailto:hi@gobienan.com"}},[t._v("hi@gobienan.com")])])])}]}}],[10]);
//# sourceMappingURL=app.cea02bc445872fe61833.js.map