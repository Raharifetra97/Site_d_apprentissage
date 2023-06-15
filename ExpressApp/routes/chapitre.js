const express = require('express')
const { getChapitres, getChapitre, createChapitre } = require('../controllers/chapitreController')

const router = express.Router()


// GET a single course (Obtenir)
router.get('/', getChapitres)

// GET a single course (Obtenir)
router.get('/:id', getChapitre)

// POST a new exercice (Envoyer)
router.post('/', createChapitre)


module.exports = router