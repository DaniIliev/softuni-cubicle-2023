const router = require('express').Router();

const pageController = require('./cotrollers/pageController')
const cubeController = require('./cotrollers/cubeController')
const accessoryController = require('./cotrollers/accessoryControllers')

router.get('/', pageController.getHomePage)
router.get('/create', cubeController.getAddCubePage)
router.post('/create', cubeController.postCreateCub)
router.get('/about', pageController.aboutPage)
router.get('/cubes/details/:cubeId', cubeController.getDetailsCube)
router.get('/404', pageController.getErrorPage)
router.get('/accessory-add', pageController.getCreateAccessoryPage)
router.post('/accessory-add', accessoryController.createAccessory)

router.get('/cubes/attach-accessorry/:cubeId', accessoryController.attachAccessorys)

module.exports = router