const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = Number(prompt("Preço R$: "))

const promo = Math.floor(preco) * 2

console.log(`Promoção de ${produto}`)
console.log(`Por 2un, pague R$ ${promo.toFixed(2)}`)
