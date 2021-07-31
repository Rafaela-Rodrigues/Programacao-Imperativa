//Autor: Rafaela Rodrigues Reis
//Descrição: JSON
let dadosJson = '{"nome":"William", "sobrenome":"Pantoja", "idade": 53}';
//console.log(dadosJson); //teste
let dadosConvertidosJS = JSON.parse(dadosJson); //objeto literal
//console.log(dadosConvertidosJS);

//console.log(dadosConvertidosJS.nome); //Imprime somente nome, neste caso = William
//console.log(dadosConvertidosJS.sobrenome.toUpperCase());//PANTOJA

//serialização JS -> JSON
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS);
//console.log(objetoConvertidoJson);//teste - comparação - depois
//console.log(dadosConvertidosJS); // teste - comparação - antes
