const express = require('express')
const { createReponse } = require('../controllers/reponseController')

const router = express.Router()



// POST a new exercice (Envoyer)
router.post('/', createReponse)


module.exports = router