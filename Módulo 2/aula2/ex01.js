//Autor: Rafaela Rodrigues Reis
//Descrição: Objetos literais
function restaurante(nome, cardapio){
    this.nome = nome,
    this.cardapio = cardapio,
    this.apresentacao = function(){
       return "Seja bem vindo ao " + this.nome + "Este é o nosso cardápio do dia: " + this.cardapio;
    }
}
let meuRestaurante = new restaurante('Restaurante da Rafa', ["batata frita", "sopa", "arroz e feijão"])
console.log(apresentacao());
