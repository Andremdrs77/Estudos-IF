const mostrarResultado = document.getElementById('resultado')

var n1 = Number(window.prompt('Insira um número'))
var n2 = Number(window.prompt('Insira um segundo número'))

if (n1 == 50) {
    mostrarResultado.innerText = 'O primeiro número é igual a 50'
} if (n2 == 50) {
    mostrarResultado.innerText = 'O segundo número é igual a 50'
} if (n1 == 50 && n2 ==50) {
    mostrarResultado.innerText = 'Ambos números são 50'
} if ((n1 + n2) == 50) {
    mostrarResultado.innerText = `${n1} + ${n2} = 50`
}