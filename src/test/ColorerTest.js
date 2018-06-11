'use strict';

console.log(
  '0) default console/terminal format/color')

// BASIC USAGE
const colorer = require('../../index')();
console.log(colorer.bright(
  '1) colorer.bright(string)'));
console.log(colorer.bgBlue(
  '2) colorer.bgBlue(string)'));
console.log(colorer.fgYellow(
  '3) colorer.fgYellow(string)'));
console.log(colorer.bgRed().fgYellow(
  '4) colorer.bgBlue().fgYellow(string)'));

// PRESET
const green = require('../../index')('green');
console.log(green.color(
  '5) green.color(string)'));

const greenOnWhite = require('../../index')('green', 'white');
console.log(greenOnWhite.color(
  '7) greenOnWhite.color(string)'));
