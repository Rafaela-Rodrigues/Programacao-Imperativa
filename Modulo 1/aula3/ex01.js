//Autor: Rafaela Rodrigues Reis
//Descrição: funções

function calcularIndiceDeMassaCorporal(altura, peso){
    let imc = (peso / (altura*altura)) * 10000
    return imc;
}

console.log(calcularIndiceDeMassaCorporal(160, 70))
console.log(calcularIndiceDeMassaCorporal(170, 70))
console.log(calcularIndiceDeMassaCorporal(185, 90))