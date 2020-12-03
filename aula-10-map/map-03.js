const vetor_5 = [10, 25, 60, 200];

// map ( conteúdo, posição, próprio vetor )

const vetor_6 = vetor_5.map(
  (num, index, vector) => num / vector.length
)

console.log(vetor_6)