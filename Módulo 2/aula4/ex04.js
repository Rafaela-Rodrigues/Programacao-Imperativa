//Autor: Rafaela Rodrigues Reis
//Descrição: Método de arrays - .forEach()
let animais = ["Pato", "Gavião", "Galinha", "Mula", "Chimpanzé"]
let nomesAnimais = animais.forEach(
    function(elemento){
        console.log("O nome do animal é: " + elemento);
    }
)