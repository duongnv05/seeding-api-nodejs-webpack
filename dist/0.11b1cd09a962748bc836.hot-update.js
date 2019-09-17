exports.id = 0;
exports.modules = {

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
    router.use(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  }
});

module.exports = router;

/***/ })

};
//# sourceMappingURL=0.11b1cd09a962748bc836.hot-update.js.map