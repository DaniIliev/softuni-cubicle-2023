const Cube = require('../models/Cube')

exports.getAddCubePage = (req, res) => {
    res.render('create')
}

exports.postCreateCub = (req, res) => {

    console.log(req.body)
    const { name, description, imageUrl, difficultyLevel } = req.body

    let cube = new Cube(name, description, imageUrl, difficultyLevel)

    cube.save()
    res.redirect('/')
}