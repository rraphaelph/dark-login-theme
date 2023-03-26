/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/App.module.css":
/*!******************************!*\
  !*** ./pages/App.module.css ***!
  \******************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"body\": \"App_body__CHEOp\",\n\t\"light\": \"App_light__21knV\",\n\t\"dark\": \"App_dark___6auQ\",\n\t\"themeToggle\": \"App_themeToggle__xmvoN\",\n\t\"loginHeading\": \"App_loginHeading__TZNKe\",\n\t\"loginInput\": \"App_loginInput__Ioc2K\",\n\t\"loginButton\": \"App_loginButton__50YMU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BcHAubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21ldS1wcm9qZXRvLXJlYWN0Ly4vcGFnZXMvQXBwLm1vZHVsZS5jc3M/MTc1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib2R5XCI6IFwiQXBwX2JvZHlfX0NIRU9wXCIsXG5cdFwibGlnaHRcIjogXCJBcHBfbGlnaHRfXzIxa25WXCIsXG5cdFwiZGFya1wiOiBcIkFwcF9kYXJrX19fNmF1UVwiLFxuXHRcInRoZW1lVG9nZ2xlXCI6IFwiQXBwX3RoZW1lVG9nZ2xlX194bXZvTlwiLFxuXHRcImxvZ2luSGVhZGluZ1wiOiBcIkFwcF9sb2dpbkhlYWRpbmdfX1RaTktlXCIsXG5cdFwibG9naW5JbnB1dFwiOiBcIkFwcF9sb2dpbklucHV0X19Jb2MyS1wiLFxuXHRcImxvZ2luQnV0dG9uXCI6IFwiQXBwX2xvZ2luQnV0dG9uX181MFlNVVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/App.module.css\n");

/***/ }),

/***/ "./pages/App.tsx":
/*!***********************!*\
  !*** ./pages/App.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.module.css */ \"./pages/App.module.css\");\n/* harmony import */ var _App_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _GlobaStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobaStyle */ \"./pages/GlobaStyle.ts\");\n\n\n\n\nfunction App() {\n    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleThemeChange = ()=>{\n        setIsDarkMode((prevIsDarkMode)=>!prevIsDarkMode);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"Email: \", email, \" Password: \", password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `${isDarkMode ? (_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark) : (_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().light)}`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobaStyle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().themeToggle),\n                onClick: handleThemeChange,\n                children: isDarkMode ? \"Switch to Light Theme\" : \"Switch to Dark Theme\"\n            }, void 0, false, {\n                fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().loginHeading),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Email:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().loginInput),\n                                type: \"email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().loginInput),\n                                type: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().loginButton),\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/App.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BcHAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNLO0FBQ0M7QUFFdkMsU0FBU0csTUFBTTtJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xELE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFFekMsTUFBTVUsb0JBQW9CLElBQU07UUFDOUJMLGNBQWMsQ0FBQ00saUJBQW1CLENBQUNBO0lBQ3JDO0lBQ0EsTUFBTUMsZUFBZSxDQUFDQyxRQUE0QztRQUNoRUEsTUFBTUMsY0FBYztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDLFdBQVdWLE9BQU8sZUFBZUU7SUFDL0M7SUFFQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVyxDQUFDLEVBQUVkLGFBQWFILDZEQUFXLEdBQUdBLDhEQUFZLENBQUMsQ0FBQzs7MEJBQzFELDhEQUFDQyxtREFBV0E7Ozs7OzBCQUNaLDhEQUFDbUI7Z0JBQU9ILFdBQVdqQixvRUFBa0I7Z0JBQUVzQixTQUFTYjswQkFDN0NOLGFBQWEsMEJBQTBCLHNCQUFzQjs7Ozs7OzBCQUVoRSw4REFBQ29CO2dCQUFHTixXQUFXakIscUVBQW1COzBCQUFFOzs7Ozs7MEJBQ3BDLDhEQUFDeUI7Z0JBQUtDLFVBQVVmOztrQ0FDZCw4REFBQ2dCOzs0QkFBTTswQ0FFTCw4REFBQ0M7Z0NBQ0NYLFdBQVdqQixtRUFBaUI7Z0NBQzVCOEIsTUFBSztnQ0FDTEMsT0FBTzFCO2dDQUNQMkIsVUFBVSxDQUFDQyxJQUFNM0IsU0FBUzJCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUc1Qyw4REFBQ0o7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FDQ1gsV0FBV2pCLG1FQUFpQjtnQ0FDNUI4QixNQUFLO2dDQUNMQyxPQUFPeEI7Z0NBQ1B5QixVQUFVLENBQUNDLElBQU16QixZQUFZeUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7a0NBRy9DLDhEQUFDWDt3QkFBT0gsV0FBV2pCLG9FQUFrQjt3QkFBRThCLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03RDtBQUVBLGlFQUFlNUIsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ldS1wcm9qZXRvLXJlYWN0Ly4vcGFnZXMvQXBwLnRzeD9lYTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0FwcC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4vR2xvYmFTdHlsZVwiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVUaGVtZUNoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRJc0RhcmtNb2RlKChwcmV2SXNEYXJrTW9kZSkgPT4gIXByZXZJc0RhcmtNb2RlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJFbWFpbDogXCIsIGVtYWlsLCBcIiBQYXNzd29yZDogXCIsIHBhc3N3b3JkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc0RhcmtNb2RlID8gc3R5bGVzLmRhcmsgOiBzdHlsZXMubGlnaHR9YH0+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMudGhlbWVUb2dnbGV9IG9uQ2xpY2s9e2hhbmRsZVRoZW1lQ2hhbmdlfT5cbiAgICAgICAge2lzRGFya01vZGUgPyBcIlN3aXRjaCB0byBMaWdodCBUaGVtZVwiIDogXCJTd2l0Y2ggdG8gRGFyayBUaGVtZVwifVxuICAgICAgPC9idXR0b24+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5IZWFkaW5nfT5Mb2dpbjwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5JbnB1dH1cbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbklucHV0fVxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkdsb2JhbFN0eWxlIiwiQXBwIiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVRoZW1lQ2hhbmdlIiwicHJldklzRGFya01vZGUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImRhcmsiLCJsaWdodCIsImJ1dHRvbiIsInRoZW1lVG9nZ2xlIiwib25DbGljayIsImgxIiwibG9naW5IZWFkaW5nIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsImxvZ2luSW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJsb2dpbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/App.tsx\n");

/***/ }),

/***/ "./pages/GlobaStyle.ts":
/*!*****************************!*\
  !*** ./pages/GlobaStyle.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n  }\n\n  /* Adicione outros estilos globais aqui */\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HbG9iYVN0eWxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUV0RCxNQUFNQyxjQUFjRCxnRUFBaUIsQ0FBQzs7Ozs7Ozs7QUFRdEMsQ0FBQztBQUVELGlFQUFlQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV1LXByb2pldG8tcmVhY3QvLi9wYWdlcy9HbG9iYVN0eWxlLnRzP2UyNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLyogQWRpY2lvbmUgb3V0cm9zIGVzdGlsb3MgZ2xvYmFpcyBhcXVpICovXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIkdsb2JhbFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/GlobaStyle.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./pages/App.tsx\");\n\n\n\n\nfunction Index() {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const root = document.getElementById(\"root\");\n        react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/index.tsx\",\n            lineNumber: 8,\n            columnNumber: 21\n        }, this), root);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"root\"\n    }, void 0, false, {\n        fileName: \"/home/raphael/Desktop/MyProjects/dark-login-theme/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1I7QUFDVDtBQUV4QixTQUFTSSxRQUFRO0lBQ2ZILGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNSSxPQUFPQyxTQUFTQyxjQUFjLENBQUM7UUFDckNMLHVEQUFlLGVBQUMsOERBQUNDLDRDQUFHQTs7OztrQkFBS0U7SUFDM0IsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNJO1FBQUlDLElBQUc7Ozs7OztBQUNqQjtBQUVBLGlFQUFlTixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV1LXByb2pldG8tcmVhY3QvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcbiAgICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdiBpZD1cInJvb3RcIj48L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiUmVhY3RET00iLCJBcHAiLCJJbmRleCIsInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiZGl2IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();