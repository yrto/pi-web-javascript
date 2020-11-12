const input = require("readline-sync");

// Peça ao usuário para digitar um número e imprima o fatorial de n.

let numero = parseInt(input.question("Digite um número: "));

let contador = numero - 1;

let fatorial = numero;

while (contador > 0) {
  fatorial = fatorial * contador;
  contador -= 1;
}

console.log("O fatorial de", numero, "é", fatorial);