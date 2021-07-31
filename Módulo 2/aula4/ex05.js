//Autor: Rafaela Rodrigues Reis
//Descrição: Método avançado de arrays
let numeros = [1, 2, 3, 4, 5]
let novaMatriz = numeros.map(
    function(elemento, somaNumeros){
        return elemento / somaNumeros;
    },numeros.reduce(
        function(acumulador, elemento){
            somaNumeros = acumulador + elemento;
            return somaNumeros;
        }
    )
)
console.log(novaMatriz);