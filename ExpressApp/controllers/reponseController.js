const Reponse = require('../model/reponseModel')
const mongoose = require('mongoose')



// Envoyer la reponse
const createReponse = async (req, res) => {
    const { texte, type } = req.body

    // add doc to db
    try{
        const reponse = await Reponse.create({ texte, type })
        res.status(200).json(reponse)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
     createReponse
}