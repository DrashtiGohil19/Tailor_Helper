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
        type: String
    },
    shoulder: {
        type: String
    },
    sleeve: {
        type: String
    },
    sleeve1: {
        type: String
    },
    sleeve2: {
        type: String
    },
    chest: {
        type: String
    },
    chest1: {
        type: String
    },
    chest2: {
        type: String
    },
    front: {
        type: String
    },
    front1: {
        type: String
    },
    front2: {
        type: String
    },
    coller: {
        type: String
    },
    cuff: {
        type: String
    },
    shirt_qty:{
        type:Number
    }

})

const shirtModel = mongoose.model('shirt_measurement', shirtSchema)

module.exports = shirtModel