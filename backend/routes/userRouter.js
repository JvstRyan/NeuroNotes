const express = require('express')
const router = express.Router()
const {signup, login, getUsers} = require('../controllers/user')


router.route('/').get(getUsers)
router.route('/signup').post(signup)
router.route('/login').post(login)


module.exports = router