const prompt = require("prompt-sync")()

const jantar = Number(prompt("Jantar R$: "))
const taxa = jantar * 0.1

const total = jantar + taxa

console.log(`Taxa do Garçom: ${taxa}`)
console.log(`Total a pagar: ${total}`) 










// const prompt = require("prompt-sync")()

// const valor = Number(prompt("Qual o valor do jantar? "))
// const garcom = Number(prompt("Cobramos 10% desse valor para o garçom. "))

// const total = valor * 0.1 + valor

//console.log(`O valor total é de: ${total}`)

