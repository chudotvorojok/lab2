import calculate_c from './calculate_c';

describe('Проверка верности расчётов', () => {
  test('6-3', () => {
    expect(calculate_c(6,3)).toBe(3);
  });
 });