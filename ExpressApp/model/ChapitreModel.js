const mongoose = require('mongoose')

const Schema = mongoose.Schema

const chapitreSchema = new Schema ({
    titre: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    ordre: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Chapitre', chapitreSchema)