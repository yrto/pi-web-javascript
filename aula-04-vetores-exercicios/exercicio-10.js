const input = require("readline-sync");

//

let notas = []
let media = 0;

for (let i = 0; i < 4; i++) {
  notas.push(parseFloat(input.question("Digite uma nota: ")));
}

console.log(notas);

for (i in notas) {
  media += notas[i];
}

media = media / notas.length;

console.log(`A média é ${media}`);