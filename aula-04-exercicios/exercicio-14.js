const input = require("readline-sync");

//

let aluno = [];
let notas = [];
let somaNotas = 0;

aluno.push(input.question("Digite o nome do aluno: "));
aluno.push(parseInt(input.question("Digite a idade do aluno: ")));

let qtdProvas = parseInt(input.question("Quantidade provas realizadas: "));

for (let i = 1; i < qtdProvas + 1; i++) {
  let nota = parseFloat(input.question(`Digite a nota ${i}: `));
  notas.push(nota);
  somaNotas += nota;
}

aluno.push(notas);
aluno.push(somaNotas / qtdProvas);

if (aluno[3] > 5) {
  aluno.push(true);
}
else {
  aluno.push(false)
}

//

console.log(aluno);