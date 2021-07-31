//Autor: Rafaela Rodrigues Reis
//Descrição: Método de arrays - .reduce()

let numeros = [1, 2, 3, 4, 5]
let numerosFormatados = numeros.reduce(
    function(){
        return numeros.join("-");
    }
)
console.log(numerosFormatados)