const prompt = require("prompt-sync")()

const nome = prompt("Nome do aluno: ")
const nasc = Number(prompt("Ano de nascimento: "))

const idade = 2024 - nasc

console.log(`Idade: ${idade}`)

if(idade >= 18){
    console.log(`${nome}, você é maior de idade.`)
} else{
    console.log(`${nome}, você é menor de idade.`)
}

