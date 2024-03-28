const prompt = require("prompt-sync")()

const numero = prompt("Número: ")

if (numero % 2 === 0) {
    console.log(`${numero} é par`)
    } else {
    console.log(`${numero} é ímpar`)
}

//if (numero % 2 === 0){: Esta linha inicia um bloco condicional if, que verifica se o resto da divisão do número por 2 é igual a zero. Isso determina se o número é par.

