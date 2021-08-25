const books = require('./database')
const readline = require('readline-sync')

const inicialInput = readline.question('Do you want to search a book? Answer Y or N: ')

if (inicialInput.toLocaleUpperCase() === 'Y') {
    console.log('Available genres: ')
    console.log('Biography' , '/ Mystery' , '/ Horror' , '/ Fantasy')

    const inputGenre = readline.question('Which genre do you prefer?')
    const retorno = books.filter(book => book.genre === inputGenre)

    console.table(retorno)

} else {
    const orderBooks = books.sort((a,b) => a.pages - b.pages)
    console.log('These are all available books: ')

    console.table(orderBooks)
}