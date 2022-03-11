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
                      return router.push();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5zdHJ1Y3Rvci9jb3Vyc2Uvdmlldy9bc2x1Z10uZWM0ZWFiYjllN2U5MmE2MDc4NzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1nQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0toQiwrQ0FBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ2hCaUIsTUFEZ0I7QUFBQSxNQUNSQyxTQURROztBQUFBLG1CQUVPbEIsK0NBQVEsQ0FBQyxLQUFELENBRmY7QUFBQSxNQUVoQm1CLE9BRmdCO0FBQUEsTUFFUEMsVUFGTzs7QUFBQSxtQkFHV3BCLCtDQUFRLENBQUMsS0FBRCxDQUhuQjtBQUFBLE1BR2hCcUIsU0FIZ0I7QUFBQSxNQUdMQyxZQUhLOztBQUFBLG1CQUlLdEIsK0NBQVEsQ0FBQztBQUNuQ3VCLElBQUFBLEtBQUssRUFBRSxFQUQ0QjtBQUVuQ0MsSUFBQUEsT0FBTyxFQUFFLEVBRjBCO0FBR25DQyxJQUFBQSxLQUFLLEVBQUU7QUFINEIsR0FBRCxDQUpiO0FBQUEsTUFJaEJDLE1BSmdCO0FBQUEsTUFJUkMsU0FKUTs7QUFBQSxtQkFTeUIzQiwrQ0FBUSxDQUFDLGNBQUQsQ0FUakM7QUFBQSxNQVNoQjRCLGdCQVRnQjtBQUFBLE1BU0VDLG1CQVRGOztBQUFBLG1CQVdTN0IsK0NBQVEsQ0FBQyxDQUFELENBWGpCO0FBQUEsTUFXaEI4QixRQVhnQjtBQUFBLE1BV05DLFdBWE07O0FBWXZCLE1BQU1DLE1BQU0sR0FBRzlCLHNEQUFTLEVBQXhCO0FBWnVCLE1BY2YrQixJQWRlLEdBY05ELE1BQU0sQ0FBQ0UsS0FkRCxDQWNmRCxJQWRlO0FBZ0J2QmhDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNka0MsSUFBQUEsVUFB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YztBQXlMTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnN0cnVjdG9yL2NvdXJzZS92aWV3L1tzbHVnXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSW5zdHJ1Y3RvclJvdXRlIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3JvdXRlcy9JbnN0cnVjdG9yUm91dGVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIFRvb2x0aXAsIEJ1dHRvbiwgTW9kYWwsIExpc3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBFZGl0T3V0bGluZWQsIENoZWNrT3V0bGluZWQsIFVwbG9hZE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG4vLyBJbXBvcnQgZm9ybVxyXG5pbXBvcnQgQWRkTGVzc29uRm9ybSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9BZGRMZXNzb25Gb3JtXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5jb25zdCBDb3Vyc2VWaWV3ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3Vyc2UsIHNldENvdXJzZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGxvYWRpbmcsIHNldFVwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgY29udGVudDogXCJcIixcclxuICAgIHZpZGVvOiB7fSxcclxuICB9KTtcclxuICBjb25zdCBbdXBsb2FkQnV0dG9uVGV4dCwgc2V0VXBsb2FkQnV0dG9uVGV4dF0gPSB1c2VTdGF0ZShcIlVwbG9hZCBWaWRlb1wiKTtcclxuXHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2FkQ291cnNlKCk7XHJcbiAgfSwgW3NsdWddKTtcclxuICAvLyBldmVyeXRpbWUgc2x1ZyBjaGFuZ2VzICwgYWxsIHRoZSBmdW5jdGlvbnMgaW5zaWRlIHRoZSB1c2VFZmZlY3QgY2hhbmdlIHJ1bnNcclxuXHJcbiAgY29uc3QgbG9hZENvdXJzZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NvdXJzZS8ke3NsdWd9YCk7XHJcbiAgICBzZXRDb3Vyc2UoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gZm9yIGFkZCBsZXNzb25cclxuICBjb25zdCBoYW5kbGVBZGRMZXNzb24gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAvYXBpL2NvdXJzZS9sZXNzb24vJHtzbHVnfS8ke2NvdXJzZS5pbnN0cnVjdG9yLl9pZH1gLFxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICApO1xyXG4gICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHRpdGxlOiBcIlwiLCBjb250ZW50OiBcIlwiLCB2aWRlbzoge30gfSk7XHJcblxyXG4gICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgc2V0VXBsb2FkQnV0dG9uVGV4dChcIlVwbG9hZCBWaWRlb1wiKTtcclxuICAgICAgc2V0Q291cnNlKGRhdGEpO1xyXG4gICAgICB0b2FzdChcIkxlc3NvbiBhZGRlZCFcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgdG9hc3QoXCJBZGRpbmcgbGVzc29uIGZhaWxlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVWaWRlbyA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIHNldFVwbG9hZEJ1dHRvblRleHQoZmlsZS5uYW1lKTtcclxuICAgICAgc2V0VXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAvLyBzZW5kIGFzIGZvcm1kYXRhIGJlY2F1c2UgdmlkZW8gdG9vayB0byBiaWcgaWYgaW4gYmluYXJ5IGZvcm1cclxuICAgICAgY29uc3QgdmlkZW9EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHZpZGVvRGF0YS5hcHBlbmQoXCJ2aWRlb1wiLCBmaWxlKTtcclxuICAgICAgLy8gc2F2ZSBwcm9ncmVzcyBiYXIgYW5kIHNlbmQgIHZpZGVvIGFzIGZvcm0gZGF0YSB0byBiYWNrZW5kXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgL2FwaS9jb3Vyc2UvdmlkZW8tdXBsb2FkLyR7Y291cnNlLmluc3RydWN0b3IuX2lkfWAsXHJcbiAgICAgICAgdmlkZW9EYXRhLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIFVwbG9hZCBidWlsdCBpbiBmdW5jdGlvbiBmb3IgcHJvZ3Jlc3NcclxuICAgICAgICAgIG9uVXBsb2FkUG9ncmVzczogKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoTWF0aC5yb3VuZCgxMDAgKiBlLmxvYWRlZCkgLyBlLnRvdGFsKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gb25jZSByZXNwb25zZSBpcyByZWNlaXZlZFxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCB2aWRlbzogZGF0YSB9KTtcclxuICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB0b2FzdChcIlZpZGVvIHVwbG9hZCBmYWlsZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVmlkZW9SZW1vdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgL2FwaS9jb3Vyc2UvdmlkZW8tcmVtb3ZlLyR7Y291cnNlLmluc3RydWN0b3IuX2lkfWAsXHJcbiAgICAgICAgdmFsdWVzLnZpZGVvXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHZpZGVvOiB7fSB9KTtcclxuICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0VXBsb2FkQnV0dG9uVGV4dChcIlVwbG9hZCBhbm90aGVyIHZpZGVvXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHRvYXN0KFwiVmlkZW8gUmVtb3ZlIEZhaWxlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW5zdHJ1Y3RvclJvdXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwdC0zXCI+XHJcbiAgICAgICAge2NvdXJzZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwdC0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEgcHQtMlwiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgIHNpemU9ezEwMH1cclxuICAgICAgICAgICAgICAgIHNyYz17Y291cnNlLmltYWdlID8gY291cnNlLmltYWdlLkxvY2F0aW9uIDogXCIvY291cnNlLnBuZ1wifVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5IHBsLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1wcmltYXJ5XCI+e2NvdXJzZS5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2NvdXJzZS5sZXNzb25zICYmIGNvdXJzZS5sZXNzb25zLmxlbmd0aH0gTGVzc29uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTE1cHhcIiwgZm9udFNpemU6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvdXJzZS5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiZWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCggKX0gY2xhc3NOYW1lPVwiaDUgcG9pbnRlciB0ZXh0LXdhcm5pbmcgbS0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJwdWJsaXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tPdXRsaW5lZCBjbGFzc05hbWU9XCJoNSBwb2ludGVyICBtLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duPntjb3Vyc2UuZGVzY3JpcHRpb259PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTMgdGV4dC1jZW50ZXIgXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBZGQgTGVzc29uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIisgQWRkIExlc3NvblwiXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QWRkTGVzc29uRm9ybVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgc2V0VmFsdWVzPXtzZXRWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgIHVwbG9hZGluZz17dXBsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICBzZXRVcGxvYWRpbmc9e3NldFVwbG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkTGVzc29uPXtoYW5kbGVBZGRMZXNzb259XHJcbiAgICAgICAgICAgICAgICAgIHVwbG9hZEJ1dHRvblRleHQ9e3VwbG9hZEJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIHNldFVwbG9hZEJ1dHRvblRleHQ9e3NldFVwbG9hZEJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVZpZGVvPXtoYW5kbGVWaWRlb31cclxuICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVWaWRlb1JlbW92ZT17aGFuZGxlVmlkZW9SZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHQtNSBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGxlc3Nvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICB7Y291cnNlICYmIGNvdXJzZS5sZXNzb25zICYmIGNvdXJzZS5sZXNzb25zLmxlbmd0aH0gbGVzc29uc1xyXG4gICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtjb3Vyc2UgJiYgY291cnNlLmxlc3NvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2luZGV4ICsgMX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L0xpc3QuSXRlbS5NZXRhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPjwvTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9JbnN0cnVjdG9yUm91dGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZVZpZXc7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkluc3RydWN0b3JSb3V0ZSIsImF4aW9zIiwiQXZhdGFyIiwiVG9vbHRpcCIsIkJ1dHRvbiIsIk1vZGFsIiwiTGlzdCIsIkVkaXRPdXRsaW5lZCIsIkNoZWNrT3V0bGluZWQiLCJVcGxvYWRPdXRsaW5lZCIsIlJlYWN0TWFya2Rvd24iLCJBZGRMZXNzb25Gb3JtIiwidG9hc3QiLCJDb3Vyc2VWaWV3IiwiY291cnNlIiwic2V0Q291cnNlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1cGxvYWRpbmciLCJzZXRVcGxvYWRpbmciLCJ0aXRsZSIsImNvbnRlbnQiLCJ2aWRlbyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVwbG9hZEJ1dHRvblRleHQiLCJzZXRVcGxvYWRCdXR0b25UZXh0IiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsImxvYWRDb3Vyc2UiLCJnZXQiLCJkYXRhIiwiaGFuZGxlQWRkTGVzc29uIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImluc3RydWN0b3IiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVmlkZW8iLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwidmlkZW9EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJvblVwbG9hZFBvZ3Jlc3MiLCJNYXRoIiwicm91bmQiLCJsb2FkZWQiLCJ0b3RhbCIsImhhbmRsZVZpZGVvUmVtb3ZlIiwiaW1hZ2UiLCJMb2NhdGlvbiIsImxlc3NvbnMiLCJsZW5ndGgiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImNhdGVnb3J5IiwicHVzaCIsImRlc2NyaXB0aW9uIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==