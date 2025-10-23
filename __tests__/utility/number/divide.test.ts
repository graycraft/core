import number from '#src/utility/number.mts';

describe('`divide`', () => {
  test('Expect result of `divide(NaN, NaN)` to be `null`.', () => {
    expect(number.divide(NaN, NaN)).toBe(null);
  });
  test('Expect result of `divide(NaN, -Infinity)` to be `null`.', () => {
    expect(number.divide(NaN, -Infinity)).toBe(null);
  });
  test('Expect result of `divide(NaN, -2.55)` to be `null`.', () => {
    expect(number.divide(NaN, -2.55)).toBe(null);
  });
  test('Expect result of `divide(NaN, -0b1)` to be `null`.', () => {
    expect(number.divide(NaN, -0b1)).toBe(null);
  });
  test('Expect result of `divide(NaN, 0)` to be `null`.', () => {
    expect(number.divide(NaN, 0)).toBe(null);
  });
  test('Expect result of `divide(NaN, 0b1)` to be `null`.', () => {
    expect(number.divide(NaN, 0b1)).toBe(null);
  });
  test('Expect result of `divide(NaN, 2.55)` to be `null`.', () => {
    expect(number.divide(NaN, 2.55)).toBe(null);
  });
  test('Expect result of `divide(NaN, Infinity)` to be `null`.', () => {
    expect(number.divide(NaN, Infinity)).toBe(null);
  });

  test('Expect result of `divide(-Infinity, NaN)` to be `null`.', () => {
    expect(number.divide(-Infinity, NaN)).toBe(null);
  });
  test('Expect result of `divide(-Infinity, -Infinity)` to be `null`.', () => {
    expect(number.divide(-Infinity, -Infinity)).toBe(null);
  });
  test('Expect result of `divide(-Infinity, -2.55)` to be `null`.', () => {
    expect(number.divide(-Infinity, -2.55)).toBe(null);
  });
  test('Expect result of `divide(-Infinity, -0b1)` to be `null`.', () => {
    expect(number.divide(-Infinity, -0b1)).toBe(null);
  });
  test('Expect result of `divide(-Infinity, 0)` to be `null`.', () => {
    expect(number.divide(-Infinity, 0)).toBe(null);
  });
  test('Expect result of `divide(-Infinity, 0b1)` to be `null`.', () => {
    expect(number.divide(-Infinity, 0b1)).toBe(null);
  });
  test('Expect result of `divide(-Infinity, 2.55)` to be `null`.', () => {
    expect(number.divide(-Infinity, 2.55)).toBe(null);
  });
  test('Expect result of `divide(-Infinity, Infinity)` to be `null`.', () => {
    expect(number.divide(-Infinity, Infinity)).toBe(null);
  });

  test('Expect result of `divide(-0b1, NaN)` to be `null`.', () => {
    expect(number.divide(-0b1, NaN)).toBe(null);
  });
  test('Expect result of `divide(-0b1, -Infinity)` to be `0`.', () => {
    expect(number.divide(-0b1, -Infinity)).toBe(0);
  });
  test('Expect result of `divide(-0b1, -2.55)` to be `0.3921568627450981`.', () => {
    expect(number.divide(-0b1, -2.55)).toBe(0.3921568627450981);
  });
  test('Expect result of `divide(-0b1, -0b1)` to be `1`.', () => {
    expect(number.divide(-0b1, -0b1)).toBe(1);
  });
  test('Expect result of `divide(-0b1, 0)` to be `null`.', () => {
    expect(number.divide(-0b1, 0)).toBe(null);
  });
  test('Expect result of `divide(-0b1, 0b1)` to be `-1`.', () => {
    expect(number.divide(-0b1, 0b1)).toBe(-1);
  });
  test('Expect result of `divide(-0b1, 2.55)` to be `-0.3921568627450981`.', () => {
    expect(number.divide(-0b1, 2.55)).toBe(-0.3921568627450981);
  });
  test('Expect result of `divide(-0b1, Infinity)` to be `-0`.', () => {
    expect(number.divide(-0b1, Infinity)).toBe(-0);
  });

  test('Expect result of `divide(0, NaN)` to be `null`.', () => {
    expect(number.divide(0, NaN)).toBe(null);
  });
  test('Expect result of `divide(0, -Infinity)` to be `-0`.', () => {
    expect(number.divide(0, -Infinity)).toBe(-0);
  });
  test('Expect result of `divide(0, -2.55)` to be `-0`.', () => {
    expect(number.divide(0, -2.55)).toBe(-0);
  });
  test('Expect result of `divide(0, -0b1)` to be `-0`.', () => {
    expect(number.divide(0, -0b1)).toBe(-0);
  });
  test('Expect result of `divide(0, 0)` to be `null`.', () => {
    expect(number.divide(0, 0)).toBe(null);
  });
  test('Expect result of `divide(0, 0b1)` to be `0`.', () => {
    expect(number.divide(0, 0b1)).toBe(0);
  });
  test('Expect result of `divide(0, 2.55)` to be `0`.', () => {
    expect(number.divide(0, 2.55)).toBe(0);
  });
  test('Expect result of `divide(0, Infinity)` to be `0`.', () => {
    expect(number.divide(0, Infinity)).toBe(0);
  });

  test('Expect result of `divide(0b1, NaN)` to be `null`.', () => {
    expect(number.divide(0b1, NaN)).toBe(null);
  });
  test('Expect result of `divide(0b1, -Infinity)` to be `-0`.', () => {
    expect(number.divide(0b1, -Infinity)).toBe(-0);
  });
  test('Expect result of `divide(0b1, -2.55)` to be `-0.3921568627450981`.', () => {
    expect(number.divide(0b1, -2.55)).toBe(-0.3921568627450981);
  });
  test('Expect result of `divide(0b1, -0b1)` to be `-1`.', () => {
    expect(number.divide(0b1, -0b1)).toBe(-1);
  });
  test('Expect result of `divide(0b1, 0)` to be `null`.', () => {
    expect(number.divide(0b1, 0)).toBe(null);
  });
  test('Expect result of `divide(0b1, 0b1)` to be `1`.', () => {
    expect(number.divide(0b1, 0b1)).toBe(1);
  });
  test('Expect result of `divide(0b1, 2.55)` to be `0.3921568627450981`.', () => {
    expect(number.divide(0b1, 2.55)).toBe(0.3921568627450981);
  });
  test('Expect result of `divide(0b1, Infinity)` to be `0`.', () => {
    expect(number.divide(0b1, Infinity)).toBe(0);
  });

  test('Expect result of `divide(2.55, NaN)` to be `null`.', () => {
    expect(number.divide(2.55, NaN)).toBe(null);
  });
  test('Expect result of `divide(2.55, -Infinity)` to be `-0`.', () => {
    expect(number.divide(2.55, -Infinity)).toBe(-0);
  });
  test('Expect result of `divide(2.55, -2.55)` to be `-1`.', () => {
    expect(number.divide(2.55, -2.55)).toBe(-1);
  });
  test('Expect result of `divide(2.55, -0b1)` to be `-2.55`.', () => {
    expect(number.divide(2.55, -0b1)).toBe(-2.55);
  });
  test('Expect result of `divide(2.55, 0)` to be `null`.', () => {
    expect(number.divide(2.55, 0)).toBe(null);
  });
  test('Expect result of `divide(2.55, 0b1)` to be `2.55`.', () => {
    expect(number.divide(2.55, 0b1)).toBe(2.55);
  });
  test('Expect result of `divide(2.55, 2.55)` to be `1`.', () => {
    expect(number.divide(2.55, 2.55)).toBe(1);
  });
  test('Expect result of `divide(2.55, Infinity)` to be `0`.', () => {
    expect(number.divide(2.55, Infinity)).toBe(0);
  });

  test('Expect result of `divide(Infinity, NaN)` to be `null`.', () => {
    expect(number.divide(Infinity, NaN)).toBe(null);
  });
  test('Expect result of `divide(Infinity, -Infinity)` to be `null`.', () => {
    expect(number.divide(Infinity, -Infinity)).toBe(null);
  });
  test('Expect result of `divide(Infinity, -2.55)` to be `null`.', () => {
    expect(number.divide(Infinity, -2.55)).toBe(null);
  });
  test('Expect result of `divide(Infinity, -0b1)` to be `null`.', () => {
    expect(number.divide(Infinity, -0b1)).toBe(null);
  });
  test('Expect result of `divide(Infinity, 0)` to be `null`.', () => {
    expect(number.divide(Infinity, 0)).toBe(null);
  });
  test('Expect result of `divide(Infinity, 0b1)` to be `null`.', () => {
    expect(number.divide(Infinity, 0b1)).toBe(null);
  });
  test('Expect result of `divide(Infinity, 2.55)` to be `null`.', () => {
    expect(number.divide(Infinity, 2.55)).toBe(null);
  });
  test('Expect result of `divide(Infinity, Infinity)` to be `null`.', () => {
    expect(number.divide(Infinity, Infinity)).toBe(null);
  });
});
