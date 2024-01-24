const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    goal: {
        type: String,
        required: [true, 'Must provide name' ],
        trim: true,
        maxlength: [30, 'Goal connot be longer than 100 charachters ' ]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Goals', goalSchema)