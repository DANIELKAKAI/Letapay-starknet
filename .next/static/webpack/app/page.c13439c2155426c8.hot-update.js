"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/payment.tsx.tsx":
/*!****************************************!*\
  !*** ./src/components/payment.tsx.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Payment; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @starknet-react/core */ \"(app-pages-browser)/./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var _utils_letapay_abi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/letapay-abi.json */ \"(app-pages-browser)/./src/utils/letapay-abi.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst contractAddress = \"0x370e8d045fd18a8fe513e84fb14a6a49a559bc89a03e892efbe22ba264b4f7b\";\nfunction AddPayment() {\n    _s();\n    const [recieverAddress, setRecieverAddress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"0x4aeb380faf2e45fa1c307c421a2726011f9d7a1f7e991b8a0486a3ffee3fe66\");\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [paymentId, setPayment] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const { address } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    const [res, getRes] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const { contract } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useContract)({\n        abi: _utils_letapay_abi_json__WEBPACK_IMPORTED_MODULE_2__,\n        address: contractAddress\n    });\n    const getPayment = ()=>{\n        contract.get_payment(paymentId).then((res)=>{\n            console.log(res);\n            setRes(res);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    const calls = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{\n        const calldata = [\n            paymentId,\n            recieverAddress,\n            amount\n        ];\n        return {\n            contractAddress: contractAddress,\n            entrypoint: \"add_payment\",\n            calldata\n        };\n    }, [\n        paymentId,\n        recieverAddress,\n        amount\n    ]);\n    const { write, isLoading, data } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useContractWrite)({\n        calls\n    });\n    function execute() {\n        // trigger the transaction\n        write();\n    }\n    /*\n    const calls = useMemo(() => {\n        if (!address || !contract) return [];\n        return [contract.populate(\"add_payment\", [paymentId, recieverAddress, amount])];\n    }, [contract, paymentId, recieverAddress, amount]);\n\n    const { write } = useContractWrite({\n        calls,\n    });\n\n    function execute() {\n        write();\n    }\n    */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Payment ID\"\n            }, void 0, false, {\n                fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: paymentId,\n                onChange: (e)=>setPayment(e.target.value),\n                type: \"number\"\n            }, void 0, false, {\n                fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Receiver Address\"\n            }, void 0, false, {\n                fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: recieverAddress,\n                onChange: (e)=>setRecieverAddress(e.target.value),\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Amount\"\n            }, void 0, false, {\n                fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: amount,\n                onChange: (e)=>setAmount(e.target.value),\n                type: \"number\"\n            }, void 0, false, {\n                fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: execute,\n                children: \"Add Payment\"\n            }, void 0, false, {\n                fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getPayment,\n                children: \" get payment\"\n            }, void 0, false, {\n                fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AddPayment, \"4sac9n37pi6Gk9/pA3BozLY5/rg=\", false, function() {\n    return [\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useContract,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useContractWrite\n    ];\n});\n_c = AddPayment;\nfunction Blank() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Blank;\nfunction Payment() {\n    _s1();\n    const { address, isConnecting, isDisconnected } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    return address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddPayment, {}, void 0, false, {\n        fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n        lineNumber: 100,\n        columnNumber: 22\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Blank, {}, void 0, false, {\n        fileName: \"/Users/daniel.kakai/Desktop/old-projects/starknet-react/letapay/src/components/payment.tsx.tsx\",\n        lineNumber: 100,\n        columnNumber: 39\n    }, this);\n}\n_s1(Payment, \"ybh2Wt+gSVNaf4BnkDwj1mNEmxQ=\", false, function() {\n    return [\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount\n    ];\n});\n_c2 = Payment;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"AddPayment\");\n$RefreshReg$(_c1, \"Blank\");\n$RefreshReg$(_c2, \"Payment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3BheW1lbnQudHN4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRztBQUN0RDtBQUNLO0FBSWpELE1BQU1PLGtCQUFrQjtBQUV4QixTQUFTQzs7SUFDTCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBYztJQUNsRCxNQUFNLENBQUNRLFdBQVdDLFdBQVcsR0FBR1QsK0NBQVFBLENBQWM7SUFDdEQsTUFBTSxFQUFFVSxPQUFPLEVBQUUsR0FBR2YsZ0VBQVVBO0lBQzlCLE1BQU0sQ0FBQ2dCLEtBQUtDLE9BQU8sR0FBR1osK0NBQVFBO0lBRTlCLE1BQU0sRUFBRWEsUUFBUSxFQUFFLEdBQUdoQixpRUFBV0EsQ0FBQztRQUM3QkMsS0FBS0Esb0RBQUdBO1FBQ1JZLFNBQVNSO0lBQ2I7SUFFQSxNQUFNWSxhQUFhO1FBQ2ZELFNBQVNFLFdBQVcsQ0FBQ1AsV0FBV1EsSUFBSSxDQUFDTCxDQUFBQTtZQUNqQ00sUUFBUUMsR0FBRyxDQUFDUDtZQUNaUSxPQUFPUjtRQUNYLEdBQUdTLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEosUUFBUUMsR0FBRyxDQUFDRztRQUNoQjtJQUNKO0lBRUEsTUFBTUMsUUFBUXJCLDhDQUFPQSxDQUFDO1FBQ2xCLE1BQU1zQixXQUFXO1lBQ2JmO1lBQ0FKO1lBQ0FFO1NBQ0g7UUFFRCxPQUFPO1lBQ0hKLGlCQUFpQkE7WUFDakJzQixZQUFZO1lBQ1pEO1FBQ0o7SUFDSixHQUFHO1FBQUNmO1FBQVdKO1FBQWlCRTtLQUFPO0lBRXZDLE1BQU0sRUFBRW1CLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUUsR0FBRy9CLHNFQUFnQkEsQ0FBQztRQUNoRDBCO0lBQ0o7SUFFQSxTQUFTTTtRQUNMLDBCQUEwQjtRQUMxQkg7SUFDSjtJQUVBOzs7Ozs7Ozs7Ozs7O0lBYUEsR0FFQSxxQkFDSTs7MEJBQ0ksOERBQUNJOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUFNQyxPQUFPdkI7Z0JBQVd3QixVQUFVLENBQUNDLElBQU14QixXQUFXd0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUFHSSxNQUFLOzs7Ozs7MEJBRTNFLDhEQUFDTjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFBTUMsT0FBTzNCO2dCQUFpQjRCLFVBQVUsQ0FBQ0MsSUFBTTVCLG1CQUFtQjRCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFBR0ksTUFBSzs7Ozs7OzBCQUV6Riw4REFBQ047MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQU1DLE9BQU96QjtnQkFBUTBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFVBQVUwQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQUdJLE1BQUs7Ozs7OzswQkFFdkUsOERBQUNDO2dCQUFPRCxNQUFLO2dCQUFTRSxTQUFTVDswQkFBUzs7Ozs7OzBCQUl4Qyw4REFBQ1E7Z0JBQU9DLFNBQVN2QjswQkFBWTs7Ozs7Ozs7QUFLekM7R0EvRVNYOztRQUllUiw0REFBVUE7UUFHVEUsNkRBQVdBO1FBNEJHRCxrRUFBZ0JBOzs7S0FuQzlDTztBQWlGVCxTQUFTbUM7SUFDTCxxQkFDSSw4REFBQ0M7Ozs7O0FBR1Q7TUFMU0Q7QUFPTSxTQUFTRTs7SUFDcEIsTUFBTSxFQUFFOUIsT0FBTyxFQUFFK0IsWUFBWSxFQUFFQyxjQUFjLEVBQUUsR0FBRy9DLGdFQUFVQTtJQUU1RCxPQUFPZSx3QkFBVSw4REFBQ1A7Ozs7NkJBQWdCLDhEQUFDbUM7Ozs7O0FBQ3ZDO0lBSndCRTs7UUFDOEI3Qyw0REFBVUE7OztNQUR4QzZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BheW1lbnQudHN4LnRzeD8xNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCwgdXNlQ29udHJhY3RXcml0ZSwgdXNlQ29udHJhY3QgfSBmcm9tIFwiQHN0YXJrbmV0LXJlYWN0L2NvcmVcIjtcbmltcG9ydCBhYmkgZnJvbSAnLi4vdXRpbHMvbGV0YXBheS1hYmkuanNvbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0YXJrIH0gZnJvbSAnc3RhcmtuZXQnO1xuXG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHgzNzBlOGQwNDVmZDE4YThmZTUxM2U4NGZiMTRhNmE0OWE1NTliYzg5YTAzZTg5MmVmYmUyMmJhMjY0YjRmN2JcIjtcblxuZnVuY3Rpb24gQWRkUGF5bWVudCgpIHtcbiAgICBjb25zdCBbcmVjaWV2ZXJBZGRyZXNzLCBzZXRSZWNpZXZlckFkZHJlc3NdID0gdXNlU3RhdGUoXCIweDRhZWIzODBmYWYyZTQ1ZmExYzMwN2M0MjFhMjcyNjAxMWY5ZDdhMWY3ZTk5MWI4YTA0ODZhM2ZmZWUzZmU2NlwiKTtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGU8bnVtYmVyIHwgJyc+KDApOztcbiAgICBjb25zdCBbcGF5bWVudElkLCBzZXRQYXltZW50XSA9IHVzZVN0YXRlPG51bWJlciB8ICcnPigwKTs7XG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG4gICAgY29uc3QgW3JlcywgZ2V0UmVzXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VDb250cmFjdCh7XG4gICAgICAgIGFiaTogYWJpLFxuICAgICAgICBhZGRyZXNzOiBjb250cmFjdEFkZHJlc3MsXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRQYXltZW50ID0gKCkgPT4ge1xuICAgICAgICBjb250cmFjdC5nZXRfcGF5bWVudChwYXltZW50SWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBzZXRSZXMocmVzKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGRhdGEgPSBbXG4gICAgICAgICAgICBwYXltZW50SWQsXG4gICAgICAgICAgICByZWNpZXZlckFkZHJlc3MsXG4gICAgICAgICAgICBhbW91bnRcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgICBlbnRyeXBvaW50OiBcImFkZF9wYXltZW50XCIsXG4gICAgICAgICAgICBjYWxsZGF0YSxcbiAgICAgICAgfTtcbiAgICB9LCBbcGF5bWVudElkLCByZWNpZXZlckFkZHJlc3MsIGFtb3VudF0pO1xuXG4gICAgY29uc3QgeyB3cml0ZSwgaXNMb2FkaW5nLCBkYXRhIH0gPSB1c2VDb250cmFjdFdyaXRlKHtcbiAgICAgICAgY2FsbHMsXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICAgICAvLyB0cmlnZ2VyIHRoZSB0cmFuc2FjdGlvblxuICAgICAgICB3cml0ZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgY29uc3QgY2FsbHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFhZGRyZXNzIHx8ICFjb250cmFjdCkgcmV0dXJuIFtdO1xuICAgICAgICByZXR1cm4gW2NvbnRyYWN0LnBvcHVsYXRlKFwiYWRkX3BheW1lbnRcIiwgW3BheW1lbnRJZCwgcmVjaWV2ZXJBZGRyZXNzLCBhbW91bnRdKV07XG4gICAgfSwgW2NvbnRyYWN0LCBwYXltZW50SWQsIHJlY2lldmVyQWRkcmVzcywgYW1vdW50XSk7XG5cbiAgICBjb25zdCB7IHdyaXRlIH0gPSB1c2VDb250cmFjdFdyaXRlKHtcbiAgICAgICAgY2FsbHMsXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICAgICB3cml0ZSgpO1xuICAgIH1cbiAgICAqL1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxsYWJlbD5QYXltZW50IElEPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cGF5bWVudElkfSBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnQoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwibnVtYmVyXCI+PC9pbnB1dD5cblxuICAgICAgICAgICAgPGxhYmVsPlJlY2VpdmVyIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtyZWNpZXZlckFkZHJlc3N9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVjaWV2ZXJBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT1cInRleHRcIj48L2lucHV0PlxuXG4gICAgICAgICAgICA8bGFiZWw+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17YW1vdW50fSBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9IHR5cGU9XCJudW1iZXJcIj48L2lucHV0PlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtleGVjdXRlfT5cbiAgICAgICAgICAgICAgICBBZGQgUGF5bWVudFxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0UGF5bWVudH0+IGdldCBwYXltZW50PC9idXR0b24+XG5cbiAgICAgICAgICAgIHt9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQmxhbmsoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF5bWVudCgpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGluZywgaXNEaXNjb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcblxuICAgIHJldHVybiBhZGRyZXNzID8gPEFkZFBheW1lbnQgLz4gOiA8QmxhbmsgLz47XG59Il0sIm5hbWVzIjpbInVzZUFjY291bnQiLCJ1c2VDb250cmFjdFdyaXRlIiwidXNlQ29udHJhY3QiLCJhYmkiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsImNvbnRyYWN0QWRkcmVzcyIsIkFkZFBheW1lbnQiLCJyZWNpZXZlckFkZHJlc3MiLCJzZXRSZWNpZXZlckFkZHJlc3MiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJwYXltZW50SWQiLCJzZXRQYXltZW50IiwiYWRkcmVzcyIsInJlcyIsImdldFJlcyIsImNvbnRyYWN0IiwiZ2V0UGF5bWVudCIsImdldF9wYXltZW50IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRSZXMiLCJjYXRjaCIsImVyciIsImNhbGxzIiwiY2FsbGRhdGEiLCJlbnRyeXBvaW50Iiwid3JpdGUiLCJpc0xvYWRpbmciLCJkYXRhIiwiZXhlY3V0ZSIsImxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwiQmxhbmsiLCJkaXYiLCJQYXltZW50IiwiaXNDb25uZWN0aW5nIiwiaXNEaXNjb25uZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/payment.tsx.tsx\n"));

/***/ })

});