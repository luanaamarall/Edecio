const prompt = require ("prompt-sync")()

const nota1 = Number(prompt("1º Nota: "))
const nota2 = Number(prompt("2º Nota: "))

const media = (nota1 + nota2) / 2 

console.log(`Sua média é: ${media}`)