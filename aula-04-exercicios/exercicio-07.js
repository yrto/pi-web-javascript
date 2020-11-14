let vetor1 = [3, 4, 9, 1, 6];
let vetor2 = [2, 8, 5, 7, 10];

console.log(vetor1);
console.log(vetor2);

let vetor3 = [];

let produtoEscalar = 0;

for (let i = 0; i < vetor1.length; i++) {
  vetor3.push(vetor1[i] * vetor2[i]);
  produtoEscalar += vetor3[i];
}

console.log(vetor3);
console.log(`O produto escalar é ${produtoEscalar}`);