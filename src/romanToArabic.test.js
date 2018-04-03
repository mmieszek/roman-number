const romanToArabic = require('./romanToArabic')

test('I equals 1', () => {
  expect(romanToArabic('I')).toBe(1)
})

test('V equals 5', () => {
  expect(romanToArabic('V')).toBe(5)
})
