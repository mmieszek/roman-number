const conversionTable = require('./conversionTable')

function romanToArabic(roman) {
  const values = conversionTable.roman
  let number = roman
  let arabic = 0
  while (number.length > 0) {
    for (var i = 0; i < values.length; i++) {
      const value = values[i]
      if (number.indexOf(value) === 0) {
        number = number.substring(value.length)
        const index = values.indexOf(value)
        arabic += conversionTable.arabic[index]
        break;
      }
    }
  }
  return arabic
}

module.exports = romanToArabic
