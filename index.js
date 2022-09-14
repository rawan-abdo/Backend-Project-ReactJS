// install express.js package into this proj directory 
// cmd >npm install express

// require statement has imported the express function from the express package
const express = require('express')

// initialise an express app by calling this express function
const app = express()

// initialise a new router object
var router = express.Router()

//contect router to the app
app.use('/', router)

//specify all data transfers to/from backend will be in JSON format
app.use(express.json())

// populate a database to create possible responses from server
let database = {johnscafe: 'Rated 10/10'}

// get route (ARC by Mulesoft can be used to test requests being sent to routes)
router.get('/venues', (req, res) => {
    res.send(database[req.query.name] || 'Venue not found!')
})


// listen to events on port 5000 and write some feedback messages
// to see the log messages excecute >npm run start
app.listen(5000, () => {
    console.log('Server started!')
    console.log('Listening on port 5000')
})

// http://localhost:5000/venues?name=johnscafe returns 'Rated 10/10'

// POST route : send data to the backend and manipulate the database
app.post('/venues', (req, res) => {
    Object.assign(database, req.body)
    //console.log('New data added to database')
})