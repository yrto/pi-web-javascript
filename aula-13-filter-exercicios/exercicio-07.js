const numeros = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6]

// Utilize filter para retornar um novo array sem números repetidos.

const novos_numeros = numeros.filter((num, index, vector) => index === vector.indexOf(num))

console.log(novos_numeros)