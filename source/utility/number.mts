/**!
 * Number utilities.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 *
 * @module utility/number
 */

/**
 * Divide (produce the quotient) of the two operands (dividend and divisor) **safely**.
 * Safely means preventing output of unexpected results like `Infinity` and `NaN`.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division
 * @param {number} dividend Dividend to produce the quotient of division.
 * @param {number} divisor Divisor to produce the quotient of division.
 * @returns {null | number | string} Quotient, if the division result is a finite number, else `null`.
 */
export const divide = (dividend: number, divisor: number): null | number | string => {
  const result = dividend / divisor;

  return Number.isFinite(result) ? result : null;
};

/**
 * Represent a specified integer number value as a string by the radix base.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 * @param {number} value Integer number value to represent as a string by the radix base.
 * @param {[number=10]} radix Radix base, from 2 to 36.
 * @param {[string=""]} prefix Prefix to append.
 * @returns {null | string} String representation by the radix base, if value and radix are integers, else `null`.
 */
export const byRadix = (value: number, radix: number = 10, prefix = ''): null | string => {
  if (Number.isInteger(value) && Number.isInteger(radix)) {
    if (1 < radix && radix < 37) {
      const result = value.toString(radix);

      if (prefix) {
        if (value > 0 || value === 0) return prefix + result;

        return '-' + prefix + result.slice(1);
      }

      return result;
    }
  }

  return null;
};

/**
 * Determine whether a number value is even or odd.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 * @param {number} value Number value.
 * @returns {boolean | null} Whether number value is even or odd, if value is finite, else `null`.
 */
export const isEven = (value: number): boolean | null => {
  if (Number.isFinite(value)) {
    if (value % 2) return false;

    return true;
  }

  return null;
};

/**
 * Round a specified number value by the radix base.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 * @param {number} value Number to round by the radix base.
 * @param {[number=2]} precision Radix base.
 * @returns {null | number} Rounded number by the radix base, if result is finite, else `null`.
 */
export const round = (value: number, precision: number = 2): null | number => {
  const multiplier = 10 ** Math.round(precision),
    result = Math.round(value * multiplier) / multiplier;

  return Number.isFinite(result) ? result : null;
};

/**
 * Represent a specified integer number value as a binary string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 * @param {number} value Integer number to represent as a binary string.
 * @param {[string="0b"]} prefix Prefix to append.
 * @returns {null | string} Binary representation, if a number value is integer, else `null`.
 */
export const toBin = (value: number, prefix = '0b'): null | string => {
  return byRadix(value, 2, prefix);
};

/**
 * Represent a specified integer number value as a hexadecimal string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 * @param {number} value Integer number to represent as a hexadecimal string.
 * @param {[string="0x"]} prefix Prefix to append.
 * @returns {null | string} Hexadecimal representation, if a number value is integer, else `null`.
 */
export const toHex = (value: number, prefix = '0x'): null | string => {
  return byRadix(value, 16, prefix);
};

/**
 * Represent a specified integer number value as an octal string.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 * @param {number} value Integer number to represent as an octal string.
 * @param {[string="0o"]} prefix Prefix to append.
 * @returns {null | string} Octal representation, if a number value is integer, else `null`.
 */
export const toOct = (value: number, prefix = '0o'): null | string => {
  return byRadix(value, 8, prefix);
};

export default {
  byRadix,
  divide,
  isEven,
  round,
  toBin,
  toHex,
  toOct,
};
