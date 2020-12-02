// recursao - fatorial

function fatorial(num) {
  if (num <= 1) return 1;
  return num * fatorial(num - 1);
}

console.log(fatorial(5));

// recursao - soma dos elementos de uma array

function array_soma(array) {
  if (array.length === 0) return 0;
  return array[0] + array_soma(array.slice(1));
}

console.log(array_soma([1, 2, 3, 4]));