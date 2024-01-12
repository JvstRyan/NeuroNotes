const mongoose = require('mongoose')


const quoteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    person: {
        type: String,
        maxlength: [25, "name cannot be more than 25 charachters"]
    },
    favourite: {
        type: Boolean
    },
    Note: {
        type: String
    }
})

module.exports = mongoose.model('Quote', quoteSchema)