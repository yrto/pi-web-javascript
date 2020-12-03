const vetor_3 = [2, 4, 8, 1, 5, 6, 3, 0, 5]

// map ( conteúdo, posição )

const vetor_4 = vetor_3.map(
  (num, index) => {
    if (index % 2 === 0) return num ** 2
    else return num ** 3
  }
)

// com operador ternário => condição ? true : false

const vetor_5 = vetor_3.map(
  (num, index) => index % 2 === 0 ? num ** 2 : num ** 3
)

// 

console.log(vetor_4)
console.log(vetor_5)