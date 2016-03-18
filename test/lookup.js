var expect = require('expect');
var lookup = require('../lookup');

describe('lookup', function() {
  it('should convert 你 to 人弓火', function(done) {
    lookup.lookup('你', (err, result) => {
      expect(err).toNotExist();
      expect(result).toBe('人弓火');
      done();
    });
  });

  it('should convert 怎 to 人尸心', function(done) {
    lookup.lookup('怎', (err, result) => {
      expect(err).toNotExist();
      expect(result).toBe('人尸心');
      done();
    });
  });
});

