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
        type: String, default: ""
    },
    p_length: {
        type: String, default: ""
    },
    hip: {
        type: String, default: ""
    },
    round: {
        type: String, default: ""
    },
    thigh: {
        type: String, default: ""
    },
    knee: {
        type: String, default: ""
    },
    knee1: {
        type: String, default: ""
    },
    knee2: {
        type: String, default: ""
    },
    bottom: {
        type: String, default: ""
    }
})

const pentModel = mongoose.model('pent_measurement', pentSchema)

module.exports = pentModel