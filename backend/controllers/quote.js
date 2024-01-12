const expressAsyncHandler = require("express-async-handler");

//Get Quotes

const getAllQuotes = expressAsyncHandler(async(req, res) => {
    res.status(200).json({msg: 'Gotten all quotes'})
})

// Create Quote

const createQuote = expressAsyncHandler(async(req, res) => {
    res.status(200).json({msg: 'created quote'})
})


// Update Quote
const updateQuote = expressAsyncHandler(async(req, res) => {
    res.status(200).send('updated quote')
})


// Delete Quote
const deleteQuote = expressAsyncHandler(async(req, res) => {
    res.status(200).send('Deleted quote')
})

module.exports = {
    getAllQuotes,
    createQuote,
    updateQuote,
    deleteQuote
}