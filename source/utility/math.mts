/**!
 * Mathematical utilities.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 *
 * @module utility/math
 */

/**
 * Calculate circumference of a circle by its radius.
 * Circumference is the perimeter of a circle or ellipse.
 * @see https://en.wikipedia.org/wiki/Circumference
 * @param {number} radius Radius of a circle.
 * @returns {null | number} Circumference of a circle, if result is finite, else `null`.
 */
export const circumference = (radius: number): null | number => {
  const result = 2 * radius * Math.PI;

  return Number.isFinite(result) ? result : null;
};

/**
 * Calculate Euler's number with limit 18.
 * Euler's number is the base of the natural logarithm.
 * Result of the calculation is more precise by 1 digit than `Math.E` constant:
 * + 2.7182818284590455 // eulersNumber()
 * + 2.718281828459045  // Math.E
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E
 * @see https://en.wikipedia.org/wiki/E_(mathematical_constant)
 * @param {number} [limit=18] Positive integer number value, that limits infinite series to precision of `Number`.
 * @returns {null | number} Euler's number, if limit is positive integer number value, else `null`.
 */
export const eulersNumber = (limit: number = 18): null | number => {
  if (Number.isInteger(limit) && limit >= 0) {
    let factorial,
      increment = 1,
      result = 1;

    while (increment < limit) {
      factorial = factorialNumber(increment);
      result += 1 / (factorial ?? 0);
      increment++;
    }

    return result;
  }

  return null;
};

/**
 * Calculate factorial of a positive big integer value.
 * Factorial of a positive integer is the product of all positive integers less than or equal to it.
 * @see https://en.wikipedia.org/wiki/Factorial
 * @param {bigint} [value=0n] Positive big integer value.
 * @returns {bigint | null} Factorial, if value is positive big integer, else `null`.
 */
export const factorialBigInt = (value: bigint = 0n): bigint | null => {
  if (typeof value === 'bigint' && value >= 0n) {
    let base = 1n,
      result = base;

    if (value === base) return result;

    while (value > base) {
      result = value * result;
      value--;
    }

    return result;
  }

  return null;
};

/**
 * Calculate factorial of a positive integer number value.
 * Factorial of a positive integer is the product of all positive integers less than or equal to it.
 * @see https://en.wikipedia.org/wiki/Factorial
 * @param {number} [value=0] Positive integer number value.
 * @returns {null | number} Factorial, if value is positive big integer, else `null`.
 */
export const factorialNumber = (value: number = 0): null | number => {
  if (Number.isInteger(value) && value >= 0) {
    let base = 1,
      result = base;

    if (value === base) return result;

    while (value > base) {
      result = value * result;
      value--;
    }

    return result;
  }

  return null;
};

/**
 * Generate Fibonacci sequence of the specified length.
 * In Fibonacci sequence each element is the sum of the two items that precede it.
 * @see https://en.wikipedia.org/wiki/Fibonacci_sequence
 * @param {number} length Fibonacci sequence length.
 * @returns {null | number[]} Fibonacci sequence, if length is positive finite number value, else `null`.
 */
export const fibonacci = (length: number): null | number[] => {
  if (Number.isFinite(length) && length >= 0) {
    const sequence = [0, 1];

    for (let index = 2; index < length; index++) {
      sequence[index] = sequence[index - 1] + sequence[index - 2];
    }

    return sequence;
  }

  return null;
};

/**
 * Calculate golden ratio (constant phi).
 * Golden ratio is ratio of two quantities, which equals to ratio of their sum to larger quantity.
 * @see https://en.wikipedia.org/wiki/Golden_ratio
 * @returns {number} Golden ratio, phi.
 */
export const goldenRatio = (): number => {
  return (1 + Math.sqrt(5)) / 2;
};

/**
 * Calculate number pi by Gosper's algorithm
 * Number pi is the ratio of a circle circumference to its diameter.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
 * @see https://en.wikipedia.org/wiki/Gosper%27s_algorithm
 * @see https://en.wikipedia.org/wiki/Pi
 * @param {number} [iterations=15] Amount of iterations to calculate each digit after point.
 * @returns {null | string} Number pi, if amount of iterations is finite, else `null`.
 */
export const pi = (iterations: number = 15): null | string => {
  if (Number.isFinite(iterations)) {
    let digits = '',
      i = 2n,
      q = 1n,
      r = 180n,
      t = 60n;

    while (i < iterations + 3) {
      let digit = ((i * 27n - 12n) * q + r * 5n) / (t * 5n),
        u = i * 3n;

      if (i === 3n) digits += '.';

      u = (u + 1n) * 3n * (u + 2n);
      r = u * 10n * (q * (i * 5n - 2n) + r - t * digit);
      q *= 10n * i * (i++ * 2n - 1n);
      t *= u;

      digits += digit;
    }

    return digits || null;
  }

  return null;
};

export default {
  circumference,
  eulersNumber,
  factorial: factorialBigInt,
  factorialBigInt,
  factorialNumber,
  fibonacci,
  goldenRatio,
  pi,
};
