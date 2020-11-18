const input = require("readline-sync");

//

let numero = parseInt(input.question("Digite um número: "));

let vetor = [];

for (let i = 0; i < numero; i++) {
  vetor.push(i);
}

console.log(vetor);