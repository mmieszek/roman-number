const arabicToRoman = require('./arabicToRoman')

jest.setTimeout(3000)

test('1 equals I', () => {
  expect(arabicToRoman(1)).toBe('I')
})

test('5 equals V', () => {
  expect(arabicToRoman(5)).toBe('V')
})

test('3303 equals MMMCCCIII', () => {
  expect(arabicToRoman(3303)).toBe('MMMCCCIII')
})

test('1953 equals MCMLIII', () => {
  expect(arabicToRoman(1953)).toBe('MCMLIII')
})
