import { loadHistory, saveHistory } from '../src/history';
jest.mock('fs');

const a = '你';
const b = '好';
const c = '嗎';

it('should load empty history', async () => {
  const history = await loadHistory();
  expect(history).toEqual([]);
});

it('should save and load history', async () => {
  await saveHistory(a);
  await saveHistory(b);
  const history = await loadHistory();
  expect(history).toEqual([a, b]);
});

it('should append history', async () => {
  await saveHistory(c);
  const history = await loadHistory();
  expect(history).toEqual([a, b, c]);
});

it('should skip spaces', async () => {
  await saveHistory(' ');
  await saveHistory(c);
  const history = await loadHistory();
  expect(history).toEqual([a, b, c, c]);
});
