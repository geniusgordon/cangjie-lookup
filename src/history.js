// @flow
import fs from 'fs';
import os from 'os';
import path from 'path';

const historyFileName = path.resolve(os.homedir(), '.cangjie_history');

export const loadHistory = async (): Promise<Array<string>> => {
  try {
    const history = await new Promise((resolve, reject) =>
      fs.readFile(
        historyFileName,
        (err, data) => err ? reject(err) : resolve(data),
      ));
    return history.toString().replace(/\s+/g, '').split('');
  } catch (err) {
    return [];
  }
};

export const saveHistory = (word: string): Promise<void> =>
  new Promise((resolve, reject) =>
    fs.appendFile(historyFileName, word, err => err ? reject(err) : resolve()));
