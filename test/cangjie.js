var expect = require('expect');
var cangjie = require('../lib/cangjie');

describe('cangjieReverse', function() {
  it('check cangjieReverse', function() {
    Object.keys(cangjie.cangjie).forEach((c) => {
      expect(cangjie.cangjieReverse[cangjie.cangjie[c]]).toBe(c);
    });
  });
});

describe('keyToCangjie', function() {
  it('should convert QWERTY to 手田水口廿卜', function() {
    expect(cangjie.keyToCangjie('QWERTY')).toBe('手田水口廿卜');
  });

  it('should be case insensitive', function() {
    expect(cangjie.keyToCangjie('qwerty')).toBe('手田水口廿卜');
  });

  it('should ignore unknown characters', function() {
    expect(cangjie.keyToCangjie('Q?W?E?R?T?Y')).toBe('手田水口廿卜');
  });

  it('should return nothing when given nothing', function() {
    expect(cangjie.keyToCangjie()).toNotExist();
  });
});

describe('cangjieToKey', function() {
  it('should convert 手田水口廿卜 to QWERTY', function() {
    expect(cangjie.cangjieToKey('手田水口廿卜')).toBe('QWERTY');
  });

  it('should ignore unknown characters', function() {
    expect(cangjie.cangjieToKey('手?田?水?口?廿?卜')).toBe('QWERTY');
  });
});

