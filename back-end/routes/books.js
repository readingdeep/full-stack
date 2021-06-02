const express = require('express');
const { getAllBooks, getBookById } = require('../data/books');
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const books = await getAllBooks();
        res.status(200).send({ books: books });
    } catch (err) {
        next(err);
    }
});

router.get("/:bookId", async (req, res, next) => {
    try {
        const { bookId } = req.params;
        const book = await getBookById(bookId);
        res.status(200).send({ book: book });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
