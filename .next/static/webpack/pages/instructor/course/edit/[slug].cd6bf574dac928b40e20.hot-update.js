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

  var handleImageRemove = /*#__PURE__*/function () {
    var _ref2 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var res;
      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              _context2.prev = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/course/remove-image", {
                image: image
              });

            case 4:
              res = _context2.sent;
              setImage({});
              setPreviews("");
              setUploadButtonText("Upload Image");
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: false
              }));
              _context2.next = 16;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(_context2.t0.response.data);
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: false
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 11]]);
    }));

    return function handleImageRemove() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleImage = function handleImage(e) {
    //
    var file = e.target.files[0];
    setPreviews(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    })); //resize image

    react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8___default().imageFileResizer(file, 720, 500, "JPEG", 100, 0, /*#__PURE__*/function () {
      var _ref3 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(uri) {
        var _yield$axios$post, data;

        return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/course/upload-image", {
                  image: uri
                });

              case 3:
                _yield$axios$post = _context3.sent;
                data = _yield$axios$post.data;
                // set image in the state
                setImage(data);
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  loading: false
                }));
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Image uploaded");
                _context3.next = 15;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  loading: false
                }));
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(_context3.t0.response.data);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(e) {
      var _yield$axios$post2, data;

      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              _context4.prev = 1;
              _context4.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/course", _objectSpread(_objectSpread({}, values), {}, {
                image: image
              }));

            case 4:
              _yield$axios$post2 = _context4.sent;
              data = _yield$axios$post2.data;
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Great! Now you can start adding lessons");
              router.push("/instructor");
              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(_context4.t0.response.data);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 10]]);
    }));

    return function handleSubmit(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "jumbotron text-center square p-5",
        children: "Update Course"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pt-3 pb-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_CourseCreateForm__WEBPACK_IMPORTED_MODULE_7__.default, {
          handleSubmit: handleSubmit,
          handleChange: handleChange,
          handleImage: handleImage,
          handleImageRemove: handleImageRemove,
          values: values,
          setValues: setValues,
          preview: preview,
          uploadButtonText: uploadButtonText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2UvZWRpdC9bc2x1Z10uY2Q2YmY1NzRkYWM5MjhiNDBlMjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tQLCtDQUFRLENBQUM7QUFDbkNRLElBQUFBLElBQUksRUFBRSxFQUQ2QjtBQUVuQ0MsSUFBQUEsV0FBVyxFQUFFLEVBRnNCO0FBR25DQyxJQUFBQSxLQUFLLEVBQUUsTUFINEI7QUFJbkNDLElBQUFBLFNBQVMsRUFBRSxLQUp3QjtBQUtuQ0MsSUFBQUEsSUFBSSxFQUFFLElBTDZCO0FBTW5DQyxJQUFBQSxRQUFRLEVBQUUsRUFOeUI7QUFPbkNDLElBQUFBLE9BQU8sRUFBRSxLQVAwQjtBQVFuQ0MsSUFBQUEsWUFBWSxFQUFFO0FBUnFCLEdBQUQsQ0FEYjtBQUFBLE1BQ2hCQyxNQURnQjtBQUFBLE1BQ1JDLFNBRFE7O0FBQUEsbUJBV0dqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FYWDtBQUFBLE1BV2hCa0IsS0FYZ0I7QUFBQSxNQVdUQyxRQVhTOztBQUFBLG1CQVlRbkIsK0NBQVEsQ0FBQyxFQUFELENBWmhCO0FBQUEsTUFZaEJvQixPQVpnQjtBQUFBLE1BWVBDLFdBWk87O0FBQUEsbUJBYXlCckIsK0NBQVEsQ0FBQyxjQUFELENBYmpDO0FBQUEsTUFhaEJzQixnQkFiZ0I7QUFBQSxNQWFFQyxtQkFiRjs7QUFjdkIsTUFBTUMsTUFBTSxHQUFHbEIsc0RBQVMsRUFBeEI7QUFkdUIsTUFnQmZtQixJQWhCZSxHQWdCTkQsTUFBTSxDQUFDRSxLQWhCRCxDQWdCZkQsSUFoQmU7QUFrQnZCeEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QwQixJQUFBQSxVQUFVO0FB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SyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRSw4REFBQyx1RUFBRDtBQUNFLHNCQUFZLEVBQUVBLFlBRGhCO0FBRUUsc0JBQVksRUFBRWxCLFlBRmhCO0FBR0UscUJBQVcsRUFBRVUsV0FIZjtBQUlFLDJCQUFpQixFQUFFTixpQkFKckI7QUFLRSxnQkFBTSxFQUFFbEIsTUFMVjtBQU1FLG1CQUFTLEVBQUVDLFNBTmI7QUFPRSxpQkFBTyxFQUFFRyxPQVBYO0FBUUUsMEJBQWdCLEVBQUVFO0FBUnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtQkQsQ0E1R0Q7O0dBQU1mO1VBY1dEOzs7S0FkWEM7QUE4R04sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2UvZWRpdC9bc2x1Z10uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnN0cnVjdG9yUm91dGUgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcm91dGVzL0luc3RydWN0b3JSb3V0ZVwiO1xyXG5pbXBvcnQgQ291cnNlQ3JlYXRlRm9ybSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9Db3Vyc2VDcmVhdGVGb3JtXCI7XHJcbmltcG9ydCBSZXNpemVyIGZyb20gXCJyZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXJcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBDb3Vyc2VFZGl0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICBwcmljZTogXCI5Ljk5XCIsXHJcbiAgICB1cGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgcGFpZDogdHJ1ZSxcclxuICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBpbWFnZVByZXZpZXc6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXdzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cGxvYWRCdXR0b25UZXh0LCBzZXRVcGxvYWRCdXR0b25UZXh0XSA9IHVzZVN0YXRlKFwiVXBsb2FkIEltYWdlXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRDb3Vyc2UoKTtcclxuICB9LCBbc2x1Z10pO1xyXG5cclxuICBjb25zdCBsb2FkQ291cnNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY291cnNlLyR7c2x1Z31gKTtcclxuICAgIHNldFZhbHVlcyhkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy9cclxuICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9jb3Vyc2UvcmVtb3ZlLWltYWdlXCIsIHsgaW1hZ2UgfSk7XHJcbiAgICAgIHNldEltYWdlKHt9KTtcclxuICAgICAgc2V0UHJldmlld3MoXCJcIik7XHJcbiAgICAgIHNldFVwbG9hZEJ1dHRvblRleHQoXCJVcGxvYWQgSW1hZ2VcIik7XHJcbiAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgdG9hc3QoZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gKGUpID0+IHtcclxuICAgIC8vXHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0UHJldmlld3Mod2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyXG4gICAgc2V0VXBsb2FkQnV0dG9uVGV4dChmaWxlLm5hbWUpO1xyXG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIC8vcmVzaXplIGltYWdlXHJcbiAgICBSZXNpemVyLmltYWdlRmlsZVJlc2l6ZXIoZmlsZSwgNzIwLCA1MDAsIFwiSlBFR1wiLCAxMDAsIDAsIGFzeW5jICh1cmkpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBzZW5kIHJlc2l6ZWQgaW1hZ2UgdG8gYmFjayBlbmRcclxuICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9jb3Vyc2UvdXBsb2FkLWltYWdlXCIsIHtcclxuICAgICAgICAgIGltYWdlOiB1cmksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNldCBpbWFnZSBpbiB0aGUgc3RhdGVcclxuICAgICAgICBzZXRJbWFnZShkYXRhKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIHRvYXN0KFwiSW1hZ2UgdXBsb2FkZWRcIik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB0b2FzdChlcnIucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvdXJzZVwiLCB7XHJcbiAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICB9KTtcclxuICAgICAgdG9hc3QoXCJHcmVhdCEgTm93IHlvdSBjYW4gc3RhcnQgYWRkaW5nIGxlc3NvbnNcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2luc3RydWN0b3JcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdG9hc3QoZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SW5zdHJ1Y3RvclJvdXRlPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXIgc3F1YXJlIHAtNVwiPlVwZGF0ZSBDb3Vyc2U8L2gxPntcIiBcIn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgPENvdXJzZUNyZWF0ZUZvcm1cclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBoYW5kbGVJbWFnZT17aGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgIGhhbmRsZUltYWdlUmVtb3ZlPXtoYW5kbGVJbWFnZVJlbW92ZX1cclxuICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XHJcbiAgICAgICAgICAgIHNldFZhbHVlcz17c2V0VmFsdWVzfVxyXG4gICAgICAgICAgICBwcmV2aWV3PXtwcmV2aWV3fVxyXG4gICAgICAgICAgICB1cGxvYWRCdXR0b25UZXh0PXt1cGxvYWRCdXR0b25UZXh0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JbnN0cnVjdG9yUm91dGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlRWRpdDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnN0cnVjdG9yUm91dGUiLCJDb3Vyc2VDcmVhdGVGb3JtIiwiUmVzaXplciIsInRvYXN0IiwidXNlUm91dGVyIiwiQ291cnNlRWRpdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwidXBsb2FkaW5nIiwicGFpZCIsImNhdGVnb3J5IiwibG9hZGluZyIsImltYWdlUHJldmlldyIsInZhbHVlcyIsInNldFZhbHVlcyIsImltYWdlIiwic2V0SW1hZ2UiLCJwcmV2aWV3Iiwic2V0UHJldmlld3MiLCJ1cGxvYWRCdXR0b25UZXh0Iiwic2V0VXBsb2FkQnV0dG9uVGV4dCIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsImxvYWRDb3Vyc2UiLCJnZXQiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSW1hZ2VSZW1vdmUiLCJwb3N0IiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiaGFuZGxlSW1hZ2UiLCJmaWxlIiwiZmlsZXMiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpbWFnZUZpbGVSZXNpemVyIiwidXJpIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==