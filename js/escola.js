const prompt = require("prompt-sync")()

const nome = prompt("Nome do Aluno: ")
const nota1 = Number(prompt("1ª nota: "))
const nota2 = Number(prompt("2ª nota: "))

const media = (nota1 + nota2) / 2

console.log(`Média: ${media.toFixed(1)}`)

if(media >= 7) {
    console.log(`Parabéns ${nome}! Você foi aprovado`)
} else {
    console.log(`Que pena, ${nome}. Você foi reprovado.`)
}

