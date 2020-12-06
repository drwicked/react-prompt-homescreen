"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isInStandaloneMode = exports.isIos = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _universalCookie = _interopRequireDefault(require("universal-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .add-to-home-banner {\n    position: fixed;\n    bottom: 0px;\n    width: 100%;\n    background: white;\n    color: black;\n    text-align: left;\n    -webkit-user-select: none;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    .add-to-home-content {\n      display: flex;\n      align-items: center;\n    }\n\n    .add-to-home-icon {\n      width: 32px;\n      height: 32px;\n      padding: 10px;\n      padding-right: 0;\n    }\n\n    .add-to-home-text {\n      display: inline-block;\n      font-size: 16px;\n      padding-left: 10px;\n    }\n\n    .add-to-home-close-btn {\n      display: inline-block;\n      position: relative;\n      right: 4px;\n      float: right;\n      font-size: 32px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var cookies = new _universalCookie["default"]();

var isIos = function isIos() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

exports.isIos = isIos;

var isInStandaloneMode = function isInStandaloneMode() {
  return 'standalone' in window.navigator && window.navigator.standalone;
};

exports.isInStandaloneMode = isInStandaloneMode;

var PromptWrap = _styledComponents["default"].div(_templateObject());

var AddToHomescreen = /*#__PURE__*/function (_Component) {
  _inherits(AddToHomescreen, _Component);

  var _super = _createSuper(AddToHomescreen);

  function AddToHomescreen(props) {
    var _this;

    _classCallCheck(this, AddToHomescreen);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onAddToHomescreenClick", function () {
      var onAddToHomescreenClick = _this.props.onAddToHomescreenClick;
      onAddToHomescreenClick();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseBannerBtnClick", function () {
      cookies.set('ignoreHomeScreenPrompt', true);

      _this.setState({
        bannerVisible: false
      });
    });

    var ignoreHomeScreenPrompt = cookies.get('ignoreHomeScreenPrompt') === 'true';
    _this.state = {
      bannerVisible: true,
      ignoreHomeScreenPrompt: ignoreHomeScreenPrompt
    };
    return _this;
  }

  _createClass(AddToHomescreen, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          icon = _this$props.icon;
      var _this$state = this.state,
          bannerVisible = _this$state.bannerVisible,
          ignoreHomeScreenPrompt = _this$state.ignoreHomeScreenPrompt;
      var shouldRender = !ignoreHomeScreenPrompt && bannerVisible && isIos() && !isInStandaloneMode();
      return /*#__PURE__*/_react["default"].createElement(PromptWrap, null, shouldRender ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "add-to-home-banner"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "add-to-home-content"
      }, icon !== '' ? /*#__PURE__*/_react["default"].createElement("img", {
        className: "add-to-home-icon",
        alt: "App Icon",
        src: icon
      }) : null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "add-to-home-text"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        onClick: this.onAddToHomescreenClick
      }, title || 'Add to home screen'))), /*#__PURE__*/_react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: 24,
        viewBox: "0 0 24 24",
        width: 24,
        className: "add-to-home-close-btn",
        onClick: this.handleCloseBannerBtnClick
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      }))) : null);
    }
  }]);

  return AddToHomescreen;
}(_react.Component);

AddToHomescreen.propTypes = {
  onAddToHomescreenClick: _propTypes["default"].func,
  title: _propTypes["default"].string,
  icon: _propTypes["default"].string
};
AddToHomescreen.defaultProps = {
  onAddToHomescreenClick: function onAddToHomescreenClick() {
    alert("\n1. Open Share menu\n2. Tap on \"Add to Home Screen\" button");
  },
  title: 'Add to home screen',
  icon: ''
};
var _default = AddToHomescreen;
exports["default"] = _default;