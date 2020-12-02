let vetor = [3, 42, 45, 2, 2, 99, 77, 99, 98, 1000];

function menor_maior(vetor) {

  let menor = vetor[0];
  let maior = vetor[0];
  for (let i in vetor) {
    if (vetor[i] < menor) {
      menor = vetor[i];
    }
    else if (vetor[i] > maior) {
      maior = vetor[i];
    }
  }
  console.log("Menor:", menor, "Maior:", maior)

  let segundo_menor = maior;
  let segundo_maior = menor;
  for (let i in vetor) {
    if (vetor[i] > menor && vetor[i] < segundo_menor) {
      segundo_menor = vetor[i];
    }
    else if (vetor[i] < maior && vetor[i] > segundo_maior) {
      segundo_maior = vetor[i];
    }
  }
  console.log("Segundo menor:", segundo_menor, "Segundo maior:", segundo_maior)

}

menor_maior(vetor);