const input = require("readline-sync")

let qtd_numeros = parseInt(input.question(`Quantos números aleatórios você quer? `))

// Crie uma função para gerar um número inteiro aleatório entre -10 e 10. Em seguida, utilize a função map e a função criada para construir um array com 20 números inteiros aleatórios entre -10 e 10.

const random_number = () => Math.floor(Math.random() * 21) - 10

const make_array = (qtd) => {
  let novo_vetor = new Array(qtd).fill(0)
  // novo_vetor = novo_vetor.map((num) => random_number())
  // novo_vetor = novo_vetor.map(() => random_number())
  novo_vetor = novo_vetor.map(random_number) // formato reduzido

  return novo_vetor
}

console.log(make_array(qtd_numeros))

// for (let i = 0; i < 10; i++) {
//   vetor.push(Math.floor(Math.random() * 11));
// }

// let array = new Array(20).fill(0)