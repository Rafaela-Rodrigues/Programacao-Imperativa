//Autor: Rafaela Rodrigues Reis
//Descrição: Objetos literais e funçoes construtoras
function aluno(nome, matricula, notas) {
    this.nome = nome,
    this.matricula = matricula,
    this.notas = notas
    this.mediaDeNotas = function() {
        let somaNotas = 0;
        for (i = 0; i < this.notas.length; i++) {
            somaNotas = somaNotas + this.notas[i];
        };
        return `Media: ${somaNotas/this.notas.length}`;
    }
}
let primeiroAluno = new aluno('Rafaela', 1, [4, 3, 8, 9, 9]);//cadastro de novo aluno
console.log(primeiroAluno.nome, primeiroAluno.matricula, primeiroAluno.notas);//Dados do aluno
console.log(primeiroAluno.mediaDeNotas());//media do aluno