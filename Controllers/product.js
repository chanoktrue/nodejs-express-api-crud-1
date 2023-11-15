const Product = require('../Models/Product')

exports.read = async (req, res) => {
    try{
        const id = req.params.id
        console.log(`${id}`)
        const producted = await Product.findOne({_id: id}).exec()
        res.send(producted)
    }catch (error) {
        res.status(500).send('Server error')
    }
}

exports.list = async (req, res) => {
    try {
        const producted = await Product.find({}).exec()
        res.send(producted)
    }catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
}

exports.create = async (req, res) => {
    try {
        console.log(req.body)
        const producted = await Product(req.body).save()
        res.send(producted)
    }catch (error) {
        res.status(500).send('Server errror')
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const updateed = await Product.findOneAndUpdate({_id: id}, req.body, {new: true}).exec()
        res.send(updateed)
    }catch (error) {
        res.status(500).send('Server errror')
    }
}

exports.remove = async (req, res) => {
    try{
        const id = req.params.id
        const removed = await Product.findOneAndDelete({_id: id}).exec()
        res.send(removed)
    }catch (error) {
        res.status(500).send('Server error')
    }
}