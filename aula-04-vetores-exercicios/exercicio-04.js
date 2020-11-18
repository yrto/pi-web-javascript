let vetor = [3, 4, 9, 1, 6];

console.log(vetor);

count = 0;

for (let i of vetor) {
  if (i % 2 === 0) {
    count++;
  }
}

console.log(`${count} número(s) par(es)`);