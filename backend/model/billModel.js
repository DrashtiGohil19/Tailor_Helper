const mongoose = require('mongoose')

const billSchema = new mongoose.Schema({

    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
    },
    shirt_qty: { type: Number },
    pent_qty: { type: Number },
    kurta_qty: { type: Number },
    shirt_amt: { type: Number },
    pent_amt: { type: Number },
    kurta_amt: { type: Number },
    total_amt: { type: Number },
    paid_amt: { type: Number },
    final_amt: { type: Number },
    bill_date: { type: Date },
    booking_date: { type: Date },
    delivery_date: { type: Date },
    actual_delivery_date: { type: Date },
    status: { type: Number, default: 0 }
    /*
        status - 0 ---- pending order
        status - 1 ---- completed order
        status - 2 ---- deliverd order
    */
})
billSchema.pre('save', function (next) {
    this.actual_delivery_date = this.get('delivery_date');
    next();
});

const billModel = mongoose.model('bill', billSchema)

module.exports = billModel