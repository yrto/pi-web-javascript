let vetor = [];

for (let i = 0; i < 5; i++) {
  vetor.push(Math.floor(Math.random() * 101));
}

console.log(vetor);

let maior = 0;
let menor = 999;
let soma = 0;

for (let i of vetor) {
  if (i > maior) {
    maior = i;
  }
  if (i < menor) {
    menor = i;
  }
  soma += i;
}

let media = soma / vetor.length;

console.log(`${maior} é o maior número`);
console.log(`${menor} é o menor número`);
console.log(`${soma} é a soma`);
console.log(`${media} é a média`);