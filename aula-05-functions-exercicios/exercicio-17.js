const input = require("readline-sync");

let numero = parseInt(input.question("Digite um número: "));

//

function primo(numero) {
  if (numero <= 1) {
    return false;
  }
  else if (numero <= 3) {
    return true;
  }
  else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
      else {
        return true;
      }
    }
  }
}

console.log(numero, "é primo:", primo(numero));