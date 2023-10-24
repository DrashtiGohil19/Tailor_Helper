const mongoose = require('mongoose')

const rateWorkerSchema = new mongoose.Schema({

    shirt_rate: { type: String,default:'0' },
    pent_rate: { type: String,default:'0' },
    kurta_rate: { type: String,default:'0' }

})

const rateWorkerModel = mongoose.model('rate_worker', rateWorkerSchema)

module.exports = rateWorkerModel