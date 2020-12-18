// Use a função reduce para transformar um vetor numérico em uma string com todos os números como caractéres.

// [1, 2, 3, 4] -> "1234"

const numbers = [1, 2, 3, 4]

const concat_numbers = numbers.reduce((state, num) => state + num, '')

console.log(concat_numbers)