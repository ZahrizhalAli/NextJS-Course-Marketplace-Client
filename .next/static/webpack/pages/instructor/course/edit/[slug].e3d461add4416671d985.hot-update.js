"use strict";
self["webpackHotUpdate_N_E"]("pages/instructor/course/edit/[slug]",{

/***/ "./pages/instructor/course/edit/[slug].js":
/*!************************************************!*\
  !*** ./pages/instructor/course/edit/[slug].js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/routes/InstructorRoute */ "./components/routes/InstructorRoute.js");
/* harmony import */ var _components_forms_CourseCreateForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/forms/CourseCreateForm */ "./components/forms/CourseCreateForm.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-file-resizer */ "./node_modules/react-image-file-resizer/build/index.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "E:\\BIGPROJECT\\mycourse\\client\\pages\\instructor\\course\\edit\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var CourseEdit = function CourseEdit() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
    imagePreview: ""
  }),
      values = _useState[0],
      setValues = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      preview = _useState3[0],
      setPreviews = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Upload Image"),
      uploadButtonText = _useState4[0],
      setUploadButtonText = _useState4[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  var slug = router.query.slug;
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    loadCourse();
  }, [slug]);

  var loadCourse = /*#__PURE__*/function () {
    var _ref = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _yield$axios$get, data;

      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/course/".concat(slug));

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              setValues(data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadCourse() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));
  };

  var handleImage = function handleImage(e) {
    //
    var file = e.target.files[0];
    setPreviews(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    })); //resize image

    react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8___default().imageFileResizer(file, 720, 500, "JPEG", 100, 0, /*#__PURE__*/function () {
      var _ref2 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(uri) {
        var _yield$axios$post, data;

        return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/course/upload-image", {
                  image: uri
                });

              case 3:
                _yield$axios$post = _context2.sent;
                data = _yield$axios$post.data;
                // set image in the state
                setImage(data);
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  loading: false
                }));
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Image uploaded");
                _context2.next = 15;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  loading: false
                }));
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(_context2.t0.response.data);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(e) {
      var _yield$axios$put, data;

      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              _context3.prev = 1;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().put("/api/course", _objectSpread(_objectSpread({}, values), {}, {
                image: image
              }));

            case 4:
              _yield$axios$put = _context3.sent;
              data = _yield$axios$put.data;
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Course Updated"); // continue to lessons updated page if instructor might wants to update lesson as well

              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(_context3.t0.response.data);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));

    return function handleSubmit(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "jumbotron text-center square p-5",
        children: "Update Course"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pt-3 pb-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_CourseCreateForm__WEBPACK_IMPORTED_MODULE_7__.default, {
          handleSubmit: handleSubmit,
          handleChange: handleChange,
          handleImage: handleImage,
          values: values,
          setValues: setValues,
          preview: preview,
          uploadButtonText: uploadButtonText,
          editPage: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CourseEdit, "gyP5jPZSKMmTAOfC/yyZ3rAy2z4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter];
});

_c = CourseEdit;
/* harmony default export */ __webpack_exports__["default"] = (CourseEdit);

var _c;

$RefreshReg$(_c, "CourseEdit");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2UvZWRpdC9bc2x1Z10uZTNkNDYxYWRkNDQxNjY3MWQ5ODUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tQLCtDQUFRLENBQUM7QUFDbkNRLElBQUFBLElBQUksRUFBRSxFQUQ2QjtBQUVuQ0MsSUFBQUEsV0FBVyxFQUFFLEVBRnNCO0FBR25DQyxJQUFBQSxLQUFLLEVBQUUsTUFINEI7QUFJbkNDLElBQUFBLFNBQVMsRUFBRSxLQUp3QjtBQUtuQ0MsSUFBQUEsSUFBSSxFQUFFLElBTDZCO0FBTW5DQyxJQUFBQSxRQUFRLEVBQUUsRUFOeUI7QUFPbkNDLElBQUFBLE9BQU8sRUFBRSxLQVAwQjtBQVFuQ0MsSUFBQUEsWUFBWSxFQUFFO0FBUnFCLEdBQUQsQ0FEYjtBQUFBLE1BQ2hCQyxNQURnQjtBQUFBLE1BQ1JDLFNBRFE7O0FBQUEsbUJBV0dqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FYWDtBQUFBLE1BV2hCa0IsS0FYZ0I7QUFBQSxNQVdUQyxRQVhTOztBQUFBLG1CQVlRbkIsK0NBQVEsQ0FBQyxFQUFELENBWmhCO0FBQUEsTUFZaEJvQixPQVpnQjtBQUFBLE1BWVBDLFdBWk87O0FBQUEsbUJBYXlCckIsK0NBQVEsQ0FBQyxjQUFELENBYmpDO0FBQUEsTUFhaEJzQixnQkFiZ0I7QUFBQSxNQWFFQyxtQkFiRjs7QUFjdkIsTUFBTUMsTUFBTSxHQUFHbEIsc0RBQVMsRUFBeEI7QUFkdUIsTUFnQmZtQixJQWhCZSxHQWdCTkQsTUFBTSxDQUFDRSxLQWhCRCxDQWdCZkQsSUFoQmU7QUFrQnZCeEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QwQixJQUFBQSxVQUFVO0FB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OztBQVZpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaaUIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFjQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHVFQUFEO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFDc0UsR0FEdEUsZUFFRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFLDhEQUFDLHVFQUFEO0FBQ0Usc0JBQVksRUFBRUEsWUFEaEI7QUFFRSxzQkFBWSxFQUFFaEIsWUFGaEI7QUFHRSxxQkFBVyxFQUFFSSxXQUhmO0FBSUUsZ0JBQU0sRUFBRWxCLE1BSlY7QUFLRSxtQkFBUyxFQUFFQyxTQUxiO0FBTUUsaUJBQU8sRUFBRUcsT0FOWDtBQU9FLDBCQUFnQixFQUFFRSxnQkFQcEI7QUFRRSxrQkFBUSxFQUFFO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW1CRCxDQTNGRDs7R0FBTWY7VUFjV0Q7OztLQWRYQztBQTZGTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnN0cnVjdG9yL2NvdXJzZS9lZGl0L1tzbHVnXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEluc3RydWN0b3JSb3V0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvSW5zdHJ1Y3RvclJvdXRlXCI7XHJcbmltcG9ydCBDb3Vyc2VDcmVhdGVGb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Zvcm1zL0NvdXJzZUNyZWF0ZUZvcm1cIjtcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSBcInJlYWN0LWltYWdlLWZpbGUtcmVzaXplclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENvdXJzZUVkaXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIHByaWNlOiBcIjkuOTlcIixcclxuICAgIHVwbG9hZGluZzogZmFsc2UsXHJcbiAgICBwYWlkOiB0cnVlLFxyXG4gICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGltYWdlUHJldmlldzogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VwbG9hZEJ1dHRvblRleHQsIHNldFVwbG9hZEJ1dHRvblRleHRdID0gdXNlU3RhdGUoXCJVcGxvYWQgSW1hZ2VcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZENvdXJzZSgpO1xyXG4gIH0sIFtzbHVnXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRDb3Vyc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9jb3Vyc2UvJHtzbHVnfWApO1xyXG4gICAgc2V0VmFsdWVzKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgLy9cclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRQcmV2aWV3cyh3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJcbiAgICBzZXRVcGxvYWRCdXR0b25UZXh0KGZpbGUubmFtZSk7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgLy9yZXNpemUgaW1hZ2VcclxuICAgIFJlc2l6ZXIuaW1hZ2VGaWxlUmVzaXplcihmaWxlLCA3MjAsIDUwMCwgXCJKUEVHXCIsIDEwMCwgMCwgYXN5bmMgKHVyaSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIHNlbmQgcmVzaXplZCBpbWFnZSB0byBiYWNrIGVuZFxyXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvdXJzZS91cGxvYWQtaW1hZ2VcIiwge1xyXG4gICAgICAgICAgaW1hZ2U6IHVyaSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGltYWdlIGluIHRoZSBzdGF0ZVxyXG4gICAgICAgIHNldEltYWdlKGRhdGEpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgdG9hc3QoXCJJbWFnZSB1cGxvYWRlZFwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIHRvYXN0KGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KFwiL2FwaS9jb3Vyc2VcIiwge1xyXG4gICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRvYXN0KFwiQ291cnNlIFVwZGF0ZWRcIik7XHJcbiAgICAgIC8vIGNvbnRpbnVlIHRvIGxlc3NvbnMgdXBkYXRlZCBwYWdlIGlmIGluc3RydWN0b3IgbWlnaHQgd2FudHMgdG8gdXBkYXRlIGxlc3NvbiBhcyB3ZWxsXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdG9hc3QoZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SW5zdHJ1Y3RvclJvdXRlPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXIgc3F1YXJlIHAtNVwiPlVwZGF0ZSBDb3Vyc2U8L2gxPntcIiBcIn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgPENvdXJzZUNyZWF0ZUZvcm1cclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBoYW5kbGVJbWFnZT17aGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzfVxyXG4gICAgICAgICAgICBzZXRWYWx1ZXM9e3NldFZhbHVlc31cclxuICAgICAgICAgICAgcHJldmlldz17cHJldmlld31cclxuICAgICAgICAgICAgdXBsb2FkQnV0dG9uVGV4dD17dXBsb2FkQnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgZWRpdFBhZ2U9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0luc3RydWN0b3JSb3V0ZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VFZGl0O1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkluc3RydWN0b3JSb3V0ZSIsIkNvdXJzZUNyZWF0ZUZvcm0iLCJSZXNpemVyIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJDb3Vyc2VFZGl0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJ1cGxvYWRpbmciLCJwYWlkIiwiY2F0ZWdvcnkiLCJsb2FkaW5nIiwiaW1hZ2VQcmV2aWV3IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInByZXZpZXciLCJzZXRQcmV2aWV3cyIsInVwbG9hZEJ1dHRvblRleHQiLCJzZXRVcGxvYWRCdXR0b25UZXh0Iiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwibG9hZENvdXJzZSIsImdldCIsImRhdGEiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbWFnZSIsImZpbGUiLCJmaWxlcyIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImltYWdlRmlsZVJlc2l6ZXIiLCJ1cmkiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwdXQiXSwic291cmNlUm9vdCI6IiJ9