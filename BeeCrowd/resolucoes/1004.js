var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let prod = a * b;

Math.round(prod);

console.log(`PROD = ${prod}`);