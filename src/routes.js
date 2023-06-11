const router = require('express').Router();

const pageController = require('./cotrollers/pageController')
const cubeController = require('./cotrollers/cubeController')
const accessoryController = require('./cotrollers/accessoryControllers')
const authController = require('./cotrollers/authController')

router.get('/', pageController.getHomePage)
router.get('/create', cubeController.getAddCubePage)
router.post('/create', cubeController.postCreateCub)
router.get('/about', pageController.aboutPage)
router.get('/cubes/details/:cubeId', cubeController.getDetailsCube)
router.get('/404', pageController.getErrorPage)
router.get('/accessory-add', pageController.getCreateAccessoryPage)
router.post('/accessory-add', accessoryController.createAccessory)


router.get('/login', authController.getLoginPage)
router.post('/login', authController.onLogin)

router.get('/register', authController.getRegisterPage)
router.post('/register', authController.onRegister)

router.get('/logout', authController.logout)

router.get('/cubes/attach-accessorry/:cubeId', accessoryController.attachAccessorys)
router.post('/cubes/attach-accessorry/:cubeId', accessoryController.postAttachAccessory)
router.get('/cubes/edit/:cubeId', cubeController.getEditCubePage)
router.post('/cubes/edit/:cubeId', cubeController.postEditCube)
router.get('/cubes/delete/:cubeId', cubeController.getDeleteCubePage)
router.post('/cubes/delete/:cubeId',cubeController.postDeleteCube )

module.exports = router