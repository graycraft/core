import { expect, test } from 'vitest';

import number from '#src/utility/number.mts';

describe('`round`', () => {
  test('Expect result of `round()` to be `null`.', () => {
    expect(number.round()).toBe(null);
  });
  test('Expect result of `round(void 0, NaN)` to be `null`.', () => {
    expect(number.round(void 0, NaN)).toBe(null);
  });
  test('Expect result of `round(void 0, -Infinity)` to be `null`.', () => {
    expect(number.round(void 0, -Infinity)).toBe(null);
  });
  test('Expect result of `round(void 0, -2.55)` to be `null`.', () => {
    expect(number.round(void 0, -2.55)).toBe(null);
  });
  test('Expect result of `round(void 0, -0b1)` to be `null`.', () => {
    expect(number.round(void 0, -0b1)).toBe(null);
  });
  test('Expect result of `round(void 0, 0)` to be `null`.', () => {
    expect(number.round(void 0, 0)).toBe(null);
  });
  test('Expect result of `round(void 0, 0b1)` to be `null`.', () => {
    expect(number.round(void 0, 0b1)).toBe(null);
  });
  test('Expect result of `round(void 0, 2.55)` to be `null`.', () => {
    expect(number.round(void 0, 2.55)).toBe(null);
  });
  test('Expect result of `round(void 0, Infinity)` to be `null`.', () => {
    expect(number.round(void 0, Infinity)).toBe(null);
  });
  test('Expect result of `round(void 0, "a")` to be `null`.', () => {
    expect(number.round(void 0, 'a')).toBe(null);
  });

  test('Expect result of `round(NaN)` to be `null`.', () => {
    expect(number.round(NaN)).toBe(null);
  });
  test('Expect result of `round(NaN, NaN)` to be `null`.', () => {
    expect(number.round(NaN, NaN)).toBe(null);
  });
  test('Expect result of `round(NaN, -Infinity)` to be `null`.', () => {
    expect(number.round(NaN, -Infinity)).toBe(null);
  });
  test('Expect result of `round(NaN, -2.55)` to be `null`.', () => {
    expect(number.round(NaN, -2.55)).toBe(null);
  });
  test('Expect result of `round(NaN, -0b1)` to be `null`.', () => {
    expect(number.round(NaN, -0b1)).toBe(null);
  });
  test('Expect result of `round(NaN, 0)` to be `null`.', () => {
    expect(number.round(NaN, 0)).toBe(null);
  });
  test('Expect result of `round(NaN, 0b1)` to be `null`.', () => {
    expect(number.round(NaN, 0b1)).toBe(null);
  });
  test('Expect result of `round(NaN, 2.55)` to be `null`.', () => {
    expect(number.round(NaN, 2.55)).toBe(null);
  });
  test('Expect result of `round(NaN, Infinity)` to be `null`.', () => {
    expect(number.round(NaN, Infinity)).toBe(null);
  });
  test('Expect result of `round(NaN, "a")` to be `null`.', () => {
    expect(number.round(NaN, 'a')).toBe(null);
  });

  test('Expect result of `round(-Infinity)` to be `null`.', () => {
    expect(number.round(-Infinity)).toBe(null);
  });
  test('Expect result of `round(-Infinity, NaN)` to be `null`.', () => {
    expect(number.round(-Infinity, NaN)).toBe(null);
  });
  test('Expect result of `round(-Infinity, -Infinity)` to be `null`.', () => {
    expect(number.round(-Infinity, -Infinity)).toBe(null);
  });
  test('Expect result of `round(-Infinity, -2.55)` to be `null`.', () => {
    expect(number.round(-Infinity, -2.55)).toBe(null);
  });
  test('Expect result of `round(-Infinity, -0b1)` to be `null`.', () => {
    expect(number.round(-Infinity, -0b1)).toBe(null);
  });
  test('Expect result of `round(-Infinity, 0)` to be `null`.', () => {
    expect(number.round(-Infinity, 0)).toBe(null);
  });
  test('Expect result of `round(-Infinity, 0b1)` to be `null`.', () => {
    expect(number.round(-Infinity, 0b1)).toBe(null);
  });
  test('Expect result of `round(-Infinity, 2.55)` to be `null`.', () => {
    expect(number.round(-Infinity, 2.55)).toBe(null);
  });
  test('Expect result of `round(-Infinity, Infinity)` to be `null`.', () => {
    expect(number.round(-Infinity, Infinity)).toBe(null);
  });
  test('Expect result of `round(-Infinity, "a")` to be `null`.', () => {
    expect(number.round(-Infinity, 'a')).toBe(null);
  });

  test('Expect result of `round(-2.55)` to be `-2.55`.', () => {
    expect(number.round(-2.55)).toBe(-2.55);
  });
  test('Expect result of `round(-2.55, NaN)` to be `null`.', () => {
    expect(number.round(-2.55, NaN)).toBe(null);
  });
  test('Expect result of `round(-2.55, -Infinity)` to be `null`.', () => {
    expect(number.round(-2.55, -Infinity)).toBe(null);
  });
  test('Expect result of `round(-2.55, -2.55)` to be `-0`.', () => {
    expect(number.round(-2.55, -2.55)).toBe(-0);
  });
  test('Expect result of `round(-2.55, -0b1)` to be `-0`.', () => {
    expect(number.round(-2.55, -0b1)).toBe(-0);
  });
  test('Expect result of `round(-2.55, 0)` to be `-3`.', () => {
    expect(number.round(-2.55, 0)).toBe(-3);
  });
  test('Expect result of `round(-2.55, 0b1)` to be `-2.5`.', () => {
    expect(number.round(-2.55, 0b1)).toBe(-2.5);
  });
  test('Expect result of `round(-2.55, 2.55)` to be `-2.55`.', () => {
    expect(number.round(-2.55, 2.55)).toBe(-2.55);
  });
  test('Expect result of `round(-2.55, Infinity)` to be `null`.', () => {
    expect(number.round(-2.55, Infinity)).toBe(null);
  });
  test('Expect result of `round(-2.55, "a")` to be `null`.', () => {
    expect(number.round(-2.55, 'a')).toBe(null);
  });

  test('Expect result of `round(-0b1)` to be `-1`.', () => {
    expect(number.round(-0b1)).toBe(-1);
  });
  test('Expect result of `round(-0b1, NaN)` to be `null`.', () => {
    expect(number.round(-0b1, NaN)).toBe(null);
  });
  test('Expect result of `round(-0b1, -Infinity)` to be `null`.', () => {
    expect(number.round(-0b1, -Infinity)).toBe(null);
  });
  test('Expect result of `round(-0b1, -2.55)` to be `-0`.', () => {
    expect(number.round(-0b1, -2.55)).toBe(-0);
  });
  test('Expect result of `round(-0b1, -0b1)` to be `-0`.', () => {
    expect(number.round(-0b1, -0b1)).toBe(-0);
  });
  test('Expect result of `round(-0b1, 0)` to be `-1`.', () => {
    expect(number.round(-0b1, 0)).toBe(-1);
  });
  test('Expect result of `round(-0b1, 0b1)` to be `-1`.', () => {
    expect(number.round(-0b1, 0b1)).toBe(-1);
  });
  test('Expect result of `round(-0b1, 2.55)` to be `-1`.', () => {
    expect(number.round(-0b1, 2.55)).toBe(-1);
  });
  test('Expect result of `round(-0b1, Infinity)` to be `null`.', () => {
    expect(number.round(-0b1, Infinity)).toBe(null);
  });
  test('Expect result of `round(-0b1, "a")` to be `null`.', () => {
    expect(number.round(-0b1, 'a')).toBe(null);
  });

  test('Expect result of `round(0)` to be `0`.', () => {
    expect(number.round(0)).toBe(0);
  });
  test('Expect result of `round(0, NaN)` to be `null`.', () => {
    expect(number.round(0, NaN)).toBe(null);
  });
  test('Expect result of `round(0, -Infinity)` to be `null`.', () => {
    expect(number.round(0, -Infinity)).toBe(null);
  });
  test('Expect result of `round(0, -2.55)` to be `0`.', () => {
    expect(number.round(0, -2.55)).toBe(0);
  });
  test('Expect result of `round(0, -0b1)` to be `0`.', () => {
    expect(number.round(0, -0b1)).toBe(0);
  });
  test('Expect result of `round(0, 0)` to be `0`.', () => {
    expect(number.round(0, 0)).toBe(0);
  });
  test('Expect result of `round(0, 0b1)` to be `0`.', () => {
    expect(number.round(0, 0b1)).toBe(0);
  });
  test('Expect result of `round(0, 2.55)` to be `0`.', () => {
    expect(number.round(0, 2.55)).toBe(0);
  });
  test('Expect result of `round(0, Infinity)` to be `null`.', () => {
    expect(number.round(0, Infinity)).toBe(null);
  });
  test('Expect result of `round(0, "a")` to be `null`.', () => {
    expect(number.round(0, 'a')).toBe(null);
  });

  test('Expect result of `round(0b1)` to be `1`.', () => {
    expect(number.round(0b1)).toBe(1);
  });
  test('Expect result of `round(0b1, NaN)` to be `null`.', () => {
    expect(number.round(0b1, NaN)).toBe(null);
  });
  test('Expect result of `round(0b1, -Infinity)` to be `null`.', () => {
    expect(number.round(0b1, -Infinity)).toBe(null);
  });
  test('Expect result of `round(0b1, -2.55)` to be `0`.', () => {
    expect(number.round(0b1, -2.55)).toBe(0);
  });
  test('Expect result of `round(0b1, -0b1)` to be `0`.', () => {
    expect(number.round(0b1, -0b1)).toBe(0);
  });
  test('Expect result of `round(0b1, 0)` to be `1`.', () => {
    expect(number.round(0b1, 0)).toBe(1);
  });
  test('Expect result of `round(0b1, 0b1)` to be `1`.', () => {
    expect(number.round(0b1, 0b1)).toBe(1);
  });
  test('Expect result of `round(0b1, 2.55)` to be `1`.', () => {
    expect(number.round(0b1, 2.55)).toBe(1);
  });
  test('Expect result of `round(0b1, Infinity)` to be `null`.', () => {
    expect(number.round(0b1, Infinity)).toBe(null);
  });
  test('Expect result of `round(0b1, "a")` to be `null`.', () => {
    expect(number.round(0b1, 'a')).toBe(null);
  });

  test('Expect result of `round(2.55)` to be `2.55`.', () => {
    expect(number.round(2.55)).toBe(2.55);
  });
  test('Expect result of `round(2.55, NaN)` to be `null`.', () => {
    expect(number.round(2.55, NaN)).toBe(null);
  });
  test('Expect result of `round(2.55, -Infinity)` to be `null`.', () => {
    expect(number.round(2.55, -Infinity)).toBe(null);
  });
  test('Expect result of `round(2.55, -2.55)` to be `0`.', () => {
    expect(number.round(2.55, -2.55)).toBe(0);
  });
  test('Expect result of `round(2.55, -0b1)` to be `0`.', () => {
    expect(number.round(2.55, -0b1)).toBe(0);
  });
  test('Expect result of `round(2.55, 0)` to be `3`.', () => {
    expect(number.round(2.55, 0)).toBe(3);
  });
  test('Expect result of `round(2.55, 0b1)` to be `2.6`.', () => {
    expect(number.round(2.55, 0b1)).toBe(2.6);
  });
  test('Expect result of `round(2.55, 2.55)` to be `2.55`.', () => {
    expect(number.round(2.55, 2.55)).toBe(2.55);
  });
  test('Expect result of `round(2.55, Infinity)` to be `null`.', () => {
    expect(number.round(2.55, Infinity)).toBe(null);
  });
  test('Expect result of `round(2.55, "a")` to be `null`.', () => {
    expect(number.round(2.55, 'a')).toBe(null);
  });

  test('Expect result of `round(Infinity)` to be `null`.', () => {
    expect(number.round(Infinity)).toBe(null);
  });
  test('Expect result of `round(Infinity, NaN)` to be `null`.', () => {
    expect(number.round(Infinity, NaN)).toBe(null);
  });
  test('Expect result of `round(Infinity, -Infinity)` to be `null`.', () => {
    expect(number.round(Infinity, -Infinity)).toBe(null);
  });
  test('Expect result of `round(Infinity, -2.55)` to be `null`.', () => {
    expect(number.round(Infinity, -2.55)).toBe(null);
  });
  test('Expect result of `round(Infinity, -0b1)` to be `null`.', () => {
    expect(number.round(Infinity, -0b1)).toBe(null);
  });
  test('Expect result of `round(Infinity, 0)` to be `null`.', () => {
    expect(number.round(Infinity, 0)).toBe(null);
  });
  test('Expect result of `round(Infinity, 0b1)` to be `null`.', () => {
    expect(number.round(Infinity, 0b1)).toBe(null);
  });
  test('Expect result of `round(Infinity, 2.55)` to be `null`.', () => {
    expect(number.round(Infinity, 2.55)).toBe(null);
  });
  test('Expect result of `round(Infinity, Infinity)` to be `null`.', () => {
    expect(number.round(Infinity, Infinity)).toBe(null);
  });
  test('Expect result of `round(Infinity, "a")` to be `null`.', () => {
    expect(number.round(Infinity, 'a')).toBe(null);
  });

  test('Expect result of `round("a")` to be `null`.', () => {
    expect(number.round('a')).toBe(null);
  });
  test('Expect result of `round("a", NaN)` to be `null`.', () => {
    expect(number.round('a', NaN)).toBe(null);
  });
  test('Expect result of `round("a", -Infinity)` to be `null`.', () => {
    expect(number.round('a', -Infinity)).toBe(null);
  });
  test('Expect result of `round("a", -2.55)` to be `null`.', () => {
    expect(number.round('a', -2.55)).toBe(null);
  });
  test('Expect result of `round("a", -0b1)` to be `null`.', () => {
    expect(number.round('a', -0b1)).toBe(null);
  });
  test('Expect result of `round("a", 0)` to be `null`.', () => {
    expect(number.round('a', 0)).toBe(null);
  });
  test('Expect result of `round("a", 0b1)` to be `null`.', () => {
    expect(number.round('a', 0b1)).toBe(null);
  });
  test('Expect result of `round("a", 2.55)` to be `null`.', () => {
    expect(number.round('a', 2.55)).toBe(null);
  });
  test('Expect result of `round("a", Infinity)` to be `null`.', () => {
    expect(number.round('a', Infinity)).toBe(null);
  });
  test('Expect result of `round("a", "a")` to be `null`.', () => {
    expect(number.round('a', 'a')).toBe(null);
  });

  test('Expect result of `round(Math.PI)` to be `3.14`.', () => {
    expect(number.round(Math.PI)).toBe(3.14);
  });
  test('Expect result of `round(Math.PI, NaN)` to be `null`.', () => {
    expect(number.round(Math.PI, NaN)).toBe(null);
  });
  test('Expect result of `round(Math.PI, -Infinity)` to be `null`.', () => {
    expect(number.round(Math.PI, -Infinity)).toBe(null);
  });
  test('Expect result of `round(Math.PI, -2.55)` to be `0`.', () => {
    expect(number.round(Math.PI, -2.55)).toBe(0);
  });
  test('Expect result of `round(Math.PI, -0b1)` to be `0`.', () => {
    expect(number.round(Math.PI, -0b1)).toBe(0);
  });
  test('Expect result of `round(Math.PI, 0)` to be `3`.', () => {
    expect(number.round(Math.PI, 0)).toBe(3);
  });
  test('Expect result of `round(Math.PI, 0b1)` to be `3.1`.', () => {
    expect(number.round(Math.PI, 0b1)).toBe(3.1);
  });
  test('Expect result of `round(Math.PI, 2.55)` to be `3.142`.', () => {
    expect(number.round(Math.PI, 2.55)).toBe(3.142);
  });
  test('Expect result of `round(Math.PI, Infinity)` to be `null`.', () => {
    expect(number.round(Math.PI, Infinity)).toBe(null);
  });
  test('Expect result of `round(Math.PI, "a")` to be `null`.', () => {
    expect(number.round(Math.PI, 'a')).toBe(null);
  });

  test('Expect result of `round(Math.PI, 2)` to be `3.14`.', () => {
    expect(number.round(Math.PI, 2)).toBe(3.14);
  });
  test('Expect result of `round(Math.PI, 3)` to be `3.142`.', () => {
    expect(number.round(Math.PI, 3)).toBe(3.142);
  });
  test('Expect result of `round(Math.PI, 4)` to be `3.1416`.', () => {
    expect(number.round(Math.PI, 4)).toBe(3.1416);
  });
  test('Expect result of `round(Math.PI, 5)` to be `3.14159`.', () => {
    expect(number.round(Math.PI, 5)).toBe(3.14159);
  });
  test('Expect result of `round(Math.PI, 6)` to be `3.141593`.', () => {
    expect(number.round(Math.PI, 6)).toBe(3.141593);
  });
  test('Expect result of `round(Math.PI, 7)` to be `3.1415927`.', () => {
    expect(number.round(Math.PI, 7)).toBe(3.1415927);
  });
  test('Expect result of `round(Math.PI, 8)` to be `3.14159265`.', () => {
    expect(number.round(Math.PI, 8)).toBe(3.14159265);
  });
  test('Expect result of `round(Math.PI, 9)` to be `3.141592654`.', () => {
    expect(number.round(Math.PI, 9)).toBe(3.141592654);
  });
  test('Expect result of `round(Math.PI, 10)` to be `3.1415926536`.', () => {
    expect(number.round(Math.PI, 10)).toBe(3.1415926536);
  });
  test('Expect result of `round(Math.PI, 11)` to be `3.14159265359`.', () => {
    expect(number.round(Math.PI, 11)).toBe(3.14159265359);
  });
  test('Expect result of `round(Math.PI, 12)` to be `3.14159265359`.', () => {
    expect(number.round(Math.PI, 12)).toBe(3.14159265359);
  });
  test('Expect result of `round(Math.PI, 13)` to be `3.1415926535898`.', () => {
    expect(number.round(Math.PI, 13)).toBe(3.1415926535898);
  });
  test('Expect result of `round(Math.PI, 14)` to be `3.14159265358979`.', () => {
    expect(number.round(Math.PI, 14)).toBe(3.14159265358979);
  });
  test('Expect result of `round(Math.PI, 15)` to be `3.141592653589793`.', () => {
    expect(number.round(Math.PI, 15)).toBe(3.141592653589793);
  });
  test('Expect result of `round(Math.PI, 15)` to be `Math.PI`.', () => {
    expect(number.round(Math.PI, 15)).toBe(Math.PI);
  });
});
