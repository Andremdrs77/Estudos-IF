let library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];

function mostrar(livraria) {
    for (let livro of livraria) {
        console.log(`Autor: ${livro.author}, título: ${livro.title}, ${livro.readingStatus ? 'Lendo' : 'Não lendo'}`)
    }
}

mostrar(library)