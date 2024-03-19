const prompt = require("prompt-sync")()

const valor = Number(prompt("Qual o valor do jantar? "))
const garcom = Number(prompt("Cobramos 10% desse valor para o garçom.Tudo bem? "))

const total = valor * 0.1 + valor

console.log(`O valor total é de: ${total}`)

