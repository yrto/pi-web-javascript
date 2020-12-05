// Dado um vetor de strings, filtre os elementos do vetor para conter apenas strings com 5 caractéres ou menos.

const vetor_ex_a = ['maça', 'uva', 'melancia', 'banana', 'laranja']

let novo_vetor = vetor_ex_a.filter(str => str.length > 5)

console.log(novo_vetor)