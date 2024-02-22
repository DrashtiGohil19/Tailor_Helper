const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({

    workername: {
        type: String,
        unique: true,
    },
    mobilenu: {
        type: String,
        unique: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    }
})

const workerModel = mongoose.model('worker', workerSchema)

module.exports = workerModel