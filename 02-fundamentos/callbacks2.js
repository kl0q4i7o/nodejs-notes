const booksDB = [ 
    {
        id: 1,
        tittle: "Clean Code",
        authorID: 1
    },
    {
        id: 2,
        tittle: "The pragmatic programmer",
        authorID: 2
    }
]

const authorsDB = [
    {
        id: 1,
        name: "Robert C. Martin"
    },
    {
        id: 2,
        name: "Steve Forest"
    }
]

function getBooksID ( id, callback ) {
    const book = booksDB.find( (book) => book.id === id);
    if (!book) {
        const error = new Error();
        error.message = "Book not found";
        return callback(error);
    } else {
        callback(null, book);
    }
}

getBooksID(1, ( err, book ) => {
    if (err) {
        return console.log(err.message);
    } else {
        return console.log(book);
    }
})