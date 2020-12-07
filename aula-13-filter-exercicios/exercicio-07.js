const numeros = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6]

// Utilize filter para retornar um novo array sem números repetidos.

let novos_numeros = numeros.filter((num, index) => index === numeros.indexOf(num))

console.log(novos_numeros)