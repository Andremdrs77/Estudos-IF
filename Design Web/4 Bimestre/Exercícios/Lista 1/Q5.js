const mostrarResultado = document.getElementById('resultado')

var n1 = Number(window.prompt('Insira um número'))
var n2 = Number(window.prompt('Insira outro número'))

soma = n1 + n2



if (n1 == n2) {
    soma = soma * 3
    mostrarResultado.innerText = `(${n1} + ${n2}) x 3 = ` + soma
} else {
    mostrarResultado.innerText = `${n1} + ${n2} = ` + soma
}

