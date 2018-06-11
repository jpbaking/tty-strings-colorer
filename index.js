'use strict';

const Colorer = require('./src/main/Colorer');
const Colors = require('./src/main/Colors');

module.exports = (strFgColor, strBgColor) => {
  return new Colorer(
    null,
    !!strFgColor ? Colors.FG[strFgColor.toUpperCase()] : null,
    !!strBgColor ? Colors.BG[strBgColor.toUpperCase()] : null
  );
}
