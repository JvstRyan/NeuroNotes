const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [25, "name cannot be more than 20 charachters"]
    }
})

module.exports = mongoose.model("Task", taskSchema)