// @flow
import invert from 'lodash/invert';

export const keyMapping = {
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

export const keyMappingReverse = invert(keyMapping);

export const keyToCangjie = (string: string): string => {
  if (!string) return '';
  return string
    .toUpperCase()
    .split('')
    .filter(c => !!keyMapping[c])
    .map(c => keyMapping[c])
    .join('');
};

export const cangjieToKey = (string: string): string => string
  .split('')
  .filter(c => !!keyMappingReverse[c])
  .map(c => keyMappingReverse[c])
  .join('');
