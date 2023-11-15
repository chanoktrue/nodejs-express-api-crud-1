const express = require('express')

const app = express()
const port = 3000

// const productRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth')

const { readdirSync } = require('fs')

//Route 1
// app.get('/product', (req,res) => {
//     res.send("Hello endpoint")
// })

//Route 2
// app.use('/api', productRouters)
// app.use('/api', authRouters)

//Route 3
readdirSync('./Routes').map( (r) => {
    app.use('/api', require('./Routes/' + r))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})