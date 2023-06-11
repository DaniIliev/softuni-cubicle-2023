const User = require('../models/User')
const authServiice = require('../service/authService')

exports.getLoginPage = (req, res) => {
    res.render('loginPage')
}

exports.onLogin = async (req, res) => {
    const { username, password } = req.body
    try {
        const token = await authServiice.login(username, password)

        res.cookie('auth', token, {httpOnly: true}) 
    } catch (err) {
        throw (err.message)
    }
    res.redirect('/')
}

exports.getRegisterPage = (req, res) => {
    res.render('registerPage')
}

exports.onRegister = (req, res) => {
    const { username, password, repeatPassword } = req.body

    if(password !== repeatPassword){
        res.redirect('/404')
    }

    const createdUser = User.create({ username, password })
    res.redirect('/login')
}


exports.logout = (req,res) => {
    res.clearCookie('auth')

    res.redirect('/')
}