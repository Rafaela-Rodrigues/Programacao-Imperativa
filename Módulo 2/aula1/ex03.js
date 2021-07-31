//Autor: Rafaela Rodrigues Reis
//Descrição: Clousures
function container(nome){
    let saudacaoGenerica = "Olá";
    function saudar(){
        return saudacaoGenerica + " " + nome;
    }
    return saudar();

}
console.log(container("Rafaela"))