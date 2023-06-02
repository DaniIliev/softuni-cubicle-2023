
const cubeManager = require('../managers/cubeManager')
const db = require('../db.json')

exports.getAddCubePage = (req, res) => {
    res.render('create')
}

exports.postCreateCub = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body

    let cube = await cubeManager.createCube({ name, description, imageUrl, difficultyLevel })
    res.redirect('/')
}

exports.getDetailsCube = (req, res) => {
    let id = Number(req.params.id)

    if (!id) {
        res.redirect('/404')
    }
    let cube = db.cubes.find(x => x.id == id)

    if (!cube) {
        res.redirect('/404')
    }

    res.render('details', { cube })
}