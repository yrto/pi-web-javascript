const input = require("readline-sync");

function calc_fibo(numero) {
  let fibonacci = [1, 1];
  for (let i = 0; i < (numero - 2); i++) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }
  console.log(fibonacci);
  return fibonacci[numero - 1];
}

let numero = input.question("Digite um número: ");

console.log(calc_fibo(numero));