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

  it('should convert multiple words', function(done) {
    decompose.decompose('你好', (err, result) => {
      expect(err).toNotExist();
      expect(result).toEqual({'你': '人弓火', '好': '女弓木'});
      done();
    });
  });
});

