const prompt = require('prompt-sync')()

const num = Number(prompt('Digite um número: '))
const ant = num - 1
const post = num + 1

console.log(`Legal! O número anterior à ${num}, é ${ant} e o posterior é ${post}`)

