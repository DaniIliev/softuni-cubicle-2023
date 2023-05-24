const db = require('../db.json')

exports.getHomePage = (req,res) =>{
    const {search, from: difficultyLevelFrom, to: difficultyLevelTo} = req.query

    let cubes = db.cubes
    
    if(search){
        cubes = cubes.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(difficultyLevelFrom){
        cubes = cubes.filter(x => x.difficultyLevel >= difficultyLevelFrom)
    }

    if(difficultyLevelTo){
        cubes = cubes.filter(x => x.difficultyLevel <= difficultyLevelTo)
    }

    res.render('index', {cubes, search, difficultyLevelFrom, difficultyLevelTo})
}

exports.aboutPage = (req,res) => {
    res.render('about')
}

exports.getErrorPage = (req,res) => {
    res.render('404')
}