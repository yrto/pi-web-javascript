// Faça uma implementação das funções map e filter utilizando o reduce.

const numbers = [1, 2, 3, 4, 5, 6]

const map = (func, vector) => vector.reduce((state, element) => [...state, func(element)], []);

const filter = (cond, vector) => vector.reduce((state, element) => cond(element) ? [...state, element] : state, []);

// teste

let result_map = map(x => x * 2, numbers)
let result_filter = filter(x => x % 2 === 0, numbers)

console.log(result_map)
console.log(result_filter)