const input = require("readline-sync");

let vetor = [3, 5, 1];
console.log(vetor);

//

let numero = input.question("Digite um número: ");

const multiplicaVetor = (numero, vetor) => {
  let novoVetor = [];
  for (let i in vetor) {
    novoVetor.push(vetor[i] * numero);
  }
  return novoVetor;
}

console.log(multiplicaVetor(numero, vetor));