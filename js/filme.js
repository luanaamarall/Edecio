const prompt = require("prompt-sync")()

const titulo = prompt("Título do Filme: ")
const duracao = Number(prompt("Duração (min): "))

const horas = Math.floor(duracao / 60)
const minutos = duracao % 60

console.log(`O filme ${titulo}`)
console.log(`Tem a duração de ${horas}h e ${min}m`)

