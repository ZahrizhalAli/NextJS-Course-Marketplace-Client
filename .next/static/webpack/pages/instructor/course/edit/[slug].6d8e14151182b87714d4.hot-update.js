"use strict";
self["webpackHotUpdate_N_E"]("pages/instructor/course/edit/[slug]",{

/***/ "./components/forms/CourseCreateForm.js":
/*!**********************************************!*\
  !*** ./components/forms/CourseCreateForm.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var Option = antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option;

var CourseCreateForm = function CourseCreateForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      handleChange = _ref.handleChange,
      handleImage = _ref.handleImage,
      values = _ref.values,
      handleImageRemove = _ref.handleImageRemove,
      _ref$editPage = _ref.editPage,
      editPage = _ref$editPage === void 0 ? false : _ref$editPage,
      setValues = _ref.setValues,
      preview = _ref.preview,
      uploadButtonText = _ref.uploadButtonText;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "  "
  }, void 0, false);
};

_c = CourseCreateForm;
/* harmony default export */ __webpack_exports__["default"] = (CourseCreateForm);

var _c;

$RefreshReg$(_c, "CourseCreateForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2UvZWRpdC9bc2x1Z10uNmQ4ZTE0MTUxMTgyYjg3NzE0ZDQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0lBRVFNLFNBQVdKOztBQUVuQixJQUFNSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BVW5CO0FBQUEsTUFUSkMsWUFTSSxRQVRKQSxZQVNJO0FBQUEsTUFSSkMsWUFRSSxRQVJKQSxZQVFJO0FBQUEsTUFQSkMsV0FPSSxRQVBKQSxXQU9JO0FBQUEsTUFOSkMsTUFNSSxRQU5KQSxNQU1JO0FBQUEsTUFMSkMsaUJBS0ksUUFMSkEsaUJBS0k7QUFBQSwyQkFKSkMsUUFJSTtBQUFBLE1BSkpBLFFBSUksOEJBSk8sS0FJUDtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLE1BRkpDLE9BRUksUUFGSkEsT0FFSTtBQUFBLE1BREpDLGdCQUNJLFFBREpBLGdCQUNJO0FBQ0osc0JBQVM7QUFBQTtBQUFBLG1CQUFUO0FBRUQsQ0FiRDs7S0FBTVQ7QUFlTiwrREFBZUEsZ0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9Db3Vyc2VDcmVhdGVGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsZWN0LCBCdXR0b24sIEF2YXRhciwgQmFkZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IENvdXJzZUNyZWF0ZUZvcm0gPSAoe1xyXG4gIGhhbmRsZVN1Ym1pdCxcclxuICBoYW5kbGVDaGFuZ2UsXHJcbiAgaGFuZGxlSW1hZ2UsXHJcbiAgdmFsdWVzLFxyXG4gIGhhbmRsZUltYWdlUmVtb3ZlLFxyXG4gIGVkaXRQYWdlID0gZmFsc2UsXHJcbiAgc2V0VmFsdWVzLFxyXG4gIHByZXZpZXcsXHJcbiAgdXBsb2FkQnV0dG9uVGV4dCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoIDw+ICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlQ3JlYXRlRm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VsZWN0IiwiQnV0dG9uIiwiQXZhdGFyIiwiQmFkZ2UiLCJPcHRpb24iLCJDb3Vyc2VDcmVhdGVGb3JtIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlSW1hZ2UiLCJ2YWx1ZXMiLCJoYW5kbGVJbWFnZVJlbW92ZSIsImVkaXRQYWdlIiwic2V0VmFsdWVzIiwicHJldmlldyIsInVwbG9hZEJ1dHRvblRleHQiXSwic291cmNlUm9vdCI6IiJ9