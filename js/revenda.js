const prompt = require("prompt-sync")()

const modelo = prompt("Modelo: ")
const marca = prompt("Marca: ")
const preco = prompt("Preço R$: ")

let desconto

if (marca.toUpperCase() == "FIAT") {
    desconto = preco * 0.10
} else {
    desconto = preco * 0.20
}

const precoFinal = preco - desconto

console.log(`Desconto R$: ${desconto.toFixed(2)}`)
console.log(`Preço à Vista R$: ${precoFinal.toFixed(2)}`)

