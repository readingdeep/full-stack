const express = require('express');
const { getAllBooks, getBookById, updateBookPictureUrl } = require('../data/books');
const router = express.Router();
const { upload } = require('../middlewares/multi-part');
const { uploadToCloudinary } = require('../lib/cloudinary');
const fs = require('fs');

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

router.put('/:bookId/book_pic', upload.single('image'), async (req,res) => {
    const { bookId } = req.params;
    const result = await uploadToCloudinary(req.file.path);
    const pictureUrl = encodeURI('http://127.0.0.1:3001' + req.file.path);
    await updateBookPictureUrl(bookId, result.secure_url);
    fs.unlinkSync(req.file.path);
    res.send({ pictureUrl: result.secure_url });
});



module.exports = router;
