const sum = require('./sum');

test('adds 2 + 2 to equal > 10', () => {
  expect(sum(1, 2)).not.toBe(true);
});

const num = require('./arr');

test('Равна ли num - 5?', () => {
  expect(num).toBe(5);
});

const each = require('./each');

test('Наша функция вернет массив?', () => {
  expect(Array.isArray(each)).toBe(true);
});

test('Наша функция извлекает корни из массива?', () => {
  expect(each).toEqual([8, 7, 6, 5, 4]);
});

test('Длинна нашего массива равна 5?', () => {
  expect(each).toHaveLength(5);
});