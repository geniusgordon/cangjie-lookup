import fs from 'fs';
import path from 'path';
import parse from 'csv-parse';
import fromPairs from 'lodash/fromPairs';
import { keyToCangjie } from './cangjie';

function buildMapping() {
  return new Promise((resolve) => {
    const rs = fs.createReadStream(path.resolve(__dirname,'../assets/cangjie5.txt'));
    const parser = parse({delimiter: '\t'}, function(err, data) {
      resolve(data);
    });
    rs.pipe(parser);
  });
}

const mappingPromise = buildMapping();

async function query(word) {
  if (typeof word !== 'string') {
    throw new TypeError(`Expect string but got ${typeof word}: ${word}.`);
  }
  const data = await mappingPromise;
  const result = data.filter((d) => d[1] == word[0]).map((d) => ({
    key: d[0],
    code: keyToCangjie(d[0]),
  }));
  if (result.length === 0) {
    throw new Error('Not found.');
  }
  return [word, result];
}

export default async (string) => {
  if (typeof string !== 'string') {
    throw new TypeError(`Expect string but got ${typeof string}: ${string}.`);
  }
  const result = await Promise.all(string.split('').map(query));
  return fromPairs(result);
};
