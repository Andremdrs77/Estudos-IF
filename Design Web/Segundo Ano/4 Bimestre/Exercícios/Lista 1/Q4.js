const mostrar1 = document.getElementById("multiplicacao")
const mostrar2 = document.getElementById("divisao")

var n1 = Number(window.prompt('Digite um número'))
var n2 = Number(window.prompt('Digite outro número'))

multi = n1 * n2
divi = n1 / n2

mostrar1.innerText = 'A multiplicação é ' + multi
mostrar2.innerText = 'A divisão é ' + divi 