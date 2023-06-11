const { rawListeners } = require('../models/Cube')
const User = require('../models/User')
const jwt = require ('jsonwebtoken')
const SECRET= ' verysecret'
exports.getUserByUsername = (username) => User.findOne({ username })

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username)

    const isValid = await user.validatePassword(password)

    if(!user || !isValid){
        throw 'Invalid username or password!'
    }

    const payload = {_id:user._id, username: user.username}

   const token = await jwt.sign(payload, SECRET, {expiresIn: '2h'})
    return token 
}

exports.authentication = async (req, res, next) =>{
    const token = (req.cookies['auth'])

    if(token){

        try{
            const decodedToken = await jwt.verify(token, SECRET)
            req.user = decodedToken

            res.locals.username = decodedToken.username
            res.locals.isAuthenticated = true

        }catch(err){
            res.clearCookie('auth')
            res.redirect('/404')
            throw(err.message)
        }
    }
    
    next()
}

exports.isAuthenticated = (req,res,next) => {
    if(!req.isAuthenticated) {
        return res.redirect('/login')
    }
}