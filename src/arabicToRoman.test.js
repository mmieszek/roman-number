const arabicToRoman = require('./arabicToRoman')

test('1 equals I', () => {
  expect(arabicToRoman(1)).toBe('I')
})

test('5 equals V', () => {
  expect(arabicToRoman(5)).toBe('V')
})