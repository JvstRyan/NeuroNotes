const expressAsyncHandler = require("express-async-handler");


const getAllBooks = expressAsyncHandler( async (req, res) => {
    res.status(201).json({msg: `Gotten all books`})
})


const getReadingBooks = expressAsyncHandler(async(req, res) => {
    res.status(201).json({msg: `Gotten books that are being read atm`})
})

const createBook = expressAsyncHandler(async(req, res) => {
    res.status(201).json({msg: `created book`})
})

const updateBook = expressAsyncHandler(async(req, res) => {
    res.status(201).json({msg: `updated book`})
})

const deleteBook = expressAsyncHandler(async(req, res) => {
    res.status(201).json({msg: `deleted book`})
})


module.exports = {
    getAllBooks,
    getReadingBooks,
    createBook,
    updateBook,
    deleteBook
}

