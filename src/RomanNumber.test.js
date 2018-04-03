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
    new RomanNumber(10000)
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
  expect(t).toThrowError('invalid value')
})

test('throws Error when roman value is invalid', () => {
  const t = () => {
    new RomanNumber('IIII')
  };
  expect(t).toThrowError('invalid value')
})

test('test all the scenarios', () => {
  expect(RomanNumber(1).toString()).toBe('I')
  expect(RomanNumber(2).toString()).toBe('II')
  expect(RomanNumber(3).toString()).toBe('III')
  expect(RomanNumber(4).toString()).toBe('IV')
  expect(RomanNumber(5).toString()).toBe('V')
  
  expect(RomanNumber(1968).toString()).toBe('MCMLXVIII')
  expect(RomanNumber(1473).toString()).toBe('MCDLXXIII')
  expect(RomanNumber(2999).toString()).toBe('MMCMXCIX')
  expect(RomanNumber(3000).toString()).toBe('MMM')

  expect(RomanNumber('I').toInt()).toBe(1)
  expect(RomanNumber('II').toInt()).toBe(2)
  expect(RomanNumber('III').toInt()).toBe(3)
  expect(RomanNumber('IV').toInt()).toBe(4)
  expect(RomanNumber('V').toInt()).toBe(5)
  expect(RomanNumber('CDXXIX').toInt()).toBe(429)

  let t = () => {
    RomanNumber('CD1X')
  }
  expect(t).toThrowError('invalid value')

  expect(RomanNumber('MCDLXXXII').toInt()).toBe(1482)
  t = () => {
    RomanNumber('MMMMCMXCIX')
  }
  expect(t).toThrowError('invalid range')
  t = () => {
    RomanNumber('MMMMDMXCIX')
  }
  expect(t).toThrowError('invalid range')
})