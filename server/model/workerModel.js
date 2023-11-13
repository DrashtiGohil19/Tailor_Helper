const mongoose = require('mongoose')
const validator = require('validator')

const workerSchema = new mongoose.Schema({

    workername: {
        type: String,
        unique: true,
    },
    mobilenu: {
        type: String,
        unique: true,
    },
})

const workerModel = mongoose.model('worker', workerSchema)

module.exports = workerModel