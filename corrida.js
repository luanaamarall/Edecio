const prompt = require("prompt-sync")()

const distancia = Number(prompt("Distância(m): "))

const km = Math.floor(distancia/1000)
const mt = distancia % 1000

console.log(`Equivale a ${km} e ${mt}mt`)

