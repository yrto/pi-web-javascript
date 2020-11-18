const input = require("readline-sync");

// declarando variaveis/vetores

let aluno = [];
let notas = [];
let mediana = [];

// perguntando nome, idade

aluno.push(input.question("Digite o nome do aluno: "));
aluno.push(parseInt(input.question("Digite a idade do aluno: ")));

// perguntando e garantindo que a quantidade de provas é maior que 2

let qtdProvas = parseInt(input.question("Quantidade provas realizadas: "));

if (qtdProvas <= 2) {
  qtdProvas = parseInt(input.question("Quantidade provas realizadas: "));
}

for (let i = 1; i < qtdProvas + 1; i++) {
  let nota = parseFloat(input.question(`Digite a nota ${i}: `));
  notas.push(nota);
}

aluno.push(notas);

// ordem numérica crescente

notas.sort((a, b) => a - b);

// removendo a maior e a menor notas

mediana = notas.slice(1, -1);

// calculando a média e add em "aluno"

let somaNotas = 0;

for (i of mediana) {
  somaNotas += i;
}

aluno.push(somaNotas / mediana.length);

// checando a aprovação

if (aluno[3] > 5) {
  aluno.push(true);
}
else {
  aluno.push(false)
}

// final

console.log(aluno);