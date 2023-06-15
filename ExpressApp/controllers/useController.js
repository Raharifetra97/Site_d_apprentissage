const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// L'utilisateur connecter
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // Create token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// L'utilisateur s'inscrire
const signupUser = async (req, res) => {
    const { nom, prenom, phone, profession, email, password } = req.body

    try {
        const user = await User.signup(nom, prenom, phone, profession,email, password)

        // Create token
        const token = createToken(user._id)

        res.status(200).json({ nom, prenom, phone, profession, email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser } 