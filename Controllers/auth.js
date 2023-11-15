const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { use } = require('../Routes/product')

exports.register = async (req, res) => {
    try {

        // 1.CheckUser
        const { name, password } = req.body
        var user = await User.findOne({name})
        console.log(user)
        if (user) {
            return res.status(400).send('User already Exists!!!.')
        }

        // 2.Encrypt
        const salt = await bcrypt.genSalt(10)
        user = new User({
            name,
            password
        })
        user.password = await bcrypt.hash(password, salt)

        // 3.Save
        user.save()
        res.status(200).send("Register complete.")


    }catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
}

exports.login = async (req, res) => {
    try {

        // 1.Check user
        const {name, password} = req.body
        console.log(name)
        var user = await User.findOneAndUpdate({ name }, { new: true })
        console.log(user)
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                res.status(400).send('Pawword invalide!!!')
            }

            // 2.payload
            var payload = {
                user: {
                    name: user.name
                }
            }

            // 3.Generate
            jwt.sign(payload, 'jwtsecret', { expiresIn: (60 * 5)}, (err, token) => {
                if (err) throw err;
                res.status(200).json({token, payload})
            })

        }else{
            res.status(400).send("User not found!!!")
        }
    }catch (error) {
        res.status(500).send('Server error')
    }
}