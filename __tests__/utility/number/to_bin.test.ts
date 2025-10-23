import NUMBER from '#src/constant/number.mts';
import number from '#src/utility/number.mts';

describe('`toBin`', () => {
  test('Expect result of `toBin()` to be `null`.', () => {
    expect(number.toBin()).toBe(null);
  });
  test('Expect result of `toBin(NaN)` to be `null`.', () => {
    expect(number.toBin(NaN)).toBe(null);
  });
  test('Expect result of `toBin(-Infinity)` to be `null`.', () => {
    expect(number.toBin(-Infinity)).toBe(null);
  });
  test('Expect result of `toBin(-2.55)` to be `null`.', () => {
    expect(number.toBin(-2.55)).toBe(null);
  });
  test('Expect result of `toBin(-0b1)` to be `"-0b1"`.', () => {
    expect(number.toBin(-0b1)).toBe('-0b1');
  });
  test('Expect result of `toBin(0)` to be `"0b0"`.', () => {
    expect(number.toBin(0)).toBe('0b0');
  });
  test('Expect result of `toBin(2.55)` to be `null`.', () => {
    expect(number.toBin(2.55)).toBe(null);
  });
  test('Expect result of `toBin(Infinity)` to be `null`.', () => {
    expect(number.toBin(Infinity)).toBe(null);
  });
  test('Expect result of `toBin("a")` to be `null`.', () => {
    expect(number.toBin('a')).toBe(null);
  });

  test('Expect result of `toBin(NUMBER.FLOAT16_EPSILON)` to be `null`.', () => {
    expect(number.toBin(NUMBER.FLOAT16_EPSILON)).toBe(null);
  });
  test('Expect result of `toBin(NUMBER.FLOAT16_MAX)` to be `"0b100000000000"`.', () => {
    expect(number.toBin(NUMBER.FLOAT16_MAX)).toBe('0b100000000000');
  });
  test('Expect result of `toBin(NUMBER.FLOAT16_MAX_SAFE)` to be `"0b11111111111"`.', () => {
    expect(number.toBin(NUMBER.FLOAT16_MAX_SAFE)).toBe('0b11111111111');
  });
  test('Expect result of `toBin(NUMBER.FLOAT16_MAX_VALUE)` to be `"0b1111111111100000"`.', () => {
    expect(number.toBin(NUMBER.FLOAT16_MAX_VALUE)).toBe('0b1111111111100000');
  });
  test('Expect result of `toBin(NUMBER.FLOAT16_MIN)` to be `"-0b100000000000"`.', () => {
    expect(number.toBin(NUMBER.FLOAT16_MIN)).toBe('-0b100000000000');
  });
  test('Expect result of `toBin(NUMBER.FLOAT16_MIN_SAFE)` to be `"-0b11111111111"`.', () => {
    expect(number.toBin(NUMBER.FLOAT16_MIN_SAFE)).toBe('-0b11111111111');
  });
  test('Expect result of `toBin(NUMBER.FLOAT16_MIN_VALUE))` to be `null`.', () => {
    expect(number.toBin(NUMBER.FLOAT16_MIN_VALUE)).toBe(null);
  });

  test('Expect result of `toBin(NUMBER.FLOAT32_EPSILON)` to be `null`.', () => {
    expect(number.toBin(NUMBER.FLOAT32_EPSILON)).toBe(null);
  });
  test('Expect result of `toBin(NUMBER.FLOAT32_MAX)` to be `"0b1000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.FLOAT32_MAX)).toBe('0b1000000000000000000000000');
  });
  test('Expect result of `toBin(NUMBER.FLOAT32_MAX_SAFE)` to be `"0b111111111111111111111111"`.', () => {
    expect(number.toBin(NUMBER.FLOAT32_MAX_SAFE)).toBe('0b111111111111111111111111');
  });
  test('Expect result of `toBin(NUMBER.FLOAT32_MAX_VALUE)` to be `"0b11111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.FLOAT32_MAX_VALUE)).toBe(
      '0b11111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toBin(NUMBER.FLOAT32_MIN)` to be `"-0b1000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.FLOAT32_MIN)).toBe('-0b1000000000000000000000000');
  });
  test('Expect result of `toBin(NUMBER.FLOAT32_MIN_SAFE)` to be `"-0b111111111111111111111111"`.', () => {
    expect(number.toBin(NUMBER.FLOAT32_MIN_SAFE)).toBe('-0b111111111111111111111111');
  });
  test('Expect result of `toBin(NUMBER.FLOAT32_MIN_VALUE)` to be `null`.', () => {
    expect(number.toBin(NUMBER.FLOAT32_MIN_VALUE)).toBe(null);
  });

  test('Expect result of `toBin(NUMBER.FLOAT64_EPSILON)` to be `null`.', () => {
    expect(number.toBin(NUMBER.FLOAT64_EPSILON)).toBe(null);
  });
  test('Expect result of `toBin(NUMBER.FLOAT64_MAX)` to be `"0b100000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.FLOAT64_MAX)).toBe(
      '0b100000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toBin(NUMBER.FLOAT64_MAX_SAFE)` to be `"0b11111111111111111111111111111111111111111111111111111"`.', () => {
    expect(number.toBin(NUMBER.FLOAT64_MAX_SAFE)).toBe(
      '0b11111111111111111111111111111111111111111111111111111',
    );
  });
  test('Expect result of `toBin(NUMBER.FLOAT64_MAX_VALUE)` to be `"0b1111111111111111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.FLOAT64_MAX_VALUE)).toBe(
      '0b1111111111111111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toBin(NUMBER.FLOAT64_MIN)` to be `"-0b100000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.FLOAT64_MIN)).toBe(
      '-0b100000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toBin(NUMBER.FLOAT64_MIN_SAFE)` to be `"-0b11111111111111111111111111111111111111111111111111111"', () => {
    expect(number.toBin(NUMBER.FLOAT64_MIN_SAFE)).toBe(
      '-0b11111111111111111111111111111111111111111111111111111',
    );
  });
  test('Expect result of `toBin(NUMBER.FLOAT64_MIN_VALUE)` to be `null`.', () => {
    expect(number.toBin(NUMBER.FLOAT64_MIN_VALUE)).toBe(null);
  });

  test('Expect result of `toBin(NUMBER.INT8_MAX)` to be `"0b10000000"`.', () => {
    expect(number.toBin(NUMBER.INT8_MAX)).toBe('0b10000000');
  });
  test('Expect result of `toBin(NUMBER.INT8_MAX_SAFE)` to be `"0b1111111"`.', () => {
    expect(number.toBin(NUMBER.INT8_MAX_SAFE)).toBe('0b1111111');
  });
  test('Expect result of `toBin(NUMBER.INT8_MIN)` to be `"-0b10000000"', () => {
    expect(number.toBin(NUMBER.INT8_MIN)).toBe('-0b10000000');
  });
  test('Expect result of `toBin(NUMBER.INT8_MIN_SAFE)` to be `"-0b10000000"`.', () => {
    expect(number.toBin(NUMBER.INT8_MIN_SAFE)).toBe('-0b10000000');
  });

  test('Expect result of `toBin(NUMBER.INT16_MAX)` to be `"0b1000000000000000"`.', () => {
    expect(number.toBin(NUMBER.INT16_MAX)).toBe('0b1000000000000000');
  });
  test('Expect result of `toBin(NUMBER.INT16_MAX_SAFE)` to be `"0b111111111111111"`.', () => {
    expect(number.toBin(NUMBER.INT16_MAX_SAFE)).toBe('0b111111111111111');
  });
  test('Expect result of `toBin(NUMBER.INT16_MIN)` to be `"-0b1000000000000000"', () => {
    expect(number.toBin(NUMBER.INT16_MIN)).toBe('-0b1000000000000000');
  });
  test('Expect result of `toBin(NUMBER.INT16_MIN_SAFE)` to be `"-0b1000000000000000"`.', () => {
    expect(number.toBin(NUMBER.INT16_MIN_SAFE)).toBe('-0b1000000000000000');
  });

  test('Expect result of `toBin(NUMBER.INT32_MAX)` to be `"0b10000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.INT32_MAX)).toBe('0b10000000000000000000000000000000');
  });
  test('Expect result of `toBin(NUMBER.INT32_MAX_SAFE)` to be `"0b1111111111111111111111111111111"`.', () => {
    expect(number.toBin(NUMBER.INT32_MAX_SAFE)).toBe('0b1111111111111111111111111111111');
  });
  test('Expect result of `toBin(NUMBER.INT32_MIN)` to be `"-0b10000000000000000000000000000000"', () => {
    expect(number.toBin(NUMBER.INT32_MIN)).toBe('-0b10000000000000000000000000000000');
  });
  test('Expect result of `toBin(NUMBER.INT32_MIN_SAFE)` to be `"-0b10000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.INT32_MIN_SAFE)).toBe('-0b10000000000000000000000000000000');
  });

  test('Expect result of `toBin(NUMBER.INT64_MAX)` to be `"0b1000000000000000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.INT64_MAX)).toBe(
      '0b1000000000000000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toBin(NUMBER.INT64_MAX_SAFE)` to be `"0b1000000000000000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.INT64_MAX_SAFE)).toBe(
      '0b1000000000000000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toBin(NUMBER.INT64_MIN)` to be `"-0x8000000000000000"', () => {
    expect(number.toBin(NUMBER.INT64_MIN)).toBe(
      '-0b1000000000000000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toBin(NUMBER.INT64_MIN_SAFE)` to be `"-0b1000000000000000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.INT64_MIN_SAFE)).toBe(
      '-0b1000000000000000000000000000000000000000000000000000000000000000',
    );
  });

  test('Expect result of `toBin(NUMBER.UINT8_MAX)` to be `"0b100000000"`.', () => {
    expect(number.toBin(NUMBER.UINT8_MAX)).toBe('0b100000000');
  });
  test('Expect result of `toBin(NUMBER.UINT8_MAX_SAFE)` to be `"0b11111111"`.', () => {
    expect(number.toBin(NUMBER.UINT8_MAX_SAFE)).toBe('0b11111111');
  });
  test('Expect result of `toBin(NUMBER.UINT8_MIN)` to be `"0b0"', () => {
    expect(number.toBin(NUMBER.UINT8_MIN)).toBe('0b0');
  });
  test('Expect result of `toBin(NUMBER.UINT8_MIN_SAFE)` to be `"0b0"`.', () => {
    expect(number.toBin(NUMBER.UINT8_MIN_SAFE)).toBe('0b0');
  });

  test('Expect result of `toBin(NUMBER.UINT16_MAX)` to be `"0b10000000000000000"`.', () => {
    expect(number.toBin(NUMBER.UINT16_MAX)).toBe('0b10000000000000000');
  });
  test('Expect result of `toBin(NUMBER.UINT16_MAX_SAFE)` to be `"0b1111111111111111"`.', () => {
    expect(number.toBin(NUMBER.UINT16_MAX_SAFE)).toBe('0b1111111111111111');
  });
  test('Expect result of `toBin(NUMBER.UINT16_MIN)` to be `"0b0"', () => {
    expect(number.toBin(NUMBER.UINT16_MIN)).toBe('0b0');
  });
  test('Expect result of `toBin(NUMBER.UINT16_MIN_SAFE)` to be `"0b0"`.', () => {
    expect(number.toBin(NUMBER.UINT16_MIN_SAFE)).toBe('0b0');
  });

  test('Expect result of `toBin(NUMBER.UINT32_MAX)` to be `"0b100000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.UINT32_MAX)).toBe('0b100000000000000000000000000000000');
  });
  test('Expect result of `toBin(NUMBER.UINT32_MAX_SAFE)` to be `"0b11111111111111111111111111111111"`.', () => {
    expect(number.toBin(NUMBER.UINT32_MAX_SAFE)).toBe('0b11111111111111111111111111111111');
  });
  test('Expect result of `toBin(NUMBER.UINT32_MIN)` to be `"0b0"', () => {
    expect(number.toBin(NUMBER.UINT32_MIN)).toBe('0b0');
  });
  test('Expect result of `toBin(NUMBER.UINT32_MIN_SAFE)` to be `"0b0"`.', () => {
    expect(number.toBin(NUMBER.UINT32_MIN_SAFE)).toBe('0b0');
  });

  test('Expect result of `toBin(NUMBER.UINT64_MAX)` to be `"0b10000000000000000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toBin(NUMBER.UINT64_MAX)).toBe(
      '0b10000000000000000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toBin(NUMBER.UINT64_MAX_SAFE)` to be `"0b11111111111111111111111111111111"`.', () => {
    expect(number.toBin(NUMBER.UINT64_MAX_SAFE)).toBe('0b11111111111111111111111111111111');
  });
  test('Expect result of `toBin(NUMBER.UINT64_MIN)` to be `"0b0"', () => {
    expect(number.toBin(NUMBER.UINT64_MIN)).toBe('0b0');
  });
  test('Expect result of `toBin(NUMBER.UINT64_MIN_SAFE)` to be `"0b0"`.', () => {
    expect(number.toBin(NUMBER.UINT64_MIN_SAFE)).toBe('0b0');
  });
});
