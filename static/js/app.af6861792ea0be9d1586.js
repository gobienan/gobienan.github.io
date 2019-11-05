webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(12)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(27),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(13)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(28),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Intro_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Intro_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_Intro_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_About_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_About_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_About_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Contact_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Contact_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Contact_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_SocialContact_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_SocialContact_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_SocialContact_vue__);
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'app',
	components: {
		Intro: __WEBPACK_IMPORTED_MODULE_0__views_Intro_vue___default.a,
		About: __WEBPACK_IMPORTED_MODULE_1__views_About_vue___default.a,
		Contact: __WEBPACK_IMPORTED_MODULE_2__views_Contact_vue___default.a,
		SocialContact: __WEBPACK_IMPORTED_MODULE_3__components_SocialContact_vue___default.a
	},
	mounted: function mounted() {}
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BgLines",
  props: {
    ada: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    taxifusion: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    lumencase: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    slected: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    codehoney: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    bgLine: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    }
  },
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  watch: {},
  computed: {},
  methods: {},

  mounted: function mounted() {}
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SocialContact",
  props: {
    ButtonText: {
      type: String,
      default: function _default() {
        return "";
      }
    }
  },
  components: {},
  data: function data() {
    return {};
  },
  created: function created() {},

  watch: {},
  computed: {},
  methods: {},

  mounted: function mounted() {}
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "About",
  props: {
    ButtonText: {
      type: String,
      default: function _default() {
        return "";
      }
    }
  },
  components: {
    BgLines: __WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue___default.a
  },
  data: function data() {
    return {
      ada: false,
      taxifusion: false,
      lumencase: false,
      codehoney: false
    };
  },
  created: function created() {},

  watch: {},
  computed: {},
  methods: {
    changeBg: function changeBg(cases) {
      switch (cases) {
        case "ada":
          this.ada = true;
          break;
        default:
      }
    }
  },

  mounted: function mounted() {}
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Contact',
	props: {
		ButtonText: {
			type: String,
			default: function _default() {
				return "";
			}
		}
	},
	components: {
		BgLines: __WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue___default.a
	},
	data: function data() {
		return {};
	},
	created: function created() {},

	watch: {},
	computed: {},
	methods: {},

	mounted: function mounted() {}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Intro',
	props: {
		ButtonText: {
			type: String,
			default: function _default() {
				return "";
			}
		}
	},
	components: {
		BgLines: __WEBPACK_IMPORTED_MODULE_0__components_BgLines_vue___default.a
	},
	data: function data() {
		return {};
	},
	created: function created() {},

	watch: {},
	computed: {},
	methods: {},

	mounted: function mounted() {}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU1MS4wMzQgNTUxLjAzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUxLjAzNCA1NTEuMDM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNzUuNTE3IiB5MT0iNC41NyIgeDI9IjI3NS41MTciIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UwOUIzRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNzRDNEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MDI0QzQiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV8pOyIgZD0iTTM4Ni44NzgsMEgxNjQuMTU2QzczLjY0LDAsMCw3My42NCwwLDE2NC4xNTZ2MjIyLjcyMg0KCQljMCw5MC41MTYsNzMuNjQsMTY0LjE1NiwxNjQuMTU2LDE2NC4xNTZoMjIyLjcyMmM5MC41MTYsMCwxNjQuMTU2LTczLjY0LDE2NC4xNTYtMTY0LjE1NlYxNjQuMTU2DQoJCUM1NTEuMDMzLDczLjY0LDQ3Ny4zOTMsMCwzODYuODc4LDB6IE00OTUuNiwzODYuODc4YzAsNjAuMDQ1LTQ4LjY3NywxMDguNzIyLTEwOC43MjIsMTA4LjcyMkgxNjQuMTU2DQoJCWMtNjAuMDQ1LDAtMTA4LjcyMi00OC42NzctMTA4LjcyMi0xMDguNzIyVjE2NC4xNTZjMC02MC4wNDYsNDguNjc3LTEwOC43MjIsMTA4LjcyMi0xMDguNzIyaDIyMi43MjINCgkJYzYwLjA0NSwwLDEwOC43MjIsNDguNjc2LDEwOC43MjIsMTA4LjcyMkw0OTUuNiwzODYuODc4TDQ5NS42LDM4Ni44Nzh6Ii8+DQoJDQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjc1LjUxNyIgeTE9IjQuNTciIHgyPSIyNzUuNTE3IiB5Mj0iNTQ5LjcyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTU0KSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMDlCM0QiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4zIiBzdHlsZT0ic3RvcC1jb2xvcjojQzc0QzREIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNiIgc3R5bGU9InN0b3AtY29sb3I6I0MyMTk3NSIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNzAyNEM0Ii8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzJfKTsiIGQ9Ik0yNzUuNTE3LDEzM0MxOTYuOTMzLDEzMywxMzMsMTk2LjkzMywxMzMsMjc1LjUxNnM2My45MzMsMTQyLjUxNywxNDIuNTE3LDE0Mi41MTcNCgkJUzQxOC4wMzQsMzU0LjEsNDE4LjAzNCwyNzUuNTE2UzM1NC4xMDEsMTMzLDI3NS41MTcsMTMzeiBNMjc1LjUxNywzNjIuNmMtNDguMDk1LDAtODcuMDgzLTM4Ljk4OC04Ny4wODMtODcuMDgzDQoJCXMzOC45ODktODcuMDgzLDg3LjA4My04Ny4wODNjNDguMDk1LDAsODcuMDgzLDM4Ljk4OCw4Ny4wODMsODcuMDgzQzM2Mi42LDMyMy42MTEsMzIzLjYxMSwzNjIuNiwyNzUuNTE3LDM2Mi42eiIvPg0KCQ0KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQxOC4zMSIgeTE9IjQuNTciIHgyPSI0MTguMzEiIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UwOUIzRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNzRDNEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MDI0QzQiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8zXyk7IiBjeD0iNDE4LjMxIiBjeT0iMTM0LjA3IiByPSIzNC4xNSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NyIgaGVpZ2h0PSI3OCIgdmlld0JveD0iMCAwIDc3IDc4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIC41NDcgNzcuNikiPgogICAgPHBhdGggZmlsbD0iIzA2OSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMC4zMzYwMDkxNDUsNzEuMzU0NTY3OCBDMC4zMzYwMDkxNDUsNzQuMzcwMjk1NyAyLjg0MjczMTEsNzYuODE2NDk5MyA1LjkzNTA3NDgxLDc2LjgxNjQ5OTMgTDcwLjUwNDI1NDgsNzYuODE2NDk5MyBDNzMuNTk2NDk2Niw3Ni44MTY0OTkzIDc2LjEwMzMyMDQsNzQuMzcwMjk1NyA3Ni4xMDMzMjA0LDcxLjM1NDU2NzggTDc2LjEwMzMyMDQsNi4wMzA0MzcwMSBDNzYuMTAzMzIwNCwzLjAxMzY5MDI3IDczLjU5NjQ5NjYsMC41Njg1MDU0NjYgNzAuNTA0MjU0OCwwLjU2ODUwNTQ2NiBMNS45MzUwNzQ4MSwwLjU2ODUwNTQ2NiBDMi44NDI3MzExLDAuNTY4NTA1NDY2IDAuMzM2MDA5MTQ1LDMuMDEzNjkwMjcgMC4zMzYwMDkxNDUsNi4wMzA0MzcwMSBMMC4zMzYwMDkxNDUsNzEuMzU0NTY3OCBMMC4zMzYwMDkxNDUsNzEuMzU0NTY3OCBaIi8+CiAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjMuMzAzNDI2MiAxMi45ODkwMjU0TDIzLjMwMzQyNjIgNDcuNDE5MjY1MSAxMS44NTk0NTE5IDQ3LjQxOTI2NTEgMTEuODU5NDUxOSAxMi45ODkwMjU0IDIzLjMwMzQyNjIgMTIuOTg5MDI1NHpNMTcuNTgxMzg4MSA1Mi4xMjAxMzI4QzIxLjU3MjEzMzUgNTIuMTIwMTMyOCAyNC4wNTYwMzM3IDU0Ljc2Mzk4ODkgMjQuMDU2MDMzNyA1OC4wNjgwNDQ5IDIzLjk4MTY1OTMgNjEuNDQ2NDc1MiAyMS41NzIxMzM1IDY0LjAxNjk3NTcgMTcuNjU3MDg3IDY0LjAxNjk3NTcgMTMuNzQyNDQ4IDY0LjAxNjk3NTcgMTEuMTgyOTUwOCA2MS40NDY0NzUyIDExLjE4Mjk1MDggNTguMDY4MDQ0OSAxMS4xODI5NTA4IDU0Ljc2Mzk4ODkgMTMuNjY2MzQxNiA1Mi4xMjAxMzI4IDE3LjUwNjgxIDUyLjEyMDEzMjhMMTcuNTgxMTg0NCA1Mi4xMjAxMzI4IDE3LjU4MTM4ODEgNTIuMTIwMTMyOHpNMjkuNjM1NzQxNyAxMi45ODkwMjU0TDQxLjA3OTYxNDEgMTIuOTg5MDI1NCA0MS4wNzk2MTQxIDMyLjIxNjMyODZDNDEuMDc5NjE0MSAzMy4yNDUzNDM4IDQxLjE1Mzk4ODQgMzQuMjczMzQwMyA0MS40NTYxNzI1IDM1LjAwODkzMzQgNDIuMjgzNDYgMzcuMDY0OTI2MyA0NC4xNjY0NTYxIDM5LjE5NDI3NDcgNDcuMzI3ODc2MyAzOS4xOTQyNzQ3IDUxLjQ2ODg5ODYgMzkuMTk0Mjc0NyA1My4xMjU0MDk0IDM2LjAzNjkyOTggNTMuMTI1NDA5NCAzMS40MDgzOTg4TDUzLjEyNTQwOTQgMTIuOTg5MDI1NCA2NC41NjgzNjQ5IDEyLjk4OTAyNTQgNjQuNTY4MzY0OSAzMi43MzA4MzYyQzY0LjU2ODM2NDkgNDMuMzA2MjYwNSA1OC45MjI1MzUxIDQ4LjIyNzE5NDkgNTEuMzkzMzAxNyA0OC4yMjcxOTQ5IDQ1LjIxOTYxNzYgNDguMjI3MTk0OSA0Mi41MDkzMzQgNDQuNzc2NDI3OCA0MS4wMDM1MDc3IDQyLjQyNTk5MzlMNDEuMDc5OTE5NyA0Mi40MjU5OTM5IDQxLjA3OTkxOTcgNDcuNDE5MjY1MSAyOS42MzYwNDczIDQ3LjQxOTI2NTFDMjkuNzg2MjIyNCA0NC4xODg1NjQ2IDI5LjYzNjA0NzMgMTIuOTg5MDI1NCAyOS42MzYwNDczIDEyLjk4OTAyNTRMMjkuNjM1NzQxNyAxMi45ODkwMjU0eiIvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(16)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(31),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7893bf67",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(14)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(29),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(17)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(32),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(15)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(30),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Bg-Lines",
    class: {
      'hasColor-ada': _vm.ada, 'hasColor-taxifusion': _vm.taxifusion, 'hasColor-lumencase': _vm.lumencase, 'hasColor-slected': _vm.slected, 'hasColor-codehoney': _vm.codehoney
    }
  }, [_c('div', {
    staticClass: "Bg-Line Bg-Line-1"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "Bg-Line Bg-Line-3"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.bgLine),
      expression: "bgLine"
    }],
    staticClass: "Bg-Line-Animation"
  })]), _vm._v(" "), _c('div', {
    staticClass: "Bg-Line Bg-Line-4"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.bgLine),
      expression: "bgLine"
    }],
    staticClass: "Bg-Line-Animation"
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "Bg-Line Bg-Line-6"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.bgLine),
      expression: "bgLine"
    }],
    staticClass: "Bg-Line-Animation"
  })]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "Bg-Line Bg-Line-8"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.bgLine),
      expression: "bgLine"
    }],
    staticClass: "Bg-Line-Animation"
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Bg-Line Bg-Line-2"
  }, [_c('div', {
    staticClass: "Bg-Line-Animation"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Bg-Line Bg-Line-5"
  }, [_c('div', {
    staticClass: "Bg-Line-Animation"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Bg-Line Bg-Line-7"
  }, [_c('div', {
    staticClass: "Bg-Line-Animation"
  })])
}]}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('Intro'), _vm._v(" "), _c('SocialContact'), _vm._v(" "), _c('About'), _vm._v(" "), _c('Contact')], 1)
},staticRenderFns: []}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "About"
  }, [_c('BgLines', {
    attrs: {
      "ada": _vm.ada,
      "taxifusion": _vm.taxifusion,
      "codehoney": _vm.codehoney
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "Section-Wrapper"
  }, [_c('span', [_vm._v("Introduction")]), _vm._v(" "), _c('h1', [_c('span', [_vm._v("Gobie ")]), _c('span', [_vm._v("Nanthakumar ")]), _c('span', [_vm._v("— ")]), _c('span', [_vm._v("webdeveloper ")]), _c('span', [_vm._v("from ")]), _c('span', [_vm._v("Germany, ")]), _c('span', [_vm._v("currently ")]), _c('span', [_vm._v("working ")]), _c('span', [_vm._v("for ")]), _c('a', {
    staticClass: "Ada",
    class: {
      'isBlack': _vm.ada
    },
    attrs: {
      "href": "http://www.ada.com/",
      "target": "_blank"
    },
    on: {
      "mouseover": function($event) {
        _vm.ada = !_vm.ada
      },
      "mouseleave": function($event) {
        _vm.ada = !_vm.ada
      }
    }
  }, [_vm._v("Ada Health ")]), _c('span', [_vm._v("in ")]), _c('span', [_vm._v("lovely ")]), _c('span', [_vm._v("Berlin")]), _c('span', [_vm._v(". ")])]), _vm._v(" "), _c('h2', [_c('span', [_vm._v("Projects ")]), _c('span', [_vm._v("I ")]), _c('span', [_vm._v("am ")]), _c('span', [_vm._v("working ")]), _c('span', [_vm._v("on")]), _c('span', [_vm._v(": ")]), _vm._v(" "), _c('a', {
    staticClass: "Taxifusion",
    class: {
      'isBlack': _vm.taxifusion
    },
    attrs: {
      "href": "http://www.taxifusion.de ",
      "target": "_blank "
    },
    on: {
      "mouseover": function($event) {
        _vm.taxifusion = !_vm.taxifusion
      },
      "mouseleave": function($event) {
        _vm.taxifusion = !_vm.taxifusion
      }
    }
  }, [_vm._v("TaxiFusion ")]), _vm._v(" "), _c('span', [_vm._v("and ")]), _vm._v(" "), _c('a', {
    staticClass: "Codehoney",
    class: {
      'isBlack': _vm.codehoney
    },
    attrs: {
      "href": "https://www.codehoney.app",
      "target": "_blank "
    },
    on: {
      "mouseover": function($event) {
        _vm.codehoney = !_vm.codehoney
      },
      "mouseleave": function($event) {
        _vm.codehoney = !_vm.codehoney
      }
    }
  }, [_vm._v("Codehoney ")])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Logo"
  }, [_c('img', {
    attrs: {
      "src": "/../../static/logo.svg",
      "alt": "Logo "
    }
  })])
}]}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "Intro"
  }, [_c('BgLines')], 1)
},staticRenderFns: []}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Socila-Contacts"
  }, [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.instagram.com/gobienan/"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(21),
      "alt": "Instagram-Logo"
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.linkedin.com/in/gobie-nanthakumar/"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(22),
      "alt": "LinkedIn-Logo"
    }
  })])])
}]}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "Contact"
  }, [_c('BgLines'), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Section-Wrapper"
  }, [_c('span', [_vm._v("Email")]), _vm._v(" "), _c('h2', [_vm._v("\n\t\t\tGet in touch with me.\n\t\t")]), _vm._v(" "), _c('h2', {
    staticClass: "Mail"
  }, [_c('a', {
    attrs: {
      "href": "mailto:hi@gobienan.com"
    }
  }, [_vm._v("hi@gobienan.com")])])])
}]}

/***/ })
],[11]);
//# sourceMappingURL=app.af6861792ea0be9d1586.js.map