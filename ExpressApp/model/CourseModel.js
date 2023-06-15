const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Course', courseSchema)
