//Autor: Rafaela Rodrigues Reis
//Descrição: Arrow functions
let mensagem
let a
let b
let juntar = (mensagem, a, b) => {
    console.log(mensagem)
    return console.log(a + b);
}
juntar("Olá mundo!", 3, 2)