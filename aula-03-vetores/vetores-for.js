let vetor1 = [4, 5, 2, 6, 8, 4, 0];
let vetor2 = [8, 4, 2, 4, 1, 0, 6];

let vetor3 = [];

// início => para variável "i" começando na posição 0
// parada => até a posição final do vetor
// passo  => incrementando +1

for (let i = 0; i < vetor1.length; i++) {
  console.log(vetor1[i] + vetor2[i]);
}

// percorrendo os vetores e adicionando resultados em outro vetor

for (let i = 0; i < vetor1.length; i++) {
  vetor3.push(vetor1[i] + vetor2[i]);
}

console.log(vetor3);

// "in" acessa os índices

for (let i in vetor1) {
  console.log(i);
}

// "of" acessa os valores

for (let num of vetor1) {
  console.log(num);
}