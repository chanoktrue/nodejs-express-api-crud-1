const Product = require('../Models/Product')

exports.read = async (req, res) => {
    res.send('Hellow Controller Read')
}

exports.list = async (req, res) => {
    try {
        res.send('List product')
    }catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
}

exports.create = async (req, res) => {
    try {
        console.log(req.body)
        res.send('Create product')
    }catch (error) {
        res.status(500).send('Server errror')
    }
}

exports.update = async (req, res) => {
    try {
        res.send('Update product')
    }catch (error) {
        res.status(500).send('Server errror')
    }
}

exports.remove = async (req, res) => {
    try{
        res.send('Delete proudct')
    }catch (error) {
        res.status(500).send('Server error')
    }
}