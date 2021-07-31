//Autor: Rafaela Rodrigues Reis
//Descrição: Método avançado de arrays
function palavra(num, palavras){
    let filtroPalavras = palavras.filter(
        function(palavras){
            let string = palavras.split(
                function(elemento){
                    elemento.length})
        return string > num;
    })
    return filtroPalavras;
}
palavra(5, ["mamao", "pedro", "limonada","faca"])
console.log(palavra)