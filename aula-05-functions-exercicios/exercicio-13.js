function somaElementos(vetor) {
  let soma = 0;
  for (i of vetor) { soma += i; }
  return soma;
}

let vetor = [3, 5, 1, 15];
console.log(vetor);

console.log(somaElementos(vetor));