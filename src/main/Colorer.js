'use strict';

const Colors = require('./Colors');

class Colorer {

  constructor(format, fgColor, bgColor) {
    this.format = format || '';
    this.fgColor = fgColor || '';
    this.bgColor = bgColor || '';
  }

  reset(string) {
    return color(string, '', '', '');
  }

  bright(string) {
    return color(string, Colors.BRIGHT, this.fgColor, this.bgColor);
  }
  dim(string) {
    return color(string, Colors.DIM, this.fgColor, this.bgColor);
  }

  underscore(string) {
    return color(string, Colors.UNDERSCORE, this.fgColor, this.bgColor);
  }

  blink(string) {
    return color(string, Colors.BLINK, this.fgColor, this.bgColor);
  }

  reverse(string) {
    return color(string, Colors.REVERSE, this.fgColor, this.bgColor);
  }

  hidden(string) {
    return color(string, Colors.HIDDEN, this.fgColor, this.bgColor);
  }

  fgBlack(string) {
    return color(string, this.format, Colors.FG.BLACK, this.bgColor);
  }

  fgRed(string) {
    return color(string, this.format, Colors.FG.RED, this.bgColor);
  }

  fgGreen(string) {
    return color(string, this.format, Colors.FG.GREEN, this.bgColor);
  }

  fgYellow(string) {
    return color(string, this.format, Colors.FG.YELLOW, this.bgColor);
  }

  fgBlue(string) {
    return color(string, this.format, Colors.FG.BLUE, this.bgColor);
  }

  fgMagenta(string) {
    return color(string, this.format, Colors.FG.MAGENTA, this.bgColor);
  }

  fgCyan(string) {
    return color(string, this.format, Colors.FG.CYAN, this.bgColor);
  }

  fgWhite(string) {
    return color(string, this.format, Colors.FG.WHITE, this.bgColor);
  }

  bgBlack(string) {
    return color(string, this.format, this.fgColor, Colors.BG.BLACK);
  }

  bgRed(string) {
    return color(string, this.format, this.fgColor, Colors.BG.RED);
  }

  bgGreen(string) {
    return color(string, this.format, this.fgColor, Colors.BG.GREEN);
  }

  bgYellow(string) {
    return color(string, this.format, this.fgColor, Colors.BG.YELLOW);
  }

  bgBlue(string) {
    return color(string, this.format, this.fgColor, Colors.BG.BLUE);
  }

  bgMagenta(string) {
    return color(string, this.format, this.fgColor, Colors.BG.MAGENTA);
  }

  bgCyan(string) {
    return color(string, this.format, this.fgColor, Colors.BG.CYAN);
  }

  bgWhite(string) {
    return color(string, this.format, this.fgColor, Colors.BG.WHITE);
  }

  color(string) {
    return !!string ? color(string, this.format, this.fgColor, this.bgColor) : null;
  }

}

function color(string, format, fgColor, bgColor) {
  return !!string ?
    `${Colors.RESET}${format}${bgColor}${fgColor}${string}${Colors.RESET}` :
    new Colorer(format, fgColor, bgColor);
}

module.exports = Colorer;
