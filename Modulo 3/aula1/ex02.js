//Autor: Rafaela Rodrigues Reis
//Descrição: JSON
let frutas = '{"fruta": "banana", "preço": 8.50, "tipo": ["prata", "maça", "nanica", "terra"], "origem": "brasil"}'; //colocar tudo minúsculo
//console.log(frutas);
//console.log(frutas.origem);//undefined -> primeiro é necessário converter para JS
// conversão JSON -> JS
let frutasConvertidas = JSON.parse(frutas);
//console.log(frutasConvertidas);
//console.log(frutasConvertidas.origem);

//converção JS -> JSON
let frutasJson = JSON.stringify(frutasConvertidas);
console.log(frutasJson);
