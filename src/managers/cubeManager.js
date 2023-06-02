const Cube = require('../models/Cube')


exports.createCube = (cubeData) => {
    const cube = new Cube(cubeData)
    return cube.save()
}

exports.getAll = async (search, difficultyLevelFrom, difficultyLevelTo) => {
    let cubes = await Cube.find().lean()

    if(search){
        cubes = cubes.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(difficultyLevelFrom){
        cubes = cubes.filter(x => x.difficultyLevel >= difficultyLevelFrom)
    }

    if(difficultyLevelTo){
        cubes = cubes.filter(x => x.difficultyLevel <= difficultyLevelTo)
    }

   return cubes
}

exports.getCubeById = (cubeId) => {
    let cube = Cube.findById(cubeId)
    return cube
}