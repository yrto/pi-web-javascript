const input = require("readline-sync");

// Faça um programa que peça para o usuário digitar a idade, o salário e o sexo de uma pessoa até que as entradas digitadas sejam válidas:

// Idade: entre 0 e 150;
// Salário: maior que 0;
// Gênero: M, F ou Outro.

let idade = -1;
let salario = -1;
let genero = "";

while (idade <= 0 || idade >= 150) {
  idade = parseInt(input.question("Informe sua idade: "));
}

while (salario <= 0) {
  salario = parseFloat(input.question("Informe seu salário: "));
}

while (genero != "m" && genero != "f" && genero != "outro") {
  genero = input.question("Informe seu gênero: ");
}

console.log("Idade:", idade);
console.log("Salário: R$", salario);
console.log("Gênero:", genero);