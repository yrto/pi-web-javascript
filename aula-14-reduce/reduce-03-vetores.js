const alunos = [
  { nome: 'Ayrton', nota: 6 },
  { nome: 'Lucas', nota: 9 },
  { nome: 'Bruno', nota: 10 }
]

let nota_total = alunos.reduce((nota_acumulada, aluno) => nota_acumulada + aluno.nota, 0) // '0' é o estado inicial

let alunos_aprovados = alunos.reduce(
  (aprovados_parcial, aluno) => aluno.nota > 6 ? [...aprovados_parcial, aluno.nome] : aprovados_parcial, [] // '[]' é o estado inicial
)

console.log(nota_total)
console.log(alunos_aprovados)