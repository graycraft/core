import NUMBER from '#src/constant/number.mts';

describe('`FLOAT16`', () => {
  test('Expect `EPSILON` to be `2 ** -10`.', () => {
    expect(NUMBER.FLOAT16_EPSILON).toBe(2 ** -10);
  });
  test('Expect `FLOAT16_EPSILON` to be `0.0009765625`.', () => {
    expect(NUMBER.FLOAT16_EPSILON).toBe(0.0009765625);
  });
  test('Expect `FLOAT16_MAX` to be `2 ** 11`.', () => {
    expect(NUMBER.FLOAT16_MAX).toBe(2 ** 11);
  });
  test('Expect `FLOAT16_MAX` to be `2_048`.', () => {
    expect(NUMBER.FLOAT16_MAX).toBe(2_048);
  });
  test('Expect `FLOAT16_MAX_SAFE` to be `2 ** 11 - 1`.', () => {
    expect(NUMBER.FLOAT16_MAX_SAFE).toBe(2 ** 11 - 1);
  });
  test('Expect `FLOAT16_MAX_SAFE` to be `2_047`.', () => {
    expect(NUMBER.FLOAT16_MAX_SAFE).toBe(2_047);
  });
  test('Expect `FLOAT16_MAX_VALUE` to be `(2 - 2 ** -10) * 2 ** 15`.', () => {
    expect(NUMBER.FLOAT16_MAX_VALUE).toBe((2 - 2 ** -10) * 2 ** 15);
  });
  test('Expect `FLOAT16_MAX_VALUE` to be `65504`.', () => {
    expect(NUMBER.FLOAT16_MAX_VALUE).toBe(65504);
  });
  test('Expect `FLOAT16_MIN` to be `-(2 ** 11)`.', () => {
    expect(NUMBER.FLOAT16_MIN).toBe(-(2 ** 11));
  });
  test('Expect `FLOAT16_MIN` to be `-2_048`.', () => {
    expect(NUMBER.FLOAT16_MIN).toBe(-2_048);
  });
  test('Expect `FLOAT16_MIN_SAFE` to be `-(2 ** 11 - 1)`.', () => {
    expect(NUMBER.FLOAT16_MIN_SAFE).toBe(-(2 ** 11 - 1));
  });
  test('Expect `FLOAT16_MIN_SAFE` to be `-2_047`.', () => {
    expect(NUMBER.FLOAT16_MIN_SAFE).toBe(-2_047);
  });
  test('Expect `FLOAT16_MIN_VALUE` to be `2 ** -24`.', () => {
    expect(NUMBER.FLOAT16_MIN_VALUE).toBe(2 ** -24);
  });
  test('Expect `FLOAT16_MIN_VALUE` to be `5.960464477539063e-8`.', () => {
    expect(NUMBER.FLOAT16_MIN_VALUE).toBe(5.960464477539063e-8);
  });
});
describe('`FLOAT32`', () => {
  test('Expect `FLOAT32_EPSILON` to be `2 ** -23', () => {
    expect(NUMBER.FLOAT32_EPSILON).toBe(2 ** -23);
  });
  test('Expect `FLOAT32_EPSILON` to be `1.1920928955078125e-7`.', () => {
    expect(NUMBER.FLOAT32_EPSILON).toBe(1.1920928955078125e-7);
  });
  test('Expect `FLOAT32_MAX` to be `2 ** 24`.', () => {
    expect(NUMBER.FLOAT32_MAX).toBe(2 ** 24);
  });
  test('Expect `FLOAT32_MAX` to be `16_777_216`.', () => {
    expect(NUMBER.FLOAT32_MAX).toBe(16_777_216);
  });
  test('Expect `FLOAT32_MAX_SAFE` to be `2 ** 24 - 1`.', () => {
    expect(NUMBER.FLOAT32_MAX_SAFE).toBe(2 ** 24 - 1);
  });
  test('Expect `FLOAT32_MAX_SAFE` to be `16_777_215`.', () => {
    expect(NUMBER.FLOAT32_MAX_SAFE).toBe(16_777_215);
  });
  test('Expect `FLOAT32_MAX_VALUE` to be `(2 - 2 ** -23) * 2 ** 127`.', () => {
    expect(NUMBER.FLOAT32_MAX_VALUE).toBe((2 - 2 ** -23) * 2 ** 127);
  });
  test('Expect `FLOAT32_MAX_VALUE` to be `3.4028234663852886e38`.', () => {
    expect(NUMBER.FLOAT32_MAX_VALUE).toBe(3.4028234663852886e38);
  });
  test('Expect `FLOAT32_MIN` to be `-(2 ** 24)`.', () => {
    expect(NUMBER.FLOAT32_MIN).toBe(-(2 ** 24));
  });
  test('Expect `FLOAT32_MIN` to be `16_777_216`.', () => {
    expect(NUMBER.FLOAT32_MIN).toBe(-16_777_216);
  });
  test('Expect `FLOAT32_MIN_SAFE` to be `-(2 ** 24 - 1)`.', () => {
    expect(NUMBER.FLOAT32_MIN_SAFE).toBe(-(2 ** 24 - 1));
  });
  test('Expect `FLOAT32_MIN_SAFE` to be `-16_777_215`.', () => {
    expect(NUMBER.FLOAT32_MIN_SAFE).toBe(-16_777_215);
  });
  test('Expect `FLOAT32_MIN_VALUE` to be `2 ** -126`.', () => {
    expect(NUMBER.FLOAT32_MIN_VALUE).toBe(2 ** -126);
  });
  test('Expect `FLOAT32_MIN_VALUE` to be `1.1754943508222875e-38`.', () => {
    expect(NUMBER.FLOAT32_MIN_VALUE).toBe(1.1754943508222875e-38);
  });
});
describe('`FLOAT64`', () => {
  test('Expect `FLOAT64_EPSILON` to be `2 ** -52`.', () => {
    expect(NUMBER.FLOAT64_EPSILON).toBe(2 ** -52);
  });
  test('Expect `FLOAT64_EPSILON` to be `2.220446049250313e-16`.', () => {
    expect(NUMBER.FLOAT64_EPSILON).toBe(2.220446049250313e-16);
  });
  test('Expect `FLOAT64_EPSILON` to be `Number.EPSILON`.', () => {
    expect(NUMBER.FLOAT64_EPSILON).toBe(Number.EPSILON);
  });
  test('Expect `FLOAT64_MAX` to be `2 ** 53`.', () => {
    expect(NUMBER.FLOAT64_MAX).toBe(2 ** 53);
  });
  test('Expect `FLOAT64_MAX` to be `9_007_199_254_740_992`.', () => {
    expect(NUMBER.FLOAT64_MAX).toBe(9_007_199_254_740_992);
  });
  test('Expect `FLOAT64_MAX` to be `Number.MAX_SAFE_INTEGER + 1`.', () => {
    expect(NUMBER.FLOAT64_MAX).toBe(Number.MAX_SAFE_INTEGER + 1);
  });
  test('Expect `FLOAT64_MAX_SAFE` to be `2 ** 53 - 1`.', () => {
    expect(NUMBER.FLOAT64_MAX_SAFE).toBe(2 ** 53 - 1);
  });
  test('Expect `FLOAT64_MAX_SAFE` to be `9_007_199_254_740_991`.', () => {
    expect(NUMBER.FLOAT64_MAX_SAFE).toBe(9_007_199_254_740_991);
  });
  test('Expect `FLOAT64_MAX_SAFE` to be `Number.MAX_SAFE_INTEGER`.', () => {
    expect(NUMBER.FLOAT64_MAX_SAFE).toBe(Number.MAX_SAFE_INTEGER);
  });
  test('Expect `FLOAT64_MAX_VALUE` to be `(2 - 2 ** -52) * 2 ** 1023`.', () => {
    expect(NUMBER.FLOAT64_MAX_VALUE).toBe((2 - 2 ** -52) * 2 ** 1023);
  });
  test('Expect `FLOAT64_MAX_VALUE` to be `1.7976931348623157e308`.', () => {
    expect(NUMBER.FLOAT64_MAX_VALUE).toBe(1.7976931348623157e308);
  });
  test('Expect `FLOAT64_MAX_VALUE` to be `Number.MAX_VALUE`.', () => {
    expect(NUMBER.FLOAT64_MAX_VALUE).toBe(Number.MAX_VALUE);
  });
  test('Expect `FLOAT64_MIN` to be `-(2 ** 53)`.', () => {
    expect(NUMBER.FLOAT64_MIN).toBe(-(2 ** 53));
  });
  test('Expect `FLOAT64_MIN` to be `-9_007_199_254_740_992`.', () => {
    expect(NUMBER.FLOAT64_MIN).toBe(-9_007_199_254_740_992);
  });
  test('Expect `FLOAT64_MIN_SAFE` to be `Number.MIN_SAFE_INTEGER - 1`.', () => {
    expect(NUMBER.FLOAT64_MIN).toBe(Number.MIN_SAFE_INTEGER - 1);
  });
  test('Expect `FLOAT64_MIN_SAFE` to be `-(2 ** 53 - 1)`.', () => {
    expect(NUMBER.FLOAT64_MIN_SAFE).toBe(-(2 ** 53 - 1));
  });
  test('Expect `FLOAT64_MIN_SAFE` to be `-9_007_199_254_740_991`.', () => {
    expect(NUMBER.FLOAT64_MIN_SAFE).toBe(-9_007_199_254_740_991);
  });
  test('Expect `FLOAT64_MIN_SAFE` to be `Number.MIN_SAFE_INTEGER`.', () => {
    expect(NUMBER.FLOAT64_MIN_SAFE).toBe(Number.MIN_SAFE_INTEGER);
  });
  test('Expect `FLOAT64_MIN_VALUE` to be `2 ** -1074`.', () => {
    expect(NUMBER.FLOAT64_MIN_VALUE).toBe(2 ** -1074);
  });
  test('Expect `FLOAT64_MIN_VALUE` to be `5e-324`.', () => {
    expect(NUMBER.FLOAT64_MIN_VALUE).toBe(5e-324);
  });
  test('Expect `FLOAT64_MIN_VALUE` to be `Number.MIN_VALUE`.', () => {
    expect(NUMBER.FLOAT64_MIN_VALUE).toBe(Number.MIN_VALUE);
  });
});
describe('`INFINITY`', () => {
  test('Expect `INFINITY_NEGATIVE` to be `-1 / 0`.', () => {
    expect(NUMBER.INFINITY_NEGATIVE).toBe(-1 / 0);
  });
  test('Expect `INFINITY_NEGATIVE` to be `-Infinity`.', () => {
    expect(NUMBER.INFINITY_NEGATIVE).toBe(-Infinity);
  });
  test('Expect `INFINITY_POSITIVE` to be `1 / 0`.', () => {
    expect(NUMBER.INFINITY_POSITIVE).toBe(1 / 0);
  });
  test('Expect `INFINITY_POSITIVE` to be `Infinity`.', () => {
    expect(NUMBER.INFINITY_POSITIVE).toBe(Infinity);
  });
});

describe('`INT8`', () => {
  test('Expect `INT8_MAX` to be `128`.', () => {
    expect(NUMBER.INT8_MAX).toBe(128);
  });
  test('Expect `INT8_MAX_SAFE` to be `127`.', () => {
    expect(NUMBER.INT8_MAX_SAFE).toBe(127);
  });
  test('Expect `INT8_MIN` to be `-128`.', () => {
    expect(NUMBER.INT8_MIN).toBe(-128);
  });
  test('Expect `INT8_MIN_SAFE` to be `-128`.', () => {
    expect(NUMBER.INT8_MIN_SAFE).toBe(-128);
  });
});
describe('`INT16`', () => {
  test('Expect `INT16_MAX` to be `32_768`.', () => {
    expect(NUMBER.INT16_MAX).toBe(32_768);
  });
  test('Expect `INT16_MAX_SAFE` to be `32_767`.', () => {
    expect(NUMBER.INT16_MAX_SAFE).toBe(32_767);
  });
  test('Expect `INT16_MIN` to be `-32_768`.', () => {
    expect(NUMBER.INT16_MIN).toBe(-32_768);
  });
  test('Expect `INT16_MIN_SAFE` to be `-32_768`.', () => {
    expect(NUMBER.INT16_MIN_SAFE).toBe(-32_768);
  });
});
describe('`INT32`', () => {
  test('Expect `INT32_MAX` to be `2_147_483_648`.', () => {
    expect(NUMBER.INT32_MAX).toBe(2_147_483_648);
  });
  test('Expect `INT32_MAX_SAFE` to be `2_147_483_647`.', () => {
    expect(NUMBER.INT32_MAX_SAFE).toBe(2_147_483_647);
  });
  test('Expect `INT32_MIN` to be `-2_147_483_648`.', () => {
    expect(NUMBER.INT32_MIN).toBe(-2_147_483_648);
  });
  test('Expect `INT32_MIN_SAFE` to be `-2_147_483_648`.', () => {
    expect(NUMBER.INT32_MIN_SAFE).toBe(-2_147_483_648);
  });
});
describe('`INT64`', () => {
  test('Expect `INT64_MAX` to be `9_223_372_036_854_776_000`.', () => {
    expect(NUMBER.INT64_MAX).toBe(9_223_372_036_854_776_000);
  });
  test('Expect `INT64_MAX_SAFE` to be `9_223_372_036_854_776_000`.', () => {
    expect(NUMBER.INT64_MAX_SAFE).toBe(9_223_372_036_854_776_000);
  });
  test('Expect `INT64_MIN` to be `-9_223_372_036_854_776_000`.', () => {
    expect(NUMBER.INT64_MIN).toBe(-9_223_372_036_854_776_000);
  });
  test('Expect `INT64_MIN_SAFE` to be `-9_223_372_036_854_776_000`.', () => {
    expect(NUMBER.INT64_MIN_SAFE).toBe(-9_223_372_036_854_776_000);
  });
});
describe('`UINT8`', () => {
  test('Expect `UINT8_MAX` to be `256`.', () => {
    expect(NUMBER.UINT8_MAX).toBe(256);
  });
  test('Expect `UINT8_MAX_SAFE` to be `255`.', () => {
    expect(NUMBER.UINT8_MAX_SAFE).toBe(255);
  });
  test('Expect `UINT8_MIN` to be `0`.', () => {
    expect(NUMBER.UINT8_MIN).toBe(0);
  });
  test('Expect `UINT8_MIN_SAFE` to be `0`.', () => {
    expect(NUMBER.UINT8_MIN_SAFE).toBe(0);
  });
});
describe('`UINT16`', () => {
  test('Expect `UINT16_MAX` to be `65536`.', () => {
    expect(NUMBER.UINT16_MAX).toBe(65536);
  });
  test('Expect `UINT16_MAX_SAFE` to be `65535`.', () => {
    expect(NUMBER.UINT16_MAX_SAFE).toBe(65535);
  });
  test('Expect `UINT16_MIN` to be `0`.', () => {
    expect(NUMBER.UINT16_MIN).toBe(0);
  });
  test('Expect `UINT16_MIN_SAFE` to be `0`.', () => {
    expect(NUMBER.UINT16_MIN_SAFE).toBe(0);
  });
});
describe('`UINT32`', () => {
  test('Expect `UINT32_MAX` to be `4_294_967_296`.', () => {
    expect(NUMBER.UINT32_MAX).toBe(4_294_967_296);
  });
  test('Expect `UINT32_MAX_SAFE` to be `4_294_967_295`.', () => {
    expect(NUMBER.UINT32_MAX_SAFE).toBe(4_294_967_295);
  });
  test('Expect `UINT32_MIN` to be `0`.', () => {
    expect(NUMBER.UINT32_MIN).toBe(0);
  });
  test('Expect `UINT32_MIN_SAFE` to be `0`.', () => {
    expect(NUMBER.UINT32_MIN_SAFE).toBe(0);
  });
});
describe('`UINT64`', () => {
  test('Expect `UINT64_MAX` to be `18_446_744_073_709_552_000`.', () => {
    expect(NUMBER.UINT64_MAX).toBe(18_446_744_073_709_552_000);
  });
  test('Expect `UINT64_MAX_SAFE` to be `4_294_967_295`.', () => {
    expect(NUMBER.UINT64_MAX_SAFE).toBe(4_294_967_295);
  });
  test('Expect `UINT64_MIN` to be `0`.', () => {
    expect(NUMBER.UINT64_MIN).toBe(0);
  });
  test('Expect `UINT64_MIN_SAFE` to be `0`.', () => {
    expect(NUMBER.UINT64_MIN_SAFE).toBe(0);
  });
});
