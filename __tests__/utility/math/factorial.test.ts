import MATH from '#src/constant/math.mts';
import math from '#src/utility/math.mts';

describe('`factorial`, `factorialBigInt`', () => {
  test('Expect result of `factorial()` to be `1n`.', () => {
    expect(math.factorial()).toBe(1n);
  });
  test('Expect result of `factorial(NaN)` to be `null`.', () => {
    expect(math.factorial(NaN)).toBe(null);
  });
  test('Expect result of `factorial(-Infinity)` to be `null`.', () => {
    expect(math.factorial(-Infinity)).toBe(null);
  });
  test('Expect result of `factorial(-2.55)` to be `null`.', () => {
    expect(math.factorial(-2.55)).toBe(null);
  });
  test('Expect result of `factorial(-0b1)` to be `null`.', () => {
    expect(math.factorial(-0b1)).toBe(null);
  });
  test('Expect result of `factorial(0)` to be `null`.', () => {
    expect(math.factorial(0)).toBe(null);
  });
  test('Expect result of `factorial(2.55)` to be `null`.', () => {
    expect(math.factorial(2.55)).toBe(null);
  });
  test('Expect result of `factorial(Infinity)` to be `null`.', () => {
    expect(math.factorial(Infinity)).toBe(null);
  });
  test('Expect result of `factorial("a")` to be `null`.', () => {
    expect(math.factorial('a')).toBe(null);
  });

  test('Expect result of `factorial()` to be `FACTORIAL_0`.', () => {
    expect(math.factorial()).toBe(MATH.FACTORIAL_0);
  });
  test('Expect result of `factorial(0n)` to be `FACTORIAL_0`.', () => {
    expect(math.factorial(0n)).toBe(MATH.FACTORIAL_0);
  });
  test('Expect result of `factorial(1n)` to be `FACTORIAL_1`.', () => {
    expect(math.factorial(1n)).toBe(MATH.FACTORIAL_1);
  });
  test('Expect result of `factorial(2n)` to be `FACTORIAL_2`.', () => {
    expect(math.factorial(2n)).toBe(MATH.FACTORIAL_2);
  });
  test('Expect result of `factorial(3n)` to be `FACTORIAL_3`.', () => {
    expect(math.factorial(3n)).toBe(MATH.FACTORIAL_3);
  });
  test('Expect result of `factorial(4n)` to be `FACTORIAL_4`.', () => {
    expect(math.factorial(4n)).toBe(MATH.FACTORIAL_4);
  });
  test('Expect result of `factorial(5n)` to be `FACTORIAL_5`.', () => {
    expect(math.factorial(5n)).toBe(MATH.FACTORIAL_5);
  });
  test('Expect result of `factorial(6n)` to be `FACTORIAL_6`.', () => {
    expect(math.factorial(6n)).toBe(MATH.FACTORIAL_6);
  });
  test('Expect result of `factorial(7n)` to be `FACTORIAL_7`.', () => {
    expect(math.factorial(7n)).toBe(MATH.FACTORIAL_7);
  });
  test('Expect result of `factorial(8n)` to be `FACTORIAL_8`.', () => {
    expect(math.factorial(8n)).toBe(MATH.FACTORIAL_8);
  });
  test('Expect result of `factorial(9n)` to be `FACTORIAL_9`.', () => {
    expect(math.factorial(9n)).toBe(MATH.FACTORIAL_9);
  });
  test('Expect result of `factorial(10n)` to be `FACTORIAL_10`.', () => {
    expect(math.factorial(10n)).toBe(MATH.FACTORIAL_10);
  });
  test('Expect result of `factorial(11n)` to be `FACTORIAL_11`.', () => {
    expect(math.factorial(11n)).toBe(MATH.FACTORIAL_11);
  });
  test('Expect result of `factorial(12n)` to be `FACTORIAL_12`.', () => {
    expect(math.factorial(12n)).toBe(MATH.FACTORIAL_12);
  });
  test('Expect result of `factorial(13n)` to be `FACTORIAL_13`.', () => {
    expect(math.factorial(13n)).toBe(MATH.FACTORIAL_13);
  });
  test('Expect result of `factorial(14n)` to be `FACTORIAL_14`.', () => {
    expect(math.factorial(14n)).toBe(MATH.FACTORIAL_14);
  });
  test('Expect result of `factorial(15n)` to be `FACTORIAL_15`.', () => {
    expect(math.factorial(15n)).toBe(MATH.FACTORIAL_15);
  });
  test('Expect result of `factorial(16n)` to be `FACTORIAL_16`.', () => {
    expect(math.factorial(16n)).toBe(MATH.FACTORIAL_16);
  });
  test('Expect result of `factorial(17n)` to be `FACTORIAL_17`.', () => {
    expect(math.factorial(17n)).toBe(MATH.FACTORIAL_17);
  });
  test('Expect result of `factorial(18n)` to be `FACTORIAL_18`.', () => {
    expect(math.factorial(18n)).toBe(MATH.FACTORIAL_18);
  });
  test('Expect result of `factorial(19n)` to be `FACTORIAL_19`.', () => {
    expect(math.factorial(19n)).toBe(MATH.FACTORIAL_19);
  });
  test('Expect result of `factorial(20n)` to be `FACTORIAL_20`.', () => {
    expect(math.factorial(20n)).toBe(MATH.FACTORIAL_20);
  });
  test('Expect result of `factorial(21n)` to be `FACTORIAL_21`.', () => {
    expect(math.factorial(21n)).toBe(MATH.FACTORIAL_21);
  });
  test('Expect result of `factorial(22n)` to be `FACTORIAL_22`.', () => {
    expect(math.factorial(22n)).toBe(MATH.FACTORIAL_22);
  });
  test('Expect result of `factorial(22)` to be `1124000727777607680000n`.', () => {
    expect(math.factorial(22n)).toBe(1124000727777607680000n);
  });
});
describe('`factorialNumber`', () => {
  test('Expect result of `factorialNumber()` to be `1`.', () => {
    expect(math.factorialNumber()).toBe(1);
  });
  test('Expect result of `factorialNumber(NaN)` to be `null`.', () => {
    expect(math.factorialNumber(NaN)).toBe(null);
  });
  test('Expect result of `factorialNumber(-Infinity)` to be `null`.', () => {
    expect(math.factorialNumber(-Infinity)).toBe(null);
  });
  test('Expect result of `factorialNumber(-2.55)` to be `null`.', () => {
    expect(math.factorialNumber(-2.55)).toBe(null);
  });
  test('Expect result of `factorialNumber(-0b1)` to be `null`.', () => {
    expect(math.factorialNumber(-0b1)).toBe(null);
  });
  test('Expect result of `factorialNumber(0)` to be `1`.', () => {
    expect(math.factorialNumber(0)).toBe(1);
  });
  test('Expect result of `factorialNumber(2.55)` to be `null`.', () => {
    expect(math.factorialNumber(2.55)).toBe(null);
  });
  test('Expect result of `factorialNumber(Infinity)` to be `null`.', () => {
    expect(math.factorialNumber(Infinity)).toBe(null);
  });
  test('Expect result of `factorialNumber("a")` to be `null`.', () => {
    expect(math.factorialNumber('a')).toBe(null);
  });

  test('Expect result of `factorialNumber()` to be `Number(MATH.FACTORIAL_0)`.', () => {
    expect(math.factorialNumber()).toBe(Number(MATH.FACTORIAL_0));
  });
  test('Expect result of `factorialNumber(0)` to be `Number(MATH.FACTORIAL_0)`.', () => {
    expect(math.factorialNumber(0)).toBe(Number(MATH.FACTORIAL_0));
  });
  test('Expect result of `factorialNumber(1)` to be `Number(MATH.FACTORIAL_1)`.', () => {
    expect(math.factorialNumber(1)).toBe(Number(MATH.FACTORIAL_1));
  });
  test('Expect result of `factorialNumber(2)` to be `Number(MATH.FACTORIAL_2)`.', () => {
    expect(math.factorialNumber(2)).toBe(Number(MATH.FACTORIAL_2));
  });
  test('Expect result of `factorialNumber(3)` to be `Number(MATH.FACTORIAL_3)`.', () => {
    expect(math.factorialNumber(3)).toBe(Number(MATH.FACTORIAL_3));
  });
  test('Expect result of `factorialNumber(4)` to be `Number(MATH.FACTORIAL_4)`.', () => {
    expect(math.factorialNumber(4)).toBe(Number(MATH.FACTORIAL_4));
  });
  test('Expect result of `factorialNumber(5)` to be `Number(MATH.FACTORIAL_5)`.', () => {
    expect(math.factorialNumber(5)).toBe(Number(MATH.FACTORIAL_5));
  });
  test('Expect result of `factorialNumber(6)` to be `Number(MATH.FACTORIAL_6)`.', () => {
    expect(math.factorialNumber(6)).toBe(Number(MATH.FACTORIAL_6));
  });
  test('Expect result of `factorialNumber(7)` to be `Number(MATH.FACTORIAL_7)`.', () => {
    expect(math.factorialNumber(7)).toBe(Number(MATH.FACTORIAL_7));
  });
  test('Expect result of `factorialNumber(8)` to be `Number(MATH.FACTORIAL_8)`.', () => {
    expect(math.factorialNumber(8)).toBe(Number(MATH.FACTORIAL_8));
  });
  test('Expect result of `factorialNumber(9)` to be `Number(MATH.FACTORIAL_9)`.', () => {
    expect(math.factorialNumber(9)).toBe(Number(MATH.FACTORIAL_9));
  });
  test('Expect result of `factorialNumber(10)` to be `Number(MATH.FACTORIAL_10)`.', () => {
    expect(math.factorialNumber(10)).toBe(Number(MATH.FACTORIAL_10));
  });
  test('Expect result of `factorialNumber(11)` to be `Number(MATH.FACTORIAL_11)`.', () => {
    expect(math.factorialNumber(11)).toBe(Number(MATH.FACTORIAL_11));
  });
  test('Expect result of `factorialNumber(12)` to be `Number(MATH.FACTORIAL_12)`.', () => {
    expect(math.factorialNumber(12)).toBe(Number(MATH.FACTORIAL_12));
  });
  test('Expect result of `factorialNumber(13)` to be `Number(MATH.FACTORIAL_13)`.', () => {
    expect(math.factorialNumber(13)).toBe(Number(MATH.FACTORIAL_13));
  });
  test('Expect result of `factorialNumber(14)` to be `Number(MATH.FACTORIAL_14)`.', () => {
    expect(math.factorialNumber(14)).toBe(Number(MATH.FACTORIAL_14));
  });
  test('Expect result of `factorialNumber(15)` to be `Number(MATH.FACTORIAL_15)`.', () => {
    expect(math.factorialNumber(15)).toBe(Number(MATH.FACTORIAL_15));
  });
  test('Expect result of `factorialNumber(16)` to be `Number(MATH.FACTORIAL_16)`.', () => {
    expect(math.factorialNumber(16)).toBe(Number(MATH.FACTORIAL_16));
  });
  test('Expect result of `factorialNumber(17)` to be `Number(MATH.FACTORIAL_17)`.', () => {
    expect(math.factorialNumber(17)).toBe(Number(MATH.FACTORIAL_17));
  });
  test('Expect result of `factorialNumber(18)` to be `Number(MATH.FACTORIAL_18)`.', () => {
    expect(math.factorialNumber(18)).toBe(Number(MATH.FACTORIAL_18));
  });
  test('Expect result of `factorialNumber(19)` to be `Number(MATH.FACTORIAL_19)`.', () => {
    expect(math.factorialNumber(19)).toBe(Number(MATH.FACTORIAL_19));
  });
  test('Expect result of `factorialNumber(20)` to be `Number(MATH.FACTORIAL_20)`.', () => {
    expect(math.factorialNumber(20)).toBe(Number(MATH.FACTORIAL_20));
  });
  test('Expect result of `factorialNumber(21)` to be `Number(MATH.FACTORIAL_21)`.', () => {
    expect(math.factorialNumber(21)).toBe(Number(MATH.FACTORIAL_21));
  });
  test('Expect result of `factorialNumber(22)` to be `Number(MATH.FACTORIAL_22)`.', () => {
    expect(math.factorialNumber(22)).toBe(Number(MATH.FACTORIAL_22));
  });
  test('Expect result of `factorialNumber(22)` to be `1_124_000_727_777_607_680_000`.', () => {
    expect(math.factorialNumber(22)).toBe(1_124_000_727_777_607_680_000);
  });
  test('Expect result of `factorialNumber(22)` to be `1.1240007277776077e21`.', () => {
    expect(math.factorialNumber(22)).toBe(1.1240007277776077e21);
  });
});
