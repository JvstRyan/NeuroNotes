const expressAsyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModal');
const ErrorHandler = require("../errors/error");


const getUsers = expressAsyncHandler(async(req, res) => {
    const users = await User.find({})
    res.status(201).json({users})
})

const signup = expressAsyncHandler(async(req,res) => {
    const {fullname, email, password} = req.body;

    const userExists = await User.findOne({ email })

    if (userExists) {
        throw new ErrorHandler(409, 'A user with this email already exists')
    }

    const user = new User({fullname, email, password})

    await user.save()

    res.status(201).json({user})
})

const login = expressAsyncHandler(async (req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email})


    if (!user) {
        throw new ErrorHandler(400, 'Invalid password or email ')
    }

    const isPasswordCorrect = await user.matchPassword(password)

    if (!isPasswordCorrect) {
        throw new ErrorHandler(400, 'Invalid password or email ')
    }
   
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '30d'})

    res.status(201).json({token})

})


module.exports = {signup, login, getUsers}