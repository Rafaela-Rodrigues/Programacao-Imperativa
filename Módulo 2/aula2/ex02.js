//Autor: Rafaela Rodrigues Reis
//Descrição: Objetos literais e funçoes construtoras
function conta(numero, saldo, titular, deposito, saque){
    this.numero = numero,
    this.saldo = saldo,
    this.titular = titular,
    this.deposito = deposito,
    this.saque = saque,
    this.depositar = function(){ //função para calcular o depósito e retornar novo saldo
        if(typeof(deposito) === 'number'){
            this.saldo += deposito;
            return this.saldo;
        }else{
            return "Por favor insira um número válido.";
        }
    },
    this.sacar = function(){ //função para calcular saque e retornar novo saldo
        if(typeof(saque) === 'number'){
            if(saque <= this.saldo){
                this.saldo -= saque;
                return this.saldo;
            }else{
                return "Saldo insuficiente."
            }
        }else{
            return "Por favor insira um número válido."
        }
    };
}
let minhaConta = new conta(1, 10000, 'Rafaela', 3000, 12000); //cria uma nova conta na função construtora
console.log(minhaConta.numero, minhaConta.saldo, minhaConta.titular);
console.log(minhaConta.depositar()); //chama a função dentro da função conta
console.log(minhaConta.sacar());
console.log(minhaConta.numero, minhaConta.saldo, minhaConta.titular); //imprime os dados da conta