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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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
    imagePreview: "",
    lessons: []
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
              if (data && data.image) setImage(data.image);

            case 6:
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
      var _yield$axios$put, data;

      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              _context4.prev = 1;
              _context4.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().put("/api/course/".concat(slug), _objectSpread(_objectSpread({}, values), {}, {
                image: image
              }));

            case 4:
              _yield$axios$put = _context4.sent;
              data = _yield$axios$put.data;
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Course Updated"); // continue to lessons updated page if instructor might wants to update lesson as well

              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(_context4.t0.response.data);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 9]]);
    }));

    return function handleSubmit(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleDrag = /*#__PURE__*/function () {
    var _ref5 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(e) {
      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log("  ON  DRAG=> ", e);

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleDrag(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleDrop = /*#__PURE__*/function () {
    var _ref6 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6(e) {
      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.log(e);

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function handleDrop(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: values && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "jumbotron text-center square p-5",
          children: "Update Course"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
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
            uploadButtonText: uploadButtonText,
            editPage: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row pt-5 ",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col lesson-list",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: [values && values.lessons && values.lessons.length, " lessons"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.List, {
              onDragOver: function onDragOver(e) {
                return e.preventDefault();
              },
              itemLayout: "horizontal",
              dataSource: values && values.lessons,
              renderItem: function renderItem(item, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.List.Item, {
                  draggable: true,
                  onDragStart: function onDragStart(e) {
                    return handleDrag(e, index);
                  },
                  onDrop: function onDrop(e) {
                    return handleDrop(e, index);
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.List.Item.Meta, {
                    avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.Avatar, {
                      children: index + 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 33
                    }, _this),
                    title: item.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 21
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(CourseEdit, "4UfI8xKc6OTCDq/USOK+pBGZcBY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2UvZWRpdC9bc2x1Z10uNzk1NmEwZmM3MzdkNDgyNzdhYjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tULCtDQUFRLENBQUM7QUFDbkNVLElBQUFBLElBQUksRUFBRSxFQUQ2QjtBQUVuQ0MsSUFBQUEsV0FBVyxFQUFFLEVBRnNCO0FBR25DQyxJQUFBQSxLQUFLLEVBQUUsTUFINEI7QUFJbkNDLElBQUFBLFNBQVMsRUFBRSxLQUp3QjtBQUtuQ0MsSUFBQUEsSUFBSSxFQUFFLElBTDZCO0FBTW5DQyxJQUFBQSxRQUFRLEVBQUUsRUFOeUI7QUFPbkNDLElBQUFBLE9BQU8sRUFBRSxLQVAwQjtBQVFuQ0MsSUFBQUEsWUFBWSxFQUFFLEVBUnFCO0FBU25DQyxJQUFBQSxPQUFPLEVBQUU7QUFUMEIsR0FBRCxDQURiO0FBQUEsTUFDaEJDLE1BRGdCO0FBQUEsTUFDUkMsU0FEUTs7QUFBQSxtQkFZR3BCLCtDQUFRLENBQUMsRUFBRCxDQVpYO0FBQUEsTUFZaEJxQixLQVpnQjtBQUFBLE1BWVRDLFFBWlM7O0FBQUEsbUJBYVF0QiwrQ0FBUSxDQUFDLEVBQUQsQ0FiaEI7QUFBQSxNQWFoQnVCLE9BYmdCO0FBQUEsTUFhUEMsV0FiTzs7QUFBQSxtQkFjeUJ4QiwrQ0FBUSxDQUFDLGNBQUQsQ0FkakM7QUFBQSxNQWNoQnlCLGdCQWRnQjtBQUFBLE1BY0VDLG1CQWRGOztBQWV2QixNQUFNQyxNQUFNLEdBQUdyQixzREFBUyxFQUF4QjtBQWZ1QixNQWlCZnNCLElBakJlLEdBaUJORCxNQUFNLENBQUNFLEtBakJELENBaUJmRCxJQWpCZTtBQW1CdkIzQixFQUFBQSxn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WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luc3RydWN0b3IvY291cnNlL2VkaXQvW3NsdWddLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5zdHJ1Y3RvclJvdXRlIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3JvdXRlcy9JbnN0cnVjdG9yUm91dGVcIjtcclxuaW1wb3J0IENvdXJzZUNyZWF0ZUZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvQ291cnNlQ3JlYXRlRm9ybVwiO1xyXG5pbXBvcnQgUmVzaXplciBmcm9tIFwicmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMaXN0LCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgQ291cnNlRWRpdCA9ICgpID0+IHtcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgcHJpY2U6IFwiOS45OVwiLFxyXG4gICAgdXBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHBhaWQ6IHRydWUsXHJcbiAgICBjYXRlZ29yeTogXCJcIixcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgaW1hZ2VQcmV2aWV3OiBcIlwiLFxyXG4gICAgbGVzc29uczogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXdzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cGxvYWRCdXR0b25UZXh0LCBzZXRVcGxvYWRCdXR0b25UZXh0XSA9IHVzZVN0YXRlKFwiVXBsb2FkIEltYWdlXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRDb3Vyc2UoKTtcclxuICB9LCBbc2x1Z10pO1xyXG5cclxuICBjb25zdCBsb2FkQ291cnNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY291cnNlLyR7c2x1Z31gKTtcclxuICAgIHNldFZhbHVlcyhkYXRhKTtcclxuICAgIGlmIChkYXRhICYmIGRhdGEuaW1hZ2UpIHNldEltYWdlKGRhdGEuaW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VSZW1vdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvL1xyXG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvdXJzZS9yZW1vdmUtaW1hZ2VcIiwgeyBpbWFnZSB9KTtcclxuICAgICAgc2V0SW1hZ2Uoe30pO1xyXG4gICAgICBzZXRQcmV2aWV3cyhcIlwiKTtcclxuICAgICAgc2V0VXBsb2FkQnV0dG9uVGV4dChcIlVwbG9hZCBJbWFnZVwiKTtcclxuICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB0b2FzdChlcnIucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgLy9cclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRQcmV2aWV3cyh3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJcbiAgICBzZXRVcGxvYWRCdXR0b25UZXh0KGZpbGUubmFtZSk7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgLy9yZXNpemUgaW1hZ2VcclxuICAgIFJlc2l6ZXIuaW1hZ2VGaWxlUmVzaXplcihmaWxlLCA3MjAsIDUwMCwgXCJKUEVHXCIsIDEwMCwgMCwgYXN5bmMgKHVyaSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIHNlbmQgcmVzaXplZCBpbWFnZSB0byBiYWNrIGVuZFxyXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvdXJzZS91cGxvYWQtaW1hZ2VcIiwge1xyXG4gICAgICAgICAgaW1hZ2U6IHVyaSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGltYWdlIGluIHRoZSBzdGF0ZVxyXG4gICAgICAgIHNldEltYWdlKGRhdGEpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgdG9hc3QoXCJJbWFnZSB1cGxvYWRlZFwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIHRvYXN0KGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KGAvYXBpL2NvdXJzZS8ke3NsdWd9YCwge1xyXG4gICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRvYXN0KFwiQ291cnNlIFVwZGF0ZWRcIik7XHJcbiAgICAgIC8vIGNvbnRpbnVlIHRvIGxlc3NvbnMgdXBkYXRlZCBwYWdlIGlmIGluc3RydWN0b3IgbWlnaHQgd2FudHMgdG8gdXBkYXRlIGxlc3NvbiBhcyB3ZWxsXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdG9hc3QoZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWcgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCIgIE9OICBEUkFHPT4gXCIgLCBlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcm9wID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxJbnN0cnVjdG9yUm91dGU+XHJcbiAgICAgICAge3ZhbHVlcyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwianVtYm90cm9uIHRleHQtY2VudGVyIHNxdWFyZSBwLTVcIj5VcGRhdGUgQ291cnNlPC9oMT57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgPENvdXJzZUNyZWF0ZUZvcm1cclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVJbWFnZT17aGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVJbWFnZVJlbW92ZT17aGFuZGxlSW1hZ2VSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcz17c2V0VmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgcHJldmlldz17cHJldmlld31cclxuICAgICAgICAgICAgICAgIHVwbG9hZEJ1dHRvblRleHQ9e3VwbG9hZEJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICBlZGl0UGFnZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB0LTUgXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbGVzc29uLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAge3ZhbHVlcyAmJiB2YWx1ZXMubGVzc29ucyAmJiB2YWx1ZXMubGVzc29ucy5sZW5ndGh9IGxlc3NvbnNcclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3ZhbHVlcyAmJiB2YWx1ZXMubGVzc29uc31cclxuICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17KGUpID0+IGhhbmRsZURyYWcoZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZSkgPT4gaGFuZGxlRHJvcChlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aW5kZXggKyAxfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9MaXN0Lkl0ZW0uTWV0YT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID48L0xpc3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9JbnN0cnVjdG9yUm91dGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlRWRpdDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnN0cnVjdG9yUm91dGUiLCJDb3Vyc2VDcmVhdGVGb3JtIiwiUmVzaXplciIsInRvYXN0IiwidXNlUm91dGVyIiwiTGlzdCIsIkF2YXRhciIsIkNvdXJzZUVkaXQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInVwbG9hZGluZyIsInBhaWQiLCJjYXRlZ29yeSIsImxvYWRpbmciLCJpbWFnZVByZXZpZXciLCJsZXNzb25zIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInByZXZpZXciLCJzZXRQcmV2aWV3cyIsInVwbG9hZEJ1dHRvblRleHQiLCJzZXRVcGxvYWRCdXR0b25UZXh0Iiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwibG9hZENvdXJzZSIsImdldCIsImRhdGEiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbWFnZVJlbW92ZSIsInBvc3QiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJoYW5kbGVJbWFnZSIsImZpbGUiLCJmaWxlcyIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImltYWdlRmlsZVJlc2l6ZXIiLCJ1cmkiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1dCIsImhhbmRsZURyYWciLCJoYW5kbGVEcm9wIiwibGVuZ3RoIiwiaXRlbSIsImluZGV4IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9