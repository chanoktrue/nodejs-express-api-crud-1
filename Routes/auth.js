const express = require('express')
const route = express.Router()

route.get('/auth', (req, res) => {
    res.send('Hello auth endpoing')
})


module.exports = route