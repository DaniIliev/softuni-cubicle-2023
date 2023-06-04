
const cubeManager = require('../managers/cubeManager')


exports.getAddCubePage = (req, res) => {
    res.render('create')
}

exports.postCreateCub = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body

    let cube = await cubeManager.createCube({ name, description, imageUrl, difficultyLevel })
    res.redirect('/')
}

exports.getDetailsCube = async (req, res) => {
    let id = req.params.cubeId
    let cube = await cubeManager.getCubeById(id).populate('accessories').lean()

    if (!id) {
        res.redirect('/404')
    }

    if (!cube) {
        res.redirect('/404')
    }
    
    res.render('details', { cube })
}