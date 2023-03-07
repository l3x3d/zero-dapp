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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RainbowKitProvider\": function() { return /* reexport safe */ _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.RainbowKitProvider; },\n/* harmony export */   \"WagmiConfig\": function() { return /* reexport safe */ wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"./node_modules/wagmi/dist/providers/alchemy.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n/* harmony import */ var _layout_mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/mainLayout */ \"./layout/mainLayout.jsx\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.goerli,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygonMumbai,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.optimismGoerli,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrum,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrumGoerli\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__.alchemyProvider)({\n        apiKey: process.env.ALCHEMY_API_KEY\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.getDefaultWallets)({\n    appName: \"My Alchemy DApp\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.RainbowKitProvider, {\n            modalSize: \"compact\",\n            initialChain: process.env.NEXT_PUBLIC_DEFAULT_CHAIN,\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_mainLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Xswap/web3/zero-dapp/pages/_app.js\",\n                    lineNumber: 55,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Xswap/web3/zero-dapp/pages/_app.js\",\n                lineNumber: 54,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/admin/Xswap/web3/zero-dapp/pages/_app.js\",\n            lineNumber: 49,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Xswap/web3/zero-dapp/pages/_app.js\",\n        lineNumber: 48,\n        columnNumber: 3\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ1k7QUFFb0M7QUFDWjtBQVU3QztBQUNvQztBQUNGO0FBQ1Y7QUFFOUMsTUFBTSxFQUFFZ0IsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR2Ysc0RBQWVBLENBQzNDO0lBQ0NHLGlEQUFPQTtJQUNQSSxnREFBTUE7SUFDTkgsaURBQU9BO0lBQ1BJLHVEQUFhQTtJQUNiSCxrREFBUUE7SUFDUkksd0RBQWNBO0lBQ2RILGtEQUFRQTtJQUNSSSx3REFBY0E7Q0FDZCxFQUNEO0lBQUNDLHdFQUFlQSxDQUFDO1FBQUVLLFFBQVFDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtJQUFDO0lBQUlQLHNFQUFjQTtDQUFHO0FBRzdFLE1BQU0sRUFBRVEsV0FBVSxFQUFFLEdBQUd0Qix5RUFBaUJBLENBQUM7SUFDeEN1QixTQUFTO0lBQ1RQO0FBQ0Q7QUFFQSxNQUFNUSxjQUFjckIsbURBQVlBLENBQUM7SUFDaENzQixhQUFhLElBQUk7SUFDakJIO0lBQ0FMO0FBQ0Q7QUFFMkM7QUFDM0MsU0FBU1MsTUFBTSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCO0lBQ2QscUJBQ0MsOERBQUN4Qiw4Q0FBV0E7UUFBQ3lCLFFBQVFMO2tCQUNwQiw0RUFBQ3ZCLHNFQUFrQkE7WUFDbEI2QixXQUFVO1lBQ1ZDLGNBQWNaLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ1kseUJBQXlCO1lBQ25EaEIsUUFBUUE7c0JBRVIsNEVBQUNELDBEQUFVQTswQkFDViw0RUFBQ1k7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0tBZFNGO0FBZ0JULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHtcblx0bWFpbm5ldCxcblx0cG9seWdvbixcblx0b3B0aW1pc20sXG5cdGFyYml0cnVtLFxuXHRnb2VybGksXG5cdHBvbHlnb25NdW1iYWksXG5cdG9wdGltaXNtR29lcmxpLFxuXHRhcmJpdHJ1bUdvZXJsaSxcbn0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9hbGNoZW15XCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vbGF5b3V0L21haW5MYXlvdXRcIjtcblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG5cdFtcblx0XHRtYWlubmV0LFxuXHRcdGdvZXJsaSxcblx0XHRwb2x5Z29uLFxuXHRcdHBvbHlnb25NdW1iYWksXG5cdFx0b3B0aW1pc20sXG5cdFx0b3B0aW1pc21Hb2VybGksXG5cdFx0YXJiaXRydW0sXG5cdFx0YXJiaXRydW1Hb2VybGksXG5cdF0sXG5cdFthbGNoZW15UHJvdmlkZXIoeyBhcGlLZXk6IHByb2Nlc3MuZW52LkFMQ0hFTVlfQVBJX0tFWSB9KSwgcHVibGljUHJvdmlkZXIoKV1cbik7XG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuXHRhcHBOYW1lOiBcIk15IEFsY2hlbXkgREFwcFwiLFxuXHRjaGFpbnMsXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuXHRhdXRvQ29ubmVjdDogdHJ1ZSxcblx0Y29ubmVjdG9ycyxcblx0cHJvdmlkZXIsXG59KTtcblxuZXhwb3J0IHsgV2FnbWlDb25maWcsIFJhaW5ib3dLaXRQcm92aWRlciB9O1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cdHJldHVybiAoXG5cdFx0PFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuXHRcdFx0PFJhaW5ib3dLaXRQcm92aWRlclxuXHRcdFx0XHRtb2RhbFNpemU9XCJjb21wYWN0XCJcblx0XHRcdFx0aW5pdGlhbENoYWluPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERUZBVUxUX0NIQUlOfVxuXHRcdFx0XHRjaGFpbnM9e2NoYWluc31cblx0XHRcdD5cblx0XHRcdFx0PE1haW5MYXlvdXQ+XG5cdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0XHQ8L01haW5MYXlvdXQ+XG5cdFx0XHQ8L1JhaW5ib3dLaXRQcm92aWRlcj5cblx0XHQ8L1dhZ21pQ29uZmlnPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwibWFpbm5ldCIsInBvbHlnb24iLCJvcHRpbWlzbSIsImFyYml0cnVtIiwiZ29lcmxpIiwicG9seWdvbk11bWJhaSIsIm9wdGltaXNtR29lcmxpIiwiYXJiaXRydW1Hb2VybGkiLCJhbGNoZW15UHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsIk1haW5MYXlvdXQiLCJjaGFpbnMiLCJwcm92aWRlciIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBTENIRU1ZX0FQSV9LRVkiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsIm1vZGFsU2l6ZSIsImluaXRpYWxDaGFpbiIsIk5FWFRfUFVCTElDX0RFRkFVTFRfQ0hBSU4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});