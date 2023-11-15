const express = require('express')
const route = express.Router()

route.get('/product', (req, res) => {
    res.send("hellow product enpoint")
})


module.exports = route