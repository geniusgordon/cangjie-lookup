// @flow
import fs from 'fs';
import path from 'path';
import parse from 'csv-parse';

const mapping = new Promise((resolve, reject) => {
  const rs = fs.createReadStream(
    path.resolve(__dirname, '../assets/cangjie5.txt'),
  );
  const parser = parse({ delimiter: '\t' }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
  rs.pipe(parser);
});

export default mapping;
