const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reponseSchema = new Schema ({
    texte: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: [ "choixMultiple", "choixSimple", "texte"],
        required: true
    }
})

module.exports = mongoose.model('Reponse', reponseSchema)