    const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String }
})

const loginModel = mongoose.model('login', loginSchema)

module.exports = loginModel