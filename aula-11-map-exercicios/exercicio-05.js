const customers = [
  [1, 'isidro_von@hotmail.com', 'Switzerland'],
  [2, 'frederique19@gmail.com', 'Democratic People\'s Republic of Korea'],
  [3, 'fredy54@gmail.com', 'Tunisia'],
  [4, 'braxton29@hotmail.com', 'Egypt'],
  [5, 'josh_batz60@gmail.com', 'Serbia'],
  [6, 'emie_corkery82@yahoo.com', 'Brazil']
];

// Para ficar melhor de utilizar os dados dessa matriz, utilize a função map para transformá-la em um array de objetos com os campos id, email e country.

let customers_obj = customers.map(customer => { return { id: customer[0], email: customer[1], country: customer[2] } });

console.log(customers);
console.log(customers_obj);