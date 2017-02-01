'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cangjieToKey = exports.keyToCangjie = exports.keyMappingReverse = exports.keyMapping = undefined;

var _invert = require('lodash/invert');

var _invert2 = _interopRequireDefault(_invert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const keyMapping = exports.keyMapping = {
  A: '日',
  B: '月',
  C: '金',
  D: '木',
  E: '水',
  F: '火',
  G: '土',
  H: '竹',
  I: '戈',
  J: '十',
  K: '大',
  L: '中',
  M: '一',
  N: '弓',
  O: '人',
  P: '心',
  Q: '手',
  R: '口',
  S: '尸',
  T: '廿',
  U: '山',
  V: '女',
  W: '田',
  X: '重',
  Y: '卜',
  Z: 'Z'
};

const keyMappingReverse = exports.keyMappingReverse = (0, _invert2.default)(keyMapping);

const keyToCangjie = exports.keyToCangjie = string => {
  if (!string) return null;
  return string.toUpperCase().split('').filter(c => !!keyMapping[c]).map(c => keyMapping[c]).join('');
};

const cangjieToKey = exports.cangjieToKey = string => {
  return string.split('').filter(c => !!keyMappingReverse[c]).map(c => keyMappingReverse[c]).join('');
};