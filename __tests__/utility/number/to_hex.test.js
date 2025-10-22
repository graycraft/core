import { expect, test } from 'vitest';

import NUMBER from '#src/constant/number.mts';
import number from '#src/utility/number.mts';

describe('`toHex`', () => {
  test('Expect result of `toHex()` to be `null`.', () => {
    expect(number.toHex()).toBe(null);
  });
  test('Expect result of `toHex(NaN)` to be `null`.', () => {
    expect(number.toHex(NaN)).toBe(null);
  });
  test('Expect result of `toHex(-Infinity)` to be `null`.', () => {
    expect(number.toHex(-Infinity)).toBe(null);
  });
  test('Expect result of `toHex(-2.55)` to be `null`.', () => {
    expect(number.toHex(-2.55)).toBe(null);
  });
  test('Expect result of `toHex(-0b1)` to be `"-0x1"`.', () => {
    expect(number.toHex(-0b1)).toBe('-0x1');
  });
  test('Expect result of `toHex(0)` to be `"0x0"`.', () => {
    expect(number.toHex(0)).toBe('0x0');
  });
  test('Expect result of `toHex(2.55)` to be `null`.', () => {
    expect(number.toHex(2.55)).toBe(null);
  });
  test('Expect result of `toHex(Infinity)` to be `null`.', () => {
    expect(number.toHex(Infinity)).toBe(null);
  });
  test('Expect result of `toHex("a")` to be `null`.', () => {
    expect(number.toHex('a')).toBe(null);
  });

  test('Expect result of `toHex(NUMBER.FLOAT16_EPSILON)` to be `null`.', () => {
    expect(number.toHex(NUMBER.FLOAT16_EPSILON)).toBe(null);
  });
  test('Expect result of `toHex(NUMBER.FLOAT16_MAX)` to be `"0x800"`.', () => {
    expect(number.toHex(NUMBER.FLOAT16_MAX)).toBe('0x800');
  });
  test('Expect result of `toHex(NUMBER.FLOAT16_MAX_SAFE)` to be `"0x7ff"`.', () => {
    expect(number.toHex(NUMBER.FLOAT16_MAX_SAFE)).toBe('0x7ff');
  });
  test('Expect result of `toHex(NUMBER.FLOAT16_MAX_VALUE)` to be `"0xffe0"`.', () => {
    expect(number.toHex(NUMBER.FLOAT16_MAX_VALUE)).toBe('0xffe0');
  });
  test('Expect result of `toHex(NUMBER.FLOAT16_MIN)` to be `"-0x800"`.', () => {
    expect(number.toHex(NUMBER.FLOAT16_MIN)).toBe('-0x800');
  });
  test('Expect result of `toHex(NUMBER.FLOAT16_MIN_SAFE)` to be `"-0x7ff"`.', () => {
    expect(number.toHex(NUMBER.FLOAT16_MIN_SAFE)).toBe('-0x7ff');
  });
  test('Expect result of `toHex(NUMBER.FLOAT16_MIN_VALUE))` to be `null`.', () => {
    expect(number.toHex(NUMBER.FLOAT16_MIN_VALUE)).toBe(null);
  });

  test('Expect result of `toHex(NUMBER.FLOAT32_EPSILON)` to be `null`.', () => {
    expect(number.toHex(NUMBER.FLOAT32_EPSILON)).toBe(null);
  });
  test('Expect result of `toHex(NUMBER.FLOAT32_MAX)` to be `"0x1000000"`.', () => {
    expect(number.toHex(NUMBER.FLOAT32_MAX)).toBe('0x1000000');
  });
  test('Expect result of `toHex(NUMBER.FLOAT32_MAX_SAFE)` to be `"0xffffff"`.', () => {
    expect(number.toHex(NUMBER.FLOAT32_MAX_SAFE)).toBe('0xffffff');
  });
  test('Expect result of `toHex(NUMBER.FLOAT32_MAX_VALUE)` to be `"0xffffff00000000000000000000000000"`.', () => {
    expect(number.toHex(NUMBER.FLOAT32_MAX_VALUE)).toBe('0xffffff00000000000000000000000000');
  });
  test('Expect result of `toHex(NUMBER.FLOAT32_MIN)` to be `"-0x1000000"`.', () => {
    expect(number.toHex(NUMBER.FLOAT32_MIN)).toBe('-0x1000000');
  });
  test('Expect result of `toHex(NUMBER.FLOAT32_MIN_SAFE)` to be `"-0xffffff"`.', () => {
    expect(number.toHex(NUMBER.FLOAT32_MIN_SAFE)).toBe('-0xffffff');
  });
  test('Expect result of `toHex(NUMBER.FLOAT32_MIN_VALUE)` to be `null`.', () => {
    expect(number.toHex(NUMBER.FLOAT32_MIN_VALUE)).toBe(null);
  });

  test('Expect result of `toHex(NUMBER.FLOAT64_EPSILON)` to be `null`.', () => {
    expect(number.toHex(NUMBER.FLOAT64_EPSILON)).toBe(null);
  });
  test('Expect result of `toHex(NUMBER.FLOAT64_MAX)` to be `"0x20000000000000"`.', () => {
    expect(number.toHex(NUMBER.FLOAT64_MAX)).toBe('0x20000000000000');
  });
  test('Expect result of `toHex(NUMBER.FLOAT64_MAX_SAFE)` to be `"0x1fffffffffffff"`.', () => {
    expect(number.toHex(NUMBER.FLOAT64_MAX_SAFE)).toBe('0x1fffffffffffff');
  });
  test('Expect result of `toHex(NUMBER.FLOAT64_MAX_VALUE)` to be `"0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"`.', () => {
    expect(number.toHex(NUMBER.FLOAT64_MAX_VALUE)).toBe(
      '0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    );
  });
  test('Expect result of `toHex(NUMBER.FLOAT64_MIN)` to be `"-0x20000000000000"`.', () => {
    expect(number.toHex(NUMBER.FLOAT64_MIN)).toBe('-0x20000000000000');
  });
  test('Expect result of `toHex(NUMBER.FLOAT64_MIN_SAFE)` to be `"-0x1fffffffffffff"', () => {
    expect(number.toHex(NUMBER.FLOAT64_MIN_SAFE)).toBe('-0x1fffffffffffff');
  });
  test('Expect result of `toHex(NUMBER.FLOAT64_MIN_VALUE)` to be `null`.', () => {
    expect(number.toHex(NUMBER.FLOAT64_MIN_VALUE)).toBe(null);
  });

  test('Expect result of `toHex(NUMBER.INT8_MAX)` to be `"0x80"`.', () => {
    expect(number.toHex(NUMBER.INT8_MAX)).toBe('0x80');
  });
  test('Expect result of `toHex(NUMBER.INT8_MAX_SAFE)` to be `"0x7f"`.', () => {
    expect(number.toHex(NUMBER.INT8_MAX_SAFE)).toBe('0x7f');
  });
  test('Expect result of `toHex(NUMBER.INT8_MIN)` to be `"0x80"', () => {
    expect(number.toHex(NUMBER.INT8_MIN)).toBe('-0x80');
  });
  test('Expect result of `toHex(NUMBER.INT8_MIN_SAFE)` to be `"-0x80"`.', () => {
    expect(number.toHex(NUMBER.INT8_MIN_SAFE)).toBe('-0x80');
  });

  test('Expect result of `toHex(NUMBER.INT16_MAX)` to be `"0x8000"`.', () => {
    expect(number.toHex(NUMBER.INT16_MAX)).toBe('0x8000');
  });
  test('Expect result of `toHex(NUMBER.INT16_MAX_SAFE)` to be `"0x7fff"`.', () => {
    expect(number.toHex(NUMBER.INT16_MAX_SAFE)).toBe('0x7fff');
  });
  test('Expect result of `toHex(NUMBER.INT16_MIN)` to be `"-0x8000"', () => {
    expect(number.toHex(NUMBER.INT16_MIN)).toBe('-0x8000');
  });
  test('Expect result of `toHex(NUMBER.INT16_MIN_SAFE)` to be `"-0x8000"`.', () => {
    expect(number.toHex(NUMBER.INT16_MIN_SAFE)).toBe('-0x8000');
  });

  test('Expect result of `toHex(NUMBER.INT32_MAX)` to be `"0x80000000"`.', () => {
    expect(number.toHex(NUMBER.INT32_MAX)).toBe('0x80000000');
  });
  test('Expect result of `toHex(NUMBER.INT32_MAX_SAFE)` to be `"0x7fffffff"`.', () => {
    expect(number.toHex(NUMBER.INT32_MAX_SAFE)).toBe('0x7fffffff');
  });
  test('Expect result of `toHex(NUMBER.INT32_MIN)` to be `"-0x80000000"', () => {
    expect(number.toHex(NUMBER.INT32_MIN)).toBe('-0x80000000');
  });
  test('Expect result of `toHex(NUMBER.INT32_MIN_SAFE)` to be `"-0x80000000"`.', () => {
    expect(number.toHex(NUMBER.INT32_MIN_SAFE)).toBe('-0x80000000');
  });

  test('Expect result of `toHex(NUMBER.INT64_MAX)` to be `"0x8000000000000000"`.', () => {
    expect(number.toHex(NUMBER.INT64_MAX)).toBe('0x8000000000000000');
  });
  test('Expect result of `toHex(NUMBER.INT64_MAX_SAFE)` to be `"0x8000000000000000"`.', () => {
    expect(number.toHex(NUMBER.INT64_MAX_SAFE)).toBe('0x8000000000000000');
  });
  test('Expect result of `toHex(NUMBER.INT64_MIN)` to be `"-0x8000000000000000"', () => {
    expect(number.toHex(NUMBER.INT64_MIN)).toBe('-0x8000000000000000');
  });
  test('Expect result of `toHex(NUMBER.INT64_MIN_SAFE)` to be `"-0x8000000000000000"`.', () => {
    expect(number.toHex(NUMBER.INT64_MIN_SAFE)).toBe('-0x8000000000000000');
  });

  test('Expect result of `toHex(NUMBER.UINT8_MAX)` to be `"0x100"`.', () => {
    expect(number.toHex(NUMBER.UINT8_MAX)).toBe('0x100');
  });
  test('Expect result of `toHex(NUMBER.UINT8_MAX_SAFE)` to be `"0xff"`.', () => {
    expect(number.toHex(NUMBER.UINT8_MAX_SAFE)).toBe('0xff');
  });
  test('Expect result of `toHex(NUMBER.UINT8_MIN)` to be `"0x0"', () => {
    expect(number.toHex(NUMBER.UINT8_MIN)).toBe('0x0');
  });
  test('Expect result of `toHex(NUMBER.UINT8_MIN_SAFE)` to be `"0x0"`.', () => {
    expect(number.toHex(NUMBER.UINT8_MIN_SAFE)).toBe('0x0');
  });

  test('Expect result of `toHex(NUMBER.UINT16_MAX)` to be `"0x10000"`.', () => {
    expect(number.toHex(NUMBER.UINT16_MAX)).toBe('0x10000');
  });
  test('Expect result of `toHex(NUMBER.UINT16_MAX_SAFE)` to be `"0xffff"`.', () => {
    expect(number.toHex(NUMBER.UINT16_MAX_SAFE)).toBe('0xffff');
  });
  test('Expect result of `toHex(NUMBER.UINT16_MIN)` to be `"0x0"', () => {
    expect(number.toHex(NUMBER.UINT16_MIN)).toBe('0x0');
  });
  test('Expect result of `toHex(NUMBER.UINT16_MIN_SAFE)` to be `"0x0"`.', () => {
    expect(number.toHex(NUMBER.UINT16_MIN_SAFE)).toBe('0x0');
  });

  test('Expect result of `toHex(NUMBER.UINT32_MAX)` to be `"0x100000000"`.', () => {
    expect(number.toHex(NUMBER.UINT32_MAX)).toBe('0x100000000');
  });
  test('Expect result of `toHex(NUMBER.UINT32_MAX_SAFE)` to be `"0xffffffff"`.', () => {
    expect(number.toHex(NUMBER.UINT32_MAX_SAFE)).toBe('0xffffffff');
  });
  test('Expect result of `toHex(NUMBER.UINT32_MIN)` to be `"0x0"', () => {
    expect(number.toHex(NUMBER.UINT32_MIN)).toBe('0x0');
  });
  test('Expect result of `toHex(NUMBER.UINT32_MIN_SAFE)` to be `"0x0"`.', () => {
    expect(number.toHex(NUMBER.UINT32_MIN_SAFE)).toBe('0x0');
  });

  test('Expect result of `toHex(NUMBER.UINT64_MAX)` to be `"0x10000000000000000"`.', () => {
    expect(number.toHex(NUMBER.UINT64_MAX)).toBe('0x10000000000000000');
  });
  test('Expect result of `toHex(NUMBER.UINT64_MAX_SAFE)` to be `"0xffffffff"`.', () => {
    expect(number.toHex(NUMBER.UINT64_MAX_SAFE)).toBe('0xffffffff');
  });
  test('Expect result of `toHex(NUMBER.UINT64_MIN)` to be `"0x0"', () => {
    expect(number.toHex(NUMBER.UINT64_MIN)).toBe('0x0');
  });
  test('Expect result of `toHex(NUMBER.UINT64_MIN_SAFE)` to be `"0x0"`.', () => {
    expect(number.toHex(NUMBER.UINT64_MIN_SAFE)).toBe('0x0');
  });
});
