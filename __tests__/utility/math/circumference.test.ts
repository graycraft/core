import math from '#src/utility/math.mts';

describe('`circumference`', () => {
  test('Expect result of `circumference(NaN)` to be `null`.', () => {
    expect(math.circumference(NaN)).toBe(null);
  });
  test('Expect result of `circumference(-Infinity)` to be `null`.', () => {
    expect(math.circumference(-Infinity)).toBe(null);
  });
  test('Expect result of `circumference(-2.55)` to be `-16.022122533307943`.', () => {
    expect(math.circumference(-2.55)).toBe(-16.022122533307943);
  });
  test('Expect result of `circumference(-0b1)` to be `-6.283185307179586`.', () => {
    expect(math.circumference(-0b1)).toBe(-6.283185307179586);
  });
  test('Expect result of `circumference(0)` to be `0`.', () => {
    expect(math.circumference(0)).toBe(0);
  });
  test('Expect result of `circumference(0b1)` to be `6.283185307179586`.', () => {
    expect(math.circumference(0b1)).toBe(6.283185307179586);
  });
  test('Expect result of `circumference(2.55)` to be `16.022122533307943`.', () => {
    expect(math.circumference(2.55)).toBe(16.022122533307943);
  });
  test('Expect result of `circumference(Infinity)` to be `null`.', () => {
    expect(math.circumference(Infinity)).toBe(null);
  });
});
