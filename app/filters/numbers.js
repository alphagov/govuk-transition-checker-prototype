// -------------------------------------------------------------------
// Imports and setup
// -------------------------------------------------------------------
const numeral = require('numeral')

// Leave this filters line
const filters = {}

/*
  ====================================================================
  numeral
  --------------------------------------------------------------------
  Prettify a number
  ====================================================================

  Usage:

  {{ 1000 | numeral("0,00.0") }}

  = 1,000.00

*/

filters.numeral = function(number, format) {
  return numeral(number).format(format)
}


// -------------------------------------------------------------------
// keep the following line to return your filters to the app
// -------------------------------------------------------------------
exports.filters = filters
