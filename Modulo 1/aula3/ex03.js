//Autor: Rafaela Rodrigues Reis
//Descrição: funções
let nomeJogador
let golsJogador
let precoEmDolares
function fazerGol(golsJogador, precoEmDolares){
    golsJogador = golsJogador + 1
    precoEmDolares = precoEmDolares + 10000
    console.log("Goooool");
    return golsJogador + " " + precoEmDolares;
}
nomeJogador = "Messi"
console.log(nomeJogador + " " + fazerGol(8, 10000))