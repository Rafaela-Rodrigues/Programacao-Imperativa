// Avaliação 2 - Programação Imperativa
// 02/07/2021 - Rafaela Rodrigues Reis
// Descrição: Criar um microondas

let tempoPadrao;
let cardapio = (comida, tempoEscolhido) => {
    switch (comida) {
        case 'Pipoca':
            tempoPadrao = 10;
            if (tempoEscolhido < tempoPadrao) {
                console.log("Tempo insuficiente!");
            } else if (tempoEscolhido >= tempoPadrao && tempoEscolhido < (tempoPadrao * 2)) {
                console.log("Prato pronto, bom apetite!!!")
            } else if (tempoEscolhido >= (tempoPadrao * 2) && tempoEscolhido < (tempoPadrao * 3)) {
                console.log("Sinto muito, sua comida queimou!")
            } else if (tempoEscolhido >= (tempoPadrao * 3)) {
                console.log("Kabuuuuuuuuuummmmmmmm");
            }
            break;
        case 'Macarrão':
            tempoPadrao = 8;
            if (tempoEscolhido < tempoPadrao) {
                console.log("Tempo insuficiente!");
            } else if (tempoEscolhido >= tempoPadrao && tempoEscolhido < (tempoPadrao * 2)) {
                console.log("Prato pronto, bom apetite!!!")
            } else if (tempoEscolhido >= (tempoPadrao * 2) && tempoEscolhido < (tempoPadrao * 3)) {
                console.log("Sinto muito, sua comida queimou!")
            } else if (tempoEscolhido >= (tempoPadrao * 3)) {
                console.log("Kabuuuuuuuuuummmmmmmm");
            }
            break;
        case 'Carne':
            tempoPadrao = 15;
            if (tempoEscolhido < tempoPadrao) {
                console.log("Tempo insuficiente!");
            } else if (tempoEscolhido >= tempoPadrao && tempoEscolhido < (tempoPadrao * 2)) {
                console.log("Prato pronto, bom apetite!!!")
            } else if (tempoEscolhido >= (tempoPadrao * 2) && tempoEscolhido < (tempoPadrao * 3)) {
                console.log("Sinto muito, sua comida queimou!")
            } else if (tempoEscolhido >= (tempoPadrao * 3)) {
                console.log("Kabuuuuuuuuuummmmmmmm");
            }
            break;
        case 'Feijão':
            tempoPadrao = 12;
            if (tempoEscolhido < tempoPadrao) {
                console.log("Tempo insuficiente!");
            } else if (tempoEscolhido >= tempoPadrao && tempoEscolhido < (tempoPadrao * 2)) {
                console.log("Prato pronto, bom apetite!!!")
            } else if (tempoEscolhido >= (tempoPadrao * 2) && tempoEscolhido < (tempoPadrao * 3)) {
                console.log("Sinto muito, sua comida queimou!")
            } else if (tempoEscolhido >= (tempoPadrao * 3)) {
                console.log("Kabuuuuuuuuuummmmmmmm");
            }
            break;
        case 'Brigadeiro':
            tempoPadrao = 8;
            if (tempoEscolhido < tempoPadrao) {
                console.log("Tempo insuficiente!");
            } else if (tempoEscolhido >= tempoPadrao && tempoEscolhido < (tempoPadrao * 2)) {
                console.log("Prato pronto, bom apetite!!!")
            } else if (tempoEscolhido >= (tempoPadrao * 2) && tempoEscolhido < (tempoPadrao * 3)) {
                console.log("Sinto muito, sua comida queimou!")
            } else if (tempoEscolhido >= (tempoPadrao * 3)) {
                console.log("Kabuuuuuuuuuummmmmmmm");
            }
            break;
        default: console.log("Prato inexistente");
            break;
    }
}
//testes
cardapio('Pipoca', 10)
cardapio('Pipoca', 5)
cardapio('Pipoca', 15)
cardapio('Pipoca', 20)
cardapio('Pipoca', 30)

cardapio('Macarrão', 10)
cardapio('Macarrão', 5)
cardapio('Macarrão', 15)
cardapio('Macarrão', 20)
cardapio('Macarrão', 30)

cardapio('Carne', 10)
cardapio('Carne', 5)
cardapio('Carne', 15)
cardapio('Carne', 30)
cardapio('Carne', 60)

cardapio('Feijão', 10)
cardapio('Feijão', 12)
cardapio('Feijão', 15)
cardapio('Feijão', 24)
cardapio('Feijão', 48)

cardapio('Brigadeiro', 10)
cardapio('Brigadeiro', 5)
cardapio('Brigadeiro', 15)
cardapio('Brigadeiro', 20)
cardapio('Brigadeiro', 30)
