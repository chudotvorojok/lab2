import calculate from './calculate';

describe('Проверка верности расчётов', () => {
  test('6/3', () => {
    expect(calculate(6, 3)).toBe(2);
  });
});
