const db = require('./database-connection');

module.exports = {

    listAuthors(){
        return db('authors')
            .then(authors => authors)
    },
    listBooks(){
        return db('books')
            .then(books => books)
    },
    findAuthor(...name){
        if (name.length > 1) {
            return db('authors')
                .where("first", name[0])
                .orWhere("last", name[0])
                .andWhere("first", name[1])
                .orWhere("last", name[1])
                .select()
        }
        else {
            return db('authors')
                .where("first", name[0])
                .orWhere("last", name[0])
                .select()
        }
    },
    findBook(title){
        return db('books')
            .then(books => {
                return books.filter(book => {
                    let testExp = new RegExp(title, "i")
                    return testExp.test(book.title)
                })
            })
    },
    getBookAuthors(title){
        let bookID = db('books')
            .where('title', title)
            .select('id')
        let authorIDs = db('authors_books')
            .where('book_id', bookID)
            .select('author_id')
        return authorIDs.map(authorID => db('authors').where('id', authorID.author_id).select().then(res => res[0]))
    }
}
