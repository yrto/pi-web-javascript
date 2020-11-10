const readline = require("readline-sync");

let int1 = readline.questionFloat("Digite o primeiro inteiro: ");
let int2 = readline.questionFloat("Digite o segundo inteiro: ");
let float = readline.questionFloat("Digite um número real: ");

console.log((int1 * 2) * (int2 / 2));

console.log((int1 * 3) + float);

console.log(float ** 3);