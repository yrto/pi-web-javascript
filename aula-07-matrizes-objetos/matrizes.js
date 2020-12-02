let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10, 11]
]

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// "..." spread operator

let vetor = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(vetor);

let [primeiro, ...resto] = vetor;

console.log(primeiro);
console.log(resto);

// soma recursiva

function soma_vetor(vetor) {
  if (vetor.length === 0) return 0;
  const [head, ...tail] = vetor;
  return head + soma_vetor(tail);
}

console.log(soma_vetor([1, 2, 3]));

// cópia "..." spread operator e adição de elementos

let vetor_2 = [0, ...vetor, 9, 10];

console.log(vetor_2);