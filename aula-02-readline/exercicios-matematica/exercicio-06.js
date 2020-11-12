const readline = require("readline-sync");

let valor = readline.questionFloat("Digite um valor em reais (R$): ");

let novoValor = valor * 1.15

console.log("Seu novo valor é R$", novoValor.toFixed(2)); // .toFixed() para ajustar casas decimais