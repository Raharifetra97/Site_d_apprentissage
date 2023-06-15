const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciceSchema = new Schema ({
    question: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: [ "choixMultiple", "choixSimple", "texte"],
        required: true,
    }
})

module.exports = mongoose.model('Exercice', exerciceSchema)