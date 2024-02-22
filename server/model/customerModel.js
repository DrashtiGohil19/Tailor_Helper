const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    customername: {
        type: String,
    },
    mobilenu: {
        type: String,
    },
    bill_nu: {
        type: Number,
    },
    register_nu: {
        type: String,
        default: ""
    },
    pent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pent_measurement",
    },
    shirt_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shirt_measurement",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    }
})

const customerModel = mongoose.model('customer', customerSchema)

module.exports = customerModel