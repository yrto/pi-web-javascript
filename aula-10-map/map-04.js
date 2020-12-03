const matriz = [
  ['10', '11', '22'],
  ['3', '5', '9'],
  ['34', '15', '79']
]

// map dentro de map => percorre matrizes

const matriz_2 = matriz.map(
  line => line.map(x => parseInt(x))
)

console.log(matriz);
console.log(matriz_2);