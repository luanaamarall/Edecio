const prompt = require("prompt-sync")()

const filme = prompt("Filme: ")
const durac = prompt("Duração (min): ")

const horas = durac / 60
const min = durac % 60 

console.log(`O filme ${filme}, tem a duração de ${horas} horas e ${min} minutos`)


