let vetor = [18, 34, 54, 64, 79]
console.log(vetor);

function mediaVetor(vetor) {
  let soma = 0;
  for (let i of vetor) { soma += i; }
  console.log("Soma:", soma);
  return soma / vetor.length;
}

console.log("Media:", mediaVetor(vetor));