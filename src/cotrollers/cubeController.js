const Cube = require('../models/Cube')
const db = require('../db.json')

exports.getAddCubePage = (req, res) => {
    res.render('create')
}

exports.postCreateCub = (req, res) => {

    console.log(req.url)
    const { name, description, imageUrl, difficultyLevel } = req.body

    let cube = new Cube(name, description, imageUrl, difficultyLevel)

    cube.save()
    res.redirect('/')
}

exports.getDetailsCube = (req,res) =>{
    let id = Number(req.params.id)

    if(!id){
        res.redirect('/404')
    }
    let cube = db.cubes.find(x => x.id == id)

    if(!cube){
        res.redirect('/404')
    }

    res.render('details', {cube})
}