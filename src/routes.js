const router = require('express').Router();

const pageController = require('./cotrollers/pageController')
const cubeController = require('./cotrollers/cubeController')

router.get('/', pageController.getHomePage)
router.get('/create', cubeController.getAddCubePage)
router.post('/create', cubeController.postCreateCub)
module.exports = router