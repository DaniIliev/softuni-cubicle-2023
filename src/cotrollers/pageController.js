const db = require('../db.json')

exports.getHomePage = (req,res) =>{
    let cubes = db.cubes
    res.render('index', {cubes})
}