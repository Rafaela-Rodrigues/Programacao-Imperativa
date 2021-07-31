/*PARTE 3
a) Em um arquivo diferente, crie o objeto literal curso que tem como atributos: 
nome do curso (string), nota de aprovação (number), faltas máximas (number) 
e uma lista de estudantes (um array composto pelos alunos criados no passo 1).*/
let estudantes = require('./praticaGuiada')
console.log(estudantes)//mostra o que o modulo trouxe - função aluno
const curso = {
    nomeCurso: "ctd",
    notaAprovacao: 7,
    faltasMax: 2,
    listaEstudantes: [],
    addAluno: function (alunos){
        this.listaEstudantes.push(alunos)
    },
    aprovacao: function(alunos){
        if(alunos.media >= this.notaAprovacao && alunos.falta < this.faltasMax){
            return true
        }else if(alunos.falta == this.faltasMax && media > (this.notaAprovacao + this.notaAprovacao * 0.1)){
            return true
        }else{
            return false
        }
    },
    listaAprovacao: function(){
        this.listaEstudantes.map(function(elemento){
            return elemento.aprovacao
        })
    }
}

/*PARTE 4
a) Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar um 
aluno a mais na propriedade lista de estudantes do objeto curso.*/

/*PARTE 5
a) Crie um método para o objeto curso que receba um aluno (como parâmetro) 
e retorne true se ele aprovou no curso ou false em caso de reprovação. 
b) Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de 
aprovação  e ter menos faltas que faltas máximas. 
c) Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.*/

/*PARTE 6
Crie um método para o objeto curso que percorra a lista de estudantes e retorne 
um array de booleanos com os resultados se os alunos aprovaram ou não.*/

/*PARTE 7
a) Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. 
b) Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js 
e garanta que sigam funcionando todos os métodos corretamente (revisar que o arquivo tenha todos os métodos corretamente).*/