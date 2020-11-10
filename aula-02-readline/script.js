// npm

const readline = require('readline-sync');



// prompt nome

const nome = readline.question("Informe seu nome: ");

console.log(nome, typeof nome);



// prompt idade

const idade = parseInt(readline.question("Informe sua idade: "));

console.log(idade, typeof idade);



// prompt altura

const altura = parseFloat(readline.question("Informe sua altura: "));

console.log(altura, typeof altura);