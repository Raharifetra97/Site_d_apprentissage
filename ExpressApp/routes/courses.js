const express = require('express')
const {
    getCourse,
   createCourse
} = require('../controllers/courseController')
//const requireAuth = require('../middleware/requireAuth') 

const router = express.Router()


// Exiger une authentification pour toutes les routes
//router.use(requireAuth)

/* // GET a single course (Obtenir)
router.get('/', getCourses) */

// GET a single course (Obtenir)
router.get('/:id', getCourse)

// POST a new course (Envoyer)
router.post('/', createCourse)


module.exports = router