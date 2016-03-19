var request = require('request');
var cheerio = require('cheerio');
var cangjie = require('./cangjie');

const url = 'http://www.chinesecj.com/cj5dict/index.php';

function query(word, done) {
  if (typeof word !== 'string') {
    done && done(new Error('Not a string.'));
    return;
  }
  request.get({
    url,
    qs: {
      stype: 1,
      cj: word[0],
    },
  }, (err, res, body) => {
    done && done(err, body);
  });
}

function parse(html) {
  var $ = cheerio.load(html);
  var cssSelector = 'table:nth-child(4) table tr:nth-child(2) td:nth-child(4)';
  return $(cssSelector).text();
}

module.exports.decompose = function(string, done) {
  if (typeof string !== 'string') {
    done && done(new Error('Not a string.'));
    return;
  }
  var result = {};
  var count = 0;
  string.split('').forEach((word) => {
    query(word, (err, html) => {
      result[word] = cangjie.keyToCangjie(parse(html));
      count++;
      if (count === string.length) {
        done && done(err, result);
      }
    });
  });
};

