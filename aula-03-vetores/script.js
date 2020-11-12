const input = require("readline-sync");

//

let numero = parseInt(input.question("Digite um número: "));

let count = 0;

while (count <= numero) {
  console.log(count);
  count++;
}