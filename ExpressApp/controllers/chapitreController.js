const Chapitre = require('../model/ChapitreModel')
const mongoose = require('mongoose')


const getChapitres = async (req, res) => {
    const chapitres = await Chapitre.find({}).sort({createdAt: -1})

    res.status(200).json(chapitres)
}

// get a single workout
const getChapitre = async (req, res) => {
    // Pour rechercher un document de la collection 'Chapitre' correspondant à cet identifiant id passé dans l'objet params
    const { id } = req.params

    // Vérifier si l'identifiant fourni est valide en utilisant la méthode isValid de mongoose pour vérifier si c'est un ObjectId valide. 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    // Rechercher le document correspondant à l'identifiant 
    const chapitre = await Chapitre.findById(id)

    // Si le document n'est pas trouvé
    if(!chapitre){
        return res.status(404).json({error: 'No such workout'})
    }
    // si le document est trouvé 
    res.status(200).json(chapitre)
}


// create new Chapitre
const createChapitre = async (req, res) => {
    const { titre, description, ordre } = req.body

    // add doc to db
    try{
        const chapitre = await Chapitre.create({ titre, description, ordre })
        res.status(200).json(chapitre)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getChapitres,
     getChapitre,
     createChapitre
}