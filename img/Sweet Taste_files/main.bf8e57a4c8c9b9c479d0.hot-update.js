webpackHotUpdate("main",{

/***/ "./src/hoc/Layout/Layout.js":
/*!**********************************!*\
  !*** ./src/hoc/Layout/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Navigation/Navbar/Navbar */ "./src/components/Navigation/Navbar/Navbar.js");
/* harmony import */ var _components_Navigation_NavDrawer_NavDrawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Navigation/NavDrawer/NavDrawer */ "./src/components/Navigation/NavDrawer/NavDrawer.js");
/* harmony import */ var _components_Navigation_NavToggle_NavToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Navigation/NavToggle/NavToggle */ "./src/components/Navigation/NavToggle/NavToggle.js");
/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Logo/Logo */ "./src/components/Logo/Logo.js");





var _jsxFileName = "/Users/liangzihan/workspace/WebpageWorkspace/ReactWorkspace/Redux/SweetTaste/src/hoc/Layout/Layout.js";







var layout =
/*#__PURE__*/
function (_Component) {
  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(layout, _Component);

  function layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(layout)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      showNavigation: false,
      showOrderSummary: false // 用來控制cartSideDrawer的開關

    };

    _this.navigationClosedHandler = function () {
      _this.setState({
        showNavigation: false
      });
    };

    _this.navigationToggledHandler = function () {
      _this.setState(function (preState) {
        return {
          showNavigation: !preState.showNavigation,
          showOrderSummary: false
        };
      });
    };

    return _this;
  }

  Object(_Users_liangzihan_workspace_WebpageWorkspace_ReactWorkspace_Redux_SweetTaste_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_NavToggle_NavToggle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        toggle: this.navigationToggledHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Logo_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isAuth: this.props.isAuthenticated,
        show: this.state.showNavigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_NavDrawer_NavDrawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isAuth: this.props.isAuthenticated,
        show: this.state.showNavigation,
        closed: this.navigationClosedHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        style: {
          marginTop: "10rem",
          width: "100vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return layout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(layout));

/***/ })

})
//# sourceMappingURL=main.bf8e57a4c8c9b9c479d0.hot-update.js.map