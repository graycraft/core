import { expect, test } from 'vitest';

import MATH from '#src/constant/math.mts';
import math from '#src/utility/math.mts';

describe('`goldenRatio`', () => {
  test('Expect result of `goldenRatio()` to be `1.618033988749895`.', () => {
    expect(math.goldenRatio()).toBe(1.618033988749895);
  });
  test('Expect result of `goldenRatio()` to be `GOLDEN_RATIO`.', () => {
    expect(math.goldenRatio()).toBe(MATH.GOLDEN_RATIO);
  });
});
