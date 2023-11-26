const mongoose = require('mongoose')

const shirtSchema = new mongoose.Schema({

    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
    },
    extra_s: {
        type: Array
    },
    s_length: {
        type: String, default: ""
    },
    shoulder: {
        type: String, default: ""
    },
    sleeve: {
        type: String, default: ""
    },
    sleeve1: {
        type: String, default: ""
    },
    sleeve2: {
        type: String, default: ""
    },
    chest: {
        type: String, default: ""
    },
    chest1: {
        type: String, default: ""
    },
    chest2: {
        type: String, default: ""
    },
    front: {
        type: String, default: ""
    },
    front1: {
        type: String, default: ""
    },
    front2: {
        type: String, default: ""
    },
    coller: {
        type: String, default: ""
    },
    cuff: {
        type: String, default: ""
    }

})

const shirtModel = mongoose.model('shirt_measurement', shirtSchema)

module.exports = shirtModel