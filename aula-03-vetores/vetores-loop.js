let vetor = [];

let count = 1;

while (count <= 10) {
  vetor.push(count);
  count++;
}

// removendo elementos (por padrão remove o último)

vetor.pop();

// removendo o primeiro elemento

vetor.shift();

//

console.log(vetor);