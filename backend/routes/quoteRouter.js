const express = require('express')
const router = express.Router()
const {
    getAllQuotes,
    createQuote,
    updateQuote,
    deleteQuote 
} = require('../controllers/quote')

router.route('/').get(getAllQuotes).post(createQuote)
router.route('/:id').patch(updateQuote).delete(deleteQuote)

module.exports = router