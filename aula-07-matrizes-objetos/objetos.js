let user = {
  name: 'Ayrton',
  email: 'ayrton@email.com',
  password: 'p@ssw0rd',
  age: 28,
  pets: [
    { species: 'dog', name: 'Espeto' },
    { species: 'cat', name: 'Lanches' }
  ]
  ,
  speak: (person) => {
    console.log(`Olá ${person}, meu nome é ${user.name}`);
  }
}

console.log(user['pets']);

console.log(user.pets);
console.log(user.pets[1].name);

user.speak('Bruna');

// adicionando nova chave ao dicionário

user.isBrazilian = true;

console.log(user);

// percorrendo chaves de objetos com "for"

for (let key in user) {
  console.log(key);
}

for (let key in user) {
  console.log(user[key]);
}