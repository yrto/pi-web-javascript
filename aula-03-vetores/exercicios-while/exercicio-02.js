const input = require("readline-sync");

// Peça ao usuário para digitar um número n e some todos os números de 1 a n.

let numero = parseInt(input.question("Digite um número: "));

let contador = 1;
let soma = 0;

while (contador <= numero) {
  soma = soma + contador;
  contador++;
}

console.log(soma);