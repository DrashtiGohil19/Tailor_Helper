const mongoose = require('mongoose')

const pentSchema = new mongoose.Schema({

    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
        require: true
    },
    extra_p: {
        type: Array
    },
    weist: {
        type: String,
    },
    p_length: {
        type: String
    },
    hip: {
        type: String
    },
    round: {
        type: String
    },
    thigh: {
        type: String
    },
    knee: {
        type: String
    },
    knee1: {
        type: String
    },
    knee2: {
        type: String
    },
    bottom: {
        type: String
    },
    pent_qty: {
        type: String
    }
})

const pentModel = mongoose.model('pent_measurement', pentSchema)

module.exports = pentModel