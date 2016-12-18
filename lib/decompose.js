var cangjie = require('./cangjie');
var fs = require('fs');
var parse = require('csv-parse');

function buildMapping() {
  return new Promise((resolve) => {
    var rs = fs.createReadStream(__dirname + '/cangjie5.txt');
    var parser = parse({delimiter: '\t'}, function(err, data) {
      resolve(data);
    });
    rs.pipe(parser);
  });
}

var mappingPromise = buildMapping();

function query(word) {
  return new Promise((resolve, reject) => {
    if (typeof word !== 'string') {
      reject(new Error('Not a string.'));
      return;
    }
    mappingPromise.then((data) => {
      var result = '';
      for (var i = 0; i < data.length; i++) {
        if (data[i][1] == word[0]) {
          result += data[i][0];
        }
      }
      if (result) {
        resolve(result);
      } else {
        reject('Not found.');
      }
    });
  });
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
      query(word).then((code) => {
        result[word] = cangjie.keyToCangjie(code);
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

