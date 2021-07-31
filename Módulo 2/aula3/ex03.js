//Autor: Rafaela Rodrigues Reis
//Descrição: Modulos - importar
let aluno = require('./ex02');
function boletim(){
    console.log("Aluno(a): " + aluno.nome + ", sua média foi de: " + aluno.media + ", obtendo status de: " + aluno.status);
}
console.log(boletim());