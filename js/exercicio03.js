const prompt = require("prompt-sync")()

const valor = Number(prompt("Qual o valor do veículo? "))
const promo = Number(prompt("O valor de entrada é de 50%"))

const financ = valor / 2 
const parcela = financ / 12

console.log(`O valor de entrada é ${financ} e o restante em 12x de ${parcela}`)




