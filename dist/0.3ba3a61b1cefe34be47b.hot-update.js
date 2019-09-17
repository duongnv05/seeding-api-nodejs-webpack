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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = _express2.default.Router();

console.log("#Init Controllers!!");
var files = _fs2.default.readdirSync("./controllers");
console.log(files);
files.forEach(function (file) {
  var nameController = _path2.default.parse(file).name;
  console.log(nameController, nameController != "index" && nameController != "root");
  if (nameController != "index" && nameController != "root") {
    console.log("hereh");
    router.use(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      });
    });
  }
});

module.exports = router;

/***/ })

};
//# sourceMappingURL=0.3ba3a61b1cefe34be47b.hot-update.js.map