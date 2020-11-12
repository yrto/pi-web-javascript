// declarando vetor

let vetor = [1, "texto", true, 1.5, [1, 2, 3]];

// alterando o valor de elementos específicos pela posição

vetor[1] = "outro texto";

// add no final

vetor.push("último elemento");

// add no começo

vetor.unshift("primeiro elemento");

//

console.log(vetor);
console.log(vetor.length);

// acessando o último elemento

console.log(vetor[vetor.length - 1]);