var request = require('request');
var cheerio = require('cheerio');
var cangjie = require('./cangjie');

const url = 'http://www.chinesecj.com/cj5dict/index.php';

function query(word, done) {
  if (typeof word !== 'string') {
    done('Not a string.');
    return;
  }
  request.get({
    url,
    qs: {
      stype: 1,
      cj: word[0],
    },
  }, (err, res, body) => {
    done(err, body);
  });
}

function parse(html) {
  var $ = cheerio.load(html);
  var cssSelector = 'table:nth-child(4) table tr:nth-child(2) td:nth-child(4)';
  return $(cssSelector).text();
}

module.exports.lookup = function(word, done) {
  query(word, (err, html) => {
    var result = parse(html);
    done(err, cangjie.keyToCangjie(result));
  });
};

