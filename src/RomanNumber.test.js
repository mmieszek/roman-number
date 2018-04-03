const RomanNumber = require('./RomanNumber')

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