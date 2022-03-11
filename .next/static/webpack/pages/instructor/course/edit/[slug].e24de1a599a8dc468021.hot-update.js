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

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    loadCourse();
  }, []);

  var loadCourse = /*#__PURE__*/function () {
    var _ref = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
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

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();

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
        children: "Create Course"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
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
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this), JSON.stringify(values, null, 4), JSON.stringify(image, null, 4)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CourseEdit, "LAzZM5Kq3MvgWixw9lznYyhN9kc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2UvZWRpdC9bc2x1Z10uZTI0ZGUxYTU5OWE4ZGM0NjgwMjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tQLCtDQUFRLENBQUM7QUFDbkNRLElBQUFBLElBQUksRUFBRSxFQUQ2QjtBQUVuQ0MsSUFBQUEsV0FBVyxFQUFFLEVBRnNCO0FBR25DQyxJQUFBQSxLQUFLLEVBQUUsTUFINEI7QUFJbkNDLElBQUFBLFNBQVMsRUFBRSxLQUp3QjtBQUtuQ0MsSUFBQUEsSUFBSSxFQUFFLElBTDZCO0FBTW5DQyxJQUFBQSxRQUFRLEVBQUUsRUFOeUI7QUFPbkNDLElBQUFBLE9BQU8sRUFBRSxLQVAwQjtBQVFuQ0MsSUFBQUEsWUFBWSxFQUFFO0FBUnFCLEdBQUQsQ0FEYjtBQUFBLE1BQ2hCQyxNQURnQjtBQUFBLE1BQ1JDLFNBRFE7O0FBQUEsbUJBV0dqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FYWDtBQUFBLE1BV2hCa0IsS0FYZ0I7QUFBQSxNQVdUQyxRQVhTOztBQUFBLG1CQVlRbkIsK0NBQVEsQ0FBQyxFQUFELENBWmhCO0FBQUEsTUFZaEJvQixPQVpnQjtBQUFBLE1BWVBDLFdBWk87O0FBQUEsbUJBYXlCckIsK0NBQVEsQ0FBQyxjQUFELENBYmpDO0FBQUEsTUFhaEJzQixnQkFiZ0I7QUFBQSxNQWFFQyxtQkFiRjs7QUFldkJ0QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZHVCLElBQUFBLFVBQVU7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLFVBQVU7QUFBQSwyUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QVFFLDBCQUFnQixFQUFFRTtBQVJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBY0cwQixJQUFJLENBQUNDLFNBQUwsQ0FBZWpDLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FkSCxFQWVHZ0MsSUFBSSxDQUFDQyxTQUFMLENBQWUvQixLQUFmLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFxQkQsQ0F4R0Q7O0dBQU1YO1VBb0JXRDs7O0tBcEJYQztBQTBHTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnN0cnVjdG9yL2NvdXJzZS9lZGl0L1tzbHVnXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEluc3RydWN0b3JSb3V0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvSW5zdHJ1Y3RvclJvdXRlXCI7XHJcbmltcG9ydCBDb3Vyc2VDcmVhdGVGb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Zvcm1zL0NvdXJzZUNyZWF0ZUZvcm1cIjtcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSBcInJlYWN0LWltYWdlLWZpbGUtcmVzaXplclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENvdXJzZUVkaXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIHByaWNlOiBcIjkuOTlcIixcclxuICAgIHVwbG9hZGluZzogZmFsc2UsXHJcbiAgICBwYWlkOiB0cnVlLFxyXG4gICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGltYWdlUHJldmlldzogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VwbG9hZEJ1dHRvblRleHQsIHNldFVwbG9hZEJ1dHRvblRleHRdID0gdXNlU3RhdGUoXCJVcGxvYWQgSW1hZ2VcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQ291cnNlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2FkQ291cnNlID0gYXN5bmMgKCkgPT4ge31cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy9cclxuICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9jb3Vyc2UvcmVtb3ZlLWltYWdlXCIsIHsgaW1hZ2UgfSk7XHJcbiAgICAgIHNldEltYWdlKHt9KTtcclxuICAgICAgc2V0UHJldmlld3MoXCJcIik7XHJcbiAgICAgIHNldFVwbG9hZEJ1dHRvblRleHQoXCJVcGxvYWQgSW1hZ2VcIik7XHJcbiAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgdG9hc3QoZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gKGUpID0+IHtcclxuICAgIC8vXHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0UHJldmlld3Mod2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyXG4gICAgc2V0VXBsb2FkQnV0dG9uVGV4dChmaWxlLm5hbWUpO1xyXG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIC8vcmVzaXplIGltYWdlXHJcbiAgICBSZXNpemVyLmltYWdlRmlsZVJlc2l6ZXIoZmlsZSwgNzIwLCA1MDAsIFwiSlBFR1wiLCAxMDAsIDAsIGFzeW5jICh1cmkpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBzZW5kIHJlc2l6ZWQgaW1hZ2UgdG8gYmFjayBlbmRcclxuICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9jb3Vyc2UvdXBsb2FkLWltYWdlXCIsIHtcclxuICAgICAgICAgIGltYWdlOiB1cmksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNldCBpbWFnZSBpbiB0aGUgc3RhdGVcclxuICAgICAgICBzZXRJbWFnZShkYXRhKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIHRvYXN0KFwiSW1hZ2UgdXBsb2FkZWRcIik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB0b2FzdChlcnIucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvdXJzZVwiLCB7XHJcbiAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICB9KTtcclxuICAgICAgdG9hc3QoXCJHcmVhdCEgTm93IHlvdSBjYW4gc3RhcnQgYWRkaW5nIGxlc3NvbnNcIik7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2luc3RydWN0b3JcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdG9hc3QoZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SW5zdHJ1Y3RvclJvdXRlPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJqdW1ib3Ryb24gdGV4dC1jZW50ZXIgc3F1YXJlIHAtNVwiPkNyZWF0ZSBDb3Vyc2U8L2gxPntcIiBcIn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgPENvdXJzZUNyZWF0ZUZvcm1cclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBoYW5kbGVJbWFnZT17aGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgIGhhbmRsZUltYWdlUmVtb3ZlPXtoYW5kbGVJbWFnZVJlbW92ZX1cclxuICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XHJcbiAgICAgICAgICAgIHNldFZhbHVlcz17c2V0VmFsdWVzfVxyXG4gICAgICAgICAgICBwcmV2aWV3PXtwcmV2aWV3fVxyXG4gICAgICAgICAgICB1cGxvYWRCdXR0b25UZXh0PXt1cGxvYWRCdXR0b25UZXh0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7SlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCA0KX1cclxuICAgICAgICB7SlNPTi5zdHJpbmdpZnkoaW1hZ2UsIG51bGwsIDQpfVxyXG4gICAgICA8L0luc3RydWN0b3JSb3V0ZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VFZGl0O1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkluc3RydWN0b3JSb3V0ZSIsIkNvdXJzZUNyZWF0ZUZvcm0iLCJSZXNpemVyIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJDb3Vyc2VFZGl0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJ1cGxvYWRpbmciLCJwYWlkIiwiY2F0ZWdvcnkiLCJsb2FkaW5nIiwiaW1hZ2VQcmV2aWV3IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInByZXZpZXciLCJzZXRQcmV2aWV3cyIsInVwbG9hZEJ1dHRvblRleHQiLCJzZXRVcGxvYWRCdXR0b25UZXh0IiwibG9hZENvdXJzZSIsInJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUltYWdlUmVtb3ZlIiwicG9zdCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJoYW5kbGVJbWFnZSIsImZpbGUiLCJmaWxlcyIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImltYWdlRmlsZVJlc2l6ZXIiLCJ1cmkiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==