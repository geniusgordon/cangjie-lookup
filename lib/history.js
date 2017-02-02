'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveHistory = exports.loadHistory = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const historyFileName = _path2.default.resolve(process.env.HOME, '.cangjie_history');

const loadHistory = exports.loadHistory = (() => {
  var _ref = _asyncToGenerator(function* () {
    const history = yield new Promise(function (resolve, reject) {
      return _fs2.default.readFile(historyFileName, function (err, data) {
        return err ? reject(err) : resolve(data);
      });
    });
    return history.toString().split('');
  });

  return function loadHistory() {
    return _ref.apply(this, arguments);
  };
})();

const saveHistory = exports.saveHistory = word => new Promise((resolve, reject) => _fs2.default.appendFile(historyFileName, word, err => err ? reject(err) : resolve()));