"use strict";
self["webpackHotUpdate_N_E"]("pages/instructor/course/edit/[slug]",{

/***/ "./components/forms/CourseCreateForm.js":
/*!**********************************************!*\
  !*** ./components/forms/CourseCreateForm.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\BIGPROJECT\\mycourse\\client\\components\\forms\\CourseCreateForm.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Option = antd__WEBPACK_IMPORTED_MODULE_3__.Select.Option;

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "form-group mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        type: "text",
        name: "name",
        placeholder: "Course Title",
        className: "form-control",
        value: values.name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "form-group mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
        name: "description",
        cols: "7",
        rows: "7",
        value: values.description,
        className: "form-control",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "form-row mb-3",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "form-group mb-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
            style: {
              width: "100%"
            },
            size: "large",
            value: values.paid,
            onChange: function onChange(v) {
              return setValues(_objectSpread(_objectSpread({}, values), {}, {
                paid: v,
                price: 0
              }));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {
              value: true,
              children: "Paid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Option, {
              value: false,
              children: "Free"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), values.paid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "col-md-12 ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "form-group",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            type: "number",
            name: "price",
            placeholder: "Course Title",
            className: "form-control",
            value: values.price,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "form-group mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        type: "number",
        name: "category",
        placeholder: "Course Category",
        className: "form-control",
        value: values.category,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "form-row mb-3",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "form-group",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
            className: "btn btn-outline-secondary btn-block text-left",
            children: [uploadButtonText, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "file",
              name: "image",
              onChange: handleImage,
              accept: "image/*",
              hidden: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), preview && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Badge, {
        count: "X",
        onClick: handleImageRemove,
        className: "mt-4 pointer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
          width: 200,
          src: preview
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }, _this), editPage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
        width: 200,
        src: values.image.Location
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 22
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: handleSubmit,
          disabled: values.loading || values.uploading,
          className: "btn btn-primary",
          loading: values.loading,
          type: "primary",
          size: "large",
          shape: "round",
          children: values.loading ? "Saving..." : "Save & Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2UvZWRpdC9bc2x1Z10uNmIwMzlhMGIwMjg3NTA0NzM1NmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0lBRVFNLFNBQVdKOztBQUVuQixJQUFNSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BVW5CO0FBQUEsTUFUSkMsWUFTSSxRQVRKQSxZQVNJO0FBQUEsTUFSSkMsWUFRSSxRQVJKQSxZQVFJO0FBQUEsTUFQSkMsV0FPSSxRQVBKQSxXQU9JO0FBQUEsTUFOSkMsTUFNSSxRQU5KQSxNQU1JO0FBQUEsTUFMSkMsaUJBS0ksUUFMSkEsaUJBS0k7QUFBQSwyQkFKSkMsUUFJSTtBQUFBLE1BSkpBLFFBSUksOEJBSk8sS0FJUDtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLE1BRkpDLE9BRUksUUFGSkEsT0FFSTtBQUFBLE1BREpDLGdCQUNJLFFBREpBLGdCQUNJO0FBQ0osc0JBQ0U7QUFBTSxZQUFRLEVBQUVSLFlBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxtQkFBVyxFQUFDLGNBSGQ7QUFJRSxpQkFBUyxFQUFDLGNBSlo7QUFLRSxhQUFLLEVBQUVHLE1BQU0sQ0FBQ00sSUFMaEI7QUFNRSxnQkFBUSxFQUFFUjtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFXRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxZQUFJLEVBQUMsR0FGUDtBQUdFLFlBQUksRUFBQyxHQUhQO0FBSUUsYUFBSyxFQUFFRSxNQUFNLENBQUNPLFdBSmhCO0FBS0UsaUJBQVMsRUFBQyxjQUxaO0FBTUUsZ0JBQVEsRUFBRVQ7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBcUJFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNFLDhEQUFDLHdDQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUFFVSxjQUFBQSxLQUFLLEVBQUU7QUFBVCxhQURUO0FBRUUsZ0JBQUksRUFBQyxPQUZQO0FBR0UsaUJBQUssRUFBRVIsTUFBTSxDQUFDUyxJQUhoQjtBQUlFLG9CQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxxQkFBT1AsU0FBUyxpQ0FBTUgsTUFBTjtBQUFjUyxnQkFBQUEsSUFBSSxFQUFFQyxDQUFwQjtBQUF1QkMsZ0JBQUFBLEtBQUssRUFBRTtBQUE5QixpQkFBaEI7QUFBQSxhQUpaO0FBQUEsb0NBTUUsOERBQUMsTUFBRDtBQUFRLG1CQUFLLEVBQUUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FLDhEQUFDLE1BQUQ7QUFBUSxtQkFBSyxFQUFFLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQWVHWCxNQUFNLENBQUNTLElBQVAsaUJBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNFO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUsZ0JBQUksRUFBQyxPQUZQO0FBR0UsdUJBQVcsRUFBQyxjQUhkO0FBSUUscUJBQVMsRUFBQyxjQUpaO0FBS0UsaUJBQUssRUFBRVQsTUFBTSxDQUFDVyxLQUxoQjtBQU1FLG9CQUFRLEVBQUViO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRixlQW1ERTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLG1CQUFXLEVBQUMsaUJBSGQ7QUFJRSxpQkFBUyxFQUFDLGNBSlo7QUFLRSxhQUFLLEVBQUVFLE1BQU0sQ0FBQ1ksUUFMaEI7QUFNRSxnQkFBUSxFQUFFZDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkRGLGVBNkRFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0U7QUFBTyxxQkFBUyxFQUFDLCtDQUFqQjtBQUFBLHVCQUNHTyxnQkFESCxlQUVFO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsa0JBQUksRUFBQyxPQUZQO0FBR0Usc0JBQVEsRUFBRU4sV0FIWjtBQUlFLG9CQUFNLEVBQUMsU0FKVDtBQUtFLG9CQUFNO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBZUdLLE9BQU8saUJBQ04sOERBQUMsdUNBQUQ7QUFBTyxhQUFLLEVBQUMsR0FBYjtBQUFpQixlQUFPLEVBQUVILGlCQUExQjtBQUE2QyxpQkFBUyxFQUFDLGNBQXZEO0FBQUEsK0JBQ0UsOERBQUMsd0NBQUQ7QUFBUSxlQUFLLEVBQUUsR0FBZjtBQUFvQixhQUFHLEVBQUVHO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKLEVBcUJHRixRQUFRLGlCQUFJLDhEQUFDLHdDQUFEO0FBQVEsYUFBSyxFQUFFLEdBQWY7QUFBb0IsV0FBRyxFQUFFRixNQUFNLENBQUNhLEtBQVAsQ0FBYUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3REYsZUFxRkU7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0UsOERBQUMsd0NBQUQ7QUFDRSxpQkFBTyxFQUFFakIsWUFEWDtBQUVFLGtCQUFRLEVBQUVHLE1BQU0sQ0FBQ2UsT0FBUCxJQUFrQmYsTUFBTSxDQUFDZ0IsU0FGckM7QUFHRSxtQkFBUyxFQUFDLGlCQUhaO0FBSUUsaUJBQU8sRUFBRWhCLE1BQU0sQ0FBQ2UsT0FKbEI7QUFLRSxjQUFJLEVBQUMsU0FMUDtBQU1FLGNBQUksRUFBQyxPQU5QO0FBT0UsZUFBSyxFQUFDLE9BUFI7QUFBQSxvQkFTR2YsTUFBTSxDQUFDZSxPQUFQLEdBQWlCLFdBQWpCLEdBQStCO0FBVGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVHRCxDQWxIRDs7S0FBTW5CO0FBb0hOLCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm1zL0NvdXJzZUNyZWF0ZUZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWxlY3QsIEJ1dHRvbiwgQXZhdGFyLCBCYWRnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgQ291cnNlQ3JlYXRlRm9ybSA9ICh7XHJcbiAgaGFuZGxlU3VibWl0LFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBoYW5kbGVJbWFnZSxcclxuICB2YWx1ZXMsXHJcbiAgaGFuZGxlSW1hZ2VSZW1vdmUsXHJcbiAgZWRpdFBhZ2UgPSBmYWxzZSxcclxuICBzZXRWYWx1ZXMsXHJcbiAgcHJldmlldyxcclxuICB1cGxvYWRCdXR0b25UZXh0LFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3Vyc2UgVGl0bGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29scz1cIjdcIlxyXG4gICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvdyBtYi0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFpZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHNldFZhbHVlcyh7IC4uLnZhbHVlcywgcGFpZDogdiwgcHJpY2U6IDAgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXt0cnVlfT5QYWlkPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZmFsc2V9PkZyZWU8L09wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3ZhbHVlcy5wYWlkICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ291cnNlIFRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3Vyc2UgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IG1iLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1ibG9jayB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICB7dXBsb2FkQnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgICA8QmFkZ2UgY291bnQ9XCJYXCIgb25DbGljaz17aGFuZGxlSW1hZ2VSZW1vdmV9IGNsYXNzTmFtZT1cIm10LTQgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICA8QXZhdGFyIHdpZHRoPXsyMDB9IHNyYz17cHJldmlld30gLz5cclxuICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2VkaXRQYWdlICYmIDxBdmF0YXIgd2lkdGg9ezIwMH0gc3JjPXt2YWx1ZXMuaW1hZ2UuTG9jYXRpb259IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dmFsdWVzLmxvYWRpbmcgfHwgdmFsdWVzLnVwbG9hZGluZ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgbG9hZGluZz17dmFsdWVzLmxvYWRpbmd9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWx1ZXMubG9hZGluZyA/IFwiU2F2aW5nLi4uXCIgOiBcIlNhdmUgJiBDb250aW51ZVwifVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VDcmVhdGVGb3JtO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTZWxlY3QiLCJCdXR0b24iLCJBdmF0YXIiLCJCYWRnZSIsIk9wdGlvbiIsIkNvdXJzZUNyZWF0ZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVJbWFnZSIsInZhbHVlcyIsImhhbmRsZUltYWdlUmVtb3ZlIiwiZWRpdFBhZ2UiLCJzZXRWYWx1ZXMiLCJwcmV2aWV3IiwidXBsb2FkQnV0dG9uVGV4dCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIndpZHRoIiwicGFpZCIsInYiLCJwcmljZSIsImNhdGVnb3J5IiwiaW1hZ2UiLCJMb2NhdGlvbiIsImxvYWRpbmciLCJ1cGxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9