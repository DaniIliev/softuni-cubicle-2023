
// const db = require('../db.json')
// const path = require('path')
// const fs = require('fs')

// class Cube {
//     constructor(name, description, imageUrl, difficultyLevel){
//         this.name = name;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.difficultyLevel = difficultyLevel
//     }

//     save() {
//         this.id = db.cubes[db.cubes.length - 1].id + 1;
//         db.cubes.push(this)
//         const jsonData = JSON.stringify(db, null, 2)
//         fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)
//     }
// }

// module.exports = Cube

const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    difficultyLevel: Number,
    imageUrl: String,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
})

const Cube = mongoose.model('Cube', cubeSchema)
module.exports = Cube