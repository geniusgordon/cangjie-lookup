'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let query = (() => {
  var _ref = _asyncToGenerator(function* (word) {
    if (typeof word !== 'string') {
      throw new TypeError(`Expect string but got ${typeof word}: ${word}.`);
    }
    const data = yield mappingPromise;
    const result = data.filter(function (d) {
      return d[1] == word[0];
    }).map(function (d) {
      return { key: d[0], code: (0, _cangjie.keyToCangjie)(d[0]) };
    });
    if (result.length === 0) {
      throw new Error('Not found.');
    }
    return [word, result];
  });

  return function query(_x) {
    return _ref.apply(this, arguments);
  };
})();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _csvParse = require('csv-parse');

var _csvParse2 = _interopRequireDefault(_csvParse);

var _fromPairs = require('lodash/fromPairs');

var _fromPairs2 = _interopRequireDefault(_fromPairs);

var _cangjie = require('./cangjie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function buildMapping() {
  return new Promise(resolve => {
    const rs = _fs2.default.createReadStream(_path2.default.resolve(__dirname, '../assets/cangjie5.txt'));
    const parser = (0, _csvParse2.default)({ delimiter: '\t' }, function (err, data) {
      resolve(data);
    });
    rs.pipe(parser);
  });
}

const mappingPromise = buildMapping();

exports.default = (() => {
  var _ref2 = _asyncToGenerator(function* (string) {
    if (typeof string !== 'string') {
      throw new TypeError(`Expect string but got ${typeof string}: ${string}.`);
    }
    const result = yield Promise.all(string.split('').map(query));
    return (0, _fromPairs2.default)(result);
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})();