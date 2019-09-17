exports.id = 0;
exports.modules = {

/***/ "./entry-app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = __webpack_require__("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());

var bindMiddlewares = function bindMiddlewares() {
  app.use(__webpack_require__("./controllers/index.js"));

  app.use(function (req, res, next) {
    var err = new Error("Not Found");
    console.log('dsfasa');
    err.status = 404;
    next(err);
  });

  app.use(function (err, req, res, next) {
    // render error page
    res.status(err.status || 500);
    res.send(err.message);
  });
};

// app.use('/*', router.get('/', (req, res) => {
//   res.send("adf")
// }))

bindMiddlewares();

app.listen(4500, function () {
  var _console = console,
      log = _console.log;

  log("Server is listening on http://localhost:4500");
});

/***/ })

};
//# sourceMappingURL=0.04ecb623c54fb9723db8.hot-update.js.map