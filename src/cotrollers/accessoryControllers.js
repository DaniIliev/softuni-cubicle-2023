const accessoryManager = require('../managers/accessoryManager')
const cubeManager = require('../managers/cubeManager')
const Cube = require('../models/Cube')
const Accessory = require('../models/accessory')

exports.createAccessory = (async (req, res) => {
    const { name, description, imageUrl } = req.body
    console.log(req.body)
    await accessoryManager.create({ name, description, imageUrl })

    res.redirect('/')
})

exports.attachAccessorys = (async (req, res) => {
    const cubeId = req.params.cubeId
    const cube = await Cube.findById(cubeId).lean()
    const getAllAccessory = await Accessory.find({_id: {$nin: cube.accessories}}).lean()
    
    res.render('attachAccessory', { cube, getAllAccessory })
})

exports.postAttachAccessory = (async (req,res) => {
    const cubeID = req.params.cubeId
    const accessory = req.body.accessory 
    const cube = await Cube.findById(cubeID)

    cube.accessories.push(accessory)
    await cube.save()

    res.redirect(`/cubes/details/${cubeID}`)
})