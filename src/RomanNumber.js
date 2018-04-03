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

      // If a roman numeral is valid, after converting it twice we should get the same
      // numeral. Real world solution would be to use a regexp from stackoverflow but 
      // this is original and works :)
      if (number !== RomanNumber(this.arabic).toString()) {
        throw new Error('invalid value')
      }
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