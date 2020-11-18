const input = require("readline-sync");

// recebe cpf, splita para uma array e converte os elementos em números

let cpfOriginal = input.question("Digite seu CPF: ");

let cpfSplit = cpfOriginal.split("");

for (let i in cpfSplit) {
  cpfSplit[i] = parseInt(cpfSplit[i]);
}

// separando as variaveis para os calculos

let splitCheck1 = cpfSplit.slice(0, 10);
let checkPenultimo = splitCheck1.pop();

let splitCheck2 = cpfSplit.slice(0, 11);
let checkUltimo = splitCheck2.pop();

//

const finalCheck = numeros => {

  for
  
}

console.log(cpfSplit);
console.log(splitCheck1);
console.log(checkPenultimo);
console.log(splitCheck2);
console.log(checkUltimo);

//

// let count1 = 10;
// let soma1 = 0;

// for (let i = 0; i < 9; i++) {
//   cpfCheck[i] *= count1;
//   soma1 += cpfCheck[i];
//   count1--;
// }

// console.log("Soma1 é:", soma1);

// console.log(cpfCheck);

// //