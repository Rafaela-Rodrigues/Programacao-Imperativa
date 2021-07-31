//Autor: Rafaela Rodrigues Reis
//Descrição: Promise
const atraso = () => new Promise(resolve => setTimeout(resolve, 10000));
const umPorSegundo = async () => {
    await atraso(console.log('1 seg'));
    await atraso(console.log('2 seg'));
    await atraso(console.log('3 seg'));
}

umPorSegundo();