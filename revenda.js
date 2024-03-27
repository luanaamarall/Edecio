const prompt = require("prompt-sync")()

const modelo = prompt("Modelo: ")
const marca = prompt("Marca: ")
const preco = Number(prompt("Preço: "))



if(marca == fiat){
    console.log(`Desconto: ${desc}`)
    console.log(`Preço à vista: ${total}`)
} else{
    console.log(`Desconto: ${}`)
    console.log(`Preço à vista: `)
}

