import Day01 from './index';

test('parses positive results', () => {
  const result = Day01.run('+1, +1, +1');
  expect(result).toBe(3);
});

test('parses negative results', () => {
  const result = Day01.run('+1, +1, -2');
  expect(result).toBe(0);
});

test('run2 tracks freqencies it has already reached', () => {
  const result = Day01.run2('+1, -1');
  expect(result).toBe(0);
});

test('run2 tracks freqencies it has already reached again', () => {
  const result = Day01.run2('+3, +3, +4, -2, -4');
  expect(result).toBe(10);
});

test('run2 tracks freqencies it has already reached again 2', () => {
  const result = Day01.run2('+7, +7, -2, -7, -4,');
  expect(result).toBe(14);
});
