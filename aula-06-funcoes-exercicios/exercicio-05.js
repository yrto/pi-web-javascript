const input = require("readline-sync");

function saudacao(user_name, user_time) {
  if (user_time >= 0 && user_time < 12) console.log("Bom dia,", user_name);
  else if (user_time >= 12 && user_time < 18) console.log("Boa tarde,", user_name);
  else if (user_time >= 18 && user_time <= 24) console.log("Boa noite,", user_name);
  else console.log("Horário inválido.")
}

let nome = input.question("Qual seu nome? ");
let horario = parseInt(input.question("Que horas são? "));

saudacao(nome, horario);