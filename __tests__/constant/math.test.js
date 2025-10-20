import { expect, test } from 'vitest';

import MATH from '#src/constant/math.mts';
import math from '#src/utility/math.mts';

describe('`EULER_NUMBER`', () => {
  test('Expect `EULER_NUMBER` to be `2.7182818284590455`.', () => {
    expect(MATH.EULER_NUMBER).toBe(2.7182818284590455);
  });
  test('Expect `EULER_NUMBER` to be result of `eulersNumber()`.', () => {
    expect(MATH.EULER_NUMBER).toBe(math.eulersNumber());
  });
});
describe('`FACTORIAL`', () => {
  test('Expect `FACTORIAL_0` to be result of `factorial()`.', () => {
    expect(MATH.FACTORIAL_0).toBe(math.factorial());
  });
  test('Expect `FACTORIAL_0` to be result of `factorial(0n)`.', () => {
    expect(MATH.FACTORIAL_0).toBe(math.factorial(0n));
  });
  test('Expect `FACTORIAL_1` to be result of `factorial(1n)`.', () => {
    expect(MATH.FACTORIAL_1).toBe(math.factorial(1n));
  });
  test('Expect `FACTORIAL_2` to be result of `factorial(2n)`.', () => {
    expect(MATH.FACTORIAL_2).toBe(math.factorial(2n));
  });
  test('Expect `FACTORIAL_3` to be result of `factorial(3n)`.', () => {
    expect(MATH.FACTORIAL_3).toBe(math.factorial(3n));
  });
  test('Expect `FACTORIAL_4` to be result of `factorial(4n)`.', () => {
    expect(MATH.FACTORIAL_4).toBe(math.factorial(4n));
  });
  test('Expect `FACTORIAL_5` to be result of `factorial(5n)`.', () => {
    expect(MATH.FACTORIAL_5).toBe(math.factorial(5n));
  });
  test('Expect `FACTORIAL_6` to be result of `factorial(6n)`.', () => {
    expect(MATH.FACTORIAL_6).toBe(math.factorial(6n));
  });
  test('Expect `FACTORIAL_7` to be result of `factorial(7n)`.', () => {
    expect(MATH.FACTORIAL_7).toBe(math.factorial(7n));
  });
  test('Expect `FACTORIAL_8` to be result of `factorial(8n)`.', () => {
    expect(MATH.FACTORIAL_8).toBe(math.factorial(8n));
  });
  test('Expect `FACTORIAL_9` to be result of `factorial(9n)`.', () => {
    expect(MATH.FACTORIAL_9).toBe(math.factorial(9n));
  });
  test('Expect `FACTORIAL_10` to be result of `factorial(10n)`.', () => {
    expect(MATH.FACTORIAL_10).toBe(math.factorial(10n));
  });
  test('Expect `FACTORIAL_11` to be result of `factorial(11n)`.', () => {
    expect(MATH.FACTORIAL_11).toBe(math.factorial(11n));
  });
  test('Expect `FACTORIAL_12` to be result of `factorial(12n)`.', () => {
    expect(MATH.FACTORIAL_12).toBe(math.factorial(12n));
  });
  test('Expect `FACTORIAL_13` to be result of `factorial(13n)`.', () => {
    expect(MATH.FACTORIAL_13).toBe(math.factorial(13n));
  });
  test('Expect `FACTORIAL_14` to be result of `factorial(14n)`.', () => {
    expect(MATH.FACTORIAL_14).toBe(math.factorial(14n));
  });
  test('Expect `FACTORIAL_15` to be result of `factorial(15n)`.', () => {
    expect(MATH.FACTORIAL_15).toBe(math.factorial(15n));
  });
  test('Expect `FACTORIAL_16` to be result of `factorial(16n)`.', () => {
    expect(MATH.FACTORIAL_16).toBe(math.factorial(16n));
  });
  test('Expect `FACTORIAL_17` to be result of `factorial(17n)`.', () => {
    expect(MATH.FACTORIAL_17).toBe(math.factorial(17n));
  });
  test('Expect `FACTORIAL_18` to be result of `factorial(18n)`.', () => {
    expect(MATH.FACTORIAL_18).toBe(math.factorial(18n));
  });
  test('Expect `FACTORIAL_19` to be result of `factorial(19n)`.', () => {
    expect(MATH.FACTORIAL_19).toBe(math.factorial(19n));
  });
  test('Expect `FACTORIAL_20` to be result of `factorial(20n)`.', () => {
    expect(MATH.FACTORIAL_20).toBe(math.factorial(20n));
  });
  test('Expect `FACTORIAL_21` to be result of `factorial(21n)`.', () => {
    expect(MATH.FACTORIAL_21).toBe(math.factorial(21n));
  });
  test('Expect `FACTORIAL_22` to be result of `factorial(22n)`.', () => {
    expect(MATH.FACTORIAL_22).toBe(math.factorial(22n));
  });

  test('Expect `Number(MATH.FACTORIAL_0)` to be result of `factorialNumber()`.', () => {
    expect(Number(MATH.FACTORIAL_0)).toBe(math.factorialNumber());
  });
  test('Expect `Number(MATH.FACTORIAL_0)` to be result of `factorialNumber(0)`.', () => {
    expect(Number(MATH.FACTORIAL_0)).toBe(math.factorialNumber(0));
  });
  test('Expect `Number(MATH.FACTORIAL_1)` to be result of `factorialNumber(1)`.', () => {
    expect(Number(MATH.FACTORIAL_1)).toBe(math.factorialNumber(1));
  });
  test('Expect `Number(MATH.FACTORIAL_2)` to be result of `factorialNumber(2)`.', () => {
    expect(Number(MATH.FACTORIAL_2)).toBe(math.factorialNumber(2));
  });
  test('Expect `Number(MATH.FACTORIAL_3)` to be result of `factorialNumber(3)`.', () => {
    expect(Number(MATH.FACTORIAL_3)).toBe(math.factorialNumber(3));
  });
  test('Expect `Number(MATH.FACTORIAL_4)` to be result of `factorialNumber(4)`.', () => {
    expect(Number(MATH.FACTORIAL_4)).toBe(math.factorialNumber(4));
  });
  test('Expect `Number(MATH.FACTORIAL_5)` to be result of `factorialNumber(5)`.', () => {
    expect(Number(MATH.FACTORIAL_5)).toBe(math.factorialNumber(5));
  });
  test('Expect `Number(MATH.FACTORIAL_6)` to be result of `factorialNumber(6)`.', () => {
    expect(Number(MATH.FACTORIAL_6)).toBe(math.factorialNumber(6));
  });
  test('Expect `Number(MATH.FACTORIAL_7)` to be result of `factorialNumber(7)`.', () => {
    expect(Number(MATH.FACTORIAL_7)).toBe(math.factorialNumber(7));
  });
  test('Expect `Number(MATH.FACTORIAL_8)` to be result of `factorialNumber(8)`.', () => {
    expect(Number(MATH.FACTORIAL_8)).toBe(math.factorialNumber(8));
  });
  test('Expect `Number(MATH.FACTORIAL_9)` to be result of `factorialNumber(9)`.', () => {
    expect(Number(MATH.FACTORIAL_9)).toBe(math.factorialNumber(9));
  });
  test('Expect `Number(MATH.FACTORIAL_10)` to be result of `factorialNumber(10)`.', () => {
    expect(Number(MATH.FACTORIAL_10)).toBe(math.factorialNumber(10));
  });
  test('Expect `Number(MATH.FACTORIAL_11)` to be result of `factorialNumber(11)`.', () => {
    expect(Number(MATH.FACTORIAL_11)).toBe(math.factorialNumber(11));
  });
  test('Expect `Number(MATH.FACTORIAL_12)` to be result of `factorialNumber(12)`.', () => {
    expect(Number(MATH.FACTORIAL_12)).toBe(math.factorialNumber(12));
  });
  test('Expect `Number(MATH.FACTORIAL_13)` to be result of `factorialNumber(13)`.', () => {
    expect(Number(MATH.FACTORIAL_13)).toBe(math.factorialNumber(13));
  });
  test('Expect `Number(MATH.FACTORIAL_14)` to be result of `factorialNumber(14)`.', () => {
    expect(Number(MATH.FACTORIAL_14)).toBe(math.factorialNumber(14));
  });
  test('Expect `Number(MATH.FACTORIAL_15)` to be result of `factorialNumber(15)`.', () => {
    expect(Number(MATH.FACTORIAL_15)).toBe(math.factorialNumber(15));
  });
  test('Expect `Number(MATH.FACTORIAL_16)` to be result of `factorialNumber(16)`.', () => {
    expect(Number(MATH.FACTORIAL_16)).toBe(math.factorialNumber(16));
  });
  test('Expect `Number(MATH.FACTORIAL_17)` to be result of `factorialNumber(17)`.', () => {
    expect(Number(MATH.FACTORIAL_17)).toBe(math.factorialNumber(17));
  });
  test('Expect `Number(MATH.FACTORIAL_18)` to be result of `factorialNumber(18)`.', () => {
    expect(Number(MATH.FACTORIAL_18)).toBe(math.factorialNumber(18));
  });
  test('Expect `Number(MATH.FACTORIAL_19)` to be result of `factorialNumber(19)`.', () => {
    expect(Number(MATH.FACTORIAL_19)).toBe(math.factorialNumber(19));
  });
  test('Expect `Number(MATH.FACTORIAL_20)` to be result of `factorialNumber(20)`.', () => {
    expect(Number(MATH.FACTORIAL_20)).toBe(math.factorialNumber(20));
  });
  test('Expect `Number(MATH.FACTORIAL_21)` to be result of `factorialNumber(21)`.', () => {
    expect(Number(MATH.FACTORIAL_21)).toBe(math.factorialNumber(21));
  });
  test('Expect `Number(MATH.FACTORIAL_22)` to be result of `factorialNumber(22)`.', () => {
    expect(Number(MATH.FACTORIAL_22)).toBe(math.factorialNumber(22));
  });

  test('Expect `Number(MATH.FACTORIAL_22)` to be result of `factorialNumber(22)`.', () => {
    expect(Number(MATH.FACTORIAL_22)).toBe(1_124_000_727_777_607_680_000);
  });
  test('Expect `Number(MATH.FACTORIAL_22)` to be result of `factorialNumber(22)`.', () => {
    expect(Number(MATH.FACTORIAL_22)).toBe(1.1240007277776077e21);
  });
});
describe('`GOLDEN_RATIO`', () => {
  test('Expect `GOLDEN_RATIO` to be result of `1.618033988749895`.', () => {
    expect(MATH.GOLDEN_RATIO).toBe(1.618033988749895);
  });
  test('Expect `GOLDEN_RATIO` to be result of `goldenRatio()`.', () => {
    expect(MATH.GOLDEN_RATIO).toBe(math.goldenRatio());
  });
});
