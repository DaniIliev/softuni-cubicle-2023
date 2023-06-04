
const Accessory = require('../models/accessory')



exports.getAll = () => Accessory.find()

exports.create = (accessoryData) => Accessory.create(accessoryData)