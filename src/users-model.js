const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    passwrod: String
});

module.exports = mongoose.model('User', userSchema)