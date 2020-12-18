// Faça uma função que recebe um argumento e um vetor de funções. Utilize o reduce para aplicar as funções sucessivamente no argumento. Isto é, a primeira função recebe o argumento e o seu retorno é enviado como argumento para a próxima função. O último valor é o retornado pela função.

const functions = [
  (num) => num + 1,
  (num) => num + 2,
  (num) => num + 3,
  (num) => num + 4
]

function many_function(num, functions) {
  const resultado = functions.reduce((state, single_function) => single_function(state), num)
  return resultado
}

console.log(many_function(0, functions))