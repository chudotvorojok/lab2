import calculate_a from './calculate_a';

describe('Проверка верности расчётов', () => {
  test('6*3', () => {
    expect(calculate_a(6, 3)).toBe(18);
  });
});
