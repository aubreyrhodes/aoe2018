import Day03 from './index';

test('getInches', () => {
  const result = Day03.getInches('#1 @ 1,3: 4x4');
  expect(result).toEqual([[3, 1], [4, 1], [5, 1], [6, 1],
    [3, 2], [4, 2], [5, 2], [6, 2],
    [3, 3], [4, 3], [5, 3], [6, 3],
    [3, 4], [4, 4], [5, 4], [6, 4]]);
});

test('getOverlaps', () => {
  const result = Day03.getOverlaps('#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2\n#4 @ 3,3: 2x2\n');
  expect(result).toBe(4);
});

test('getNonOverlaps', () => {
  const result = Day03.getNonOverlaps('#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2\n#4 @ 3,3: 2x2\n');
  expect(result).toBe(3);
});
