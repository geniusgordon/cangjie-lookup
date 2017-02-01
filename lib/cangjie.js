const cangjie = {
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
  Z: 'Z',
};

var cangjieReverse = Object.keys(cangjie).reduce((obj, key) => {
  obj[cangjie[key]] = key;
  return obj;
}, {});

module.exports.cangjie = cangjie;
module.exports.cangjieReverse = cangjieReverse;

module.exports.keyToCangjie = function(string) {
  if (!string) return null;
  return string.toUpperCase().split('').filter((c) => {
    return cangjie[c] !== undefined;
  }).map((c) => {
    return cangjie[c];
  }).join('');
};

module.exports.cangjieToKey = function(string) {
  return string.split('').filter((c) => {
    return cangjieReverse[c] !== undefined;
  }).map((c) => {
    return cangjieReverse[c];
  }).join('');
};

