/**!
 * Number constants.
 *
 * @see https://ieeexplore.ieee.org/document/8766229
 * @see https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type
 *
 * @module constant/number
 */

/**
 * @see https://en.wikipedia.org/wiki/Half-precision_floating-point_format
 */
export const FLOAT16_EPSILON: number = 2 ** -10,
  FLOAT16_MAX: number = 2 ** 11,
  FLOAT16_MAX_SAFE: number = FLOAT16_MAX - 1,
  FLOAT16_MAX_VALUE: number = (2 - 2 ** -10) * 2 ** 15,
  FLOAT16_MIN: number = -FLOAT16_MAX,
  FLOAT16_MIN_SAFE: number = -FLOAT16_MAX_SAFE,
  FLOAT16_MIN_VALUE: number = 2 ** -24;

/**
 * @see https://en.wikipedia.org/wiki/Single-precision_floating-point_format
 * @see https://webidl.spec.whatwg.org/#idl-unrestricted-float
 */
export const FLOAT32_EPSILON: number = 2 ** -23,
  FLOAT32_MAX: number = 2 ** 24,
  FLOAT32_MAX_SAFE: number = FLOAT32_MAX - 1,
  FLOAT32_MAX_VALUE: number = (2 - 2 ** -23) * 2 ** 127,
  FLOAT32_MIN: number = -FLOAT32_MAX,
  FLOAT32_MIN_SAFE: number = -FLOAT32_MAX_SAFE,
  FLOAT32_MIN_VALUE: number = 2 ** -126;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 * @see https://en.wikipedia.org/wiki/Double-precision_floating-point_format
 * @see https://webidl.spec.whatwg.org/#idl-unrestricted-double
 */
export const FLOAT64_EPSILON: number = Number.EPSILON,
  FLOAT64_MAX: number = 2 ** 53,
  FLOAT64_MAX_SAFE: number = Number.MAX_SAFE_INTEGER,
  FLOAT64_MAX_VALUE: number = Number.MAX_VALUE,
  FLOAT64_MIN: number = -FLOAT64_MAX,
  FLOAT64_MIN_SAFE: number = Number.MIN_SAFE_INTEGER,
  FLOAT64_MIN_VALUE: number = Number.MIN_VALUE;

export const INFINITY_NEGATIVE: number = Number.NEGATIVE_INFINITY,
  INFINITY_POSITIVE: number = Number.POSITIVE_INFINITY;

export const INT_EPSILON: number = 1,
  INT_MIN: number = 0;

/**
 * @see https://webidl.spec.whatwg.org/#idl-byte
 */
export const INT8_MAX: number = 2 ** 7,
  INT8_MAX_SAFE: number = INT8_MAX - 1,
  INT8_MIN: number = -INT8_MAX,
  INT8_MIN_SAFE: number = INT8_MIN;

/**
 * @see https://webidl.spec.whatwg.org/#idl-short
 */
export const INT16_MAX: number = 2 ** 15,
  INT16_MAX_SAFE: number = INT16_MAX - 1,
  INT16_MIN: number = -INT16_MAX,
  INT16_MIN_SAFE: number = INT16_MIN;

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators
 * @see https://webidl.spec.whatwg.org/#idl-long
 */
export const INT32_MAX: number = 2 ** 31,
  INT32_MAX_SAFE: number = INT32_MAX - 1,
  INT32_MIN: number = -INT32_MAX,
  INT32_MIN_SAFE: number = INT32_MIN;

/**
 * @see https://webidl.spec.whatwg.org/#idl-long-long
 */
export const INT64_MAX: number = 2 ** 63,
  INT64_MAX_SAFE: number = INT64_MAX - 1,
  INT64_MIN: number = -INT64_MAX,
  INT64_MIN_SAFE: number = INT64_MIN;

/**
 * @see https://webidl.spec.whatwg.org/#idl-octet
 */
export const UINT8_MAX: number = 2 ** 8,
  UINT8_MAX_SAFE: number = UINT8_MAX - 1,
  UINT8_MIN: number = INT_MIN,
  UINT8_MIN_SAFE: number = UINT8_MIN;

/**
 * @see https://webidl.spec.whatwg.org/#idl-unsigned-short
 */
export const UINT16_MAX: number = 2 ** 16,
  UINT16_MAX_SAFE: number = UINT16_MAX - 1,
  UINT16_MIN: number = INT_MIN,
  UINT16_MIN_SAFE: number = UINT16_MIN;

/**
 * @see https://webidl.spec.whatwg.org/#idl-unsigned-long
 */
export const UINT32_MAX: number = 2 ** 32,
  UINT32_MAX_SAFE: number = UINT32_MAX - 1,
  UINT32_MIN: number = INT_MIN,
  UINT32_MIN_SAFE: number = UINT32_MIN;

/**
 * @see https://webidl.spec.whatwg.org/#idl-unsigned-long-long
 */
export const UINT64_MAX: number = 2 ** 64,
  UINT64_MAX_SAFE: number = UINT32_MAX - 1,
  UINT64_MIN: number = INT_MIN,
  UINT64_MIN_SAFE: number = UINT32_MIN;

export default {
  FLOAT16_EPSILON,
  FLOAT16_MAX,
  FLOAT16_MAX_SAFE,
  FLOAT16_MAX_VALUE,
  FLOAT16_MIN,
  FLOAT16_MIN_SAFE,
  FLOAT16_MIN_VALUE,
  FLOAT32_EPSILON,
  FLOAT32_MAX,
  FLOAT32_MAX_SAFE,
  FLOAT32_MAX_VALUE,
  FLOAT32_MIN,
  FLOAT32_MIN_SAFE,
  FLOAT32_MIN_VALUE,
  FLOAT64_EPSILON,
  FLOAT64_MAX,
  FLOAT64_MAX_SAFE,
  FLOAT64_MAX_VALUE,
  FLOAT64_MIN,
  FLOAT64_MIN_SAFE,
  FLOAT64_MIN_VALUE,
  INFINITY_NEGATIVE,
  INFINITY_POSITIVE,
  INT_EPSILON,
  INT_MIN,
  INT8_MAX,
  INT8_MAX_SAFE,
  INT8_MIN,
  INT8_MIN_SAFE,
  INT16_MAX,
  INT16_MAX_SAFE,
  INT16_MIN,
  INT16_MIN_SAFE,
  INT32_MAX,
  INT32_MAX_SAFE,
  INT32_MIN,
  INT32_MIN_SAFE,
  INT64_MAX,
  INT64_MAX_SAFE,
  INT64_MIN,
  INT64_MIN_SAFE,
  UINT8_MAX,
  UINT8_MAX_SAFE,
  UINT8_MIN,
  UINT8_MIN_SAFE,
  UINT16_MAX,
  UINT16_MAX_SAFE,
  UINT16_MIN,
  UINT16_MIN_SAFE,
  UINT32_MAX,
  UINT32_MAX_SAFE,
  UINT32_MIN,
  UINT32_MIN_SAFE,
  UINT64_MAX,
  UINT64_MAX_SAFE,
  UINT64_MIN,
  UINT64_MIN_SAFE,
};
