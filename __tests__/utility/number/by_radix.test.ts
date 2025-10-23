import NUMBER from '#src/constant/number.mts';
import number from '#src/utility/number.mts';

describe('`byRadix`', () => {
  test('Expect result of `byRadix()` to be `null`.', () => {
    expect(number.byRadix()).toBe(null);
  });
  test('Expect result of `byRadix(void 0, NaN)` to be `null`.', () => {
    expect(number.byRadix(void 0, NaN)).toBe(null);
  });
  test('Expect result of `byRadix(void 0, -Infinity)` to be `null`.', () => {
    expect(number.byRadix(void 0, -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(void 0, -2.55)` to be `null`.', () => {
    expect(number.byRadix(void 0, -2.55)).toBe(null);
  });
  test('Expect result of `byRadix(void 0, -0b1)` to be `null`.', () => {
    expect(number.byRadix(void 0, -0b1)).toBe(null);
  });
  test('Expect result of `byRadix(void 0, 0)` to be `null`.', () => {
    expect(number.byRadix(void 0, 0)).toBe(null);
  });
  test('Expect result of `byRadix(void 0, 0b1)` to be `null`.', () => {
    expect(number.byRadix(void 0, 0b1)).toBe(null);
  });
  test('Expect result of `byRadix(void 0, 2.55)` to be `null`.', () => {
    expect(number.byRadix(void 0, 2.55)).toBe(null);
  });
  test('Expect result of `byRadix(void 0, Infinity)` to be `null`.', () => {
    expect(number.byRadix(void 0, Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(void 0, "a")` to be `null`.', () => {
    expect(number.byRadix(void 0, 'a')).toBe(null);
  });

  test('Expect result of `byRadix(NaN)` to be `null`.', () => {
    expect(number.byRadix(NaN)).toBe(null);
  });
  test('Expect result of `byRadix(NaN, NaN)` to be `null`.', () => {
    expect(number.byRadix(NaN, NaN)).toBe(null);
  });
  test('Expect result of `byRadix(NaN, -Infinity)` to be `null`.', () => {
    expect(number.byRadix(NaN, -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(NaN, -2.55)` to be `null`.', () => {
    expect(number.byRadix(NaN, -2.55)).toBe(null);
  });
  test('Expect result of `byRadix(NaN, -0b1)` to be `null`.', () => {
    expect(number.byRadix(NaN, -0b1)).toBe(null);
  });
  test('Expect result of `byRadix(NaN, 0)` to be `null`.', () => {
    expect(number.byRadix(NaN, 0)).toBe(null);
  });
  test('Expect result of `byRadix(NaN, 0b1)` to be `null`.', () => {
    expect(number.byRadix(NaN, 0b1)).toBe(null);
  });
  test('Expect result of `byRadix(NaN, 2.55)` to be `null`.', () => {
    expect(number.byRadix(NaN, 2.55)).toBe(null);
  });
  test('Expect result of `byRadix(NaN, Infinity)` to be `null`.', () => {
    expect(number.byRadix(NaN, Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(NaN, "a")` to be `null`.', () => {
    expect(number.byRadix(NaN, 'a')).toBe(null);
  });

  test('Expect result of `byRadix(-Infinity)` to be `null`.', () => {
    expect(number.byRadix(-Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(-Infinity, NaN)` to be `null`.', () => {
    expect(number.byRadix(-Infinity, NaN)).toBe(null);
  });
  test('Expect result of `byRadix(-Infinity, -Infinity)` to be `null`.', () => {
    expect(number.byRadix(-Infinity, -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(-Infinity, -2.55)` to be `null`.', () => {
    expect(number.byRadix(-Infinity, -2.55)).toBe(null);
  });
  test('Expect result of `byRadix(-Infinity, -0b1)` to be `null`.', () => {
    expect(number.byRadix(-Infinity, -0b1)).toBe(null);
  });
  test('Expect result of `byRadix(-Infinity, 0)` to be `null`.', () => {
    expect(number.byRadix(-Infinity, 0)).toBe(null);
  });
  test('Expect result of `byRadix(-Infinity, 0b1)` to be `null`.', () => {
    expect(number.byRadix(-Infinity, 0b1)).toBe(null);
  });
  test('Expect result of `byRadix(-Infinity, 2.55)` to be `null`.', () => {
    expect(number.byRadix(-Infinity, 2.55)).toBe(null);
  });
  test('Expect result of `byRadix(-Infinity, Infinity)` to be `null`.', () => {
    expect(number.byRadix(-Infinity, Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(-Infinity, "a")` to be `null`.', () => {
    expect(number.byRadix(-Infinity, 'a')).toBe(null);
  });

  test('Expect result of `byRadix(-2.55)` to be `null`.', () => {
    expect(number.byRadix(-2.55)).toBe(null);
  });
  test('Expect result of `byRadix(-2.55, NaN)` to be `null`.', () => {
    expect(number.byRadix(-2.55, NaN)).toBe(null);
  });
  test('Expect result of `byRadix(-2.55, -Infinity)` to be `null`.', () => {
    expect(number.byRadix(-2.55, -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(-2.55, -2.55)` to be `null`.', () => {
    expect(number.byRadix(-2.55, -2.55)).toBe(null);
  });
  test('Expect result of `byRadix(-2.55, -0b1)` to be `null`.', () => {
    expect(number.byRadix(-2.55, -0b1)).toBe(null);
  });
  test('Expect result of `byRadix(-2.55, 0)` to be `null`.', () => {
    expect(number.byRadix(-2.55, 0)).toBe(null);
  });
  test('Expect result of `byRadix(-2.55, 0b1)` to be `null`.', () => {
    expect(number.byRadix(-2.55, 0b1)).toBe(null);
  });
  test('Expect result of `byRadix(-2.55, 2.55)` to be `null`.', () => {
    expect(number.byRadix(-2.55, 2.55)).toBe(null);
  });
  test('Expect result of `byRadix(-2.55, Infinity)` to be `null`.', () => {
    expect(number.byRadix(-2.55, Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(-2.55, "a")` to be `null`.', () => {
    expect(number.byRadix(-2.55, 'a')).toBe(null);
  });

  test('Expect result of `byRadix(-0b1)` to be `"-1"`.', () => {
    expect(number.byRadix(-0b1)).toBe('-1');
  });
  test('Expect result of `byRadix(-0b1, NaN)` to be `null`.', () => {
    expect(number.byRadix(-0b1, NaN)).toBe(null);
  });
  test('Expect result of `byRadix(-0b1, -Infinity)` to be `null`.', () => {
    expect(number.byRadix(-0b1, -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(-0b1, -2.55)` to be `null`.', () => {
    expect(number.byRadix(-0b1, -2.55)).toBe(null);
  });
  test('Expect result of `byRadix(-0b1, -0b1)` to be `null`.', () => {
    expect(number.byRadix(-0b1, -0b1)).toBe(null);
  });
  test('Expect result of `byRadix(-0b1, 0)` to be `null`.', () => {
    expect(number.byRadix(-0b1, 0)).toBe(null);
  });
  test('Expect result of `byRadix(-0b1, 0b1)` to be `null`.', () => {
    expect(number.byRadix(-0b1, 0b1)).toBe(null);
  });
  test('Expect result of `byRadix(-0b1, 2.55)` to be `null`.', () => {
    expect(number.byRadix(-0b1, 2.55)).toBe(null);
  });
  test('Expect result of `byRadix(-0b1, Infinity)` to be `null`.', () => {
    expect(number.byRadix(-0b1, Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(-0b1, "a")` to be `null`.', () => {
    expect(number.byRadix(-0b1, 'a')).toBe(null);
  });

  test('Expect result of `byRadix(0)` to be `"0"`.', () => {
    expect(number.byRadix(0)).toBe('0');
  });
  test('Expect result of `byRadix(0, NaN)` to be `null`.', () => {
    expect(number.byRadix(0, NaN)).toBe(null);
  });
  test('Expect result of `byRadix(0, -Infinity)` to be `null`.', () => {
    expect(number.byRadix(0, -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(0, -2.55)` to be `null`.', () => {
    expect(number.byRadix(0, -2.55)).toBe(null);
  });
  test('Expect result of `byRadix(0, -0b1)` to be `null`.', () => {
    expect(number.byRadix(0, -0b1)).toBe(null);
  });
  test('Expect result of `byRadix(0, 0)` to be `null`.', () => {
    expect(number.byRadix(0, 0)).toBe(null);
  });
  test('Expect result of `byRadix(0, 0b1)` to be `null`.', () => {
    expect(number.byRadix(0, 0b1)).toBe(null);
  });
  test('Expect result of `byRadix(0, 2.55)` to be `null`.', () => {
    expect(number.byRadix(0, 2.55)).toBe(null);
  });
  test('Expect result of `byRadix(0, Infinity)` to be `null`.', () => {
    expect(number.byRadix(0, Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(0, "a")` to be `null`.', () => {
    expect(number.byRadix(0, 'a')).toBe(null);
  });

  test('Expect result of `byRadix(0b1)` to be `"1"`.', () => {
    expect(number.byRadix(0b1)).toBe('1');
  });
  test('Expect result of `byRadix(0b1, NaN)` to be `null`.', () => {
    expect(number.byRadix(0b1, NaN)).toBe(null);
  });
  test('Expect result of `byRadix(0b1, -Infinity)` to be `null`.', () => {
    expect(number.byRadix(0b1, -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(0b1, -2.55)` to be `null`.', () => {
    expect(number.byRadix(0b1, -2.55)).toBe(null);
  });
  test('Expect result of `byRadix(0b1, -0b1)` to be `null`.', () => {
    expect(number.byRadix(0b1, -0b1)).toBe(null);
  });
  test('Expect result of `byRadix(0b1, 0)` to be `null`.', () => {
    expect(number.byRadix(0b1, 0)).toBe(null);
  });
  test('Expect result of `byRadix(0b1, 0b1)` to be `null`.', () => {
    expect(number.byRadix(0b1, 0b1)).toBe(null);
  });
  test('Expect result of `byRadix(0b1, 2.55)` to be `null`.', () => {
    expect(number.byRadix(0b1, 2.55)).toBe(null);
  });
  test('Expect result of `byRadix(0b1, Infinity)` to be `null`.', () => {
    expect(number.byRadix(0b1, Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(0b1, "a")` to be `null`.', () => {
    expect(number.byRadix(0b1, 'a')).toBe(null);
  });

  test('Expect result of `byRadix(2.55)` to be `null`.', () => {
    expect(number.byRadix(2.55)).toBe(null);
  });
  test('Expect result of `byRadix(2.55, NaN)` to be `null`.', () => {
    expect(number.byRadix(2.55, NaN)).toBe(null);
  });
  test('Expect result of `byRadix(2.55, -Infinity)` to be `null`.', () => {
    expect(number.byRadix(2.55, -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(2.55, -2.55)` to be `null`.', () => {
    expect(number.byRadix(2.55, -2.55)).toBe(null);
  });
  test('Expect result of `byRadix(2.55, -0b1)` to be `null`.', () => {
    expect(number.byRadix(2.55, -0b1)).toBe(null);
  });
  test('Expect result of `byRadix(2.55, 0)` to be `null`.', () => {
    expect(number.byRadix(2.55, 0)).toBe(null);
  });
  test('Expect result of `byRadix(2.55, 0b1)` to be `null`.', () => {
    expect(number.byRadix(2.55, 0b1)).toBe(null);
  });
  test('Expect result of `byRadix(2.55, 2.55)` to be `null`.', () => {
    expect(number.byRadix(2.55, 2.55)).toBe(null);
  });
  test('Expect result of `byRadix(2.55, Infinity)` to be `null`.', () => {
    expect(number.byRadix(2.55, Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(2.55, "a")` to be `null`.', () => {
    expect(number.byRadix(2.55, 'a')).toBe(null);
  });

  test('Expect result of `byRadix(Infinity)` to be `null`.', () => {
    expect(number.byRadix(Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(Infinity, NaN)` to be `null`.', () => {
    expect(number.byRadix(Infinity, NaN)).toBe(null);
  });
  test('Expect result of `byRadix(Infinity, -Infinity)` to be `null`.', () => {
    expect(number.byRadix(Infinity, -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(Infinity, -2.55)` to be `null`.', () => {
    expect(number.byRadix(Infinity, -2.55)).toBe(null);
  });
  test('Expect result of `byRadix(Infinity, -0b1)` to be `null`.', () => {
    expect(number.byRadix(Infinity, -0b1)).toBe(null);
  });
  test('Expect result of `byRadix(Infinity, 0)` to be `null`.', () => {
    expect(number.byRadix(Infinity, 0)).toBe(null);
  });
  test('Expect result of `byRadix(Infinity, 0b1)` to be `null`.', () => {
    expect(number.byRadix(Infinity, 0b1)).toBe(null);
  });
  test('Expect result of `byRadix(Infinity, 2.55)` to be `null`.', () => {
    expect(number.byRadix(Infinity, 2.55)).toBe(null);
  });
  test('Expect result of `byRadix(Infinity, Infinity)` to be `null`.', () => {
    expect(number.byRadix(Infinity, Infinity)).toBe(null);
  });
  test('Expect result of `byRadix(Infinity, "a")` to be `null`.', () => {
    expect(number.byRadix(Infinity, 'a')).toBe(null);
  });

  test('Expect result of `byRadix("a")` to be `null`.', () => {
    expect(number.byRadix('a')).toBe(null);
  });
  test('Expect result of `byRadix("a", NaN)` to be `null`.', () => {
    expect(number.byRadix('a', NaN)).toBe(null);
  });
  test('Expect result of `byRadix("a", -Infinity)` to be `null`.', () => {
    expect(number.byRadix('a', -Infinity)).toBe(null);
  });
  test('Expect result of `byRadix("a", -2.55)` to be `null`.', () => {
    expect(number.byRadix('a', -2.55)).toBe(null);
  });
  test('Expect result of `byRadix("a", -0b1)` to be `null`.', () => {
    expect(number.byRadix('a', -0b1)).toBe(null);
  });
  test('Expect result of `byRadix("a", 0)` to be `null`.', () => {
    expect(number.byRadix('a', 0)).toBe(null);
  });
  test('Expect result of `byRadix("a", 0b1)` to be `null`.', () => {
    expect(number.byRadix('a', 0b1)).toBe(null);
  });
  test('Expect result of `byRadix("a", 2.55)` to be `null`.', () => {
    expect(number.byRadix('a', 2.55)).toBe(null);
  });
  test('Expect result of `byRadix("a", Infinity)` to be `null`.', () => {
    expect(number.byRadix('a', Infinity)).toBe(null);
  });
  test('Expect result of `byRadix("a", "a")` to be `null`.', () => {
    expect(number.byRadix('a', 'a')).toBe(null);
  });

  test('Expect result of `byRadix(NUMBER.FLOAT64_MAX)` to be `"9007199254740992"`.', () => {
    expect(number.byRadix(NUMBER.FLOAT64_MAX)).toBe('9007199254740992');
  });
  test('Expect result of `byRadix(NUMBER.FLOAT64_MAX, 2)` to be `"100000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.byRadix(NUMBER.FLOAT64_MAX, 2)).toBe(
      '100000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `byRadix(NUMBER.FLOAT64_MAX, 2, "0b")` to be `"0b100000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.byRadix(NUMBER.FLOAT64_MAX, 2, '0b')).toBe(
      '0b100000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `byRadix(NUMBER.FLOAT64_MAX, 8, "0o")` to be `"0o400000000000000000"`.', () => {
    expect(number.byRadix(NUMBER.FLOAT64_MAX, 8, '0o')).toBe('0o400000000000000000');
  });
  test('Expect result of `byRadix(NUMBER.FLOAT64_MAX, 10, "0d")` to be `"0d9007199254740992"`.', () => {
    expect(number.byRadix(NUMBER.FLOAT64_MAX, 10, '0d')).toBe('0d9007199254740992');
  });
  test('Expect result of `byRadix(NUMBER.FLOAT64_MAX, 16, "0x")` to be `"0x20000000000000"`.', () => {
    expect(number.byRadix(NUMBER.FLOAT64_MAX, 16, '0x')).toBe('0x20000000000000');
  });
  test('Expect result of `byRadix(NUMBER.FLOAT64_MAX, 36)` to be `"2gosa7pa2gw"`.', () => {
    expect(number.byRadix(NUMBER.FLOAT64_MAX, 36)).toBe('2gosa7pa2gw');
  });
  test('Expect result of `byRadix(Number.MAX_VALUE, 36)` to be `"1a1e4vngaiqo0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.byRadix(Number.MAX_VALUE, 36)).toBe(
      '1a1e4vngaiqo0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    );
  });
});
