const axios = require("axios");

const apiKey = "5d0b33a3adaa365fb1561a27d2baade8";

let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric&lang=pt_br`;

let response = axios.get(url);

console.log(response);