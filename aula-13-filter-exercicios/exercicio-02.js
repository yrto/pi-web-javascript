// Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.

const vetor_ex_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let novo_vetor = vetor_ex_a.filter(x => x % 2 === 0)

console.log(novo_vetor)