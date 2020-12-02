const input = require("readline-sync");

let numero = parseInt(input.question("Digite um número: "));

//

function reverso(numero) {
  numero = numero.toString();
  let numVetor = numero.split("");
  numVetor.reverse();
  return parseInt(numVetor.join(""));
}

console.log(reverso(numero));