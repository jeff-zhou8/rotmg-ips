const express = require('express')
const path = require('path');
const app = express()

// Middleware to parse JSON and URL-encoded data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, './frontend/public')))

// API routes
app.use('/api', require('./backend/routes'))

// Serve index route
app.get('*', (req, res) => {
    res.sendFile("index.html", {root: path.join(__dirname, './frontend/public')})
})

// Listen on the dynamic Railway PORT or default to 3000 locally
app.listen(process.env.PORT || 3000)