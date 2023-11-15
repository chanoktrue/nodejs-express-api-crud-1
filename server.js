const express = require('express')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./Config/db')

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({limit: '10mb'}))
connectDB()

// const productRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth')

//Route 1
// app.get('/product', (req,res) => {n
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