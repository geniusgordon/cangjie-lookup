// @flow
import { keyToCangjie } from './cangjie';
import mapping from './mapping';

type Result = {
  key: string,
  code: string,
};

const decompose = async (
  words: string,
): Promise<{ [key: string]: Array<Result> }> => {
  if (typeof words !== 'string') {
    return {};
  }
  const data = await mapping;
  const results = {};
  words.split('').forEach(word => {
    results[word] = data
      .filter(d => d[1] === word[0])
      .map(d => ({ key: d[0], code: keyToCangjie(d[0]) }));
  });
  return results;
};

export default decompose;
