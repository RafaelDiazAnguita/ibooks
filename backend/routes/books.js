const { Router } = require('express');
const Book = require('../models/Book');
const router = Router();
const {unlink} = require('fs-extra');
const path = require('path');

require('../models/Book')

router.get('/', async (req,res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req,res) => {
    const {title,author, isbn} = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const book = new Book({title,author,isbn, imagePath});
    await book.save();
    res.json({ message: "Book Saved"});
});

router.delete('/:id',async (req,res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    unlink(path.resolve('./backend/public' + book.imagePath));
    res.json({message:'Deleted'});
})

module.exports = router;