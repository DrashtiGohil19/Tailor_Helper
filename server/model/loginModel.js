const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    role: { type: String, default: "user" },
    isLoggedIn: { type: Boolean, default: true },
    shopName: { type: String }
})

const loginModel = mongoose.model('login', loginSchema)

module.exports = loginModel