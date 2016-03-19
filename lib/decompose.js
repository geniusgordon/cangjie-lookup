var request = require('request');
var cheerio = require('cheerio');
var cangjie = require('./cangjie');

const url = 'http://www.chinesecj.com/cj5dict/index.php';

function query(word) {
  return new Promise((resolve, reject) => {
    if (typeof word !== 'string') {
      reject(new Error('Not a string.'));
      return;
    }
    request.get({
      url,
      qs: {
        stype: 1,
        cj: word[0],
      },
    }, (err, res, body) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(body);
    });
  });
}

function parse(html) {
  var $ = cheerio.load(html);
  var cssSelector = 'table:nth-child(4) table tr:nth-child(2) td:nth-child(4)';
  return $(cssSelector).text();
}

module.exports.decompose = function(string, done) {
  return new Promise((resolve, reject) => {
    if (typeof string !== 'string') {
      if (done) {
        done(new Error('Not a string.'));
      } else {
        reject(new Error('Not a string.'));
      }
      return;
    }
    var result = {};
    var count = 0;
    string.split('').forEach((word) => {
      query(word).then((html) => {
        result[word] = cangjie.keyToCangjie(parse(html));
        count++;
        if (count === string.length) {
          if (done) {
            done(null, result);
            return;
          }
          resolve(result);
        }
      }).catch((err) => {
        if (done) {
          done(err);
          return;
        }
        reject(err);
      });
    });
  });
};

