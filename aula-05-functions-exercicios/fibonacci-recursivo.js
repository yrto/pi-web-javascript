const input = require("readline-sync");

function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let numero = input.question("Digite um número: ");

console.log(fibonacci(numero));