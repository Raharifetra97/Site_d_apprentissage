const express = require('express')
const { getExercice, createExercice } = require('../controllers/exerciceController')

const router = express.Router()


// GET a single course (Obtenir)
router.get('/:id', getExercice)

// POST a new exercice (Envoyer)
router.post('/', createExercice)


module.exports = router