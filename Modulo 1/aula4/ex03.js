//Autor: Rafaela Rodrigues Reis
//Descrição: condicionais
let estacao
function estacoes(estacao){
    switch(estacao){
        case 'Verão':
            console.log("Que calor hein!");
        break;
        case 'Inverno':
            console.log("Frio demais!");
        break;
        case 'Outono':
            console.log("É a estação em que as folhas caem!");
        break;
        case 'Primavera':
            console.log("O momento em que as folhas crescem!");
        break;
        default:
            console.log("Ops! Estação inválida!");
        break;
    }
}
estacoes('Verão')