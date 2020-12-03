const vetor = ['10', '11', '23', '8'];

function string_to_int(string) {
  return parseInt(string);
}

// const vetor_2 = vetor.map(string_to_int); // chamando uma função

const vetor_2 = vetor.map(x => parseInt(x)); // sem chamar uma função

console.log(vetor_2);