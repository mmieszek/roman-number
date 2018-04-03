const conversionTable = require('./conversionTable')

function arabicToRoman(arabic) {
  const values = conversionTable.arabic
  let number = arabic
  let roman = ''
  while (number > 0) {
    for (var i = 0; i < values.length; i++) {
      const value = values[i]
      // findthe freatest roman symbol smaller than the argument number
      if (value<= number) {
        number = number - value
        const index = values.indexOf(value)
        roman += conversionTable.roman[index]
        break;
      }
    }
  }
  return roman
}

module.exports = arabicToRoman
