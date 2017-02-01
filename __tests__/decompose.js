import decompose from '../lib/decompose';

describe('decompose', () => {
  it('should convert 你 to 人弓火', async () => {
    const result = await decompose.decompose('你');
    expect(result).toEqual({'你': '人弓火'});
  });

  it('should convert 怎 to 人尸心', async () => {
    const result = await decompose.decompose('怎'); 
    expect(result).toEqual({'怎': '人尸心'});
  });

  it('should convert 資 to 戈人月山金一人月山金 (two codes)', async () => {
    const result = await decompose.decompose('資');
    expect(result).toEqual({'資': '戈人月山金一人月山金'});
  });

  it('should convert multiple words', async () => {
    const result = await decompose.decompose('你好');
    expect(result).toEqual({'你': '人弓火', '好': '女弓木'});
  });
});

