import calculate_b from './calculate_b';

describe('Проверка верности расчётов', () => {
  test('6+3', () => {
    expect(calculate_b(6, 3)).toBe(9);
  });
});
