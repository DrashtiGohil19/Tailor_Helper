const mongoose = require('mongoose')
const validator = require('validator')

const workSchema = new mongoose.Schema({

    date: {
        type: Date,
        require: [true, "Date is require"],
    },
    shirt: {
        type: Number,
        require: [true, "Shirt ie require"],
    },
    pent: {
        type: Number,
        require: [true, "Pent is require"],
    },
    kurta: {
        type: Number,
        require: [true, "Kurta is require"],
    },
    withdrawal: {
        type: Number,
        require: [true, "Withdrawal is require"],
    },
    worker_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "worker",
    },

    total_shirt: {
        type: Number,
        require: [true, "Date is require"],
    },

    total_pent: {
        type: Number,
        require: [true, "Date is require"],
    },
    
    total_kurta: {
        type: Number,
        require: [true, "Date is require"],
    }

})

const workModel = mongoose.model('work', workSchema)

module.exports = workModel