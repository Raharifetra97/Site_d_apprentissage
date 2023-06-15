const express = require('express')

// Controller functions
const { signupUser, loginUser } = require('../controllers/useController')


const router = express.Router()

// Login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router