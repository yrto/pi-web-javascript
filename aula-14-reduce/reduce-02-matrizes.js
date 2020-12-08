let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
]

let soma = matrix.reduce(
  (state, line) => [state[0] + line[0], state[1] + line[1], state[2] + line[2]]
)

console.log(soma)