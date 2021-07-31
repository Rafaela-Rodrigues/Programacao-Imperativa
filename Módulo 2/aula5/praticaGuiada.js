// Prática guiada - Aula 13/07/2021

/* PARTE 1 -
a) Crie um objeto aluno que tenha como atributos: nome (string), 
quantidade de faltas (number) e notas (array de números). 
b) Crie um construtor para ele e importe-o como o módulo aluno.*/

// Função construtora
function aluno (nome, falta, notas){
    this.nome = nome,
    this.falta = falta,
    this.notas = notas,
    this.media = function (){
        let soma = this.notas.reduce(function(acumulador, elemento){
            return acumulador + elemento
        })
        return soma / this.notas.length
    },
    this.faltas = function(){
        return this.falta++;
    };
}
let aluno1 = new aluno("Renata", 1, [2, 6, 9, 9, 9])
let aluno2 = new aluno("Rafaela", 1, [5, 5, 7, 9, 9])
let aluno3 = new aluno("Vivianne", 0, [9, 10, 10, 9, 9])
let aluno4 = new aluno("Leshly", 2, [10, 10, 10, 10, 10])

module.exports = {aluno};

/*PARTE 2
a) Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.*/
// Teste da função media e faltas
console.log(aluno1.media())
console.log(aluno1.faltas())// add + 1 falta
console.log(aluno2.media())
console.log(aluno2.faltas())
console.log(aluno3.media())
console.log(aluno3.faltas())
console.log(aluno4.media())
console.log(aluno4.faltas())