// Dado um vetor de vetores, crie um único vetor que contém todos os elementos:

// [[“1”, “2”, “3”],[true], [4, 5, 6]] -> [“1”, “2”, “3”, true, 4, 5, 6]

const vetor = [["1", "2", "3"], [true], [4, 5, 6]]

const consolidado = vetor.reduce(
  (state, elemento) => [...state, ...elemento], []
)

console.log(consolidado)