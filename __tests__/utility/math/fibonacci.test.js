import { expect, test } from 'vitest';

import math from '#src/utility/math.mts';

describe('`fibonacci`', () => {
  test('Expect result of `fibonacci()` to strict equal `null`.', () => {
    expect(math.fibonacci()).toStrictEqual(null);
  });
  test('Expect result of `fibonacci(NaN)` to strict equal `null`.', () => {
    expect(math.fibonacci(NaN)).toStrictEqual(null);
  });
  test('Expect result of `fibonacci(-Infinity)` to strict equal `null`.', () => {
    expect(math.fibonacci(-Infinity)).toStrictEqual(null);
  });
  test('Expect result of `fibonacci(-2.55)` to strict equal `null`.', () => {
    expect(math.fibonacci(-2.55)).toStrictEqual(null);
  });
  test('Expect result of `fibonacci(-0b1)` to strict equal `null`.', () => {
    expect(math.fibonacci(-0b1)).toStrictEqual(null);
  });
  test('Expect result of `fibonacci(0)` to strict equal `[0, 1]`.', () => {
    expect(math.fibonacci(0)).toStrictEqual([0, 1]);
  });
  test('Expect result of `fibonacci(2.55)` to strict equal `[0, 1, 1]`.', () => {
    expect(math.fibonacci(2.55)).toStrictEqual([0, 1, 1]);
  });
  test('Expect result of `fibonacci(Infinity)` to strict equal `null`.', () => {
    expect(math.fibonacci(Infinity)).toStrictEqual(null);
  });
  test('Expect result of `fibonacci("a")` to strict equal `null`.', () => {
    expect(math.fibonacci('a')).toStrictEqual(null);
  });

  test('Expect result of `fibonacci(1)` to strict equal `[0, 1]`.', () => {
    expect(math.fibonacci(1)).toStrictEqual([0, 1]);
  });
  test('Expect result of `fibonacci(2)` to strict equal `[0, 1]`.', () => {
    expect(math.fibonacci(2)).toStrictEqual([0, 1]);
  });
  test('Expect result of `fibonacci(3)` to strict equal `[0, 1, 1]`.', () => {
    expect(math.fibonacci(3)).toStrictEqual([0, 1, 1]);
  });
  test('Expect result of `fibonacci(4)` to strict equal `[0, 1, 1, 2]`.', () => {
    expect(math.fibonacci(4)).toStrictEqual([0, 1, 1, 2]);
  });
  test('Expect result of `fibonacci(5)` to strict equal `[0, 1, 1, 2, 3]`.', () => {
    expect(math.fibonacci(5)).toStrictEqual([0, 1, 1, 2, 3]);
  });
  test('Expect result of `fibonacci(6)` to strict equal `[0, 1, 1, 2, 3, 5]`.', () => {
    expect(math.fibonacci(6)).toStrictEqual([0, 1, 1, 2, 3, 5]);
  });
  test('Expect result of `fibonacci(7)` to strict equal `[0, 1, 1, 2, 3, 5, 8]`.', () => {
    expect(math.fibonacci(7)).toStrictEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  test('Expect result of `fibonacci(8)` to strict equal `[0, 1, 1, 2, 3, 5, 8, 13]`.', () => {
    expect(math.fibonacci(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
  test('Expect result of `fibonacci(9)` to strict equal `[0, 1, 1, 2, 3, 5, 8, 13, 21]`.', () => {
    expect(math.fibonacci(9)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });
  test('Expect result of `fibonacci(10)` to strict equal `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`.', () => {
    expect(math.fibonacci(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
