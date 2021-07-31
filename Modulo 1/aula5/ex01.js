//Autor: Rafaela Rodrigues Reis
//Descrição: Arrays básicos
let compras = ['Banana', 'Maçã', 'Açúcar', 'Pimenta', 'Chocolate'];

// Indica quantos elementos o array possui
console.log(compras.length); // retorna 5

/* Join - comando para juntar os elementos com um separador 
 que pode ou não ser pré-definido */
let separacaoTraco = compras.join(" - ")
console.log("Join - junta os elementos por um separador, exemplo: ")
console.log(separacaoTraco)

/*Pop - comando usado para excluir o último elemento do array*/
console.log("Pop - exclui o último elemento de um array, exemplo:")
console.log("Lista antes do pop: ", compras)
let ultimoProduto = compras.pop()
console.log(compras)
console.log(ultimoProduto)

/*Push - adiciona elementos ao final do array*/
console.log("Push - adiociona elementos ao array, exemplo:")
console.log("Lista antes do push: ", compras)
compras.push('Abacaxi', 'ovos', 'cenoura')
console.log(compras)

/*Shift - comando usado para eliminar o primeiro elemento de um array */
console.log("Shift - exclui o primeiro elemento do array, exemplo:")
console.log("Lista antes do shift: ", compras)
let primeiroProduto = compras.shift()
console.log("Lista depois do shift: ", compras)
console.log("Item excluído: ", primeiroProduto)

/* Unshift - comando para adcionar elementos ao inicio do array */
console.log("Unshift - adiciona elementos ao inicio do array, exemplo:")
console.log("Lista antes do unshift: ", compras)
compras.unshift('Hortelã', 'Leite')
console.log("Lista depois do unshift: ", compras)