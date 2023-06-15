const Course = require('../model/CourseModel')
const mongoose = require('mongoose')

/* // Get all courses (récupérer tous les objets de type 'Course' à partir de la base de données MongoDB)
const getCourses = async (req, res) => {
    // Rechercher tous les objets de type 'Course' dans la base de données avec le fonction find(), et sort() pour trier les résultats par ordre décroissant de date de création
    const courses = await Course.find({}).sort({createdAt: -1})

    res.status(200).json(courses)
} */


// get a single workout
const getCourse = async (req, res) => {
    // Pour rechercher un document de la collection 'Course' correspondant à cet identifiant id passé dans l'objet params
    const { id } = req.params

    // Vérifier si l'identifiant fourni est valide en utilisant la méthode isValid de mongoose pour vérifier si c'est un ObjectId valide. 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    // Rechercher le document correspondant à l'identifiant 
    const course = await Course.findById(id)

    // Si le document n'est pas trouvé
    if(!course){
        return res.status(404).json({error: 'No such workout'})
    }
    // si le document est trouvé 
    res.status(200).json(course)
}


// create new course
const createCourse = async (req, res) => {
    const { titre, description } = req.body

    // add doc to db
    try{
        const course = await Course.create({ titre, description })
        res.status(200).json(course)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteCourse = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const course = await Course.findOneAndDelete({_id: id})

    if(!course){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(course)
}


// update a course
const updateCourse = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const course = await Course.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!course){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(course) 
}


module.exports = {
     getCourse,
    createCourse
}