//tentativa de otimizaçao - inacabada
let verificacao = (tempo, tempoPadrao) => {
    if (tempo < tempoPadrao) {
        console.log("Tempo insuficiente!");
    } else if (tempo >= tempoPadrao && tempo < (tempoPadrao * 2)) {
        console.log("Prato pronto, bom apetite!!!")
    } else if (tempo >= (tempoPadrao * 2) && tempo < (tempoPadrao * 3)) {
        console.log("Sinto muito, sua comida queimou!")
    } else if (tempo >= (tempoPadrao * 3)) {
        console.log("Kabuuuuuuuuuummmmmmmm");
    }
// Fim do if
} 
module.exports = verificacao;
// switch(tempo, tempoPadrao){
//     case tempo < tempoPadrao:
//         console.log("Tempo insuficiente");
//     break;
//     case tempo == tempoPadrao || tempo < (2 * tempoPadrao):
//         console.log("Prato pronto, bom apetite");
//     break;
//     case tempo >= (2 * tempoPadrao):
//         console.log("Sinto muito, o prato queimou");
//     break;
//     default:
//         console.log("KABUUUUUUUUUUUUUMMMMMMMMMMM!!!!")
//     break;