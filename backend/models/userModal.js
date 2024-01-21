const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(next) {
    
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10)

        this.password = await bcrypt.hash(this.password, salt)
    }

    next()
})


module.exports = mongoose.model('User', userSchema)