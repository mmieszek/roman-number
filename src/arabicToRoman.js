const conversionTable = require('./conversionTable')

function arabicToRoman(arabic) {
  const index = conversionTable.arabic.indexOf(arabic)
  return conversionTable.roman[index]
}

module.exports = arabicToRoman
