
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

function generateDifficultyLevel(level){
    const difficultyLevel = [
        {key: 1, label: 'Very Easy', isSelected: false},
        {key: 2, label: 'Easy', isSelected: false},
        {key: 3, label: 'Medium (Standard 3x3)', isSelected: false},
        {key: 4, label: 'Intermediate', isSelected: false},
        {key: 5, label: 'Expert', isSelected: false},
        {key: 6, label: 'Hardcore', isSelected: false},
    ]
    const result = difficultyLevel.map(x => x.key === level ? {...x, isSelected: true} : x)
    return result
}

exports.getEditCubePage = async (req, res) => {
    const cubeId = req.params.cubeId
    const cube = await cubeManager.getCubeById(cubeId).lean()

    const difficultyLevel = generateDifficultyLevel(cube.difficultyLevel)

    res.render('editCubePage', { cube , difficultyLevel})
}

exports.postEditCube = async (req,res) => {
    const cubeId = req.params.cubeId
    const {name, description, imageUrl, difficultyLevel} = req.body
    await cubeManager.editCube(cubeId, {name, description, imageUrl, difficultyLevel})

    res.redirect('/')
}

exports.getDeleteCubePage = async(req, res) =>{
    const cubeId = req.params.cubeId
    const cube = await cubeManager.getCubeById(cubeId).lean()

    const difficultyLevel = generateDifficultyLevel(cube.difficultyLevel)
    res.render('deleteCubePage', {cube , difficultyLevel})
}

exports.postDeleteCube = async (req,res) => {
    const cubeId = req.params.cubeId
    await cubeManager.deleteCubeById(cubeId)
    res.redirect(`/cubes/details/${cubeId}`)
}