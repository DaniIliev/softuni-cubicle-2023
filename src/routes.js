const router = require('express').Router();

const pageController = require('./cotrollers/pageController')

router.get('/', pageController.getHomePage)

module.exports = router