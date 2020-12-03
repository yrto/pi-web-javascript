// Crie um script para receber dois arrays informados pelo usuário. Em ambos os casos, não existe um número definido de números para os arrays, portanto, receba os números, até que o usuário informe um valor negativo.

const input = require("readline-sync");

let vector_one = [];
let vector_two = [];

while (true) {
  let num = parseInt(input.question(`Digite um número para o vetor 1: `));
  if (num >= 0) vector_one.push(num);
  else break;
}

while (true) {
  let num = parseInt(input.question(`Digite um número para o vetor 2: `));
  if (num >= 0) vector_two.push(num);
  else break;
}

console.log(vector_one);
console.log(vector_two);

// Com os dois arrays, utilize a função map para multiplicá-los, elemento a elemento. É possível que os arrays tenham tamanhos diferentes, certo? Por isso, o array resultante deverá ter o tamanho do menor dos arrays.

if (vector_one.length > vector_two.length) {
  let vector_bucket = vector_one;
  vector_one = vector_two;
  vector_two = vector_bucket;
}

let vector_tre = vector_one.map(
  (num_1, index) => num_1 * vector_two[index]
)

console.log(vector_tre);