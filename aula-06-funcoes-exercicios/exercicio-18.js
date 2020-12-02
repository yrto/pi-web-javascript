const input = require("readline-sync");

//

function tipo(argumento) {
  return typeof argumento;
}

console.log(tipo(15));
console.log(tipo('texto'));
console.log(tipo(true));
console.log(tipo(console.log));