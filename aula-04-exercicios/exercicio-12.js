let vetor = []

for (let i = 0; i < 10; i++) {
  vetor.push(Math.floor(Math.random() * 101));
}

console.log(vetor);

let maiores50 = 0;

for (let i of vetor) {
  if (i > 50) {
    maiores50++
  }
}

console.log(`${maiores50} números maiores que 50`)