const conversionTable = require('./conversionTable')

function romanToArabic(roman) {
  const values = conversionTable.roman
  let number = roman
  let arabic = 0
  while (number.length > 0) {
    let symbolFound = false
    // iterate over roman symbols and check if the number starts with any of them
    for (var i = 0; i < values.length; i++) {
      const value = values[i]
      if (number.indexOf(value) === 0) {
        // remove the part that was converted to decimal number
        number = number.substring(value.length)
        const index = values.indexOf(value)
        arabic += conversionTable.arabic[index]
        symbolFound = true
        break;
      }
    }
    if (!symbolFound) throw new Error('invalid value')
  }
  return arabic
}

module.exports = romanToArabic
