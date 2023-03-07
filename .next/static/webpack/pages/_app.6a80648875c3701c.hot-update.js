"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RainbowKitProvider\": function() { return /* reexport safe */ _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.RainbowKitProvider; },\n/* harmony export */   \"WagmiConfig\": function() { return /* reexport safe */ wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"./node_modules/wagmi/dist/providers/alchemy.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n/* harmony import */ var _layout_mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/mainLayout */ \"./layout/mainLayout.jsx\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.goerli,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygonMumbai,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.optimismGoerli,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrum,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrumGoerli\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__.alchemyProvider)({\n        apiKey: process.env.ALCHEMY_API_KEY\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.getDefaultWallets)({\n    appName: \"My Alchemy DApp\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.RainbowKitProvider, {\n            modalSize: \"compact\",\n            initialChain: \"\",\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_mainLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Xswap/web3/zero-dapp/pages/_app.js\",\n                    lineNumber: 55,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Xswap/web3/zero-dapp/pages/_app.js\",\n                lineNumber: 54,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/admin/Xswap/web3/zero-dapp/pages/_app.js\",\n            lineNumber: 49,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Xswap/web3/zero-dapp/pages/_app.js\",\n        lineNumber: 48,\n        columnNumber: 3\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ1k7QUFFb0M7QUFDWjtBQVU3QztBQUNvQztBQUNGO0FBQ1Y7QUFFOUMsTUFBTSxFQUFFZ0IsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR2Ysc0RBQWVBLENBQzNDO0lBQ0NHLGlEQUFPQTtJQUNQSSxnREFBTUE7SUFDTkgsaURBQU9BO0lBQ1BJLHVEQUFhQTtJQUNiSCxrREFBUUE7SUFDUkksd0RBQWNBO0lBQ2RILGtEQUFRQTtJQUNSSSx3REFBY0E7Q0FDZCxFQUNEO0lBQUNDLHdFQUFlQSxDQUFDO1FBQUVLLFFBQVFDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtJQUFDO0lBQUlQLHNFQUFjQTtDQUFHO0FBRzdFLE1BQU0sRUFBRVEsV0FBVSxFQUFFLEdBQUd0Qix5RUFBaUJBLENBQUM7SUFDeEN1QixTQUFTO0lBQ1RQO0FBQ0Q7QUFFQSxNQUFNUSxjQUFjckIsbURBQVlBLENBQUM7SUFDaENzQixhQUFhLElBQUk7SUFDakJIO0lBQ0FMO0FBQ0Q7QUFFMkM7QUFDM0MsU0FBU1MsTUFBTSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCO0lBQ2QscUJBQ0MsOERBQUN4Qiw4Q0FBV0E7UUFBQ3lCLFFBQVFMO2tCQUNwQiw0RUFBQ3ZCLHNFQUFrQkE7WUFDbEI2QixXQUFVO1lBQ1ZDLGNBQWNaLEVBQXFDO1lBQ25ESCxRQUFRQTtzQkFFUiw0RUFBQ0QsMERBQVVBOzBCQUNWLDRFQUFDWTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0I7S0FkU0Y7QUFnQlQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7IGdldERlZmF1bHRXYWxsZXRzLCBSYWluYm93S2l0UHJvdmlkZXIgfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IHsgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQge1xuXHRtYWlubmV0LFxuXHRwb2x5Z29uLFxuXHRvcHRpbWlzbSxcblx0YXJiaXRydW0sXG5cdGdvZXJsaSxcblx0cG9seWdvbk11bWJhaSxcblx0b3B0aW1pc21Hb2VybGksXG5cdGFyYml0cnVtR29lcmxpLFxufSBmcm9tIFwid2FnbWkvY2hhaW5zXCI7XG5pbXBvcnQgeyBhbGNoZW15UHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2FsY2hlbXlcIjtcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9wdWJsaWNcIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi9sYXlvdXQvbWFpbkxheW91dFwiO1xuXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcblx0W1xuXHRcdG1haW5uZXQsXG5cdFx0Z29lcmxpLFxuXHRcdHBvbHlnb24sXG5cdFx0cG9seWdvbk11bWJhaSxcblx0XHRvcHRpbWlzbSxcblx0XHRvcHRpbWlzbUdvZXJsaSxcblx0XHRhcmJpdHJ1bSxcblx0XHRhcmJpdHJ1bUdvZXJsaSxcblx0XSxcblx0W2FsY2hlbXlQcm92aWRlcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuQUxDSEVNWV9BUElfS0VZIH0pLCBwdWJsaWNQcm92aWRlcigpXVxuKTtcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG5cdGFwcE5hbWU6IFwiTXkgQWxjaGVteSBEQXBwXCIsXG5cdGNoYWlucyxcbn0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG5cdGF1dG9Db25uZWN0OiB0cnVlLFxuXHRjb25uZWN0b3JzLFxuXHRwcm92aWRlcixcbn0pO1xuXG5leHBvcnQgeyBXYWdtaUNvbmZpZywgUmFpbmJvd0tpdFByb3ZpZGVyIH07XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG5cdFx0XHQ8UmFpbmJvd0tpdFByb3ZpZGVyXG5cdFx0XHRcdG1vZGFsU2l6ZT1cImNvbXBhY3RcIlxuXHRcdFx0XHRpbml0aWFsQ2hhaW49e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFRkFVTFRfQ0hBSU59XG5cdFx0XHRcdGNoYWlucz17Y2hhaW5zfVxuXHRcdFx0PlxuXHRcdFx0XHQ8TWFpbkxheW91dD5cblx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHRcdDwvTWFpbkxheW91dD5cblx0XHRcdDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuXHRcdDwvV2FnbWlDb25maWc+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJtYWlubmV0IiwicG9seWdvbiIsIm9wdGltaXNtIiwiYXJiaXRydW0iLCJnb2VybGkiLCJwb2x5Z29uTXVtYmFpIiwib3B0aW1pc21Hb2VybGkiLCJhcmJpdHJ1bUdvZXJsaSIsImFsY2hlbXlQcm92aWRlciIsInB1YmxpY1Byb3ZpZGVyIiwiTWFpbkxheW91dCIsImNoYWlucyIsInByb3ZpZGVyIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFMQ0hFTVlfQVBJX0tFWSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwibW9kYWxTaXplIiwiaW5pdGlhbENoYWluIiwiTkVYVF9QVUJMSUNfREVGQVVMVF9DSEFJTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});