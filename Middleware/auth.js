const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => { 
    try {
        const token = req.headers['authtoken']
        
        if (!token) {
            return res.status(401).send('No have token')
        }
        
        const decoded = jwt.verify(token, 'jwtsecret')
        req.user = decoded.user

        next()
    }catch (error) {
        console.log(error)
        res.status(500).send('Token invalid')
    }
}