const mostrarResultado = document.getElementById('resultado')

var num = Number(window.prompt('Insira um número'))

diferenca100 = 100 - num
diferenca400 = 400 - num

r100 = ''
r400 = ''

if (num > 100) {
    diferenca100 = diferenca100 * (-1)
    diferenca400 = diferenca400 * (-1)
} 

if (diferenca100 > 20) {
    r100 = 'maior que 20'
} else if (diferenca100 == 20) {
    r100 = 'igual a 20'
} else {
    r100 = 'menor que 20'
}

if (diferenca400 > 20) {
    r400 = 'maior que 20'
} else if (diferenca400 == 20) {
    r400 = 'igual a 20'
} else {
    r400 = 'menor que 20'
}


mostrarResultado.innerText = `A diferença absoluta de ${num} para 100 é ${r100}, e essa diferença para 400 é ${r400}`