const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    goal: {
        type: String,
        required: [true, 'Must provide name' ],
        trim: true,
        maxlength: [100, 'Goal connot be longer than 100 charachters ' ]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Goals', goalSchema)