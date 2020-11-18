let vetor = ['1', '2', '3', '4', '10'];

console.log(vetor);

for (let i in vetor) {
  vetor[i] = parseInt(vetor[i]);
}

console.log(vetor);