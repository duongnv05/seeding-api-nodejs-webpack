exports.id = 0;
exports.modules = {

/***/ "./controllers/pages.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _root = __webpack_require__("./controllers/root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageRouter = function (_RootRouter) {
  _inherits(PageRouter, _RootRouter);

  function PageRouter() {
    var _ret;

    _classCallCheck(this, PageRouter);

    var _this = _possibleConstructorReturn(this, (PageRouter.__proto__ || Object.getPrototypeOf(PageRouter)).call(this));

    console.log("sssssssssssssssssssssssssssssssssssssssssss");
    _this.router.get("/*", _this.routeHome.bind(_this));

    return _ret = _this.router, _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageRouter, [{
    key: "routeHome",
    value: function routeHome(req, res) {
      res.send("home api");
    }
  }], [{
    key: "getPageRouter",
    value: function getPageRouter() {
      return new PageRouter();
    }
  }]);

  return PageRouter;
}(_root2.default);

// module.exports = PageRouter.getPageRouter()


exports.default = function () {
  return PageRouter.getPageRouter();
};

/***/ })

};
//# sourceMappingURL=0.0e01939cc54a0168dc61.hot-update.js.map