let vetor = [3, 4, 9, 1, 6, 945.5];

console.log(vetor);

maiorNumero = 0;

for (let i of vetor) {
  if (i >= maiorNumero) {
    maiorNumero = i;
  }
}

console.log(`O maior número é ${maiorNumero}`);