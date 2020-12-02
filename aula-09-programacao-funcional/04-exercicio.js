// array original

let array = [1, 2, 3, 4, 5];

console.log("Original:");
console.log(array);

// transformacao

const vezes_10 = (argumento) => argumento * 10;
const divide_10 = (argumento) => argumento / 10;

// transformações

function funcao_tranformacao(funcao, array) {
  let novo_array = [];
  for (let i of array) novo_array.push(funcao(i));
  return novo_array;
}

// teste

console.log("Transformadas:");
console.log(funcao_tranformacao(vezes_10, array));
console.log(funcao_tranformacao(divide_10, array));