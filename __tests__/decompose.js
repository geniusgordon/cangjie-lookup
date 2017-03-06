import decompose from '../src/decompose';

describe('decompose', () => {
  it('should convert 你 to 人弓火', async () => {
    const result = await decompose('你');
    expect(result).toEqual({
      你: [{ key: 'onf', code: '人弓火' }],
    });
  });

  it('should convert 怎 to 人尸心', async () => {
    const result = await decompose('怎');
    expect(result).toEqual({
      怎: [{ key: 'osp', code: '人尸心' }],
    });
  });

  it('should convert 資 to 戈人月山金, 一人月山金 (two codes)', async () => {
    const result = await decompose('資');
    expect(result).toEqual({
      資: [{ key: 'iobuc', code: '戈人月山金' }, { key: 'mobuc', code: '一人月山金' }],
    });
  });

  it('should convert multiple words', async () => {
    const result = await decompose('你好');
    expect(result).toEqual({
      你: [{ key: 'onf', code: '人弓火' }],
      好: [{ key: 'vnd', code: '女弓木' }],
    });
  });
});
