let vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// criando subvetores ".slice("início", "fim")"

let subVetor = vetor.slice(3, vetor.length - 1)

vetor[0] = "primeiro";

// check...

console.log(vetor);
console.log(subVetor);

// ".includes()" checa se determinado elemento existe no vetor (true or false)

console.log(vetor.includes("primeiro"));

// ".indexOf()" checa a posição da primeira ocorrência de determinado elemento

console.log(vetor.indexOf(2));

// ".lastIndexOf()" checa a posição da última ocorrência de determinado elemento

console.log(vetor.lastIndexOf(5));

// concatenação com ".concat()" que pode concatenar vários vetores em sequência

let vetorConjunto = vetor.concat(subVetor).concat(subVetor);
console.log(vetorConjunto);

// recortando elementos de outros vetores com "splice"
// ".splice("início", "quantidade de elementos a remover do vetor indicado")"
// também adiciona elementos no lugar daqueles removidos, em ordem

let subVetor2 = vetor.splice(3, 2, "novo 1", "novo 2");
console.log(vetor);
console.log(subVetor2);