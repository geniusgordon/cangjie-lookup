import fs from 'fs';
import path from 'path';

const historyFileName = path.resolve(process.env.HOME, '.cangjie_history');

export const loadHistory = async () => {
  const history = await new Promise((resolve, reject) =>
    fs.readFile(historyFileName, (err, data) => err ? reject(err) : resolve(data)));
  return history.toString().split('');
};

export const saveHistory = word =>
  new Promise((resolve, reject) =>
    fs.appendFile(historyFileName, word, err => err ? reject(err) : resolve()));

