let vetor_ex_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetor_ex_b = [1, 4, 7, null, 7, null, 9, 8]

// função filtro

const par = num => num % 2 === 0
const byHalf = (_, index, vector) => index < vector.length / 2

// modo verboso

const filtro = (filtragem, vetor) => {
  const vetor_filtrado = []
  for (let num of vetor) {
    if (filtragem(num)) vetor_filtrado.push(num)
  }
  return vetor_filtrado
}

// exemplos com filter

let vetor_1 = vetor_ex_a.filter(par)
let vetor_2 = vetor_ex_a.filter(x => x > 3)
let vetor_3 = vetor_ex_a.filter((_, index) => index % 2 === 0)
let vetor_4 = vetor_ex_b.filter(x => x)
let vetor_5 = vetor_ex_a.filter(byHalf)

// testes

console.log(vetor_1)
console.log(vetor_2)
console.log(vetor_3)
console.log(vetor_4)
console.log(vetor_5)