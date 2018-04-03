const arabicToRoman = require('./arabicToRoman')
const romanToArabic = require('./romanToArabic')

function validateRange(number) {
  if (number < 1 || number >= 4000) throw new Error('invalid range')
}

function RomanNumber(number) {
  if (number === null || number === undefined) throw new Error('value required')

  if (this instanceof RomanNumber) {
    if (typeof number === 'string') {
      this.roman = number
      this.arabic = romanToArabic(number)
    }
    if (typeof number === 'number') {
      validateRange(number)
      this.arabic = number
      this.roman = arabicToRoman(number)
    }    
  } else {
    return new RomanNumber(number)
  }
}

RomanNumber.prototype.toString = function() {
  return this.roman
}

RomanNumber.prototype.toInt = function() {
  return this.arabic
}

module.exports = RomanNumber