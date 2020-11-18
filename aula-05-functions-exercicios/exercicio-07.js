function random() {
  let numeros = []
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 101));
  }
  numeros.sort(function (a, b) { return b - a });
  console.log(numeros);
  return numeros[0];
}

console.log(random());