const prompt = require("prompt-sync")()

const entrada = Number(prompt("Hora da Entrada: "))
const saida = Number(prompt("Hora de saída: "))

const tempo = Math.ceil(saida - entrada)
const valor = tempo * 5

console.log(`Cobrar: ${tempo}hora(s)`)
console.log(`Valor R$: ${valor.toFixed(2)}`)
