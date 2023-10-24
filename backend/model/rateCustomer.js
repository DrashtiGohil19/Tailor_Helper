const mongoose = require('mongoose')

const rateCustomerSchema = new mongoose.Schema({

    shirt_rate: { type: Number, default:0 },
    pent_rate: { type: Number , default:0 },
    kurta_rate: { type:Number , default:0 }

})

const rateCustomerModel = mongoose.model('rate_customer', rateCustomerSchema)

module.exports = rateCustomerModel