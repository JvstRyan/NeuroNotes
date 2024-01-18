const mongoose = require('mongoose')


const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trime: true,
        maxlength: [35, 'Book name cant be longer than 30 charachters' ]
    },
    author: {
        type: String,
    },
    reading: {
        type: Boolean,

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
})

module.exports = mongoose.model("Book", bookSchema )