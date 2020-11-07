let numero = 4;

if (numero % 2 === 0) {
  console.log(numero + " é par");
}
else {
  console.log(numero + " é ímpar");
}

//

let numero2 = 6;

if (numero2 > 0) {
  console.log(numero2 + " é positivo.");
}
else if (numero2 === 0) {
  console.log(numero2 + " é zero.");
}
else {
  console.log(numero2 + " é negativo.");
}

//

let numero3;

let numero4 = 0;

let numero5 = '';

let numero6 = [];

if (numero6) {
  console.log("Thuthy.");
}
else {
  console.log("Falsy.")
}

//

let paridade = numero % 2 ? "ímpar" : "par";

console.log(paridade);

// garantir que determinada variável numérica é sempre positiva

numero = 4

let maiorQueDois = numero > 0 ? numero : -1 * numero;

console.log(maiorQueDois);

//

idade = 80;

if (idade < 12) {
  console.log("Criança")
}
else if (idade < 18) {
  console.log("Adolescente")
}
else if (idade < 60) {
  console.log("Adulto")
}
else if (idade >= 60) {
  console.log("Idoso")
}

//

console.log(false && false);

console.log(true || false)