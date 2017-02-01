import cangjie from '../lib/cangjie';

describe('cangjieReverse', () => {
  it('check cangjieReverse', () => {
    Object.keys(cangjie.cangjie).forEach((c) => {
      expect(cangjie.cangjieReverse[cangjie.cangjie[c]]).toBe(c);
    });
  });
});

describe('keyToCangjie', () => {
  it('should convert QWERTY to 手田水口廿卜', () => {
    expect(cangjie.keyToCangjie('QWERTY')).toBe('手田水口廿卜');
  });

  it('should be case insensitive', () => {
    expect(cangjie.keyToCangjie('qwerty')).toBe('手田水口廿卜');
  });

  it('should ignore unknown characters', () => {
    expect(cangjie.keyToCangjie('Q?W?E?R?T?Y')).toBe('手田水口廿卜');
  });

  it('should return nothing when given nothing', () => {
    expect(cangjie.keyToCangjie()).toBeNull();
  });
});

describe('cangjieToKey', () => {
  it('should convert 手田水口廿卜 to QWERTY', () => {
    expect(cangjie.cangjieToKey('手田水口廿卜')).toBe('QWERTY');
  });

  it('should ignore unknown characters', () => {
    expect(cangjie.cangjieToKey('手?田?水?口?廿?卜')).toBe('QWERTY');
  });
});

