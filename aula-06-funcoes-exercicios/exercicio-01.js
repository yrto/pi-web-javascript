const input = require("readline-sync");

//

let numero_digitado = parseInt(input.question("Digite um número: "));

function double(numero) {
  return numero * 2;
}

console.log(double(numero_digitado));