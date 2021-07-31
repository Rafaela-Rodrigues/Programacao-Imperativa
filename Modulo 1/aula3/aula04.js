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
function hatTrick(fazerGol){
    return fazerGol;
}
fazerGol(8, 10000)
nomeJogador = "Messi"