const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

if (num % 2 == 0) {
    console.log(`Par Seguinte é: ${num+2}`)
} else {
    console.log(`Par Seguinte é: ${num+1}`)
}

