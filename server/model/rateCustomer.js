const mongoose = require('mongoose')

const rateCustomerSchema = new mongoose.Schema({

    shirt_rate: { type: Number },
    pent_rate: { type: Number },
    kurta_rate: { type: Number },
    userId: { type: mongoose.Schema.Types.ObjectId }

})

const rateCustomerModel = mongoose.model('rate_customer', rateCustomerSchema)

module.exports = rateCustomerModel