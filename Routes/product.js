const express = require('express')
const route = express.Router()

const { read, list, create, update, remove } = require('../Controllers/product')

//Middleware
const { auth } = require('../Middleware/auth')


route.get('/product', auth, list)
route.get('/product/:id', auth, read)
route.post('/product', auth, create)
route.put('/product/:id', auth, update)
route.delete('/product/:id', auth, remove)

module.exports = route