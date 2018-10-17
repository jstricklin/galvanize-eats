const express = require('express');
const router = express.Router();
const queries = require('./queries.js')

router.get('/', (req, res, next)=>{
    next("Please try a valid route")
})

router.get('/authors', (req, res, next)=>{
    queries.listAuthors()
        .then(authors => res.json(authors))
})
router.get('/authors/:name', (req, res, next)=>{
    let nameArr = req.params.name.split(" ");
    let capNameArr = [];
    nameArr.map(name => capNameArr.push(name.charAt(0).toUpperCase() + name.slice(1)))
    if (nameArr.length > 1){
        let nameA = capNameArr[0];
        let nameB = capNameArr[1];
        queries.findAuthor(nameA, nameB)
            .then(author => {
                res.json({author: author});
            })
    } else {
        let name = capNameArr[0];
        queries.findAuthor(name)
            .then(author => {
                res.json({author: author});
            })
    }
})

router.get('/books', (req, res, next)=>{
    queries.listBooks()
        .then(books => res.json(books));
})
router.get('/books/:title',(req, res, next)=>{
    queries.findBook(req.params.title)
        .then(book => res.json({result: book}))
})
router.get('/bookauthors/:title',(req, res, next)=>{
    queries.getBookAuthors(req.params.title)
        .then(book => res.json({result: book}))
})

module.exports = router;
