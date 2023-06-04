const cubeManager = require('../managers/cubeManager')

exports.getHomePage = async (req, res) => {
    const { search, from: difficultyLevelFrom, to: difficultyLevelTo } = req.query

    let cubes = await cubeManager.getAll(search, difficultyLevelFrom, difficultyLevelTo);
    console.log(cubes)
    
    res.render('index', {cubes, search, difficultyLevelFrom, difficultyLevelTo})

}

exports.aboutPage = (req, res) => {
    res.render('about')
}

exports.getErrorPage = (req, res) => {
    res.render('404')
}

exports.getCreateAccessoryPage = (req,res) =>{
    res.render('createAccessory')
}

exports.attachAccessoryPage = (req,res) =>{
    res.render('attachAccessory')
}
