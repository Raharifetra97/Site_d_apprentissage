/* const express = require('express');
require('dotenv').config();

require("./config/dbConnect");
const app = express();


//middlewares
//routes
//Error handlers middleware
//listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log('Server is up and running on ${PORT}')); */

// NET NINJA TUTO

// Importation des modules
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const courseRoutes = require('./routes/courses')
const chapitreRoutes = require('./routes/chapitre')
const exerciceRoutes = require('./routes/exercices')
const reponseRoutes = require('./routes/reponse')

//express app
const app = express()

// Middleware: c'est une fonction qui est exécutée entre le serveur web et l'application elle-même
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors())

// Routes
app.use('/api/user', userRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/chapitre', chapitreRoutes)
app.use('/api/exercice', exerciceRoutes)
app.use('/api/reponse', reponseRoutes)


// Connect to MongoDB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to DB & Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })