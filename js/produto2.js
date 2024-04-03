const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = Number(prompt("Preço: "))

const parc = preco / 3

if(preco <= 100){
    console.log(`Somente à vista.`)
} else{
    console.log(`Pode pagar em 3x de ${parc}`)
}

