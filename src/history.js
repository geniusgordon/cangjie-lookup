import fs from 'fs';
import path from 'path';

const historyFileName = path.resolve(process.env.HOME, '.cangjie_history');

export const loadHistory = async () => {
  try {
    const history = await new Promise((resolve, reject) =>
      fs.readFile(historyFileName, (err, data) => err ? reject(err) : resolve(data)));
    return history.toString().split('');
  } catch (err) {
    return [];
  }
};

export const saveHistory = word =>
  new Promise((resolve, reject) =>
    fs.appendFile(historyFileName, word, err => err ? reject(err) : resolve()));

