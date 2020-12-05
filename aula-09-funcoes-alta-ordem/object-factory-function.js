// let user = { name: 'Ayrton', idade: 29 };

// fabrica usuarios

function user_factory(nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}

let user = user_factory('Ayrton', 29);
let user2 = user_factory('Lucas', 26);

console.log(user);
console.log(user2);

// fabrica objetos baseados num objeto modelo

let livro = {
  titulo: 'O Senhor dos Aneis',
  autor: 'Tolkien',
  pags: 1000
}

function factory_creator(object) {
  let object_keys = [];

  if (arguments.length === 1 && typeof object === 'object') {
    for (key in object) {
      object_keys.push(key);
    }
  }
  else {
    for (arg of arguments) {
      object_keys.push(arg);
    }
  }

  return function () {
    let new_object = {};

    if (arguments.length === object_keys.length) {
      for (let i = 0; i < object_keys.length; i++) {
        new_object[object_keys[i]] = arguments[i];
      }
    }
    else {
      throw Error("Número de argumentos deve ser igual ao número de chaves do objeto original.")
    }

    return new_object;
  }
}

// funcoes salvam os argumentos num objeto chamado "arguments"

function print_arguments() {
  console.log(arguments);
}

// exemplos

const make_livros = factory_creator(livro);
const make_users = factory_creator(user);

console.log(make_livros('Sítio do Picapau Amarelo', 'Monteiro Lobato', 300));
console.log(make_users('Luís', 20));

// exemplo com argumentos arbitrarios

const make_produto = factory_creator('name', 'price', 'date');

console.log(make_produto('PS4', '1500', 2020));