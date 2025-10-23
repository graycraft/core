import NUMBER from '#src/constant/number.mts';
import number from '#src/utility/number.mts';

describe('`toOct`', () => {
  test('Expect result of `toOct(NaN)` to be `null`.', () => {
    expect(number.toOct(NaN)).toBe(null);
  });
  test('Expect result of `toOct(-Infinity)` to be `null`.', () => {
    expect(number.toOct(-Infinity)).toBe(null);
  });
  test('Expect result of `toOct(-2.55)` to be `null`.', () => {
    expect(number.toOct(-2.55)).toBe(null);
  });
  test('Expect result of `toOct(-0b1)` to be `"-0o1"`.', () => {
    expect(number.toOct(-0b1)).toBe('-0o1');
  });
  test('Expect result of `toOct(0)` to be `"0o0"`.', () => {
    expect(number.toOct(0)).toBe('0o0');
  });
  test('Expect result of `toOct(2.55)` to be `null`.', () => {
    expect(number.toOct(2.55)).toBe(null);
  });
  test('Expect result of `toOct(Infinity)` to be `null`.', () => {
    expect(number.toOct(Infinity)).toBe(null);
  });

  test('Expect result of `toOct(NUMBER.FLOAT16_EPSILON)` to be `null`.', () => {
    expect(number.toOct(NUMBER.FLOAT16_EPSILON)).toBe(null);
  });
  test('Expect result of `toOct(NUMBER.FLOAT16_EPSILON)` to be `null`.', () => {
    expect(number.toOct(NUMBER.FLOAT16_EPSILON)).toBe(null);
  });
  test('Expect result of `toOct(NUMBER.FLOAT16_MAX)` to be `"0o4000"`.', () => {
    expect(number.toOct(NUMBER.FLOAT16_MAX)).toBe('0o4000');
  });
  test('Expect result of `toOct(NUMBER.FLOAT16_MAX_SAFE)` to be `"0o3777"`.', () => {
    expect(number.toOct(NUMBER.FLOAT16_MAX_SAFE)).toBe('0o3777');
  });
  test('Expect result of `toOct(NUMBER.FLOAT16_MAX_VALUE)` to be `"0o177740"`.', () => {
    expect(number.toOct(NUMBER.FLOAT16_MAX_VALUE)).toBe('0o177740');
  });
  test('Expect result of `toOct(NUMBER.FLOAT16_MIN)` to be `"-0o4000"`.', () => {
    expect(number.toOct(NUMBER.FLOAT16_MIN)).toBe('-0o4000');
  });
  test('Expect result of `toOct(NUMBER.FLOAT16_MIN_SAFE)` to be `"-0o3777"`.', () => {
    expect(number.toOct(NUMBER.FLOAT16_MIN_SAFE)).toBe('-0o3777');
  });
  test('Expect result of `toOct(NUMBER.FLOAT16_MIN_VALUE))` to be `null`.', () => {
    expect(number.toOct(NUMBER.FLOAT16_MIN_VALUE)).toBe(null);
  });

  test('Expect result of `toOct(NUMBER.FLOAT32_EPSILON)` to be `null`.', () => {
    expect(number.toOct(NUMBER.FLOAT32_EPSILON)).toBe(null);
  });
  test('Expect result of `toOct(NUMBER.FLOAT32_MAX)` to be `"0o100000000"`.', () => {
    expect(number.toOct(NUMBER.FLOAT32_MAX)).toBe('0o100000000');
  });
  test('Expect result of `toOct(NUMBER.FLOAT32_MAX_SAFE)` to be `"0o77777777"`.', () => {
    expect(number.toOct(NUMBER.FLOAT32_MAX_SAFE)).toBe('0o77777777');
  });
  test('Expect result of `toOct(NUMBER.FLOAT32_MAX_VALUE)` to be `"0o3777777740000000000000000000000000000000000"`.', () => {
    expect(number.toOct(NUMBER.FLOAT32_MAX_VALUE)).toBe(
      '0o3777777740000000000000000000000000000000000',
    );
  });
  test('Expect result of `toOct(NUMBER.FLOAT32_MIN)` to be `"-0o100000000"`.', () => {
    expect(number.toOct(NUMBER.FLOAT32_MIN)).toBe('-0o100000000');
  });
  test('Expect result of `toOct(NUMBER.FLOAT32_MIN_SAFE)` to be `"-0o77777777"`.', () => {
    expect(number.toOct(NUMBER.FLOAT32_MIN_SAFE)).toBe('-0o77777777');
  });
  test('Expect result of `toOct(NUMBER.FLOAT32_MIN_VALUE)` to be `null`.', () => {
    expect(number.toOct(NUMBER.FLOAT32_MIN_VALUE)).toBe(null);
  });

  test('Expect result of `toOct(NUMBER.FLOAT64_EPSILON)` to be `null`.', () => {
    expect(number.toOct(NUMBER.FLOAT64_EPSILON)).toBe(null);
  });
  test('Expect result of `toOct(NUMBER.FLOAT64_MAX)` to be `"0o400000000000000000"`.', () => {
    expect(number.toOct(NUMBER.FLOAT64_MAX)).toBe('0o400000000000000000');
  });
  test('Expect result of `toOct(NUMBER.FLOAT64_MAX_SAFE)` to be `"0o377777777777777777"`.', () => {
    expect(number.toOct(NUMBER.FLOAT64_MAX_SAFE)).toBe('0o377777777777777777');
  });
  test('Expect result of `toOct(NUMBER.FLOAT64_MAX_VALUE)` to be `"0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toOct(NUMBER.FLOAT64_MAX_VALUE)).toBe(
      '0o177777777777777777400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toOct(NUMBER.FLOAT64_MIN)` to be `"-0o400000000000000000"`.', () => {
    expect(number.toOct(NUMBER.FLOAT64_MIN)).toBe('-0o400000000000000000');
  });
  test('Expect result of `toOct(NUMBER.FLOAT64_MIN_SAFE)` to be `"-0o377777777777777777"', () => {
    expect(number.toOct(NUMBER.FLOAT64_MIN_SAFE)).toBe('-0o377777777777777777');
  });
  test('Expect result of `toOct(NUMBER.FLOAT64_MIN_VALUE)` to be `null`.', () => {
    expect(number.toOct(NUMBER.FLOAT64_MIN_VALUE)).toBe(null);
  });

  test('Expect result of `toOct(NUMBER.INT8_MAX)` to be `"0o200"`.', () => {
    expect(number.toOct(NUMBER.INT8_MAX)).toBe('0o200');
  });
  test('Expect result of `toOct(NUMBER.INT8_MAX_SAFE)` to be `"0o177"`.', () => {
    expect(number.toOct(NUMBER.INT8_MAX_SAFE)).toBe('0o177');
  });
  test('Expect result of `toOct(NUMBER.INT8_MIN)` to be `"-0o200"', () => {
    expect(number.toOct(NUMBER.INT8_MIN)).toBe('-0o200');
  });
  test('Expect result of `toOct(NUMBER.INT8_MIN_SAFE)` to be `"-0o200"`.', () => {
    expect(number.toOct(NUMBER.INT8_MIN_SAFE)).toBe('-0o200');
  });

  test('Expect result of `toOct(NUMBER.INT16_MAX)` to be `"0o100000"`.', () => {
    expect(number.toOct(NUMBER.INT16_MAX)).toBe('0o100000');
  });
  test('Expect result of `toOct(NUMBER.INT16_MAX_SAFE)` to be `"0o77777"`.', () => {
    expect(number.toOct(NUMBER.INT16_MAX_SAFE)).toBe('0o77777');
  });
  test('Expect result of `toOct(NUMBER.INT16_MIN)` to be `"-0o100000"', () => {
    expect(number.toOct(NUMBER.INT16_MIN)).toBe('-0o100000');
  });
  test('Expect result of `toOct(NUMBER.INT16_MIN_SAFE)` to be `"-0o100000"`.', () => {
    expect(number.toOct(NUMBER.INT16_MIN_SAFE)).toBe('-0o100000');
  });

  test('Expect result of `toOct(NUMBER.INT32_MAX)` to be `"0o20000000000"`.', () => {
    expect(number.toOct(NUMBER.INT32_MAX)).toBe('0o20000000000');
  });
  test('Expect result of `toOct(NUMBER.INT32_MAX_SAFE)` to be `"0o17777777777"`.', () => {
    expect(number.toOct(NUMBER.INT32_MAX_SAFE)).toBe('0o17777777777');
  });
  test('Expect result of `toOct(NUMBER.INT32_MIN)` to be `"-0o20000000000"', () => {
    expect(number.toOct(NUMBER.INT32_MIN)).toBe('-0o20000000000');
  });
  test('Expect result of `toOct(NUMBER.INT32_MIN_SAFE)` to be `"-0o20000000000"`.', () => {
    expect(number.toOct(NUMBER.INT32_MIN_SAFE)).toBe('-0o20000000000');
  });

  test('Expect result of `toOct(NUMBER.INT64_MAX)` to be `"0o1000000000000000000000"`.', () => {
    expect(number.toOct(NUMBER.INT64_MAX)).toBe('0o1000000000000000000000');
  });
  test('Expect result of `toOct(NUMBER.INT64_MAX_SAFE)` to be `"0o1000000000000000000000"`.', () => {
    expect(number.toOct(NUMBER.INT64_MAX_SAFE)).toBe('0o1000000000000000000000');
  });
  test('Expect result of `toOct(NUMBER.INT64_MIN)` to be `"-0o1000000000000000000000"', () => {
    expect(number.toOct(NUMBER.INT64_MIN)).toBe('-0o1000000000000000000000');
  });
  test('Expect result of `toOct(NUMBER.INT64_MIN_SAFE)` to be `"-0o1000000000000000000000"`.', () => {
    expect(number.toOct(NUMBER.INT64_MIN_SAFE)).toBe('-0o1000000000000000000000');
  });

  test('Expect result of `toOct(NUMBER.UINT8_MAX)` to be `"0o400"`.', () => {
    expect(number.toOct(NUMBER.UINT8_MAX)).toBe('0o400');
  });
  test('Expect result of `toOct(NUMBER.UINT8_MAX_SAFE)` to be `"0o377"`.', () => {
    expect(number.toOct(NUMBER.UINT8_MAX_SAFE)).toBe('0o377');
  });
  test('Expect result of `toOct(NUMBER.UINT8_MIN)` to be `"0o0"', () => {
    expect(number.toOct(NUMBER.UINT8_MIN)).toBe('0o0');
  });
  test('Expect result of `toOct(NUMBER.UINT8_MIN_SAFE)` to be `"0o0"`.', () => {
    expect(number.toOct(NUMBER.UINT8_MIN_SAFE)).toBe('0o0');
  });

  test('Expect result of `toOct(NUMBER.UINT16_MAX)` to be `"0o200000"`.', () => {
    expect(number.toOct(NUMBER.UINT16_MAX)).toBe('0o200000');
  });
  test('Expect result of `toOct(NUMBER.UINT16_MAX_SAFE)` to be `"0o177777"`.', () => {
    expect(number.toOct(NUMBER.UINT16_MAX_SAFE)).toBe('0o177777');
  });
  test('Expect result of `toOct(NUMBER.UINT16_MIN)` to be `"0o0"', () => {
    expect(number.toOct(NUMBER.UINT16_MIN)).toBe('0o0');
  });
  test('Expect result of `toOct(NUMBER.UINT16_MIN_SAFE)` to be `"0o0"`.', () => {
    expect(number.toOct(NUMBER.UINT16_MIN_SAFE)).toBe('0o0');
  });

  test('Expect result of `toOct(NUMBER.UINT32_MAX)` to be `"0o40000000000"`.', () => {
    expect(number.toOct(NUMBER.UINT32_MAX)).toBe('0o40000000000');
  });
  test('Expect result of `toOct(NUMBER.UINT32_MAX_SAFE)` to be `"0o37777777777"`.', () => {
    expect(number.toOct(NUMBER.UINT32_MAX_SAFE)).toBe('0o37777777777');
  });
  test('Expect result of `toOct(NUMBER.UINT32_MIN)` to be `"0o0"', () => {
    expect(number.toOct(NUMBER.UINT32_MIN)).toBe('0o0');
  });
  test('Expect result of `toOct(NUMBER.UINT32_MIN_SAFE)` to be `"0o0"`.', () => {
    expect(number.toOct(NUMBER.UINT32_MIN_SAFE)).toBe('0o0');
  });

  test('Expect result of `toOct(NUMBER.UINT64_MAX)` to be `"0o2000000000000000000000"`.', () => {
    expect(number.toOct(NUMBER.UINT64_MAX)).toBe('0o2000000000000000000000');
  });
  test('Expect result of `toOct(NUMBER.UINT64_MAX_SAFE)` to be `"0o37777777777"`.', () => {
    expect(number.toOct(NUMBER.UINT64_MAX_SAFE)).toBe('0o37777777777');
  });
  test('Expect result of `toOct(NUMBER.UINT64_MIN)` to be `"0o0"', () => {
    expect(number.toOct(NUMBER.UINT64_MIN)).toBe('0o0');
  });
  test('Expect result of `toOct(NUMBER.UINT64_MIN_SAFE)` to be `"0o0"`.', () => {
    expect(number.toOct(NUMBER.UINT64_MIN_SAFE)).toBe('0o0');
  });
});
