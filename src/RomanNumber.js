const arabicToRoman = require('./arabicToRoman')
const romanToArabic = require('./romanToArabic')

function RomanNumber(number) {
  if (this instanceof RomanNumber) {
    if (typeof number === 'string') {
      this.roman = number
      this.arabic = romanToArabic(number)
    }
    if (typeof number === 'number') {
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