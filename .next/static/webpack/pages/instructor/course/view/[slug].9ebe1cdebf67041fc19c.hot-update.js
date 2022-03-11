"use strict";
self["webpackHotUpdate_N_E"]("pages/instructor/course/view/[slug]",{

/***/ "./pages/instructor/course/view/[slug].js":
/*!************************************************!*\
  !*** ./pages/instructor/course/view/[slug].js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/routes/InstructorRoute */ "./components/routes/InstructorRoute.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/index.js");
/* harmony import */ var _components_forms_AddLessonForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/forms/AddLessonForm */ "./components/forms/AddLessonForm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "E:\\BIGPROJECT\\mycourse\\client\\pages\\instructor\\course\\view\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // Import form




var CourseView = function CourseView() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      course = _useState[0],
      setCourse = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      uploading = _useState3[0],
      setUploading = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    title: "",
    content: "",
    video: {}
  }),
      values = _useState4[0],
      setValues = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("Upload Video"),
      uploadButtonText = _useState5[0],
      setUploadButtonText = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
      progress = _useState6[0],
      setProgress = _useState6[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var slug = router.query.slug;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    loadCourse();
  }, [slug]); // everytime slug changes , all the functions inside the useEffect change runs

  var loadCourse = /*#__PURE__*/function () {
    var _ref = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _yield$axios$get, data;

      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().get("/api/course/".concat(slug));

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              setCourse(data);

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
  }(); // Function for add lesson


  var handleAddLesson = /*#__PURE__*/function () {
    var _ref2 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e) {
      var _yield$axios$post, data;

      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.prev = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post("/api/course/lesson/".concat(slug, "/").concat(course.instructor._id), values);

            case 4:
              _yield$axios$post = _context2.sent;
              data = _yield$axios$post.data;
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                title: "",
                content: "",
                video: {}
              }));
              setVisible(false);
              setUploadButtonText("Upload Video");
              setCourse(data);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("Lesson added!");
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("Adding lesson failed");

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 13]]);
    }));

    return function handleAddLesson(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleVideo = /*#__PURE__*/function () {
    var _ref3 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(e) {
      var file, videoData, _yield$axios$post2, data;

      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              file = e.target.files[0];
              setUploadButtonText(file.name);
              setUploading(true); // send as formdata because video took to big if in binary form

              videoData = new FormData();
              videoData.append("video", file); // save progress bar and send  video as form data to backend

              _context3.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post("/api/course/video-upload/".concat(course.instructor._id), videoData, {
                // Upload built in function for progress
                onUploadPogress: function onUploadPogress(e) {
                  setProgress(Math.round(100 * e.loaded) / e.total);
                }
              });

            case 8:
              _yield$axios$post2 = _context3.sent;
              data = _yield$axios$post2.data;
              // once response is received
              console.log(data);
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                video: data
              }));
              setUploading(false);
              _context3.next = 19;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              setUploading(false);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("Video upload failed");

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 15]]);
    }));

    return function handleVideo(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleVideoRemove = /*#__PURE__*/function () {
    var _ref4 = (0,E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var _yield$axios$post3, data;

      return E_BIGPROJECT_mycourse_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setUploading(true);
              _context4.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().post("/api/course/video-remove/".concat(course.instructor._id), values.video);

            case 4:
              _yield$axios$post3 = _context4.sent;
              data = _yield$axios$post3.data;
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                video: {}
              }));
              setUploading(false);
              setUploadButtonText("Upload another video");
              _context4.next = 15;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              setUploading(false);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast)("Video Remove Failed");

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
    }));

    return function handleVideoRemove() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid pt-3",
      children: course && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-fluid pt-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "media pt-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Avatar, {
            size: 100,
            src: course.image ? course.image.Location : "/course.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "media-body pl-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  className: "mt-2 text-primary",
                  children: course.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: [course.lessons && course.lessons.length, " Lessons"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  style: {
                    marginTop: "-15px",
                    fontSize: "10px"
                  },
                  children: course.category
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "d-flex",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Tooltip, {
                  title: "edit",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.EditOutlined, {
                    onClick: function onClick() {
                      return router.push('');
                    },
                    className: "h5 pointer text-warning m-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Tooltip, {
                  title: "publish",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.CheckOutlined, {
                    className: "h5 pointer  m-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_12__.default, {
              children: course.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Button, {
            onClick: function onClick() {
              return setVisible(true);
            },
            className: "col-md-6 offset-md-3 text-center ",
            type: "primary",
            shape: "round",
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.UploadOutlined, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 23
            }, _this),
            size: "large",
            children: "Add Lesson"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Modal, {
            title: "+ Add Lesson",
            centered: true,
            visible: visible,
            onCancel: function onCancel() {
              return setVisible(false);
            },
            footer: null,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_AddLessonForm__WEBPACK_IMPORTED_MODULE_8__.default, {
              values: values,
              setValues: setValues,
              uploading: uploading,
              setUploading: setUploading,
              handleAddLesson: handleAddLesson,
              uploadButtonText: uploadButtonText,
              setUploadButtonText: setUploadButtonText,
              handleVideo: handleVideo,
              progress: progress,
              handleVideoRemove: handleVideoRemove
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row pt-5 ",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col lesson-list",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                children: [course && course.lessons && course.lessons.length, " lessons"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.List, {
                itemLayout: "horizontal",
                dataSource: course && course.lessons,
                renderItem: function renderItem(item, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.List.Item, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.List.Item.Meta, {
                      avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Avatar, {
                        children: index + 1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 35
                      }, _this),
                      title: item.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 23
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, _this);
};

_s(CourseView, "ujEZPYy0YtR6rub58nrM9Ufpqcw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = CourseView;
/* harmony default export */ __webpack_exports__["default"] = (CourseView);

var _c;

$RefreshReg$(_c, "CourseView");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2Uvdmlldy9bc2x1Z10uOWViZTFjZGViZjY3MDQxZmMxOWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1nQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0toQiwrQ0FBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ2hCaUIsTUFEZ0I7QUFBQSxNQUNSQyxTQURROztBQUFBLG1CQUVPbEIsK0NBQVEsQ0FBQyxLQUFELENBRmY7QUFBQSxNQUVoQm1CLE9BRmdCO0FBQUEsTUFFUEMsVUFGTzs7QUFBQSxtQkFHV3BCLCtDQUFRLENBQUMsS0FBRCxDQUhuQjtBQUFBLE1BR2hCcUIsU0FIZ0I7QUFBQSxNQUdMQyxZQUhLOztBQUFBLG1CQUlLdEIsK0NBQVEsQ0FBQztBQUNuQ3VCLElBQUFBLEtBQUssRUFBRSxFQUQ0QjtBQUVuQ0MsSUFBQUEsT0FBTyxFQUFFLEVBRjBCO0FBR25DQyxJQUFBQSxLQUFLLEVBQUU7QUFINEIsR0FBRCxDQUpiO0FBQUEsTUFJaEJDLE1BSmdCO0FBQUEsTUFJUkMsU0FKUTs7QUFBQSxtQkFTeUIzQiwrQ0FBUSxDQUFDLGNBQUQsQ0FUakM7QUFBQSxNQVNoQjRCLGdCQVRnQjtBQUFBLE1BU0VDLG1CQVRGOztBQUFBLG1CQVdTN0IsK0NBQVEsQ0FBQyxDQUFELENBWGpCO0FBQUEsTUFXaEI4QixRQVhnQjtBQUFBLE1BV05DLFdBWE07O0FBWXZCLE1BQU1DLE1BQU0sR0FBRzlCLHNEQUFTLEVBQXhCO0FBWnVCLE1BY2YrQixJQWRlLEdBY05ELE1BQU0sQ0FBQ0UsS0FkRCxDQWNmRCxJQWRlO0FBZ0J2QmhDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNka0MsSUFBQUEsVUFB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WVdkOzs7S0FaWGM7QUF5TE4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2Uvdmlldy9bc2x1Z10uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEluc3RydWN0b3JSb3V0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvSW5zdHJ1Y3RvclJvdXRlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBUb29sdGlwLCBCdXR0b24sIE1vZGFsLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRWRpdE91dGxpbmVkLCBDaGVja091dGxpbmVkLCBVcGxvYWRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuLy8gSW1wb3J0IGZvcm1cclxuaW1wb3J0IEFkZExlc3NvbkZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvQWRkTGVzc29uRm9ybVwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuY29uc3QgQ291cnNlVmlldyA9ICgpID0+IHtcclxuICBjb25zdCBbY291cnNlLCBzZXRDb3Vyc2VdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBsb2FkaW5nLCBzZXRVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICB2aWRlbzoge30sXHJcbiAgfSk7XHJcbiAgY29uc3QgW3VwbG9hZEJ1dHRvblRleHQsIHNldFVwbG9hZEJ1dHRvblRleHRdID0gdXNlU3RhdGUoXCJVcGxvYWQgVmlkZW9cIik7XHJcblxyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZENvdXJzZSgpO1xyXG4gIH0sIFtzbHVnXSk7XHJcbiAgLy8gZXZlcnl0aW1lIHNsdWcgY2hhbmdlcyAsIGFsbCB0aGUgZnVuY3Rpb25zIGluc2lkZSB0aGUgdXNlRWZmZWN0IGNoYW5nZSBydW5zXHJcblxyXG4gIGNvbnN0IGxvYWRDb3Vyc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9jb3Vyc2UvJHtzbHVnfWApO1xyXG4gICAgc2V0Q291cnNlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIGZvciBhZGQgbGVzc29uXHJcbiAgY29uc3QgaGFuZGxlQWRkTGVzc29uID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgL2FwaS9jb3Vyc2UvbGVzc29uLyR7c2x1Z30vJHtjb3Vyc2UuaW5zdHJ1Y3Rvci5faWR9YCxcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgKTtcclxuICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCB0aXRsZTogXCJcIiwgY29udGVudDogXCJcIiwgdmlkZW86IHt9IH0pO1xyXG5cclxuICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIHNldFVwbG9hZEJ1dHRvblRleHQoXCJVcGxvYWQgVmlkZW9cIik7XHJcbiAgICAgIHNldENvdXJzZShkYXRhKTtcclxuICAgICAgdG9hc3QoXCJMZXNzb24gYWRkZWQhXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHRvYXN0KFwiQWRkaW5nIGxlc3NvbiBmYWlsZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVmlkZW8gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICBzZXRVcGxvYWRCdXR0b25UZXh0KGZpbGUubmFtZSk7XHJcbiAgICAgIHNldFVwbG9hZGluZyh0cnVlKTtcclxuICAgICAgLy8gc2VuZCBhcyBmb3JtZGF0YSBiZWNhdXNlIHZpZGVvIHRvb2sgdG8gYmlnIGlmIGluIGJpbmFyeSBmb3JtXHJcbiAgICAgIGNvbnN0IHZpZGVvRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB2aWRlb0RhdGEuYXBwZW5kKFwidmlkZW9cIiwgZmlsZSk7XHJcbiAgICAgIC8vIHNhdmUgcHJvZ3Jlc3MgYmFyIGFuZCBzZW5kICB2aWRlbyBhcyBmb3JtIGRhdGEgdG8gYmFja2VuZFxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYC9hcGkvY291cnNlL3ZpZGVvLXVwbG9hZC8ke2NvdXJzZS5pbnN0cnVjdG9yLl9pZH1gLFxyXG4gICAgICAgIHZpZGVvRGF0YSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBVcGxvYWQgYnVpbHQgaW4gZnVuY3Rpb24gZm9yIHByb2dyZXNzXHJcbiAgICAgICAgICBvblVwbG9hZFBvZ3Jlc3M6IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzKE1hdGgucm91bmQoMTAwICogZS5sb2FkZWQpIC8gZS50b3RhbCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIG9uY2UgcmVzcG9uc2UgaXMgcmVjZWl2ZWRcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdmlkZW86IGRhdGEgfSk7XHJcbiAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgdG9hc3QoXCJWaWRlbyB1cGxvYWQgZmFpbGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZpZGVvUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0VXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYC9hcGkvY291cnNlL3ZpZGVvLXJlbW92ZS8ke2NvdXJzZS5pbnN0cnVjdG9yLl9pZH1gLFxyXG4gICAgICAgIHZhbHVlcy52aWRlb1xyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCB2aWRlbzoge30gfSk7XHJcbiAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFVwbG9hZEJ1dHRvblRleHQoXCJVcGxvYWQgYW5vdGhlciB2aWRlb1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB0b2FzdChcIlZpZGVvIFJlbW92ZSBGYWlsZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEluc3RydWN0b3JSb3V0ZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHQtM1wiPlxyXG4gICAgICAgIHtjb3Vyc2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHQtMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIHB0LTJcIj5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICBzaXplPXsxMDB9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2NvdXJzZS5pbWFnZSA/IGNvdXJzZS5pbWFnZS5Mb2NhdGlvbiA6IFwiL2NvdXJzZS5wbmdcIn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keSBwbC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0yIHRleHQtcHJpbWFyeVwiPntjb3Vyc2UubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntjb3Vyc2UubGVzc29ucyAmJiBjb3Vyc2UubGVzc29ucy5sZW5ndGh9IExlc3NvbnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi0xNXB4XCIsIGZvbnRTaXplOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cImVkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJycpfSBjbGFzc05hbWU9XCJoNSBwb2ludGVyIHRleHQtd2FybmluZyBtLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cInB1Ymxpc2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja091dGxpbmVkIGNsYXNzTmFtZT1cImg1IHBvaW50ZXIgIG0tMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24+e2NvdXJzZS5kZXNjcmlwdGlvbn08L1JlYWN0TWFya2Rvd24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtMyB0ZXh0LWNlbnRlciBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFkZCBMZXNzb25cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiKyBBZGQgTGVzc29uXCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBZGRMZXNzb25Gb3JtXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICBzZXRWYWx1ZXM9e3NldFZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgdXBsb2FkaW5nPXt1cGxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIHNldFVwbG9hZGluZz17c2V0VXBsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVBZGRMZXNzb249e2hhbmRsZUFkZExlc3Nvbn1cclxuICAgICAgICAgICAgICAgICAgdXBsb2FkQnV0dG9uVGV4dD17dXBsb2FkQnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkQnV0dG9uVGV4dD17c2V0VXBsb2FkQnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgaGFuZGxlVmlkZW89e2hhbmRsZVZpZGVvfVxyXG4gICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVZpZGVvUmVtb3ZlPXtoYW5kbGVWaWRlb1JlbW92ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwdC01IFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbGVzc29uLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UgJiYgY291cnNlLmxlc3NvbnMgJiYgY291cnNlLmxlc3NvbnMubGVuZ3RofSBsZXNzb25zXHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2NvdXJzZSAmJiBjb3Vyc2UubGVzc29uc31cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aW5kZXggKyAxfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvTGlzdC5JdGVtLk1ldGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA+PC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0luc3RydWN0b3JSb3V0ZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlVmlldztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiSW5zdHJ1Y3RvclJvdXRlIiwiYXhpb3MiLCJBdmF0YXIiLCJUb29sdGlwIiwiQnV0dG9uIiwiTW9kYWwiLCJMaXN0IiwiRWRpdE91dGxpbmVkIiwiQ2hlY2tPdXRsaW5lZCIsIlVwbG9hZE91dGxpbmVkIiwiUmVhY3RNYXJrZG93biIsIkFkZExlc3NvbkZvcm0iLCJ0b2FzdCIsIkNvdXJzZVZpZXciLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVwbG9hZGluZyIsInNldFVwbG9hZGluZyIsInRpdGxlIiwiY29udGVudCIsInZpZGVvIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXBsb2FkQnV0dG9uVGV4dCIsInNldFVwbG9hZEJ1dHRvblRleHQiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwibG9hZENvdXJzZSIsImdldCIsImRhdGEiLCJoYW5kbGVBZGRMZXNzb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiaW5zdHJ1Y3RvciIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVWaWRlbyIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJ2aWRlb0RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm9uVXBsb2FkUG9ncmVzcyIsIk1hdGgiLCJyb3VuZCIsImxvYWRlZCIsInRvdGFsIiwiaGFuZGxlVmlkZW9SZW1vdmUiLCJpbWFnZSIsIkxvY2F0aW9uIiwibGVzc29ucyIsImxlbmd0aCIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiY2F0ZWdvcnkiLCJwdXNoIiwiZGVzY3JpcHRpb24iLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9