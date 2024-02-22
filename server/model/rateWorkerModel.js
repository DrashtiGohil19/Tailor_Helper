const mongoose = require('mongoose')

const rateWorkerSchema = new mongoose.Schema({

    shirt_rate: { type: String },
    pent_rate: { type: String },
    kurta_rate: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId }

})

const rateWorkerModel = mongoose.model('rate_worker', rateWorkerSchema)

module.exports = rateWorkerModel