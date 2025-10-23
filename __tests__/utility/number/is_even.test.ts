import number from '#src/utility/number.mts';

describe('`isEven`', () => {
  test('Expect result of `isEven(NaN)` to be `null`.', () => {
    expect(number.isEven(NaN)).toBe(null);
  });
  test('Expect result of `isEven(-Infinity)` to be `null`.', () => {
    expect(number.isEven(-Infinity)).toBe(null);
  });
  test('Expect result of `isEven(-2.55)` to be `false`.', () => {
    expect(number.isEven(-2.55)).toBe(false);
  });
  test('Expect result of `isEven(-0b1)` to be `false`.', () => {
    expect(number.isEven(-0b1)).toBe(false);
  });
  test('Expect result of `isEven(2.55)` to be `false`.', () => {
    expect(number.isEven(2.55)).toBe(false);
  });
  test('Expect result of `isEven(Infinity)` to be `null`.', () => {
    expect(number.isEven(Infinity)).toBe(null);
  });

  test('Expect result of `isEven(0)` to be `true`.', () => {
    expect(number.isEven(0)).toBe(true);
  });
  test('Expect result of `isEven(0b1)` to be `false`.', () => {
    expect(number.isEven(1)).toBe(false);
  });
  test('Expect result of `isEven(2)` to be `true`.', () => {
    expect(number.isEven(2)).toBe(true);
  });
  test('Expect result of `isEven(3)` to be `false`.', () => {
    expect(number.isEven(3)).toBe(false);
  });
});
