const prompt = require("prompt-sync")()

const saque = Number(prompt("Valor do Saque R$: "))

if (saque % 10 == 0) {
const notas = saque / 10
    console.log(`Seu saque será pago com ${notas} de R$ 10`)
} else {
    console.log(`Não é possível pagar ${saque} com notas de R$ 10`)
}

