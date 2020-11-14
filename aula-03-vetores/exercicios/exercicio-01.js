const input = require("readline-sync");

// Faça um algoritmo que peça para um usuário digitar um número e que só finaliza quando o usuário digitar 0.

let numero = parseInt(input.question("Digite um número: "));

while (numero != 0) {
  numero = parseInt(input.question("Digite um número: "));
}