const mongoose = require('mongoose')


const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trime: true,
        maxlength: [30, 'Book name cant be longer than 20 charachters' ]
    },
    author: {
        type: String,
    },
    totalpages: {
        type: String
    },
    currentpage: {
        type: String
    },
    notes: {
        type: String,
        trim: true
    },
    reading: {
        type: Boolean,

    },
})

module.exports = mongoose.model("Book", bookSchema )