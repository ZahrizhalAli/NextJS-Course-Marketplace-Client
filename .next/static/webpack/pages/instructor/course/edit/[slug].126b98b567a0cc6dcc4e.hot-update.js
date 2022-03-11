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
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









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

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {}, []);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();

  var handleChange = function handleChange(e) {
    setValues(_objectSpread(_objectSpread({}, values), {}, (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, e.target.name, e.target.value)));
  };

  var handleImageRemove = /*#__PURE__*/function () {
    var _ref = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var res;
      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/course/remove-image", {
                image: image
              });

            case 4:
              res = _context.sent;
              setImage({});
              setPreviews("");
              setUploadButtonText("Upload Image");
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: false
              }));
              _context.next = 16;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(_context.t0.response.data);
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: false
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function handleImageRemove() {
      return _ref.apply(this, arguments);
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
      var _ref2 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(uri) {
        var _yield$axios$post, data;

        return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
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
    var _ref3 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(e) {
      var _yield$axios$post2, data;

      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              _context3.prev = 1;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/course", _objectSpread(_objectSpread({}, values), {}, {
                image: image
              }));

            case 4:
              _yield$axios$post2 = _context3.sent;
              data = _yield$axios$post2.data;
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Great! Now you can start adding lessons");
              router.push("/instructor");
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(_context3.t0.response.data);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 10]]);
    }));

    return function handleSubmit(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "jumbotron text-center square p-5",
        children: "Create Course"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
          lineNumber: 93,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), JSON.stringify(values, null, 4), JSON.stringify(image, null, 4)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2UvZWRpdC9bc2x1Z10uMTI2Yjk4YjU2N2EwY2M2ZGNjNGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tQLCtDQUFRLENBQUM7QUFDbkNRLElBQUFBLElBQUksRUFBRSxFQUQ2QjtBQUVuQ0MsSUFBQUEsV0FBVyxFQUFFLEVBRnNCO0FBR25DQyxJQUFBQSxLQUFLLEVBQUUsTUFINEI7QUFJbkNDLElBQUFBLFNBQVMsRUFBRSxLQUp3QjtBQUtuQ0MsSUFBQUEsSUFBSSxFQUFFLElBTDZCO0FBTW5DQyxJQUFBQSxRQUFRLEVBQUUsRUFOeUI7QUFPbkNDLElBQUFBLE9BQU8sRUFBRSxLQVAwQjtBQVFuQ0MsSUFBQUEsWUFBWSxFQUFFO0FBUnFCLEdBQUQsQ0FEYjtBQUFBLE1BQ2hCQyxNQURnQjtBQUFBLE1BQ1JDLFNBRFE7O0FBQUEsbUJBV0dqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FYWDtBQUFBLE1BV2hCa0IsS0FYZ0I7QUFBQSxNQVdUQyxRQVhTOztBQUFBLG1CQVlRbkIsK0NBQVEsQ0FBQyxFQUFELENBWmhCO0FBQUEsTUFZaEJvQixPQVpnQjtBQUFBLE1BWVBDLFdBWk87O0FBQUEsbUJBYXlCckIsK0NBQVEsQ0FBQyxjQUFELENBYmpDO0FBQUEsTUFhaEJzQixnQkFiZ0I7QUFBQSxNQWFFQyxtQkFiRjs7QUFldkJ0QixFQUFBQSxnREFBUyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUFUO0FBQ0EsTUFBTXVCLE1BQU0sR0FBR2xCLHNEQUFTLEVBQXhCOztBQUNBLE1BQU1tQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFD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K0IsSUFBSSxDQUFDQyxTQUFMLENBQWU5QixLQUFmLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFxQkQsQ0FwR0Q7O0dBQU1YO1VBZ0JXRDs7O0tBaEJYQztBQXNHTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnN0cnVjdG9yL2NvdXJzZS9lZGl0L1tzbHVnXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEluc3RydWN0b3JSb3V0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvSW5zdHJ1Y3RvclJvdXRlXCI7XHJcbmltcG9ydCBDb3Vyc2VDcmVhdGVGb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Zvcm1zL0NvdXJzZUNyZWF0ZUZvcm1cIjtcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSBcInJlYWN0LWltYWdlLWZpbGUtcmVzaXplclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENvdXJzZUVkaXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIHByaWNlOiBcIjkuOTlcIixcclxuICAgIHVwbG9hZGluZzogZmFsc2UsXHJcbiAgICBwYWlkOiB0cnVlLFxyXG4gICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGltYWdlUHJldmlldzogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VwbG9hZEJ1dHRvblRleHQsIHNldFVwbG9hZEJ1dHRvblRleHRdID0gdXNlU3RhdGUoXCJVcGxvYWQgSW1hZ2VcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VSZW1vdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvdXJzZS9yZW1vdmUtaW1hZ2VcIiwgeyBpbWFnZSB9KTtcclxuICAgICAgc2V0SW1hZ2Uoe30pO1xyXG4gICAgICBzZXRQcmV2aWV3cyhcIlwiKTtcclxuICAgICAgc2V0VXBsb2FkQnV0dG9uVGV4dChcIlVwbG9hZCBJbWFnZVwiKTtcclxuICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB0b2FzdChlcnIucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgLy9cclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRQcmV2aWV3cyh3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJcbiAgICBzZXRVcGxvYWRCdXR0b25UZXh0KGZpbGUubmFtZSk7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgLy9yZXNpemUgaW1hZ2VcclxuICAgIFJlc2l6ZXIuaW1hZ2VGaWxlUmVzaXplcihmaWxlLCA3MjAsIDUwMCwgXCJKUEVHXCIsIDEwMCwgMCwgYXN5bmMgKHVyaSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIHNlbmQgcmVzaXplZCBpbWFnZSB0byBiYWNrIGVuZFxyXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvdXJzZS91cGxvYWQtaW1hZ2VcIiwge1xyXG4gICAgICAgICAgaW1hZ2U6IHVyaSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGltYWdlIGluIHRoZSBzdGF0ZVxyXG4gICAgICAgIHNldEltYWdlKGRhdGEpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgdG9hc3QoXCJJbWFnZSB1cGxvYWRlZFwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIHRvYXN0KGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvY291cnNlXCIsIHtcclxuICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0b2FzdChcIkdyZWF0ISBOb3cgeW91IGNhbiBzdGFydCBhZGRpbmcgbGVzc29uc1wiKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvaW5zdHJ1Y3RvclwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0b2FzdChlcnIucmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxJbnN0cnVjdG9yUm91dGU+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbiB0ZXh0LWNlbnRlciBzcXVhcmUgcC01XCI+Q3JlYXRlIENvdXJzZTwvaDE+e1wiIFwifVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICA8Q291cnNlQ3JlYXRlRm9ybVxyXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGhhbmRsZUltYWdlPXtoYW5kbGVJbWFnZX1cclxuICAgICAgICAgICAgaGFuZGxlSW1hZ2VSZW1vdmU9e2hhbmRsZUltYWdlUmVtb3ZlfVxyXG4gICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cclxuICAgICAgICAgICAgc2V0VmFsdWVzPXtzZXRWYWx1ZXN9XHJcbiAgICAgICAgICAgIHByZXZpZXc9e3ByZXZpZXd9XHJcbiAgICAgICAgICAgIHVwbG9hZEJ1dHRvblRleHQ9e3VwbG9hZEJ1dHRvblRleHR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDQpfVxyXG4gICAgICAgIHtKU09OLnN0cmluZ2lmeShpbWFnZSwgbnVsbCwgNCl9XHJcbiAgICAgIDwvSW5zdHJ1Y3RvclJvdXRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZUVkaXQ7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5zdHJ1Y3RvclJvdXRlIiwiQ291cnNlQ3JlYXRlRm9ybSIsIlJlc2l6ZXIiLCJ0b2FzdCIsInVzZVJvdXRlciIsIkNvdXJzZUVkaXQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInVwbG9hZGluZyIsInBhaWQiLCJjYXRlZ29yeSIsImxvYWRpbmciLCJpbWFnZVByZXZpZXciLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJpbWFnZSIsInNldEltYWdlIiwicHJldmlldyIsInNldFByZXZpZXdzIiwidXBsb2FkQnV0dG9uVGV4dCIsInNldFVwbG9hZEJ1dHRvblRleHQiLCJyb3V0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbWFnZVJlbW92ZSIsInBvc3QiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJkYXRhIiwiaGFuZGxlSW1hZ2UiLCJmaWxlIiwiZmlsZXMiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpbWFnZUZpbGVSZXNpemVyIiwidXJpIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=