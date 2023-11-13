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
    pent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pent_measurement",
    },
    shirt_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shirt_measurement",
    },
})

const customerModel = mongoose.model('customer', customerSchema)

module.exports = customerModel