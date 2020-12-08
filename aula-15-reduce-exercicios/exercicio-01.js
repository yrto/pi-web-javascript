// Use a função reduce para fazer a soma de todos os elementos de um vetor numérico.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbers_sum = numbers.reduce((state, num) => state + num)

console.log(numbers_sum)