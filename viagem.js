const prompt = require("prompt-sync")()

const dest = prompt("Destino: ")
const dias = Number(prompt("Nº de dias: "))
const horas = Number(prompt("Nº de horas: "))

const duracao = (dias * 24 ) + horas

console.log(`A viagem para ${dest} dura ${duracao} horas`)





