//Autor: Rafaela Rodrigues Reis
//Descrição: Recursividade - chama a função dentro da função mais de uma vez
function decrementar(numero){
    console.log(numero);

    numero--
    if(numero > 0){
        decrementar(numero)
    }
}
decrementar(3)