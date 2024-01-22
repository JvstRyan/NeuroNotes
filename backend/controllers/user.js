const expressAsyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')
const User = require('../models/userModal')


const signup = expressAsyncHandler(async(req,res) => {
    res.send('User has signed up')
})

const login = expressAsyncHandler(async(req,res) => {
    res.send('User has logged in')
})


module.exports = {signup, login}