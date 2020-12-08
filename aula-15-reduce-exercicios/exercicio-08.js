// Dada uma matriz numérica quadrada, utilize o reduce para somar a sua diagonal principal.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// Resultado deve ser 1+5+9 = 15

const diagonal_sum = matrix.reduce((init, line, index) => init + line[index], 0)

console.log(diagonal_sum)