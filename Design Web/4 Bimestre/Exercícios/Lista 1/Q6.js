const mostrarResultado = document.getElementById('resultado')

var num = Number(window.prompt('Insira um número'))

diferenca = 19 - num

if (num > 19) {
    diferenca = (diferenca * (-1)) * 3
    mostrarResultado.innerText = `A diferença absoluta de ${num} para 19 multiplicada por 3 é ` + diferenca
} else {
    mostrarResultado.innerText = `A diferença absoluta de ${num} para 19 é ` + diferenca
}

