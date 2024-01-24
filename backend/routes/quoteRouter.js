const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const {
    getAllQuotes,
    createQuote,
    updateQuote,
    deleteQuote 
} = require('../controllers/quote')

router.use(auth)

router.route('/').get(getAllQuotes).post(createQuote)
router.route('/:id').patch(updateQuote).delete(deleteQuote)

module.exports = router