/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = 'this is a';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxHQUFWLEVBQWU7QUFDOUJBLEtBQUcsQ0FBQ0MsSUFBSixHQUFXLFdBQVg7QUFDRCxDQUZEIiwiZmlsZSI6Ii4vc3JjL2FwaS9hLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4KSB7XG4gIGN0eC5ib2R5ID0gJ3RoaXMgaXMgYSdcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = 'this is b';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxHQUFWLEVBQWU7QUFDOUJBLEtBQUcsQ0FBQ0MsSUFBSixHQUFXLFdBQVg7QUFDRCxDQUZEIiwiZmlsZSI6Ii4vc3JjL2FwaS9iLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4KSB7XG4gIGN0eC5ib2R5ID0gJ3RoaXMgaXMgYidcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const Koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nconst router = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\");\n\nconst app = new Koa();\napp.use(helmet());\napp.use(statics(path.join(__dirname, '../public')));\napp.use(router());\napp.listen(3000);\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJLb2EiLCJyZXF1aXJlIiwicGF0aCIsImhlbG1ldCIsInN0YXRpY3MiLCJyb3V0ZXIiLCJhcHAiLCJ1c2UiLCJqb2luIiwiX19kaXJuYW1lIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiQUFBQSx1REFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdCQUFELENBQW5COztBQUNBLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLG1CQUFPLENBQUMsOEJBQUQsQ0FBdEI7O0FBQ0EsTUFBTUcsT0FBTyxHQUFHSCxtQkFBTyxDQUFDLDhCQUFELENBQXZCOztBQUVBLE1BQU1JLE1BQU0sR0FBR0osbUJBQU8sQ0FBQyw2Q0FBRCxDQUF0Qjs7QUFFQSxNQUFNSyxHQUFHLEdBQUcsSUFBSU4sR0FBSixFQUFaO0FBRUFNLEdBQUcsQ0FBQ0MsR0FBSixDQUFRSixNQUFNLEVBQWQ7QUFDQUcsR0FBRyxDQUFDQyxHQUFKLENBQVFILE9BQU8sQ0FBQ0YsSUFBSSxDQUFDTSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsV0FBckIsQ0FBRCxDQUFmO0FBQ0FILEdBQUcsQ0FBQ0MsR0FBSixDQUFRRixNQUFNLEVBQWQ7QUFFQUMsR0FBRyxDQUFDSSxNQUFKLENBQVcsSUFBWCxFIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgS29hID0gcmVxdWlyZSgna29hJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IGhlbG1ldCA9IHJlcXVpcmUoJ2tvYS1oZWxtZXQnKVxuY29uc3Qgc3RhdGljcyA9IHJlcXVpcmUoJ2tvYS1zdGF0aWMnKVxuXG5jb25zdCByb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcy9pbmRleCcpXG5cbmNvbnN0IGFwcCA9IG5ldyBLb2EoKVxuXG5hcHAudXNlKGhlbG1ldCgpKVxuYXBwLnVzZShzdGF0aWNzKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMnKSkpXG5hcHAudXNlKHJvdXRlcigpKVxuXG5hcHAubGlzdGVuKDMwMDApIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/a.js":
/*!*************************!*\
  !*** ./src/routes/a.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst router = new Router();\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2EuanM/MWIzYiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwicm91dGVyIiwiYSIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUF0Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUYsTUFBSixFQUFmOztBQUVBLE1BQU1HLENBQUMsR0FBR0YsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFqQjs7QUFFQUMsTUFBTSxDQUFDRSxHQUFQLENBQVcsSUFBWCxFQUFpQkQsQ0FBakI7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2tvYS1yb3V0ZXInKVxuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKClcblxuY29uc3QgYSA9IHJlcXVpcmUoJy4uL2FwaS9hJylcblxucm91dGVyLmdldCgnL2EnLCBhKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/a.js\n");

/***/ }),

/***/ "./src/routes/b.js":
/*!*************************!*\
  !*** ./src/routes/b.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst router = new Router();\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2IuanM/NWFhYiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwicm91dGVyIiwiYiIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUF0Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUYsTUFBSixFQUFmOztBQUVBLE1BQU1HLENBQUMsR0FBR0YsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFqQjs7QUFFQUMsTUFBTSxDQUFDRSxHQUFQLENBQVcsSUFBWCxFQUFpQkQsQ0FBakI7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2tvYS1yb3V0ZXInKVxuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKClcblxuY29uc3QgYiA9IHJlcXVpcmUoJy4uL2FwaS9iJylcblxucm91dGVyLmdldCgnL2InLCBiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/b.js\n");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const koaCombineRouters = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst a = __webpack_require__(/*! ./a */ \"./src/routes/a.js\");\n\nconst b = __webpack_require__(/*! ./b */ \"./src/routes/b.js\");\n\nmodule.exports = koaCombineRouters(a, b);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LmpzP2UyNmMiXSwibmFtZXMiOlsia29hQ29tYmluZVJvdXRlcnMiLCJyZXF1aXJlIiwiYSIsImIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxpQkFBaUIsR0FBR0MsbUJBQU8sQ0FBQyxnREFBRCxDQUFqQzs7QUFFQSxNQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsOEJBQUQsQ0FBakI7O0FBQ0EsTUFBTUUsQ0FBQyxHQUFHRixtQkFBTyxDQUFDLDhCQUFELENBQWpCOztBQUNBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLGlCQUFpQixDQUFDRSxDQUFELEVBQUdDLENBQUgsQ0FBbEMiLCJmaWxlIjoiLi9zcmMvcm91dGVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga29hQ29tYmluZVJvdXRlcnMgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJylcblxuY29uc3QgYSA9IHJlcXVpcmUoJy4vYScpXG5jb25zdCBiID0gcmVxdWlyZSgnLi9iJylcbm1vZHVsZS5leHBvcnRzID0ga29hQ29tYmluZVJvdXRlcnMoYSxiKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/index.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });