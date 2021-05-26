/***
 * Do not modify this file.
 */
const express = require('express')
const app = express()
const port = 7000

// Serve files from public
app.use(express.static('public'))

// Configure API routes
require('./controllers/api')(app)

process.on('unhandledRejection', (err) => { throw err })
app.listen(port, () => console.log(`Listening on port ${port}!`))