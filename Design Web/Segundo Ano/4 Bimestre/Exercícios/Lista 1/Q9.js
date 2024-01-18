const mostrarResultado = document.getElementById('resultado')

var n1 = Number(window.prompt('Insira um número'))
var n2 = Number(window.prompt('Insira um segundo número'))

if (n1 < 0 && n2 < 0 ) {
    mostrarResultado.innerText = 'Ambos números dados são negativos'
} else if (n1 < 0 || n2 < 0) {
    mostrarResultado.innerText = 'Um dos números dados é negativo'
}
