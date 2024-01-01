let library = [
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
    }];

function ordenar(livraria) {
    var sorteados = []

    for (let livro of livraria) {
        sorteados.push(livro.libraryID)
    }

    sorteados = sorteados.sort(function(a, b){return a-b})

    for (let i = 0; i < sorteados.length; i++) {
        for (let livro of livraria) {
            if (sorteados[i] == livro.libraryID) {
                console.log(`Livro: ${livro.title} \nAutor: ${livro.author} \nID: ${livro.libraryID}\n`)
            }
        }
    }
}

ordenar(library)