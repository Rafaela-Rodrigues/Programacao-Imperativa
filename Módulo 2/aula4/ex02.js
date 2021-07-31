//Autor: Rafaela Rodrigues Reis
//Descrição: Método de arrays - .filter()
let nomes = ["Eda", "Lúcio", "Maria", "Hande", "Kiraz", "Maria", "Magda"];
let repetidos = nomes.filter(
    function nomesRepetidos(elemento){
        return elemento == "Maria";
}
);//Cria um novo array somente com os nomes repetidos
console.log(repetidos);
repetidos = nomes.filter(
    function nomesRepetidos(elemento){
        return elemento != "Maria";
}
);//cria um array com nomes que não sejam "Maria"
console.log(repetidos);