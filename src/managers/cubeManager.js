const Cube = require('../models/Cube')


exports.createCube = (cubeData) => {
    const cube = new Cube(cubeData)
    return cube.save()
}