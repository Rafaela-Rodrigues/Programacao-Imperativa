//Autor: Rafaela Rodrigues Reis
//Descrição: condicionais
let altura
let acompanhada
function podeSubir(altura, acompanhada){
    if(altura > 140 && altura < 200){
        return console.log("Pode subir, bom passeio!");
    }else if(altura < 140 && altura > 120 && acompanhada == 'true'){
        return console.log("Pode subir com acompanhante, bom passeio!");
    }else if(altura < 120){
        return console.log("Lamentamos, mas voce ainda não possui altura suficiente, acesso negado.")
    }else{
        return console.log("Acesso negado!");
    }
}
podeSubir(160, false);