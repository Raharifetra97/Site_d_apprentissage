const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Static signup method
userSchema.statics.signup = async function(nom, prenom, phone, profession, email, password) {


    // Validation
    if (!nom || !prenom || !phone || !profession || !email || !password){
        throw Error('Tous les champs doivent être remplis')
    }

    
    // Numéro téléphone à Madagascar
    //const countryCode = 'MG'
    if (!validator.isMobilePhone(phone)) {
        throw Error ('Numéro téléphone non validé')
    }


    // Email
    if (!validator.isEmail(email)){
        throw Error('Adresse e-mail non validé')
    }


    // Mot de passe
    if (!validator.isStrongPassword(password)) {
        throw Error('Mot de passe pas assez fort')
    }

    const existsMail = await this.findOne({email})

    if(existsMail){
        throw Error('Adresse e-mail déjà utilisée')
    }

    const existsPhone = await this.findOne({phone})

    if(existsPhone){
        throw Error('Numéro téléphone déjà utilisée')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ nom, prenom, phone, profession, email, password: hash })

    return user
}

// Static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password){
        throw Error('Tous les champs doivent être remplis')
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error('E-mail incorrecte')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Mot de passe incorrecte')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)