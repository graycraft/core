import { expect, test } from 'vitest';

import MATH from '#src/constant/math.mts';
import math from '#src/utility/math.mts';

describe('`eulersNumber`', () => {
  test('Expect result of `eulersNumber()` to be `MATH.EULER_NUMBER`.', () => {
    expect(math.eulersNumber()).toBe(MATH.EULER_NUMBER);
  });
  test('Expect result of `eulersNumber()` to be `2.7182818284590455`.', () => {
    expect(math.eulersNumber()).toBe(2.7182818284590455);
  });
  test('Expect result of `eulersNumber(NaN)` to be `null`.', () => {
    expect(math.eulersNumber(NaN)).toBe(null);
  });
  test('Expect result of `eulersNumber(-Infinity)` to be `null`.', () => {
    expect(math.eulersNumber(-Infinity)).toBe(null);
  });
  test('Expect result of `eulersNumber(-2.55)` to be `null`.', () => {
    expect(math.eulersNumber(-2.55)).toBe(null);
  });
  test('Expect result of `eulersNumber(-0b1)` to be `null`.', () => {
    expect(math.eulersNumber(-0b1)).toBe(null);
  });
  test('Expect result of `eulersNumber(0)` to be `1`.', () => {
    expect(math.eulersNumber(0)).toBe(1);
  });
  test('Expect result of `eulersNumber(0b1)` to be `1`.', () => {
    expect(math.eulersNumber(0b1)).toBe(1);
  });
  test('Expect result of `eulersNumber(2.55)` to be `null`.', () => {
    expect(math.eulersNumber(2.55)).toBe(null);
  });
  test('Expect result of `eulersNumber("a")` to be `null`.', () => {
    expect(math.eulersNumber('a')).toBe(null);
  });

  test('Expect result of `eulersNumber(0)` to be `1`.', () => {
    expect(math.eulersNumber(0)).toBe(1);
  });
  test('Expect result of `eulersNumber(1)` to be `1`.', () => {
    expect(math.eulersNumber(1)).toBe(1);
  });
  test('Expect result of `eulersNumber(2)` to be `2`.', () => {
    expect(math.eulersNumber(2)).toBe(2);
  });
  test('Expect result of `eulersNumber(3)` to be `2.5`.', () => {
    expect(math.eulersNumber(3)).toBe(2.5);
  });
  test('Expect result of `eulersNumber(4)` to be `2.6666666666666665`.', () => {
    expect(math.eulersNumber(4)).toBe(2.6666666666666665);
  });
  test('Expect result of `eulersNumber(5)` to be `2.708333333333333`.', () => {
    expect(math.eulersNumber(5)).toBe(2.708333333333333);
  });
  test('Expect result of `eulersNumber(6)` to be `2.7166666666666663`.', () => {
    expect(math.eulersNumber(6)).toBe(2.7166666666666663);
  });
  test('Expect result of `eulersNumber(7)` to be `2.7180555555555554`.', () => {
    expect(math.eulersNumber(7)).toBe(2.7180555555555554);
  });
  test('Expect result of `eulersNumber(8)` to be `2.7182539682539684`.', () => {
    expect(math.eulersNumber(8)).toBe(2.7182539682539684);
  });
  test('Expect result of `eulersNumber(9)` to be `2.71827876984127`.', () => {
    expect(math.eulersNumber(9)).toBe(2.71827876984127);
  });
  test('Expect result of `eulersNumber(10)` to be `2.7182815255731922`.', () => {
    expect(math.eulersNumber(10)).toBe(2.7182815255731922);
  });
  test('Expect result of `eulersNumber(11)` to be `2.7182818011463845`.', () => {
    expect(math.eulersNumber(11)).toBe(2.7182818011463845);
  });
  test('Expect result of `eulersNumber(12)` to be `2.718281826198493`.', () => {
    expect(math.eulersNumber(12)).toBe(2.718281826198493);
  });
  test('Expect result of `eulersNumber(13)` to be `2.7182818282861687`.', () => {
    expect(math.eulersNumber(13)).toBe(2.7182818282861687);
  });
  test('Expect result of `eulersNumber(14)` to be `2.7182818284467594`.', () => {
    expect(math.eulersNumber(14)).toBe(2.7182818284467594);
  });
  test('Expect result of `eulersNumber(15)` to be `2.71828182845823`.', () => {
    expect(math.eulersNumber(15)).toBe(2.71828182845823);
  });
  test('Expect result of `eulersNumber(16)` to be `2.718281828458995`.', () => {
    expect(math.eulersNumber(16)).toBe(2.718281828458995);
  });
  test('Expect result of `eulersNumber(17)` to be `2.718281828459043`.', () => {
    expect(math.eulersNumber(17)).toBe(2.718281828459043);
  });
  test('Expect result of `eulersNumber(18)` to be `2.7182818284590455`.', () => {
    expect(math.eulersNumber(18)).toBe(2.7182818284590455);
  });
  test('Expect result of `eulersNumber(18)` to be `MATH.EULER_NUMBER`.', () => {
    expect(math.eulersNumber(18)).toBe(MATH.EULER_NUMBER);
  });
});
