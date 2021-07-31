//Autor: Rafaela Rodrigues Reis
//Descrição: JSON
const fs = require('fs');//fs - file system - própria biblioteca do JSON
let frutas = '{"fruta": "banana", "preço": 8.50, "tipo": ["prata", "maça", "nanica", "terra"], "origem": "brasil"}';

fs.writeFileSync('teste.txt',frutas);

let lerJson = fs.readFileSync('teste.txt', 'utf-8'); // utf-8 => codificação de caracteres universal
console.log(lerJson);