const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3
    },

    password: {
        type: String,
        required: true, 
        minLength: [4, 'Password is too short!']
    }
})

userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 10)
    
    this.password = hash 
})

userSchema.method('validatePassword', function(password){
    return bcrypt.compare(password, this.password)
})

const User = mongoose.model('User', userSchema)
module.exports = User