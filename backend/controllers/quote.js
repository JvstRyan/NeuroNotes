const expressAsyncHandler = require("express-async-handler");
const Quote = require('../models/quoteModal');
const ErrorHandler = require("../errors/error");

//Get Quotes

const getAllQuotes = expressAsyncHandler(async(req, res) => {
    let quote;
    if(req.query.favourite) {
        const favourite = req.query.favourite === 'true'
        quote = await Quote.find({ favourite: favourite, userId: req.user._id})
    } else {
        quote = await Quote.find({userId: req.user._id});
    }
    
    if (!quote) {
        throw new ErrorHandler(404, `No quotes could be found`)
    }
    res.status(201).json({quote})
})

// Create Quote

const createQuote = expressAsyncHandler(async(req, res) => {
    const quote = await Quote.create({...req.body, userId: req.user._id})
    res.status(201).json({quote})
})


// Update Quote
const updateQuote = expressAsyncHandler(async(req, res) => {
    const {id: quoteID} = req.params
    const quote = await Quote.findOneAndUpdate({_id: quoteID,}, req.body, {
        new:true, runValidators:true
    })
    if(!quote) {
       throw new ErrorHandler(404, `No quote with id ${quoteID} was found`)
    }
    res.status(201).json({quote})
})


// Delete Quote
const deleteQuote = expressAsyncHandler(async(req, res) => {
    const {id: quoteID} = req.params
    const quote = await Quote.findOneAndDelete({_id: quoteID})

    if (!quote) {
     throw new ErrorHandler(404, `No quote with id ${quoteID} was found`)
    }
    res.status(201).json({quote})
})

module.exports = {
    getAllQuotes,
    createQuote,
    updateQuote,
    deleteQuote
}