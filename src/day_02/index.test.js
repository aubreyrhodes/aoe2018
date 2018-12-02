import Day02 from './index';

test('Counts 2 time ids correctly', () => {
  let result = Day02.count2('abcdef');
  expect(result).toBe(false);

  result = Day02.count2('bababc');
  expect(result).toBe(true);

  result = Day02.count2('abbcde');
  expect(result).toBe(true);
});

test('Counts 3 time ids correctly', () => {
  let result = Day02.count3('abcdef');
  expect(result).toBe(false);

  result = Day02.count3('bababc');
  expect(result).toBe(true);

  result = Day02.count3('abbcde');
  expect(result).toBe(false);
});

test('Checksum', () => {
  const data = 'abcdef, bababc, abbcde, abcccd, aabcdd, abcdee, ababab,';
  const result = Day02.checksum(data);
  expect(result).toBe(12);
});

test('One off', () => {
  const id1 = 'fguij';
  const id2 = 'fghij';
  const id3 = 'lllll';
  let result = Day02.oneOff(id1, id2);
  expect(result).toBe(true);

  result = Day02.oneOff(id1, id1);
  expect(result).toBe(false);

  result = Day02.oneOff(id1, id3);
  expect(result).toBe(false);
});

test('Get id', () => {
  const id1 = 'fguij';
  const id2 = 'fghij';
  const result = Day02.getId(id1, id2);
  expect(result).toBe('fgij');
});
