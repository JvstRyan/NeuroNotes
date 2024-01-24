const mongoose = require('mongoose')


const quoteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    person: {
        type: String,
        maxlength: [25, "name cannot be more than 25 charachters"]
    },
    favourite: {
        type: Boolean
    },
    note: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Quote', quoteSchema)