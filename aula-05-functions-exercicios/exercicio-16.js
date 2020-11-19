const input = require("readline-sync");

let frase = input.question("Digite uma frase: ");

//

function titleCase(frase) {
  let vetorPalavras = frase.split(" ");
  for (let i in vetorPalavras) {
    vetorPalavras[i] = vetorPalavras[i].split("");
    vetorPalavras[i][0] = vetorPalavras[i][0].toUpperCase();
    vetorPalavras[i] = vetorPalavras[i].join("");
  }
  return vetorPalavras.join(" ");
}

console.log(titleCase(frase));