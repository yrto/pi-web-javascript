function sayHello(name) {
  if (typeof name === typeof "string") { // verifica se o parâmetro é uma string
    console.log("Hello,", name);
  }
}

sayHello(50);

sayHello("Ayrton");

//

function somar(a, b) {
  let c = a + b;
  return c;
}

let resultado = somar(1, 2);

console.log(resultado);