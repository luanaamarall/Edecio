const prompt = require("prompt-sync")()

const nome = prompt ('Qual o seu nome? ')
const id = prompt ('Qual a sua idade? ')

const ano = 2024 - id 

console.log(`Olá ${nome}, você nasceu em ${ano} `)


