const Exercice = require('../model/ExerciceModel')
const mongoose = require('mongoose')


// get a single Exercice
const getExercice = async (req, res) => {
    // Pour rechercher un document de la collection 'Exercice' correspondant à cet identifiant id passé dans l'objet params
    const { id } = req.params

    // Vérifier si l'identifiant fourni est valide en utilisant la méthode isValid de mongoose pour vérifier si c'est un ObjectId valide. 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    // Rechercher le document correspondant à l'identifiant 
    const exercice = await Exercice.findById(id)

    // Si le document n'est pas trouvé
    if(!exercice){
        return res.status(404).json({error: 'No such workout'})
    }
    // si le document est trouvé 
    res.status(200).json(exercice)
}

// create new Exercice
const createExercice = async (req, res) => {
    const { question, type } = req.body

    // add doc to db
    try{
        const exercice = await Exercice.create({ question, type })
        res.status(200).json(exercice)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}



module.exports = {
     getExercice,
     createExercice
}