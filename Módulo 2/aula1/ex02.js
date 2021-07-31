//Autor: Rafaela Rodrigues Reis
//Descrição: CallBack
function andar(){
    return "andar";
}
function parar(){
    return "parar";
}
function acaoCarro(callback){

    return console.log("O carro deve " + callback);
};
acaoCarro(andar());
acaoCarro(parar());