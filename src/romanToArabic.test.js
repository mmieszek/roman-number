const romanToArabic = require('./romanToArabic')

jest.setTimeout(3000)

test('I equals 1', () => {
  expect(romanToArabic('I')).toBe(1)
})

test('V equals 5', () => {
  expect(romanToArabic('V')).toBe(5)
})

test('MMMCCCIII equals 3303', () => {
  expect(romanToArabic('MMMCCCIII')).toBe(3303)
})

test('MCMLIII equals 1953', () => {
  expect(romanToArabic('MCMLIII')).toBe(1953)
})
