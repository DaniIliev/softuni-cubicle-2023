const db = require('../db.json')

exports.getHomePage = (req,res) =>{
    let cubes = db.cubes
    res.render('index', {cubes})
}

exports.aboutPage = (req,res) => {
    res.render('about')
}

exports.getErrorPage = (req,res) => {
    res.render('404')
}