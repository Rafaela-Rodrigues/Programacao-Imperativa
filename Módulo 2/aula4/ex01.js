//Autor: Rafaela Rodrigues Reis
//Descrição: Método de arrays - .map
let pares = [2, 4, 6, 8, 10];
let impares = pares.map(
    function impar (num){
        return num + 1;
    }
)
console.log(impares)