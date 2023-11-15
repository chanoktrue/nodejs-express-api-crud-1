const express = require('express')
const route = express.Router()

const { read, list, create, update, remove } = require('../Controllers/product')

route.get('/product', list)
route.get('/product/:id', read)
route.post('/product', create)
route.put('/product/:id', update)
route.delete('/product/:id', remove)

module.exports = route