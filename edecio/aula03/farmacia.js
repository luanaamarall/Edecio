const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = Number(prompt("Preço R$: "))  
const promocao = Math.floor(preco) * 2 

console.log(`Promoção de ${produto}`)
console.log(`Leve 2 por apenas: ${promocao.toFixed(2)}`)
