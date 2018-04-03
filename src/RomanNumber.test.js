const RomanNumber = require('./RomanNumber')

test('conversion of arabic number', () => {
  const number = new RomanNumber(5)
  expect(number.toString()).toBe('V')
  expect(number.toInt()).toBe(5)
})

test('conversion of roman number', () => {
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