const readline = require("readline-sync");

let peso = readline.questionFloat("Digite seu peso: ");
let altura = readline.questionFloat("Digite sua altura: ");

let imc = peso / (altura ** 2);

console.log("Seu IMC é", imc);