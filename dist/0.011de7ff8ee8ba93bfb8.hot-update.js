exports.id = 0;
exports.modules = {

/***/ "./controllers recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": "./controllers/index.js",
	"./index": "./controllers/index.js",
	"./index.js": "./controllers/index.js",
	"./pages": "./controllers/pages.js",
	"./pages.js": "./controllers/pages.js",
	"./root": "./controllers/root.js",
	"./root.js": "./controllers/root.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./controllers recursive ^\\.\\/.*$";

/***/ }),

/***/ "./controllers recursive ^\\.\\/.*\\$$":
false,

/***/ "./controllers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__("express");

var _express2 = _interopRequireDefault(_express);

var _fs = __webpack_require__("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

console.log("#Init Controllers!!");
var files = _fs2.default.readdirSync("./controllers");
files.forEach(function (file) {
  var nameController = _path2.default.parse(file).name;
  console.log(nameController, nameController != "index" && nameController != "root");
  if (nameController != "index" && nameController != "root") {
    console.log("hereh");
    // router.use(() => importDy(nameController))
    router.use(__webpack_require__("./controllers recursive ^\\.\\/.*$")("./" + nameController));
  }
});

module.exports = router;

/***/ }),

/***/ "./controllers/pages.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    key: "instance",
    value: function instance() {
      console.log('static');
      return new PageRouter();
    }
  }]);

  return PageRouter;
}(_root2.default);

module.exports = PageRouter.instance();
// export default PageRouter.instance()

/***/ }),

/***/ "./controllers/root.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var router = _express2.default.Router();

var RootRouter = function RootRouter() {
  _classCallCheck(this, RootRouter);

  this.router = router;
};

exports.default = RootRouter;

/***/ })

};
//# sourceMappingURL=0.011de7ff8ee8ba93bfb8.hot-update.js.map