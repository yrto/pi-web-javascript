let user = { name: 'Ayrton', age: 26 };

// converter objeto em uma string

let string_obj = JSON.stringify(user);

// converter string em um objeto

let user_2 = JSON.parse(string_obj);

console.log(string_obj);
console.log(user_2);