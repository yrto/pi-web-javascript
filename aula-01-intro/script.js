// alert("Teste");
// console.log("Teste");

var idade = 20; // não respeita escopo

let nome = "Ayrton"; // respeita o escopo

const pi = 3.14; // constantes

//

let estaSol = true;

console.log(estaSol + " / " + typeof estaSol)

//

let vazio = null; // representa algo vazio ou simplesmente nada

//

let soma = function (a, b) { return a + b };

console.log(soma(1, 3));

// arrays/vetores

let listaNumeros = [1, 2, 3];

// objetos

let objeto = { numero: 23, texto: "texto qualquer" };

console.log(objeto.texto);

// conversão de tipagem

let num1 = parseInt("12"); // para inteiros
let num2 = parseFloat("63.3") // para floats

// comparação

console.log(1 == "1");
console.log(1 === "1");

console.log(1 != "1");
console.log(1 !== "1");

// matemática

1 + 1
1 - 1
4 / 3
3 % 2
2 * 3

console.log(Math.pow(3, 2));

console.log(Math.floor(15.4));
console.log(Math.ceil(15.4));

console.log(Math.PI);

console.log(Math.random() * 5); // gera números aleatórios entre 0 e 1

// concatenação

console.log("A" + "B" + "C");