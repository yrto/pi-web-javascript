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

// primeiro check

console.log("CPF:", cpfSplit);
console.log("Check 1:", splitCheck1);
console.log("Penultimo:", checkPenultimo);
console.log("Check 2:", splitCheck2);
console.log("Último:", checkUltimo);

// declarando contadores

let count10 = 10;
let count11 = 11;

// multiplicando elementos

for (i in splitCheck1) {
  splitCheck1[i] = splitCheck1[i] * count10;
  count10--;
}

for (i in splitCheck2) {
  splitCheck2[i] = splitCheck2[i] * count11;
  count11--;
}

// segundo check

console.log("Check 1 multiplicado:", splitCheck1);
console.log("Check 2 multiplicado:", splitCheck2);

// função para somar os elementos

function somaElementos(vetor) {
  let soma = 0;
  for (i of vetor) { soma += i; }
  return soma;
}

console.log("Soma check 1:", somaElementos(splitCheck1));
console.log("Soma check 2:", somaElementos(splitCheck2));

// check final

if ((somaElementos(splitCheck1) * 10) % 11 !== checkPenultimo) {
  console.log("CPF inválido no check 1");
}
else if ((somaElementos(splitCheck2) * 10) % 11 !== checkUltimo) {
  console.log("CPF inválido no check 2");
}
else {
  console.log(`O CPF ${cpfOriginal} é válido!`)
}