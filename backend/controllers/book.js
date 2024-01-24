const expressAsyncHandler = require("express-async-handler");
const Book = require('../models/bookModal')




const getAllBooks = expressAsyncHandler(async(req, res) => {
    const reading = req.query.reading;
    let books;

    if (reading !== undefined) {
        books = await Book.find({ reading: reading === 'true', userId: req.user._id });
    } else {
        books = await Book.find({ userId: req.user._id });
    }

    res.status(200).json({books});
});

const updateBook = expressAsyncHandler(async(req, res) => {
    const {id: bookID} = req.params
    const book = await Book.findOneAndUpdate({_id: bookID}, req.body, {
        new: true, runValidators:true
    })
    if(!book) {
        throw new ErrorHandler(404, `Book with id: ${bookID}, could not be found`)
    }
    res.status(200).json({book})
})

const createBook = expressAsyncHandler(async(req, res) => {
    const book = await Book.create({...req.body, userId: req.user._id})
    res.status(200).json({book})
})

const deleteBook = expressAsyncHandler(async(req, res) => {
    const {id: bookID} = req.params
    const book = await Book.findOneAndDelete({_id: bookID})

    if (!book) {
        throw new ErrorHandler(404, `Book with id: ${bookID}, could not be found`)
    }

    res.status(201).json({book})
})


module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
}

