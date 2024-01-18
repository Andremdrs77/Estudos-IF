const mostrarResultado = document.getElementById('resultado')

var palavra = window.prompt('Insira uma palavra')
len = palavra.length
novapalavra = ''

var posicao = Number(window.prompt('Qual posição deve ser removida? (0 a n)'))

for (i = 0; i < len ; i++) {
    if (i != posicao) {
        novapalavra += palavra[i]
    }
}

mostrarResultado.innerText = novapalavra