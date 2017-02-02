import {
  keyMapping,
  keyMappingReverse,
  keyToCangjie,
  cangjieToKey,
} from '../src/cangjie';

describe('Key Mapping', () => {
  it('check keyMappingReverse', () => {
    Object.keys(keyMapping).forEach((c) => {
      expect(keyMappingReverse[keyMapping[c]]).toBe(c);
    });
  });
});

describe('keyToCangjie', () => {
  it('should convert QWERTY to 手田水口廿卜', () => {
    expect(keyToCangjie('QWERTY')).toBe('手田水口廿卜');
  });

  it('should be case insensitive', () => {
    expect(keyToCangjie('qwerty')).toBe('手田水口廿卜');
  });

  it('should ignore unknown characters', () => {
    expect(keyToCangjie('Q?W?E?R?T?Y')).toBe('手田水口廿卜');
  });

  it('should return empty string when given nothing', () => {
    expect(keyToCangjie()).toBe('');
  });
});

describe('cangjieToKey', () => {
  it('should convert 手田水口廿卜 to QWERTY', () => {
    expect(cangjieToKey('手田水口廿卜')).toBe('QWERTY');
  });

  it('should ignore unknown characters', () => {
    expect(cangjieToKey('手?田?水?口?廿?卜')).toBe('QWERTY');
  });
});

