import math from '#src/utility/math.mts';

describe('`pi`', () => {
  test('Expect result of `pi()` to be `String(Math.PI)`.', () => {
    expect(math.pi()).toBe(String(Math.PI));
  });
  test('Expect result of `pi()` to be `String(3.1415926535897932)`.', () => {
    expect(math.pi()).toBe(String(3.1415926535897932));
  });
  test('Expect result of `pi(NaN)` to be `null`.', () => {
    expect(math.pi(NaN)).toBe(null);
  });
  test('Expect result of `pi(-Infinity)` to be `null`.', () => {
    expect(math.pi(-Infinity)).toBe(null);
  });
  test('Expect result of `pi(-2.55)` to be `null`.', () => {
    expect(math.pi(-2.55)).toBe(null);
  });
  test('Expect result of `pi(-0b1)` to be `null`.', () => {
    expect(math.pi(-0b1)).toBe(null);
  });
  test('Expect result of `pi(2.55)` to be `"3.141"`.', () => {
    expect(math.pi(2.55)).toBe('3.141');
  });
  test('Expect result of `pi(Infinity)` to be `null`.', () => {
    expect(math.pi(Infinity)).toBe(null);
  });
  test('Expect result of `pi("a")` to be `null`.', () => {
    expect(math.pi('a')).toBe(null);
  });

  test('Expect result of `pi(0)` to be `"3"`.', () => {
    expect(math.pi(0)).toBe('3');
  });
  test('Expect result of `pi(1)` to be `"3.1"`.', () => {
    expect(math.pi(1)).toBe('3.1');
  });
  test('Expect result of `pi(2)` to be `"3.14"`.', () => {
    expect(math.pi(2)).toBe('3.14');
  });
  test('Expect result of `pi(3)` to be `"3.141"`.', () => {
    expect(math.pi(3)).toBe('3.141');
  });
  test('Expect result of `pi(4)` to be `"3.1415"`.', () => {
    expect(math.pi(4)).toBe('3.1415');
  });
  test('Expect result of `pi(5)` to be `"3.14159"`.', () => {
    expect(math.pi(5)).toBe('3.14159');
  });
  test('Expect result of `pi(6)` to be `"3.141592"`.', () => {
    expect(math.pi(6)).toBe('3.141592');
  });
  test('Expect result of `pi(7)` to be `"3.1415926"`.', () => {
    expect(math.pi(7)).toBe('3.1415926');
  });
  test('Expect result of `pi(8)` to be `"3.14159265"`.', () => {
    expect(math.pi(8)).toBe('3.14159265');
  });
  test('Expect result of `pi(9)` to be `"3.141592653"`.', () => {
    expect(math.pi(9)).toBe('3.141592653');
  });
  test('Expect result of `pi(10)` to be `"3.1415926535"`.', () => {
    expect(math.pi(10)).toBe('3.1415926535');
  });
  test('Expect result of `pi(11)` to be `"3.14159265358"`.', () => {
    expect(math.pi(11)).toBe('3.14159265358');
  });
  test('Expect result of `pi(12)` to be `"3.141592653589"`.', () => {
    expect(math.pi(12)).toBe('3.141592653589');
  });
  test('Expect result of `pi(13)` to be `"3.1415926535897"`.', () => {
    expect(math.pi(13)).toBe('3.1415926535897');
  });
  test('Expect result of `pi(14)` to be `"3.14159265358979"`.', () => {
    expect(math.pi(14)).toBe('3.14159265358979');
  });
  test('Expect result of `pi(15)` to be `"3.141592653589793"`.', () => {
    expect(math.pi(15)).toBe('3.141592653589793');
  });
  test('Expect result of `pi(15)` to be `String(Math.PI)`.', () => {
    expect(math.pi(15)).toBe(String(Math.PI));
  });
  test('Expect result of `pi(16)` to be `"3.1415926535897932"`.', () => {
    expect(math.pi(16)).toBe('3.1415926535897932');
  });
  test('Expect result of `pi(17)` to be `"3.14159265358979323"`.', () => {
    expect(math.pi(17)).toBe('3.14159265358979323');
  });

  test('Expect result of `Number(math.pi())` to be `Math.PI`.', () => {
    expect(Number(math.pi())).toBe(Math.PI);
  });
  test('Expect result of `Number(math.pi())` to be `3.141592653589793`.', () => {
    expect(Number(math.pi())).toBe(3.1415926535897932);
  });
  test('Expect result of `Number(math.pi(NaN))` to be `0`.', () => {
    expect(Number(math.pi(NaN))).toBe(0);
  });
  test('Expect result of `Number(math.pi(-Infinity))` to be `0`.', () => {
    expect(Number(math.pi(-Infinity))).toBe(0);
  });
  test('Expect result of `Number(math.pi(-2.55))` to be `0`.', () => {
    expect(Number(math.pi(-2.55))).toBe(0);
  });
  test('Expect result of `Number(math.pi(-0b1))` to be `0`.', () => {
    expect(Number(math.pi(-0b1))).toBe(0);
  });
  test('Expect result of `Number(math.pi(2.55))` to be `3.141`.', () => {
    expect(Number(math.pi(2.55))).toBe(3.141);
  });
  test('Expect result of `Number(math.pi(Infinity))` to be `0`.', () => {
    expect(Number(math.pi(Infinity))).toBe(0);
  });
  test('Expect result of `Number(math.pi("a"))` to be `0`.', () => {
    expect(Number(math.pi('a'))).toBe(0);
  });

  test('Expect result of `Number(math.pi(0))` to be `3`.', () => {
    expect(Number(math.pi(0))).toBe(3);
  });
  test('Expect result of `Number(math.pi(1))` to be `3.1`.', () => {
    expect(Number(math.pi(1))).toBe(3.1);
  });
  test('Expect result of `Number(math.pi(2))` to be `3.14`.', () => {
    expect(Number(math.pi(2))).toBe(3.14);
  });
  test('Expect result of `Number(math.pi(3))` to be `3.141`.', () => {
    expect(Number(math.pi(3))).toBe(3.141);
  });
  test('Expect result of `Number(math.pi(4))` to be `3.1415`.', () => {
    expect(Number(math.pi(4))).toBe(3.1415);
  });
  test('Expect result of `Number(math.pi(5))` to be `3.14159`.', () => {
    expect(Number(math.pi(5))).toBe(3.14159);
  });
  test('Expect result of `Number(math.pi(6))` to be `3.141592`.', () => {
    expect(Number(math.pi(6))).toBe(3.141592);
  });
  test('Expect result of `Number(math.pi(7))` to be `3.1415926`.', () => {
    expect(Number(math.pi(7))).toBe(3.1415926);
  });
  test('Expect result of `Number(math.pi(8))` to be `3.14159265`.', () => {
    expect(Number(math.pi(8))).toBe(3.14159265);
  });
  test('Expect result of `Number(math.pi(9))` to be `3.141592653`.', () => {
    expect(Number(math.pi(9))).toBe(3.141592653);
  });
  test('Expect result of `Number(math.pi(10))` to be `3.1415926535`.', () => {
    expect(Number(math.pi(10))).toBe(3.1415926535);
  });
  test('Expect result of `Number(math.pi(11))` to be `3.14159265358`.', () => {
    expect(Number(math.pi(11))).toBe(3.14159265358);
  });
  test('Expect result of `Number(math.pi(12))` to be `3.141592653589`.', () => {
    expect(Number(math.pi(12))).toBe(3.141592653589);
  });
  test('Expect result of `Number(math.pi(13))` to be `3.1415926535897`.', () => {
    expect(Number(math.pi(13))).toBe(3.1415926535897);
  });
  test('Expect result of `Number(math.pi(14))` to be `3.14159265358979`.', () => {
    expect(Number(math.pi(14))).toBe(3.14159265358979);
  });
  test('Expect result of `Number(math.pi(15))` to be `3.141592653589793`.', () => {
    expect(Number(math.pi(15))).toBe(3.141592653589793);
  });
  test('Expect result of `Number(math.pi(15))` to be `Math.PI`.', () => {
    expect(Number(math.pi(15))).toBe(Math.PI);
  });
  test('Expect result of `Number(math.pi(16))` to be `3.1415926535897932`.', () => {
    expect(Number(math.pi(16))).toBe(3.1415926535897932);
  });
  test('Expect result of `Number(math.pi(17))` to be `3.1415926535897932`.', () => {
    expect(Number(math.pi(17))).toBe(3.1415926535897932);
  });
});
