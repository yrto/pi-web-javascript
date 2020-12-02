// array original

let array = [1, 2, 3, 4, 5]

console.log("Original:")
console.log(array)

// filtros

const pares = valor => valor % 2 === 0
const impares = valor => valor % 2 !== 0

// filtragem

function funcao_filtragem(funcao, array) {
  let novo_array = []
  for (let i of array) {
    if (funcao(i) === true) novo_array.push(i)
  }
  return novo_array
}

// testes

console.log("Com filtro:")
console.log(funcao_filtragem(pares, array))
console.log(funcao_filtragem(impares, array))