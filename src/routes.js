const router = require('express').Router();

const pageController = require('./cotrollers/pageController')
const cubeController = require('./cotrollers/cubeController')

router.get('/', pageController.getHomePage)
router.get('/create', cubeController.getAddCubePage)
router.post('/create', cubeController.postCreateCub)
router.get('/about', pageController.aboutPage)
router.get('/details/:id', cubeController.getDetailsCube)
router.get('/404', pageController.getErrorPage)

module.exports = router