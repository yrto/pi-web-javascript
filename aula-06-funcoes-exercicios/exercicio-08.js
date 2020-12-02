const input = require("readline-sync");

function random(n) {
  let lista_numeros = [];
  for (let i = 0; i < n; i++) {
    lista_numeros.push(Math.floor(Math.random() * 101));
  }
  console.log(lista_numeros);

  let soma = 0;
  for (let i of lista_numeros) {
    soma += i;
  }
  console.log(soma);

  let media = soma / n;
  console.log(media);
}

let numero = parseInt(input.question("Digite um número: "));

random(numero);