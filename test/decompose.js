var expect = require('expect');
var decompose = require('../lib/decompose');

describe('decompose', function() {
  it('should convert 你 to 人弓火', function(done) {
    decompose.decompose('你', (err, result) => {
      expect(err).toNotExist();
      expect(result).toEqual({'你': '人弓火'});
      done();
    });
  });

  it('should convert 怎 to 人尸心', function(done) {
    decompose.decompose('怎', (err, result) => {
      expect(err).toNotExist();
      expect(result).toEqual({'怎': '人尸心'});
      done();
    });
  });

  it('should convert 資 to 戈人月山金一人月山金 (two codes)', function(done) {
    decompose.decompose('資', (err, result) => {
      expect(err).toNotExist();
      expect(result).toEqual({'資': '戈人月山金一人月山金'});
      done();
    });
  });

  it('should convert multiple words', function(done) {
    decompose.decompose('你好', (err, result) => {
      expect(err).toNotExist();
      expect(result).toEqual({'你': '人弓火', '好': '女弓木'});
      done();
    });
  });

  it('should get err in callback', function(done) {
    decompose.decompose(null, (err, result) => {
      expect(err).toExist();
      done();
    });
  });

  it('should be able to use promises', function(done) {
    decompose.decompose('你').then((result) => {
      expect(result).toEqual({'你': '人弓火'});
      done();
    });
  });

  it('should catch err in promise', function(done) {
    decompose.decompose(null).catch((err) => {
      expect(err).toExist();
      done();
    });
  });
});

