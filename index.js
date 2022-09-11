// install express.js package into this proj directory 
// cmd > 'npm install express'

// require statement has imported the express function from the express package
const express = require('express')

// initialise an express app by calling this express function
const app = express()

app.listen(5000, () => {
    console.log('Server started!')
    console.log('Listening on port 5000')
})