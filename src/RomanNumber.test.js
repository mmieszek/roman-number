const RomanNumber = require('./RomanNumber')

jest.setTimeout(3000)

test('conversion of arabic number', () => {
  const number = new RomanNumber(5)
  expect(number.toString()).toBe('V')
  expect(number.toInt()).toBe(5)
})

test('conversion of romsrc/App/MainBundle/Resourcesan number', () => {
  const number = new RomanNumber('V')
  expect(number.toString()).toBe('V')
  expect(number.toInt()).toBe(5)
})

test('conversion of arabic number as a function', () => {
  const number = RomanNumber(5)
  expect(number.toString()).toBe('V')
  expect(number.toInt()).toBe(5)
})

test('conversion of roman number as a function', () => {
  const number = RomanNumber('V')
  expect(number.toString()).toBe('V')
  expect(number.toInt()).toBe(5)
})

test('throws Error when the passed value is empty', () => {
  const t = () => {
    new RomanNumber()
  };
  expect(t).toThrowError('value required');
})

test('throws Error when the passed value is null', () => {
  const t = () => {
    new RomanNumber(null)
  };
  expect(t).toThrowError('value required');
})

test('throws Error when number is out of range', () => {
  const t = () => {
    new RomanNumber(4000)
  };
  expect(t).toThrowError('invalid range');
})

test('throws Error when number is out of range', () => {
  const t = () => {
    new RomanNumber(0)
  };
  expect(t).toThrowError('invalid range');
})

test('throws Error when value is invalid', () => {
  const t = () => {
    new RomanNumber('error')
  };
  expect(t).toThrowError('invalid value');
})

test('throws Error when roman value is invalid', () => {
  const t = () => {
    new RomanNumber('IIII')
  };
  expect(t).toThrowError('invalid value');
})

test('test all the scenarios', () => {
  expect(RomanNumber(1).toString()).toBe('I')
  expect(RomanNumber(2).toString()).toBe('II')
  expect(RomanNumber(3).toString()).toBe('III')
  expect(RomanNumber(4).toString()).toBe('IV')
  expect(RomanNumber(5).toString()).toBe('V')
//   0, 1, 3, 4, 5, ‘I’, ‘III’, ‘IIII’, ‘IV’, ‘V’, 1968, ‘1473’, 2999, 3000, 10000, ‘CDXXIX’, ‘CD1X’,
// ‘error’, ‘MCDLXXXII’, ‘MCMLXXX’, ‘MMMMCMXCIX’, ‘MMMMDMXCIX’
})