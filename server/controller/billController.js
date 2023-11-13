const billModel = require("../model/billModel")
const customerModel = require("../model/customerModel")
const moment = require('moment');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const QRCode = require('qrcode');


exports.add_bill = async (req, res) => {
    try {
        const { customer_id, bill_date, booking_date, delivery_date, shirt_qty, pent_qty, kurta_qty, shirt_amt, pent_amt, kurta_amt, total_amt, paid_amt, final_amt } = req.body
        var obj = {
            customer_id, bill_date, booking_date, delivery_date, shirt_qty, pent_qty, kurta_qty, shirt_amt, pent_amt, kurta_amt, total_amt, paid_amt, final_amt
        }
        var data = await billModel.create(obj)
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        })
    }
}

exports.get_billData = async (req, res) => {
    try {
        var mobilenu = req.query.mobilenu;
        var data = await customerModel.findOne({ mobilenu: mobilenu })
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        })
    }
}

// ---- order ----

exports.orders = async (req, res) => {
    try {
        var pendingData = await billModel.find({ status: 0 }).populate('customer_id')
        pendingData.sort((a, b) => new Date(a.delivery_date) - new Date(b.delivery_date));
        var completedData = await billModel.find({ status: 1 }).populate('customer_id')
        var deliveryData = await billModel.find({ status: 2 }).populate('customer_id')
        res.status(200).json({
            status: "success",
            pendingData, completedData, deliveryData
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message
        })
    }
}

// ---- update order status ----

exports.updateStatus = async (req, res) => {
    try {
        var id = req.params.id;
        var status = req.body.status;
        var updateStatus = await billModel.findByIdAndUpdate(id, { status: status }, { new: true })
        if (updateStatus.status === 2) {
            await billModel.findByIdAndUpdate(id, { actual_delivery_date: Date.now() })
        }
        res.status(200).json({
            status: "success",
            updateStatus
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message
        })
    }
}

// ---- delivery alert ----
exports.delivery_alert = async (req, res) => {
    try {
        const todayDate = moment().startOf('day').format('DD-MM-YYYY');

        const deliveryData = await billModel.aggregate([
            {
                $addFields: {
                    formattedDeliveryDate: {
                        $dateToString: { format: '%d-%m-%Y', date: '$delivery_date' }
                    }
                }
            },
            {
                $match: {
                    $or: [{ formattedDeliveryDate: todayDate, }, { formattedDeliveryDate: { $lt: todayDate } }],
                    status: { $ne: 2 }
                }
            }
        ]);

        const customerData = await customerModel.populate(deliveryData, { path: 'customer_id' })

        res.status(200).json({
            status: "success",
            deliveryData,
            customerData
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message
        });
    }
}