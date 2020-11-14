const input = require("readline-sync");

//

let vetor = [];

for (let i = 0; i < 5; i++) {
  let numero = input.question("Digite um número: ");
  vetor.push(numero);
}

console.log(vetor);